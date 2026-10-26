export type LanguageCode =
  | 'uz'   // O'zbekcha (Lotin)
  | 'uz_cyr' // Ўзбекча (Кирилл)
  | 'en'   // English
  | 'ru'   // Русский
  | 'tr'   // Türkçe
  | 'ar'   // العربية
  | 'zh'   // 中文
  | 'de'   // Deutsch
  | 'fr'   // Français
  | 'es'   // Español
  | 'fa'   // فارسی
  | 'ja'   // 日本語
  | 'ko';  // 한국어

export type ActiveTab = 'home' | 'places' | 'map' | 'hotels' | 'profile';

export type ZoneId = 'xovos_tuman' | 'yangiyer_shahar' | 'xovosobod_mfy' | 'korvonsaroy_mfy';

export type PlaceCategory = 'all' | 'historical' | 'mosque' | 'nature' | 'cultural' | 'food';

export interface Place {
  id: string;
  name: string;
  nameUzCyr: string;
  nameEn: string;
  nameRu: string;
  category: 'historical' | 'mosque' | 'nature' | 'cultural' | 'food';
  zone: ZoneId;
  zoneName: string;
  address: string;
  coordinates: [number, number]; // [lat, lng]
  rating: number;
  reviewsCount: number;
  featured: boolean;
  imageUrl: string;
  gallery: string[];
  description: {
    uz: string;
    uz_cyr: string;
    en: string;
    ru: string;
    tr: string;
    ar: string;
    zh: string;
    de: string;
    fr: string;
    es: string;
    fa: string;
    ja: string;
    ko: string;
  };
  highlights: string[];
  historicalEra?: string;
  openHours: string;
  entryFee: string;
  audioGuideAvailable?: boolean;
}

export interface HotelRoom {
  id: string;
  name: string;
  capacity: number;
  pricePerNightUZS: number;
  pricePerNightUSD: number;
  bedType: string;
  amenities: string[];
}

export interface Hotel {
  id: string;
  name: string;
  zone: ZoneId;
  zoneName: string;
  address: string;
  coordinates: [number, number];
  stars: number;
  rating: number;
  reviewsCount: number;
  startingPriceUZS: number;
  startingPriceUSD: number;
  imageUrl: string;
  gallery: string[];
  description: {
    uz: string;
    en: string;
    ru: string;
  };
  phone: string;
  email: string;
  amenities: string[];
  rooms: HotelRoom[];
}

export interface Booking {
  id: string;
  hotelId: string;
  hotelName: string;
  roomId: string;
  roomName: string;
  guestName: string;
  guestPhone: string;
  guestEmail: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  totalPriceUZS: number;
  totalPriceUSD: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
  notes?: string;
  specialRequests?: string[];
}

export interface UserProfile {
  name: string;
  phone: string;
  email: string;
  country: string;
  preferredCurrency: 'UZS' | 'USD';
  savedPlaceIds: string[];
  bookings: Booking[];
}
