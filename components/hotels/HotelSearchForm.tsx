'use client';

import type { FormEvent } from 'react';
import { useMemo, useState } from 'react';
import type { AgodaHotelResult } from '@/lib/agoda/types';
import { featuredHotelDestinations, hotelDestinations, type HotelDestination } from '@/lib/data/hotelDestinations';

export function HotelSearchForm() {
  const [cityId, setCityId] = useState('');
  const [destinationQuery, setDestinationQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState<HotelDestination | null>(null);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [results, setResults] = useState<AgodaHotelResult[]>([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const filteredDestinations = useMemo(() => {
    const query = destinationQuery.trim().toLowerCase();
    const source = query
      ? hotelDestinations.filter((destination) =>
          `${destination.country} ${destination.city} ${destination.slug}`.toLowerCase().includes(query)
        )
      : hotelDestinations.filter((destination) => featuredHotelDestinations.includes(destination.city));

    return source.slice(0, 24);
  }, [destinationQuery]);

  function handleDestinationSelect(destination: HotelDestination) {
    setSelectedDestination(destination);
    setDestinationQuery(`${destination.city} · ${destination.country}`);
    setCityId(destination.agodaCityId ? String(destination.agodaCityId) : '');
    setMessage(destination.agodaCityId ? '' : `${destination.city}의 Agoda cityId 매핑이 아직 필요합니다.`);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');
    setResults([]);

    try {
      const response = await fetch('/api/hotels/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cityId: Number(cityId || selectedDestination?.agodaCityId),
          checkInDate,
          checkOutDate
        })
      });
      const payload = (await response.json()) as {
        results?: AgodaHotelResult[];
        message?: string;
      };

      setResults(payload.results ?? []);
      setMessage(payload.message ?? (payload.results?.length ? '' : '검색 결과가 없거나 Agoda cityId 매핑이 필요합니다.'));
    } catch {
      setMessage('호텔 검색 요청에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="rounded-[28px] border border-line bg-white p-6 shadow-sm sm:p-8">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-ink">도시 검색</span>
            <input
              value={destinationQuery}
              onChange={(event) => {
                setDestinationQuery(event.target.value);
                setSelectedDestination(null);
                setMessage('');
              }}
              className="rounded-2xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink outline-none transition focus:border-accent"
              placeholder="예: 서울, 방콕, 오사카, 파리"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-bold text-ink">Agoda cityId</span>
            <input
              value={cityId}
              onChange={(event) => setCityId(event.target.value)}
              inputMode="numeric"
              className="rounded-2xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink outline-none transition focus:border-accent"
              placeholder="자동 입력 또는 직접 입력"
            />
          </label>
        </div>

        <div className="grid max-h-72 gap-2 overflow-auto rounded-2xl border border-line bg-surface p-3 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((destination) => (
            <button
              key={`${destination.country}-${destination.slug}`}
              type="button"
              onClick={() => handleDestinationSelect(destination)}
              className={`rounded-xl border px-3 py-2 text-left text-sm transition ${
                selectedDestination?.slug === destination.slug && selectedDestination.country === destination.country
                  ? 'border-accent bg-white text-ink'
                  : 'border-line bg-white/70 text-subInk hover:border-accent hover:text-ink'
              }`}
            >
              <span className="block font-extrabold">{destination.city}</span>
              <span className="mt-0.5 block text-xs">{destination.country}</span>
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
        <label className="grid gap-2">
          <span className="text-sm font-bold text-ink">체크인</span>
          <input
            value={checkInDate}
            onChange={(event) => setCheckInDate(event.target.value)}
            type="date"
            className="rounded-2xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink outline-none transition focus:border-accent"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-ink">체크아웃</span>
          <input
            value={checkOutDate}
            onChange={(event) => setCheckOutDate(event.target.value)}
            type="date"
            className="rounded-2xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink outline-none transition focus:border-accent"
          />
        </label>
        <button
          type="submit"
          disabled={!(cityId || selectedDestination?.agodaCityId) || !checkInDate || !checkOutDate || isLoading}
          className="rounded-2xl bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLoading ? '검색 중' : '호텔 검색'}
        </button>
        </div>
      </form>

      {message && (
        <p className="mt-5 rounded-2xl bg-mutedSurface px-4 py-3 text-sm font-semibold text-subInk">
          {message}
        </p>
      )}

      {results.length > 0 && (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {results.map((hotel) => (
            <article key={hotel.hotelId} className="rounded-2xl border border-line bg-surface p-5">
              <h2 className="font-extrabold text-ink">{hotel.hotelName}</h2>
              <p className="mt-2 text-sm leading-6 text-subInk">
                {hotel.starRating}성급 · 리뷰 {hotel.reviewScore}점
              </p>
              <p className="mt-3 text-xl font-extrabold text-ink tabular-nums">
                {hotel.currency} {hotel.dailyRate.toLocaleString()}
              </p>
              <a
                href={hotel.landingURL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-4 inline-flex rounded-xl bg-accent px-4 py-3 text-sm font-bold text-white"
              >
                Agoda에서 보기
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
