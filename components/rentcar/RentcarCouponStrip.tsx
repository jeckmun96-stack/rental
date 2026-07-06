import { Ticket } from 'lucide-react';
import { rentcarCoupons } from '@/lib/data/coupons';

export function RentcarCouponStrip() {
  if (rentcarCoupons.length === 0) {
    return null;
  }

  return (
    <section className="mt-10 rounded-[28px] border border-line bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
          <Ticket className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-lg font-extrabold tracking-[-0.02em] text-ink">쿠폰코드</h2>
          <p className="text-sm text-subInk">쿠폰으로 할인 혜택을 받아보세요.</p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {rentcarCoupons.map((coupon) => (
          <a
            key={coupon.id}
            href={coupon.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="rounded-2xl border border-dashed border-accent/40 bg-accent/5 p-4 text-center transition hover:border-accent hover:bg-accent/10"
          >
            <p className="text-lg font-extrabold text-accent">{coupon.label}</p>
            <p className="mt-1 text-xs leading-5 text-subInk">{coupon.minSpendNote}</p>
          </a>
        ))}
      </div>
      <p className="mt-4 text-xs leading-5 text-subInk">
        클룩 화면으로 이동해 쿠폰을 등록/적용하세요. 프로모션은 카드사·기간 한정으로 진행되어 사전 예고 없이 종료되거나 다른 혜택으로 교체될 수 있습니다.
      </p>
    </section>
  );
}
