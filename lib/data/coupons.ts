export interface RentcarCoupon {
  id: string;
  label: string;
  minSpendNote: string;
  sourceTitle: string;
  url: string;
}

// 클룩 제휴 쿠폰 프로모션 링크입니다.
// 대부분 카드사/시즌 한정 캠페인(예: kakaopayjuly26, unionpay_2026)이라
// 기간이 끝나면 클룩 쪽에서 다른 캠페인으로 교체됩니다.
// 주기적으로 링크가 살아있는지 확인하고, 만료되면 새 캠페인 링크로 교체해주세요.
export const rentcarCoupons: RentcarCoupon[] = [
  {
    id: 'coupon-30-percent',
    label: '30% 할인',
    minSpendNote: '최소 구매 금액 없음',
    sourceTitle: '유니온페이 프로모션',
    url: 'https://affiliate.klook.com/redirect?aid=126314&aff_adid=1329426&k_site=https%3A%2F%2Fwww.klook.com%2Fko%2Ftetris%2Fpromo%2Funionpay_2026%2F'
  },
  {
    id: 'coupon-30600-off',
    label: 'KRW 30,600 off',
    minSpendNote: '최소 구매 금액: KRW 153,100',
    sourceTitle: '클룩 프로모션',
    url: 'https://affiliate.klook.com/redirect?aid=126314&aff_adid=1329426&k_site=https%3A%2F%2Fwww.klook.com%2Fko%2Fpromotion%2Fprogram%2F168360575%2F'
  },
  {
    id: 'coupon-10-percent',
    label: '10% 할인',
    minSpendNote: '최소 구매 금액 없음',
    sourceTitle: '클룩 프로모션',
    url: 'https://affiliate.klook.com/redirect?aid=126314&aff_adid=1329426&k_site=https%3A%2F%2Fwww.klook.com%2Fko%2Fpromotion%2Fprogram%2F153009530%2F'
  },
  {
    id: 'coupon-5-percent',
    label: '5% 할인',
    minSpendNote: '최소 구매 금액: KRW 382,800',
    sourceTitle: '마스터카드 프로모션',
    url: 'https://affiliate.klook.com/redirect?aid=126314&aff_adid=1329426&k_site=https%3A%2F%2Fwww.klook.com%2Fko%2Ftetris%2Fpromo%2Fapac-mastercard2026%2F'
  },
  {
    id: 'coupon-5000-off',
    label: 'KRW 5,000 off',
    minSpendNote: '최소 구매 금액: KRW 150,000',
    sourceTitle: '카카오페이 7월 한정 프로모션',
    url: 'https://affiliate.klook.com/redirect?aid=126314&aff_adid=1329426&k_site=https%3A%2F%2Fwww.klook.com%2Fko%2Ftetris%2Fpromo%2Fkakaopayjuly26%2F'
  }
];
