import { Memorial, ServicePackage, FAQItem, GriefGuide } from '../types/funeral';

export const INITIAL_MEMORIALS: Memorial[] = [
  {
    id: 'mem-1',
    fullName: 'Dr. Muhammad Tariq Khan',
    fullNameUrdu: 'ڈاکٹر محمد طارق خان',
    birthDate: 'August 14, 1952',
    passedDate: 'October 24, 2026',
    age: 74,
    photoUrl: '/src/assets/images/memorial_chapel_interior_1793137430484.jpg',
    bio: 'Dedicated physician, loving father, and devoted pillar of the community who spent four decades healing others with boundless generosity, wisdom, and warm humility.',
    bioUrdu: 'ایک مشفق طبیب، محبت کرنے والے والد، اور باوقار بزرگ جنہوں نے چار دہائیاں بے لوث خدمت، دانائی اور نرم مزاجی کے ساتھ خلقِ خدا کی مسیحائی میں گزاریں۔',
    janazaDate: 'Thursday, October 29, 2026',
    janazaTime: '1:30 PM (After Zuhr Prayer)',
    janazaLocation: 'Central Grand Mosque & Islamic Center, 450 Peace Avenue',
    janazaLocationUrdu: 'مرکزی جامع مسجد و اسلامک سینٹر، ۴۵۰ پیس ایونیو',
    burialCemetery: 'Garden of Eternal Peace Muslim Cemetery, Plot B-14',
    burialCemeteryUrdu: 'باغِ امن مسلم قبرستان، پلاٹ بی-۱۴',
    serviceType: 'Islamic Janaza',
    candlesLit: 84,
    rosesSent: 62,
    condolences: [
      {
        id: 'c-1',
        author: 'Dr. Asim Siddiqui & Family',
        relation: 'Colleague & Friend',
        message: 'إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ. A monumental loss to medicine and to everyone who knew his gentle soul. May Allah SWT elevate his status in Jannat-ul-Firdaus.',
        date: 'October 25, 2026',
        flowersSent: true
      },
      {
        id: 'c-2',
        author: 'Zainab & Bilal Farooq',
        relation: 'Community Member',
        message: 'Doctor Sahib treated our grandparents with immense patience and dignity. We will always remember his kindness and pray for sabr for his grieving family.',
        date: 'October 26, 2026',
        flowersSent: false
      }
    ]
  },
  {
    id: 'mem-2',
    fullName: 'Haji Abdul Rashid Sheikh',
    fullNameUrdu: 'حاجی عبدالرشید شیخ',
    birthDate: 'January 12, 1944',
    passedDate: 'October 21, 2026',
    age: 82,
    photoUrl: '/src/assets/images/memorial_tribute_candles_1793137430886.jpg',
    bio: 'Respected elder, entrepreneur, and philanthropist known for establishing educational foundations, orphan care sponsorships, and tireless community building.',
    bioUrdu: 'معروف تاجر، فلاحی رہنما اور معزز شخصیت، جنہوں نے تعلیمی وظائف، یتیم خانوں کی کفالت اور مساجد کی تعمیر میں لازوال کردار ادا کیا۔',
    janazaDate: 'Completed (Burial Held)',
    janazaTime: 'Friday, October 23, 2026 (Post-Jummah)',
    janazaLocation: 'Noor-e-Madina Islamic Sanctuary',
    janazaLocationUrdu: 'نورِ مدینہ اسلامک سینکچوئری',
    burialCemetery: 'Wadi-us-Salam Memorial Gardens, Section C',
    burialCemeteryUrdu: 'وادی السلام میموریل گارڈنز، سیکشن سی',
    serviceType: 'Islamic Janaza',
    candlesLit: 142,
    rosesSent: 98,
    condolences: [
      {
        id: 'c-3',
        author: 'Sheikh Family Overseas',
        relation: 'Relatives in UK',
        message: 'We were able to join the Janaza prayer via the live stream service arranged by the memorial home. Heartfelt gratitude for the immense respect and care shown.',
        date: 'October 23, 2026',
        flowersSent: true
      }
    ]
  },
  {
    id: 'mem-3',
    fullName: 'Syeda Maryam Begum',
    fullNameUrdu: 'سیدہ مریم بیگم',
    birthDate: 'March 3, 1938',
    passedDate: 'October 25, 2026',
    age: 88,
    photoUrl: '/src/assets/images/peaceful_bereavement_dawn_1793137430259.jpg',
    bio: 'Cherished matriarch of four generations, teacher of Quranic recitation, and source of boundless warmth, prayers, and unconditional love.',
    bioUrdu: 'چار نسلوں کی محترم سربراہ، قرآنِ پاک کی استاد اور بے پایاں دعاؤں، محبت اور استقامت کا منبع۔',
    janazaDate: 'Wednesday, October 28, 2026',
    janazaTime: '4:15 PM (After Asr Prayer)',
    janazaLocation: 'Al-Huda Community Hall & Sanctuary',
    janazaLocationUrdu: 'الہدیٰ کمیونٹی ہال و سینکچوئری',
    burialCemetery: 'Fairview Memorial Lawn & Muslim Heritage Grounds',
    burialCemeteryUrdu: 'فیئر ویو میموریل لان اور مسلم ہیریٹیج گراؤنڈز',
    serviceType: 'Islamic Janaza',
    candlesLit: 95,
    rosesSent: 73,
    condolences: [
      {
        id: 'c-4',
        author: 'Amina & Haris Hashmi',
        relation: 'Granddaughter',
        message: 'Dadi Jan taught us how to pray with sincere hearts. May her grave be an expanse of radiant light from the gardens of Paradise. Ameen.',
        date: 'October 26, 2026',
        flowersSent: true
      }
    ]
  },
  {
    id: 'mem-4',
    fullName: 'David Jonathan Edwards',
    fullNameUrdu: 'ڈیوڈ جوناتھن ایڈورڈز',
    birthDate: 'June 19, 1960',
    passedDate: 'October 19, 2026',
    age: 66,
    photoUrl: '/src/assets/images/funeral_hero_serene_1793137429604.jpg',
    bio: 'Beloved father, architect, and community conservationist whose gentle wisdom, craftsmanship, and quiet courage touched every friend and neighbor.',
    bioUrdu: 'محترم والد، آرکیٹیکٹ اور باوقار استاد، جن کی خدمات اور شرافت نے تمام جاننے والوں کے دلوں کو چھو لیا۔',
    janazaDate: 'Memorial Gathering Completed',
    janazaTime: 'Monday, October 26, 2026 at 11:00 AM',
    janazaLocation: 'Serenity Chapel, Al-Rahman Memorial Center',
    janazaLocationUrdu: 'سیرینٹی چیپل، الرحمن میموریل سینٹر',
    burialCemetery: 'Oakridge Peaceful Woods Burial Preserve',
    burialCemeteryUrdu: 'اوکرج پیس فل ووڈز پریزرو',
    serviceType: 'Traditional Memorial',
    candlesLit: 63,
    rosesSent: 41,
    condolences: [
      {
        id: 'c-5',
        author: 'Sarah Jenkins',
        relation: 'Lifelong Neighbor',
        message: 'David was the kindest neighbor anyone could ever ask for. Holding his family close to our hearts in heartfelt sympathy.',
        date: 'October 22, 2026',
        flowersSent: false
      }
    ]
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'pkg-essential',
    name: 'Essential Islamic Janaza',
    nameUrdu: 'بنیادی اسلامی تدفین و جنازہ',
    subtitle: 'Direct, dignified Sharia-compliant arrangement',
    subtitleUrdu: 'مکمل شرعی اصولوں کے مطابق فوری باوقار تدفین',
    basePrice: 1850,
    badge: 'Most Requested',
    description: 'Comprehensive ritual preparation, respectful transportation, Ghusl washing with female/male ritual washing teams, premium Kafan shroud, and cemetery coordination.',
    descriptionUrdu: 'غسل و کفن کا مکمل انتظام (مردانہ و زنانہ عملہ)، میت کی باوقار ایمبولینس میں منتقلی، نمازِ جنازہ کوآرڈینیشن اور قبرستان کی تیاری۔',
    features: [
      '24/7 Immediate local mortuary transport & pickup',
      'Ritual Ghusl purification performed by certified washing teams',
      'High-grade organic 3-piece / 5-piece Kafan shroud & perfumes',
      'Transportation to Mosque for Salāt al-Janāzah prayer',
      'Escort & coordination to cemetery with grave lowering assist',
      'Registration of death certificate & municipal burial permits'
    ],
    featuresUrdu: [
      '۲۴ گھنٹے فوری ایمبولینس و ٹرانسپورٹ سروس',
      'سند یافتہ مردانہ و زنانہ عملے کے ذریعے مسنون طریقہ غسل',
      'اعلیٰ درجے کا خالص کاٹن کفن، کافور اور مسنون خوشبوئیں',
      'مسجد تک نمازِ جنازہ کے لیے باوقار سواری اور میت کی منتقلی',
      'قبرستان میں تدفین اور لحد میں اتارنے کی معاونت',
      'ڈیتھ سرٹیفکیٹ اور بلدیاتی تدفین اجازت ناموں کی تکمیل'
    ]
  },
  {
    id: 'pkg-traditional',
    name: 'Full Memorial & Chapel Gathering',
    nameUrdu: 'مکمل میموریل و دعائیہ مجلس پیکیج',
    subtitle: 'Extended family gathering, chapel visitation & prayer service',
    subtitleUrdu: 'خاندان و احباب کے لیے تعزیتی ہال، دعائیہ نشست اور مکمل تدفین',
    basePrice: 2800,
    description: 'Complete ceremonial arrangements including private family viewing suite, multi-faith chapel access, audio-visual high-definition live streaming for distant relatives, and memorial cards.',
    descriptionUrdu: 'مکمل جنازہ و تعزیتی خدمات، پُرسکون خاندانی وزیٹیشن ہال، بیرونِ ملک موجود عزیزوں کے لیے ایچ ڈی لائیو نشریات، اور یادگاری دعائیہ کارڈز۔',
    features: [
      'All services included in Essential Janaza package',
      'Private serene family reflection suite (up to 4 hours)',
      'High-definition multi-camera live streaming for global family',
      'Memorial prayer booklets (100 custom printed copies)',
      'Digital guestbook and obituary page creation',
      'Dedicated funeral director coordinator throughout service'
    ],
    featuresUrdu: [
      'بنیادی جنازہ پیکیج کی تمام سہولیات شامل ہیں',
      'خاندان کے لیے پرسکون پرائیویٹ ہال (۴ گھنٹے تک)',
      'بیرون ملک رشتہ داروں کے لیے لائیو ویڈیو براڈکاسٹ',
      '۱۰۰ عدد حسبِ ضرورت پرنٹ شدہ دعائیہ کارڈز و کتابچے',
      'آن لائن یادگاری صفحہ اور ڈیجیٹل تعزیتی رجسٹر',
      'مستقل جنازہ ڈائریکٹر و کوآرڈینیٹر کی مکمل رہنمائی'
    ]
  },
  {
    id: 'pkg-repatriation',
    name: 'International Repatriation',
    nameUrdu: 'بین الاقوامی میت ٹرانسپورٹ (وطن واپسی)',
    subtitle: 'Air transport to Pakistan, Middle East, Europe & worldwide',
    subtitleUrdu: 'پاکستان، مشرقِ وسطیٰ اور دنیا بھر کے لیے فضائی میت منتقلی',
    basePrice: 4200,
    badge: 'Specialized Expertise',
    description: 'Specialized global mortuary logistics, embassy and consulate document clearance, zinc-lined international flight hermetic caskets, and customs approvals.',
    descriptionUrdu: 'بین الاقوامی ایئر کارگو لاجسٹکس، سفارت خانے اور قونصل خانے سے دستاویزات کی تصدیق، ایئر ٹرانسپورٹ کے لیے معیاری تابوت اور کسٹم کلیئرنس۔',
    features: [
      'Complete embassy & consular mortuary document processing',
      'Aviation-certified zinc hermetic seal container / flight casket',
      'Embalming or specialized preservation per carrier regulations',
      'Direct cargo flight booking and tracking to destination airport',
      'Coordination with receiving funeral home or family in home country',
      'No-objection certificates (NOC) and multilingual death records'
    ],
    featuresUrdu: [
      'تمام متعلقہ ایمبیسی اور قونصلر دستاویزات کی منظوری',
      'بین الاقوامی فضائی قوانین کے مطابق زنک سیلڈ محفوظ تابوت',
      'ایئر لائن قوانین کے مطابق میڈیکل پریزرویشن',
      'منزل کے ایئرپورٹ تک فوری کارگو بکنگ اور فلائٹ ٹریکنگ',
      'وطن میں وصول کنندہ اہلخانہ یا لوکل سروس سے ہم آہنگی',
      'این او سی (NOC) اور کثیر لسانی دستاویزات کی فراہمی'
    ]
  },
  {
    id: 'pkg-preplan',
    name: 'Pre-Planning & Advance Arrangement',
    nameUrdu: 'پیشگی منصوبہ بندی و انتظامات',
    subtitle: 'Lock current pricing and relieve future family burden',
    subtitleUrdu: 'موجودہ قیمتوں پر پیشگی معاہدہ اور اہلِ خانہ کو پریشانی سے نجات',
    basePrice: 1650,
    description: 'Document your personal religious and ceremonial preferences ahead of time. Protect loved ones from stress and sudden financial strain during moments of profound grief.',
    descriptionUrdu: 'اپنی مذہبی و شرعی ترجیحات اور تدفین کی وصیت پیشگی درج کروائیں۔ زندگی میں ہی سب طے کر کے اہلِ خانہ کو اچانک مالی و ذہنی بوجھ سے محفوظ رکھیں۔',
    features: [
      'Guaranteed locked pricing immune to future inflation',
      'Recorded written religious & personal burial instructions',
      'Pre-allocated cemetery plot selection and registry',
      'Flexible monthly payment options or one-time trust deposit',
      'Transferable anywhere nationwide if residence relocates',
      'Certified copy delivered to designated family executors'
    ],
    featuresUrdu: [
      'مستقبل کی مہنگائی سے محفوظ گارنٹی شدہ فکسڈ ریٹ',
      'شرعی وصیت اور ذاتی تدفینی ترجیحات کی تحریری دستاویز',
      'قبرستان میں پلاٹ کی پیشگی نشاندہی اور الاٹمنٹ معاونت',
      'آسان اقساط یا یکمشت ٹرسٹ فنڈ ڈپازٹ کا اختیار',
      'رہائش کی تبدیلی کی صورت میں ملکی سطح پر قابلِ منتقلی',
      'نامزد فیملی ممبرز اور وارثین کو مکمل مصدقہ فائل کی فراہمی'
    ]
  }
];

