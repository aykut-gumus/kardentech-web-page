"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@/i18n/types';
import { getLocalizedUrl } from '@/i18n/routes';

const TrFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 80" className="w-[18px] h-[13px] rounded-sm shadow-sm overflow-hidden">
    <rect width="120" height="80" fill="#E30A17"/>
    <circle cx="42.5" cy="40" r="20" fill="#fff"/>
    <circle cx="47.5" cy="40" r="16" fill="#E30A17"/>
    <polygon fill="#fff" points="70,25 73.5,35 84,35 75.5,41.5 78.5,51.5 70,45.5 61.5,51.5 64.5,41.5 56,35 66.5,35" transform="rotate(-15, 70, 40)"/>
  </svg>
);

const EnFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-[18px] h-[13px] rounded-sm shadow-sm overflow-hidden">
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z"/>
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v-15 z v15 h30 z"/>
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

const RuFlag = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" className="w-[18px] h-[13px] rounded-sm shadow-sm overflow-hidden">
    <rect width="9" height="2" fill="#fff"/>
    <rect y="2" width="9" height="2" fill="#0032A0"/>
    <rect y="4" width="9" height="2" fill="#DA291C"/>
  </svg>
);

export default function LanguageSelector({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname();

  const handleStoreLocale = (locale: Locale) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('kardentech-locale', locale);
    }
  };

  return (
    <div className="flex gap-5 items-center">
      <Link 
        href={getLocalizedUrl(pathname, 'tr')}
        onClick={() => handleStoreLocale('tr')}
        aria-current={currentLang === 'tr' ? 'true' : 'false'}
        className={`flex flex-col items-center gap-[3px] transition-opacity cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm p-1 -m-1 ${currentLang === 'tr' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
      >
        <TrFlag />
        <span className="text-[9px] font-semibold leading-none tracking-widest text-white/90">TR</span>
      </Link>
      <Link 
        href={getLocalizedUrl(pathname, 'en')}
        onClick={() => handleStoreLocale('en')}
        aria-current={currentLang === 'en' ? 'true' : 'false'}
        className={`flex flex-col items-center gap-[3px] transition-opacity cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm p-1 -m-1 ${currentLang === 'en' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
      >
        <EnFlag />
        <span className="text-[9px] font-semibold leading-none tracking-widest text-white/90">EN</span>
      </Link>
      <Link 
        href={getLocalizedUrl(pathname, 'ru')}
        onClick={() => handleStoreLocale('ru')}
        aria-current={currentLang === 'ru' ? 'true' : 'false'}
        className={`flex flex-col items-center gap-[3px] transition-opacity cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm p-1 -m-1 ${currentLang === 'ru' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
      >
        <RuFlag />
        <span className="text-[9px] font-semibold leading-none tracking-widest text-white/90">RU</span>
      </Link>
    </div>
  );
}
