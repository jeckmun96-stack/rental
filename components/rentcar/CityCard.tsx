import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CarFront,
  Castle,
  Church,
  Landmark,
  Mountain,
  Palmtree,
  ShieldCheck,
  Ship,
  Snowflake,
  Sun,
  TreePine,
  Waves,
  type LucideIcon
} from 'lucide-react';
import type { City } from '@/types/city';

const cityIconMap: Record<string, LucideIcon> = {
  'japan-osaka': Landmark,
  'japan-fukuoka': Waves,
  'japan-tokyo': Building2,
  'japan-sapporo': Snowflake,
  'japan-okinawa': Palmtree,
  'japan-nagoya': Castle,
  'japan-kyoto': Church,
  'usa-hawaii': Palmtree,
  'usa-guam': Waves,
  'usa-los-angeles': Sun,
  'vietnam-danang': Palmtree,
  'thailand-bangkok': Building2,
  'thailand-phuket': Palmtree,
  'thailand-chiang-mai': TreePine,
  'taiwan-taipei': Building2,
  'taiwan-kaohsiung': Waves,
  'malaysia-kuala-lumpur': Building2,
  'australia-sydney': Waves,
  'australia-melbourne': Building2,
  'australia-brisbane': Sun,
  'newzealand-auckland': Mountain,
  'uk-london': Landmark,
  'france-paris': Landmark,
  'korea-seoul': Building2,
  'korea-jeju': Palmtree,
  'korea-busan': Waves,
  'korea-incheon': Ship,
  'korea-ulleungdo': Mountain,
  'korea-daegu': Sun,
  'korea-gwangju': TreePine
};

export function CityCard({ city }: { city: City }) {
  const Icon = cityIconMap[city.id] ?? Landmark;

  return (
    <Link
      href={`/rentcar/${city.countrySlug}/${city.citySlug}`}
      className="group flex items-center gap-3 overflow-hidden rounded-2xl border border-line bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft sm:block sm:rounded-3xl sm:p-0"
    >
      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gradient-to-br from-accent/20 via-mutedSurface to-white text-accent sm:hidden">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <div className="hidden h-32 items-center justify-between bg-gradient-to-br from-accent/20 via-mutedSurface to-white p-5 sm:flex">
        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-accent">
          {city.countryNameKo}
        </span>
        <Icon className="h-10 w-10 text-accent/70" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1 sm:p-5">
        <h3 className="truncate text-sm font-extrabold tracking-[-0.02em] text-ink group-hover:text-accent sm:text-xl">
          {city.cityNameKo} 렌터카
        </h3>
        <p className="mt-1 line-clamp-1 text-xs leading-5 text-subInk sm:mt-2 sm:line-clamp-2 sm:text-sm sm:leading-6">
          {city.heroLead}
        </p>
        <div className="mt-3 hidden flex-wrap gap-2 sm:flex">
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
        <div className="mt-4 hidden items-center gap-1 text-sm font-bold text-accent sm:inline-flex">
          가이드 보기
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>
      <ArrowRight className="h-4 w-4 flex-none text-subInk group-hover:text-accent sm:hidden" aria-hidden="true" />
    </Link>
  );
}
