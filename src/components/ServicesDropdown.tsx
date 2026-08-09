"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServicesDropdown({ isOpen, onClose }: ServicesDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const services = [
    {
      title: 'ELEKTRİK SİSTEMLERİ',
      href: '/elektrik-sistemleri',
      description: 'Elektrik uygulamaları'
    },
    {
      title: 'MEKANİK SİSTEMLER',
      href: '/mekanik-sistemler',
      description: 'Mekanik uygulamalar'
    },
    {
      title: 'İNCE İŞLER',
      href: '/ince-isler',
      description: 'Dekorasyon — Renovasyon'
    }
  ];

  return (
    <div 
      id="services-dropdown"
      ref={dropdownRef}
      className={`absolute top-full left-0 w-full bg-[var(--color-white)] border-t border-[var(--color-medium-gray)] shadow-sm overflow-hidden transition-all duration-300 ease-in-out z-40
        ${isOpen ? 'max-h-[500px] py-12 opacity-100' : 'max-h-0 py-0 opacity-0 border-t-0 pointer-events-none'}
      `}
    >
      <div className="px-6 md:px-12 lg:px-20 2xl:px-32 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 justify-between">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
            {services.map((service, index) => (
              <Link 
                key={index}
                href={service.href}
                onClick={onClose}
                className="group flex flex-col items-start p-4 -ml-4 hover:bg-[var(--color-light-gray)] rounded transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)]"
              >
                <h3 className="text-sm lg:text-base font-bold text-[var(--color-charcoal)] group-hover:text-[var(--color-bodrum-blue)] transition-colors duration-300 mb-1">
                  {service.title}
                </h3>
                <p className="text-xs lg:text-sm text-[var(--color-graphite)]/80 group-hover:text-[var(--color-graphite)] transition-colors duration-300">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="flex flex-col md:items-end justify-center pt-8 md:pt-0 border-t md:border-t-0 border-[var(--color-medium-gray)] md:border-l md:pl-16">
            <Link
              href="/hizmetlerimiz"
              onClick={onClose}
              className="group inline-flex items-center text-xs lg:text-sm font-semibold tracking-widest text-[var(--color-charcoal)] hover:text-[var(--color-bodrum-blue)] transition-colors duration-300 uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] p-2 -ml-2 md:ml-0"
            >
              TÜM HİZMETLER
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
