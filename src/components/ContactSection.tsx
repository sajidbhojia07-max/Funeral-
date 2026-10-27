import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { Language } from '../types/funeral';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const isUrdu = language === 'ur';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        inquiryType: 'general',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">
            {isUrdu ? 'ہمہ وقت آپ کی خدمت میں' : 'Here for You Day & Night'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight">
            {isUrdu ? 'رابطہ و ملاقات کے اوقات' : 'Contact Our Directors & Sanctuaries'}
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            {isUrdu
              ? 'چاہے فوری تدفین کی ضرورت ہو، پیشگی وصیت کا انتظام کرنا ہو، یا عمومی رہنمائی درکار ہو، ہماری ٹیم مکمل احترام کے ساتھ حاضر ہے۔'
              : 'Whether you require urgent emergency mortuary services, wish to pre-arrange a service, or have questions about Islamic burial customs, our doors and phone lines remain open 24 hours.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contacts & Facilities (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* 24/7 Emergency Box */}
            <div className="bg-stone-900 text-stone-100 p-6 rounded-2xl border border-stone-800 shadow-md">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-semibold mb-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{isUrdu ? '۲۴ گھنٹے ایمرجنسی لائن' : '24/7 Immediate Dispatch Line'}</span>
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white mb-2">
                1-800-555-JANAZA
              </div>
              <p className="text-xs text-stone-400 leading-relaxed mb-4">
                {isUrdu
                  ? 'وفات کے فوراً بعد بلا تاخیر کال فرمائیں۔ ہمارا ڈائریکٹر فوری مدد فراہم کرے گا۔'
                  : 'Call anytime without delay when a passing occurs. A licensed funeral director always answers directly.'}
              </p>
              <div className="pt-4 border-t border-stone-800 flex flex-wrap gap-4 text-xs">
                <a
                  href="tel:+18005553262"
                  className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{isUrdu ? 'ابھی کال کریں' : 'Call Now'}</span>
                </a>
                <a
                  href="https://wa.me/18005553262"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium rounded-lg transition-colors flex items-center gap-1.5 border border-stone-700"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp 24/7</span>
                </a>
              </div>
            </div>

            {/* Physical Facility Locations */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-5 shadow-sm">
              <h3 className="text-base font-semibold text-stone-900 border-b border-stone-100 pb-3">
                {isUrdu ? 'ہمارے مراکز اور دفاتر' : 'Sanctuary Locations'}
              </h3>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold text-stone-900">
                    {isUrdu ? 'مرکزی چیپل اور غسل سینٹر' : 'Main Sanctuary & Ghusl Washing Suites'}
                  </div>
                  <div className="text-stone-600 mt-0.5">450 Peace Avenue, Suite 100, West Garden</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">Open 24 Hours for Mortuary Intake</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold text-stone-900">
                    {isUrdu ? 'جنوبی میموریل چیپل و مشاورت' : 'South Lawn Chapel & Bereavement Office'}
                  </div>
                  <div className="text-stone-600 mt-0.5">820 Serenity Boulevard, South Ridge</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">Visitation Hours: 9:00 AM – 8:00 PM Daily</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-stone-100">
                <Mail className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold text-stone-900">
                    {isUrdu ? 'ای میل رابطہ' : 'Written Inquiries'}
                  </div>
                  <div className="text-stone-600 mt-0.5">care@alrahman-memorial.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
              <h3 className="text-xl font-serif font-medium text-stone-900 mb-2">
                {isUrdu ? 'پیغام یا مشاورت کی درخواست بھیجیں' : 'Send an Inquiry or Schedule a Consultation'}
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                {isUrdu
                  ? 'فوری انتقال کی صورت میں براہ کرم اوپر دیے گئے نمبر پر کال کریں، دیگر امور کے لیے فارم پُر کریں۔'
                  : 'For immediate deaths, please phone directly for instant response. For advance planning and questions, submit below.'}
              </p>

              {submitted ? (
                <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-serif font-medium text-emerald-950">
                    {isUrdu ? 'آپ کا پیغام موصول ہو چکا ہے' : 'Message Received with Care'}
                  </h4>
                  <p className="text-xs text-emerald-800">
                    {isUrdu
                      ? 'ہمارا کوآرڈینیٹر جلد از جلد آپ سے رابطہ کرے گا۔ شکریہ۔'
                      : 'Our family care director will review your notes and respond within the hour.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        {isUrdu ? 'آپ کا نام' : 'Your Full Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Asad Mahmood"
                        className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        {isUrdu ? 'فون نمبر' : 'Phone Number'} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        {isUrdu ? 'ای میل ایڈریس' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-600 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        {isUrdu ? 'موضوع / مقصد' : 'Purpose of Inquiry'}
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-600 focus:outline-none bg-white"
                      >
                        <option value="general">{isUrdu ? 'عمومی معلومات' : 'General Questions'}</option>
                        <option value="immediate">{isUrdu ? 'فوری جنازہ و تدفین' : 'Immediate Funeral Need'}</option>
                        <option value="repatriation">{isUrdu ? 'بین الاقوامی میت ٹرانسپورٹ' : 'International Repatriation'}</option>
                        <option value="preplan">{isUrdu ? 'پیشگی وصیت و پلاننگ' : 'Advance Pre-Planning'}</option>
                        <option value="cemetery">{isUrdu ? 'قبرستان پلاٹ معلومات' : 'Cemetery Ground Inquiry'}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {isUrdu ? 'آپ کا پیغام یا سوالات' : 'How Can We Comfortably Assist You?'}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        isUrdu
                          ? 'اپنی ضرورت یا استفسار تفصیل سے لکھیں...'
                          : 'Provide any details regarding family wishes, preferred mosques, or timelines...'
                      }
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-600 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3 bg-stone-900 hover:bg-stone-800 text-stone-100 font-semibold rounded-lg text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isUrdu ? 'پیغام ارسال کریں' : 'Send Confidential Request'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
