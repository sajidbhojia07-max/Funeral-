import React, { useState } from 'react';
import { Phone, Clock, Globe, Menu, X, HeartHandshake } from 'lucide-react';
import { Language } from '../types/funeral';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenImmediateNeed: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenImmediateNeed,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isUrdu = language === 'ur';

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-colors">
      {/* Top 24/7 Notice Strip */}
      <div className="bg-stone-950 px-4 py-1.5 border-b border-stone-800/60 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{isUrdu ? '۲۴ گھنٹے فوری ایمرجنسی سروس دستیاب' : '24/7 Immediate Need Service Available'}</span>
            </span>
            <span className="hidden sm:inline text-stone-600">|</span>
            <span className="hidden sm:inline text-stone-400">
              {isUrdu ? 'شریعہ کمپلائنٹ غسل، جنازہ اور تدفین' : 'Sharia-Compliant Ghusl, Janaza & Memorial Care'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+18005553262"
              className="flex items-center gap-1.5 text-stone-200 hover:text-amber-400 font-semibold tracking-wide transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>1-800-555-JANAZA</span>
            </a>

            <div className="flex items-center gap-1 bg-stone-800 rounded px-1.5 py-0.5 border border-stone-700">
              <Globe className="w-3 h-3 text-stone-400" />
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-1.5 py-0.5 text-[11px] rounded transition-colors ${
                  language === 'en' ? 'bg-amber-600 text-white font-medium' : 'text-stone-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('ur')}
                className={`px-1.5 py-0.5 text-[11px] rounded transition-colors ${
                  language === 'ur' ? 'bg-amber-600 text-white font-medium' : 'text-stone-400 hover:text-white'
                }`}
              >
                اردو
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Strict Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, one line */}
        <a
          href="#"
          className="group flex items-center gap-3 whitespace-nowrap shrink-0 text-decoration-none"
        >
          <div className="w-10 h-10 rounded-full border border-amber-600/50 bg-stone-800/80 flex items-center justify-center text-amber-400 shadow-sm group-hover:border-amber-400 transition-colors">
            <HeartHandshake className="w-5 h-5 text-amber-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif tracking-wide text-stone-100 group-hover:text-amber-200 transition-colors">
              {isUrdu ? 'الرَّحْمٰن فینرل سروسز' : 'Al-Rahman Memorial'}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-sans">
              {isUrdu ? 'تدفین و جنازہ مرکز' : 'Funeral & Janaza Sanctuary'}
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 concise nav links, single-line text */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
          <a
            href="#immediate-need"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            {isUrdu ? 'فوری رہنمائی' : 'Immediate Need'}
          </a>
          <a
            href="#services"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            {isUrdu ? 'تدفینی خدمات' : 'Funeral Services'}
          </a>
          <a
            href="#memorials"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            {isUrdu ? 'یادگاری تعزیت نامے' : 'Obituaries & Tributes'}
          </a>
          <a
            href="#estimator"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            {isUrdu ? 'تخمینہ اخراجات' : 'Cost Estimator'}
          </a>
          <a
            href="#grief-care"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            {isUrdu ? 'صبر و تسلی' : 'Grief Support'}
          </a>
          <a
            href="#facility"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            {isUrdu ? 'چیپل و سہولیات' : 'Sanctuary & Fleet'}
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenImmediateNeed}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{isUrdu ? 'فوری مدد درکار ہے' : 'Immediate Dispatch'}</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenImmediateNeed}
            className="px-3 py-1.5 text-xs font-semibold text-stone-900 bg-amber-400 rounded-md"
          >
            {isUrdu ? 'فوری کال' : 'Immediate'}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-800 bg-stone-950 px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base text-stone-200">
            <a
              href="#immediate-need"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              {isUrdu ? 'فوری رہنمائی' : 'Immediate Need Guide'}
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              {isUrdu ? 'تدفینی خدمات' : 'Funeral Services'}
            </a>
            <a
              href="#memorials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              {isUrdu ? 'یادگاری تعزیت نامے' : 'Obituaries & Tributes'}
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              {isUrdu ? 'تخمینہ اخراجات' : 'Arrangement Cost Estimator'}
            </a>
            <a
              href="#grief-care"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              {isUrdu ? 'صبر و تسلی' : 'Grief Support'}
            </a>
            <a
              href="#facility"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              {isUrdu ? 'چیپل و سہولیات' : 'Sanctuary & Fleet'}
            </a>
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="py-1 hover:text-amber-400"
            >
              {isUrdu ? 'رابطہ کریں' : 'Contact & Locations'}
            </a>
          </nav>

          <div className="pt-4 border-t border-stone-800 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenImmediateNeed();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-stone-900 bg-amber-400 rounded-lg"
            >
              {isUrdu ? '۲۴ گھنٹے ایمرجنسی ٹیم کو کال کریں' : 'Request 24/7 Immediate Dispatch'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
