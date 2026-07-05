import Link from 'next/link';
import { ArrowRight, BadgeCheck, CarFront, ShieldCheck } from 'lucide-react';
import type { City } from '@/types/city';

export function CityCard({ city }: { city: City }) {
  return (
    <Link
      href={`/rentcar/${city.countrySlug}/${city.citySlug}`}
      className="group overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
    >
      <div className="h-32 bg-gradient-to-br from-accent/20 via-mutedSurface to-white p-5">
        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-accent">
          {city.countryNameKo}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-extrabold tracking-[-0.02em] text-ink group-hover:text-accent">
          {city.cityNameKo} 렌터카
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-subInk">{city.heroLead}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mutedSurface px-2.5 py-1 text-xs font-semibold text-subInk">
            <BadgeCheck className="h-3.5 w-3.5 text-accent" /> 국제면허 확인
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mutedSurface px-2.5 py-1 text-xs font-semibold text-subInk">
            <CarFront className="h-3.5 w-3.5 text-accent" /> {city.airportPickupAvailable ? '공항 픽업' : '픽업 확인'}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mutedSurface px-2.5 py-1 text-xs font-semibold text-subInk">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" /> 보험 확인
          </span>
        </div>
        <div className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-accent">
          가이드 보기
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
