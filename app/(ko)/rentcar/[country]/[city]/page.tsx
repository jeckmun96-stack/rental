import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CityHero } from '@/components/rentcar/CityHero';
import { CityFaqSection } from '@/components/rentcar/CityFaqSection';
import { RelatedCities } from '@/components/rentcar/RelatedCities';
import { RentcarOfferCard } from '@/components/rentcar/RentcarOfferCard';
import { RentcarOfferList } from '@/components/rentcar/RentcarOfferList';
import { RentcarCouponStrip } from '@/components/rentcar/RentcarCouponStrip';
import { getRelatedCities } from '@/lib/data/cities';
import { getAllStaticCityParams, getCityPageData } from '@/lib/rentcar';

export const revalidate = 3600;

interface CityPageProps {
  params: {
    country: string;
    city: string;
  };
}

export async function generateStaticParams() {
  return getAllStaticCityParams();
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const data = await getCityPageData(params.country, params.city);

  if (!data) {
    return {
      title: '도시를 찾을 수 없습니다'
    };
  }

  return {
    title: data.city.metaTitle,
    description: data.city.metaDescription,
    openGraph: {
      title: data.city.metaTitle,
      description: data.city.metaDescription,
      type: 'article'
    }
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const data = await getCityPageData(params.country, params.city);

  if (!data) {
    notFound();
  }

  const { city, offers } = data;
  const relatedCities = getRelatedCities(city.relatedCitySlugs);
  const bottomOffers = offers.slice(0, 2);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16">
      <CityHero city={city} />
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-line bg-white p-6 shadow-sm">
          <p className="text-sm font-bold text-accent">렌터카 활용</p>
          <h2 className="mt-2 text-xl font-extrabold tracking-[-0.02em] text-ink">
            이 도시에서 렌터카가 필요한 경우
          </h2>
          <p className="mt-3 text-sm leading-7 text-subInk">{city.drivingCaution}</p>
        </article>
        <article className="rounded-2xl border border-line bg-white p-6 shadow-sm">
          <p className="text-sm font-bold text-accent">예약 전 체크리스트</p>
          <h2 className="mt-2 text-xl font-extrabold tracking-[-0.02em] text-ink">
            면허·보험·보증금부터 확인
          </h2>
          <p className="mt-3 text-sm leading-7 text-subInk">
            국제운전면허증, 국내 면허증, 여권, 운전자 명의 신용카드, 무료 취소 마감 시간을 먼저 확인하세요.
          </p>
          <Link href="/checklist" className="mt-4 inline-flex text-sm font-bold text-accent">
            전체 체크리스트 보기
          </Link>
        </article>
      </section>
      <RentcarOfferList
        offers={offers}
        countrySlug={city.countrySlug}
        citySlug={city.citySlug}
      />
      <RentcarCouponStrip />
      <CityFaqSection city={city} />

      {bottomOffers.length > 0 && (
        <section className="mt-14">
          <div>
            <p className="text-sm font-bold text-accent">다시 보기</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-ink">
              이 도시 인기 렌터카 다시 보기
            </h2>
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {bottomOffers.map((offer) => (
              <RentcarOfferCard
                key={offer.id}
                offer={offer}
                countrySlug={city.countrySlug}
                citySlug={city.citySlug}
                compact
              />
            ))}
          </div>
        </section>
      )}

      <RelatedCities cities={relatedCities} />
    </div>
  );
}
