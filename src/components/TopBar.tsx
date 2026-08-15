import React from 'react';
import LanguageSelector from './LanguageSelector';
import { Locale } from '@/i18n/types';

export default function TopBar({ lang }: { lang: Locale }) {
  return (
    <div className="h-[36px] bg-[var(--color-bodrum-blue)] text-[var(--color-charcoal)] flex items-center justify-end px-6 md:px-12 lg:px-20 2xl:px-32 text-sm shrink-0">
      <LanguageSelector currentLang={lang} />
    </div>
  );
}
