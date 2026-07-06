import type { OfferCategory, RentcarPlatform } from '@/types/rentcar';

export const AFFILIATE_LINKS: Record<OfferCategory, string> = {
  rentcar:
    'https://affiliate.klook.com/redirect?aid=126314&aff_adid=1329419&k_site=https%3A%2F%2Fwww.klook.com%2Fko%2Fcar-rentals%2F',
  airport_transfer: 'https://affiliate.klook.com/sl/1el5TB1',
  ferry: 'https://affiliate.klook.com/sl/1GPgBJ7',
  cruise: 'https://www.trip.com/t/UlCBD6LlOV2'
};

export const transportCategoryLinks: Array<{
  category: OfferCategory;
  title: string;
  description: string;
  platform: RentcarPlatform;
  ctaLabel: string;
}> = [
  {
    category: 'rentcar',
    title: '렌터카',
    description: '직접 운전 일정이라면 면허, 보험, 보증금 조건을 확인한 뒤 렌터카 상품으로 이동하세요.',
    platform: 'klook',
    ctaLabel: '렌터카 조건 보기'
  },
  {
    category: 'airport_transfer',
    title: '공항 픽업·샌딩',
    description: '심야 도착, 가족 여행, 짐이 많은 일정은 공항 이동 상품을 먼저 비교하는 편이 편합니다.',
    platform: 'klook',
    ctaLabel: '공항 이동 보기'
  },
  {
    category: 'ferry',
    title: '페리',
    description: '섬 이동이나 근교 항구 일정이 있다면 운항 시간, 탑승 위치, 수하물 조건을 확인하세요.',
    platform: 'klook',
    ctaLabel: '페리 상품 보기'
  },
  {
    category: 'cruise',
    title: '크루즈',
    description: '크루즈 일정은 출발 항구, 객실, 포함 서비스, 취소 조건을 최종 화면에서 확인하세요.',
    platform: 'tripcom',
    ctaLabel: '크루즈 상품 보기'
  }
];

export const defaultAffiliateLinks: Record<RentcarPlatform, string> = {
  tripcom: AFFILIATE_LINKS.cruise,
  klook: AFFILIATE_LINKS.rentcar
};

export function getAffiliateUrl(category: OfferCategory) {
  return AFFILIATE_LINKS[category];
}
