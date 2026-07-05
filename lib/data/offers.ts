import { getAffiliateUrl } from '@/lib/data/affiliateLinks';
import type { RentcarOffer } from '@/types/rentcar';

const rawRentcarOffers: Omit<RentcarOffer, 'affiliateUrl'>[] = [
  {
    id: 'offer-osaka-tripcom-compact',
    cityId: 'japan-osaka',
    platform: 'tripcom',
    vehicleName: '도요타 야리스 또는 동급',
    vehicleClass: '소형',
    priceKrw: 73400,
    priceUnit: 'total',
    insuranceIncluded: true,
    freeCancellation: true,
    airportPickup: true,
    sortOrder: 1
  },
  {
    id: 'offer-osaka-klook-suv',
    cityId: 'japan-osaka',
    platform: 'klook',
    vehicleName: '닛산 노트 또는 동급',
    vehicleClass: '소형 해치백',
    priceKrw: 81200,
    priceUnit: 'total',
    insuranceIncluded: true,
    freeCancellation: true,
    airportPickup: true,
    sortOrder: 2
  },
  {
    id: 'offer-fukuoka-tripcom-compact',
    cityId: 'japan-fukuoka',
    platform: 'tripcom',
    vehicleName: '혼다 피트 또는 동급',
    vehicleClass: '소형',
    priceKrw: 69800,
    priceUnit: 'total',
    insuranceIncluded: true,
    freeCancellation: true,
    airportPickup: true,
    sortOrder: 1
  },
  {
    id: 'offer-fukuoka-klook-family',
    cityId: 'japan-fukuoka',
    platform: 'klook',
    vehicleName: '토요타 시엔타 또는 동급',
    vehicleClass: '패밀리',
    priceKrw: 103000,
    priceUnit: 'total',
    insuranceIncluded: true,
    freeCancellation: false,
    airportPickup: true,
    sortOrder: 2
  },
  {
    id: 'offer-tokyo-tripcom-compact',
    cityId: 'japan-tokyo',
    platform: 'tripcom',
    vehicleName: '마쯔다 2 또는 동급',
    vehicleClass: '소형',
    priceKrw: 78900,
    priceUnit: 'total',
    insuranceIncluded: true,
    freeCancellation: true,
    airportPickup: true,
    sortOrder: 1
  },
  {
    id: 'offer-tokyo-klook-wagon',
    cityId: 'japan-tokyo',
    platform: 'klook',
    vehicleName: '토요타 프리우스 또는 동급',
    vehicleClass: '하이브리드',
    priceKrw: 112000,
    priceUnit: 'total',
    insuranceIncluded: true,
    freeCancellation: true,
    airportPickup: true,
    sortOrder: 2
  },
  {
    id: 'offer-hawaii-tripcom-sedan',
    cityId: 'usa-hawaii',
    platform: 'tripcom',
    vehicleName: '토요타 코롤라 또는 동급',
    vehicleClass: '중형 세단',
    priceKrw: 128000,
    priceUnit: 'total',
    insuranceIncluded: false,
    freeCancellation: true,
    airportPickup: true,
    sortOrder: 1
  },
  {
    id: 'offer-hawaii-klook-suv',
    cityId: 'usa-hawaii',
    platform: 'klook',
    vehicleName: '지프 컴패스 또는 동급',
    vehicleClass: 'SUV',
    priceKrw: 169000,
    priceUnit: 'total',
    insuranceIncluded: true,
    freeCancellation: true,
    airportPickup: true,
    sortOrder: 2
  },
  {
    id: 'offer-guam-tripcom-family',
    cityId: 'usa-guam',
    platform: 'tripcom',
    vehicleName: '닛산 센트라 또는 동급',
    vehicleClass: '중형',
    priceKrw: 104000,
    priceUnit: 'total',
    insuranceIncluded: true,
    freeCancellation: true,
    airportPickup: true,
    sortOrder: 1
  },
  {
    id: 'offer-guam-klook-van',
    cityId: 'usa-guam',
    platform: 'klook',
    vehicleName: '토요타 시에나 또는 동급',
    vehicleClass: '미니밴',
    priceKrw: 188000,
    priceUnit: 'total',
    insuranceIncluded: true,
    freeCancellation: false,
    airportPickup: true,
    sortOrder: 2
  },
  {
    id: 'offer-danang-tripcom-transfer',
    cityId: 'vietnam-danang',
    platform: 'tripcom',
    vehicleName: '공항 픽업 차량',
    vehicleClass: '기사 포함',
    priceKrw: 36500,
    priceUnit: 'total',
    insuranceIncluded: true,
    freeCancellation: true,
    airportPickup: true,
    sortOrder: 1
  },
  {
    id: 'offer-danang-klook-driver',
    cityId: 'vietnam-danang',
    platform: 'klook',
    vehicleName: '다낭 전용차량 투어',
    vehicleClass: '기사 포함',
    priceKrw: 59000,
    priceUnit: 'total',
    insuranceIncluded: true,
    freeCancellation: true,
    airportPickup: true,
    sortOrder: 2
  },
  {
    id: 'offer-bangkok-tripcom-compact',
    cityId: 'thailand-bangkok',
    platform: 'tripcom',
    vehicleName: '토요타 야리스 아티브 또는 동급',
    vehicleClass: '소형 세단',
    priceKrw: 49200,
    priceUnit: 'total',
    insuranceIncluded: true,
    freeCancellation: true,
    airportPickup: true,
    sortOrder: 1
  },
  {
    id: 'offer-bangkok-klook-driver',
    cityId: 'thailand-bangkok',
    platform: 'klook',
    vehicleName: '방콕 공항 픽업 차량',
    vehicleClass: '기사 포함',
    priceKrw: 42100,
    priceUnit: 'total',
    insuranceIncluded: true,
    freeCancellation: true,
    airportPickup: true,
    sortOrder: 2
  }
];

export const rentcarOffers: RentcarOffer[] = rawRentcarOffers.map((offer) => ({
  ...offer,
  affiliateUrl: getAffiliateUrl(offer.cityId, offer.platform)
}));

export function getOffersByCityId(cityId: string) {
  return rentcarOffers
    .filter((offer) => offer.cityId === cityId)
    .sort((a, b) => a.sortOrder - b.sortOrder || a.priceKrw - b.priceKrw);
}

export function getOfferById(offerId: string) {
  return rentcarOffers.find((offer) => offer.id === offerId);
}
