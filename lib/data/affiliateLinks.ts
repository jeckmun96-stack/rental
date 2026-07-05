import type { RentcarPlatform } from '@/types/rentcar';

export type AffiliateCityKey =
  | 'japan-osaka'
  | 'japan-fukuoka'
  | 'japan-tokyo'
  | 'usa-hawaii'
  | 'usa-guam'
  | 'vietnam-danang'
  | 'thailand-bangkok';

export const affiliateLinks: Record<AffiliateCityKey, Record<RentcarPlatform, string>> = {
  'japan-osaka': {
    tripcom: 'https://www.trip.com/carhire/?locale=ko-KR&utm_source=affiliate&campaign=rentcar-osaka',
    klook: 'https://www.klook.com/ko/car-rentals/?aid=rentcar-osaka'
  },
  'japan-fukuoka': {
    tripcom: 'https://www.trip.com/carhire/?locale=ko-KR&utm_source=affiliate&campaign=rentcar-fukuoka',
    klook: 'https://www.klook.com/ko/car-rentals/?aid=rentcar-fukuoka'
  },
  'japan-tokyo': {
    tripcom: 'https://www.trip.com/carhire/?locale=ko-KR&utm_source=affiliate&campaign=rentcar-tokyo',
    klook: 'https://www.klook.com/ko/car-rentals/?aid=rentcar-tokyo'
  },
  'usa-hawaii': {
    tripcom: 'https://www.trip.com/carhire/?locale=ko-KR&utm_source=affiliate&campaign=rentcar-hawaii',
    klook: 'https://www.klook.com/ko/car-rentals/?aid=rentcar-hawaii'
  },
  'usa-guam': {
    tripcom: 'https://www.trip.com/carhire/?locale=ko-KR&utm_source=affiliate&campaign=rentcar-guam',
    klook: 'https://www.klook.com/ko/car-rentals/?aid=rentcar-guam'
  },
  'vietnam-danang': {
    tripcom: 'https://www.trip.com/carhire/?locale=ko-KR&utm_source=affiliate&campaign=rentcar-danang',
    klook: 'https://www.klook.com/ko/car-rentals/?aid=rentcar-danang'
  },
  'thailand-bangkok': {
    tripcom: 'https://www.trip.com/carhire/?locale=ko-KR&utm_source=affiliate&campaign=rentcar-bangkok',
    klook: 'https://www.klook.com/ko/car-rentals/?aid=rentcar-bangkok'
  }
};

export const defaultAffiliateLinks: Record<RentcarPlatform, string> = {
  tripcom: 'https://www.trip.com/carhire/?locale=ko-KR&utm_source=affiliate&campaign=global-rent-lab',
  klook: 'https://www.klook.com/ko/car-rentals/?aid=global-rent-lab'
};

export function getAffiliateUrl(cityId: string, platform: RentcarPlatform) {
  const links = affiliateLinks[cityId as AffiliateCityKey];
  return links?.[platform] ?? defaultAffiliateLinks[platform];
}
