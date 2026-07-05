import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { defaultAffiliateLinks } from '@/lib/data/affiliateLinks';

export const metadata: Metadata = {
  title: '트립닷컴 vs 클룩 해외 렌터카 비교',
  description:
    '트립닷컴과 클룩 해외 렌터카 예약을 한국어 사용 편의성, 쿠폰, 공항픽업, 여행 상품 연계, 모바일 앱 편의성 기준으로 비교합니다.'
};

const rows = [
  {
    label: '한국어 사용 편의성',
    tripcom: '항공·호텔과 함께 쓰는 사용자가 많아 예약 흐름이 익숙한 편입니다.',
    klook: '액티비티와 이동 상품을 함께 보는 여행자에게 편리합니다.'
  },
  {
    label: '쿠폰/프로모션 확인',
    tripcom: '여행 카테고리별 프로모션과 결합해 확인하기 좋습니다.',
    klook: '도시별 액티비티 쿠폰과 함께 확인하기 좋습니다.'
  },
  {
    label: '렌터카 예약 접근성',
    tripcom: '글로벌 렌터카 업체를 도시와 공항 기준으로 비교하기 좋습니다.',
    klook: '렌터카뿐 아니라 전용차량, 공항 이동 상품도 같이 살펴볼 수 있습니다.'
  },
  {
    label: '여행 상품과 함께 예약',
    tripcom: '항공권, 숙소 예약과 같은 계정 안에서 함께 관리하기 쉽습니다.',
    klook: '투어, 입장권, 이동 상품을 같은 일정 안에서 비교하기 좋습니다.'
  },
  {
    label: '공항픽업 연계',
    tripcom: '렌터카 공항 지점과 공항 이동 상품을 함께 확인할 수 있습니다.',
    klook: '공항 픽업 전용차량 상품 선택지가 많은 편입니다.'
  },
  {
    label: '모바일 앱 편의성',
    tripcom: '항공·호텔 예약 내역과 함께 확인하는 흐름이 편합니다.',
    klook: '현지 액티비티 바우처와 이동 상품을 앱에서 보기 좋습니다.'
  },
  {
    label: '도시별 상품 확인 편의성',
    tripcom: '오사카, 후쿠오카, 하와이처럼 렌터카 수요가 큰 지역 비교에 적합합니다.',
    klook: '다낭, 방콕처럼 기사 포함 차량까지 같이 볼 때 유용합니다.'
  }
];

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="rounded-[28px] border border-line bg-white p-6 shadow-soft sm:p-10">
        <p className="text-sm font-bold text-accent">플랫폼 비교</p>
        <h1 className="mt-3 text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-[42px]">
          트립닷컴 vs 클룩 해외 렌터카 비교
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-subInk">
          어느 한쪽이 항상 더 좋다고 단정하기보다, 여행 도시와 일정에 따라 렌터카 상품, 공항 이동, 쿠폰, 앱 사용 흐름을 함께 비교하는 것이 좋습니다.
        </p>
      </section>

      <section className="mt-10 overflow-hidden rounded-[28px] border border-line bg-white shadow-sm">
        <div className="grid grid-cols-1 border-b border-line bg-mutedSurface text-sm font-extrabold text-ink md:grid-cols-[0.8fr_1fr_1fr]">
          <div className="p-4">비교 항목</div>
          <div className="p-4">트립닷컴</div>
          <div className="p-4">클룩</div>
        </div>
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-1 border-b border-line last:border-b-0 md:grid-cols-[0.8fr_1fr_1fr]">
            <div className="bg-mutedSurface/60 p-4 text-sm font-extrabold text-ink md:bg-white">{row.label}</div>
            <div className="p-4 text-sm leading-6 text-subInk">{row.tripcom}</div>
            <div className="p-4 text-sm leading-6 text-subInk">{row.klook}</div>
          </div>
        ))}
      </section>

      <section className="mt-10 rounded-[28px] border border-line bg-mutedSurface p-6 sm:p-8">
        <h2 className="text-xl font-extrabold tracking-[-0.02em] text-ink">예약 전 최종 화면에서 다시 확인하세요</h2>
        <p className="mt-3 text-sm leading-6 text-subInk">
          가격, 보험, 보증금, 무료 취소 조건은 플랫폼과 현지 업체 사정에 따라 달라질 수 있습니다.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={defaultAffiliateLinks.tripcom}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-tripcom px-5 py-3 text-sm font-bold text-white transition hover:bg-tripcom/90"
          >
            트립닷컴 렌터카 보기
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={defaultAffiliateLinks.klook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-klook px-5 py-3 text-sm font-bold text-white transition hover:bg-klook/90"
          >
            클룩 렌터카 보기
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
