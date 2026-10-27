import React from 'react';
import { Phone, ShieldCheck, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../types/funeral';

interface HeroProps {
  language: Language;
  onOpenImmediateNeed: () => void;
  onScrollToEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onOpenImmediateNeed,
  onScrollToEstimator,
}) => {
  const isUrdu = language === 'ur';

  return (
    <section className="relative bg-stone-900 text-stone-100 overflow-hidden">
      {/* Background Hero Image with Measured Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/funeral_hero_serene_1793137429604.jpg"
          alt="Serene memorial sanctuary garden at sunrise"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-10000 motion-safe:ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-3xl">
          {/* Reverent Arabic & Urdu Inscription Kicker */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="font-serif text-amber-300 text-xl tracking-wider select-none">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ
            </span>
            <span className="text-stone-500" aria-hidden="true">·</span>
            <span className="text-xs uppercase tracking-widest text-stone-300 font-sans">
              إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
            </span>
          </div>

          {/* Primary Headline with text-wrap: balance */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-white leading-tight mb-6"
            style={{ textWrap: 'balance' }}
          >
            {isUrdu ? (
              <>
                عزت، احترام اور شرعی اصولوں کے ساتھ
                <span className="block text-amber-200 mt-2 font-normal">
                  آخری سفر کی باوقار اور پرسکون رہنمائی
                </span>
              </>
            ) : (
              <>
                With Sacred Reverence,
                <span className="block text-amber-100 font-normal italic">
                  Tender Care & Enduring Dignity
                </span>
              </>
            )}
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mb-8">
            {isUrdu
              ? 'غم اور جدائی کے لمحات میں اہلِ خانہ کے شانہ بشانہ۔ ۲۴ گھنٹے فوری ایمبولینس، مسنون طریقہ غسل، نمازِ جنازہ کوآرڈینیشن، قبرستان کی تدفین اور بین الاقوامی میت ٹرانسپورٹ کی مکمل سہولیات۔'
              : 'Walking beside your family during life’s most tender moments. Providing 24/7 immediate assistance, certified Islamic Ghusl purification, Janaza prayer coordination, cemetery burial arrangements, and worldwide repatriation.'}
          </p>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              type="button"
              onClick={onOpenImmediateNeed}
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm tracking-wide"
            >
              <Phone className="w-4 h-4 text-stone-950" />
              <span>{isUrdu ? 'فوری امداد درکار ہے (۲۴/۷ ہیلپ لائن)' : 'Immediate Need (24/7 Dispatch)'}</span>
            </button>

            <button
              type="button"
              onClick={onScrollToEstimator}
              className="px-6 py-3.5 bg-stone-800/80 hover:bg-stone-800 text-stone-100 hover:text-white border border-stone-700 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <span>{isUrdu ? 'تخمینہ اخراجات دیکھیں' : 'View Arrangement Pricing'}</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Adjacency Trust Indicators */}
          <div className="pt-6 border-t border-stone-800/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{isUrdu ? 'مکمل شرعی و قانونی سرٹیفائیڈ' : 'Licensed & Sharia Compliant'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-amber-400" />
              <span>{isUrdu ? 'مردانہ و زنانہ باعمل غسل عملہ' : 'Pious Male & Female Washing Teams'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{isUrdu ? 'شفاف قیمتیں، بلا پوشیدہ اخراجات' : 'Zero Hidden Fees Sacred Guarantee'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Operational Utility Ribbon - Full-Width Strip */}
      <div className="bg-stone-950/90 border-y border-stone-800 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="py-1 border-r border-stone-800/70 last:border-r-0">
            <div className="text-stone-200 font-semibold text-sm">24/7 / 365 Days</div>
            <div className="text-[11px] text-stone-400 mt-0.5">
              {isUrdu ? 'فوری ایمرجنسی رسپانس' : 'Immediate Emergency Dispatch'}
            </div>
          </div>
          <div className="py-1 border-r border-stone-800/70 last:border-r-0">
            <div className="text-stone-200 font-semibold text-sm">Sunnah Ghusl</div>
            <div className="text-[11px] text-stone-400 mt-0.5">
              {isUrdu ? 'مستند مسنون غسل و تکفین' : 'Ritual Washing & Pure Kafan'}
            </div>
          </div>
          <div className="py-1 border-r border-stone-800/70 last:border-r-0">
            <div className="text-stone-200 font-semibold text-sm">Global Flight</div>
            <div className="text-[11px] text-stone-400 mt-0.5">
              {isUrdu ? 'بین الاقوامی وطن واپسی کارگو' : 'Embassy & Air Repatriation'}
            </div>
          </div>
          <div className="py-1">
            <div className="text-stone-200 font-semibold text-sm">45-75 Minutes</div>
            <div className="text-[11px] text-stone-400 mt-0.5">
              {isUrdu ? 'اوسط رسپانس کا وقت' : 'Average Local Response Window'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
