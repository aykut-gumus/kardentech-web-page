import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  return (
    <footer className="w-full h-auto bg-[var(--color-charcoal)] text-[var(--color-soft-gray)] flex flex-col lg:flex-row lg:items-center px-6 md:px-12 lg:px-20 2xl:px-32 justify-between shrink-0 py-6 lg:py-4 gap-5 lg:gap-6 relative z-[100]">
      <a 
        href="https://maps.app.goo.gl/JFnSd92f3UvoxZAr5"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start lg:items-center gap-2 text-[13px] md:text-[15px] font-medium hover:text-[var(--color-bodrum-blue-light)] transition-colors group cursor-pointer"
      >
        <MapPin size={16} className="shrink-0 mt-0.5 lg:mt-0 text-[var(--color-bodrum-blue-light)] lg:text-current group-hover:text-[var(--color-bodrum-blue-light)] transition-colors" />
        <span className="leading-relaxed text-[var(--color-white)]/90 lg:text-[var(--color-white)]/100">
          Yalıkavak | Dirmil Mah. 6698 Sk. Küçük Sanayi Sitesi No: 12/13 Bodrum/MUĞLA
        </span>
      </a>
      <div className="flex flex-wrap gap-4 lg:gap-6 items-center text-[13px] md:text-[15px] font-medium text-[var(--color-white)]/90 lg:text-[var(--color-white)]/100">
        <a href="mailto:info@kardentech.com" className="flex items-center gap-2 hover:text-[var(--color-bodrum-blue-light)] transition-colors">
          <Mail size={16} />
          <span>info@kardentech.com</span>
        </a>
        <a href="tel:+905320609072" className="flex items-center gap-2 hover:text-[var(--color-bodrum-blue-light)] transition-colors">
          <Phone size={16} />
          <span>+90 532 060 90 72</span>
        </a>
        <a href="https://instagram.com/kardentech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--color-bodrum-blue-light)] transition-colors">
          <InstagramIcon />
          <span>kardentech</span>
        </a>
      </div>
    </footer>
  );
}
