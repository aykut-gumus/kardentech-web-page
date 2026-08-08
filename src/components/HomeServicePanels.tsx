"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomeServicePanels() {
  return (
    <div className="flex flex-col md:flex-row w-full bg-[var(--color-charcoal)] overflow-hidden flex-1 relative">
      
      {/* Panel 1 - Elektrik Sistemleri */}
      <div className="relative flex-1 md:skew-x-[-8deg] md:-ml-8 overflow-hidden group border-b md:border-b-0 md:border-r border-[var(--color-graphite)]/40 min-h-[33svh] md:min-h-0">
        <Link href="/elektrik-sistemleri" className="block w-full h-full md:skew-x-[8deg] md:ml-8 relative">
          <div className="absolute inset-0 md:-left-[20%] md:-right-[20%] bg-[var(--color-bodrum-blue-dark)]">
             <div className="absolute inset-0 bg-[var(--color-bodrum-blue-dark)]/50 z-10 transition-opacity duration-500 group-hover:bg-[var(--color-bodrum-blue-dark)]/30" />
             <div className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ backgroundImage: 'url("/images/electrical.jpg")' }} />
          </div>
          <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12 lg:p-16 pb-[18vh] md:pb-[23vh]">
            <div className="w-[40px] h-[3px] bg-[var(--color-bodrum-blue)] mb-6 transition-all duration-500 group-hover:w-[60px]" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-wide font-heading">
              ELEKTRİK<br />SİSTEMLERİ
            </h2>
            <div className="flex items-center text-[var(--color-medium-gray)] group-hover:text-[var(--color-bodrum-blue-light)] transition-colors duration-300 font-medium tracking-wider text-sm mt-4">
              Daha Fazla Bilgi
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </Link>
      </div>

      {/* Panel 2 - Mekanik Sistemler */}
      <div className="relative flex-1 md:skew-x-[-8deg] overflow-hidden group border-b md:border-b-0 md:border-r border-[var(--color-graphite)]/40 min-h-[33svh] md:min-h-0">
        <Link href="/mekanik-sistemler" className="block w-full h-full md:skew-x-[8deg] relative">
          <div className="absolute inset-0 md:-left-[20%] md:-right-[20%] bg-[var(--color-graphite)]">
             <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-500 group-hover:bg-black/40" />
             <div className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ backgroundImage: 'url("/images/mechanical.jpg")' }} />
          </div>
          <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12 lg:p-16 pb-[18vh] md:pb-[23vh]">
            <div className="w-[40px] h-[3px] bg-[var(--color-bodrum-blue)] mb-6 transition-all duration-500 group-hover:w-[60px]" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-wide font-heading">
              MEKANİK<br />SİSTEMLER
            </h2>
            <div className="flex items-center text-[var(--color-medium-gray)] group-hover:text-[var(--color-bodrum-blue-light)] transition-colors duration-300 font-medium tracking-wider text-sm mt-4">
              Daha Fazla Bilgi
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </Link>
      </div>

      {/* Panel 3 - İnce İşler */}
      <div className="relative flex-1 md:skew-x-[-8deg] md:-mr-8 overflow-hidden group min-h-[33svh] md:min-h-0">
        <Link href="/ince-isler" className="block w-full h-full md:skew-x-[8deg] md:-ml-8 relative">
          <div className="absolute inset-0 md:-left-[20%] md:-right-[20%] bg-[var(--color-charcoal)]">
             <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-500 group-hover:bg-black/40" />
             <div className="absolute inset-0 bg-cover bg-center grayscale transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ backgroundImage: 'url("/images/finishing.jpg")' }} />
          </div>
          <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12 lg:p-16 pb-[18vh] md:pb-[23vh]">
            <div className="w-[40px] h-[3px] bg-[var(--color-bodrum-blue)] mb-6 transition-all duration-500 group-hover:w-[60px]" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-wide font-heading">
              İNCE<br />İŞLER
            </h2>
            <div className="flex items-center text-[var(--color-medium-gray)] group-hover:text-[var(--color-bodrum-blue-light)] transition-colors duration-300 font-medium tracking-wider text-sm mt-4">
              Daha Fazla Bilgi
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </Link>
      </div>

    </div>
  );
}
