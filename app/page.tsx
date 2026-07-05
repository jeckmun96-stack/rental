import Link from 'next/link';
import { ArrowRight, BadgeCheck, CheckCircle2, ClipboardCheck, Plane, ShieldCheck } from 'lucide-react';
import { CityCard } from '@/components/rentcar/CityCard';
import { getPublishedCities } from '@/lib/data/cities';

export default function HomePage() {
  const cities = getPublishedCities();
  const chips = [
    '일본 렌터카',
    '미국·하와이 렌터카',
    '괌 렌터카',
    '동남아 렌터카',
    '공항픽업',
    '보험 체크',
    '보증금 체크',
    '무료취소'
  ];
  const points = [
    {
      title: '국제운전면허증 준비',
      description: '여권, 국내 운전면허증과 함께 준비해야 현장 확인에서 막히지 않습니다.',
      icon: BadgeCheck
    },
    {
      title: '보험 포함 여부 확인',
      description: '자차면책, 자기부담금, 현장 추가 보험 조건을 예약 전 화면에서 확인하세요.',
      icon: ShieldCheck
    },
    {
      title: '공항 픽업 위치 확인',
      description: '터미널, 셔틀 탑승 위치, 영업시간이 일정과 맞는지 먼저 비교하세요.',
      icon: Plane
    }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="rounded-[32px] border border-line bg-white p-6 shadow-soft sm:p-12">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-accent">Global Rent Lab</p>
          <h1 className="mt-4 text-[34px] font-extrabold leading-[1.16] tracking-[-0.02em] text-ink sm:text-[56px]">
            해외 렌터카, 예약 전에 이것만은 확인하세요
          </h1>
          <p className="mt-5 text-base leading-8 text-subInk sm:text-lg">
            국제운전면허증, 보험, 보증금, 공항 픽업 조건까지 도시별로 정리했습니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/rentcar"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-accent/90"
            >
              도시별 렌터카 보기
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/checklist"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-line bg-white px-5 py-3 text-sm font-bold text-ink transition hover:border-accent hover:text-accent"
            >
              예약 전 체크리스트
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {['도시별 SEO 가이드', '트립닷컴·클룩 비교', '제휴 클릭 추적'].map((item) => (
            <div key={item} className="flex items-center gap-2 rounded-2xl bg-mutedSurface px-4 py-3 text-sm font-semibold text-ink">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              {item}
            </div>
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
        <div>
          <p className="text-sm font-bold text-accent">오늘 확인할 포인트</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-ink">
            해외 렌터카 예약 전 먼저 볼 3가지
          </h2>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {points.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-extrabold tracking-[-0.02em] text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-subInk">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="popular" className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-accent">인기 도시</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-ink">인기 도시 렌터카 가이드</h2>
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
            <p className="text-sm font-bold text-accent">플랫폼 비교</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-ink">
              트립닷컴과 클룩, 렌터카 예약 전 이렇게 비교하세요
            </h2>
            <p className="mt-3 text-sm leading-6 text-subInk">
              한국어 사용 편의성, 쿠폰·프로모션, 렌터카 접근성, 여행 상품 연계, 공항픽업 여부를 한 번에 확인하세요.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {['한국어 사용 편의성', '쿠폰/프로모션 확인', '렌터카 접근성', '여행 상품과 함께 예약', '공항픽업 연계'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl bg-mutedSurface px-4 py-3 text-sm font-semibold text-ink">
                <ClipboardCheck className="h-4 w-4 text-accent" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href="/compare" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-accent">
            플랫폼 비교 보기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
