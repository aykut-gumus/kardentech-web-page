"use client";
import React from 'react';

interface ServicesDropdownProps {
  isOpen: boolean;
}

export default function ServicesDropdown({ isOpen }: ServicesDropdownProps) {
  return (
    <div 
      className={`absolute top-full left-0 w-full bg-[var(--color-soft-gray)] border-[var(--color-medium-gray)] shadow-md overflow-hidden transition-all duration-300 ease-in-out z-40
        ${isOpen ? 'max-h-[300px] py-8 opacity-100 border-t' : 'max-h-0 py-0 opacity-0 border-t-0'}
      `}
    >
      <div className="px-6 md:px-12 lg:px-20 2xl:px-32">
        <div className="h-[100px] flex items-center justify-center text-[var(--color-graphite)] text-sm italic">
          Hizmet seçenekleri yakında eklenecektir.
        </div>
      </div>
    </div>
  );
}
