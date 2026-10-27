import React from 'react';
import { Check, ArrowRight, Shield, Globe, Heart, FileCheck } from 'lucide-react';
import { Language, ServicePackage } from '../types/funeral';
import { SERVICE_PACKAGES } from '../data/funeralData';

interface ServicesSectionProps {
  language: Language;
  onSelectPackage: (pkg: ServicePackage) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  language,
  onSelectPackage,
}) => {
  const isUrdu = language === 'ur';

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">
            {isUrdu ? 'جامع تدفینی و میموریل پیکیجز' : 'Sacred Trust & Professional Care'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight">
            {isUrdu ? 'خدمات برائے تدفین و نمازِ جنازہ' : 'Comprehensive Funeral & Memorial Services'}
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            {isUrdu
              ? 'ہر خاندان کی ضرورت اور عقیدے کے مطابق شفاف، منظم اور باوقار انتظامات۔ ہمارے تمام پیکیجز میں شریعت کی پاسداری اور قانونی مراحل کی مکمل دیکھ بھال شامل ہے۔'
              : 'Every farewell deserves unhurried dignity, religious fidelity, and transparent guidance. We provide end-to-end mortuary care, ritual preparation, and family accompaniment.'}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SERVICE_PACKAGES.map((pkg, idx) => {
            const isMarquee = pkg.badge !== undefined;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-8 transition-all flex flex-col justify-between border ${
                  isMarquee
                    ? 'border-amber-300 bg-amber-50/20 shadow-md ring-1 ring-amber-300/50'
                    : 'border-stone-200 bg-stone-50/50 hover:bg-stone-50 shadow-sm'
                }`}
              >
                <div>
                  {/* Top line with unboxed metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                      0{idx + 1}. {isUrdu ? 'پیکیج' : 'Arrangement Tier'}
                    </span>
                    {pkg.badge && (
                      <span className="text-xs font-semibold text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-md">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-serif font-medium text-stone-900 mb-2">
                    {isUrdu ? pkg.nameUrdu : pkg.name}
                  </h3>
                  <p className="text-sm font-medium text-amber-900/80 mb-4">
                    {isUrdu ? pkg.subtitleUrdu : pkg.subtitle}
                  </p>

                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {isUrdu ? pkg.descriptionUrdu : pkg.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="border-t border-stone-200/80 pt-6 mb-8 space-y-3">
                    {(isUrdu ? pkg.featuresUrdu : pkg.features).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="p-0.5 mt-0.5 rounded-full bg-stone-200 text-stone-700 shrink-0">
                          <Check className="w-3.5 h-3.5 text-stone-800" />
                        </div>
                        <span className="text-xs sm:text-sm text-stone-700 leading-normal">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Price and CTA */}
                <div className="border-t border-stone-200 pt-6 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-stone-500">
                      {isUrdu ? 'ابتدائی تخمینہ' : 'Base Complete Fee'}
                    </div>
                    <div className="text-2xl font-bold font-mono text-stone-900 tracking-tight">
                      ${pkg.basePrice.toLocaleString()}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg)}
                    className="px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-stone-900 text-white hover:bg-stone-800 transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <span>{isUrdu ? 'انتخاب و تفصیلات' : 'Select Package'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Adjacency Proof Box */}
        <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-sm text-stone-900">
                {isUrdu ? 'شریعہ سرٹیفائیڈ' : 'Sharia Certified'}
              </div>
              <p className="text-xs text-stone-600 mt-1">
                {isUrdu ? 'مستند علماء کرام کی زیرِ نگرانی طریقہ کار' : 'Overseen by certified Islamic scholars'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-sm text-stone-900">
                {isUrdu ? 'قونصلر کلیئرنس' : 'Consulate Clearance'}
              </div>
              <p className="text-xs text-stone-600 mt-1">
                {isUrdu ? 'پاکستانی اور عرب سفارت خانوں سے ڈائریکٹ رابطہ' : 'Direct embassy accreditation for transit'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-sm text-stone-900">
                {isUrdu ? 'باعزت و باحیا غسل' : 'Respectful Ghusl'}
              </div>
              <p className="text-xs text-stone-600 mt-1">
                {isUrdu ? 'مکمل پردہ داری اور نرمی کے ساتھ مسنون غسل' : 'Dedicated male & female washing teams'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FileCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-sm text-stone-900">
                {isUrdu ? 'قانونی دستاویزات' : 'Vital Records'}
              </div>
              <p className="text-xs text-stone-600 mt-1">
                {isUrdu ? 'برتھ و ڈیتھ رجسٹری سے فوری پرمٹس کا حصول' : 'Certified permits & certificates handled'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
