import { BadgeCheck, CarFront, CreditCard, ShieldCheck, Undo2 } from 'lucide-react';
import type { City } from '@/types/city';

export function CitySummaryBadgeBar({ city }: { city: City }) {
  const badges = [
    {
      icon: BadgeCheck,
      label: city.intlLicenseRequired ? '국제면허 필요' : '국제면허 확인 필요'
    },
    {
      icon: CarFront,
      label: city.airportPickupAvailable ? '공항 픽업 가능' : '픽업 지점 확인'
    },
    {
      icon: ShieldCheck,
      label: '보험 포함 상품 있음'
    },
    {
      icon: CreditCard,
      label: '보증금 조건 확인'
    },
    {
      icon: Undo2,
      label: '무료 취소 상품 있음'
    }
  ];

  return (
    <div className="mt-7 overflow-x-auto rounded-2xl border border-line bg-mutedSurface/80 px-4 py-3" aria-label="핵심 정보 요약">
      <div className="flex min-w-max items-center divide-x divide-line">
      {badges.map(({ icon: Icon, label }) => (
        <span
          key={label}
          className="inline-flex items-center gap-2 px-3 text-sm font-semibold text-ink first:pl-0 last:pr-0"
        >
          <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
          {label}
        </span>
      ))}
      </div>
    </div>
  );
}
