import type { City } from '@/types/city';

export const cities: City[] = [
  {
    id: 'japan-osaka',
    countrySlug: 'japan',
    citySlug: 'osaka',
    countryNameKo: '일본',
    cityNameKo: '오사카',
    heroTitle: '오사카 렌터카 예약 가이드',
    heroLead:
      '간사이공항 픽업부터 교토·고베 근교 이동까지, 한국인이 오사카에서 렌터카를 빌릴 때 먼저 확인해야 할 면허·보험·보증금 정보를 한눈에 정리했습니다.',
    metaTitle: '오사카 렌터카 예약 가이드 | 국제운전면허증·보험·공항 픽업 비교',
    metaDescription:
      '오사카 렌터카 예약 전 국제운전면허증, 보험 포함 여부, 보증금, 간사이공항 픽업 가능 상품을 비교해보세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '일본은 한국 운전면허증만으로 운전할 수 없습니다. 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것이 안전합니다.',
    drivingCaution:
      '일본은 좌측통행, 우핸들 차량이 기본입니다. 초반에는 차선 위치와 우회전 대기 방식이 헷갈릴 수 있어 도심보다 공항 외곽에서 출발하는 일정이 편합니다.',
    airportPickupAvailable: true,
    insuranceNote:
      '기본 자차면책보험이 포함된 상품과 현장 추가 보험 상품이 나뉠 수 있습니다. 예약 화면에서 면책금과 NOC 보상 여부를 꼭 확인하세요.',
    depositNote:
      '일본 렌터카는 보증금이 낮거나 없는 상품도 있지만, 일부 플랫폼은 신용카드 확인을 요구할 수 있습니다.',
    freeCancellationNote:
      '무료 취소 가능 상품은 출발 24~48시간 전까지 조건이 붙는 경우가 많습니다. 예약 버튼 이동 후 취소 가능 시점을 확인하세요.',
    vendorComparisonNote:
      '오사카는 간사이공항 인수와 시내 반납 조건이 일정에 큰 영향을 줍니다. 가격만 보지 말고 ETC 카드, 보험 포함, 영업시간을 함께 확인하세요.',
    relatedCitySlugs: ['japan-fukuoka', 'japan-tokyo', 'usa-hawaii', 'taiwan-taipei'],
    isPublished: true
  },
  {
    id: 'japan-fukuoka',
    countrySlug: 'japan',
    citySlug: 'fukuoka',
    countryNameKo: '일본',
    cityNameKo: '후쿠오카',
    heroTitle: '후쿠오카 렌터카 예약 가이드',
    heroLead:
      '후쿠오카는 유후인·벳푸·다자이후까지 이동하는 여행자가 많아 렌터카 활용도가 높은 도시입니다. 공항 픽업과 보험 조건을 중심으로 비교해보세요.',
    metaTitle: '후쿠오카 렌터카 예약 가이드 | 유후인·벳푸 여행 렌트카 비교',
    metaDescription:
      '후쿠오카 렌터카 예약 전 국제운전면허증, 유후인·벳푸 이동, 공항 픽업, 보험 포함 여부를 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '일본 운전에는 국제운전면허증, 국내 운전면허증, 여권을 함께 지참하는 것이 기본입니다.',
    drivingCaution:
      '후쿠오카 시내는 대중교통이 편하지만 유후인·벳푸·아소산 방향은 렌터카가 유리합니다. 산간 도로는 날씨 변화가 있어 일정에 여유를 두세요.',
    airportPickupAvailable: true,
    insuranceNote:
      '장거리 운전이 많다면 기본 보험뿐 아니라 휴차보상료 관련 조건까지 확인하는 것이 좋습니다.',
    depositNote:
      '보증금 정책은 플랫폼·차량 등급별로 다릅니다. 해외 결제 가능한 신용카드를 준비하세요.',
    freeCancellationNote:
      '무료 취소 상품이라도 현지 업체 규정에 따라 마감 시간이 다를 수 있습니다.',
    vendorComparisonNote:
      '후쿠오카는 소형차 수요가 많아 성수기에는 가격이 빠르게 오릅니다. 유후인·벳푸 일정은 조기 예약 기준으로 차량 등급과 취소 조건을 함께 보세요.',
    relatedCitySlugs: ['japan-osaka', 'japan-tokyo', 'vietnam-danang'],
    isPublished: true
  },
  {
    id: 'japan-tokyo',
    countrySlug: 'japan',
    citySlug: 'tokyo',
    countryNameKo: '일본',
    cityNameKo: '도쿄',
    heroTitle: '도쿄 렌터카 예약 가이드',
    heroLead:
      '도쿄 도심만 여행한다면 대중교통이 편하지만, 후지산·하코네·가와구치코 일정이라면 렌터카가 선택지가 될 수 있습니다.',
    metaTitle: '도쿄 렌터카 예약 가이드 | 후지산·하코네 여행 렌트카 비교',
    metaDescription:
      '도쿄 렌터카 예약 전 국제운전면허증, 도심 운전 주의사항, 공항 픽업, 보험 조건을 비교해보세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '일본은 국제운전면허증과 국내 운전면허증을 함께 준비해야 합니다.',
    drivingCaution:
      '도쿄 도심은 교통량과 주차비 부담이 큽니다. 나리타·하네다 공항 출발 후 외곽 일정으로 바로 이동하는 코스가 더 편합니다.',
    airportPickupAvailable: true,
    insuranceNote:
      '수도권 장거리 이동은 고속도로 이용 가능성이 높으므로 보험, ETC 카드, 긴급출동 조건을 함께 보세요.',
    depositNote:
      '신용카드 보증 또는 현장 확인이 있을 수 있어 대표 운전자 명의 카드를 준비하세요.',
    freeCancellationNote:
      '성수기에는 무료 취소 상품이 먼저 마감될 수 있어 취소 가능 상품을 우선 확인하세요.',
    vendorComparisonNote:
      '도쿄는 공항 픽업 여부와 반납 지점이 특히 중요합니다. 공항 반납 추가비와 영업시간을 비교하세요.',
    relatedCitySlugs: ['japan-osaka', 'japan-fukuoka', 'usa-hawaii'],
    isPublished: true
  },
  {
    id: 'usa-hawaii',
    countrySlug: 'usa',
    citySlug: 'hawaii',
    countryNameKo: '미국',
    cityNameKo: '하와이',
    heroTitle: '하와이 렌터카 예약 가이드',
    heroLead:
      '하와이는 공항 픽업 렌터카 수요가 매우 높은 지역입니다. 보험, 주차비, 추가 운전자, 보증금 조건을 같이 확인해야 실제 비용을 줄일 수 있습니다.',
    metaTitle: '하와이 렌터카 예약 가이드 | 보험·보증금·공항 픽업 비교',
    metaDescription:
      '하와이 렌터카 예약 전 국제운전면허증, 보험, 보증금, 공항 픽업, 추가 운전자 비용을 비교해보세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '미국 주별 규정은 다를 수 있으므로 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것을 권장합니다.',
    drivingCaution:
      '하와이는 우측통행입니다. 와이키키 주변은 주차비가 비싸고 일방통행이 많아 숙소 주차 조건을 먼저 확인하세요.',
    airportPickupAvailable: true,
    insuranceNote:
      '미국 렌터카는 책임보험, 자차손해면책, 대인·대물 보장 범위가 상품별로 다릅니다. 카드사 렌터카 보험 혜택과 중복 여부도 확인하세요.',
    depositNote:
      '대부분 신용카드 보증금 홀드가 있을 수 있습니다. 체크카드는 거절되거나 추가 서류를 요구받을 수 있습니다.',
    freeCancellationNote:
      '플랫폼 예약 상품은 무료 취소 조건이 있는 경우가 많지만, 현지 업체·요금제별로 차이가 있습니다.',
    vendorComparisonNote:
      '하와이는 공항 지점, 숙소 주차비, 추가 운전자 요금이 총비용에 크게 반영됩니다. 차량 가격과 현장 추가 비용을 따로 계산해보세요.',
    relatedCitySlugs: ['usa-guam', 'japan-osaka', 'thailand-bangkok', 'australia-sydney', 'usa-los-angeles'],
    isPublished: true
  },
  {
    id: 'usa-guam',
    countrySlug: 'usa',
    citySlug: 'guam',
    countryNameKo: '미국령 괌',
    cityNameKo: '괌',
    heroTitle: '괌 렌터카 예약 가이드',
    heroLead:
      '괌은 가족여행과 쇼핑 동선 때문에 렌터카 만족도가 높은 여행지입니다. 공항 픽업, 카시트, 보험 포함 여부를 중심으로 비교하세요.',
    metaTitle: '괌 렌터카 예약 가이드 | 공항 픽업·보험·가족여행 렌트카 비교',
    metaDescription:
      '괌 렌터카 예약 전 국제운전면허증, 공항 픽업, 보험, 카시트, 보증금 조건을 확인해보세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '괌 여행 시에는 국제운전면허증과 국내 운전면허증, 여권을 함께 챙기는 것이 안전합니다.',
    drivingCaution:
      '괌은 우측통행입니다. 주요 관광지 이동은 어렵지 않지만 스콜과 야간 도로 시야를 주의하세요.',
    airportPickupAvailable: true,
    insuranceNote:
      '가족여행은 사고 발생 시 일정 차질이 크기 때문에 기본 보험뿐 아니라 면책금 조건을 자세히 확인하세요.',
    depositNote:
      '차량 등급과 업체에 따라 신용카드 보증금 홀드가 발생할 수 있습니다.',
    freeCancellationNote:
      '성수기와 연휴에는 무료 취소 상품이 빨리 사라질 수 있어 일정이 확정되면 빠르게 비교하세요.',
    vendorComparisonNote:
      '괌은 공항 접근성, 카시트 옵션, 반납 편의성이 중요합니다. 단순 최저가보다 옵션 포함 여부를 보세요.',
    relatedCitySlugs: ['usa-hawaii', 'japan-fukuoka', 'vietnam-danang'],
    isPublished: true
  },
  {
    id: 'vietnam-danang',
    countrySlug: 'vietnam',
    citySlug: 'danang',
    countryNameKo: '베트남',
    cityNameKo: '다낭',
    heroTitle: '다낭 렌터카 예약 가이드',
    heroLead:
      '다낭은 직접 운전 렌터카보다 기사 포함 차량이나 공항 이동 상품을 선택하는 여행자가 많습니다. 예약 전 운전 가능 여부와 상품 형태를 구분하세요.',
    metaTitle: '다낭 렌터카 예약 가이드 | 공항 이동·기사 포함 차량 비교',
    metaDescription:
      '다낭 렌터카 예약 전 직접 운전 가능 여부, 기사 포함 차량, 공항 픽업, 보험 조건을 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '베트남은 일반적인 해외 렌터카와 운전 조건이 다를 수 있습니다. 한국 여행자는 기사 포함 차량 또는 공항 이동 상품을 먼저 확인하는 편이 안전합니다.',
    drivingCaution:
      '오토바이 교통량이 많고 도로 흐름이 한국과 달라 초보자 직접 운전은 권장하지 않습니다. 바나힐·호이안 이동은 기사 포함 상품이 편합니다.',
    airportPickupAvailable: true,
    insuranceNote:
      '기사 포함 차량과 렌터카 상품은 보험 구조가 다릅니다. 상품 상세에서 포함 범위와 사고 시 대응 방식을 확인하세요.',
    depositNote:
      '직접 운전형보다 기사 포함 차량은 보증금 부담이 낮은 경우가 많지만, 플랫폼별 취소·변경 규정이 중요합니다.',
    freeCancellationNote:
      '공항 이동·차량 투어 상품은 출발 전 무료 취소 가능 시간이 명확히 표시되는 상품을 우선 보세요.',
    vendorComparisonNote:
      '다낭은 직접 운전보다 기사 포함 차량이나 공항 이동 상품이 현실적인 경우가 많습니다. 이동 거리, 대기 시간, 취소 가능 시간을 먼저 확인하세요.',
    relatedCitySlugs: ['thailand-bangkok', 'japan-fukuoka', 'usa-guam'],
    isPublished: true
  },
  {
    id: 'thailand-bangkok',
    countrySlug: 'thailand',
    citySlug: 'bangkok',
    countryNameKo: '태국',
    cityNameKo: '방콕',
    heroTitle: '방콕 렌터카 예약 가이드',
    heroLead:
      '방콕은 도심 교통 체증이 심해 일정에 따라 렌터카와 기사 포함 차량을 구분해서 선택해야 합니다. 공항 픽업, 파타야 이동, 보험 조건을 함께 확인하세요.',
    metaTitle: '방콕 렌터카 예약 가이드 | 공항 픽업·파타야 이동·보험 비교',
    metaDescription:
      '방콕 렌터카 예약 전 국제운전면허증, 도심 운전, 공항 픽업, 파타야 이동, 보험 조건을 비교하세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '태국 운전에는 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것이 안전합니다.',
    drivingCaution:
      '태국은 좌측통행이며 방콕 도심은 체증이 심합니다. 시내 관광보다 외곽 이동이나 파타야 일정에서 렌터카 활용도가 높습니다.',
    airportPickupAvailable: true,
    insuranceNote:
      '보험 포함 상품이라도 자기부담금이 남을 수 있습니다. 현장 추가 보험 권유가 있을 수 있어 예약 전 조건을 확인하세요.',
    depositNote:
      '신용카드 보증금 홀드가 있을 수 있습니다. 운전자 본인 명의 카드가 필요한 상품이 많습니다.',
    freeCancellationNote:
      '여행 일정 변동이 잦다면 무료 취소 가능 상품을 먼저 필터링해서 보는 것이 좋습니다.',
    vendorComparisonNote:
      '방콕은 도심 체증이 심해 직접 운전과 기사 포함 차량의 장단점이 분명합니다. 파타야 등 외곽 이동이 있는지에 따라 선택 기준을 달리하세요.',
    relatedCitySlugs: ['vietnam-danang', 'usa-hawaii', 'japan-osaka', 'thailand-phuket'],
    isPublished: true
  },
  {
    id: 'taiwan-taipei',
    countrySlug: 'taiwan',
    citySlug: 'taipei',
    countryNameKo: '대만',
    cityNameKo: '타이베이',
    heroTitle: '타이베이 렌터카 예약 가이드',
    heroLead:
      '타오위안공항 픽업부터 지우펀·예류·이란 근교 이동까지, 한국인이 타이베이에서 렌터카를 빌릴 때 먼저 확인해야 할 면허·보험·보증금 정보를 정리했습니다.',
    metaTitle: '타이베이 렌터카 예약 가이드 | 국제운전면허증·보험·공항 픽업 비교',
    metaDescription:
      '타이베이 렌터카 예약 전 국제운전면허증, 보험 포함 여부, 보증금, 타오위안공항 픽업 가능 상품을 비교해보세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '대만은 한국 국제운전면허증을 인정합니다. 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하세요.',
    drivingCaution:
      '대만은 우측통행이지만 스쿠터 통행량이 매우 많습니다. 타이베이 시내보다는 공항 외곽에서 출발해 지우펀·이란 방향으로 이동하는 일정이 편합니다.',
    airportPickupAvailable: true,
    insuranceNote:
      '기본 보험과 현장 추가 보험(갑식/을식) 조건이 나뉘는 경우가 많습니다. 예약 화면에서 면책금 범위를 꼭 확인하세요.',
    depositNote:
      '차량 등급에 따라 신용카드 보증금 홀드가 발생할 수 있습니다. 운전자 본인 명의 카드를 준비하세요.',
    freeCancellationNote:
      '무료 취소 가능 상품도 출발 24~48시간 전까지 조건이 붙는 경우가 많습니다. 예약 전 취소 마감 시점을 확인하세요.',
    vendorComparisonNote:
      '타이베이는 타오위안공항 인수와 시내 반납 조건이 일정에 영향을 줍니다. ETC 결제 방식과 보험 포함 여부를 함께 확인하세요.',
    relatedCitySlugs: ['thailand-bangkok', 'malaysia-kuala-lumpur', 'japan-osaka', 'taiwan-kaohsiung'],
    isPublished: true
  },
  {
    id: 'thailand-phuket',
    countrySlug: 'thailand',
    citySlug: 'phuket',
    countryNameKo: '태국',
    cityNameKo: '푸켓',
    heroTitle: '푸켓 렌터카 예약 가이드',
    heroLead:
      '푸켓은 파통·카론·카타 비치 이동과 팡아·크라비 근교 여행까지 렌터카 활용도가 높은 지역입니다. 공항 픽업과 보험 조건을 중심으로 비교해보세요.',
    metaTitle: '푸켓 렌터카 예약 가이드 | 파통·카론 비치 이동 렌트카 비교',
    metaDescription:
      '푸켓 렌터카 예약 전 국제운전면허증, 비치 이동, 공항 픽업, 보험 포함 여부를 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '태국 운전에는 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것이 안전합니다.',
    drivingCaution:
      '태국은 좌측통행이며 푸켓은 산길과 좁은 해안도로가 많습니다. 야간 운전과 우기철 도로 상태에 주의하세요.',
    airportPickupAvailable: true,
    insuranceNote:
      '보험 포함 상품이라도 자기부담금이 남을 수 있습니다. 현장 추가 보험 권유가 있을 수 있어 예약 전 조건을 확인하세요.',
    depositNote:
      '신용카드 보증금 홀드가 있을 수 있습니다. 운전자 본인 명의 카드가 필요한 상품이 많습니다.',
    freeCancellationNote:
      '여행 일정 변동이 잦다면 무료 취소 가능 상품을 먼저 필터링해서 보는 것이 좋습니다.',
    vendorComparisonNote:
      '푸켓은 공항 픽업 지점과 비치 반납 조건이 총비용에 영향을 줍니다. 가격만 보지 말고 보험 포함 여부와 반납 지점을 함께 확인하세요.',
    relatedCitySlugs: ['thailand-bangkok', 'vietnam-danang', 'malaysia-kuala-lumpur', 'thailand-chiang-mai'],
    isPublished: true
  },
  {
    id: 'malaysia-kuala-lumpur',
    countrySlug: 'malaysia',
    citySlug: 'kuala-lumpur',
    countryNameKo: '말레이시아',
    cityNameKo: '쿠알라룸푸르',
    heroTitle: '쿠알라룸푸르 렌터카 예약 가이드',
    heroLead:
      'KLIA공항 픽업부터 겐팅하이랜드·말라카 근교 이동까지, 쿠알라룸푸르에서 렌터카를 빌릴 때 먼저 확인해야 할 면허·보험·보증금 정보를 정리했습니다.',
    metaTitle: '쿠알라룸푸르 렌터카 예약 가이드 | 겐팅·말라카 여행 렌트카 비교',
    metaDescription:
      '쿠알라룸푸르 렌터카 예약 전 국제운전면허증, 겐팅하이랜드·말라카 이동, 공항 픽업, 보험 조건을 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '말레이시아는 국제운전면허증과 국내 운전면허증, 여권을 함께 지참하는 것이 기본입니다.',
    drivingCaution:
      '말레이시아는 좌측통행입니다. 쿠알라룸푸르 시내는 고가도로와 톨게이트(터치앤고) 구간이 많아 사전에 결제 수단을 확인하세요.',
    airportPickupAvailable: true,
    insuranceNote:
      '기본 보험뿐 아니라 톨게이트 자동결제 카드(터치앤고) 대여 여부와 면책금 조건을 함께 확인하세요.',
    depositNote:
      '차량 등급과 업체에 따라 신용카드 보증금 홀드가 발생할 수 있습니다.',
    freeCancellationNote:
      '무료 취소 상품이라도 현지 업체 규정에 따라 마감 시간이 다를 수 있습니다.',
    vendorComparisonNote:
      '쿠알라룸푸르는 KLIA 인수 지점과 톨게이트 결제 방식이 일정에 영향을 줍니다. 가격과 함께 톨 결제 수단 포함 여부를 확인하세요.',
    relatedCitySlugs: ['taiwan-taipei', 'thailand-phuket', 'australia-sydney'],
    isPublished: true
  },
  {
    id: 'australia-sydney',
    countrySlug: 'australia',
    citySlug: 'sydney',
    countryNameKo: '호주',
    cityNameKo: '시드니',
    heroTitle: '시드니 렌터카 예약 가이드',
    heroLead:
      '시드니공항 픽업부터 블루마운틴·헌터밸리 근교 이동까지, 시드니에서 렌터카를 빌릴 때 먼저 확인해야 할 면허·보험·보증금 정보를 정리했습니다.',
    metaTitle: '시드니 렌터카 예약 가이드 | 블루마운틴·헌터밸리 여행 렌트카 비교',
    metaDescription:
      '시드니 렌터카 예약 전 국제운전면허증, 블루마운틴·헌터밸리 이동, 공항 픽업, 보험, 나이 제한 조건을 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote:
      '호주는 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것이 안전합니다.',
    drivingCaution:
      '호주는 좌측통행입니다. 시드니 시내는 주차비 부담이 크고 장거리 구간은 캥거루 등 야생동물 출몰에 주의해야 합니다.',
    airportPickupAvailable: true,
    insuranceNote:
      '기본 보험, 자차손해면책, 자기부담금 범위가 상품별로 다릅니다. 미성년 운전자·젊은 운전자 추가 요금도 함께 확인하세요.',
    depositNote:
      '신용카드 보증금 홀드가 있을 수 있으며, 만 25세 미만은 추가 조건이 붙는 경우가 많습니다.',
    freeCancellationNote:
      '플랫폼 예약 상품은 무료 취소 조건이 있는 경우가 많지만, 현지 업체·요금제별로 차이가 있습니다.',
    vendorComparisonNote:
      '시드니는 공항 지점, 장거리 주행 거리 제한, 추가 운전자 요금이 총비용에 크게 반영됩니다. 차량 가격과 현장 추가 비용을 따로 계산해보세요.',
    relatedCitySlugs: ['malaysia-kuala-lumpur', 'usa-hawaii', 'usa-guam', 'australia-melbourne', 'australia-brisbane'],
    isPublished: true
  },
  {
    id: 'korea-seoul',
    countrySlug: 'korea',
    citySlug: 'seoul',
    countryNameKo: '대한민국',
    cityNameKo: '서울',
    heroTitle: '서울 렌터카 예약 가이드',
    heroLead:
      '김포·인천공항 픽업부터 근교 나들이까지, 서울에서 렌터카를 빌릴 때 확인해야 할 보험·보증금·주차 정보를 정리했습니다.',
    metaTitle: '서울 렌터카 예약 가이드 | 공항 픽업·보험·주차 팁',
    metaDescription: '서울 렌터카 예약 전 공항 픽업, 보험 포함 여부, 보증금, 주차 조건을 확인하세요.',
    intlLicenseRequired: false,
    intlLicenseNote: '국내 렌터카는 국제운전면허증이 필요 없습니다. 국내 운전면허증과 신분증만 준비하세요.',
    drivingCaution:
      '서울 시내는 혼잡통행료 구간과 주차 요금이 높은 편입니다. 근교 이동이 목적이라면 공항이나 외곽 지점에서 픽업하는 편이 편리합니다.',
    airportPickupAvailable: true,
    insuranceNote: '완전자차보험(자기부담금 0원) 상품을 선택하면 사고 시 부담을 줄일 수 있습니다.',
    depositNote: '일부 업체는 신용카드 보증금 홀드가 있을 수 있습니다.',
    freeCancellationNote: '예약 후 일정 변경이 잦다면 무료 취소 가능 상품을 우선 확인하세요.',
    vendorComparisonNote: '서울은 공항 지점과 시내 지점 간 가격·재고 차이가 있어 픽업 위치별로 비교하는 것이 좋습니다.',
    relatedCitySlugs: ['korea-incheon', 'korea-jeju', 'japan-osaka'],
    isPublished: true
  },
  {
    id: 'korea-jeju',
    countrySlug: 'korea',
    citySlug: 'jeju',
    countryNameKo: '대한민국',
    cityNameKo: '제주특별자치도',
    heroTitle: '제주 렌터카 예약 가이드',
    heroLead:
      '제주공항 픽업부터 해안도로·오름 투어까지, 제주 여행에서 가장 많이 이용하는 렌터카 예약 전 확인 사항을 정리했습니다.',
    metaTitle: '제주 렌터카 예약 가이드 | 공항 픽업·보험·성수기 예약 팁',
    metaDescription: '제주 렌터카 예약 전 공항 픽업, 보험, 보증금, 성수기 예약 타이밍을 확인하세요.',
    intlLicenseRequired: false,
    intlLicenseNote: '국내 렌터카는 국제운전면허증이 필요 없습니다.',
    drivingCaution:
      '제주는 렌터카 수요가 매우 높아 성수기(여름휴가, 명절)에는 차량이 빨리 마감됩니다. 일정이 정해지면 서둘러 예약하세요.',
    airportPickupAvailable: true,
    insuranceNote: '완전자차보험 포함 여부를 꼭 확인하고, 흠집·문콕 관련 특약도 비교하세요.',
    depositNote: '보증금 없는 완전자차 상품이 인기가 많습니다.',
    freeCancellationNote: '성수기에는 취소 수수료 규정이 엄격한 경우가 많아 예약 전 확인하세요.',
    vendorComparisonNote: '제주는 업체별 차량 컨디션과 픽업 대기 시간 차이가 커서 후기와 함께 비교하는 것이 좋습니다.',
    relatedCitySlugs: ['korea-busan', 'korea-seoul', 'japan-osaka'],
    isPublished: true
  },
  {
    id: 'korea-busan',
    countrySlug: 'korea',
    citySlug: 'busan',
    countryNameKo: '대한민국',
    cityNameKo: '부산',
    heroTitle: '부산 렌터카 예약 가이드',
    heroLead:
      '김해공항 픽업부터 해운대·기장 근교 이동까지, 부산에서 렌터카가 필요한 여행자를 위한 예약 전 체크포인트입니다.',
    metaTitle: '부산 렌터카 예약 가이드 | 공항 픽업·보험 비교',
    metaDescription: '부산 렌터카 예약 전 김해공항 픽업, 보험, 보증금 조건을 확인하세요.',
    intlLicenseRequired: false,
    intlLicenseNote: '국내 렌터카는 국제운전면허증이 필요 없습니다.',
    drivingCaution:
      '부산은 해안도로와 산복도로 등 경사·굴곡이 많은 구간이 있어 초행이면 내비게이션 경로를 미리 확인하는 것이 좋습니다.',
    airportPickupAvailable: true,
    insuranceNote: '완전자차보험 포함 여부를 확인하세요.',
    depositNote: '업체별 보증금 정책이 다르니 예약 화면에서 확인하세요.',
    freeCancellationNote: '무료 취소 가능 여부와 마감 시점을 확인하세요.',
    vendorComparisonNote: '부산은 김해공항 지점과 시내 지점 가격 차이가 있어 비교가 필요합니다.',
    relatedCitySlugs: ['korea-daegu', 'korea-seoul', 'japan-fukuoka'],
    isPublished: true
  },
  {
    id: 'korea-incheon',
    countrySlug: 'korea',
    citySlug: 'incheon',
    countryNameKo: '대한민국',
    cityNameKo: '인천',
    heroTitle: '인천 렌터카 예약 가이드',
    heroLead:
      '인천공항 픽업 렌터카부터 송도·강화 근교 이동까지, 인천에서 렌터카가 필요한 경우 확인할 정보를 정리했습니다.',
    metaTitle: '인천 렌터카 예약 가이드 | 인천공항 픽업 비교',
    metaDescription: '인천 렌터카 예약 전 인천공항 픽업, 보험, 보증금을 확인하세요.',
    intlLicenseRequired: false,
    intlLicenseNote: '국내 렌터카는 국제운전면허증이 필요 없습니다.',
    drivingCaution:
      '인천공항 픽업 시 터미널별(1터미널/2터미널) 렌터카 카운터 위치가 달라 예약 전 확인이 필요합니다.',
    airportPickupAvailable: true,
    insuranceNote: '완전자차보험 포함 여부를 확인하세요.',
    depositNote: '보증금 정책은 업체별로 다릅니다.',
    freeCancellationNote: '항공편 변경 가능성이 있다면 무료 취소 상품을 우선 고려하세요.',
    vendorComparisonNote: '인천공항은 터미널별 픽업 동선이 다르니 예약 전 정확한 터미널을 확인하세요.',
    relatedCitySlugs: ['korea-seoul', 'korea-busan'],
    isPublished: true
  },
  {
    id: 'korea-ulleungdo',
    countrySlug: 'korea',
    citySlug: 'ulleungdo',
    countryNameKo: '대한민국',
    cityNameKo: '울릉도',
    heroTitle: '울릉도 렌터카 예약 가이드',
    heroLead:
      '여객선 터미널 픽업과 해안도로 일주까지, 울릉도에서 렌터카를 이용할 때 확인해야 할 사항을 정리했습니다.',
    metaTitle: '울릉도 렌터카 예약 가이드 | 여객선 터미널 픽업 비교',
    metaDescription: '울릉도 렌터카 예약 전 여객선 터미널 픽업, 도로 여건, 보험 조건을 확인하세요.',
    intlLicenseRequired: false,
    intlLicenseNote: '국내 렌터카는 국제운전면허증이 필요 없습니다.',
    drivingCaution:
      '울릉도는 급경사와 좁은 해안도로 구간이 많아 운전 경험이 적다면 신중하게 결정하세요. 성수기에는 차량 재고가 빠르게 마감됩니다.',
    airportPickupAvailable: false,
    insuranceNote: '산간·해안도로 특성상 차량 파손 관련 보험 조건을 꼼꼼히 확인하세요.',
    depositNote: '현지 소규모 업체가 많아 예약 전 보증금 정책을 직접 확인하는 것이 안전합니다.',
    freeCancellationNote: '여객선 결항 시 일정 변경 가능성이 있으니 취소 조건을 확인하세요.',
    vendorComparisonNote: '울릉도는 항구(도동·저동) 위치에 따라 픽업 동선이 달라지니 예약 전 확인하세요.',
    relatedCitySlugs: ['korea-busan', 'korea-seoul'],
    isPublished: true
  },
  {
    id: 'korea-daegu',
    countrySlug: 'korea',
    citySlug: 'daegu',
    countryNameKo: '대한민국',
    cityNameKo: '대구',
    heroTitle: '대구 렌터카 예약 가이드',
    heroLead:
      '대구공항 픽업부터 팔공산·근교 나들이까지, 대구에서 렌터카가 필요한 경우 확인할 정보를 정리했습니다.',
    metaTitle: '대구 렌터카 예약 가이드 | 공항 픽업 비교',
    metaDescription: '대구 렌터카 예약 전 공항 픽업, 보험, 보증금을 확인하세요.',
    intlLicenseRequired: false,
    intlLicenseNote: '국내 렌터카는 국제운전면허증이 필요 없습니다.',
    drivingCaution: '대구는 도심 순환도로가 발달해 있어 내비게이션 경로 확인이 편리합니다.',
    airportPickupAvailable: true,
    insuranceNote: '완전자차보험 포함 여부를 확인하세요.',
    depositNote: '보증금 정책은 업체별로 다릅니다.',
    freeCancellationNote: '무료 취소 가능 여부를 확인하세요.',
    vendorComparisonNote: '대구는 공항 지점과 시내 지점 가격을 비교해보는 것이 좋습니다.',
    relatedCitySlugs: ['korea-busan', 'korea-gwangju'],
    isPublished: true
  },
  {
    id: 'korea-gwangju',
    countrySlug: 'korea',
    citySlug: 'gwangju',
    countryNameKo: '대한민국',
    cityNameKo: '광주',
    heroTitle: '광주 렌터카 예약 가이드',
    heroLead:
      '광주공항 픽업부터 담양·순창 근교 이동까지, 광주에서 렌터카가 필요한 경우 확인할 정보를 정리했습니다.',
    metaTitle: '광주 렌터카 예약 가이드 | 공항 픽업 비교',
    metaDescription: '광주 렌터카 예약 전 공항 픽업, 보험, 보증금을 확인하세요.',
    intlLicenseRequired: false,
    intlLicenseNote: '국내 렌터카는 국제운전면허증이 필요 없습니다.',
    drivingCaution: '광주에서 근교(담양, 순창 등)로 이동할 계획이라면 편도 반납 가능 여부를 미리 확인하세요.',
    airportPickupAvailable: true,
    insuranceNote: '완전자차보험 포함 여부를 확인하세요.',
    depositNote: '보증금 정책은 업체별로 다릅니다.',
    freeCancellationNote: '무료 취소 가능 여부를 확인하세요.',
    vendorComparisonNote: '광주는 편도 반납 가능 지점이 제한적일 수 있어 예약 전 확인하세요.',
    relatedCitySlugs: ['korea-daegu', 'korea-busan'],
    isPublished: true
  },
  {
    id: 'taiwan-kaohsiung',
    countrySlug: 'taiwan',
    citySlug: 'kaohsiung',
    countryNameKo: '대만',
    cityNameKo: '가오슝시',
    heroTitle: '가오슝 렌터카 예약 가이드',
    heroLead:
      '가오슝공항 픽업부터 컨딩·타이난 근교 이동까지, 가오슝에서 렌터카를 빌릴 때 먼저 확인해야 할 면허·보험·보증금 정보를 정리했습니다.',
    metaTitle: '가오슝 렌터카 예약 가이드 | 컨딩 여행 렌트카 비교',
    metaDescription: '가오슝 렌터카 예약 전 국제운전면허증, 컨딩 이동, 공항 픽업, 보험 조건을 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote: '대만은 한국 국제운전면허증을 인정합니다. 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하세요.',
    drivingCaution: '대만은 우측통행이며 스쿠터 통행량이 많습니다. 컨딩 방향은 국도 위주라 야간 운전 시 주의하세요.',
    airportPickupAvailable: true,
    insuranceNote: '기본 보험과 현장 추가 보험 조건이 나뉘는 경우가 많습니다. 면책금 범위를 확인하세요.',
    depositNote: '차량 등급에 따라 신용카드 보증금 홀드가 발생할 수 있습니다.',
    freeCancellationNote: '무료 취소 상품도 출발 전 마감 시간이 있는 경우가 많습니다.',
    vendorComparisonNote: '가오슝은 공항 인수와 컨딩 반납(편도) 조건이 비용에 영향을 줍니다.',
    relatedCitySlugs: ['taiwan-taipei', 'thailand-phuket'],
    isPublished: true
  },
  {
    id: 'thailand-chiang-mai',
    countrySlug: 'thailand',
    citySlug: 'chiang-mai',
    countryNameKo: '태국',
    cityNameKo: '치앙마이',
    heroTitle: '치앙마이 렌터카 예약 가이드',
    heroLead:
      '치앙마이 공항 픽업부터 빠이·매림 근교 이동까지, 치앙마이에서 렌터카를 빌릴 때 먼저 확인해야 할 정보를 정리했습니다.',
    metaTitle: '치앙마이 렌터카 예약 가이드 | 빠이 여행 렌트카 비교',
    metaDescription: '치앙마이 렌터카 예약 전 국제운전면허증, 빠이 이동, 공항 픽업, 보험 조건을 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote: '태국 운전에는 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것이 안전합니다.',
    drivingCaution:
      '태국은 좌측통행이며 치앙마이~빠이 구간은 굽은 산길이 많아 운전 경험이 적다면 신중하게 결정하세요.',
    airportPickupAvailable: true,
    insuranceNote: '보험 포함 상품이라도 자기부담금이 남을 수 있습니다.',
    depositNote: '신용카드 보증금 홀드가 있을 수 있습니다.',
    freeCancellationNote: '무료 취소 가능 상품을 우선 확인하세요.',
    vendorComparisonNote: '치앙마이는 산길 주행이 많아 차량 상태와 타이어 컨디션을 예약 전 후기로 확인하는 것이 좋습니다.',
    relatedCitySlugs: ['thailand-bangkok', 'thailand-phuket'],
    isPublished: true
  },
  {
    id: 'australia-melbourne',
    countrySlug: 'australia',
    citySlug: 'melbourne',
    countryNameKo: '호주',
    cityNameKo: '멜버른',
    heroTitle: '멜버른 렌터카 예약 가이드',
    heroLead:
      '멜버른공항 픽업부터 그레이트 오션 로드 드라이브까지, 멜버른에서 렌터카가 필요한 여행자를 위한 정보를 정리했습니다.',
    metaTitle: '멜버른 렌터카 예약 가이드 | 그레이트 오션 로드 렌트카 비교',
    metaDescription: '멜버른 렌터카 예약 전 국제운전면허증, 그레이트 오션 로드 이동, 공항 픽업, 보험 조건을 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote: '호주는 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것이 안전합니다.',
    drivingCaution: '호주는 좌측통행입니다. 그레이트 오션 로드는 장거리 해안도로라 휴식 없이 무리하게 운전하지 마세요.',
    airportPickupAvailable: true,
    insuranceNote: '자기부담금 범위와 미성년·젊은 운전자 추가 요금을 확인하세요.',
    depositNote: '신용카드 보증금 홀드가 있을 수 있습니다.',
    freeCancellationNote: '무료 취소 조건은 업체·요금제별로 차이가 있습니다.',
    vendorComparisonNote: '멜버른은 장거리 주행 거리 제한과 추가 운전자 요금이 총비용에 영향을 줍니다.',
    relatedCitySlugs: ['australia-sydney', 'australia-brisbane'],
    isPublished: true
  },
  {
    id: 'australia-brisbane',
    countrySlug: 'australia',
    citySlug: 'brisbane',
    countryNameKo: '호주',
    cityNameKo: '브리즈번',
    heroTitle: '브리즈번 렌터카 예약 가이드',
    heroLead:
      '브리즈번공항 픽업부터 골드코스트·선샤인코스트 이동까지, 브리즈번에서 렌터카가 필요한 여행자를 위한 정보를 정리했습니다.',
    metaTitle: '브리즈번 렌터카 예약 가이드 | 골드코스트 이동 렌트카 비교',
    metaDescription: '브리즈번 렌터카 예약 전 국제운전면허증, 골드코스트 이동, 공항 픽업, 보험 조건을 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote: '호주는 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것이 안전합니다.',
    drivingCaution: '호주는 좌측통행입니다. 골드코스트 방향은 고속도로 위주라 초행이어도 비교적 수월합니다.',
    airportPickupAvailable: true,
    insuranceNote: '자기부담금 범위를 확인하세요.',
    depositNote: '신용카드 보증금 홀드가 있을 수 있습니다.',
    freeCancellationNote: '무료 취소 조건은 업체별로 차이가 있습니다.',
    vendorComparisonNote: '브리즈번은 공항 지점과 골드코스트 반납(편도) 조건을 함께 확인하세요.',
    relatedCitySlugs: ['australia-melbourne', 'australia-sydney'],
    isPublished: true
  },
  {
    id: 'newzealand-auckland',
    countrySlug: 'newzealand',
    citySlug: 'auckland',
    countryNameKo: '뉴질랜드',
    cityNameKo: '오클랜드',
    heroTitle: '오클랜드 렌터카 예약 가이드',
    heroLead:
      '오클랜드공항 픽업부터 로토루아·베이오브아일랜즈 이동까지, 오클랜드에서 렌터카가 필요한 여행자를 위한 정보를 정리했습니다.',
    metaTitle: '오클랜드 렌터카 예약 가이드 | 뉴질랜드 여행 렌트카 비교',
    metaDescription: '오클랜드 렌터카 예약 전 국제운전면허증, 장거리 이동, 공항 픽업, 보험 조건을 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote: '뉴질랜드는 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것이 안전합니다.',
    drivingCaution:
      '뉴질랜드는 좌측통행이며 국도 구간이 길고 굴곡이 많습니다. 야생동물 출몰과 날씨 변화에 주의하세요.',
    airportPickupAvailable: true,
    insuranceNote: '자갈길·비포장 도로 주행 제한 조건이 있는 상품도 있어 예약 전 확인하세요.',
    depositNote: '신용카드 보증금 홀드가 있을 수 있습니다.',
    freeCancellationNote: '장기 렌트가 많은 지역이라 무료 취소 조건을 꼼꼼히 확인하세요.',
    vendorComparisonNote: '오클랜드는 편도 반납(예: 퀸스타운 반납) 옵션과 요금 차이를 확인하는 것이 좋습니다.',
    relatedCitySlugs: ['australia-sydney', 'australia-melbourne'],
    isPublished: true
  },
  {
    id: 'uk-london',
    countrySlug: 'uk',
    citySlug: 'london',
    countryNameKo: '영국',
    cityNameKo: '런던',
    heroTitle: '런던 렌터카 예약 가이드',
    heroLead:
      '런던 히드로공항 픽업부터 코츠월즈·스톤헨지 근교 이동까지, 런던에서 렌터카가 필요한 여행자를 위한 정보를 정리했습니다.',
    metaTitle: '런던 렌터카 예약 가이드 | 코츠월즈 여행 렌트카 비교',
    metaDescription: '런던 렌터카 예약 전 국제운전면허증, 코츠월즈 이동, 공항 픽업, 보험 조건을 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote: '영국은 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것이 안전합니다.',
    drivingCaution:
      '영국은 좌측통행입니다. 런던 시내는 혼잡통행료(ULEZ 등) 구간이 있어 외곽 지점에서 픽업하는 것이 편합니다.',
    airportPickupAvailable: true,
    insuranceNote: '기본 보험과 자기부담금 범위를 확인하세요.',
    depositNote: '신용카드 보증금 홀드가 있을 수 있습니다.',
    freeCancellationNote: '무료 취소 조건은 업체별로 차이가 있습니다.',
    vendorComparisonNote: '런던은 시내 혼잡통행료와 주차비가 높아 공항·외곽 픽업이 총비용을 줄이는 데 유리합니다.',
    relatedCitySlugs: ['france-paris', 'australia-sydney'],
    isPublished: true
  },
  {
    id: 'france-paris',
    countrySlug: 'france',
    citySlug: 'paris',
    countryNameKo: '프랑스',
    cityNameKo: '파리',
    heroTitle: '파리 렌터카 예약 가이드',
    heroLead:
      '파리 샤를드골공항 픽업부터 루아르·노르망디 근교 이동까지, 파리에서 렌터카가 필요한 여행자를 위한 정보를 정리했습니다.',
    metaTitle: '파리 렌터카 예약 가이드 | 노르망디 여행 렌트카 비교',
    metaDescription: '파리 렌터카 예약 전 국제운전면허증, 근교 이동, 공항 픽업, 보험 조건을 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote: '프랑스는 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것이 안전합니다.',
    drivingCaution:
      '프랑스는 우측통행입니다. 파리 시내는 주차와 혼잡이 심해 공항이나 외곽에서 픽업하는 일정을 추천합니다.',
    airportPickupAvailable: true,
    insuranceNote: '기본 보험과 자기부담금, 유리·타이어 특약 조건을 확인하세요.',
    depositNote: '신용카드 보증금 홀드가 있을 수 있습니다.',
    freeCancellationNote: '무료 취소 조건은 업체별로 차이가 있습니다.',
    vendorComparisonNote: '파리는 톨게이트(유료도로) 구간이 많아 통행료를 감안한 일정 계획이 필요합니다.',
    relatedCitySlugs: ['uk-london', 'taiwan-taipei'],
    isPublished: true
  },
  {
    id: 'usa-los-angeles',
    countrySlug: 'usa',
    citySlug: 'los-angeles',
    countryNameKo: '미국',
    cityNameKo: '로스앤젤레스',
    heroTitle: '로스앤젤레스 렌터카 예약 가이드',
    heroLead:
      'LAX공항 픽업부터 산타모니카·팜스프링스 근교 이동까지, 로스앤젤레스에서 렌터카가 필요한 여행자를 위한 정보를 정리했습니다.',
    metaTitle: '로스앤젤레스 렌터카 예약 가이드 | LAX 공항 픽업 렌트카 비교',
    metaDescription: '로스앤젤레스 렌터카 예약 전 국제운전면허증, LAX 공항 픽업, 보험, 나이 제한 조건을 확인하세요.',
    intlLicenseRequired: true,
    intlLicenseNote: '미국은 국제운전면허증과 국내 운전면허증, 여권을 함께 준비하는 것이 안전합니다.',
    drivingCaution:
      '로스앤젤레스는 프리웨이 구간이 많고 출퇴근 시간 정체가 심합니다. 장거리 일정은 정체 시간을 피해 계획하세요.',
    airportPickupAvailable: true,
    insuranceNote: '기본 보험, 자차손해면책, 자기부담금 범위가 상품별로 다릅니다. 만 25세 미만 추가 요금도 확인하세요.',
    depositNote: '신용카드 보증금 홀드가 있으며, 젊은 운전자는 추가 조건이 붙는 경우가 많습니다.',
    freeCancellationNote: '플랫폼 예약 상품은 무료 취소 조건이 있는 경우가 많습니다.',
    vendorComparisonNote: 'LAX는 공항 내 렌터카 카운터가 아니라 셔틀 이동 후 픽업하는 구조라 소요 시간을 감안하세요.',
    relatedCitySlugs: ['usa-hawaii', 'usa-guam'],
    isPublished: true
  }
];

export function getPublishedCities() {
  return cities.filter((city) => city.isPublished);
}

export function getCityBySlug(countrySlug: string, citySlug: string) {
  return getPublishedCities().find(
    (city) => city.countrySlug === countrySlug && city.citySlug === citySlug
  );
}

export function getCityById(id: string) {
  return getPublishedCities().find((city) => city.id === id);
}

export function getCitiesByCountry() {
  return getPublishedCities().reduce<Record<string, City[]>>((acc, city) => {
    const key = city.countryNameKo;
    acc[key] = acc[key] ?? [];
    acc[key].push(city);
    return acc;
  }, {});
}

export function getRelatedCities(cityIds: string[]) {
  return cityIds
    .map((id) => getCityById(id))
    .filter((city): city is City => Boolean(city));
}
