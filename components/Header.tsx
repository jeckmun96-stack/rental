import Link from 'next/link';
import { SlothMascot } from '@/components/SlothMascot';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/locales';

interface HeaderProps {
  locale?: 'ko' | Locale;
}

export function Header({ locale = 'ko' }: HeaderProps) {
  const dict = getDictionary(locale);
  const isKo = locale === 'ko';
  const homeHref = isKo ? '/' : `/${locale}`;

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link href={homeHref} className="flex items-center gap-2 font-extrabold tracking-tight text-ink">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mutedSurface">
            <SlothMascot className="h-9 w-9" />
          </span>
          <span>{isKo ? '여행늘보' : dict.brandName}</span>
        </Link>
        {isKo && (
          <nav className="hidden items-center gap-5 text-sm font-medium text-subInk md:flex">
            <Link href="/rentcar" className="hover:text-accent">
              렌터카 가이드
            </Link>
            <Link href="/rentcar#popular-cities" className="hover:text-accent">
              인기 도시
            </Link>
            <Link href="/checklist" className="hover:text-accent">
              예약 전 체크리스트
            </Link>
            <Link href="/compare" className="hover:text-accent">
              이동수단 비교
            </Link>
            <Link href="/flights" className="hover:text-accent">
              항공권
            </Link>
            <Link href="/faq" className="hover:text-accent">
              FAQ
            </Link>
          </nav>
        )}
        {locale === 'en' && (
          <nav className="hidden items-center gap-5 text-sm font-medium text-subInk md:flex">
            <Link href="/en/checklist" className="hover:text-accent">
              Checklist
            </Link>
            <Link href="/en/compare" className="hover:text-accent">
              Getting Around
            </Link>
            <Link href="/en/flights" className="hover:text-accent">
              Flights
            </Link>
          </nav>
        )}
        <div className="flex items-center gap-2">
          <LanguageSwitcher current={locale} label={dict.languageLabel} />
          {isKo && (
            <Link
              href="/rentcar"
              className="rounded-xl bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-accent"
            >
              렌터카 보기
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
