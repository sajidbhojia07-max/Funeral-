import React from 'react';
import { HeartHandshake, Phone, Mail, MapPin } from 'lucide-react';
import { Language } from '../types/funeral';

interface FooterProps {
  language: Language;
  onOpenImmediateNeed: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenImmediateNeed }) => {
  const isUrdu = language === 'ur';

  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1 & 2: Wordmark & Sacred Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-amber-500/40 bg-stone-900 flex items-center justify-center text-amber-400">
                <HeartHandshake className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <span className="text-lg font-serif text-white tracking-wide block">
                  {isUrdu ? 'الرَّحْمٰن فینرل سروسز' : 'Al-Rahman Memorial Sanctuary'}
                </span>
                <span className="text-[11px] text-stone-500 tracking-wider uppercase font-sans">
                  {isUrdu ? 'اسلامی تدفین و جنازہ مرکز' : 'Funeral Home & Mortuary Care'}
                </span>
              </div>
            </div>

            <p className="text-stone-400 leading-relaxed text-xs max-w-sm">
              {isUrdu
                ? 'مرحومین کے احترام اور لواحقین کے سکون کے لیے پرعزم۔ مکمل شرعی اصولوں اور اعلیٰ ترین قانونی و اخلاقی معیارات کے مطابق ۲۴ گھنٹے خدمات۔'
                : 'Dedicated to honoring every departed soul with the sacred dignity of Islamic traditions and tender family care. Serving the community 24 hours a day, 365 days a year.'}
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenImmediateNeed}
                className="inline-flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-amber-400 border border-stone-800 rounded-lg text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{isUrdu ? '۲۴/۷ ایمرجنسی رابطہ' : '24/7 Immediate Assistance'}</span>
              </button>
            </div>
          </div>

          {/* Col 3: Services Links */}
          <div className="space-y-3">
            <h4 className="text-stone-200 font-semibold uppercase tracking-wider text-[11px]">
              {isUrdu ? 'تدفینی خدمات' : 'Funeral Services'}
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isUrdu ? 'بنیادی اسلامی جنازہ' : 'Essential Janaza'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isUrdu ? 'مسنون غسل و تکفین' : 'Ritual Ghusl Washing'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isUrdu ? 'بین الاقوامی وطن واپسی' : 'Global Repatriation'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isUrdu ? 'پیشگی وصیت و پلاننگ' : 'Pre-Need Planning'}
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-amber-400 transition-colors">
                  {isUrdu ? 'تخمینہ اخراجات' : 'Cost Estimator'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Memorial & Support */}
          <div className="space-y-3">
            <h4 className="text-stone-200 font-semibold uppercase tracking-wider text-[11px]">
              {isUrdu ? 'یادگاری و غم خواری' : 'Memorials & Care'}
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#memorials" className="hover:text-amber-400 transition-colors">
                  {isUrdu ? 'تعزیتی وال' : 'Recent Obituaries'}
                </a>
              </li>
              <li>
                <a href="#memorials" className="hover:text-amber-400 transition-colors">
                  {isUrdu ? 'شمع روشن کریں' : 'Light a Virtual Candle'}
                </a>
              </li>
              <li>
                <a href="#grief-care" className="hover:text-amber-400 transition-colors">
                  {isUrdu ? 'صبر و تسلی گائیڈز' : 'Grief & Bereavement'}
                </a>
              </li>
              <li>
                <a href="#grief-care" className="hover:text-amber-400 transition-colors">
                  {isUrdu ? 'قانونی چیک لسٹ' : 'Estate & Legal Steps'}
                </a>
              </li>
              <li>
                <a href="#facility" className="hover:text-amber-400 transition-colors">
                  {isUrdu ? 'چیپل و ایمبولینسز' : 'Sanctuary Tour'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Dispatch & Direct Care */}
          <div className="space-y-3">
            <h4 className="text-stone-200 font-semibold uppercase tracking-wider text-[11px]">
              {isUrdu ? 'ہیلپ لائن و دفاتر' : 'Emergency Dispatch'}
            </h4>
            <div className="space-y-2 text-stone-400">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-stone-200 font-mono font-medium">1-800-555-JANAZA</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-500 shrink-0 mt-0.5" />
                <span>care@alrahman-memorial.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0 mt-0.5" />
                <span>450 Peace Avenue, West Garden</span>
              </div>
              <div className="text-[11px] text-stone-500 pt-1">
                {isUrdu ? 'لائسنس یافتہ فینرل ڈائریکٹرز و کوآرڈینیٹرز' : 'Fully Licensed Funeral Establishment #FD-49021'}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Al-Rahman Memorial & Funeral Services. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-stone-400 cursor-pointer">
              {isUrdu ? 'رازداری کی پالیسی' : 'Privacy & Confidentiality'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-stone-400 cursor-pointer">
              {isUrdu ? 'شرائط و ضوابط' : 'Terms of Service'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-stone-400 cursor-pointer">
              {isUrdu ? 'شرعی سرٹیفیکیشن' : 'Scholarly Verification'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
