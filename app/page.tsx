import Image from 'next/image';
import Link from 'next/link';
import { CityCard } from '@/components/rentcar/CityCard';
import { SlothMascot } from '@/components/SlothMascot';
import {
  homeInfoCards,
  mainCategoryCards,
  platformBadgeClassMap,
  type MainCategoryCard
} from '@/lib/data/categoryCards';
import { getPublishedCities } from '@/lib/data/cities';

export default function HomePage() {
  const cities = getPublishedCities();
  const chips = [
    '일본 렌터카',
    '미국·하와이 렌터카',
    '괌 렌터카',
    '동남아 렌터카',
    '공항픽업',
    '호텔',
    '보험 체크',
    '쿠폰 준비'
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="rounded-[32px] border border-line bg-white p-6 shadow-soft sm:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-accent">Travel Sloth</p>
            <h1 className="mt-4 text-[34px] font-extrabold leading-[1.16] text-ink sm:text-[56px]">
              여행늘보
            </h1>
            <p className="mt-5 text-base leading-8 text-subInk sm:text-lg">
              느긋해 보여도 확인할 건 다 확인해요. 렌터카부터 호텔, 항공권까지 예약 전 체크포인트를 여행늘보가 미리 정리해뒀어요.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/rentcar"
                className="inline-flex items-center justify-center rounded-2xl bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-accent/90"
              >
                도시별 렌터카 보기
              </Link>
              <Link
                href="/checklist"
                className="inline-flex items-center justify-center rounded-2xl border border-line bg-white px-5 py-3 text-sm font-bold text-ink transition hover:border-accent hover:text-accent"
              >
                예약 전 체크리스트
              </Link>
            </div>
          </div>
          <div className="mx-auto flex h-40 w-40 flex-none items-center justify-center rounded-full bg-mutedSurface sm:h-52 sm:w-52">
            <SlothMascot className="h-32 w-32 sm:h-40 sm:w-40" />
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {homeInfoCards.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl border border-line bg-surface">
              <div className="relative aspect-[5/3]">
                <Image src={item.imageUrl} alt={item.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-4">
                <h2 className="text-sm font-extrabold text-ink">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-subInk">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span key={chip} className="rounded-full border border-line bg-white px-3.5 py-2 text-sm font-semibold text-subInk">
            {chip}
          </span>
        ))}
      </section>

      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-accent">여행 예약 카테고리</p>
            <h2 className="mt-2 text-2xl font-extrabold text-ink">
              여행 예약 카테고리 먼저 고르기
            </h2>
          </div>
          <Link href="/compare" className="hidden text-sm font-bold text-accent sm:inline-flex">
            이동수단 기준 보기
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {mainCategoryCards.map((card) => (
            <CategoryCard key={card.id} card={card} />
          ))}
        </div>
      </section>

      <section id="popular" className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-accent">인기 도시</p>
            <h2 className="mt-2 text-2xl font-extrabold text-ink">인기 도시 렌터카 가이드</h2>
          </div>
          <Link href="/rentcar" className="hidden text-sm font-bold text-accent sm:inline-flex">
            전체 보기
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-[28px] border border-line bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold text-accent">예약 판단 기준</p>
            <h2 className="mt-2 text-2xl font-extrabold text-ink">
              렌터카 예약 전 이렇게 확인하세요
            </h2>
            <p className="mt-3 text-sm leading-6 text-subInk">
              같은 차량처럼 보여도 보험, 보증금, 취소 가능 시간, 공항 지점 영업시간에 따라 실제 체감 비용이 달라질 수 있습니다.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {['국제운전면허증', '보험/면책금', '보증금 결제수단', '무료 취소 마감', '공항 픽업 위치'].map((item) => (
              <div key={item} className="rounded-2xl bg-mutedSurface px-4 py-3 text-sm font-semibold text-ink">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/compare" className="inline-flex items-center justify-center rounded-2xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-accent">
            이동수단 선택 기준 보기
          </Link>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ card }: { card: MainCategoryCard }) {
  const isExternal = card.href.startsWith('http');

  const buttonClassName =
    'mt-5 inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-3 text-sm font-bold text-white transition hover:bg-accent/90';
  const button = isExternal ? (
    <a href={card.href} target="_blank" rel="noopener noreferrer sponsored" className={buttonClassName}>
      {card.ctaLabel}
    </a>
  ) : (
    <Link href={card.href} className={buttonClassName}>
      {card.ctaLabel}
    </Link>
  );

  return (
    <article className="overflow-hidden rounded-[24px] border border-line bg-white shadow-sm">
      <div className="relative aspect-[16/10]">
        <Image src={card.imageUrl} alt={card.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {card.badges.map((badge) => (
            <span
              key={badge.label}
              className={`rounded-full px-3 py-1 text-xs font-extrabold ${platformBadgeClassMap[badge.key]}`}
            >
              {badge.label}
            </span>
          ))}
        </div>
        <h3 className="mt-4 text-xl font-extrabold text-ink">{card.title}</h3>
        <p className="mt-2 min-h-20 text-sm leading-6 text-subInk">{card.description}</p>

        {button}
      </div>
    </article>
  );
}
