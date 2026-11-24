const BASE_URL = 'https://www.kardentech.com.tr';

async function fetchHtml(urlPath, options = {}) {
    const url = urlPath.startsWith('http') ? urlPath : `${BASE_URL}${urlPath}`;
    try {
        const res = await fetch(url, { redirect: 'manual', ...options });
        const text = await res.text();
        return {
            status: res.status,
            headers: res.headers,
            text,
            url: res.url || url
        };
    } catch (e) {
        return { status: 0, headers: new Headers(), text: '', error: e.message };
    }
}

function getMetaContent(html, attrName, attrValue) {
    const re1 = new RegExp(`<meta\\s+[^>]*${attrName}=["']${attrValue}["'][^>]*content=["']([^"']*)["'][^>]*>`, 'i');
    const re2 = new RegExp(`<meta\\s+[^>]*content=["']([^"']*)["'][^>]*${attrName}=["']${attrValue}["'][^>]*>`, 'i');
    const match = html.match(re1) || html.match(re2);
    return match ? match[1] : null;
}

async function run() {
    console.log('--- SEO SMOKE TEST ---');
    console.log(`Target Base URL: ${BASE_URL}`);

    // 1. Robots.txt
    const robots = await fetchHtml('/robots.txt');
    console.log('ROBOTS.TXT: HTTP ' + robots.status);
    console.log('User-agent check: ' + robots.text.includes('User-agent: *'));
    console.log('Allow check: ' + (robots.text.includes('Allow: /') || !robots.text.includes('Disallow: /')));
    console.log('Sitemap URL check: ' + robots.text.includes(`Sitemap: ${BASE_URL}/sitemap.xml`));

    // 2. Sitemap.xml
    const sitemap = await fetchHtml('/sitemap.xml');
    console.log('SITEMAP: HTTP ' + sitemap.status);
    const locMatches = [...sitemap.text.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
    console.log('Total URLs: ' + locMatches.length);
    const allNewDomain = locMatches.length > 0 && locMatches.every(u => u.startsWith(`${BASE_URL}/`));
    const allTrailingSlash = locMatches.length > 0 && locMatches.every(u => u.endsWith('/'));
    console.log('New domain (HTTPS & www.kardentech.com.tr) only: ' + allNewDomain);
    console.log('Trailing slash consistent: ' + allTrailingSlash);

    // 3, 4 & 5. Canonical, Hreflang, Open Graph & Twitter
    const paths = [
        '/', '/hakkimizda/', '/hizmetlerimiz/', '/elektrik-sistemleri/', '/mekanik-sistemler/', '/ince-isler/', '/referanslar/', '/iletisim/',
        '/en/', '/en/about/', '/en/services/',
        '/ru/', '/ru/about/', '/ru/services/'
    ];
    let allCanonicalPass = true;
    let hreflangPass = true;
    let openGraphPass = true;

    for (const p of paths) {
        const page = await fetchHtml(p);
        if (page.status !== 200) allCanonicalPass = false;

        const hasTitle = /<title.*?>.*?<\/title>/i.test(page.text);
        const hasDesc = /<meta\s+name=["']description["']/i.test(page.text);
        const canonicalMatch = page.text.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
        const expectedCanonical = `${BASE_URL}${p}`;

        if (!hasTitle || !hasDesc || !canonicalMatch || canonicalMatch[1] !== expectedCanonical) {
            allCanonicalPass = false;
            console.log(`Failed canonical/meta on ${p}: Status=${page.status}, Title=${hasTitle}, Desc=${hasDesc}, Canonical=${canonicalMatch ? canonicalMatch[1] : 'none'}, Expected=${expectedCanonical}`);
        }

        // Open Graph & Twitter checks
        const ogTitle = getMetaContent(page.text, 'property', 'og:title');
        const ogDesc = getMetaContent(page.text, 'property', 'og:description');
        const ogUrl = getMetaContent(page.text, 'property', 'og:url');
        const ogImage = getMetaContent(page.text, 'property', 'og:image');
        const twitterCard = getMetaContent(page.text, 'name', 'twitter:card');

        if (!ogTitle || !ogDesc || ogUrl !== expectedCanonical || !ogImage || !ogImage.startsWith(`${BASE_URL}/`) || !twitterCard) {
            openGraphPass = false;
            console.log(`Failed OG/Twitter on ${p}: og:title=${!!ogTitle}, og:desc=${!!ogDesc}, og:url=${ogUrl}, og:image=${ogImage}, twitter:card=${twitterCard}`);
        }

        // Check hreflang on specific pages
        if (['/hakkimizda/', '/en/about/', '/ru/about/'].includes(p)) {
            const hasTr = page.text.includes(`hrefLang="tr"`) || /<link\s+rel=["']alternate["']\s+hreflang=["']tr["']\s+href=["']https:\/\/www\.kardentech\.com\.tr\/hakkimizda\/["']/i.test(page.text);
            const hasEn = /<link\s+rel=["']alternate["']\s+hreflang=["']en["']\s+href=["']https:\/\/www\.kardentech\.com\.tr\/en\/about\/["']/i.test(page.text);
            const hasRu = /<link\s+rel=["']alternate["']\s+hreflang=["']ru["']\s+href=["']https:\/\/www\.kardentech\.com\.tr\/ru\/about\/["']/i.test(page.text);
            const hasXDefault = /<link\s+rel=["']alternate["']\s+hreflang=["']x-default["']\s+href=["']https:\/\/www\.kardentech\.com\.tr\/hakkimizda\/["']/i.test(page.text);
            if (!hasTr || !hasEn || !hasRu || !hasXDefault) {
                hreflangPass = false;
                console.log(`Failed hreflang on ${p}: tr=${hasTr}, en=${hasEn}, ru=${hasRu}, x-default=${hasXDefault}`);
            }
        }
    }
    console.log('CANONICAL & META PASS: ' + allCanonicalPass);
    console.log('OPEN GRAPH & TWITTER PASS: ' + openGraphPass);
    console.log('HREFLANG PASS: ' + hreflangPass);

    // 6. JSON-LD and NAP
    const homePage = await fetchHtml('/');
    const jsonLdMatch = homePage.text.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
    let jsonLdPass = false;
    let napPass = false;
    if (jsonLdMatch) {
        try {
            const data = JSON.parse(jsonLdMatch[1]);
            const serialized = JSON.stringify(data);
            jsonLdPass = serialized.includes(BASE_URL) && !serialized.includes('https://www.kardentech.com"');
        } catch (e) {
            console.log('JSON parse error: ' + e.message);
        }
    }
    const hasPhone = homePage.text.includes('+90 532 060 90 72');
    const hasAddress = homePage.text.includes('Küçük Sanayi Sitesi');
    if (hasPhone && hasAddress) napPass = true;
    console.log('JSON-LD PASS: ' + jsonLdPass);
    console.log('NAP PASS: ' + napPass);

    // 7. Noindex check
    const noindexMatch = homePage.text.match(/<meta\s+name=["']robots["']\s+content=["'][^"']*noindex/i);
    console.log('INDEXABILITY (noindex found): ' + !!noindexMatch);

    // 8. Placeholders
    const p1 = await fetchHtml('/teknik-danismanlik/');
    const p2 = await fetchHtml('/ges-iklimsa-bayilik/');
    console.log('Placeholder /teknik-danismanlik/ HTTP 200: ' + (p1.status === 200));
    console.log('Placeholder /ges-iklimsa-bayilik/ HTTP 200: ' + (p2.status === 200));

    // 9. Favicon
    const faviconHtml = homePage.text.match(/<link\s+rel=["'](?:shortcut )?icon["']\s+href=["'](.*?)["']/i);
    let faviconPass = false;
    if (faviconHtml) {
        const f = await fetchHtml(faviconHtml[1]);
        if (f.status === 200) faviconPass = true;
    }
    console.log('FAVICON PASS: ' + faviconPass);

    // 10. 301 Redirects (HTTPS/WWW & Old .com -> New .com.tr)
    const redirectChecks = [
        'http://kardentech.com.tr',
        'https://kardentech.com.tr',
        'http://kardentech.com',
        'https://kardentech.com',
        'https://www.kardentech.com',
    ];
    for (const sourceUrl of redirectChecks) {
        const res = await fetchHtml(sourceUrl);
        const location = res.headers.get('location') || '';
        const is301ToTarget = res.status === 301 && location.startsWith(BASE_URL);
        console.log(`301 Redirect ${sourceUrl} -> ${location || 'none'} (HTTP ${res.status}): ${is301ToTarget}`);
    }

    // 11. 404
    const notFound = await fetchHtml('/this-page-does-not-exist-12345/');
    console.log('404 CHECK: HTTP ' + notFound.status);
}

run();
