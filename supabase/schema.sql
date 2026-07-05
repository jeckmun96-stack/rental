create extension if not exists pgcrypto;

create table if not exists cities (
  id uuid primary key default gen_random_uuid(),
  country_slug text not null,
  city_slug text not null,
  country_name_ko text not null,
  city_name_ko text not null,
  hero_title text,
  hero_lead text,
  meta_title text,
  meta_description text,
  intl_license_required boolean,
  intl_license_note text,
  driving_caution text,
  airport_pickup_available boolean,
  insurance_note text,
  deposit_note text,
  free_cancellation_note text,
  vendor_comparison_note text,
  related_city_slugs text[],
  is_published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique (country_slug, city_slug)
);

create table if not exists mock_rentcar_offers (
  id uuid primary key default gen_random_uuid(),
  city_id uuid references cities(id) on delete cascade,
  platform text not null check (platform in ('tripcom', 'klook')),
  vehicle_name text not null,
  vehicle_class text not null,
  price_krw integer not null,
  price_unit text default 'total' check (price_unit in ('total', 'per_day')),
  insurance_included boolean default false,
  free_cancellation boolean default false,
  airport_pickup boolean default false,
  affiliate_url text not null,
  sort_order integer default 0,
  created_at timestamptz default now()
);

create table if not exists affiliate_click_logs (
  id uuid primary key default gen_random_uuid(),
  city_id uuid references cities(id),
  platform text not null check (platform in ('tripcom', 'klook')),
  offer_id uuid references mock_rentcar_offers(id),
  session_id text,
  referrer text,
  user_agent text,
  clicked_at timestamptz default now()
);

create index if not exists idx_cities_slug on cities(country_slug, city_slug);
create index if not exists idx_offers_city_id on mock_rentcar_offers(city_id, sort_order);
create index if not exists idx_click_logs_clicked_at on affiliate_click_logs(clicked_at desc);
