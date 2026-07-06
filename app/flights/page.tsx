import type { Metadata } from 'next';
import { TripComFlightSearch } from '@/components/flights/TripComFlightSearch';

export const metadata: Metadata = {
  title: '항공권 검색 | 렌트카팁쿠폰',
  description: '트립닷컴 항공권 검색으로 출발지·도착지, 날짜만 입력해 바로 항공권 가격을 비교하세요.'
};

const checklist = [
  {
    title: '경유 시간 확인',
    description: '짧은 경유는 환승 실패 위험이 있고, 너무 긴 경유는 일정 낭비가 될 수 있습니다.'
  },
  {
    title: '수하물 포함 여부',
    description: '특가 항공권은 위탁 수하물이 별도 유료인 경우가 많아 예약 전 확인이 필요합니다.'
  },
  {
    title: '환불·변경 규정',
    description: '항공권 등급(이코노미 라이트 등)에 따라 환불·일정 변경 가능 여부와 수수료가 다릅니다.'
  },
  {
    title: '왕복·편도 비교',
    description: '일정이 유동적이라면 편도 두 번 구매가 왕복보다 저렴한 경우도 있어 함께 비교해보세요.'
  }
];

export default function FlightsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="rounded-[28px] border border-line bg-white p-6 shadow-soft sm:p-10">
        <p className="text-sm font-bold text-accent">TRIP.COM FLIGHT</p>
        <h1 className="mt-3 text-[32px] font-extrabold leading-tight text-ink sm:text-[42px]">항공권 검색하기</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-subInk">
          출발지, 도착지, 날짜만 입력하면 트립닷컴에서 바로 항공권 가격을 비교할 수 있습니다. 결제는 트립닷컴 화면에서 진행됩니다.
        </p>
      </section>

      <div className="mt-8">
        <TripComFlightSearch />
      </div>

      <section className="mt-10 rounded-[28px] border border-line bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-bold text-accent">예약 전 체크</p>
        <h2 className="mt-2 text-2xl font-extrabold text-ink">항공권 예약 전 확인하세요</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {checklist.map((item) => (
            <article key={item.title} className="rounded-2xl bg-mutedSurface p-4">
              <h3 className="font-extrabold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-subInk">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
