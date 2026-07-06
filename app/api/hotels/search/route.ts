import { NextResponse } from 'next/server';
import { getAgodaCityId } from '@/lib/agoda/cityIdMap';
import { searchAgodaHotelsByCity } from '@/lib/agoda/client';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      cityId?: number;
      citySlug?: string;
      checkInDate?: string;
      checkOutDate?: string;
    };

    const cityId = body.cityId ?? (body.citySlug ? getAgodaCityId(body.citySlug) : null);

    if (!cityId || !body.checkInDate || !body.checkOutDate) {
      return NextResponse.json(
        {
          results: [],
          message: 'cityId, checkInDate, checkOutDate 값을 확인하세요.'
        },
        { status: 400 }
      );
    }

    const payload = await searchAgodaHotelsByCity({
      cityId,
      checkInDate: body.checkInDate,
      checkOutDate: body.checkOutDate
    });

    return NextResponse.json({
      results: payload.results ?? [],
      error: payload.error
    });
  } catch (error) {
    console.error('hotel search failed', error);
    return NextResponse.json(
      {
        results: [],
        message: '호텔 검색 중 오류가 발생했습니다.'
      },
      { status: 500 }
    );
  }
}
