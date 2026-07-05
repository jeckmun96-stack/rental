import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '해외 렌터카 자주 묻는 질문',
  description:
    '해외 렌터카 예약 시 국제운전면허증, 국내 면허증, 보증금, 보험, 공항 픽업, 무료 취소, 운전자 나이 제한을 FAQ로 정리했습니다.'
};

const faqs = [
  {
    question: '해외 렌터카 예약할 때 국제운전면허증이 필요한가요?',
    answer: '대부분의 여행지에서는 국제운전면허증을 준비하는 것이 안전합니다. 국가별 규정이 다를 수 있으므로 예약 전 현지 운전 가능 조건을 확인하세요.'
  },
  {
    question: '국내 운전면허증도 같이 가져가야 하나요?',
    answer: '네. 국제운전면허증, 국내 운전면허증, 여권을 함께 요구하는 경우가 많습니다.'
  },
  {
    question: '보증금은 꼭 필요한가요?',
    answer: '차량 등급과 업체 정책에 따라 신용카드 보증금 홀드가 발생할 수 있습니다. 운전자 본인 명의 신용카드를 준비하는 것이 좋습니다.'
  },
  {
    question: '해외 렌터카 보험은 어떻게 확인하나요?',
    answer: '예약 화면에서 기본 보험, 자차손해면책, 자기부담금, 현장 추가 보험 여부를 확인하세요.'
  },
  {
    question: '렌터카와 공항픽업 중 무엇을 먼저 봐야 하나요?',
    answer: '직접 운전해 근교까지 이동한다면 렌터카가 맞고, 심야 도착이나 짐이 많은 일정이라면 공항픽업·샌딩 상품을 먼저 확인하는 편이 편합니다.'
  },
  {
    question: '공항 픽업 렌터카는 어떻게 확인하나요?',
    answer: '상품 상세에서 픽업 지점, 터미널, 셔틀 이동 여부, 영업시간을 확인하세요.'
  },
  {
    question: '무료 취소 상품은 정말 무료로 취소되나요?',
    answer: '무료 취소 가능 시간이 정해져 있는 경우가 많습니다. 현지 시간 기준 마감일과 환불 조건을 확인해야 합니다.'
  },
  {
    question: '운전자 나이 제한이 있나요?',
    answer: '만 21세 또는 만 25세 이상 조건이 붙을 수 있고, 젊은 운전자 추가 요금이 있을 수 있습니다.'
  },
  {
    question: '현지에서 추가 요금이 붙을 수 있나요?',
    answer: '보험 업그레이드, 추가 운전자, 카시트, 내비게이션, 연료, 편도 반납 비용 등이 추가될 수 있습니다.'
  },
  {
    question: '렌터카 예약 전 가장 먼저 봐야 할 것은 무엇인가요?',
    answer: '면허 조건, 보험 포함 여부, 보증금, 무료 취소, 공항 픽업 위치를 먼저 확인하세요.'
  }
];

export default function FAQPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="rounded-[28px] border border-line bg-white p-6 shadow-soft sm:p-10">
        <p className="text-sm font-bold text-accent">FAQ</p>
        <h1 className="mt-3 text-[32px] font-extrabold leading-tight tracking-[-0.02em] text-ink sm:text-[42px]">
          해외 렌터카 자주 묻는 질문
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-subInk">
          해외 렌터카 예약 전에 자주 막히는 면허, 보험, 보증금, 공항 픽업, 취소 조건을 한 번에 정리했습니다.
        </p>
      </section>

      <section className="mt-10 grid gap-4">
        {faqs.map((faq) => (
          <article key={faq.question} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
            <h2 className="font-extrabold tracking-[-0.02em] text-ink">{faq.question}</h2>
            <p className="mt-3 text-sm leading-7 text-subInk">{faq.answer}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-[28px] border border-line bg-mutedSurface p-6 sm:p-8">
        <h2 className="text-xl font-extrabold tracking-[-0.02em] text-ink">도시별 예약 조건 보기</h2>
        <p className="mt-3 text-sm leading-6 text-subInk">
          실제 예약 전에는 여행 도시별 주의사항도 함께 확인하는 것이 좋습니다.
        </p>
        <Link
          href="/rentcar"
          className="mt-5 inline-flex rounded-2xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-accent"
        >
          도시별 렌터카 가이드
        </Link>
      </section>
    </div>
  );
}
