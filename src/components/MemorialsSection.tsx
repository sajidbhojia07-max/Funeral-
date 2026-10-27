import React, { useState } from 'react';
import { Search, Flame, Heart, MessageSquare, Plus, Calendar, MapPin, Share2, Sparkles, X, Send } from 'lucide-react';
import { Memorial, Language, Condolence } from '../types/funeral';

interface MemorialsSectionProps {
  memorials: Memorial[];
  language: Language;
  onLightCandle: (memorialId: string) => void;
  onSendRose: (memorialId: string) => void;
  onAddCondolence: (memorialId: string, condolence: Omit<Condolence, 'id' | 'date'>) => void;
  onSubmitNewMemorial: (newMem: Omit<Memorial, 'id' | 'candlesLit' | 'rosesSent' | 'condolences'>) => void;
}

export const MemorialsSection: React.FC<MemorialsSectionProps> = ({
  memorials,
  language,
  onLightCandle,
  onSendRose,
  onAddCondolence,
  onSubmitNewMemorial,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'Islamic Janaza' | 'Traditional Memorial'>('all');
  const [activeMemorial, setActiveMemorial] = useState<Memorial | null>(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  // Form states for new condolence inside modal
  const [authorName, setAuthorName] = useState('');
  const [relationText, setRelationText] = useState('');
  const [condolenceMessage, setCondolenceMessage] = useState('');
  const [withFlowers, setWithFlowers] = useState(true);

  // Form states for new memorial submission
  const [newFullName, setNewFullName] = useState('');
  const [newFullNameUrdu, setNewFullNameUrdu] = useState('');
  const [newBirthDate, setNewBirthDate] = useState('');
  const [newPassedDate, setNewPassedDate] = useState('');
  const [newAge, setNewAge] = useState<number>(70);
  const [newBio, setNewBio] = useState('');
  const [newJanazaDate, setNewJanazaDate] = useState('');
  const [newJanazaTime, setNewJanazaTime] = useState('');
  const [newJanazaLoc, setNewJanazaLoc] = useState('');
  const [newCemetery, setNewCemetery] = useState('');
  const [newServiceType, setNewServiceType] = useState<'Islamic Janaza' | 'Traditional Memorial'>('Islamic Janaza');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const isUrdu = language === 'ur';

  // Filter memorials
  const filteredMemorials = memorials.filter((m) => {
    const matchesSearch =
      m.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (m.fullNameUrdu && m.fullNameUrdu.includes(searchQuery)) ||
      m.bio.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = activeFilter === 'all' || m.serviceType === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const handleCondolenceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeMemorial || !authorName.trim() || !condolenceMessage.trim()) return;

    onAddCondolence(activeMemorial.id, {
      author: authorName.trim(),
      relation: relationText.trim() || (isUrdu ? 'عزیز / مخلص' : 'Community Friend'),
      message: condolenceMessage.trim(),
      flowersSent: withFlowers,
    });

    setAuthorName('');
    setRelationText('');
    setCondolenceMessage('');
  };

  const handleCreateMemorial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFullName.trim() || !newJanazaLoc.trim()) return;

    onSubmitNewMemorial({
      fullName: newFullName.trim(),
      fullNameUrdu: newFullNameUrdu.trim() || undefined,
      birthDate: newBirthDate || '1950',
      passedDate: newPassedDate || 'Recent',
      age: Number(newAge) || 70,
      photoUrl: '/src/assets/images/memorial_tribute_candles_1793137430886.jpg',
      bio: newBio.trim() || 'A beloved soul whose memory remains an eternal blessing in our hearts.',
      janazaDate: newJanazaDate || 'To be announced',
      janazaTime: newJanazaTime || 'After Zuhr Prayer',
      janazaLocation: newJanazaLoc.trim(),
      burialCemetery: newCemetery.trim() || 'Local Consecrated Cemetery',
      serviceType: newServiceType,
    });

    setSubmissionSuccess(true);
    setTimeout(() => {
      setSubmissionSuccess(false);
      setShowSubmitModal(false);
      // Reset
      setNewFullName('');
      setNewFullNameUrdu('');
      setNewBio('');
      setNewJanazaLoc('');
      setNewCemetery('');
    }, 1200);
  };

  // Quick comfort quotes for user to click
  const quickComforts = [
    'إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ',
    isUrdu
      ? 'اللہ تعالیٰ مرحوم کے درجات بلند فرمائے اور لواحقین کو صبرِ جمیل عطا کرے۔ آمین۔'
      : 'May Allah elevate their ranks in Jannat-ul-Firdaus and grant comfort and strength to the family.',
    isUrdu
      ? 'انتہائی صدمہ ہوا، ہم اس غم میں آپ کے برابر کے شریک ہیں۔'
      : 'Sending our deepest condolences, prayers, and heartfelt thoughts to the entire family.',
  ];

  return (
    <section id="memorials" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">
              {isUrdu ? 'یادگاری تعزیت نامے و دعائیں' : 'In Loving Memory & Prayer'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium text-stone-900 tracking-tight">
              {isUrdu ? 'آن لائن تعزیتی رجسٹر و نمازِ جنازہ شیڈول' : 'Obituaries, Memorial Wall & Condolences'}
            </h2>
            <p className="mt-3 text-stone-600 leading-relaxed text-sm sm:text-base">
              {isUrdu
                ? 'اپنے پیاروں کے لیے شمع روشن کریں، گلاب بھیجیں، یا دعائیہ تعزیتی پیغامات درج کر کے ان کی یاد کو ہمیشہ زندہ رکھیں۔'
                : 'Celebrate the lives of departed loved ones, view Janaza prayer schedules, light virtual remembrance candles, and share personal condolences.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowSubmitModal(true)}
            className="px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider bg-stone-900 text-stone-100 hover:bg-stone-800 transition-colors shrink-0 flex items-center gap-2 self-start md:self-auto shadow-sm"
          >
            <Plus className="w-4 h-4 text-amber-400" />
            <span>{isUrdu ? 'نیا تعزیت نامہ درج کروائیں' : 'Submit an Obituary Notice'}</span>
          </button>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-stone-200">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isUrdu ? 'نام سے تلاش کریں...' : 'Search by name or story...'}
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600 focus:border-amber-600"
            />
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-stone-200/80 rounded-lg w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`flex-1 sm:flex-initial px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {isUrdu ? 'تمام' : 'All Memorials'}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('Islamic Janaza')}
              className={`flex-1 sm:flex-initial px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'Islamic Janaza'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {isUrdu ? 'اسلامی جنازہ' : 'Islamic Janaza'}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('Traditional Memorial')}
              className={`flex-1 sm:flex-initial px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeFilter === 'Traditional Memorial'
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {isUrdu ? 'روایتی میموریل' : 'Traditional'}
            </button>
          </div>
        </div>

        {/* Memorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredMemorials.map((mem) => (
            <div
              key={mem.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row group"
            >
              {/* Photo Thumbnail */}
              <div className="sm:w-2/5 relative h-56 sm:h-auto overflow-hidden bg-stone-100">
                <img
                  src={mem.photoUrl}
                  alt={mem.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent sm:hidden" />
                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm text-stone-200 text-[11px] px-2.5 py-1 rounded font-medium">
                  {mem.serviceType}
                </div>
              </div>

              {/* Content */}
              <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed dates */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <span>{mem.birthDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{mem.passedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{mem.age} {isUrdu ? 'سال' : 'yrs'}</span>
                  </div>

                  <h3 className="text-xl font-serif font-medium text-stone-900 group-hover:text-amber-900 transition-colors">
                    {mem.fullName}
                  </h3>
                  {mem.fullNameUrdu && (
                    <div className="text-sm font-serif text-amber-800 mt-0.5">
                      {mem.fullNameUrdu}
                    </div>
                  )}

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                    {isUrdu && mem.bioUrdu ? mem.bioUrdu : mem.bio}
                  </p>

                  {/* Janaza & Cemetery Info */}
                  <div className="mt-4 pt-3 border-t border-stone-100 space-y-1.5 text-xs text-stone-600">
                    <div className="flex items-start gap-2">
                      <Calendar className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span className="font-medium text-stone-800">
                        {mem.janazaTime} · {mem.janazaDate}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 truncate">
                      <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span className="truncate">
                        {isUrdu && mem.janazaLocationUrdu ? mem.janazaLocationUrdu : mem.janazaLocation}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Tributes Toolbar */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onLightCandle(mem.id);
                      }}
                      className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-amber-700 font-medium transition-colors"
                      title="Light a Virtual Candle"
                    >
                      <Flame className="w-4 h-4 text-amber-500 fill-amber-400 animate-flame" />
                      <span className="font-mono tabular-nums">{mem.candlesLit}</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSendRose(mem.id);
                      }}
                      className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-rose-700 font-medium transition-colors"
                      title="Send a Rose"
                    >
                      <Heart className="w-4 h-4 text-rose-500 fill-rose-100" />
                      <span className="font-mono tabular-nums">{mem.rosesSent}</span>
                    </button>

                    <span className="flex items-center gap-1.5 text-xs text-stone-500">
                      <MessageSquare className="w-3.5 h-3.5 text-stone-400" />
                      <span className="font-mono tabular-nums">{mem.condolences.length}</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveMemorial(mem)}
                    className="text-xs font-semibold text-amber-900 hover:text-amber-700 underline underline-offset-4"
                  >
                    {isUrdu ? 'تعزیت و تفصیلات' : 'Tribute & Details'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMemorials.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-stone-200">
            <p className="text-stone-500 text-sm">
              {isUrdu
                ? 'اس نام سے کوئی تعزیت نامہ نہیں ملا۔'
                : 'No memorials found matching your query.'}
            </p>
          </div>
        )}
      </div>

      {/* Detail & Condolence Tribute Modal */}
      {activeMemorial && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-stone-300 shadow-2xl relative my-8">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between z-10">
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                {isUrdu ? 'یادگاری صفحہ و تعزیتی کتاب' : 'Memorial Tribute & Guestbook'}
              </span>
              <button
                type="button"
                onClick={() => setActiveMemorial(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              {/* Profile Card */}
              <div className="flex flex-col sm:flex-row items-start gap-6 border-b border-stone-200 pb-8">
                <img
                  src={activeMemorial.photoUrl}
                  alt={activeMemorial.fullName}
                  referrerPolicy="no-referrer"
                  className="w-28 h-28 rounded-xl object-cover border border-stone-200 shadow-sm shrink-0"
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span>{activeMemorial.birthDate}</span>
                    <span>—</span>
                    <span>{activeMemorial.passedDate}</span>
                    <span>·</span>
                    <span>Age {activeMemorial.age}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-medium text-stone-900">
                    {activeMemorial.fullName}
                  </h3>
                  {activeMemorial.fullNameUrdu && (
                    <div className="text-base font-serif text-amber-800">
                      {activeMemorial.fullNameUrdu}
                    </div>
                  )}
                  <p className="text-sm text-stone-700 leading-relaxed pt-2">
                    {isUrdu && activeMemorial.bioUrdu ? activeMemorial.bioUrdu : activeMemorial.bio}
                  </p>
                </div>
              </div>

              {/* Service Schedule Details */}
              <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-bold text-stone-700">
                  {isUrdu ? 'نمازِ جنازہ اور تدفین کا وقت و مقام' : 'Service & Burial Schedule'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-stone-500 block text-xs">{isUrdu ? 'نمازِ جنازہ' : 'Prayer Service'}</span>
                    <span className="font-semibold text-stone-900">{activeMemorial.janazaTime}</span>
                    <div className="text-stone-600 mt-0.5">{activeMemorial.janazaDate}</div>
                    <div className="text-stone-600">{activeMemorial.janazaLocation}</div>
                  </div>
                  <div>
                    <span className="text-stone-500 block text-xs">{isUrdu ? 'آخری آرام گاہ / تدفین' : 'Resting Place'}</span>
                    <span className="font-semibold text-stone-900">{activeMemorial.burialCemetery}</span>
                    <div className="text-stone-500 text-xs mt-1">
                      {isUrdu ? 'جنازے کے فوراً بعد تدفین عمل میں لائی جائے گی۔' : 'Procession leaves directly following prayer.'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Virtual Tribute Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-amber-50/50 border border-amber-200/80">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onLightCandle(activeMemorial.id)}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-lg text-xs flex items-center gap-2 shadow-sm transition-all"
                  >
                    <Flame className="w-4 h-4 fill-amber-900 text-amber-900" />
                    <span>{isUrdu ? 'شمع روشن کریں' : 'Light Memorial Candle'}</span>
                    <span className="font-mono ml-1 font-bold">({activeMemorial.candlesLit})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSendRose(activeMemorial.id)}
                    className="px-4 py-2 bg-rose-100 hover:bg-rose-200 text-rose-900 font-semibold rounded-lg text-xs flex items-center gap-2 transition-all"
                  >
                    <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
                    <span>{isUrdu ? 'پھول پیش کریں' : 'Send a Rose'}</span>
                    <span className="font-mono ml-1 font-bold">({activeMemorial.rosesSent})</span>
                  </button>
                </div>

                <div className="text-xs text-stone-500 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>{isUrdu ? 'دعاؤں اور یادوں کا سلسلہ' : 'Sacred Perpetual Remembrance'}</span>
                </div>
              </div>

              {/* Condolences List */}
              <div className="space-y-4">
                <h4 className="text-base font-serif font-medium text-stone-900 flex items-center justify-between">
                  <span>{isUrdu ? 'تعزیتی پیغامات و دعائیں' : 'Condolences & Memories'}</span>
                  <span className="text-xs font-mono font-normal text-stone-500">
                    {activeMemorial.condolences.length} {isUrdu ? 'پیغامات' : 'Messages'}
                  </span>
                </h4>

                <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                  {activeMemorial.condolences.map((c) => (
                    <div
                      key={c.id}
                      className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm space-y-1"
                    >
                      <div className="flex items-center justify-between text-xs text-stone-500">
                        <span className="font-semibold text-stone-900">{c.author}</span>
                        <span>{c.date}</span>
                      </div>
                      {c.relation && (
                        <div className="text-[11px] text-amber-800 font-medium">
                          {c.relation}
                        </div>
                      )}
                      <p className="text-stone-700 pt-1 leading-relaxed">{c.message}</p>
                    </div>
                  ))}

                  {activeMemorial.condolences.length === 0 && (
                    <p className="text-xs text-stone-500 italic py-2">
                      {isUrdu ? 'پہلا تعزیتی پیغام نیچے تحریر کریں۔' : 'Be the first to share a condolence message.'}
                    </p>
                  )}
                </div>
              </div>

              {/* Add Condolence Form */}
              <form onSubmit={handleCondolenceSubmit} className="pt-4 border-t border-stone-200 space-y-4">
                <h4 className="text-sm font-semibold text-stone-900">
                  {isUrdu ? 'تعزیتی پیغام تحریر فرمائیں' : 'Leave a Heartfelt Condolence'}
                </h4>

                {/* Quick select pills/buttons */}
                <div className="flex flex-wrap gap-2 text-xs">
                  {quickComforts.map((txt, qIdx) => (
                    <button
                      key={qIdx}
                      type="button"
                      onClick={() => setCondolenceMessage(txt)}
                      className="px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 text-left transition-colors truncate max-w-full"
                    >
                      "{txt.length > 40 ? txt.substring(0, 40) + '...' : txt}"
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {isUrdu ? 'آپ کا نام' : 'Your Full Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      placeholder={isUrdu ? 'جیسے: محمد افضل و فیملی' : 'e.g. Tariq & Family'}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {isUrdu ? 'مرحوم سے تعلق (اختیاری)' : 'Relationship to Deceased'}
                    </label>
                    <input
                      type="text"
                      value={relationText}
                      onChange={(e) => setRelationText(e.target.value)}
                      placeholder={isUrdu ? 'جیسے: قریبی دوست / رشتہ دار' : 'e.g. Neighbor, Colleague, Niece'}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    {isUrdu ? 'تعزیتی پیغام یا دعا' : 'Your Message of Comfort or Remembrance'} *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={condolenceMessage}
                    onChange={(e) => setCondolenceMessage(e.target.value)}
                    placeholder={
                      isUrdu
                        ? 'اپنے دعائیہ کلمات یہاں لکھیں...'
                        : 'Share a comforting prayer, sincere memory, or note of strength...'
                    }
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-600"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-xs text-stone-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={withFlowers}
                      onChange={(e) => setWithFlowers(e.target.checked)}
                      className="rounded text-amber-600"
                    />
                    <span>{isUrdu ? 'ساتھ گلاب کی علامت منسلک کریں' : 'Attach virtual flower tribute'}</span>
                  </label>

                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isUrdu ? 'پیغام بھیجیں' : 'Post Condolence'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Submit New Obituary / Memorial Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-300 shadow-2xl relative my-8 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
              <div>
                <h3 className="text-xl font-serif font-medium text-stone-900">
                  {isUrdu ? 'نیا تعزیت نامہ / جنازہ نوٹس درج کریں' : 'Submit Obituary & Janaza Notice'}
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  {isUrdu
                    ? 'یہ معلومات فوری طور پر آن لائن میموریل وال پر شائع ہو جائیں گی۔'
                    : 'This notice will be published to the community memorial registry immediately.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-800 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submissionSuccess ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif font-medium text-stone-900">
                  {isUrdu ? 'تعزیت نامہ کامیابی سے درج ہو گیا ہے' : 'Memorial Published Successfully'}
                </h4>
                <p className="text-xs text-stone-600">
                  {isUrdu ? 'اللہ تعالیٰ مرحوم کی مغفرت فرمائے۔' : 'May their memory be for an eternal blessing.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleCreateMemorial} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {isUrdu ? 'مرحوم کا پورا نام (انگریزی)' : 'Full Name (English)'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={newFullName}
                      onChange={(e) => setNewFullName(e.target.value)}
                      placeholder="e.g. Al-Hajj Farooq Ahmed"
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {isUrdu ? 'نام اردو میں (اختیاری)' : 'Full Name (Urdu / Arabic)'}
                    </label>
                    <input
                      type="text"
                      value={newFullNameUrdu}
                      onChange={(e) => setNewFullNameUrdu(e.target.value)}
                      placeholder="جیسے: الحاج فاروق احمد"
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {isUrdu ? 'تاریخِ پیدائش' : 'Date of Birth'}
                    </label>
                    <input
                      type="text"
                      value={newBirthDate}
                      onChange={(e) => setNewBirthDate(e.target.value)}
                      placeholder="e.g. March 15, 1948"
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {isUrdu ? 'تاریخِ وفات' : 'Date of Passing'}
                    </label>
                    <input
                      type="text"
                      value={newPassedDate}
                      onChange={(e) => setNewPassedDate(e.target.value)}
                      placeholder="e.g. October 26, 2026"
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {isUrdu ? 'عمر' : 'Age'}
                    </label>
                    <input
                      type="number"
                      value={newAge}
                      onChange={(e) => setNewAge(Number(e.target.value))}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    {isUrdu ? 'مرحوم کے بارے میں چند الفاظ' : 'Brief Tribute / Biography'}
                  </label>
                  <textarea
                    rows={3}
                    value={newBio}
                    onChange={(e) => setNewBio(e.target.value)}
                    placeholder="Describe their life, legacy, and character..."
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {isUrdu ? 'نمازِ جنازہ کا وقت و نماز' : 'Janaza Time & Prayer'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={newJanazaTime}
                      onChange={(e) => setNewJanazaTime(e.target.value)}
                      placeholder="e.g. 1:30 PM (After Zuhr Prayer)"
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {isUrdu ? 'نمازِ جنازہ کا دن و تاریخ' : 'Janaza Date'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={newJanazaDate}
                      onChange={(e) => setNewJanazaDate(e.target.value)}
                      placeholder="e.g. Wednesday, October 28, 2026"
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {isUrdu ? 'مسجد / مقامِ نماز' : 'Mosque / Sanctuary Location'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={newJanazaLoc}
                      onChange={(e) => setNewJanazaLoc(e.target.value)}
                      placeholder="e.g. Islamic Community Center, Grand Hall"
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      {isUrdu ? 'قبرستان' : 'Cemetery Ground'}
                    </label>
                    <input
                      type="text"
                      value={newCemetery}
                      onChange={(e) => setNewCemetery(e.target.value)}
                      placeholder="e.g. Peace Gardens Muslim Cemetery"
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-stone-300 rounded-lg focus:ring-1 focus:ring-amber-600"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-stone-200">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="px-4 py-2 border border-stone-300 rounded-lg text-xs font-medium text-stone-700 hover:bg-stone-50"
                  >
                    {isUrdu ? 'منسوخ کریں' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-lg text-xs"
                  >
                    {isUrdu ? 'شائع کریں' : 'Publish Memorial'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
