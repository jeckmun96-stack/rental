import { cookies, headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { getCityBySlug } from '@/lib/data/cities';
import { getOfferById } from '@/lib/data/offers';
import { getSupabaseAdmin } from '@/lib/supabase/server';
import type { RentcarPlatform } from '@/types/rentcar';

const allowedPlatforms: RentcarPlatform[] = ['tripcom', 'klook'];

function createSessionId() {
  return crypto.randomUUID();
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      countrySlug?: string;
      citySlug?: string;
      offerId?: string;
      platform?: RentcarPlatform;
    };

    if (!body.countrySlug || !body.citySlug || !body.offerId || !body.platform) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    if (!allowedPlatforms.includes(body.platform)) {
      return NextResponse.json({ success: false, message: 'Invalid platform' }, { status: 400 });
    }

    const offer = getOfferById(body.offerId);
    const city = getCityBySlug(body.countrySlug, body.citySlug);

    if (!offer || !city || offer.cityId !== city.id) {
      return NextResponse.json({ success: false, message: 'Offer not found' }, { status: 404 });
    }

    const cookieStore = cookies();
    const existingSessionId = cookieStore.get('rentcar_session_id')?.value;
    const sessionId = existingSessionId ?? createSessionId();
    const headerStore = headers();
    const supabase = getSupabaseAdmin();

    if (supabase) {
      await supabase.from('affiliate_click_logs').insert({
        city_id: city.id,
        offer_id: body.offerId,
        platform: body.platform,
        session_id: sessionId,
        referrer: headerStore.get('referer'),
        user_agent: headerStore.get('user-agent')
      });
    } else {
      console.info('affiliate_click', {
        countrySlug: body.countrySlug,
        citySlug: body.citySlug,
        offerId: body.offerId,
        platform: body.platform,
        sessionId,
        referrer: headerStore.get('referer')
      });
    }

    const response = NextResponse.json({
      success: true,
      redirectUrl: offer.affiliateUrl
    });

    if (!existingSessionId) {
      response.cookies.set('rentcar_session_id', sessionId, {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
      });
    }

    return response;
  } catch (error) {
    console.error('track-click failed', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
