import type { Metadata } from 'next';
import { mainCategoryCards, platformBadgeClassMap } from '@/lib/data/categoryCards';

export const metadata: Metadata = {
  title: '해외 여행 이동수단 예약 가이드 | 렌터카·공항픽업·페리·크루즈',
  description:
    '해외여행 일정에 맞춰 렌터카, 공항픽업·샌딩, 페리, 크루즈를 선택할 때 확인해야 할 면허, 보험, 수하물, 취소 조건을 정리했습니다.'
};

const rows = [
  {
    label: '렌터카',
    bestFor: '근교 이동이 많고 직접 운전이 가능한 일정',
    checks: '국제운전면허증, 보험/면책금, 보증금, 공항 지점 영업시간'
  },
  {
    label: '공항 픽업·샌딩',
    bestFor: '심야 도착, 가족 여행, 짐이 많은 첫날·마지막날 이동',
    checks: '항공편 지연 대응, 미팅 장소, 차량 크기, 무료 대기 시간'
  },
  {
    label: '페리',
    bestFor: '섬 이동이나 항구 도시를 포함한 일정',
    checks: '출발 항구, 탑승 마감 시간, 수하물 규정, 결항/환불 조건'
  },
  {
    label: '크루즈',
    bestFor: '숙박과 이동, 선상 서비스를 함께 묶는 일정',
    checks: '출발 항구, 객실 등급, 포함 서비스, 취소 수수료'
  }
] as const;

export default function ComparePage() {
  const transportCard = mainCategoryCards.find((card) => card.id === 'transport');

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="rounded-[28px] border border-line bg-white p-6 shadow-soft sm:p-10">
        <p className="text-sm font-bold text-accent">이동수단 선택 기준</p>
        <h1 className="mt-3 text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-[42px]">
          해외 여행 교통수단, 무엇부터 예약할까요?
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-subInk">
          일정이 짧을수록 이동수단 선택이 여행 피로도를 크게 바꿉니다. 직접 운전이 필요한지, 공항 이동만 필요한지, 섬이나 항구 일정이 있는지에 따라 먼저 확인할 항목이 달라집니다.
        </p>
      </section>

      <section className="mt-10 overflow-hidden rounded-[28px] border border-line bg-white shadow-sm">
        <div className="grid grid-cols-1 border-b border-line bg-mutedSurface text-sm font-extrabold text-ink md:grid-cols-[0.7fr_1fr_1.2fr]">
          <div className="p-4">구분</div>
          <div className="p-4">추천 일정</div>
          <div className="p-4">예약 전 확인</div>
        </div>
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-1 border-b border-line last:border-b-0 md:grid-cols-[0.7fr_1fr_1.2fr]">
            <div className="bg-mutedSurface/60 p-4 text-sm font-extrabold text-ink md:bg-white">{row.label}</div>
            <div className="p-4 text-sm leading-6 text-subInk">{row.bestFor}</div>
            <div className="p-4 text-sm leading-6 text-subInk">{row.checks}</div>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-[28px] border border-line bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-bold text-accent">이동수단 하위 항목</p>
        <h2 className="mt-2 text-2xl font-extrabold text-ink">공항픽업·페리·크루즈를 한 번에 보기</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-subInk">
          페리와 크루즈는 독립 메인 카테고리가 아니라 이동수단 안에서 일정에 맞게 선택하는 항목으로 정리했습니다.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {transportCard?.subItems?.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="rounded-2xl border border-line bg-surface p-4 transition hover:border-accent"
            >
              <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${platformBadgeClassMap[item.platform]}`}>
                {item.platform === 'tripcom' ? 'TRIP.COM' : 'KLOOK'}
              </span>
              <span className="mt-3 block font-extrabold text-ink">{item.label}</span>
              <span className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-3 text-sm font-bold text-white transition hover:bg-accent/90">
                {item.ctaLabel}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-[28px] border border-line bg-mutedSurface p-6 sm:p-8">
        <h2 className="text-xl font-extrabold tracking-[-0.02em] text-ink">최종 예약 화면에서 다시 확인하세요</h2>
        <p className="mt-3 text-sm leading-6 text-subInk">
          본 사이트의 가격과 설명은 예약 판단을 돕기 위한 정보입니다. 결제 전에는 제휴 플랫폼의 최종 화면에서 포함 사항, 취소 규정, 현지 업체 조건을 다시 확인하세요.
        </p>
      </section>
    </div>
  );
}
