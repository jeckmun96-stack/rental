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
          <p className="text-sm font-bold text-accent">예약 조건 확인</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-ink">도시별 렌터카 상품으로 이동하기</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-subInk">
          가격은 표시하지 않습니다. 실제 결제 전에는 클룩 최종 화면에서 실시간 가격, 차량 등급, 보험, 보증금, 무료 취소 조건을 확인하세요.
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
