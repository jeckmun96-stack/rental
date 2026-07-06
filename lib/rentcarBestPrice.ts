import type { RentcarOffer } from '@/types/rentcar';

export function getBestPriceOfferIds(offers: RentcarOffer[]) {
  const groups = new Map<string, RentcarOffer[]>();

  offers.forEach((offer) => {
    const key = `${offer.cityId}:${offer.vehicleClass}`;
    groups.set(key, [...(groups.get(key) ?? []), offer]);
  });

  const bestIds = new Set<string>();

  groups.forEach((group) => {
    const cheapest = group.reduce((bestOffer, offer) =>
      offer.priceKrw < bestOffer.priceKrw ? offer : bestOffer
    );
    bestIds.add(cheapest.id);
  });

  return bestIds;
}
