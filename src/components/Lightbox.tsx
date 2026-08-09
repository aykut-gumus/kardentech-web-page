"use client";

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, currentIndex, isOpen, onClose, onNavigate }: LightboxProps) {
  
  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrevious, handleNext]);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Görsel galerisi"
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white transition-colors z-50 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm"
        aria-label="Kapat (Escape)"
      >
        <X className="w-8 h-8" />
      </button>

      {currentIndex > 0 && (
        <button 
          onClick={handlePrevious}
          className="absolute left-4 md:left-10 text-white/70 hover:text-white transition-colors z-50 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm"
          aria-label="Önceki görsel (Sol Yön Tuşu)"
        >
          <ChevronLeft className="w-10 h-10 md:w-12 md:h-12" />
        </button>
      )}

      {currentIndex < images.length - 1 && (
        <button 
          onClick={handleNext}
          className="absolute right-4 md:right-10 text-white/70 hover:text-white transition-colors z-50 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm"
          aria-label="Sonraki görsel (Sağ Yön Tuşu)"
        >
          <ChevronRight className="w-10 h-10 md:w-12 md:h-12" />
        </button>
      )}

      <div className="relative w-full max-w-6xl h-[80vh] px-16 md:px-24 select-none">
        <Image
          src={images[currentIndex]}
          alt={`Galeri görseli ${currentIndex + 1}`}
          fill
          sizes="100vw"
          className="object-contain"
          quality={100}
        />
      </div>

      <div className="absolute bottom-6 md:bottom-10 text-white/50 text-sm font-medium tracking-widest">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
