import { Locale } from '@/i18n/types';

export type ProjectCategory = 'Konut' | 'Otel' | 'Ticari / Showroom' | 'Endüstriyel';

export type LocalizedText = Record<Locale, string>;

export type Project = {
  id: string;
  slug: string;
  title: LocalizedText;
  category: ProjectCategory;
  coverImage: string;
  images: string[];
  summary?: LocalizedText;
  location?: LocalizedText;
  city: string;
};

export const projects: Project[] = [
  {
    id: 'quadro-villalari',
    slug: 'quadro-villalari',
    title: {
      tr: 'Quadro Villaları',
      en: 'Quadro Villas',
      ru: 'Виллы Quadro'
    },
    category: 'Konut',
    city: 'Bodrum',
    coverImage: '/images/projects/quadro-villalari/01.jpg',
    images: [
      '/images/projects/quadro-villalari/01.jpg',
      '/images/projects/quadro-villalari/02.jpg',
      '/images/projects/quadro-villalari/03.jpg',
      '/images/projects/quadro-villalari/04.jpg',
      '/images/projects/quadro-villalari/05.jpg',
      '/images/projects/quadro-villalari/06.jpg',
      '/images/projects/quadro-villalari/07.jpg',
    ],
    summary: {
      tr: 'Kardentech Mühendislik’in inşaat, ince işler, elektrik ve mekanik işlerini üstlendiği Yalıkavak Quadro Villaları projesinden seçkiler.',
      en: 'Selections from the Yalıkavak Quadro Villas project, where Kardentech Engineering undertook the construction, finishing, electrical, and mechanical works.',
      ru: 'Избранное из проекта вилл Quadro в Ялыкаваке, где компания Kardentech Engineering выполнила строительные, отделочные, электрические и механические работы.'
    },
  },
  {
    id: 'mercedes-benz-hasmer',
    slug: 'mercedes-benz-hasmer',
    title: {
      tr: 'Mercedes-Benz Hasmer',
      en: 'Mercedes-Benz Hasmer',
      ru: 'Mercedes-Benz Hasmer'
    },
    category: 'Ticari / Showroom',
    city: 'Antalya',
    coverImage: '/images/projects/mercedes-benz-hasmer/01.jpg',
    images: [
      '/images/projects/mercedes-benz-hasmer/01.jpg',
      '/images/projects/mercedes-benz-hasmer/02.jpg',
      '/images/projects/mercedes-benz-hasmer/03.jpg',
      '/images/projects/mercedes-benz-hasmer/04.jpg',
      '/images/projects/mercedes-benz-hasmer/05.jpg',
      '/images/projects/mercedes-benz-hasmer/06.jpg',
      '/images/projects/mercedes-benz-hasmer/07.jpg',
      '/images/projects/mercedes-benz-hasmer/08.jpg',
      '/images/projects/mercedes-benz-hasmer/09.jpg',
    ],
    summary: {
      tr: 'Kardentech Mühendislik’in ince işler, elektrik ve mekanik işlerini üstlendiği Mercedes-Benz Hasmer Antalya projesinden seçkiler.',
      en: 'Selections from the Mercedes-Benz Hasmer Antalya project, where Kardentech Engineering undertook the finishing, electrical, and mechanical works.',
      ru: 'Избранное из проекта Mercedes-Benz Hasmer Antalya, где компания Kardentech Engineering выполнила отделочные, электрические и механические работы.'
    },
  },
  {
    id: 'suyali-yalikavak',
    slug: 'suyali-yalikavak',
    title: {
      tr: 'Suyalı Yalıkavak C4 Binası',
      en: 'Suyalı Yalıkavak C4 Building',
      ru: 'Здание C4 Suyalı Yalıkavak'
    },
    category: 'Konut',
    city: 'Bodrum',
    coverImage: '/images/projects/suyali-yalikavak/02.jpg',
    images: [
      '/images/projects/suyali-yalikavak/01.jpg',
      '/images/projects/suyali-yalikavak/03.jpg',
      '/images/projects/suyali-yalikavak/04.jpg',
      '/images/projects/suyali-yalikavak/05.jpg',
      '/images/projects/suyali-yalikavak/06.jpg',
    ],
    summary: {
      tr: 'Kardentech Mühendislik’in ince işler, elektrik ve mekanik işlerini üstlendiği Suyalı Yalıkavak C4 Binası projesinden seçkiler.',
      en: 'Selections from the Suyalı Yalıkavak C4 Building project, where Kardentech Engineering undertook the finishing, electrical, and mechanical works.',
      ru: 'Избранное из проекта здания C4 Suyalı Yalıkavak, где компания Kardentech Engineering выполнила отделочные, электрические и механические работы.'
    },
  },
  {
    id: 'y-uzun-homes',
    slug: 'y-uzun-homes',
    title: {
      tr: 'Y. Uzun Home\'s',
      en: 'Y. Uzun Home\'s',
      ru: 'Y. Uzun Home\'s'
    },
    category: 'Konut',
    city: 'Bodrum',
    coverImage: '/images/projects/y-uzun-homes/01.jpg',
    images: [
      '/images/projects/y-uzun-homes/01.jpg',
      '/images/projects/y-uzun-homes/02.jpg',
      '/images/projects/y-uzun-homes/03.jpg',
      '/images/projects/y-uzun-homes/04.jpg',
    ],
    summary: {
      tr: 'Kardentech Mühendislik’in ince işler, elektrik ve mekanik işlerini üstlendiği Y. Uzun Home’s projesinden seçkiler.',
      en: 'Selections from the Y. Uzun Home\'s project, where Kardentech Engineering undertook the finishing, electrical, and mechanical works.',
      ru: 'Избранное из проекта Y. Uzun Home\'s, где компания Kardentech Engineering выполнила отделочные, электрические и механические работы.'
    },
  },
  {
    id: 'baia-bodrum-hotel',
    slug: 'baia-bodrum-hotel',
    title: {
      tr: 'Baia Bodrum Hotel Renovasyonu',
      en: 'Baia Bodrum Hotel Renovation',
      ru: 'Реновация Отеля Baia Bodrum'
    },
    category: 'Otel',
    city: 'Bodrum',
    coverImage: '/images/projects/baia-bodrum-hotel/01.jpg',
    images: [
      '/images/projects/baia-bodrum-hotel/01.jpg',
      '/images/projects/baia-bodrum-hotel/02.jpg',
      '/images/projects/baia-bodrum-hotel/03.jpg',
      '/images/projects/baia-bodrum-hotel/04.jpg',
      '/images/projects/baia-bodrum-hotel/05.jpg',
      '/images/projects/baia-bodrum-hotel/06.jpg',
      '/images/projects/baia-bodrum-hotel/07.jpg',
    ],
    summary: {
      tr: 'Kardentech Mühendislik’in elektrik işlerini üstlendiği Baia Bodrum Hotel Renovasyonu projesinden seçkiler.',
      en: 'Selections from the Baia Bodrum Hotel Renovation project, where Kardentech Engineering undertook the electrical works.',
      ru: 'Избранное из проекта реновации отеля Baia Bodrum, где компания Kardentech Engineering выполнила электромонтажные работы.'
    },
  },
  {
    id: 'sekerpinar-fabrikasi',
    slug: 'sekerpinar-fabrikasi',
    title: {
      tr: 'Şekerpınar Fabrikası',
      en: 'Şekerpınar Factory',
      ru: 'Фабрика Şekerpınar'
    },
    category: 'Endüstriyel',
    city: 'Kocaeli',
    coverImage: '/images/projects/sekerpinar-fabrikasi/01.jpg',
    images: [
      '/images/projects/sekerpinar-fabrikasi/01.jpg',
      '/images/projects/sekerpinar-fabrikasi/02.jpg',
      '/images/projects/sekerpinar-fabrikasi/03.jpg',
    ],
    summary: {
      tr: 'Kardentech Mühendislik’in elektrik ve mekanik işlerini üstlendiği Şekerpınar Trafo Parçaları Üretim Fabrikası projesinden seçkiler.',
      en: 'Selections from the Şekerpınar Transformer Parts Production Factory project, where Kardentech Engineering undertook the electrical and mechanical works.',
      ru: 'Избранное из проекта завода по производству трансформаторных деталей Şekerpınar, где компания Kardentech Engineering выполнила электрические и механические работы.'
    },
  },
];
