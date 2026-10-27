import React, { useState } from 'react';
import { BookOpen, Heart, ArrowRight, X, PhoneCall, HelpCircle } from 'lucide-react';
import { Language, GriefGuide } from '../types/funeral';
import { GRIEF_GUIDES, FAQ_ITEMS } from '../data/funeralData';

interface GriefSupportSectionProps {
  language: Language;
}

export const GriefSupportSection: React.FC<GriefSupportSectionProps> = ({ language }) => {
  const [activeGuide, setActiveGuide] = useState<GriefGuide | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const isUrdu = language === 'ur';

  return (
    <section id="grief-care" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-amber-800 font-semibold mb-2">
            {isUrdu ? 'تسلی، رہنمائی اور صبر' : 'Bereavement & Spiritual Care'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight">
            {isUrdu ? 'غم کے لمحات میں رہنمائی اور تسکین' : 'Compassionate Resources for the Grieving Heart'}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            {isUrdu
              ? 'تدفین کے بعد بھی ہمارا ساتھ جاری رہتا ہے۔ صبر کی تلقین، شرعی رہنمائی، اور قانونی و انتظامی معاملات کو حل کرنے کے لیے ہمارے مفت رہنما کتابچے ملاحظہ فرمائیں۔'
              : 'Our commitment to your family does not end at the cemetery gates. We provide ongoing bereavement counseling, practical checklists, and comforting reflections to support your healing journey.'}
          </p>
        </div>

        {/* Guides Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {GRIEF_GUIDES.map((guide, idx) => (
            <div
              key={guide.id}
              className="bg-stone-50 rounded-2xl p-7 border border-stone-200/90 hover:border-amber-700/40 hover:bg-white transition-all shadow-sm flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveGuide(guide)}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                  <span className="font-semibold text-stone-700">0{idx + 1}. Guide</span>
                  <span>{guide.readTime}</span>
                </div>

                <h3 className="text-lg font-serif font-medium text-stone-900 group-hover:text-amber-900 transition-colors mb-2">
                  {isUrdu ? guide.titleUrdu : guide.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {isUrdu ? guide.summaryUrdu : guide.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs font-semibold text-amber-800 group-hover:text-amber-900">
                <span>{isUrdu ? 'مکمل مضمون پڑھیں' : 'Read Full Guidance'}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Peaceful Bereavement Image Banner with Quote */}
        <div className="rounded-2xl overflow-hidden border border-stone-200 relative mb-16 shadow-md">
          <div className="h-64 sm:h-80 w-full relative">
            <img
              src="/src/assets/images/peaceful_bereavement_dawn_1793137430259.jpg"
              alt="Serene calm lake at dawn"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-stone-950/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-10 text-white max-w-3xl mx-auto">
              <span className="font-serif text-amber-300 text-lg sm:text-xl tracking-wider mb-2">
                وَبَشِّرِ الصَّابِرِينَ
              </span>
              <blockquote className="font-serif italic text-lg sm:text-2xl text-stone-100 leading-snug">
                {isUrdu
                  ? '”اور صبر کرنے والوں کو خوشخبری دے دیجیے، وہ لوگ کہ جب ان پر کوئی مصیبت آتی ہے تو کہتے ہیں: بے شک ہم اللہ ہی کے ہیں اور ہم اسی کی طرف لوٹ کر جانے والے ہیں۔“'
                  : '“And give glad tidings to the patient, who, when disaster strikes them, say, ‘Indeed we belong to Allah, and indeed to Him we will return.’”'}
              </blockquote>
              <span className="text-xs uppercase tracking-widest text-stone-300 mt-4 font-sans">
                Surah Al-Baqarah (2:155-156)
              </span>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="bg-stone-50 rounded-2xl p-6 sm:p-10 border border-stone-200">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
              <HelpCircle className="w-4 h-4 text-amber-700" />
              <span>{isUrdu ? 'اکثر پوچھے جانے والے سوالات' : 'Frequently Asked Questions'}</span>
            </div>
            <h3 className="text-2xl font-serif font-medium text-stone-900">
              {isUrdu ? 'جنازہ، غسل اور تدفین سے متعلق عمومی سوالات' : 'Clarifications on Islamic Mortuary & Janaza Procedures'}
            </h3>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-stone-900 text-sm sm:text-base hover:text-amber-900 transition-colors"
                  >
                    <span>{isUrdu ? faq.questionUrdu : faq.question}</span>
                    <span className="text-xl font-mono text-stone-400 shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                      {isUrdu ? faq.answerUrdu : faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Guide Reading Modal */}
      {activeGuide && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-stone-300 shadow-2xl relative my-8 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                {activeGuide.readTime}
              </span>
              <button
                type="button"
                onClick={() => setActiveGuide(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-800 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-2xl font-serif font-medium text-stone-900 mb-4">
              {isUrdu ? activeGuide.titleUrdu : activeGuide.title}
            </h3>

            <p className="text-sm font-medium text-amber-900/80 mb-6 italic">
              {isUrdu ? activeGuide.summaryUrdu : activeGuide.summary}
            </p>

            <div className="prose prose-stone text-sm leading-relaxed text-stone-700 space-y-4 border-t border-stone-100 pt-6">
              <p>{isUrdu ? activeGuide.contentUrdu : activeGuide.content}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-stone-500">
                {isUrdu ? 'ہمارا مشیرِ غم ۲۴ گھنٹے دستیاب ہے' : 'Free 24/7 Bereavement Counselor on Duty'}
              </span>
              <a
                href="tel:+18005553262"
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>1-800-555-JANAZA</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
