/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImmediateNeedSection } from './components/ImmediateNeedSection';
import { ServicesSection } from './components/ServicesSection';
import { ArrangementEstimator } from './components/ArrangementEstimator';
import { MemorialsSection } from './components/MemorialsSection';
import { SanctuaryFacilitySection } from './components/SanctuaryFacilitySection';
import { GriefSupportSection } from './components/GriefSupportSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ImmediateNeedModal } from './components/ImmediateNeedModal';
import { Language, Memorial, ServicePackage, Condolence } from './types/funeral';
import { INITIAL_MEMORIALS } from './data/funeralData';

export default function App() {
  const [language, setLanguage] = useState<Language>('ur'); // Default to Urdu/bilingual since user requested in Urdu: "Mujhe ik as Bana doo Mari website h funeral ki"
  const [memorials, setMemorials] = useState<Memorial[]>(INITIAL_MEMORIALS);
  const [isImmediateNeedOpen, setIsImmediateNeedOpen] = useState(false);
  const [selectedPackageForEstimator, setSelectedPackageForEstimator] = useState<ServicePackage | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  const handleLightCandle = (memorialId: string) => {
    setMemorials((prev) =>
      prev.map((m) => {
        if (m.id === memorialId) {
          return { ...m, candlesLit: m.candlesLit + 1 };
        }
        return m;
      })
    );
    showNotification(
      language === 'ur'
        ? 'شمع روشن کر دی گئی۔ اللہ تعالیٰ مرحوم کی قبر کو نور سے بھر دے۔'
        : 'Memorial candle lit. A tender light of prayer has been added.'
    );
  };

  const handleSendRose = (memorialId: string) => {
    setMemorials((prev) =>
      prev.map((m) => {
        if (m.id === memorialId) {
          return { ...m, rosesSent: m.rosesSent + 1 };
        }
        return m;
      })
    );
    showNotification(
      language === 'ur'
        ? 'پھول پیش کر دیا گیا۔ آپ کی دلی دعائیں موصول ہوئیں۔'
        : 'Floral tribute placed in sincere sympathy.'
    );
  };

  const handleAddCondolence = (
    memorialId: string,
    condolence: Omit<Condolence, 'id' | 'date'>
  ) => {
    const newCondolence: Condolence = {
      ...condolence,
      id: `c-${Date.now()}`,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    setMemorials((prev) =>
      prev.map((m) => {
        if (m.id === memorialId) {
          return {
            ...m,
            condolences: [newCondolence, ...m.condolences],
          };
        }
        return m;
      })
    );

    showNotification(
      language === 'ur'
        ? 'آپ کا تعزیتی پیغام اور دعائیں یادگاری رجسٹر میں شامل کر دی گئی ہیں۔'
        : 'Your condolence message has been recorded in the memorial guestbook.'
    );
  };

  const handleSubmitNewMemorial = (
    newMem: Omit<Memorial, 'id' | 'candlesLit' | 'rosesSent' | 'condolences'>
  ) => {
    const created: Memorial = {
      ...newMem,
      id: `mem-${Date.now()}`,
      candlesLit: 1,
      rosesSent: 1,
      condolences: [],
    };

    setMemorials((prev) => [created, ...prev]);
    showNotification(
      language === 'ur'
        ? 'نیا جنازہ نوٹس کامیابی سے وال پر شائع کر دیا گیا۔'
        : 'Obituary notice published to the memorial registry.'
    );
  };

  const handleSelectPackage = (pkg: ServicePackage) => {
    setSelectedPackageForEstimator(pkg);
    const elem = document.getElementById('estimator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToEstimator = () => {
    const elem = document.getElementById('estimator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProceedWithEstimate = (details: {
    selectedPackage: ServicePackage;
    total: number;
  }) => {
    setIsImmediateNeedOpen(true);
    showNotification(
      language === 'ur'
        ? `${details.selectedPackage.nameUrdu} کا تخمینہ ($${details.total.toLocaleString()}) محفوظ کر لیا گیا۔ کوآرڈینیٹر تفصیلات درج کر رہا ہے۔`
        : `Estimate for ${details.selectedPackage.name} ($${details.total.toLocaleString()}) saved. Opening coordinator dispatch.`
    );
  };

  const handleOpenContact = () => {
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans ${
        language === 'ur' ? 'font-sans' : ''
      }`}
      dir={language === 'ur' ? 'ltr' : 'ltr'}
    >
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-stone-100 border border-amber-600/60 shadow-xl px-5 py-3 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-3 animate-fade-in max-w-md">
          <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Header with Top Bar Contract */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onOpenImmediateNeed={() => setIsImmediateNeedOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          language={language}
          onOpenImmediateNeed={() => setIsImmediateNeedOpen(true)}
          onScrollToEstimator={handleScrollToEstimator}
        />

        {/* 4-Step Immediate Protocol */}
        <ImmediateNeedSection
          language={language}
          onOpenImmediateNeedModal={() => setIsImmediateNeedOpen(true)}
        />

        {/* Comprehensive Funeral & Memorial Services */}
        <ServicesSection
          language={language}
          onSelectPackage={handleSelectPackage}
        />

        {/* Interactive Custom Arrangement & Cost Estimator */}
        <ArrangementEstimator
          language={language}
          selectedPackageFromParent={selectedPackageForEstimator}
          onProceedWithEstimate={handleProceedWithEstimate}
        />

        {/* Online Memorials, Obituaries & Condolence Wall */}
        <MemorialsSection
          memorials={memorials}
          language={language}
          onLightCandle={handleLightCandle}
          onSendRose={handleSendRose}
          onAddCondolence={handleAddCondolence}
          onSubmitNewMemorial={handleSubmitNewMemorial}
        />

        {/* Sanctuary Chapel & Modern Mortuary Facilities */}
        <SanctuaryFacilitySection language={language} />

        {/* Grief Support, Sabr Reflections & FAQs */}
        <GriefSupportSection language={language} />

        {/* Contact, 24/7 Hotline & Consultations */}
        <ContactSection language={language} />
      </main>

      {/* Footer */}
      <Footer
        language={language}
        onOpenImmediateNeed={() => setIsImmediateNeedOpen(true)}
      />

      {/* 24/7 Immediate Need Dispatch Modal */}
      <ImmediateNeedModal
        isOpen={isImmediateNeedOpen}
        onClose={() => setIsImmediateNeedOpen(false)}
        language={language}
      />
    </div>
  );
}
