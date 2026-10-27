import React, { useState } from 'react';
import { Calculator, Printer, Check, Phone, Info } from 'lucide-react';
import { Language, ServicePackage } from '../types/funeral';
import { SERVICE_PACKAGES } from '../data/funeralData';

interface AddOnOption {
  id: string;
  name: string;
  nameUrdu: string;
  price: number;
  desc: string;
  descUrdu: string;
}

const ADD_ONS: AddOnOption[] = [
  {
    id: 'addon-livestream',
    name: 'Multi-Camera HD Live Stream Broadcast',
    nameUrdu: 'بیرون ملک عزیزوں کے لیے ایچ ڈی لائیو ویڈیو سٹریمنگ',
    price: 250,
    desc: 'Private high-resolution stream link for family unable to travel.',
    descUrdu: 'محفوظ آن لائن لنک جس سے دور دراز اہلِ خانہ جنازے میں شریک ہو سکتے ہیں۔'
  },
  {
    id: 'addon-prayercards',
    name: 'Printed Janaza Prayer Cards & Surah Yaseen Booklets (100x)',
    nameUrdu: '۱۰۰ عدد سورۃ یٰسین و دعائیہ یادگاری کارڈز',
    price: 180,
    desc: 'Customized with deceased name, date, and comforting Quranic duas.',
    descUrdu: 'مرحوم کے نام اور مسنون دعاؤں کے ساتھ خوبصورت چھپائی۔'
  },
  {
    id: 'addon-florals',
    name: 'Pristine White Lily & Orchid Floral Wreath',
    nameUrdu: 'سفید گلاب و موتیا کی مسنون چادر اور پھول',
    price: 220,
    desc: 'Hand-crafted respectful floral sympathy arrangement.',
    descUrdu: 'انتہائی عقیدت اور خوبصورتی سے تیار کردہ پھولوں کی چادر۔'
  },
  {
    id: 'addon-cemeteryplot',
    name: 'Cemetery Plot Selection & Liaison Assistance',
    nameUrdu: 'قبرستان پلاٹ سلیکشن و دفن انتظامات معاونت',
    price: 450,
    desc: 'Direct facilitation with consecrated Muslim cemeteries or private lawns.',
    descUrdu: 'قریبی مسلم قبرستان میں جگہ کی فراہمی اور رسمی اجازت نامے۔'
  },
  {
    id: 'addon-rushrecords',
    name: 'Expedited Certified Death Records (5 official copies)',
    nameUrdu: 'ڈیتھ سرٹیفکیٹ کی ارجنٹ ۵ تصدیق شدہ نقول',
    price: 120,
    desc: 'Vital for immediate legal, bank, and passport embassy processing.',
    descUrdu: 'بینک اور ایمبیسی امور کے لیے فوری قانونی نقول۔'
  }
];

interface ArrangementEstimatorProps {
  language: Language;
  selectedPackageFromParent?: ServicePackage | null;
  onProceedWithEstimate: (details: {
    selectedPackage: ServicePackage;
    selectedAddOns: AddOnOption[];
    total: number;
  }) => void;
}

