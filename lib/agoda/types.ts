export interface AgodaHotelResult {
  hotelId: number;
  hotelName: string;
  starRating: number;
  reviewScore: number;
  reviewCount?: number;
  currency: string;
  dailyRate: number;
  crossedOutRate: number;
  discountPercentage: number;
  imageURL: string;
  landingURL: string;
  includeBreakfast: boolean;
  freeWifi: boolean;
}

export interface AgodaSearchResponse {
  results?: AgodaHotelResult[];
  error?: {
    id: number;
    message: string;
  };
}
