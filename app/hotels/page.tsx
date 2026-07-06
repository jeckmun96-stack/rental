import type { Metadata } from 'next';
import Image from 'next/image';
import { HotelSearchForm } from '@/components/hotels/HotelSearchForm';
import { hotelDestinationGroups } from '@/lib/data/hotelDestinations';

export const metadata: Metadata = {
  title: '아고다 호텔 검색',
  description: '렌트카팁쿠폰에서 Agoda API 기반 호텔 검색을 준비하는 페이지입니다.'
};

export default function HotelsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="grid overflow-hidden rounded-[28px] border border-line bg-white shadow-soft lg:grid-cols-[1fr_0.9fr]">
        <div className="p-6 sm:p-10">
          <p className="text-sm font-bold text-accent">AGODA HOTEL</p>
          <h1 className="mt-3 text-[32px] font-extrabold leading-tight text-ink sm:text-[42px]">
            호텔 검색하기
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-subInk">
            Agoda API 키는 서버에서만 사용하고, 화면에서는 도시 ID와 날짜만 입력해 검색하는 구조입니다.
            실제 운영 전에는 아고다 cityId 매핑을 채워 도시별 검색 흐름을 완성하면 됩니다.
          </p>
        </div>
        <div className="relative min-h-64">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
            alt="수영장이 있는 호텔 리조트"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <div className="mt-8">
        <HotelSearchForm />
      </div>

      <section className="mt-10 rounded-[28px] border border-line bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-bold text-accent">도시 카테고리</p>
        <h2 className="mt-2 text-2xl font-extrabold text-ink">검색 가능한 주요 여행지</h2>
        <p className="mt-3 text-sm leading-6 text-subInk">
          Agoda cityId가 확인된 도시는 바로 검색하고, 아직 확인 전인 도시는 cityId를 채운 뒤 검색할 수 있습니다.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {hotelDestinationGroups.map((group) => (
            <article key={group.country} className="rounded-2xl border border-line bg-surface p-4">
              <h3 className="font-extrabold text-ink">{group.country}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.cities.map((city) => (
                  <span key={`${group.country}-${city.slug}`} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-bold text-subInk">
                    {city.city}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
