import type { AgodaSearchResponse } from './types';

const AGODA_ENDPOINT = 'http://affiliateapi7643.agoda.com/affiliateservice/lt_v1';

interface CitySearchParams {
  cityId: number;
  checkInDate: string;
  checkOutDate: string;
  maxResult?: number;
  sortBy?: 'Recommended' | 'PriceAsc' | 'PriceDesc' | 'StarRatingAsc' | 'StarRatingDesc';
  currency?: string;
  language?: string;
}

export async function searchAgodaHotelsByCity(params: CitySearchParams): Promise<AgodaSearchResponse> {
  const siteId = process.env.AGODA_SITE_ID;
  const apiKey = process.env.AGODA_API_KEY;

  if (!siteId || !apiKey) {
    throw new Error('AGODA_SITE_ID / AGODA_API_KEY 환경변수가 설정되지 않았습니다.');
  }

  const response = await fetch(AGODA_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip,deflate',
      Authorization: `${siteId}:${apiKey}`
    },
    body: JSON.stringify({
      criteria: {
        additional: {
          currency: params.currency ?? 'KRW',
          language: params.language ?? 'ko-kr',
          maxResult: params.maxResult ?? 10,
          sortBy: params.sortBy ?? 'PriceAsc',
          discountOnly: false,
          minimumReviewScore: 0,
          minimumStarRating: 0,
          occupancy: {
            numberOfAdult: 2,
            numberOfChildren: 0
          }
        },
        checkInDate: params.checkInDate,
        checkOutDate: params.checkOutDate,
        cityId: params.cityId
      }
    }),
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(`Agoda API 요청 실패 (status: ${response.status})`);
  }

  return response.json();
}
