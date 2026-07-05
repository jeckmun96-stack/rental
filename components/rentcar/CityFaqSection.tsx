import { CarFront, CreditCard, FileBadge2, Plane, ShieldCheck, Undo2 } from 'lucide-react';
import type { City } from '@/types/city';

export function CityFaqSection({ city }: { city: City }) {
  const infoItems = [
    {
      title: '국제운전면허증 안내',
      text: city.intlLicenseNote,
      icon: FileBadge2
    },
    {
      title: '현지 운전 주의사항',
      text: city.drivingCaution,
      icon: CarFront
    },
    {
      title: '보험 안내',
      text: city.insuranceNote,
      icon: ShieldCheck
    },
    {
      title: '보증금 안내',
      text: city.depositNote,
      icon: CreditCard
    },
    {
      title: '무료 취소 안내',
      text: city.freeCancellationNote,
      icon: Undo2
    },
    {
      title: '공항 픽업 안내',
      text: city.airportPickupAvailable
        ? `${city.cityNameKo}는 공항 픽업 상품을 비교하기 좋은 도시입니다. 예약 전 터미널, 셔틀 이동 여부, 영업시간을 확인하세요.`
        : '공항 픽업 가능 여부와 실제 차량 인수 장소를 예약 화면에서 확인하세요.',
      icon: Plane
    },
    {
      title: '예약 화면 확인 팁',
      text: city.vendorComparisonNote,
      icon: Plane
    }
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: infoItems.map((item) => ({
      '@type': 'Question',
      name: `${city.cityNameKo} 렌터카 ${item.title}`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.text
      }
    }))
  };

  return (
    <section className="mt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="rounded-[28px] border border-line bg-mutedSurface p-5 sm:p-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold text-accent">예약 전 체크</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-ink">
            최종 예약 전 꼭 확인해야 할 정보
          </h2>
          <p className="mt-3 text-sm leading-6 text-subInk">
            가격만 보고 예약하면 현장 보험, 보증금, 반납 조건에서 당황할 수 있습니다. 아래 항목을 먼저 확인하세요.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {infoItems.map(({ title, text, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-extrabold tracking-[-0.02em] text-ink">{title}</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-subInk">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
