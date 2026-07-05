import type { RentcarOffer } from '@/types/rentcar';
import { RentcarOfferCard } from './RentcarOfferCard';

interface RentcarOfferListProps {
  offers: RentcarOffer[];
  countrySlug: string;
  citySlug: string;
}

export function RentcarOfferList({ offers, countrySlug, citySlug }: RentcarOfferListProps) {
  return (
    <section id="offers" className="mt-12">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-bold text-accent">렌터카 비교</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-ink">예약 가능한 상품 예시</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-subInk">
          MVP 단계에서는 mock 데이터로 구성되어 있습니다. 실제 운영 시 트립닷컴·클룩 제휴 링크 또는 API 데이터로 교체하면 됩니다.
        </p>
      </div>
      <div className="mt-5 grid gap-4">
        {offers.map((offer) => (
          <RentcarOfferCard
            key={offer.id}
            offer={offer}
            countrySlug={countrySlug}
            citySlug={citySlug}
          />
        ))}
      </div>
    </section>
  );
}
