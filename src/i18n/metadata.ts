import { Metadata } from 'next';
import { Locale } from './types';
import { routeMap } from './routes';

// Base URL of the application
const siteUrl = 'https://www.kardentech.com';

type PageId = keyof typeof routeMap | 'dynamic-reference';

type MetadataProps = {
  locale: Locale;
  pageId: PageId;
  dynamicTitle?: string;
  dynamicDesc?: string;
  dynamicSlug?: string;
};

type SeoData = {
  [key: string]: {
    tr: { title: string; desc: string };
    en: { title: string; desc: string };
    ru: { title: string; desc: string };
  };
};

const seoData: SeoData = {
  home: {
    tr: { title: 'KardenTech Mühendislik | Bodrum Mühendislik', desc: 'KardenTech Mühendislik, Bodrum merkezli elektrik, mekanik, renovasyon ve proje danışmanlığı hizmetleri sunmaktadır.' },
    en: { title: 'KardenTech Engineering | Bodrum Engineering Company', desc: 'KardenTech Engineering, based in Bodrum, provides electrical, mechanical, renovation, and project consultancy services.' },
    ru: { title: 'KardenTech Mühendislik | Инжиниринговая компания в Бодруме', desc: 'KardenTech Mühendislik, базирующаяся в Бодруме, предоставляет услуги в области электрики, механики, ремонта и проектного консалтинга.' },
  },
  about: {
    tr: { title: 'Hakkımızda | KardenTech Mühendislik', desc: 'KardenTech Mühendislik\'in kuruluş hikayesi, vizyonu, misyonu ve Bodrum ile çevresinde sunduğu mühendislik vizyonu hakkında bilgi edinin.' },
    en: { title: 'About Us | KardenTech Engineering', desc: 'Learn about KardenTech Engineering\'s founding story, vision, mission, and the engineering vision it offers in and around Bodrum.' },
    ru: { title: 'О компании | KardenTech Mühendislik', desc: 'Узнайте об истории создания, видении, миссии KardenTech Mühendislik и инженерных решениях, которые компания предлагает в Бодруме и его окрестностях.' },
  },
  services: {
    tr: { title: 'Hizmetlerimiz | KardenTech Mühendislik', desc: 'KardenTech Mühendislik; Bodrum\'da elektrik sistemleri, mekanik sistemler, ince işler ve teknik danışmanlık alanlarında profesyonel hizmet vermektedir.' },
    en: { title: 'Services | KardenTech Engineering', desc: 'KardenTech Engineering provides professional services in Bodrum in the fields of electrical systems, mechanical systems, finishing works, and technical consultancy.' },
    ru: { title: 'Услуги | KardenTech Mühendislik', desc: 'KardenTech Mühendislik предоставляет профессиональные услуги в Бодруме в области электрических и механических систем, отделочных работ и технического консалтинга.' },
  },
  electrical: {
    tr: { title: 'Elektrik Sistemleri | KardenTech Mühendislik', desc: 'Bodrum merkezli KardenTech Mühendislik\'in elektrik sistemleri ve tesisat uygulamaları hakkında bilgi alın.' },
    en: { title: 'Electrical Systems | KardenTech Engineering', desc: 'Get information about the electrical systems and installation applications of Bodrum-based KardenTech Engineering.' },
    ru: { title: 'Электрические системы | KardenTech Mühendislik', desc: 'Получите информацию об электрических системах и электромонтажных работах компании KardenTech Mühendislik в Бодруме.' },
  },
  mechanical: {
    tr: { title: 'Mekanik Sistemler | KardenTech Mühendislik', desc: 'Bodrum merkezli KardenTech Mühendislik\'in mekanik sistemler ve tesisat uygulamalarına ilişkin hizmetlerini inceleyin.' },
    en: { title: 'Mechanical Systems | KardenTech Engineering', desc: 'Explore the mechanical systems and installation services provided by Bodrum-based KardenTech Engineering.' },
    ru: { title: 'Механические системы | KardenTech Mühendislik', desc: 'Изучите услуги по механическим системам и монтажу, предоставляемые компанией KardenTech Mühendislik в Бодруме.' },
  },
  finishing: {
    tr: { title: 'İnce İşler | KardenTech Mühendislik', desc: 'KardenTech Mühendislik, Bodrum\'da konut ve ticari alanlar için yüksek kaliteli ince işler, renovasyon ve anahtar teslim uygulamalar sunar.' },
    en: { title: 'Finishing Works | KardenTech Engineering', desc: 'KardenTech Engineering offers high-quality finishing works, renovation, and turnkey applications for residential and commercial spaces in Bodrum.' },
    ru: { title: 'Отделочные работы | KardenTech Mühendislik', desc: 'KardenTech Mühendislik предлагает высококачественные отделочные работы, ремонт и решения под ключ для жилых и коммерческих помещений в Бодруме.' },
  },
  technicalConsultancy: {
    tr: { title: 'Teknik Danışmanlık | KardenTech Mühendislik', desc: 'Teknik danışmanlık ve proje yönetimi hizmetlerimiz için detaylı içeriklerimiz hazırlanmaktadır.' },
    en: { title: 'Technical Consultancy | KardenTech Engineering', desc: 'Detailed content and project examples for our technical consultancy services are currently being prepared and will be available soon.' },
    ru: { title: 'Технический консалтинг | KardenTech Mühendislik', desc: 'Подробная информация и примеры проектов по услугам технического консалтинга находятся в стадии подготовки и скоро будут доступны.' },
  },
  solarEnergy: {
    tr: { title: 'GES / İklimsa Bayilik | KardenTech Mühendislik', desc: 'Güneş enerjisi sistemleri (GES) ve İklimsa bayilik hizmetlerimize ilişkin detaylı içeriklerimiz hazırlanmaktadır.' },
    en: { title: 'Solar Energy / İklimsa Dealership | KardenTech Engineering', desc: 'Detailed content and project examples for our solar energy and İklimsa dealership services are currently being prepared and will be available soon.' },
    ru: { title: 'Солнечная энергия / дилер İklimsa | KardenTech Mühendislik', desc: 'Подробная информация и примеры проектов по услугам солнечной энергетики и дилерству İklimsa находятся в стадии подготовки и скоро будут доступны.' },
  },
  references: {
    tr: { title: 'Referanslar | KardenTech Mühendislik', desc: 'KardenTech Mühendislik\'in Bodrum ve çevresinde başarıyla tamamladığı seçkin mühendislik, renovasyon ve tesisat projelerini inceleyin.' },
    en: { title: 'References | KardenTech Engineering', desc: 'Explore the distinguished engineering, renovation, and installation projects successfully completed by KardenTech Engineering in and around Bodrum.' },
    ru: { title: 'Реализованные проекты | KardenTech Mühendislik', desc: 'Изучите выдающиеся инженерные, ремонтные и монтажные проекты, успешно реализованные компанией KardenTech Mühendislik в Бодруме и его окрестностях.' },
  },
  contact: {
    tr: { title: 'İletişim | KardenTech Mühendislik', desc: 'Bodrum KardenTech Mühendislik ile iletişime geçin. Proje talepleriniz, keşif ve danışmanlık hizmetleri için adres ve telefon bilgilerimiz.' },
    en: { title: 'Contact | KardenTech Engineering', desc: 'Contact Bodrum KardenTech Engineering. Our address and phone information for project requests, site visits, and consultancy services.' },
    ru: { title: 'Контакты | KardenTech Mühendislik', desc: 'Свяжитесь с KardenTech Mühendislik в Бодруме. Наш адрес и телефон для запросов по проектам, выездов на объекты и консультационных услуг.' },
  }
};

