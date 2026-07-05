import type { RentcarOffer } from '@/types/rentcar';
import { RentcarOfferCard } from './RentcarOfferCard';

interface RentcarOfferListProps {
  offers: RentcarOffer[];
  countrySlug: string;
  citySlug: string;
}

export function RentcarOfferList({ offers, countrySlug, citySlug }: RentcarOfferListProps) {
  const lowestOfferIds = new Set(
    Object.values(
      offers.reduce<Record<string, RentcarOffer[]>>((groups, offer) => {
        const key = `${offer.cityId}:${offer.vehicleClass}`;
        groups[key] = [...(groups[key] ?? []), offer];
        return groups;
      }, {})
    )
      .filter((group) => group.length > 1)
      .map((group) => group.reduce((lowest, offer) => (offer.priceKrw < lowest.priceKrw ? offer : lowest)).id)
  );

  return (
    <section id="offers" className="mt-12">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-bold text-accent">예약 조건 확인</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-ink">도시별 렌터카 상품으로 이동하기</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-subInk">
          표시 가격은 참고용입니다. 실제 결제 전에는 클룩 최종 화면에서 차량 등급, 보험, 보증금, 무료 취소 조건을 다시 확인하세요.
        </p>
      </div>
      <div className="mt-5 grid gap-4">
        {offers.map((offer) => (
          <RentcarOfferCard
            key={offer.id}
            offer={offer}
            countrySlug={countrySlug}
            citySlug={citySlug}
            showLowestBadge={lowestOfferIds.has(offer.id)}
          />
        ))}
      </div>
    </section>
  );
}
