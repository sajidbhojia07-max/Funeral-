import React, { useState } from 'react';
import { X, Phone, Clock, AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Language } from '../types/funeral';

interface ImmediateNeedModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ImmediateNeedModal: React.FC<ImmediateNeedModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  const [urgency, setUrgency] = useState<'immediate' | 'hospice' | 'upcoming'>('immediate');
  const [deceasedName, setDeceasedName] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const isUrdu = language === 'ur';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-stone-300 shadow-2xl relative my-6">
        {/* Urgent Header */}
        <div className="bg-stone-950 text-stone-100 p-6 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-medium text-white">
                {isUrdu ? 'فوری ایمرجنسی ڈسپیچ و میت منتقلی' : 'Immediate Need Dispatch Request'}
              </h3>
              <p className="text-xs text-amber-400 font-sans mt-0.5">
                {isUrdu ? 'ہماری ٹیم فوری رابطہ کرے گی' : '24/7 Licensed Mortuary Rapid Response'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <h4 className="text-2xl font-serif font-medium text-stone-900">
                {isUrdu ? 'درخواست موصول ہو گئی ہے' : 'Dispatch Request Received'}
              </h4>
              <p className="text-sm text-stone-600 mt-2 max-w-md mx-auto leading-relaxed">
                {isUrdu
                  ? 'ہمارے سینئر جنازہ ڈائریکٹر اگلے ۱۰ منٹ کے اندر آپ کے فراہم کردہ نمبر پر رابطہ کر رہے ہیں اور گاڑی فوری روانہ کی جا رہی ہے۔'
                  : 'Our on-duty licensed director has been notified and will call you immediately at your number to confirm transfer authorization.'}
              </p>
            </div>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl max-w-sm mx-auto text-left text-xs space-y-2">
              <div className="font-semibold text-amber-900 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>{isUrdu ? 'فوری کارروائی کا طریقہ' : 'Next Immediate Step'}</span>
              </div>
              <p className="text-amber-800">
                {isUrdu
                  ? 'اگر اسپتال میں ہیں تو نرسنگ سٹاف کو بتائیں کہ "Al-Rahman Memorial" میت کو منتقل کرے گا۔'
                  : 'If at a medical facility, inform the nursing supervisor or release desk that "Al-Rahman Memorial" is your designated funeral home.'}
              </p>
            </div>

            <div className="pt-3">
              <a
                href="tel:+18005553262"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-amber-400 font-semibold rounded-lg text-sm hover:bg-stone-800 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly: 1-800-555-JANAZA</span>
              </a>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="text-xs text-stone-500 hover:text-stone-800 underline block mx-auto pt-2"
            >
              {isUrdu ? 'یہ ونڈو بند کریں' : 'Close Window'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {/* Urgency Radio Selector */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                {isUrdu ? 'صورتحال کی نوعیت' : 'Current Situation Urgency'} *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setUrgency('immediate')}
                  className={`p-3 rounded-lg border text-xs text-left transition-all ${
                    urgency === 'immediate'
                      ? 'border-amber-600 bg-amber-50/70 font-semibold text-amber-950 ring-1 ring-amber-600'
                      : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <span className="block font-bold mb-0.5">
                    {isUrdu ? 'انتقال ہو چکا ہے' : 'Death Occurred'}
                  </span>
                  <span className="text-[11px] text-stone-500">
                    {isUrdu ? 'فوری گاڑی درکار ہے' : 'Need pickup now'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setUrgency('hospice')}
                  className={`p-3 rounded-lg border text-xs text-left transition-all ${
                    urgency === 'hospice'
                      ? 'border-amber-600 bg-amber-50/70 font-semibold text-amber-950 ring-1 ring-amber-600'
                      : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <span className="block font-bold mb-0.5">
                    {isUrdu ? 'ہاسپیس / انتہائی نگہداشت' : 'Hospice Care'}
                  </span>
                  <span className="text-[11px] text-stone-500">
                    {isUrdu ? 'قریب وقت میں متوقع' : 'Passing imminent'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setUrgency('upcoming')}
                  className={`p-3 rounded-lg border text-xs text-left transition-all ${
                    urgency === 'upcoming'
                      ? 'border-amber-600 bg-amber-50/70 font-semibold text-amber-950 ring-1 ring-amber-600'
                      : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  <span className="block font-bold mb-0.5">
                    {isUrdu ? 'اگلے ۲۴ گھنٹے' : 'Next 24-48 Hours'}
                  </span>
                  <span className="text-[11px] text-stone-500">
                    {isUrdu ? 'انتظامات کی تیاری' : 'Advance preparation'}
                  </span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  {isUrdu ? 'مرحوم / مریض کا نام' : 'Name of Loved One'} *
                </label>
                <input
                  type="text"
                  required
                  value={deceasedName}
                  onChange={(e) => setDeceasedName(e.target.value)}
                  placeholder={isUrdu ? 'مرحوم کا نام درج کریں' : 'Full legal name'}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  {isUrdu ? 'موجودہ مقام / اسپتال' : 'Current Facility / Location'} *
                </label>
                <input
                  type="text"
                  required
                  value={currentLocation}
                  onChange={(e) => setCurrentLocation(e.target.value)}
                  placeholder={isUrdu ? 'مثلاً: سٹی اسپتال، روم ۳۰۲ یا گھر کا پتہ' : 'e.g. Memorial Hospital, Rm 412 or Home address'}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  {isUrdu ? 'آپ کا نام (لواحقین)' : 'Your Name (Primary Contact)'} *
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Asif Raza (Son/Spouse)"
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  {isUrdu ? 'رابطہ نمبر (موبائل)' : 'Direct Phone Number (Urgent)'} *
                </label>
                <input
                  type="tel"
                  required
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">
                {isUrdu ? 'کوئی خاص ہدایت یا سوال' : 'Special Instructions or Questions'}
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={
                  isUrdu
                    ? 'مثلاً: اسلامی غسل، پاکستان میت بھیجنا، یا مخصوص قبرستان...'
                    : 'e.g. Need Islamic Ghusl team, international flight repatriation, or specific mosque...'
                }
                className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600"
              />
            </div>

            <div className="pt-2 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-stone-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{isUrdu ? 'تمام معلومات سختی سے خفیہ رکھی جاتی ہیں' : 'Strict confidential handling'}</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-lg text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                {isUrdu ? 'فوری ڈسپیچ بھیجیں' : 'Dispatch Vehicle & Director'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