export const IMMEDIATE_STEPS = [
  {
    step: '01',
    title: 'Obtain Official Pronouncement of Death',
    titleUrdu: 'ڈاکٹر یا اسپتال سے وفات کی تصدیق حاصل کریں',
    desc: 'If at home, contact emergency services or attending physician. If in hospital or hospice, nursing staff will process the initial medical certificate of death.',
    descUrdu: 'اگر وفات گھر پر ہوئی ہو تو ڈاکٹر یا ایمرجنسی عملے کو اطلاع دیں۔ اگر اسپتال میں ہو تو وہاں کا طبی عملہ قانونی ڈیتھ سرٹیفکیٹ جاری کرے گا۔'
  },
  {
    step: '02',
    title: 'Call Our 24/7 Dispatch Hotline',
    titleUrdu: 'ہماری ۲۴ گھنٹے ایمرجنسی ہیلپ لائن پر کال کریں',
    desc: 'Our compassionate licensed funeral directors answer day and night. We guide you calmly through the immediate next steps with zero pressure.',
    descUrdu: 'ہمارا عملہ دن رات آپ کی خدمت کے لیے تیار ہے۔ ایک فون کال پر آپ کو تمام ضروری رہنمائی ملے گی اور فوری عمل شروع ہوگا۔'
  },
  {
    step: '03',
    title: 'Dignified Transportation & Safe Keeping',
    titleUrdu: 'میت کی باوقار اور محفوظ منتقلی',
    desc: 'Our specialized transport team arrives with utmost respect to bring your loved one to our climate-controlled care facility and washing sanctuary.',
    descUrdu: 'ہماری باوقار ایمبولینس اور تربیت یافتہ ٹیم اسپتال یا گھر پہنچ کر میت کو انتہائی احترام کے ساتھ ہمارے سینٹر منتقل کرے گی۔'
  },
  {
    step: '04',
    title: 'Arranging Ghusl, Janaza & Burial',
    titleUrdu: 'غسل، نمازِ جنازہ اور تدفین کے اوقات کا تعین',
    desc: 'We coordinate with your chosen Mosque, family elders, and cemetery for timely burial according to Islamic tradition or your family wishes.',
    descUrdu: 'ہم آپ کی ترجیحی مسجد، معزز علماء، اور قبرستان سے رابطہ کر کے شرعی طریقے کے مطابق غسل، نمازِ جنازہ اور تدفین مکمل کرواتے ہیں۔'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'immediate',
    question: 'How quickly can your ambulance team arrive after a death?',
    questionUrdu: 'اطلاع ملنے کے بعد آپ کی ٹیم کتنی دیر میں پہنچتی ہے؟',
    answer: 'Our immediate dispatch unit operates 24 hours a day, 7 days a week, 365 days a year. Across the metropolitan area, our arrival time is typically within 45 to 75 minutes of your call.',
    answerUrdu: 'ہماری ایمرجنسی رسپانس یونٹ سال کے ۳۶۵ دن ۲۴ گھنٹے فعال رہتی ہے۔ کال موصول ہونے کے بعد عام طور پر ۴۵ سے ۷۵ منٹ کے اندر عملہ پہنچ جاتا ہے۔'
  },
  {
    category: 'janaza',
    question: 'How is the Islamic ritual washing (Ghusl) conducted?',
    questionUrdu: 'اسلامی طریقہ غسل کس طرح دیا جاتا ہے؟',
    answer: 'Ghusl is performed in our private, purpose-built ritual washing suites. Deceased men are attended by trained pious Muslim men, and deceased women by qualified Muslim women, strictly upholding dignity, privacy (Awrah), and Sunnah traditions. Close family members are welcome to participate with gentle guidance.',
    answerUrdu: 'غسل ہمارے مخصوص جدید اور باحیا غسل رومز میں دیا جاتا ہے۔ مردوں کو باعمل مرد اور خواتین کو باشرع خواتین غسل دیتی ہیں، جن میں مکمل پردے اور سنتِ نبوی کا خیال رکھا جاتا ہے۔ قریبی لواحقین بھی رہنمائی کے ساتھ شریک ہو سکتے ہیں۔'
  },
  {
    category: 'repatriation',
    question: 'How long does international repatriation take to Pakistan or other countries?',
    questionUrdu: 'پاکستان یا دیگر ممالک میت بھیجنے میں کتنا وقت لگتا ہے؟',
    answer: 'Typically between 2 to 4 business days. This timeframe covers obtaining the certified death certificate, health department clearances, consular visa/mortuary passport endorsements, and booking scheduled commercial air cargo flights.',
    answerUrdu: 'عام طور پر ۲ سے ۴ دن کا وقت درکار ہوتا ہے۔ اس میں ڈیتھ سرٹیفکیٹ، محکمہ صحت کی این او سی، سفارت خانے کی منظوری اور پرواز کی بکنگ شامل ہے۔'
  },
  {
    category: 'pricing',
    question: 'Are there hidden fees or surprise charges in your funeral quotes?',
    questionUrdu: 'کیا اخراجات میں کوئی پوشیدہ یا غیر متوقع فیس شامل ہوتی ہے؟',
    answer: 'Never. We uphold complete financial transparency as a sacred trust. Every quote specifies our service fees, vehicle transport, shroud/casket costs, and external municipal or cemetery fees itemized line-by-line upfront.',
    answerUrdu: 'بالکل نہیں۔ شفافیت ہماری بنیادی اقدار کا حصہ ہے۔ بل میں ہر مد (ٹرانسپورٹ، کفن، غسل، قبرستان فیس) صاف اور واضح لکھی ہوتی ہے تاکہ لواحقین پر کوئی غیر متوقع بوجھ نہ پڑے۔'
  }
];

