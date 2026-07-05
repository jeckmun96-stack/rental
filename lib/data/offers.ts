import { getAffiliateUrl } from '@/lib/data/affiliateLinks';
import type { RentcarOffer } from '@/types/rentcar';

const rawRentcarOffers: Omit<RentcarOffer, 'affiliateUrl'>[] = [
  {
    id: 'offer-osaka-klook-suv',
    cityId: 'japan-osaka',
    category: 'rentcar',
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
    id: 'offer-fukuoka-klook-family',
    cityId: 'japan-fukuoka',
    category: 'rentcar',
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
    id: 'offer-tokyo-klook-wagon',
    cityId: 'japan-tokyo',
    category: 'rentcar',
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
    id: 'offer-hawaii-klook-suv',
    cityId: 'usa-hawaii',
    category: 'rentcar',
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
    id: 'offer-guam-klook-van',
    cityId: 'usa-guam',
    category: 'rentcar',
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
    id: 'offer-danang-klook-driver',
    cityId: 'vietnam-danang',
    category: 'rentcar',
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
    id: 'offer-bangkok-klook-driver',
    cityId: 'thailand-bangkok',
    category: 'rentcar',
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
  affiliateUrl: getAffiliateUrl(offer.category)
}));

export function getOffersByCityId(cityId: string) {
  return rentcarOffers
    .filter((offer) => offer.cityId === cityId)
    .sort((a, b) => a.sortOrder - b.sortOrder || a.priceKrw - b.priceKrw);
}

export function getOfferById(offerId: string) {
  return rentcarOffers.find((offer) => offer.id === offerId);
}
