import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from './ContactForm';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';

export default function ContactMain({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <section className="w-full bg-[var(--color-white)] px-6 md:px-12 lg:px-20 2xl:px-32 pt-16 md:pt-24 pb-12 md:pb-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
        
        {/* Left Column: Info */}
        <div className="lg:col-span-5 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-charcoal)]  tracking-tight leading-tight mb-10 uppercase">
            {dict.common.contactUs}
          </h2>
          
          <div className="flex flex-col gap-10">
            {/* Adres */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[var(--color-bodrum-blue)] shrink-0 mt-1" strokeWidth={1.5} />
              <div className="flex flex-col">
                <h3 className="text-xs font-bold text-[var(--color-graphite)] uppercase tracking-widest mb-2">
                  {dict.contact.info.address}
                </h3>
                <address className="not-italic text-base md:text-lg text-[var(--color-charcoal)] font-medium leading-relaxed mb-3">
                  Yalıkavak | Dirmil Mah. 6698 Sk. Küçük Sanayi Sitesi No: 12/13 Bodrum/MUĞLA
                </address>
                <a 
                  href="https://maps.app.goo.gl/JFnSd92f3UvoxZAr5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-xs font-semibold tracking-wider text-[var(--color-bodrum-blue)] uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm w-fit"
                >
                  {dict.common.openInMaps}
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Telefon */}
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[var(--color-bodrum-blue)] shrink-0 mt-1" strokeWidth={1.5} />
              <div className="flex flex-col">
                <h3 className="text-xs font-bold text-[var(--color-graphite)] uppercase tracking-widest mb-2">
                  {dict.contact.info.phone}
                </h3>
                <div className="text-base md:text-lg text-[var(--color-charcoal)] font-medium mb-3">
                  +90 532 060 90 72
                </div>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="tel:+905320609072" 
                    aria-label="+90 532 060 90 72"
                    className="group inline-flex items-center text-xs font-semibold tracking-wider text-[var(--color-bodrum-blue)] uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm w-fit"
                  >
                    {dict.contact.info.call}
                  </a>
                  <span className="text-[var(--color-medium-gray)]">|</span>
                  <a 
                    href="https://wa.me/905320609072" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="group inline-flex items-center text-xs font-semibold tracking-wider text-[var(--color-bodrum-blue)] uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm w-fit"
                  >
                    {dict.common.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            {/* E-Mail */}
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[var(--color-bodrum-blue)] shrink-0 mt-1" strokeWidth={1.5} />
              <div className="flex flex-col">
                <h3 className="text-xs font-bold text-[var(--color-graphite)] uppercase tracking-widest mb-2">
                  {dict.contact.info.email}
                </h3>
                <div className="text-base md:text-lg text-[var(--color-charcoal)] font-medium">
                  info@kardentech.com
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 text-[var(--color-bodrum-blue)] shrink-0 mt-1 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h3 className="text-xs font-bold text-[var(--color-graphite)] uppercase tracking-widest mb-2">
                  {dict.contact.info.instagram}
                </h3>
                <div className="text-base md:text-lg text-[var(--color-charcoal)] font-medium mb-3">
                  kardentech
                </div>
                <a 
                  href="https://www.instagram.com/kardentech/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group inline-flex items-center text-xs font-semibold tracking-wider text-[var(--color-bodrum-blue)] uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm w-fit"
                >
                  {dict.contact.info.viewProfile}
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7 bg-[var(--color-light-gray)] p-6 md:p-10 rounded-sm">
          <ContactForm lang={lang} />
        </div>
        
      </div>
    </section>
  );
}
