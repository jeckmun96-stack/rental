export interface HotelDestination {
  country: string;
  city: string;
  slug: string;
  agodaCityId?: number;
}

export interface HotelDestinationGroup {
  country: string;
  cities: Array<Omit<HotelDestination, 'country'>>;
}

export const hotelDestinationGroups: HotelDestinationGroup[] = [
  {
    country: '대한민국',
    cities: [
      { city: '서울', slug: 'seoul' },
      { city: '제주특별자치도', slug: 'jeju' },
      { city: '부산', slug: 'busan' },
      { city: '인천', slug: 'incheon' },
      { city: '울릉도', slug: 'ulleungdo' },
      { city: '대구', slug: 'daegu' },
      { city: '대전', slug: 'daejeon' },
      { city: '광주', slug: 'gwangju' },
      { city: '목포', slug: 'mokpo' },
      { city: '평택', slug: 'pyeongtaek' },
      { city: '수원', slug: 'suwon' },
      { city: '울산', slug: 'ulsan' },
      { city: '여수', slug: 'yeosu' }
    ]
  },
  {
    country: '일본',
    cities: [
      { city: '나하 시', slug: 'naha' },
      { city: '후쿠오카', slug: 'fukuoka' },
      { city: '도쿄도', slug: 'tokyo' },
      { city: '삿포로', slug: 'sapporo' },
      { city: '오사카', slug: 'osaka' },
      { city: '교토시', slug: 'kyoto' },
      { city: '나고야', slug: 'nagoya' },
      { city: '센다이', slug: 'sendai' },
      { city: '요코하마', slug: 'yokohama' },
      { city: '고베', slug: 'kobe' },
      { city: '나가사키', slug: 'nagasaki' },
      { city: '가고시마시', slug: 'kagoshima' },
      { city: '이시가키 시', slug: 'ishigaki' },
      { city: '미야코', slug: 'miyako' }
    ]
  },
  {
    country: '대만',
    cities: [
      { city: '펑후', slug: 'penghu' },
      { city: '타이베이', slug: 'taipei' },
      { city: '가오슝시', slug: 'kaohsiung' },
      { city: '타이중', slug: 'taichung' },
      { city: '신베이 시', slug: 'new-taipei' },
      { city: '화롄 현', slug: 'hualien' },
      { city: '타이난', slug: 'tainan' },
      { city: '타오위안 시', slug: 'taoyuan' },
      { city: '이란 현', slug: 'yilan' },
      { city: '신주', slug: 'hsinchu' },
      { city: '타이둥 현', slug: 'taitung' },
      { city: '자이', slug: 'chiayi' },
      { city: '핑퉁', slug: 'pingtung' },
      { city: '먀오리', slug: 'miaoli' },
      { city: '진먼', slug: 'kinmen' },
      { city: '장화 시', slug: 'changhua' },
      { city: '후웨이', slug: 'huwei' }
    ]
  },
  {
    country: '태국',
    cities: [
      { city: '방콕', slug: 'bangkok', agodaCityId: 9395 },
      { city: '푸껫', slug: 'phuket' },
      { city: '수라타니', slug: 'surat-thani' },
      { city: '치앙마이', slug: 'chiang-mai' },
      { city: '끄라비 주', slug: 'krabi' },
      { city: '파타야', slug: 'pattaya' },
      { city: '치앙라이', slug: 'chiang-rai' },
      { city: '핫야이', slug: 'hat-yai' },
      { city: '콘캔', slug: 'khon-kaen' },
      { city: '후아힌', slug: 'hua-hin' },
      { city: '우돈타니 주', slug: 'udon-thani' }
    ]
  },
  {
    country: '말레이시아',
    cities: [
      { city: '랑카위', slug: 'langkawi' },
      { city: '쿠알라룸푸르', slug: 'kuala-lumpur' },
      { city: '페낭', slug: 'penang' },
      { city: '코타키나발루', slug: 'kota-kinabalu' },
      { city: '조호바루', slug: 'johor-bahru' },
      { city: '이포', slug: 'ipoh' },
      { city: '쿠칭', slug: 'kuching' },
      { city: '미리', slug: 'miri' }
    ]
  },
  {
    country: '호주',
    cities: [
      { city: '시드니', slug: 'sydney' },
      { city: '멜버른', slug: 'melbourne' },
      { city: '브리즈번', slug: 'brisbane' },
      { city: '케언즈', slug: 'cairns' },
      { city: '골드코스트', slug: 'gold-coast' },
      { city: '퍼스', slug: 'perth' },
      { city: '애들레이드', slug: 'adelaide' },
      { city: '호바트', slug: 'hobart' },
      { city: '다윈', slug: 'darwin' },
      { city: '알버리', slug: 'albury' },
      { city: '앨리스 스프링스', slug: 'alice-springs' },
      { city: '발리나', slug: 'ballina' },
      { city: '호주 캐피탈 테리토리', slug: 'australian-capital-territory' },
      { city: '세두나', slug: 'ceduna' },
      { city: '킹스코트', slug: 'kingscote' },
      { city: '론서스턴', slug: 'launceston' },
      { city: '마운트 갬비어', slug: 'mount-gambier' },
      { city: '뉴캐슬 시티 카운실', slug: 'newcastle' },
      { city: '타운즈빌', slug: 'townsville' }
    ]
  },
  {
    country: '뉴질랜드',
    cities: [
      { city: '오클랜드', slug: 'auckland' },
      { city: '웰링턴', slug: 'wellington' },
      { city: '퀸스타운', slug: 'queenstown' },
      { city: '크라이스트처치', slug: 'christchurch' },
      { city: '더니든', slug: 'dunedin' },
      { city: '해밀턴 시티', slug: 'hamilton' },
      { city: '인버카길 시', slug: 'invercargill' },
      { city: '넬슨', slug: 'nelson' },
      { city: '뉴 플리머스 디스트릭트', slug: 'new-plymouth' },
      { city: '파머스턴 노스 시티', slug: 'palmerston-north' },
      { city: '로토루아 디스트릭트', slug: 'rotorua' },
      { city: '타우랑가', slug: 'tauranga' }
    ]
  },
  {
    country: '미국',
    cities: [
      { city: '로스앤젤레스', slug: 'los-angeles' },
      { city: '하와이', slug: 'hawaii' },
      { city: '괌', slug: 'guam' },
      { city: '샌프란시스코', slug: 'san-francisco' },
      { city: '뉴욕', slug: 'new-york' },
      { city: '시카고', slug: 'chicago' },
      { city: '시애틀', slug: 'seattle' },
      { city: '워싱턴 D.C.', slug: 'washington-dc' },
      { city: '마이애미', slug: 'miami' },
      { city: '라스베이거스', slug: 'las-vegas' },
      { city: '아틀란타', slug: 'atlanta' },
      { city: '사이판', slug: 'saipan' },
      { city: '덴버', slug: 'denver' },
      { city: '휴스턴', slug: 'houston' },
      { city: '올랜도', slug: 'orlando' },
      { city: '피닉스', slug: 'phoenix' }
    ]
  },
  {
    country: '캐나다',
    cities: [
      { city: '밴쿠버', slug: 'vancouver' },
      { city: '토론토', slug: 'toronto' },
      { city: '캘거리', slug: 'calgary' },
      { city: '몬트리올', slug: 'montreal' }
    ]
  },
  {
    country: '유럽',
    cities: [
      { city: '파리', slug: 'paris' },
      { city: '니스', slug: 'nice' },
      { city: '리옹', slug: 'lyon' },
      { city: '마르세유', slug: 'marseille' },
      { city: '로마', slug: 'rome' },
      { city: '피렌체', slug: 'florence' },
      { city: '베네치아', slug: 'venice' },
      { city: '밀라노', slug: 'milan' },
      { city: '베를린', slug: 'berlin' },
      { city: '프랑크푸르트암마인', slug: 'frankfurt' },
      { city: '뮌헨', slug: 'munich' },
      { city: '마드리드', slug: 'madrid' },
      { city: '바르셀로나', slug: 'barcelona' },
      { city: '런던', slug: 'london' },
      { city: '맨체스터', slug: 'manchester' },
      { city: '글래스고', slug: 'glasgow' },
      { city: '에든버러', slug: 'edinburgh' },
      { city: '제네바', slug: 'geneva' },
      { city: '취리히', slug: 'zurich' },
      { city: '암스테르담', slug: 'amsterdam' },
      { city: '비엔나', slug: 'vienna' },
      { city: '코펜하겐', slug: 'copenhagen' },
      { city: '스톡홀름', slug: 'stockholm' },
      { city: '헬싱키', slug: 'helsinki' },
      { city: '리스본', slug: 'lisbon' },
      { city: '더블린', slug: 'dublin' },
      { city: '레이캬비크', slug: 'reykjavik' },
      { city: '아테네', slug: 'athens' },
      { city: '부다페스트', slug: 'budapest' }
    ]
  },
  {
    country: '중동·아프리카',
    cities: [
      { city: '두바이', slug: 'dubai' },
      { city: '아부다비', slug: 'abu-dhabi' },
      { city: '샤르자', slug: 'sharjah' },
      { city: '예루살렘', slug: 'jerusalem' },
      { city: '암만', slug: 'amman' },
      { city: '이스탄불', slug: 'istanbul' },
      { city: 'Izmir', slug: 'izmir' },
      { city: '케이프타운', slug: 'cape-town' },
      { city: 'Jeddah', slug: 'jeddah' },
      { city: '도하', slug: 'doha' },
      { city: '포트 루이스', slug: 'port-louis' },
      { city: '카사블랑카', slug: 'casablanca' },
      { city: '루안다', slug: 'luanda' },
      { city: '카이로', slug: 'cairo' },
      { city: '나이로비', slug: 'nairobi' },
      { city: 'Kuwait City', slug: 'kuwait-city' },
      { city: 'Maseru District', slug: 'maseru' },
      { city: '다카르', slug: 'dakar' },
      { city: '무스카트', slug: 'muscat' }
    ]
  },
  {
    country: '중남미',
    cities: [
      { city: '멕시코시티', slug: 'mexico-city' },
      { city: '칸쿤', slug: 'cancun' },
      { city: '리우데자네이루', slug: 'rio-de-janeiro' },
      { city: '상파울루', slug: 'sao-paulo' },
      { city: '부에노스아이레스 지방', slug: 'buenos-aires' },
      { city: '산타크루즈', slug: 'santa-cruz' },
      { city: '파나마', slug: 'panama-city' },
      { city: '아순시온', slug: 'asuncion' },
      { city: '파라마리보', slug: 'paramaribo' }
    ]
  }
];

export const hotelDestinations: HotelDestination[] = hotelDestinationGroups.flatMap((group) =>
  group.cities.map((city) => ({
    country: group.country,
    ...city
  }))
);

export const featuredHotelDestinations = [
  '서울',
  '타이베이',
  '제주특별자치도',
  '가오슝시',
  '방콕',
  '부산',
  '치앙마이',
  '인천',
  '푸껫',
  '도쿄도',
  '울릉도',
  '오사카',
  '대구',
  '시드니',
  '멜버른',
  '브리즈번',
  '오클랜드',
  '광주',
  '쿠알라룸푸르',
  '런던',
  '파리',
  '로스앤젤레스',
  '하와이',
  '괌'
];
