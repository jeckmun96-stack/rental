import { hotelDestinations } from '@/lib/data/hotelDestinations';

export function getAgodaCityId(citySlug: string) {
  return hotelDestinations.find((destination) => destination.slug === citySlug)?.agodaCityId ?? null;
}
