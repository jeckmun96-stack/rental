import Link from 'next/link';
import { localeMeta, locales } from '@/lib/i18n/locales';

interface LanguageSwitcherProps {
  current: 'ko' | (typeof locales)[number];
  label: string;
}

export function LanguageSwitcher({ current, label }: LanguageSwitcherProps) {
  return (
    <div className="relative">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold text-ink transition hover:border-accent hover:text-accent">
          <span aria-hidden="true">{current === 'ko' ? '🇰🇷' : localeMeta[current].flag}</span>
          <span>{label}</span>
        </summary>
        <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-2xl border border-line bg-white py-1.5 shadow-soft">
          <Link
            href="/"
            className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold hover:bg-mutedSurface ${
              current === 'ko' ? 'text-accent' : 'text-ink'
            }`}
          >
            <span aria-hidden="true">🇰🇷</span> 한국어
          </Link>
          {locales.map((loc) => (
            <Link
              key={loc}
              href={`/${loc}`}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold hover:bg-mutedSurface ${
                current === loc ? 'text-accent' : 'text-ink'
              }`}
            >
              <span aria-hidden="true">{localeMeta[loc].flag}</span> {localeMeta[loc].label}
            </Link>
          ))}
        </div>
      </details>
    </div>
  );
}
