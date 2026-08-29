export const SITE_URL = 'https://www.kardentech.com';
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': ORGANIZATION_ID,
    name: 'KardenTech Mühendislik',
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/kardentech-logo-navbar-hi-res.png`,
    telephone: '+90 532 060 90 72',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dirmil Mah. 6698 Sk. Küçük Sanayi Sitesi No: 12/13',
      addressLocality: 'Yalıkavak, Bodrum',
      addressRegion: 'Muğla',
      addressCountry: 'TR',
    },
    sameAs: ['https://instagram.com/kardentech'],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'KardenTech Mühendislik',
    publisher: {
      '@id': ORGANIZATION_ID,
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.item}`,
    })),
  };
}