export const GRIEF_GUIDES: GriefGuide[] = [
  {
    id: 'grief-1',
    title: 'The Prophetic Etiquettes of Mourning and Patience (Sabr)',
    titleUrdu: 'موت پر صبر اور اسلامی آدابِ تعزیت',
    summary: 'A compassionate reminder on experiencing genuine human grief while holding onto hope in the promise of Allah.',
    summaryUrdu: 'دکھ کی گھڑی میں قلبی تسکین، آنسوؤں کی معصومیت اور اللہ تعالیٰ کی رضا پر صبر جمیل کا مفہوم۔',
    readTime: '4 min read',
    content: 'Grief is a natural human expression of deep love. The Prophet Muhammad (peace be upon him) wept when his infant son Ibrahim passed away, saying: "The eyes weep and the heart grieves, but we say nothing except that which pleases our Lord." Mourning does not mean suppressing heartache, but anchoring oneself in prayer, charity (Sadaqah Jariyah), and sincere supplication for the departed.',
    contentUrdu: 'غم ایک فطری انسانی جذبہ ہے۔ نبی کریم ﷺ کے صاحبزادے حضرت ابراہیمؑ کا وصال ہوا تو آپ ﷺ کی آنکھوں سے آنسو جاری ہوئے اور آپ ﷺ نے فرمایا: "آنکھیں روتی ہیں اور دل غمگین ہے، لیکن ہم اپنی زبان سے وہی کہیں گے جس سے ہمارا رب راضی ہو۔" صبر کا مطلب جذبات کو دبانا نہیں، بلکہ اللہ کی بارگاہ میں دعا اور صدقہ جاریہ کے ساتھ استقامت اختیار کرنا ہے۔'
  },
  {
    id: 'grief-2',
    title: 'Immediate Legal & Administrative Checklist After Loss',
    titleUrdu: 'وفات کے بعد قانونی و دفتری امور کی لازمی فہرست',
    summary: 'Clear step-by-step guidance on estate notifications, death certificates, pension claims, and bank accounts.',
    summaryUrdu: 'ڈیتھ سرٹیفکیٹ کی نقول، بینک اکاؤنٹس، پراپرٹی اور پنشن کے قانونی تقاضوں کو پورا کرنے کا آسان خاکہ۔',
    readTime: '6 min read',
    content: 'Following the burial, families must navigate administrative responsibilities. We provide 5 to 10 certified copies of the death certificate, notify vital statistics, assist with social security notifications, and connect families with reputable estate planning professionals.',
    contentUrdu: 'تدفین کے بعد لواحقین کو قانونی امور نمٹانے ہوتے ہیں۔ ہم آپ کو ڈیتھ سرٹیفکیٹ کی ضروری نقول فراہم کرتے ہیں، سرکاری محکموں کو اطلاع دینے میں مدد دیتے ہیں اور وراثتی امور کے لیے مستند رہنمائی فراہم کرتے ہیں۔'
  },
  {
    id: 'grief-3',
    title: 'Supporting Children and Young People Through Bereavement',
    titleUrdu: 'بچوں کو غم اور صدمے سے نبرد آزما ہونے میں مدد دینا',
    summary: 'How to communicate truthfully, gently, and reassuringly when children lose a parent or grandparent.',
    summaryUrdu: 'والدین یا دادا دادی کے بچھڑنے پر بچوں سے سچائی اور نرمی کے ساتھ بات کرنے کا طریقہ۔',
    readTime: '5 min read',
    content: 'Children perceive death in distinct developmental stages. Use simple, direct language rather than confusing euphemisms like "went to sleep." Allow them to ask questions repeatedly, validate their emotions, and maintain comforting daily routines.',
    contentUrdu: 'بچے موت کو مختلف زاویوں سے سمجھتے ہیں۔ انہیں مبہم تسلیوں کی بجائے نرمی اور سچائی سے بات سمجھائیں۔ ان کے سوالات کا صبر سے جواب دیں اور انہیں محسوس کرائیں کہ ان کے جذبات بالکل قابلِ فہم ہیں۔'
  }
];
