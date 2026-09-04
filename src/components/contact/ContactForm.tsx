"use client";

import React, { useState, useRef } from 'react';
import { Locale } from '@/i18n/types';
import { getDictionary } from '@/i18n';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm({ lang }: { lang: Locale }) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');
  const dict = getDictionary(lang);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;

    // Custom Validation
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const messageInput = form.elements.namedItem('message') as HTMLTextAreaElement;

    if (!nameInput.value.trim()) {
      setStatus('error');
      setMessage(dict.contact.form.validation.requiredName);
      nameInput.focus();
      return;
    }

    if (!emailInput.value.trim()) {
      setStatus('error');
      setMessage(dict.contact.form.validation.requiredEmail);
      emailInput.focus();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      setStatus('error');
      setMessage(dict.contact.form.validation.invalidEmail);
      emailInput.focus();
      return;
    }

    if (!messageInput.value.trim()) {
      setStatus('error');
      setMessage(dict.contact.form.validation.requiredMessage);
      messageInput.focus();
      return;
    }

    setStatus('sending');
    setMessage('');

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/contact-form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(dict.contact.form.success);
        formRef.current?.reset();
      } else {
        setStatus('error');
        setMessage(dict.contact.form.error);
      }
    } catch (error) {
      console.error('Submit Error:', error);
      setStatus('error');
      setMessage(dict.contact.form.error);
    }
  };

  return (
    <div id="iletisim-formu" className="w-full flex flex-col">
      <h2 className="text-xl md:text-2xl font-bold text-[var(--color-charcoal)]  tracking-tight mb-8 uppercase">
        {dict.contact.form.title}
      </h2>

      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
          {/* Honeypot */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
            <label htmlFor="_honeypot">{dict.contact.form.honeypot}</label>
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
              <label htmlFor="name" className="text-sm font-semibold tracking-wide text-[var(--color-graphite)] mb-2 uppercase">
                {dict.contact.form.fullName} <span className="text-[var(--color-bodrum-blue)]">*</span>
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
              <label htmlFor="email" className="text-sm font-semibold tracking-wide text-[var(--color-graphite)] mb-2 uppercase">
                {dict.contact.form.email} <span className="text-[var(--color-bodrum-blue)]">*</span>
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
              <label htmlFor="phone" className="text-sm font-semibold tracking-wide text-[var(--color-graphite)] mb-2 uppercase">
                {dict.contact.form.phone}
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
              <label htmlFor="subject" className="text-sm font-semibold tracking-wide text-[var(--color-graphite)] mb-2 uppercase">
                {dict.contact.form.subject}
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
            <label htmlFor="message" className="text-sm font-semibold tracking-wide text-[var(--color-graphite)] mb-2 uppercase">
              {dict.contact.form.message} <span className="text-[var(--color-bodrum-blue)]">*</span>
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
              className="!cursor-pointer inline-flex items-center justify-center px-10 py-4 bg-[var(--color-bodrum-blue)] text-[var(--color-charcoal)] text-sm md:text-base font-semibold tracking-widest uppercase hover:bg-[var(--color-bodrum-blue-dark)] hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-bodrum-blue-dark)] rounded-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? dict.contact.form.sending : dict.contact.form.submit}
            </button>
          </div>
        </form>
    </div>
  );
}
