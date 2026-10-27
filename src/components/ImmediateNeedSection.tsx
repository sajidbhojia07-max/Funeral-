import React, { useState } from 'react';
import { Phone, AlertCircle, CheckCircle2, ChevronRight, FileText, Clock } from 'lucide-react';
import { Language } from '../types/funeral';
import { IMMEDIATE_STEPS } from '../data/funeralData';

interface ImmediateNeedSectionProps {
  language: Language;
  onOpenImmediateNeedModal: () => void;
}

export const ImmediateNeedSection: React.FC<ImmediateNeedSectionProps> = ({
  language,
  onOpenImmediateNeedModal,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const isUrdu = language === 'ur';

  return (
    <section id="immediate-need" className="py-16 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
            <AlertCircle className="w-4 h-4 text-amber-700" />
            <span>{isUrdu ? 'فوری رہنمائی و ایمرجنسی گائیڈ' : 'Immediate Need Protocol'}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-medium text-stone-900 tracking-tight">
            {isUrdu
              ? 'اگر ابھی کسی عزیز کا انتقال ہوا ہے تو کیا کریں؟'
              : 'What to Do First: When a Death Occurs'}
          </h2>
          <p className="mt-3 text-stone-600 leading-relaxed">
            {isUrdu
              ? 'صدمے کی اس گھڑی میں پریشان نہ ہوں۔ ہم قدم بہ قدم ہر مرحلے پر آپ کے ساتھ ہیں۔ آپ کو صرف ہم سے رابطہ کرنا ہے، باقی تمام انتظامی و شرعی مراحل ہم احسن طریقے سے سنبھالیں گے۔'
              : 'In these overwhelming initial hours, please pause and breathe. You do not have to carry this alone. Below are the straightforward steps to take right now, and our directors are standing by on our 24/7 emergency dispatch line.'}
          </p>
        </div>

        {/* 4 Interactive Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {IMMEDIATE_STEPS.map((item, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-xl p-6 transition-all border ${
                  isSelected
                    ? 'bg-white border-amber-600 shadow-md ring-1 ring-amber-600/30'
                    : 'bg-white/80 border-stone-200 hover:border-stone-300 hover:bg-white shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-sm font-bold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-amber-100 text-amber-900' : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    Step {item.step}
                  </span>
                  {isSelected && <CheckCircle2 className="w-5 h-5 text-amber-700" />}
                </div>

                <h3 className="text-base font-semibold text-stone-900 mb-2 leading-snug">
                  {isUrdu ? item.titleUrdu : item.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {isUrdu ? item.descUrdu : item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Urgent Action Banner */}
        <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 lg:p-8 border border-stone-800 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl shrink-0 mt-1">
              <Clock className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-serif text-white font-medium">
                {isUrdu ? 'کسی بھی وقت ہماری ڈسپیچ ٹیم دستیاب ہے' : 'Need Immediate Pickup & Funeral Care?'}
              </h3>
              <p className="text-sm text-stone-300 mt-1 leading-relaxed">
                {isUrdu
                  ? 'ہمارے لائسنس یافتہ کوآرڈینیٹر آپ کی کال پر فوری متحرک ہو جائیں گے۔ اسپتال، ہاسپیس یا گھر سے میت کی منتقلی کے لیے ابھی کال کریں۔'
                  : 'Call our emergency director right now. We coordinate immediate mortuary vehicle dispatch from hospitals, hospices, nursing facilities, or private residences.'}
              </p>
              <div className="mt-3 flex items-center gap-4 text-xs text-stone-400">
                <span className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-stone-400" />
                  {isUrdu ? 'مطلوبہ کاغذات: شناختی کارڈ اور میڈیکل رپورٹ' : 'Ready: ID of deceased & doctor pronouncement'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href="tel:+18005553262"
              className="w-full sm:w-auto px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold rounded-lg text-sm tracking-wide flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{isUrdu ? 'کال کریں: 1-800-555-JANAZA' : 'Call: 1-800-555-JANAZA'}</span>
            </a>
            <button
              type="button"
              onClick={onOpenImmediateNeedModal}
              className="w-full sm:w-auto px-5 py-3.5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <span>{isUrdu ? 'فوری درخواست فارم پُر کریں' : 'Dispatch Request Form'}</span>
              <ChevronRight className="w-4 h-4 text-stone-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
