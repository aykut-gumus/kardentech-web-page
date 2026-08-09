import { Metadata } from 'next';
import { Locale } from './types';
import { routeMap } from './routes';
import { getDictionary } from './index';

// Base URL of the application
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kardentech.com';

type MetadataProps = {
  locale: Locale;
  pageId: keyof typeof routeMap | 'dynamic-reference';
  dynamicTitle?: string;
  dynamicDesc?: string;
  dynamicSlug?: string;
};

export const getLocalizedMetadata = ({
  locale,
  pageId,
  dynamicTitle,
  dynamicDesc,
  dynamicSlug,
}: MetadataProps): Metadata => {
  const dict = getDictionary(locale);

  // Generate title and description
  let title = dict.nav.home;
  let description = dict.about.slogan;

  if (dynamicTitle && dynamicDesc) {
    title = dynamicTitle;
    description = dynamicDesc;
  } else if (pageId !== 'home' && pageId !== 'dynamic-reference') {
    // Map pageId to title logic (simplified)
    if (pageId === 'about') {
      title = dict.nav.about;
      description = dict.about.intro.p1;
    } else if (pageId === 'services') {
      title = dict.nav.services;
      description = dict.services.approachTitle;
    } else if (pageId === 'electrical') {
      title = dict.nav.serviceDropdown.electrical;
      description = dict.services.categories.electrical.desc;
    } else if (pageId === 'mechanical') {
      title = dict.nav.serviceDropdown.mechanical;
      description = dict.services.categories.mechanical.desc;
    } else if (pageId === 'finishing') {
      title = dict.nav.serviceDropdown.finishing;
      description = dict.services.categories.finishing.desc;
    } else if (pageId === 'references') {
      title = dict.nav.references;
    } else if (pageId === 'contact') {
      title = dict.nav.contact;
      description = dict.contact.bottom.desc;
    }
  }

  const brandName = 'Kardentech';
  const fullTitle = pageId === 'home' 
    ? `${title} | Bodrum` 
    : `${title} | ${brandName} Bodrum`;

  // Generate hreflang / alternates
  let trPath = '/';
  let enPath = '/en';
  let ruPath = '/ru';

  if (pageId === 'dynamic-reference' && dynamicSlug) {
    trPath = `/referanslar/${dynamicSlug}`;
    enPath = `/en/references/${dynamicSlug}`;
    ruPath = `/ru/references/${dynamicSlug}`;
  } else if (pageId !== 'dynamic-reference') {
    trPath = routeMap[pageId].tr;
    enPath = routeMap[pageId].en;
    ruPath = routeMap[pageId].ru;
  }

  return {
    title: fullTitle,
    description: description,
    alternates: {
      canonical: `${siteUrl}${locale === 'tr' ? trPath : locale === 'en' ? enPath : ruPath}`,
      languages: {
        'tr': `${siteUrl}${trPath}`,
        'en': `${siteUrl}${enPath}`,
        'ru': `${siteUrl}${ruPath}`,
        'x-default': `${siteUrl}${trPath}`,
      },
    },
  };
};
