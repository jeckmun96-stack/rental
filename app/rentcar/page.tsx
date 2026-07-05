import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ClipboardCheck, HelpCircle } from 'lucide-react';
import { getCitiesByCountry } from '@/lib/data/cities';

export const metadata: Metadata = {
  title: '해외 렌터카 도시별 가이드',
  description: '일본, 미국, 베트남, 태국 등 해외 렌터카 예약 전 확인할 도시별 면허, 보험, 보증금, 공항 픽업 정보를 모았습니다.'
};

export default function RentcarHubPage() {
  const groupedCities = getCitiesByCountry();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="rounded-[28px] border border-line bg-white p-6 shadow-soft sm:p-10">
        <p className="text-sm font-bold text-accent">도시별 예약 가이드</p>
        <h1 className="mt-3 text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-[42px]">
          해외 렌터카 예약 가이드
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-subInk">
          여행지마다 운전 방향, 보험 조건, 보증금, 공항 픽업 가능 여부가 다릅니다. 먼저 도시별 가이드를 확인한 뒤 클룩 최종 예약 화면에서 차량 등급과 포함 조건을 다시 확인하세요.
        </p>
      </section>

      <section id="popular-cities" className="mt-12 grid gap-6">
        {Object.entries(groupedCities).map(([countryName, cities]) => (
          <div key={countryName} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
            <h2 className="text-xl font-extrabold tracking-[-0.02em] text-ink">{countryName}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((city) => (
                <Link
                  key={city.id}
                  href={`/rentcar/${city.countrySlug}/${city.citySlug}`}
                  className="group flex items-center justify-between rounded-2xl bg-mutedSurface px-4 py-4 transition hover:bg-accent/10"
                >
                  <div>
                    <p className="text-sm font-semibold text-subInk">{city.countryNameKo}</p>
                    <p className="mt-1 font-extrabold text-ink group-hover:text-accent">{city.cityNameKo} 렌터카</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-subInk group-hover:text-accent" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <Link
          href="/checklist"
          className="group rounded-[28px] border border-line bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
        >
          <ClipboardCheck className="h-6 w-6 text-accent" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-extrabold tracking-[-0.02em] text-ink group-hover:text-accent">
            예약 전 체크리스트
          </h2>
          <p className="mt-2 text-sm leading-6 text-subInk">
            국제운전면허증, 보험, 보증금, 무료 취소 조건을 예약 전에 빠르게 점검하세요.
          </p>
        </Link>
        <Link
          href="/faq"
          className="group rounded-[28px] border border-line bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
        >
          <HelpCircle className="h-6 w-6 text-accent" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-extrabold tracking-[-0.02em] text-ink group-hover:text-accent">
            해외 렌터카 FAQ
          </h2>
          <p className="mt-2 text-sm leading-6 text-subInk">
            면허, 보증금, 보험, 공항 픽업처럼 자주 묻는 질문을 정보성 답변으로 정리했습니다.
          </p>
        </Link>
      </section>
    </div>
  );
}
