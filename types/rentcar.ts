export type RentcarPlatform = 'tripcom' | 'klook';
export type OfferCategory = 'rentcar' | 'airport_transfer' | 'ferry' | 'cruise';
export type RentcarPriceUnit = 'total' | 'per_day';

export interface RentcarOffer {
  id: string;
  cityId: string;
  category: OfferCategory;
  platform: RentcarPlatform;
  vehicleName: string;
  vehicleClass: string;
  priceKrw: number;
  originalPriceKrw?: number;
  priceUnit: RentcarPriceUnit;
  insuranceIncluded: boolean;
  freeCancellation: boolean;
  airportPickup: boolean;
  affiliateUrl: string;
  sortOrder: number;
}
