import React from 'react';

export default function AboutIntro() {
  return (
    <section className="w-full bg-[var(--color-white)] px-6 md:px-12 lg:px-20 2xl:px-32 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto flex flex-col">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-charcoal)] mb-8 font-heading tracking-tight">
          KARDENTECH MÜHENDİSLİK
        </h2>
        <div className="max-w-[70ch] text-base md:text-lg text-[var(--color-graphite)] leading-relaxed space-y-6">
          <p>
            Kardentech Mühendislik, Bodrum merkezli olarak; dekorasyon ve renovasyon, anahtar teslim projeler, tasarım, proje ve danışmanlık ile elektrik ve mekanik uygulamalar alanlarında faaliyet göstermektedir.
          </p>
          <p>
            Farklı kullanım amaçlarına sahip yaşam, ticari ve endüstriyel mekanlarda proje ve uygulama süreçlerine yönelik mühendislik çözümleri sunmaktadır.
          </p>
        </div>
      </div>
    </section>
  );
}
