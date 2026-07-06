export const locales = ['en', 'ja', 'zh', 'nl', 'de'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale = 'ko' as const;

export const localeMeta: Record<Locale, { label: string; flag: string }> = {
  en: { label: 'English', flag: '🇺🇸' },
  ja: { label: '日本語', flag: '🇯🇵' },
  zh: { label: '中文', flag: '🇨🇳' },
  nl: { label: 'Nederlands', flag: '🇳🇱' },
  de: { label: 'Deutsch', flag: '🇩🇪' }
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
