import React from 'react';
import { Phone } from 'lucide-react';

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="h-[60px] bg-[var(--color-charcoal)] text-[var(--color-soft-gray)] flex items-center px-6 md:px-12 lg:px-20 2xl:px-32 justify-between shrink-0">
      <div className="text-sm font-semibold tracking-wider font-heading">
        BİZE ULAŞIN
      </div>
      <div className="flex gap-6 items-center text-sm">
        <a href="tel:05320609072" className="flex items-center gap-2 hover:text-[var(--color-bodrum-blue-light)] transition-colors">
          <Phone size={16} />
          <span>0532 060 90 72</span>
        </a>
        <a href="https://instagram.com/kardentech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--color-bodrum-blue-light)] transition-colors">
          <InstagramIcon />
          <span>kardentech</span>
        </a>
      </div>
    </footer>
  );
}
