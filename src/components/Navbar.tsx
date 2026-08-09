"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ServicesDropdown from './ServicesDropdown';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Referanslar', href: '/referanslar' },
    { name: 'İletişim', href: '/iletisim' },
  ];

  const isServicesActive = pathname === '/hizmetlerimiz' || pathname.startsWith('/elektrik-sistemleri') || pathname.startsWith('/mekanik-sistemler') || pathname.startsWith('/ince-isler');

  return (
    <div className="relative z-50 bg-[var(--color-white)] shadow-sm shrink-0">
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 2xl:px-32 h-[80px]">
        {/* Logo */}
        <Link href="/" className="flex flex-col relative z-50 hover:opacity-90 transition-opacity">
          {!logoError ? (
            <div className="relative h-[32px] w-[200px]">
              <Image 
                src="/images/brand/kardentech-logo.png" 
                alt="Kardentech Logo" 
                fill
                className="object-contain object-left"
                onError={() => setLogoError(true)}
              />
            </div>
          ) : (
            <>
              <span className="font-bold text-xl md:text-2xl tracking-widest text-[var(--color-charcoal)] leading-tight font-heading">
                KARDENTECH
              </span>
              <span className="text-[0.65rem] md:text-xs tracking-[0.25em] text-[var(--color-graphite)]">
                MÜHENDİSLİK
              </span>
            </>
          )}
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-charcoal)] relative z-50">
          <Link href="/" className={`transition-colors relative group py-2 ${pathname === '/' ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}>
            Ana Sayfa
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/hakkimizda" className={`transition-colors relative group py-2 ${pathname === '/hakkimizda' ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}>
            Hakkımızda
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${pathname === '/hakkimizda' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          
          <button 
            onClick={toggleServices}
            className={`transition-colors relative group py-2 ${(isServicesOpen || isServicesActive) ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}
          >
            Hizmetlerimiz
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${(isServicesOpen || isServicesActive) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </button>
          
          <Link href="/referanslar" className={`transition-colors relative group py-2 ${pathname.startsWith('/referanslar') ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}>
            Referanslar
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${pathname.startsWith('/referanslar') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
          <Link href="/iletisim" className={`transition-colors relative group py-2 ${pathname === '/iletisim' ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}>
            İletişim
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${pathname === '/iletisim' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        </div>
      </nav>

      {/* Dropdown Overlay */}
      {isServicesOpen && (
        <div 
          className="fixed inset-0 top-[116px] bg-black/0 z-30"
          onClick={() => setIsServicesOpen(false)}
        />
      )}

      {/* Dropdown */}
      <ServicesDropdown isOpen={isServicesOpen} />
    </div>
  );
}
