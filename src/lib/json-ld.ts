import { Locale } from '@/i18n/types';
import { SITE_URL, toAbsoluteUrl, toAssetUrl } from '@/lib/site';

export { SITE_URL };
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const ORGANIZATION_NAMES: Record<Locale, string> = {
  tr: 'KardenTech Mühendislik',
  en: 'KardenTech Engineering',
  ru: 'KardenTech Инжиниринг',
};

const LANGUAGE_TAGS: Record<Locale, string> = {
  tr: 'tr-TR',
  en: 'en-US',
  ru: 'ru-RU',
};

const LOCALE_HOME_PATHS: Record<Locale, string> = {
  tr: '/',
  en: '/en',
  ru: '/ru',
};

export function getLocalBusinessSchema(locale: Locale = 'tr') {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': ORGANIZATION_ID,
    name: ORGANIZATION_NAMES[locale],
    url: toAbsoluteUrl(LOCALE_HOME_PATHS[locale]),
    logo: toAssetUrl('/images/brand/kardentech-logo-navbar-hi-res.png'),
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

export function getWebSiteSchema(locale: Locale = 'tr') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: toAbsoluteUrl(LOCALE_HOME_PATHS[locale]),
    name: ORGANIZATION_NAMES[locale],
    inLanguage: LANGUAGE_TAGS[locale],
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
      item: toAbsoluteUrl(item.item),
    })),
  };
}
