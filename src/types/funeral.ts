export type Language = 'en' | 'ur';

export interface Condolence {
  id: string;
  author: string;
  relation?: string;
  message: string;
  date: string;
  flowersSent?: boolean;
}

export interface Memorial {
  id: string;
  fullName: string;
  fullNameUrdu?: string;
  birthDate: string;
  passedDate: string;
  age: number;
  photoUrl: string;
  bio: string;
  bioUrdu?: string;
  janazaTime: string;
  janazaDate: string;
  janazaLocation: string;
  janazaLocationUrdu?: string;
  burialCemetery: string;
  burialCemeteryUrdu?: string;
  serviceType: 'Islamic Janaza' | 'Traditional Memorial' | 'Repatriation';
  candlesLit: number;
  rosesSent: number;
  condolences: Condolence[];
}

export interface ServicePackage {
  id: string;
  name: string;
  nameUrdu: string;
  subtitle: string;
  subtitleUrdu: string;
  basePrice: number;
  badge?: string;
  description: string;
  descriptionUrdu: string;
  features: string[];
  featuresUrdu: string[];
}

export interface FAQItem {
  question: string;
  questionUrdu: string;
  answer: string;
  answerUrdu: string;
  category: 'immediate' | 'janaza' | 'repatriation' | 'pricing';
}

export interface GriefGuide {
  id: string;
  title: string;
  titleUrdu: string;
  summary: string;
  summaryUrdu: string;
  readTime: string;
  content: string;
  contentUrdu: string;
}
