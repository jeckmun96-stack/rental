export interface City {
  id: string;
  countrySlug: string;
  citySlug: string;
  countryNameKo: string;
  cityNameKo: string;
  heroTitle: string;
  heroLead: string;
  metaTitle: string;
  metaDescription: string;
  intlLicenseRequired: boolean;
  intlLicenseNote: string;
  drivingCaution: string;
  airportPickupAvailable: boolean;
  insuranceNote: string;
  depositNote: string;
  freeCancellationNote: string;
  vendorComparisonNote: string;
  relatedCitySlugs: string[];
  isPublished: boolean;
}
