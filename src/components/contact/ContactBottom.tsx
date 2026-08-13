import React from 'react';
import { MapPin } from 'lucide-react';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';

export default function ContactBottom({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <section className="w-full bg-[var(--color-charcoal)] px-6 md:px-12 lg:px-20 2xl:px-32 py-12 md:py-0 md:h-[280px] flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10">
        
        {/* CTA Side */}
        <div className="flex flex-col max-w-2xl flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading leading-tight uppercase">
            {dict.contact.bottom.title}
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-8">
            {dict.contact.bottom.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="tel:+905320609072" 
              className="inline-flex items-center justify-center px-6 py-4 bg-[var(--color-bodrum-blue)] text-white text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-[var(--color-bodrum-blue)] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            >
              {dict.common.phone}
            </a>
            <a 
              href="https://wa.me/905320609072" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-4 bg-transparent border border-white text-white text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-[var(--color-charcoal)] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            >
              {dict.common.whatsapp}
            </a>
          </div>
        </div>

        {/* Vertical Divider (Desktop) */}
        <div className="hidden md:block w-px h-32 bg-white/20 mx-4"></div>

        {/* Location Side */}
        <div className="flex flex-col flex-1 items-start md:items-end md:text-right">
          <div className="flex items-center md:flex-row-reverse gap-3 mb-4 text-white">
            <MapPin className="w-6 h-6 text-[var(--color-bodrum-blue)] shrink-0" strokeWidth={1.5} />
            <h2 className="text-xl md:text-2xl font-bold font-heading tracking-tight">
              {dict.contact.bottom.location}
            </h2>
          </div>
          <address className="not-italic text-sm md:text-base text-white/80 leading-relaxed mb-6">
            Dirmil Mah. 6698 Sk. Küçük Sanayi Sitesi No: 12/13<br />
            Yalıkavak Bodrum/MUĞLA
          </address>
          <a 
            href="https://maps.app.goo.gl/JFnSd92f3UvoxZAr5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center text-sm font-semibold tracking-wider text-[var(--color-bodrum-blue)] uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm"
          >
            <span className="md:hidden mr-2 transition-transform duration-300 group-hover:-translate-x-1">←</span>
            {dict.common.openInMaps}
            <span className="hidden md:inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