export const getLocalizedMetadata = ({
  locale,
  pageId,
  dynamicTitle,
  dynamicDesc,
  dynamicSlug,
}: MetadataProps): Metadata => {
  let title = '';
  let description = '';

  if (pageId === 'dynamic-reference') {
    title = dynamicTitle || '';
    description = dynamicDesc || '';
  } else {
    title = seoData[pageId]?.[locale]?.title || '';
    description = seoData[pageId]?.[locale]?.desc || '';
  }

  let trPath = '/';
  let enPath = '/en';
  let ruPath = '/ru';

  if (pageId === 'dynamic-reference' && dynamicSlug) {
    trPath = `/referanslar/${dynamicSlug}`;
    enPath = `/en/references/${dynamicSlug}`;
    ruPath = `/ru/references/${dynamicSlug}`;
  } else if (pageId !== 'dynamic-reference') {
    trPath = routeMap[pageId]?.tr || '/';
    enPath = routeMap[pageId]?.en || '/en';
    ruPath = routeMap[pageId]?.ru || '/ru';
  }

  const currentPath = locale === 'tr' ? trPath : (locale === 'en' ? enPath : ruPath);
  const canonicalUrl = `${siteUrl}${currentPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'tr': `${siteUrl}${trPath}`,
        'en': `${siteUrl}${enPath}`,
        'ru': `${siteUrl}${ruPath}`,
        'x-default': `${siteUrl}${trPath}`,
      },
    },
  };
};
