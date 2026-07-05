export type RentcarPlatform = 'tripcom' | 'klook';
export type RentcarPriceUnit = 'total' | 'per_day';

export interface RentcarOffer {
  id: string;
  cityId: string;
  platform: RentcarPlatform;
  vehicleName: string;
  vehicleClass: string;
  priceKrw: number;
  priceUnit: RentcarPriceUnit;
  insuranceIncluded: boolean;
  freeCancellation: boolean;
  airportPickup: boolean;
  affiliateUrl: string;
  sortOrder: number;
}
