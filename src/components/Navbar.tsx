"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import ServicesDropdown from './ServicesDropdown';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div className="relative z-50 bg-[var(--color-white)] shadow-sm shrink-0">
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 2xl:px-32 h-[80px]">
        {/* Logo */}
        <Link href="/" className="flex flex-col relative z-50">
          <span className="font-bold text-xl md:text-2xl tracking-widest text-[var(--color-charcoal)] leading-tight font-heading">
            KARDENTECH
          </span>
          <span className="text-[0.65rem] md:text-xs tracking-[0.25em] text-[var(--color-graphite)]">
            MÜHENDİSLİK
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-charcoal)] relative z-50">
          <Link href="/" className="hover:text-[var(--color-bodrum-blue)] transition-colors relative group py-2">
            Ana Sayfa
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/hakkimizda" className="hover:text-[var(--color-bodrum-blue)] transition-colors relative group py-2">
            Hakkımızda
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all group-hover:w-full"></span>
          </Link>
          
          <button 
            onClick={toggleServices}
            className={`transition-colors relative group py-2 ${isServicesOpen ? 'text-[var(--color-bodrum-blue)]' : 'hover:text-[var(--color-bodrum-blue)]'}`}
          >
            Hizmetlerimiz
            <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all ${isServicesOpen ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </button>
          
          <Link href="/referanslar" className="hover:text-[var(--color-bodrum-blue)] transition-colors relative group py-2">
            Referanslar
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/iletisim" className="hover:text-[var(--color-bodrum-blue)] transition-colors relative group py-2">
            İletişim
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--color-bodrum-blue)] transition-all group-hover:w-full"></span>
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
