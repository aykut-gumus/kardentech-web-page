import { Locale } from './types';

// Map of canonical page IDs to their localized pathnames
export const routeMap: Record<string, Record<Locale, string>> = {
  home: {
    tr: '/',
    en: '/en',
    ru: '/ru',
  },
  about: {
    tr: '/hakkimizda',
    en: '/en/about',
    ru: '/ru/about',
  },
  services: {
    tr: '/hizmetlerimiz',
    en: '/en/services',
    ru: '/ru/services',
  },
  electrical: {
    tr: '/elektrik-sistemleri',
    en: '/en/services/electrical-systems',
    ru: '/ru/services/electrical-systems',
  },
  mechanical: {
    tr: '/mekanik-sistemler',
    en: '/en/services/mechanical-systems',
    ru: '/ru/services/mechanical-systems',
  },
  finishing: {
    tr: '/ince-isler',
    en: '/en/services/finishing-works',
    ru: '/ru/services/finishing-works',
  },
  references: {
    tr: '/referanslar',
    en: '/en/references',
    ru: '/ru/references',
  },
  contact: {
    tr: '/iletisim',
    en: '/en/contact',
    ru: '/ru/contact',
  },
};

// Returns the page ID based on the current pathname
export const getPageIdFromPath = (pathname: string): string => {
  // Check for dynamic project details (references/[slug])
  // TR: /referanslar/[slug]
  // EN: /en/references/[slug]
  // RU: /ru/references/[slug]
  const isDynamicReference = (path: string) => 
    path.startsWith('/referanslar/') || 
    path.startsWith('/en/references/') || 
    path.startsWith('/ru/references/');

  if (isDynamicReference(pathname)) {
    return 'dynamic-reference';
  }

  for (const [pageId, paths] of Object.entries(routeMap)) {
    if (Object.values(paths).includes(pathname)) {
      return pageId;
    }
  }
  return 'home'; // default fallback
};

export const getLocalizedUrl = (pathname: string, targetLocale: Locale): string => {
  const pageId = getPageIdFromPath(pathname);
  
  if (pageId === 'dynamic-reference') {
    // Extract slug
    const segments = pathname.split('/');
    const slug = segments[segments.length - 1];
    if (targetLocale === 'tr') return `/referanslar/${slug}`;
    if (targetLocale === 'en') return `/en/references/${slug}`;
    if (targetLocale === 'ru') return `/ru/references/${slug}`;
  }

  return routeMap[pageId][targetLocale] || '/';
};
