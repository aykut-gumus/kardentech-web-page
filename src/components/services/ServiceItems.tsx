import React from 'react';
import Image from 'next/image';

interface ServiceItem {
  id: string;
  title: string;
  image: string;
}

export default function ServiceItems({ items }: { items: ServiceItem[] }) {
  return (
    <section className="w-full py-16 md:py-24 bg-[var(--color-white)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 2xl:px-32">
        <div className="flex flex-col gap-6 md:gap-10">
          {items.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 group p-4 rounded-2xl transition-all duration-300 hover:bg-[var(--color-medium-gray)]/30 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative w-full md:w-[40%] aspect-[16/9] md:aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors z-10 duration-400"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              
              {/* Title Container */}
              <div className="w-full md:w-[60%] flex items-center justify-center md:justify-start">
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="text-[var(--color-bodrum-blue)] font-light text-2xl md:text-4xl opacity-50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-bodrum-blue)] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
