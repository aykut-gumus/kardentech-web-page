import React from 'react';
import LanguageSelector from './LanguageSelector';

export default function TopBar() {
  return (
    <div className="h-[36px] bg-[var(--color-bodrum-blue-dark)] text-[var(--color-white)] flex items-center justify-end px-6 md:px-12 lg:px-20 2xl:px-32 text-sm shrink-0">
      <LanguageSelector />
    </div>
  );
}
