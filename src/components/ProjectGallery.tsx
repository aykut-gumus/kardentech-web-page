"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-medium-gray)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm cursor-zoom-in"
            aria-label={`${projectTitle} projesine ait ${index + 1}. görseli büyüt`}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-300"></div>
            <Image
              src={img}
              alt={`${projectTitle} detay görseli ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Lightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </>
  );
}
