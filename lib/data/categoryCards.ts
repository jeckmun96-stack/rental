import { AFFILIATE_LINKS } from '@/lib/data/affiliateLinks';

export type PlatformKey = 'klook' | 'tripcom' | 'agoda';

export interface PlatformBadge {
  key: PlatformKey;
  label: string;
}

export interface CategorySubItem {
  label: string;
  href: string;
  platform: PlatformKey;
  ctaLabel: string;
}

export interface MainCategoryCard {
  id: 'rentcar' | 'transport' | 'esim' | 'activity' | 'attraction' | 'flight';
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  badges: PlatformBadge[];
  subItems?: CategorySubItem[];
}

export const platformBadgeClassMap: Record<PlatformKey, string> = {
  klook: 'bg-[#FFF1E8] text-[#FF5722]',
  tripcom: 'bg-[#EAF0FF] text-[#2557D6]',
  agoda: 'bg-[#EAF0FF] text-[#2557D6]'
};

export const mainCategoryCards: MainCategoryCard[] = [
  {
    id: 'rentcar',
    title: '렌터카',
    description: '해외 렌터카 예약 전 보험, 보증금, 무료취소 조건을 확인하세요.',
    href: AFFILIATE_LINKS.rentcar,
    ctaLabel: '렌터카 상품 보기',
    badges: [{ key: 'klook', label: 'KLOOK' }]
  },
  {
    id: 'transport',
    title: '이동수단',
    description: '공항픽업부터 페리, 크루즈까지 일정에 맞는 이동 방법을 확인하세요.',
    href: '/compare',
    ctaLabel: '이동수단 보기',
    badges: [
      { key: 'klook', label: 'KLOOK' },
      { key: 'tripcom', label: 'TRIP.COM' }
    ],
    subItems: [
      {
        label: '공항픽업',
        href: AFFILIATE_LINKS.airport_transfer,
        platform: 'klook',
        ctaLabel: '공항픽업 보기'
      },
      {
        label: '페리',
        href: AFFILIATE_LINKS.ferry,
        platform: 'klook',
        ctaLabel: '페리 예약 보기'
      },
      {
        label: '크루즈',
        href: AFFILIATE_LINKS.cruise,
        platform: 'tripcom',
        ctaLabel: '크루즈 둘러보기'
      }
    ]
  },
  {
    id: 'flight',
    title: '항공권',
    description: '트립닷컴에서 출발지·도착지, 날짜만 입력해 항공권 가격을 바로 비교하세요.',
    href: '/flights',
    ctaLabel: '항공권 검색하기',
    badges: [{ key: 'tripcom', label: 'TRIP.COM' }]
  },
  {
    id: 'esim',
    title: '이심(eSIM)·유심',
    description: '해외여행 데이터 유심·이심을 미리 준비하세요. 공항 수령 없이 바로 개통할 수 있는 상품도 있습니다.',
    href: 'https://affiliate.klook.com/redirect?aid=126314&aff_adid=1329465&k_site=https%3A%2F%2Fwww.klook.com%2Fko%2Fwifi-sim-card%2F%3Fspm%3DHome_AllNodePopup.Home.BusinessEntry%3A%3A%3A%3ACategory_LIST%26clickId%3D1e8c7c19f3',
    ctaLabel: '이심·유심 보기',
    badges: [{ key: 'klook', label: 'KLOOK' }]
  },
  {
    id: 'activity',
    title: '투어·액티비티',
    description: '현지 투어, 체험, 액티비티 상품을 클룩에서 한 번에 예약하세요.',
    href: 'https://affiliate.klook.com/redirect?aid=126314&aff_adid=1329465&k_site=https%3A%2F%2Fwww.klook.com%2Fko%2Fexperiences%2F%3Fspm%3DHome.TopSearchBar_MainNode_LIST%26clickId%3Df26bda2bd7',
    ctaLabel: '투어·액티비티 보기',
    badges: [{ key: 'klook', label: 'KLOOK' }]
  },
  {
    id: 'attraction',
    title: '입장권(어트랙션)',
    description: '테마파크, 전시, 랜드마크 입장권을 클룩에서 미리 예약하고 줄서지 않고 입장하세요.',
    href: 'https://affiliate.klook.com/redirect?aid=126314&aff_adid=1329465&k_site=https%3A%2F%2Fwww.klook.com%2Fko%2Fattractions%2F%3Fspm%3DHome.TopSearchBar_MainNode_LIST%26clickId%3D96c6f8dee8',
    ctaLabel: '입장권 보기',
    badges: [{ key: 'klook', label: 'KLOOK' }]
  }
];
