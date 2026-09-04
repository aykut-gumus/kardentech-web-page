import fs from 'fs';
import https from 'https';

const BASE_URL = 'https://www.kardentech.com';

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
        return { status: 0, text: '', error: e.message };
    }
}

async function run() {
    console.log('--- SEO SMOKE TEST ---');

    // 1. Robots.txt
    const robots = await fetchHtml('/robots.txt');
    console.log('ROBOTS.TXT: HTTP ' + robots.status);
    console.log('User-agent check: ' + robots.text.includes('User-agent: *'));
    console.log('Allow check: ' + (robots.text.includes('Allow: /') || !robots.text.includes('Disallow: /')));
    console.log('Sitemap URL check: ' + robots.text.includes('Sitemap: https://www.kardentech.com/sitemap.xml'));

    // 2. Sitemap.xml
    const sitemap = await fetchHtml('/sitemap.xml');
    console.log('SITEMAP: HTTP ' + sitemap.status);
    const urls = sitemap.text.match(/<loc>(.*?)<\/loc>/g) || [];
    console.log('Total URLs: ' + urls.length);
    const allHttpsWww = urls.every(u => u.includes('https://www.kardentech.com'));
    console.log('HTTPS & www only: ' + allHttpsWww);

    // 3 & 4. Canonical & Hreflang
    const paths = [
        '/', '/hakkimizda', '/hizmetlerimiz', '/elektrik-sistemleri', '/mekanik-sistemler', '/ince-isler', '/referanslar', '/iletisim',
        '/en', '/en/about', '/en/services',
        '/ru', '/ru/about', '/ru/services'
    ];
    let allCanonicalPass = true;
    let hreflangPass = true;
    
    for (const p of paths) {
        const page = await fetchHtml(p);
        if (page.status !== 200) allCanonicalPass = false;
        
        const hasTitle = /<title.*?>.*?<\/title>/i.test(page.text);
        const hasDesc = /<meta\s+name=["']description["']/i.test(page.text);
        const canonicalMatch = page.text.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
        const expectedCanonical = `${BASE_URL}${p === '/' ? '' : p}`;
        
        if (!hasTitle || !hasDesc || !canonicalMatch || canonicalMatch[1] !== expectedCanonical) {
            allCanonicalPass = false;
            console.log(`Failed canonical/meta on ${p}: Title=${hasTitle}, Desc=${hasDesc}, Canonical=${canonicalMatch ? canonicalMatch[1] : 'none'}, Expected=${expectedCanonical}`);
        }

        // Check hreflang on specific pages
        if (['/hakkimizda', '/en/about', '/ru/about'].includes(p)) {
            const hasTr = /<link\s+rel=["']alternate["']\s+hreflang=["']tr["']\s+href=["'].*?\/hakkimizda["']/i.test(page.text);
            const hasEn = /<link\s+rel=["']alternate["']\s+hreflang=["']en["']\s+href=["'].*?\/en\/about["']/i.test(page.text);
            const hasRu = /<link\s+rel=["']alternate["']\s+hreflang=["']ru["']\s+href=["'].*?\/ru\/about["']/i.test(page.text);
            if (!hasTr || !hasEn || !hasRu) hreflangPass = false;
        }
    }
    console.log('CANONICAL & META PASS: ' + allCanonicalPass);
    console.log('HREFLANG PASS: ' + hreflangPass);

    // 5 & 6. JSON-LD and NAP
    const homePage = await fetchHtml('/');
    const jsonLdMatch = homePage.text.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i);
    let jsonLdPass = false;
    let napPass = false;
    if (jsonLdMatch) {
        try {
            const data = JSON.parse(jsonLdMatch[1]);
            jsonLdPass = true; // basic pass
        } catch(e) {
            console.log('JSON parse error: ' + e.message);
        }
    }
    const hasPhone = homePage.text.includes('+90 532 060 90 72');
    const hasAddress = homePage.text.includes('Küçük Sanayi Sitesi'); // partial check
    if (hasPhone && hasAddress) napPass = true;
    console.log('JSON-LD PASS: ' + jsonLdPass);
    console.log('NAP PASS: ' + napPass);

    // 7. Noindex check
    const noindexMatch = homePage.text.match(/<meta\s+name=["']robots["']\s+content=["'][^"']*noindex/i);
    console.log('INDEXABILITY (noindex found): ' + !!noindexMatch);

    // 8. Placeholders
    const p1 = await fetchHtml('/teknik-danismanlik');
    const p2 = await fetchHtml('/ges-iklimsa-bayilik');
    console.log('Placeholder /teknik-danismanlik HTTP 200: ' + (p1.status === 200));
    console.log('Placeholder /ges-iklimsa-bayilik HTTP 200: ' + (p2.status === 200));

    // 9. Favicon
    const faviconHtml = homePage.text.match(/<link\s+rel=["'](?:shortcut )?icon["']\s+href=["'](.*?)["']/i);
    let faviconPass = false;
    if (faviconHtml) {
        const f = await fetchHtml(faviconHtml[1]);
        if (f.status === 200) faviconPass = true;
    }
    console.log('FAVICON PASS: ' + faviconPass);

    // 11. HTTPS/WWW
    const r1 = await fetchHtml('http://kardentech.com');
    const r2 = await fetchHtml('https://kardentech.com');
    console.log('HTTP to HTTPS/WWW Redirects: ' + ((r1.status >= 300 && r1.status < 400) && (r2.status >= 300 && r2.status < 400)));

    // 12. 404
    const notFound = await fetchHtml('/this-page-does-not-exist-12345');
    console.log('404 CHECK: HTTP ' + notFound.status);

}

run();
