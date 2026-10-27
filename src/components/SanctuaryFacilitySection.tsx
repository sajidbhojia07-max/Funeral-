import React from 'react';
import { Sparkles, Users, Droplets, Car, Shield } from 'lucide-react';
import { Language } from '../types/funeral';

interface SanctuaryFacilitySectionProps {
  language: Language;
}

export const SanctuaryFacilitySection: React.FC<SanctuaryFacilitySectionProps> = ({ language }) => {
  const isUrdu = language === 'ur';

  return (
    <section id="facility" className="py-20 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            {isUrdu ? 'پُرسکون ماحول اور جدید سہولیات' : 'Sanctuary & Modern Mortuary Facilities'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white tracking-tight">
            {isUrdu ? 'ہماری سہولیات اور پرائیویٹ غسل سنٹر' : 'A Sanctuary of Comfort, Peace & Prayer'}
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base leading-relaxed">
            {isUrdu
              ? 'ہمارا سینٹر خالصتاً احترام، رازداری اور پُرسکون ماحول کو مدنظر رکھ کر تعمیر کیا گیا ہے۔ جدید طبی معیارات اور سنتِ نبوی کے عین مطابق غسل اور دعائیہ ہالز دستیاب ہیں۔'
              : 'Designed with quiet dignity and reverent care. From our consecrated Ghusl washing suites to our expansive memorial chapel, our facilities offer families peaceful solace.'}
          </p>
        </div>

        {/* 2-Column Split: Visual Anchor & Feature Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Visual Focal Carrier (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-stone-800 relative group min-h-[380px]">
            <img
              src="/src/assets/images/memorial_chapel_interior_1793137430484.jpg"
              alt="Al-Rahman Memorial Sanctuary Chapel Interior"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-semibold text-amber-300 uppercase tracking-widest">
                {isUrdu ? 'مرکزی چیپل و دعائیہ ہال' : 'Grand Serenity Sanctuary Chapel'}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-white mt-1">
                {isUrdu ? '۳۰۰ افراد کی گنجائش، قدرتی روشنی اور خاموش سکون' : 'Accommodating up to 300 guests in natural light'}
              </h3>
              <p className="text-xs text-stone-300 mt-1 max-w-lg">
                {isUrdu
                  ? 'ملٹی میڈیا سٹریمنگ، ساؤنڈ سسٹم اور فیملی صوفہ لاؤنج کے ساتھ مکمل آراستہ۔'
                  : 'Equipped with 4K broadcast cameras, acoustic isolation, and serene garden reflection views.'}
              </p>
            </div>
          </div>

          {/* Right Column: Key Facility Pillars (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                  <Droplets className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="text-base font-semibold text-white">
                  {isUrdu ? 'مخصوص مسنون غسل و تکفین سوئیٹس' : 'Consecrated Ritual Ghusl Suites'}
                </h4>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed pl-11">
                {isUrdu
                  ? 'الگ الگ زنانہ و مردانہ غسل رومز، مکمل سینیٹائزڈ سٹینلیس سٹیل واشنگ ٹیبلز اور پردے کے سخت ترین اصول۔'
                  : 'Separate, gender-specific ritual washing rooms with hospital-grade sanitization and complete privacy.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                  <Car className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="text-base font-semibold text-white">
                  {isUrdu ? 'باوقار کسٹمائزڈ میت ایمبولینسز' : 'Executive Climate-Controlled Fleet'}
                </h4>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed pl-11">
                {isUrdu
                  ? 'جدید ترین کسٹم بلٹ گاڑیاں، جن میں میت کی محفوظ اور باعزت منتقلی کا مکمل انتظام موجود ہے۔'
                  : 'Custom Cadillac and Mercedes-Benz funeral coaches offering discreet, climate-regulated procession transport.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-950/60 border border-stone-800 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                  <Users className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="text-base font-semibold text-white">
                  {isUrdu ? 'خاندانی مشاورت و تعزیتی لاؤنج' : 'Private Bereavement Consultation'}
                </h4>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed pl-11">
                {isUrdu
                  ? 'لواحقین کے بیٹھنے اور فیصلے کرنے کے لیے پرسکون کمرے، چائے کافی اور غم خواری کے ساتھ۔'
                  : 'Comfortable, quiet living-room suites for family arrangements, legal document signing, and restful grief respite.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
