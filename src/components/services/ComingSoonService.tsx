import React from 'react';
import Link from 'next/link';
import { Locale } from '@/i18n/types';
import { routeMap } from '@/i18n/routes';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';

interface ComingSoonServiceProps {
  lang: Locale;
  pageId: 'technicalConsultancy' | 'solarEnergy';
  title: string;
  message: string;
}

export default function ComingSoonService({ lang, pageId, title, message }: ComingSoonServiceProps) {
  const getHomeLink = () => routeMap.home[lang];
  const getContactLink = () => routeMap.contact[lang];

  let backHome = "ANA SAYFAYA DÖN";
  let contactBtn = "İLETİŞİME GEÇ";
  
  if (lang === 'en') {
    backHome = "BACK TO HOME";
    contactBtn = "CONTACT US";
  } else if (lang === 'ru') {
    backHome = "НА ГЛАВНУЮ";
    contactBtn = "СВЯЖИТЕСЬ С НАМИ";
  }

  return (
    <div className="flex flex-col flex-1 bg-[var(--color-white)] w-full overflow-x-hidden">
      <ServicesHero 
        lang={lang}
        pageId={pageId}
        images={[]} 
        customTitle={title}
      />
      
      <section className="flex-1 w-full bg-[var(--color-white)] px-6 md:px-12 lg:px-20 2xl:px-32 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--color-charcoal)] mb-4 uppercase">
            Kardentech Mühendislik
          </h2>
          <p className="text-base md:text-lg text-[var(--color-graphite)] leading-relaxed mb-10">
            {message}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href={getHomeLink()}
              className="px-8 py-3.5 border-2 border-[var(--color-charcoal)] text-[var(--color-charcoal)] font-semibold tracking-wider text-sm hover:bg-[var(--color-charcoal)] hover:text-white transition-colors duration-300 w-full sm:w-auto text-center uppercase"
            >
              {backHome}
            </Link>
            <Link 
              href={getContactLink()}
              className="px-8 py-3.5 bg-[var(--color-bodrum-blue)] text-white font-semibold tracking-wider text-sm hover:bg-[var(--color-bodrum-blue-dark)] transition-colors duration-300 w-full sm:w-auto text-center uppercase"
            >
              {contactBtn}
            </Link>
          </div>
        </div>
      </section>
      
      <Footer lang={lang} />
    </div>
  );
}
