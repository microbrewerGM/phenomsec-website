'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
          aria-label="Toggle mobile menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-700 z-50">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="#services"
              className="block text-slate-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="block text-slate-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/case-studies"
              className="block text-slate-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/blog"
              className="block text-slate-300 hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}