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
  id: 'rentcar' | 'transport' | 'hotel' | 'esim' | 'activity';
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  ctaLabel: string;
  badges: PlatformBadge[];
  subItems?: CategorySubItem[];
}

export interface HomeInfoCard {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const platformBadgeClassMap: Record<PlatformKey, string> = {
  klook: 'bg-[#FFF1E8] text-[#FF5722]',
  tripcom: 'bg-[#EAF0FF] text-[#2557D6]',
  agoda: 'bg-[#EAF0FF] text-[#2557D6]'
};

export const homeInfoCards: HomeInfoCard[] = [
  {
    title: '도시별 예약 조건',
    description: '국제면허, 보험, 보증금 조건을 도시별로 확인하세요.',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=640&q=80',
    imageAlt: '여행 지도와 예약 정보를 확인하는 장면'
  },
  {
    title: '예약처 바로 연결',
    description: '클룩, 트립닷컴 등 예약 가능한 페이지로 바로 이동할 수 있어요.',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=640&q=80',
    imageAlt: '공항에서 여행자가 이동하는 장면'
  },
  {
    title: '쿠폰·할인코드 준비',
    description: '나중에 사용할 수 있는 할인코드와 프로모션 정보를 함께 정리합니다.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=640&q=80',
    imageAlt: '온라인 예약과 결제를 준비하는 장면'
  }
];

export const mainCategoryCards: MainCategoryCard[] = [
  {
    id: 'rentcar',
    title: '렌터카',
    description: '해외 렌터카 예약 전 보험, 보증금, 무료취소 조건을 확인하세요.',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    imageAlt: '도로 위를 달리는 여행 차량',
    href: AFFILIATE_LINKS.rentcar,
    ctaLabel: '렌터카 상품 보기',
    badges: [{ key: 'klook', label: 'KLOOK' }]
  },
  {
    id: 'transport',
    title: '이동수단',
    description: '공항픽업부터 페리, 크루즈까지 일정에 맞는 이동 방법을 확인하세요.',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    imageAlt: '공항에서 다음 이동수단을 준비하는 여행자',
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
    id: 'hotel',
    title: '호텔',
    description: '아고다 호텔 검색과 도시별 숙소 가이드를 준비할 수 있는 카테고리입니다.',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    imageAlt: '수영장이 있는 호텔 리조트 외관',
    href: '/hotels',
    ctaLabel: '호텔 검색하기',
    badges: [{ key: 'agoda', label: 'AGODA' }]
  },
  {
    id: 'esim',
    title: '이심(eSIM)·유심',
    description: '해외여행 데이터 유심·이심을 미리 준비하세요. 공항 수령 없이 바로 개통할 수 있는 상품도 있습니다.',
    imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80',
    imageAlt: '스마트폰 유심을 준비하는 여행자',
    // TODO: 클룩 어필리에이트 딥링크 생성 후 교체 필요 (지금은 임시 일반 링크)
    href: 'https://www.klook.com/ko/simcard/',
    ctaLabel: '이심·유심 보기',
    badges: [{ key: 'klook', label: 'KLOOK' }]
  },
  {
    id: 'activity',
    title: '투어·입장권',
    description: '테마파크 입장권, 현지 투어, 액티비티까지 클룩에서 한 번에 예약하세요.',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    imageAlt: '입장권을 들고 있는 여행자',
    // TODO: 클룩 어필리에이트 딥링크 생성 후 교체 필요 (지금은 임시 일반 링크)
    href: 'https://www.klook.com/ko/',
    ctaLabel: '투어·입장권 보기',
    badges: [{ key: 'klook', label: 'KLOOK' }]
  }
];
