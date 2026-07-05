import { getCityBySlug, getPublishedCities } from '@/lib/data/cities';
import { getOffersByCityId } from '@/lib/data/offers';

export async function getCityPageData(countrySlug: string, citySlug: string) {
  const city = getCityBySlug(countrySlug, citySlug);

  if (!city) {
    return null;
  }

  return {
    city,
    offers: getOffersByCityId(city.id)
  };
}

export async function getAllStaticCityParams() {
  return getPublishedCities().map((city) => ({
    country: city.countrySlug,
    city: city.citySlug
  }));
}
