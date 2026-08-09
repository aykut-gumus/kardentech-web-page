export type ProjectCategory = 'Konut' | 'Otel' | 'Ticari / Showroom' | 'Endüstriyel';

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  coverImage: string;
  images: string[];
  summary?: string;
  location?: string;
};

export const projects: Project[] = [
  {
    id: 'quadro-villalari',
    slug: 'quadro-villalari',
    title: 'Quadro Villaları',
    category: 'Konut',
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
    summary: 'Kardentech Mühendislik\'in görev aldığı Quadro Villaları projesinden seçkiler.',
  },
  {
    id: 'mercedes-benz-hasmer',
    slug: 'mercedes-benz-hasmer',
    title: 'Mercedes Benz Hasmer',
    category: 'Ticari / Showroom',
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
    summary: 'Kardentech Mühendislik\'in görev aldığı Mercedes-Benz Hasmer Antalya projesinden seçkiler.',
  },
  {
    id: 'suyali-yalikavak',
    slug: 'suyali-yalikavak',
    title: 'Suyalı Yalıkavak',
    category: 'Konut',
    coverImage: '/images/projects/suyali-yalikavak/02.jpg',
    images: [
      '/images/projects/suyali-yalikavak/01.jpg',
      '/images/projects/suyali-yalikavak/02.jpg',
      '/images/projects/suyali-yalikavak/03.jpg',
      '/images/projects/suyali-yalikavak/04.jpg',
      '/images/projects/suyali-yalikavak/05.jpg',
      '/images/projects/suyali-yalikavak/06.jpg',
    ],
    summary: 'Kardentech Mühendislik\'in görev aldığı Suyalı Yalıkavak projesinden seçkiler.',
  },
  {
    id: 'y-uzun-homes',
    slug: 'y-uzun-homes',
    title: 'Y. Uzun Home\'s',
    category: 'Konut',
    coverImage: '/images/projects/y-uzun-homes/01.jpg',
    images: [
      '/images/projects/y-uzun-homes/01.jpg',
      '/images/projects/y-uzun-homes/02.jpg',
      '/images/projects/y-uzun-homes/03.jpg',
      '/images/projects/y-uzun-homes/04.jpg',
      '/images/projects/y-uzun-homes/05.jpg',
      '/images/projects/y-uzun-homes/06.jpg',
    ],
    summary: 'Kardentech Mühendislik\'in görev aldığı Y. Uzun Home\'s projesinden seçkiler.',
  },
  {
    id: 'baia-bodrum-hotel',
    slug: 'baia-bodrum-hotel',
    title: 'Baia Bodrum Hotel',
    category: 'Otel',
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
    summary: 'Kardentech Mühendislik\'in görev aldığı Baia Bodrum Hotel projesinden seçkiler.',
  },
  {
    id: 'sekerpinar-fabrikasi',
    slug: 'sekerpinar-fabrikasi',
    title: 'Şekerpınar Fabrikası',
    category: 'Endüstriyel',
    coverImage: '/images/projects/sekerpinar-fabrikasi/01.jpg',
    images: [
      '/images/projects/sekerpinar-fabrikasi/01.jpg',
      '/images/projects/sekerpinar-fabrikasi/02.jpg',
      '/images/projects/sekerpinar-fabrikasi/03.jpg',
    ],
    summary: 'Kardentech Mühendislik\'in görev aldığı Şekerpınar Fabrikası projesinden seçkiler.',
  },
];
