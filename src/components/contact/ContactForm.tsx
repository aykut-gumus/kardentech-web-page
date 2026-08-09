"use client";

import React, { useState } from 'react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    setMessage('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(result.message || 'Mesajınız başarıyla iletildi. Teşekkür ederiz.');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setMessage(result.error || 'Mesajınız gönderilemedi. Lütfen tekrar deneyin veya telefon/WhatsApp üzerinden bizimle iletişime geçin.');
      }
    } catch (error) {
      console.error('Submit Error:', error);
      setStatus('error');
      setMessage('Mesajınız gönderilemedi. Lütfen tekrar deneyin veya telefon/WhatsApp üzerinden bizimle iletişime geçin.');
    }
  };

  return (
    <div id="iletisim-formu" className="w-full flex flex-col">
      <h2 className="text-xl md:text-2xl font-bold text-[var(--color-charcoal)] font-heading tracking-tight mb-8">
        Formu Doldurun
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
          {/* Honeypot */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
            <label htmlFor="_honeypot">Lütfen bu alanı boş bırakın</label>
            <input 
              type="text" 
              name="_honeypot" 
              id="_honeypot" 
              tabIndex={-1} 
              autoComplete="off" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-semibold tracking-wide text-[var(--color-graphite)] mb-2">
                AD SOYAD <span className="text-[var(--color-bodrum-blue)]">*</span>
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                maxLength={100}
                className="w-full bg-[var(--color-white)] border border-[var(--color-medium-gray)] px-4 py-3 text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-bodrum-blue)] focus:ring-1 focus:ring-[var(--color-bodrum-blue)] transition-colors duration-300 rounded-sm"
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold tracking-wide text-[var(--color-graphite)] mb-2">
                E-POSTA <span className="text-[var(--color-bodrum-blue)]">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                maxLength={100}
                className="w-full bg-[var(--color-white)] border border-[var(--color-medium-gray)] px-4 py-3 text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-bodrum-blue)] focus:ring-1 focus:ring-[var(--color-bodrum-blue)] transition-colors duration-300 rounded-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-semibold tracking-wide text-[var(--color-graphite)] mb-2">
                TELEFON
              </label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                maxLength={50}
                className="w-full bg-[var(--color-white)] border border-[var(--color-medium-gray)] px-4 py-3 text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-bodrum-blue)] focus:ring-1 focus:ring-[var(--color-bodrum-blue)] transition-colors duration-300 rounded-sm"
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-sm font-semibold tracking-wide text-[var(--color-graphite)] mb-2">
                KONU
              </label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                maxLength={150}
                className="w-full bg-[var(--color-white)] border border-[var(--color-medium-gray)] px-4 py-3 text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-bodrum-blue)] focus:ring-1 focus:ring-[var(--color-bodrum-blue)] transition-colors duration-300 rounded-sm"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-semibold tracking-wide text-[var(--color-graphite)] mb-2">
              MESAJ <span className="text-[var(--color-bodrum-blue)]">*</span>
            </label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows={5}
              maxLength={3000}
              className="w-full bg-[var(--color-white)] border border-[var(--color-medium-gray)] px-4 py-3 text-[var(--color-charcoal)] focus:outline-none focus:border-[var(--color-bodrum-blue)] focus:ring-1 focus:ring-[var(--color-bodrum-blue)] transition-colors duration-300 rounded-sm resize-y"
            ></textarea>
          </div>

          {message && (
            <div 
              aria-live="polite" 
              className={`p-4 rounded-sm text-sm font-medium ${status === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}
            >
              {message}
            </div>
          )}

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center px-10 py-4 bg-[var(--color-bodrum-blue)] text-white text-sm md:text-base font-semibold tracking-widest uppercase hover:bg-[var(--color-charcoal)] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-bodrum-blue)] rounded-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'MESAJ GÖNDERİLİYOR...' : 'MESAJ GÖNDER'}
            </button>
          </div>
        </form>
    </div>
  );
}
