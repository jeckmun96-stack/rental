'use client';

import { Car, CheckCircle2, ExternalLink, Plane, ShieldCheck, Undo2, XCircle } from 'lucide-react';
import { useState } from 'react';
import type { RentcarOffer } from '@/types/rentcar';

const platformMap = {
  tripcom: {
    label: '트립닷컴',
    buttonLabel: '예약하러 가기',
    className: 'bg-tripcom hover:bg-tripcom/90',
    mark: 'T'
  },
  klook: {
    label: '클룩',
    buttonLabel: '예약하러 가기',
    className: 'bg-klook hover:bg-klook/90',
    mark: 'K'
  }
} as const;

interface RentcarOfferCardProps {
  offer: RentcarOffer;
  countrySlug: string;
  citySlug: string;
  compact?: boolean;
}

export function RentcarOfferCard({
  offer,
  countrySlug,
  citySlug,
  compact = false
}: RentcarOfferCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const platform = platformMap[offer.platform];

  if (offer.category === 'rentcar' && offer.platform === 'tripcom') {
    return null;
  }

  async function handleBookClick() {
    setIsLoading(true);

    try {
      const response = await fetch('/api/track-click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          countrySlug,
          citySlug,
          offerId: offer.id,
          platform: offer.platform
        })
      });

      const payload = (await response.json()) as { redirectUrl?: string };
      window.open(payload.redirectUrl ?? offer.affiliateUrl, '_blank', 'noopener,noreferrer');
    } catch {
      window.open(offer.affiliateUrl, '_blank', 'noopener,noreferrer');
    } finally {
      setIsLoading(false);
    }
  }

  const facts = [
    {
      label: offer.insuranceIncluded ? '보험 포함' : '보험 별도 확인',
      value: offer.insuranceIncluded,
      icon: ShieldCheck
    },
    {
      label: offer.freeCancellation ? '무료 취소' : '취소 조건 확인',
      value: offer.freeCancellation,
      icon: Undo2
    },
    {
      label: offer.airportPickup ? '공항 픽업' : '픽업 지점 확인',
      value: offer.airportPickup,
      icon: Plane
    }
  ];

  return (
    <article className="rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-mutedSurface px-3 py-1.5 text-xs font-bold text-ink">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[11px] text-white">
                {platform.mark}
              </span>
              {platform.label}
            </span>
            <span className="rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-subInk">
              {offer.vehicleClass}
            </span>
          </div>

          <div className="mt-4 flex items-start gap-3">
            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Car className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold tracking-[-0.02em] text-ink">{offer.vehicleName}</h3>
              <p className="mt-1 text-sm leading-6 text-subInk">
                {offer.priceUnit === 'total' ? '1회 대여 총액 기준 예상가' : '1일 기준 예상가'} · 예약 전 최종 가격을 확인하세요.
              </p>
            </div>
          </div>

          {!compact && (
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {facts.map(({ label, value, icon: Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-xl bg-mutedSurface px-3 py-2 text-sm font-medium text-subInk"
                >
                  {value ? (
                    <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                  ) : (
                    <XCircle className="h-4 w-4 text-warning" aria-hidden="true" />
                  )}
                  <Icon className="hidden h-4 w-4" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="w-full rounded-2xl bg-mutedSurface p-4 lg:w-64">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-subInk">실시간 가격 확인</p>
          <p className="mt-2 text-sm leading-6 text-ink">
            날짜·차량 재고에 따라 가격이 달라집니다. {platform.label} 예약 화면에서 실시간 최종 가격을 확인하세요.
          </p>
          <p className="mt-1 text-xs text-subInk">보험·취소·보증금도 최종 화면에서 함께 확인</p>
          <button
            type="button"
            onClick={handleBookClick}
            disabled={isLoading}
            className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition disabled:cursor-wait disabled:opacity-70 ${platform.className}`}
          >
            <span className="flex h-4 w-4 items-center justify-center rounded bg-white/20 text-[10px]">
              {platform.mark}
            </span>
            {isLoading ? '이동 준비 중' : platform.buttonLabel}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
