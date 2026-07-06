import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/locales';

interface FooterProps {
  locale?: 'ko' | Locale;
}

export function Footer({ locale = 'ko' }: FooterProps) {
  const dict = getDictionary(locale);
  const isKo = locale === 'ko';

  return (
    <footer className="mt-20 border-t border-line bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-subInk sm:px-6">
        <p className="font-semibold text-ink">{isKo ? '여행늘보 · Travel Sloth' : dict.brandName}</p>
        <p className="mt-2 max-w-3xl leading-6">{dict.footerText}</p>
      </div>
    </footer>
  );
}
