import Link from 'next/link';
import type { City } from '@/types/city';

export function RelatedCities({ cities }: { cities: City[] }) {
  if (cities.length === 0) {
    return null;
  }

  return (
    <section className="mt-14">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-accent">함께 보는 도시</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-ink">관련 렌터카 가이드</h2>
        </div>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((city) => (
          <Link
            key={city.id}
            href={`/rentcar/${city.countrySlug}/${city.citySlug}`}
            className="group rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
          >
            <p className="text-sm font-semibold text-subInk">{city.countryNameKo}</p>
            <h3 className="mt-2 text-lg font-extrabold tracking-[-0.02em] text-ink group-hover:text-accent">
              {city.cityNameKo} 렌터카
            </h3>
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-subInk">{city.heroLead}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
