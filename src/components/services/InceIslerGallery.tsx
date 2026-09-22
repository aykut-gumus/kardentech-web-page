'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const images = [
  '/images/services/ince-isler/1.jpg',
  '/images/services/ince-isler/2.jpg',
  '/images/services/ince-isler/3.jpg',
  '/images/services/ince-isler/4.jpg',
  '/images/services/ince-isler/5.jpg',
  '/images/services/ince-isler/6.jpg',
  '/images/services/ince-isler/7.jpg',
  '/images/services/ince-isler/8.jpg',
  '/images/services/ince-isler/9.jpg',
  '/images/services/ince-isler/10.jpg',
];

export default function InceIslerGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage]);

  // Touch handlers for swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) nextImage();
    if (isRightSwipe) prevImage();
  };

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  const GalleryImage = ({ src, index }: { src: string; index: number }) => (
    <div 
      className="relative w-full h-full overflow-hidden cursor-pointer group bg-neutral-100"
      onClick={() => openLightbox(index)}
    >
      <Image
        src={src}
        alt={`İnce İşler ${index + 1}`}
        fill
        className="object-cover transition-transform duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
      />
    </div>
  );

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-12 md:py-24">
      <div className="flex flex-col gap-[8px] md:gap-[12px] lg:gap-[16px]">
        {/* Row 1: 01 (Açılış görseli, güçlü/yüksek) */}
        <div className="w-full aspect-[4/5] sm:aspect-[16/9] md:aspect-[16/7]">
          <GalleryImage src={images[0]} index={0} />
        </div>

        {/* Row 2: 02 & 03 (Asimetrik 62/38) */}
        <div className="grid gap-[8px] md:gap-[12px] lg:gap-[16px] w-full aspect-[4/3] sm:aspect-[2/1] md:aspect-[2.5/1]" style={{ gridTemplateColumns: '62fr 38fr' }}>
          <GalleryImage src={images[1]} index={1} />
          <GalleryImage src={images[2]} index={2} />
        </div>

        {/* Row 3: 04 (Full width, 01'e göre biraz daha düşük yükseklik) */}
        <div className="w-full aspect-[1/1] sm:aspect-[16/9] md:aspect-[21/9]">
          <GalleryImage src={images[3]} index={3} />
        </div>

        {/* Row 4: 05 & 06 (Asimetrik 38/62 - Kare/Dikey karakter korunmalı) */}
        <div className="grid gap-[8px] md:gap-[12px] lg:gap-[16px] w-full aspect-[1/1] sm:aspect-[4/3] md:aspect-[16/9]" style={{ gridTemplateColumns: '38fr 62fr' }}>
          <GalleryImage src={images[4]} index={4} />
          <GalleryImage src={images[5]} index={5} />
        </div>

        {/* Row 5: 07 (Güçlü görsel, 01'e benzer) */}
        <div className="w-full aspect-[4/5] sm:aspect-[16/9] md:aspect-[16/7]">
          <GalleryImage src={images[6]} index={6} />
        </div>

        {/* Row 6: 08 & 09 (Asimetrik 62/38) */}
        <div className="grid gap-[8px] md:gap-[12px] lg:gap-[16px] w-full aspect-[4/3] sm:aspect-[2/1] md:aspect-[2.5/1]" style={{ gridTemplateColumns: '62fr 38fr' }}>
          <GalleryImage src={images[7]} index={7} />
          <GalleryImage src={images[8]} index={8} />
        </div>

        {/* Row 7: 10 (Kapanış görseli, orta/yüksek görsel yüksekliği) */}
        <div className="w-full aspect-[4/5] sm:aspect-[16/9] md:aspect-[16/8]">
          <GalleryImage src={images[9]} index={9} />
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-md">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/60 hover:text-white z-[110] p-2 transition-colors"
            aria-label="Kapat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <div className="absolute top-6 left-6 md:top-8 md:left-8 text-white/60 font-light tracking-widest text-sm md:text-base z-[110] select-none">
            {currentIndex + 1} / {images.length}
          </div>

          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 md:left-8 text-white/40 hover:text-white z-[110] p-4 transition-colors hidden sm:block"
            aria-label="Önceki"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 md:right-8 text-white/40 hover:text-white z-[110] p-4 transition-colors hidden sm:block"
            aria-label="Sonraki"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          <div 
            className="relative w-full h-full flex items-center justify-center p-4 md:p-16 z-[105]"
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="relative w-full max-w-7xl h-[85vh] md:h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex]}
                alt={`İnce İşler ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
