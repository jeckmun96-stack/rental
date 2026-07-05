import type { City } from '@/types/city';
import { CitySummaryBadgeBar } from './CitySummaryBadgeBar';

export function CityHero({ city }: { city: City }) {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-line bg-white p-6 shadow-soft sm:p-10">
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative">
        <p className="text-sm font-bold text-accent">
          {city.countryNameKo} · {city.cityNameKo} 렌터카
        </p>
        <h1 className="mt-3 max-w-3xl text-[32px] font-extrabold leading-[1.22] tracking-[-0.02em] text-ink sm:text-[40px]">
          {city.heroTitle}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-subInk sm:text-lg">
          {city.heroLead}
        </p>
        <CitySummaryBadgeBar city={city} />
      </div>
    </section>
  );
}