export const ArrangementEstimator: React.FC<ArrangementEstimatorProps> = ({
  language,
  selectedPackageFromParent,
  onProceedWithEstimate,
}) => {
  const [selectedPkgId, setSelectedPkgId] = useState<string>(
    selectedPackageFromParent?.id || SERVICE_PACKAGES[0].id
  );
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>(['addon-livestream']);
  const [printAlert, setPrintAlert] = useState(false);

  // Sync if parent passes package
  React.useEffect(() => {
    if (selectedPackageFromParent) {
      setSelectedPkgId(selectedPackageFromParent.id);
    }
  }, [selectedPackageFromParent]);

  const isUrdu = language === 'ur';

  const currentPkg = SERVICE_PACKAGES.find((p) => p.id === selectedPkgId) || SERVICE_PACKAGES[0];
  const activeAddOns = ADD_ONS.filter((a) => selectedAddOnIds.includes(a.id));
  const addOnsTotal = activeAddOns.reduce((sum, a) => sum + a.price, 0);
  const grandTotal = currentPkg.basePrice + addOnsTotal;

  const toggleAddOn = (id: string) => {
    setSelectedAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handlePrint = () => {
    setPrintAlert(true);
    setTimeout(() => {
      window.print();
      setPrintAlert(false);
    }, 400);
  };

  return (
    <section id="estimator" className="py-20 bg-stone-100/70 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-800 font-semibold mb-2">
            <Calculator className="w-4 h-4 text-amber-700" />
            <span>{isUrdu ? 'شفاف تخمینہ اخراجات' : 'Interactive Arrangement Calculator'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight">
            {isUrdu ? 'تدفین کے اخراجات کا فوری اندازہ لگائیں' : 'Build Your Customized Memorial Estimate'}
          </h2>
          <p className="mt-3 text-stone-600 leading-relaxed">
            {isUrdu
              ? 'ہم مالی معاملات میں مکمل دیانت داری کے قائل ہیں۔ اپنی ضرورت کے مطابق پیکیج اور اضافی خدمات منتخب کر کے شفاف اور تفصیلی بل ملاحظہ فرمائیں۔'
              : 'Complete financial transparency is our solemn pledge. Select a primary service tier and customize optional elements to calculate your guaranteed itemized estimate.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Tiers & Add-ons (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Base Tier Selection */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-stone-500">
                  Step 1 · {isUrdu ? 'بنیادی پیکیج منتخب کریں' : 'Choose Base Service Tier'}
                </span>
                <span className="text-xs text-stone-500">
                  {SERVICE_PACKAGES.length} {isUrdu ? 'پیکیجز دستیاب' : 'Options'}
                </span>
              </div>

              <div className="space-y-3">
                {SERVICE_PACKAGES.map((pkg) => {
                  const isSelected = pkg.id === selectedPkgId;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPkgId(pkg.id)}
                      className={`cursor-pointer rounded-xl p-4 transition-all border flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'border-amber-600 bg-amber-50/40 ring-1 ring-amber-600/30'
                          : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full mt-0.5 border flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'border-amber-600 bg-amber-600 text-white'
                              : 'border-stone-300 bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-stone-900">
                            {isUrdu ? pkg.nameUrdu : pkg.name}
                          </div>
                          <div className="text-xs text-stone-500 mt-0.5">
                            {isUrdu ? pkg.subtitleUrdu : pkg.subtitle}
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-mono font-bold text-base text-stone-900">
                          ${pkg.basePrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-Ons Selection */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-stone-500">
                  Step 2 · {isUrdu ? 'اضافی ترجیحات کا انتخاب کریں' : 'Optional Memorial Add-ons'}
                </span>
                <span className="text-xs text-stone-500">
                  {selectedAddOnIds.length} {isUrdu ? 'منتخب شدہ' : 'Selected'}
                </span>
              </div>

              <div className="space-y-3">
                {ADD_ONS.map((addon) => {
                  const isChecked = selectedAddOnIds.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`cursor-pointer rounded-xl p-4 transition-all border flex items-center justify-between gap-4 ${
                        isChecked
                          ? 'border-amber-600 bg-amber-50/30 ring-1 ring-amber-600/20'
                          : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded mt-0.5 border flex items-center justify-center shrink-0 ${
                            isChecked
                              ? 'border-amber-600 bg-amber-600 text-white'
                              : 'border-stone-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-stone-900">
                            {isUrdu ? addon.nameUrdu : addon.name}
                          </div>
                          <div className="text-xs text-stone-500 mt-0.5">
                            {isUrdu ? addon.descUrdu : addon.desc}
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-mono text-sm font-semibold text-stone-800">
                          +${addon.price}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Itemized Invoice / Estimate Summary (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div
              id="printable-card"
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-300 shadow-md"
            >
              <div className="border-b border-stone-200 pb-4 mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-serif font-medium text-stone-900">
                    {isUrdu ? 'تخمینہ رسید' : 'Itemized Estimate Statement'}
                  </h3>
                  <div className="text-xs text-stone-500 mt-0.5">
                    Al-Rahman Funeral Sanctuary · Ref #{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handlePrint}
                  title="Print Estimate"
                  className="p-2 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-3 mb-6 text-sm">
                {/* Base package */}
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-stone-100">
                  <div>
                    <div className="font-semibold text-stone-900">
                      {isUrdu ? currentPkg.nameUrdu : currentPkg.name}
                    </div>
                    <div className="text-xs text-stone-500">
                      {isUrdu ? 'بنیادی جامع خدمات' : 'Primary mortuary services'}
                    </div>
                  </div>
                  <span className="font-mono font-medium text-stone-900 tabular-nums">
                    ${currentPkg.basePrice.toLocaleString()}
                  </span>
                </div>

                {/* Add-ons list */}
                {activeAddOns.map((addon) => (
                  <div
                    key={addon.id}
                    className="flex items-start justify-between gap-3 text-xs text-stone-700"
                  >
                    <span className="truncate pr-2">
                      + {isUrdu ? addon.nameUrdu : addon.name}
                    </span>
                    <span className="font-mono font-medium text-stone-800 tabular-nums shrink-0">
                      ${addon.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total Calculation */}
              <div className="border-t-2 border-stone-900 pt-4 mb-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-stone-900">
                      {isUrdu ? 'کل تخمینہ' : 'Estimated Total'}
                    </span>
                    <p className="text-[11px] text-stone-500">
                      {isUrdu ? 'تمام ٹیکسز اور کاغذی کارروائی شامل' : 'All standard mortuary permits included'}
                    </p>
                  </div>
                  <span className="text-3xl font-mono font-bold text-stone-900 tabular-nums">
                    ${grandTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Notice */}
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-600 mb-6 flex items-start gap-2">
                <Info className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                <span>
                  {isUrdu
                    ? 'یہ تخمینہ پیشگی بکنگ اور فوری خدمات دونوں کے لیے موثر ہے۔ قبر کی خریداری کی سرکاری فیس قبرستان کی لوکیشن کے مطابق مختلف ہو سکتی ہے۔'
                    : 'This estimate is guaranteed upon booking. Cemetery plot purchase charges may vary slightly depending on your chosen consecrated grounds.'}
                </span>
              </div>

              {/* Actions */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() =>
                    onProceedWithEstimate({
                      selectedPackage: currentPkg,
                      selectedAddOns: activeAddOns,
                      total: grandTotal,
                    })
                  }
                  className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold rounded-lg text-sm transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>
                    {isUrdu
                      ? 'اس تخمینہ پر بات چیت یا بکنگ کریں'
                      : 'Lock Estimate & Speak with Director'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium rounded-lg text-xs transition-colors flex items-center justify-center gap-2 border border-stone-200"
                >
                  <Printer className="w-3.5 h-3.5 text-stone-600" />
                  <span>{isUrdu ? 'پرنٹ یا محفوظ کریں (PDF)' : 'Print or Save Official Quote (PDF)'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
