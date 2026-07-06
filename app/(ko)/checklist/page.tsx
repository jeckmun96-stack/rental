import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BadgeCheck,
  CalendarClock,
  CarFront,
  CreditCard,
  FileBadge2,
  Fuel,
  Plane,
  ShieldCheck,
  UserPlus
} from 'lucide-react';

export const metadata: Metadata = {
  title: '해외 렌터카 예약 전 체크리스트',
  description:
    '해외 렌터카 예약 전 국제운전면허증, 국내 면허증, 여권, 신용카드 보증금, 보험, 무료 취소, 연료 정책, 공항 픽업 위치를 확인하세요.'
};

const checklistItems = [
  {
    title: '국제운전면허증 준비',
    description: '여행 국가에서 인정되는 국제운전면허증인지 확인하고 만료일을 함께 체크하세요.',
    icon: FileBadge2
  },
  {
    title: '국내 운전면허증 지참',
    description: '국제운전면허증만으로는 부족한 경우가 많아 국내 면허증도 함께 가져가세요.',
    icon: BadgeCheck
  },
  {
    title: '여권 준비',
    description: '현장 계약서 작성과 본인 확인에 여권이 필요할 수 있습니다.',
    icon: BadgeCheck
  },
  {
    title: '신용카드 보증금 확인',
    description: '운전자 본인 명의 해외 결제 가능 신용카드가 필요한 상품이 많습니다.',
    icon: CreditCard
  },
  {
    title: '보험 포함 여부 확인',
    description: '기본 보험, CDW, 자기부담금, 완전자차 조건을 예약 화면에서 비교하세요.',
    icon: ShieldCheck
  },
  {
    title: '무료 취소 조건 확인',
    description: '무료 취소 문구가 있어도 마감 시간과 현지 업체 규정을 반드시 확인하세요.',
    icon: CalendarClock
  },
  {
    title: '연료 정책 확인',
    description: '가득 대여·가득 반납, 선결제 연료 등 정책에 따라 실제 비용이 달라집니다.',
    icon: Fuel
  },
  {
    title: '공항 픽업 위치 확인',
    description: '터미널 내 카운터인지, 셔틀 이동인지, 영업시간이 항공편과 맞는지 보세요.',
    icon: Plane
  },
  {
    title: '추가 운전자 비용 확인',
    description: '동행자가 운전할 예정이면 추가 운전자 등록 비용과 보험 적용 범위를 확인하세요.',
    icon: UserPlus
  },
  {
    title: '운전자 나이 제한 확인',
    description: '만 21세, 만 25세 등 나이 제한과 젊은 운전자 추가 요금이 있을 수 있습니다.',
    icon: CarFront
  }
];

export default function ChecklistPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <section className="rounded-[28px] border border-line bg-white p-6 shadow-soft sm:p-10">
        <p className="text-sm font-bold text-accent">예약 전 체크</p>
        <h1 className="mt-3 text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-[42px]">
          해외 렌터카 예약 전 체크리스트
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-subInk">
          가격을 비교하기 전에 면허, 보험, 보증금, 픽업 위치를 먼저 확인하면 현장 추가 비용과 일정 차질을 줄일 수 있습니다.
        </p>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {checklistItems.map(({ title, description, icon: Icon }) => (
          <article key={title} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="font-extrabold tracking-[-0.02em] text-ink">{title}</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-subInk">{description}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-[28px] border border-line bg-mutedSurface p-6 sm:p-8">
        <h2 className="text-xl font-extrabold tracking-[-0.02em] text-ink">도시별 조건도 함께 확인하세요</h2>
        <p className="mt-3 text-sm leading-6 text-subInk">
          같은 렌터카라도 일본, 하와이, 괌, 동남아는 운전 환경과 상품 형태가 다릅니다.
        </p>
        <Link
          href="/rentcar"
          className="mt-5 inline-flex rounded-2xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-accent"
        >
          도시별 렌터카 보기
        </Link>
      </section>
    </div>
  );
}
