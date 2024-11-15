import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Trip } from '../trip/trip-table/columns';

const trips: Trip[] = [
  {
    id: 'BUDDYBIKE - 241001',
    tripCode: 'BUDDYBIKE - 241001',
    datetime: '2024-10-24T07:00:00',
    driverName: 'Ph\u1ea1m Ho\u00e0ng Th\u1ee7y Ti\u00ean',
    userName: 'Ho\u00e0ng L\u00ea Nguy\u00ean Ki\u1ec1u',
    pickupLocation:
      '17 \u0111\u01b0\u1eddng D7, khu ph\u1ed1 4, ph\u01b0\u1eddng An Kh\u00e1nh, qu\u1eadn 2, TP HCM',
    destination: '\u0110\u1ea1i h\u1ecdc FPT',
    routeDistance: '17',
    price: '51,000',
    vouchers: '15%',
    priceAfterVoucher: '43,350',
    revenue: '13,005'
  },
  {
    id: 'BUDDYBIKE - 241002',
    tripCode: 'BUDDYBIKE - 241002',
    datetime: '2024-10-24T09:00:00',
    driverName: 'V\u00f5 Nguy\u1ec5n Ho\u00e0ng Long',
    userName: 'B\u00f9i Kh\u00e1nh Linh',
    pickupLocation: 'SaiGon Mystery Villa',
    destination: '\u0110\u1ea1i h\u1ecdc FPT',
    routeDistance: '16',
    price: '48,000',
    vouchers: '15%',
    priceAfterVoucher: '40,800',
    revenue: '12,240'
  },
  {
    id: 'BUDDYBIKE - 241003',
    tripCode: 'BUDDYBIKE - 241003',
    datetime: '2024-10-24T11:00:00',
    driverName: 'Mai Nguy\u1ec5n Ho\u00e0ng An',
    userName: 'L\u00ea Th\u1ecb Tr\u00e2m Anh',
    pickupLocation:
      '633 \u0110. Kinh D\u01b0\u01a1ng V\u01b0\u01a1ng, ph\u01b0\u1eddng An L\u1ea1c, qu\u1eadn T\u00e2n B\u00ecnh',
    destination: '\u0110\u1ea1i h\u1ecdc Y D\u01b0\u1ee3c TP.HCM',
    routeDistance: '8',
    price: '24,000',
    vouchers: '15%',
    priceAfterVoucher: '20,400',
    revenue: '6,120'
  },
  {
    id: 'BUDDYBIKE - 241004',
    tripCode: 'BUDDYBIKE - 241004',
    datetime: '2024-10-24T11:50:00',
    driverName: 'Nguy\u1ec5n Trung Ngh\u0129a',
    userName: 'L\u00ea Th\u00e0nh Nh\u00e2n',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc FPT',
    destination: 'Vinhomes Grand Park Q9',
    routeDistance: '4.6',
    price: '13,800',
    vouchers: '15%',
    priceAfterVoucher: '11,730',
    revenue: '3,519'
  },
  {
    id: 'BUDDYBIKE - 241005',
    tripCode: 'BUDDYBIKE - 241005',
    datetime: '2024-10-24T14:00:00',
    driverName: 'Ph\u1ea1m Ho\u00e0ng Th\u1ee7y Ti\u00ean',
    userName: 'Ho\u00e0ng L\u00ea Nguy\u00ean Ki\u1ec1u',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc FPT',
    destination:
      '17 \u0111\u01b0\u1eddng D7, khu ph\u1ed1 4, ph\u01b0\u1eddng An Kh\u00e1nh, qu\u1eadn 2, TP HCM',
    routeDistance: '17',
    price: '51,000',
    vouchers: '5%',
    priceAfterVoucher: '48,450',
    revenue: '14,535'
  },
  {
    id: 'BUDDYBIKE - 241006',
    tripCode: 'BUDDYBIKE - 241006',
    datetime: '2024-10-24T14:30:00',
    driverName: 'Phan Ti\u1ebfn Ph\u00fac Anh',
    userName: 'Ph\u1ea1m Kh\u00e1nh Linh',
    pickupLocation: 'Nh\u00e0 v\u0103n h\u00f3a sinh vi\u00ean TP.HCM',
    destination:
      'H\u1ebbm 150 Hu\u1ef3nh T\u1ea5n Ph\u00e1t, T\u00e2n Thu\u1eadn \u0110\u00f4ng, Qu\u1eadn 7, TP. HCM',
    routeDistance: '25',
    price: '75,000',
    vouchers: '15%',
    priceAfterVoucher: '63,750',
    revenue: '19,125'
  },
  {
    id: 'BUDDYBIKE - 241007',
    tripCode: 'BUDDYBIKE - 241007',
    datetime: '2024-10-24T12:20:00',
    driverName: 'Tr\u01b0\u01a1ng Ho\u00e0ng Anh V\u0169',
    userName: 'Ph\u1ea1m Th\u1ecb Ph\u01b0\u01a1ng Mai',
    pickupLocation: 'Nh\u00e0 v\u0103n h\u00f3a sinh vi\u00ean TP.HCM',
    destination:
      '38 \u0110.9 ph\u01b0\u1eddng Linh Trung, Th\u1ee7 \u0110\u1ee9c, HCM',
    routeDistance: '5.7',
    price: '17,100',
    vouchers: '15%',
    priceAfterVoucher: '14,535',
    revenue: '4,361'
  },
  {
    id: 'BUDDYBIKE - 241008',
    tripCode: 'BUDDYBIKE - 241008',
    datetime: '2024-10-24T12:00:00',
    driverName: 'L\u00ea Gia H\u00e2n',
    userName: 'Nguy\u1ec5n H\u1ed3ng H\u1ea1nh',
    pickupLocation:
      '\u0110\u01b0\u1eddng 210, ph\u01b0\u1eddng T\u00e2n Ph\u00fa, qu\u1eadn 9, HCM',
    destination: 'Nh\u00e0 v\u0103n h\u00f3a sinh vi\u00ean TP.HCM',
    routeDistance: '12',
    price: '36,000',
    vouchers: '10%',
    priceAfterVoucher: '32,400',
    revenue: '9,720'
  },
  {
    id: 'BUDDYBIKE - 241009',
    tripCode: 'BUDDYBIKE - 241009',
    datetime: '2024-10-24T13:20:00',
    driverName: 'Tr\u1ea7n Qu\u1ed1c T\u00fa',
    userName: 'Nguy\u1ec5n Ho\u00e0ng Kim Ng\u00e2n ',
    pickupLocation:
      '\u0110. Nguy\u1ec5n Th\u01b0\u1ee3ng Hi\u1ec1n, Ph\u01b0\u1eddng 1, Qu\u1eadn G\u00f2 V\u1ea5p, Tp H\u1ed3 Ch\u00ed Minh',
    destination: '\u0110\u1ea1i h\u1ecdc V\u0103n Lang c\u01a1 s\u1edf 3',
    routeDistance: '3.5',
    price: '10,500',
    vouchers: '0%',
    priceAfterVoucher: '10,500',
    revenue: '3,150'
  },
  {
    id: 'BUDDYBIKE - 251001',
    tripCode: 'BUDDYBIKE - 251001',
    datetime: '2024-10-25T06:30:00',
    driverName: 'Nguy\u1ec5n T\u1ea5n Nh\u1eadt Quang',
    userName: 'H\u00e0 Ki\u1ec1u Anh',
    pickupLocation:
      '\u0110\u01b0\u1eddng s\u1ed1 8, Ph\u01b0\u1eddng T\u0103ng Nh\u01a1n Ph\u00fa B, Tp Th\u1ee7 \u0110\u1ee9c',
    destination: 'Nh\u00e0 v\u0103n h\u00f3a sinh vi\u00ean TP.HCM',
    routeDistance: '7',
    price: '21,000',
    vouchers: '20%',
    priceAfterVoucher: '16,800',
    revenue: '5,040'
  },
  {
    id: 'BUDDYBIKE - 251002',
    tripCode: 'BUDDYBIKE - 251002',
    datetime: '2024-10-25T06:30:00',
    driverName: 'Nguy\u1ec5n Th\u1ecb V\u00e2n Anh',
    userName: 'Nguy\u1ec5n Tr\u1ea7n Trung Anh',
    pickupLocation:
      'h\u1ebbm 69 B\u00f9i Tr\u1ecdng Ngh\u0129a, khu ph\u1ed1 3A, ph\u01b0\u1eddng Tr\u1ea3ng D\u00e0i, Bi\u00ean H\u00f2a, \u0110N',
    destination: 'Nh\u00e0 v\u0103n h\u00f3a sinh vi\u00ean TP.HCM',
    routeDistance: '19',
    price: '57,000',
    vouchers: '20%',
    priceAfterVoucher: '45,600',
    revenue: '13,680'
  },
  {
    id: 'BUDDYBIKE - 251003',
    tripCode: 'BUDDYBIKE - 251003',
    datetime: '2024-10-25T06:35:00',
    driverName: 'Nguy\u1ec5n Th\u1ecb Thu H\u1eb1ng',
    userName: 'L\u00ea D\u01b0\u01a1ng Di\u1ec7u Trinh',
    pickupLocation: 'Vinhomes Grand Park Q9',
    destination: 'Nh\u00e0 v\u0103n h\u00f3a sinh vi\u00ean TP.HCM',
    routeDistance: '7.9',
    price: '23,700',
    vouchers: '15%',
    priceAfterVoucher: '20,145',
    revenue: '6,044'
  },
  {
    id: 'BUDDYBIKE - 251004',
    tripCode: 'BUDDYBIKE - 251004',
    datetime: '2024-10-25T07:20:00',
    driverName: 'Tr\u1ea7n Huy\u1ec1n Trang',
    userName: 'L\u00ea Ho\u00e0ng Kim Kh\u00e1nh',
    pickupLocation: 'K\u00fd t\u00fac x\u00e1 khu B \u0110HQG-HCM',
    destination: '\u0110\u1ea1i h\u1ecdc N\u00f4ng L\u00e2m TP.HCM',
    routeDistance: '5.7',
    price: '17,100',
    vouchers: '15%',
    priceAfterVoucher: '14,535',
    revenue: '4,361'
  },
  {
    id: 'BUDDYBIKE - 251005',
    tripCode: 'BUDDYBIKE - 251005',
    datetime: '2024-10-25T11:50:00',
    driverName: 'Nguy\u1ec5n Th\u1ecb V\u00e2n Anh',
    userName: 'Nguy\u1ec5n Tr\u1ea7n Trung Anh',
    pickupLocation: 'Nh\u00e0 v\u0103n h\u00f3a sinh vi\u00ean TP.HCM',
    destination:
      'h\u1ebbm 69 B\u00f9i Tr\u1ecdng Ngh\u0129a, khu ph\u1ed1 3A, ph\u01b0\u1eddng Tr\u1ea3ng D\u00e0i, Bi\u00ean H\u00f2a, \u0110N',
    routeDistance: '19',
    price: '57,000',
    vouchers: '15%',
    priceAfterVoucher: '48,450',
    revenue: '14,535'
  },
  {
    id: 'BUDDYBIKE - 251006',
    tripCode: 'BUDDYBIKE - 251006',
    datetime: '2024-10-25T14:45:00',
    driverName: 'Nguy\u1ec5n T\u1ea5n Nh\u1eadt Quang',
    userName: 'H\u00e0 Ki\u1ec1u Anh',
    pickupLocation: 'Nh\u00e0 v\u0103n h\u00f3a sinh vi\u00ean TP.HCM',
    destination:
      '\u0110\u01b0\u1eddng s\u1ed1 8, Ph\u01b0\u1eddng T\u0103ng Nh\u01a1n Ph\u00fa B, Tp Th\u1ee7 \u0110\u1ee9c',
    routeDistance: '7',
    price: '21,000',
    vouchers: '20%',
    priceAfterVoucher: '16,800',
    revenue: '5,040'
  },
  {
    id: 'BUDDYBIKE - 251007',
    tripCode: 'BUDDYBIKE - 251007',
    datetime: '2024-10-25T17:10:00',
    driverName: 'L\u1eef Minh Ng\u1ecdc',
    userName: 'Nguy\u1ec5n T\u00f9ng D\u01b0\u01a1ng',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc FPT',
    destination: 'Vinhomes Grand Park Q9',
    routeDistance: '4.6',
    price: '13,800',
    vouchers: '10%',
    priceAfterVoucher: '12,420',
    revenue: '3,726'
  },
  {
    id: 'BUDDYBIKE - 261001',
    tripCode: 'BUDDYBIKE - 261001',
    datetime: '2024-10-26T06:40:00',
    driverName: 'H\u1ed3 Ti\u1ebfn Qu\u1ed1c',
    userName: 'L\u01b0u Tr\u1ecdng C\u01b0\u1eddng',
    pickupLocation:
      '25 Ph\u1ea1m H\u00f9ng, Ph\u01b0\u1eddng 5, B\u00ecnh Ch\u00e1nh, TP.HCM',
    destination: '\u0110\u1ea1i h\u1ecdc C\u00f4ng Nghi\u1ec7p TP.HCM',
    routeDistance: '12',
    price: '36,000',
    vouchers: '15%',
    priceAfterVoucher: '30,600',
    revenue: '9,180'
  },
  {
    id: 'BUDDYBIKE - 261002',
    tripCode: 'BUDDYBIKE - 261002',
    datetime: '2024-10-26T08:30:00',
    driverName: 'L\u00ea Qu\u1ed1c Huy',
    userName: 'L\u00ea V\u0169 Ng\u1ecdc An',
    pickupLocation:
      '22 H\u1ebbm 303/18 T\u00e2n S\u01a1n Nh\u00ec, ph\u01b0\u1eddng T\u00e2n S\u01a1n Nh\u00ec, qu\u1eadn T\u00e2n Ph\u00fa',
    destination:
      '\u0110\u1ea1i h\u1ecdc Kinh t\u1ebf T\u00e0i ch\u00ednh TP.HCM',
    routeDistance: '8.1',
    price: '24,300',
    vouchers: '15%',
    priceAfterVoucher: '20,655',
    revenue: '6,197'
  },
  {
    id: 'BUDDYBIKE - 261003',
    tripCode: 'BUDDYBIKE - 261003',
    datetime: '2024-10-26T11:45:00',
    driverName: 'Ph\u1ea1m Thi\u1ec7n To\u00e0n',
    userName: '\u0110o\u00e0n L\u01b0u Ng\u1ecdc Linh',
    pickupLocation:
      'KP1, ph\u01b0\u1eddng Long B\u00ecnh T\u00e2n, Bi\u00ean H\u00f2a, \u0110\u1ed3ng Nai',
    destination: '\u0110\u1ea1i h\u1ecdc FPT',
    routeDistance: '13',
    price: '39,000',
    vouchers: '10%',
    priceAfterVoucher: '35,100',
    revenue: '10,530'
  },
  {
    id: 'BUDDYBIKE - 261004',
    tripCode: 'BUDDYBIKE - 261004',
    datetime: '2024-10-26T16:50:00',
    driverName: 'Ph\u1ea1m L\u00ea Qu\u1ed1c Tu\u1ea5n',
    userName: 'V\u0169 H\u1ea3i \u0110\u0103ng',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc C\u00f4ng Nghi\u1ec7p TP.HCM',
    destination:
      'H\u1ebbm 451 Hai B\u00e0 Tr\u01b0ng, Ph\u01b0\u1eddng 8, Qu\u1eadn 3. Tp.HCM',
    routeDistance: '4.9',
    price: '14,700',
    vouchers: '10%',
    priceAfterVoucher: '13,230',
    revenue: '3,969'
  },
  {
    id: 'BUDDYBIKE - 261005',
    tripCode: 'BUDDYBIKE - 261005',
    datetime: '2024-10-26T18:20:00',
    driverName: '\u0110\u1ed7 Ng\u1ecdc \u00c1nh',
    userName: 'V\u00f5 Ho\u00e0ng Long',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc N\u00f4ng L\u00e2m TP.HCM',
    destination: 'K\u00fd t\u00fac x\u00e1 khu B \u0110HQG-HCM',
    routeDistance: '5.7',
    price: '17,100',
    vouchers: '20%',
    priceAfterVoucher: '13,680',
    revenue: '4,104'
  },
  {
    id: 'BUDDYBIKE - 271001',
    tripCode: 'BUDDYBIKE - 271001',
    datetime: '2024-10-27T14:45:00',
    driverName: 'Tr\u1ecbnh Th\u1ecb B\u00edch Huy\u1ec1n',
    userName: 'Nguy\u1ec5n Thi\u1ec7u Th\u00fay Ng\u00e2n',
    pickupLocation: 'Chung c\u01b0 Sky 9 Q9',
    destination: '\u0110\u1ea1i h\u1ecdc FPT',
    routeDistance: '11',
    price: '33,000',
    vouchers: '15%',
    priceAfterVoucher: '28,050',
    revenue: '8,415'
  },
  {
    id: 'BUDDYBIKE - 271002',
    tripCode: 'BUDDYBIKE - 271002',
    datetime: '2024-10-27T17:10:00',
    driverName: 'T\u0103ng Th\u00e0nh \u0110\u1ecbnh',
    userName: 'Th\u00e1i Ho\u00e0ng Kim',
    pickupLocation: 'Nh\u00e0 v\u0103n h\u00f3a sinh vi\u00ean TP.HCM',
    destination:
      '351 V\u00f5 V\u0103n H\u00e1t, Long Tr\u01b0\u1eddng, Qu\u1eadn 9, TP.HCM',
    routeDistance: '4.3',
    price: '12,900',
    vouchers: '0%',
    priceAfterVoucher: '12,900',
    revenue: '3,870'
  },
  {
    id: 'BUDDYBIKE - 281001',
    tripCode: 'BUDDYBIKE - 281001',
    datetime: '2024-10-28T07:10:00',
    driverName: 'Nguy\u1ec5n Th\u1ecb Di\u1ec5m',
    userName: 'L\u00ea D\u01b0\u01a1ng Anh T\u00fa',
    pickupLocation:
      '56 \u00c2u D\u01b0\u01a1ng L\u00e2n, Ph\u01b0\u1eddng 3, Qu\u1eadn 8, TP.HCM',
    destination: '\u0110\u1ea1i H\u1ecdc M\u1edf TP. H\u1ed3 Ch\u00ed Minh',
    routeDistance: '4.5',
    price: '13,500',
    vouchers: '15%',
    priceAfterVoucher: '11,475',
    revenue: '3,443'
  },
  {
    id: 'BUDDYBIKE - 281002',
    tripCode: 'BUDDYBIKE - 281002',
    datetime: '2024-10-28T07:20:00',
    driverName: 'Tr\u1ea7n Minh Ho\u00e0i',
    userName: 'Ph\u1ea1m Ph\u01b0\u01a1ng Trinh',
    pickupLocation:
      'H\u1ebbm 87 L\u00ea Th\u1ecb Hoa, ph\u01b0\u1eddng B\u00ecnh Chi\u1ec3u, TP.Th\u1ee7 \u0110\u1ee9c',
    destination:
      '\u0110\u1ea1i h\u1ecdc Khoa h\u1ecdc x\u00e3 h\u1ed9i v\u00e0 Nh\u00e2n v\u0103n',
    routeDistance: '12',
    price: '36,000',
    vouchers: '10%',
    priceAfterVoucher: '32,400',
    revenue: '9,720'
  },
  {
    id: 'BUDDYBIKE - 281003',
    tripCode: 'BUDDYBIKE - 281003',
    datetime: '2024-10-28T09:30:00',
    driverName: 'L\u00ea V\u00f5 Ng\u1ecdc H\u00e2n',
    userName: 'Nguy\u1ec5n Kh\u00e1nh Ng\u1ecdc',
    pickupLocation: 'K\u00fd t\u00fac x\u00e1 khu B \u0110HQG-HCM',
    destination: 'Nh\u00e0 v\u0103n ho\u00e1 sinh vi\u00ean TP.HCM',
    routeDistance: '2.8',
    price: '8,400',
    vouchers: '10%',
    priceAfterVoucher: '7,560',
    revenue: '2,268'
  },
  {
    id: 'BUDDYBIKE - 281004',
    tripCode: 'BUDDYBIKE - 281004',
    datetime: '2024-10-28T11:50:00',
    driverName: 'Nguy\u1ec5n Th\u1ecb V\u00e2n Anh',
    userName: '\u0110o\u00e0n L\u01b0u Ng\u1ecdc Linh',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc FPT',
    destination:
      'KP1, ph\u01b0\u1eddng Long B\u00ecnh T\u00e2n, Bi\u00ean H\u00f2a, \u0110\u1ed3ng Nai',
    routeDistance: '13',
    price: '39,000',
    vouchers: '5%',
    priceAfterVoucher: '37,050',
    revenue: '11,115'
  },
  {
    id: 'BUDDYBIKE - 281005',
    tripCode: 'BUDDYBIKE - 281005',
    datetime: '2024-10-28T16:40:00',
    driverName: 'Tr\u1ea7n Minh Ho\u00e0i',
    userName: 'Ph\u1ea1m Ph\u01b0\u01a1ng Trinh',
    pickupLocation:
      '\u0110\u1ea1i h\u1ecdc Khoa h\u1ecdc x\u00e3 h\u1ed9i v\u00e0 Nh\u00e2n v\u0103n',
    destination:
      'H\u1ebbm 87 L\u00ea Th\u1ecb Hoa, ph\u01b0\u1eddng B\u00ecnh Chi\u1ec3u, TP.Th\u1ee7 \u0110\u1ee9c',
    routeDistance: '12',
    price: '36,000',
    vouchers: '5%',
    priceAfterVoucher: '34,200',
    revenue: '10,260'
  },
  {
    id: 'BUDDYBIKE - 281006',
    tripCode: 'BUDDYBIKE - 281006',
    datetime: '2024-10-28T17:25:00',
    driverName: 'Ph\u1ea1m Mai Anh',
    userName: 'L\u00ea D\u01b0\u01a1ng Anh T\u00fa',
    pickupLocation: '\u0110\u1ea1i H\u1ecdc M\u1edf TP. H\u1ed3 Ch\u00ed Minh',
    destination:
      '56 \u00c2u D\u01b0\u01a1ng L\u00e2n, Ph\u01b0\u1eddng 3, Qu\u1eadn 8, TP.HCM',
    routeDistance: '4.4',
    price: '13,200',
    vouchers: '0%',
    priceAfterVoucher: '13,200',
    revenue: '3,960'
  },
  {
    id: 'BUDDYBIKE - 291001',
    tripCode: 'BUDDYBIKE - 291001',
    datetime: '2024-10-29T06:30:00',
    driverName: 'L\u01b0\u01a1ng Th\u1ebf Th\u00e0nh',
    userName: 'V\u00f5 Ho\u00e0ng Long',
    pickupLocation:
      '42 Tr\u01b0\u01a1ng \u0110\u1ecbnh, Ph\u01b0\u1eddng 6, Qu\u1eadn 3, TP.HCM',
    destination:
      '\u0110\u1ea1i h\u1ecdc Khoa h\u1ecdc T\u1ef1 nhi\u00ean - \u0110\u1ea1i h\u1ecdc Qu\u1ed1c Qu\u1ed1c Gia TP.HCM',
    routeDistance: '8.1',
    price: '24,300',
    vouchers: '10%',
    priceAfterVoucher: '21,870',
    revenue: '6,561'
  },
  {
    id: 'BUDDYBIKE - 291002',
    tripCode: 'BUDDYBIKE - 291002',
    datetime: '2024-10-29T07:10:00',
    driverName: 'V\u00f5 Ho\u00e0ng Long',
    userName: '\u0110o\u00e0n L\u01b0u Ng\u1ecdc Linh',
    pickupLocation:
      'KP1, ph\u01b0\u1eddng Long B\u00ecnh T\u00e2n, Bi\u00ean H\u00f2a, \u0110\u1ed3ng Nai',
    destination: '\u0110\u1ea1i h\u1ecdc FPT',
    routeDistance: '13',
    price: '39,000',
    vouchers: '20%',
    priceAfterVoucher: '31,200',
    revenue: '9,360'
  },
  {
    id: 'BUDDYBIKE - 291003',
    tripCode: 'BUDDYBIKE - 291003',
    datetime: '2024-10-29T09:25:00',
    driverName: 'L\u00ea T\u1ea5n T\u00e0i',
    userName: 'L\u00ea V\u0169 Ng\u1ecdc An',
    pickupLocation:
      '22 H\u1ebbm 303/18 T\u00e2n S\u01a1n Nh\u00ec, ph\u01b0\u1eddng T\u00e2n S\u01a1n Nh\u00ec, qu\u1eadn T\u00e2n Ph\u00fa',
    destination:
      '\u0110\u1ea1i h\u1ecdc Kinh t\u1ebf T\u00e0i ch\u00ednh TP.HCM',
    routeDistance: '10',
    price: '30,000',
    vouchers: '10%',
    priceAfterVoucher: '27,000',
    revenue: '8,100'
  },
  {
    id: 'BUDDYBIKE - 291004',
    tripCode: 'BUDDYBIKE - 291004',
    datetime: '2024-10-29T11:40:00',
    driverName: 'L\u00fd L\u1ec7 Anh',
    userName: 'V\u00f5 Ho\u00e0ng Long',
    pickupLocation:
      '\u0110\u1ea1i h\u1ecdc Khoa h\u1ecdc T\u1ef1 nhi\u00ean - \u0110\u1ea1i h\u1ecdc Qu\u1ed1c Qu\u1ed1c Gia TP.HCM',
    destination:
      '42 Tr\u01b0\u01a1ng \u0110\u1ecbnh, Ph\u01b0\u1eddng 6, Qu\u1eadn 3, TP.HCM',
    routeDistance: '8.1',
    price: '24,300',
    vouchers: '10%',
    priceAfterVoucher: '21,870',
    revenue: '6,561'
  },
  {
    id: 'BUDDYBIKE - 291005',
    tripCode: 'BUDDYBIKE - 291005',
    datetime: '2024-10-29T12:15:00',
    driverName: 'L\u00ea Qu\u1ed1c Huy',
    userName: 'L\u00ea V\u0169 Ng\u1ecdc An',
    pickupLocation:
      '\u0110\u1ea1i h\u1ecdc Kinh t\u1ebf TP. H\u1ed3 Ch\u00ed Minh',
    destination:
      '22 H\u1ebbm 303/18 T\u00e2n S\u01a1n Nh\u00ec, ph\u01b0\u1eddng T\u00e2n S\u01a1n Nh\u00ec, qu\u1eadn T\u00e2n Ph\u00fa',
    routeDistance: '10',
    price: '30,000',
    vouchers: '10%',
    priceAfterVoucher: '27,000',
    revenue: '8,100'
  },
  {
    id: 'BUDDYBIKE - 301001',
    tripCode: 'BUDDYBIKE - 301001',
    datetime: '2024-10-30T06:00:00',
    driverName: 'Mai Ho\u00e0ng \u0110\u1ea1t',
    userName: 'Phan Th\u1ecb Ki\u1ec1u Ng\u00e2n',
    pickupLocation:
      '82 Nguy\u1ec5n H\u1eefu C\u1ea3nh, Ph\u01b0\u1eddng 22, Qu\u1eadn B\u00ecnh Th\u1ea1nh, TP.HCM',
    destination: '\u0110\u1ea1i h\u1ecdc S\u00e0i G\u00f2n',
    routeDistance: '7.7',
    price: '23,100',
    vouchers: '15%',
    priceAfterVoucher: '19,635',
    revenue: '5,891'
  },
  {
    id: 'BUDDYBIKE - 301002',
    tripCode: 'BUDDYBIKE - 301002',
    datetime: '2024-10-30T06:40:00',
    driverName: 'Nguy\u1ec5n Gia Huy',
    userName: 'Nguy\u1ec5n An B\u1ea3o Khang',
    pickupLocation:
      '18 \u0110i\u1ec7n Bi\u00ean Ph\u1ee7, ph\u01b0\u1eddng \u0110a Kao, qu\u1eadn 1',
    destination: '\u0110\u1ea1i h\u1ecdc FPT',
    routeDistance: '18',
    price: '54,000',
    vouchers: '20%',
    priceAfterVoucher: '43,200',
    revenue: '12,960'
  },
  {
    id: 'BUDDYBIKE - 301003',
    tripCode: 'BUDDYBIKE - 301003',
    datetime: '2024-10-30T07:15:00',
    driverName: 'Nguy\u1ec5n T\u1ea5n Phi',
    userName: 'Nguy\u1ec5n L\u00ea B\u1ea3o L\u00e2m',
    pickupLocation:
      '47 T\u00e2n Ti\u1ebfn, ph\u01b0\u1eddng 8, qu\u1eadn T\u00e2n B\u00ecnh',
    destination:
      '\u0110\u1ea1i h\u1ecdc Th\u1ec3 D\u1ee5c Th\u1ec3 Thao TP.HCM',
    routeDistance: '22',
    price: '66,000',
    vouchers: '20%',
    priceAfterVoucher: '52,800',
    revenue: '15,840'
  },
  {
    id: 'BUDDYBIKE - 301004',
    tripCode: 'BUDDYBIKE - 301004',
    datetime: '2024-10-30T08:45:00',
    driverName: 'Mai Xu\u00e2n Th\u1ecbnh',
    userName: 'H\u00e0 V\u0129nh Ph\u00fac',
    pickupLocation:
      '79 T\u00e2n H\u00f2a \u0110\u00f4ng, Ph\u01b0\u1eddng B\u00ecnh Tr\u1ecb \u0110\u00f4ng, Qu\u1eadn B\u00ecnh T\u00e2n, TP.HCM',
    destination: '\u0110\u1ea1i h\u1ecdc S\u00e0i G\u00f2n',
    routeDistance: '6.3',
    price: '18,900',
    vouchers: '10%',
    priceAfterVoucher: '17,010',
    revenue: '5,103'
  },
  {
    id: 'BUDDYBIKE - 301001',
    tripCode: 'BUDDYBIKE - 301001',
    datetime: '2024-10-31T06:15:00',
    driverName: 'Phan Ti\u1ebfn Ph\u00fac Anh',
    userName: 'L\u00ea V\u00f5 Ng\u1ecdc H\u00e2n',
    pickupLocation: 'Nh\u00e0 v\u0103n ho\u00e1 sinh vi\u00ean TP.HCM',
    destination:
      'S\u1ed1 20 \u0111\u01b0\u1eddng 49 ph\u01b0\u1eddng B\u00ecnh Thu\u1eadn, Q7',
    routeDistance: '24',
    price: '72,000',
    vouchers: '20%',
    priceAfterVoucher: '57,600',
    revenue: '17,280'
  },
  {
    id: 'BUDDYBIKE - 301002',
    tripCode: 'BUDDYBIKE - 301002',
    datetime: '2024-10-31T06:40:00',
    driverName: '\u0110\u1eb7ng Tu\u1ea5n Anh',
    userName: 'L\u01b0u Th\u1ecb H\u00e0 Trinh',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc Ki\u1ebfn Tr\u00fac TP.HCM',
    destination:
      '32-34 B\u00ecnh Ti\u00ean, Ph\u01b0\u1eddng 4, Qu\u1eadn 6, TP.HCM',
    routeDistance: '8.1',
    price: '24,300',
    vouchers: '10%',
    priceAfterVoucher: '21,870',
    revenue: '6,561'
  },
  {
    id: 'BUDDYBIKE - 301003',
    tripCode: 'BUDDYBIKE - 301003',
    datetime: '2024-10-31T07:30:00',
    driverName: 'L\u00fd Anh Ki\u1ec7t',
    userName: 'L\u00ea V\u0169 Ng\u1ecdc An',
    pickupLocation:
      '22 H\u1ebbm 303/18 T\u00e2n S\u01a1n Nh\u00ec, ph\u01b0\u1eddng T\u00e2n S\u01a1n Nh\u00ec, qu\u1eadn T\u00e2n Ph\u00fa',
    destination:
      '\u0110\u1ea1i h\u1ecdc Kinh t\u1ebf T\u00e0i ch\u00ednh TP.HCM',
    routeDistance: '8.3',
    price: '24,900',
    vouchers: '10%',
    priceAfterVoucher: '22,410',
    revenue: '6,723'
  },
  {
    id: 'BUDDYBIKE - 301004',
    tripCode: 'BUDDYBIKE - 301004',
    datetime: '2024-10-31T09:00:00',
    driverName: '\u0110\u1eb7ng Phi Khang',
    userName: 'L\u00ea D\u01b0\u01a1ng Anh T\u00fa',
    pickupLocation:
      '56 \u00c2u D\u01b0\u01a1ng L\u00e2n, Ph\u01b0\u1eddng 3, Qu\u1eadn 8, TP.HCM',
    destination: '\u0110\u1ea1i H\u1ecdc M\u1edf TP. H\u1ed3 Ch\u00ed Minh',
    routeDistance: '4.5',
    price: '13,500',
    vouchers: '10%',
    priceAfterVoucher: '12,150',
    revenue: '3,645'
  },
  {
    id: 'BUDDYBIKE - 301005',
    tripCode: 'BUDDYBIKE - 301005',
    datetime: '2024-10-31T13:30:00',
    driverName: 'Ho\u00e0ng Ng\u1ecdc Anh',
    userName: 'Phan B\u1ea3o Ng\u1ecdc',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc S\u00e0i G\u00f2n',
    destination: '170 H\u1eadu Giang, Ph\u01b0\u1eddng 6, Qu\u1eadn 6, TP.HCM',
    routeDistance: '4.9',
    price: '14,700',
    vouchers: '0%',
    priceAfterVoucher: '14,700',
    revenue: '4,410'
  },
  {
    id: 'BUDDYBIKE - 301006',
    tripCode: 'BUDDYBIKE - 301006',
    datetime: '2024-10-31T15:10:00',
    driverName: 'Phan Gia Khang',
    userName: 'Nguy\u1ec5n Minh Kh\u00f4i',
    pickupLocation:
      'B19/405 Tr\u1ea7n \u0110\u1ea1i Ngh\u0129a, X\u00e3 T\u00e2n Nh\u1ef1t, Huy\u1ec7n B\u00ecnh Ch\u00e1nh, TP.HCM',
    destination: '\u0110\u1ea1i h\u1ecdc Lu\u1eadt TP.HCM',
    routeDistance: '21',
    price: '63,000',
    vouchers: '10%',
    priceAfterVoucher: '56,700',
    revenue: '17,010'
  },
  {
    id: 'BUDDYBIKE - 011101',
    tripCode: 'BUDDYBIKE - 011101',
    datetime: '2024-11-01T06:25:00',
    driverName: 'L\u00fd Minh Tu\u1ea5n',
    userName: '\u0110\u1ed7 Th\u00e0nh \u0110\u1ea1t',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc S\u00e0i G\u00f2n',
    destination:
      '56 L\u00ea V\u0103n Qu\u1edbi, Ph\u01b0\u1eddng B\u00ecnh H\u01b0ng H\u00f2a A, Qu\u1eadn B\u00ecnh T\u00e2n, TP.HCM',
    routeDistance: '10',
    price: '30,000',
    vouchers: '5%',
    priceAfterVoucher: '28,500',
    revenue: '8,550'
  },
  {
    id: 'BUDDYBIKE - 011102',
    tripCode: 'BUDDYBIKE - 011102',
    datetime: '2024-11-01T06:40:00',
    driverName: 'Nguy\u1ec5n Trung Ngh\u0129a',
    userName: '\u0110o\u00e0n L\u01b0u Ng\u1ecdc Linh',
    pickupLocation:
      'KP1, ph\u01b0\u1eddng Long B\u00ecnh T\u00e2n, Bi\u00ean H\u00f2a, \u0110\u1ed3ng Nai',
    destination: '\u0110\u1ea1i h\u1ecdc FPT',
    routeDistance: '13',
    price: '39,000',
    vouchers: '20%',
    priceAfterVoucher: '31,200',
    revenue: '9,360'
  },
  {
    id: 'BUDDYBIKE - 011103',
    tripCode: 'BUDDYBIKE - 011103',
    datetime: '2024-11-01T09:20:00',
    driverName: 'L\u01b0u Tr\u1ecdng V\u0169',
    userName: 'Phan Ti\u1ebfn Ph\u00fac Anh',
    pickupLocation: 'Nh\u00e0 v\u0103n ho\u00e1 sinh vi\u00ean TP.HCM',
    destination:
      'S\u1ed1 20 \u0111\u01b0\u1eddng 49 ph\u01b0\u1eddng B\u00ecnh Thu\u1eadn, Q7',
    routeDistance: '24',
    price: '72,000',
    vouchers: '20%',
    priceAfterVoucher: '57,600',
    revenue: '17,280'
  },
  {
    id: 'BUDDYBIKE - 011104',
    tripCode: 'BUDDYBIKE - 011104',
    datetime: '2024-11-01T18:30:00',
    driverName: 'Nguy\u1ec5n Th\u1ecb Thu Ph\u01b0\u01a1ng',
    userName: 'Ng\u00f4 Th\u1ecb Kim Chi',
    pickupLocation:
      '12 Qu\u1ed1c H\u01b0\u01a1ng, Ph\u01b0\u1eddng Th\u1ea3o \u0110i\u1ec1n, Qu\u1eadn 2, TP.HCM',
    destination:
      '\u0110\u1ea1i h\u1ecdc Th\u1ec3 D\u1ee5c Th\u1ec3 Thao TP.HCM',
    routeDistance: '13',
    price: '39,000',
    vouchers: '5%',
    priceAfterVoucher: '37,050',
    revenue: '11,115'
  },
  {
    id: 'BUDDYBIKE - 021101',
    tripCode: 'BUDDYBIKE - 021101',
    datetime: '2024-11-02T07:10:00',
    driverName: 'Nguy\u1ec5n B\u00ecnh H\u1ea1nh Nguy\u00ean',
    userName: 'Phan Gia Kh\u00e1nh',
    pickupLocation: 'Tr\u01b0\u1eddng \u0110H Kinh t\u1ebf \u2013 Lu\u1eadt',
    destination:
      '12 \u0110\u01b0\u1eddng Phan V\u0103n Tr\u1ecb, Ph\u01b0\u1eddng 7, G\u00f2 V\u1ea5p, H\u1ed3 Ch\u00ed Minh',
    routeDistance: '11',
    price: '33,000',
    vouchers: '15%',
    priceAfterVoucher: '28,050',
    revenue: '8,415'
  },
  {
    id: 'BUDDYBIKE - 021102',
    tripCode: 'BUDDYBIKE - 021102',
    datetime: '2024-11-02T08:00:00',
    driverName: 'V\u0169 Ng\u1ecdc Huy\u1ec1n',
    userName: 'Nguy\u1ec5n Trung Ngh\u0129a',
    pickupLocation: '68 B\u00e0 Hom, Ph\u01b0\u1eddng 13, Qu\u1eadn 6, TP.HCM',
    destination: '\u0110\u1ea1i h\u1ecdc FPT',
    routeDistance: '26',
    price: '78,000',
    vouchers: '20%',
    priceAfterVoucher: '62,400',
    revenue: '18,720'
  },
  {
    id: 'BUDDYBIKE - 021103',
    tripCode: 'BUDDYBIKE - 021103',
    datetime: '2024-11-02T11:35:00',
    driverName: 'Nguy\u1ec5n Quang Anh',
    userName: 'Nguy\u1ec5n L\u00ea B\u1ea3o L\u00e2m',
    pickupLocation:
      '\u0110\u1ea1i h\u1ecdc Th\u1ec3 D\u1ee5c Th\u1ec3 Thao TP.HCM',
    destination:
      '47 T\u00e2n Ti\u1ebfn, ph\u01b0\u1eddng 8, qu\u1eadn T\u00e2n B\u00ecnh',
    routeDistance: '22',
    price: '66,000',
    vouchers: '20%',
    priceAfterVoucher: '52,800',
    revenue: '15,840'
  },
  {
    id: 'BUDDYBIKE - 041101',
    tripCode: 'BUDDYBIKE - 041101',
    datetime: '2024-11-04T06:20:00',
    driverName: '\u0110\u1eb7ng Th\u1ecb Lan Anh',
    userName: 'Phan Gia Kh\u00e1nh',
    pickupLocation:
      '12 \u0110\u01b0\u1eddng Phan V\u0103n Tr\u1ecb, Ph\u01b0\u1eddng 7, G\u00f2 V\u1ea5p, H\u1ed3 Ch\u00ed Minh',
    destination: 'Tr\u01b0\u1eddng \u0110H Kinh t\u1ebf \u2013 Lu\u1eadt',
    routeDistance: '11',
    price: '33,000',
    vouchers: '10%',
    priceAfterVoucher: '29,700',
    revenue: '8,910'
  },
  {
    id: 'BUDDYBIKE - 041102',
    tripCode: 'BUDDYBIKE - 041102',
    datetime: '2024-11-04T07:00:00',
    driverName: 'Ph\u1ea1m Ph\u01b0\u1edbc Thi\u1ec7n',
    userName: 'Nguy\u1ec5n Th\u1ecb Thu H\u1eb1ng',
    pickupLocation:
      '13/14 \u0110\u01b0\u1eddng s\u1ed1 11, khu ph\u1ed1 3, Th\u1ee7 \u0110\u1ee9c',
    destination: 'Nh\u00e0 v\u0103n ho\u00e1 sinh vi\u00ean TP.HCM',
    routeDistance: '7.8',
    price: '23,400',
    vouchers: '20%',
    priceAfterVoucher: '18,720',
    revenue: '5,616'
  },
  {
    id: 'BUDDYBIKE - 041103',
    tripCode: 'BUDDYBIKE - 041103',
    datetime: '2024-11-04T09:40:00',
    driverName: 'L\u00fd Minh Tu\u1ea5n',
    userName: 'Ph\u1ea1m H\u1eefu Ngh\u0129a',
    pickupLocation:
      '\u0110\u1ea1i h\u1ecdc B\u00e1ch khoa \u2013 \u0110\u1ea1i h\u1ecdc Qu\u1ed1c gia TP.HCM.',
    destination:
      '16A2/12 \u0110inh \u0110\u1ee9c Thi\u1ec7n, X\u00e3 B\u00ecnh Ch\u00e1nh, Huy\u1ec7n B\u00ecnh Ch\u00e1nh, TP.HCM',
    routeDistance: '17',
    price: '51,000',
    vouchers: '5%',
    priceAfterVoucher: '48,450',
    revenue: '14,535'
  },
  {
    id: 'BUDDYBIKE - 041104',
    tripCode: 'BUDDYBIKE - 041104',
    datetime: '2024-11-04T10:55:00',
    driverName: 'T\u1ea1 Minh Khang',
    userName: 'T\u1eeb Kh\u00e1nh Vy',
    pickupLocation:
      'Tr\u01b0\u1eddng \u0110H Giao th\u00f4ng V\u1eadn t\u1ea3i Ph\u00e2n hi\u1ec7u t\u1ea1i TP.HCM',
    destination:
      '78 T\u00e2n K\u1ef3 T\u00e2n Qu\u00fd, Ph\u01b0\u1eddng B\u00ecnh H\u01b0ng H\u00f2a B, Qu\u1eadn B\u00ecnh T\u00e2n, TP.HCM',
    routeDistance: '15',
    price: '45,000',
    vouchers: '15%',
    priceAfterVoucher: '38,250',
    revenue: '11,475'
  },
  {
    id: 'BUDDYBIKE - 041105',
    tripCode: 'BUDDYBIKE - 041105',
    datetime: '2024-11-04T12:00:00',
    driverName: 'V\u0169 H\u1ea3i \u0110\u0103ng',
    userName: 'Nguy\u1ec5n Th\u1ecb Thu H\u1eb1ng',
    pickupLocation: 'Nh\u00e0 v\u0103n ho\u00e1 sinh vi\u00ean TP.HCM',
    destination:
      '13/14 \u0110\u01b0\u1eddng s\u1ed1 11, khu ph\u1ed1 3, Th\u1ee7 \u0110\u1ee9c',
    routeDistance: '7.8',
    price: '23,400',
    vouchers: '15%',
    priceAfterVoucher: '19,890',
    revenue: '5,967'
  },
  {
    id: 'BUDDYBIKE - 041106',
    tripCode: 'BUDDYBIKE - 041106',
    datetime: '2024-11-04T12:15:00',
    driverName: 'Phan Anh Th\u01b0',
    userName: '\u0110\u1eb7ng Th\u1ecb Kim Chi',
    pickupLocation: 'Tr\u01b0\u1eddng \u0110H Kinh t\u1ebf \u2013 Lu\u1eadt',
    destination: 'SaiGon Mystery Villa',
    routeDistance: '13',
    price: '39,000',
    vouchers: '5%',
    priceAfterVoucher: '37,050',
    revenue: '11,115'
  },
  {
    id: 'BUDDYBIKE - 041107',
    tripCode: 'BUDDYBIKE - 041107',
    datetime: '2024-11-04T17:30:00',
    driverName: 'Nguy\u1ec5n T\u1ea5n Nh\u1eadt Quang',
    userName: 'H\u00e0 Ki\u1ec1u Anh',
    pickupLocation: 'Nh\u00e0 v\u0103n h\u00f3a sinh vi\u00ean TP.HCM',
    destination:
      '\u0110\u01b0\u1eddng s\u1ed1 8, Ph\u01b0\u1eddng T\u0103ng Nh\u01a1n Ph\u00fa B, Tp Th\u1ee7 \u0110\u1ee9c',
    routeDistance: '7',
    price: '21,000',
    vouchers: '20%',
    priceAfterVoucher: '16,800',
    revenue: '5,040'
  },
  {
    id: 'BUDDYBIKE - 051101',
    tripCode: 'BUDDYBIKE - 051101',
    datetime: '2024-11-05T05:50:00',
    driverName: 'V\u0169 Ho\u00e0ng Nam',
    userName: 'Nguy\u1ec5n Quang Anh',
    pickupLocation:
      '88 \u0110\u01b0\u1eddng s\u1ed1 7, ph\u01b0\u1eddng B\u00ecnh Tr\u1ecb \u0110\u00f4ng B, qu\u1eadn B\u00ecnh T\u00e2n, H\u1ed3 Ch\u00ed Minh',
    destination:
      '\u0110\u1ea1i h\u1ecdc Th\u1ec3 D\u1ee5c Th\u1ec3 Thao TP.HCM',
    routeDistance: '28',
    price: '84,000',
    vouchers: '20%',
    priceAfterVoucher: '67,200',
    revenue: '20,160'
  },
  {
    id: 'BUDDYBIKE - 051102',
    tripCode: 'BUDDYBIKE - 051102',
    datetime: '2024-11-05T06:45:00',
    driverName: 'T\u1ea1 B\u1ea3o Ng\u1ecdc',
    userName: 'V\u0169 H\u1ed3ng S\u01a1n',
    pickupLocation: 'Vinhomes Grand Park ',
    destination: '\u0110\u1ea1i h\u1ecdc FPT',
    routeDistance: '4.6',
    price: '13,800',
    vouchers: '0%',
    priceAfterVoucher: '13,800',
    revenue: '4,140'
  },
  {
    id: 'BUDDYBIKE - 051103',
    tripCode: 'BUDDYBIKE - 051103',
    datetime: '2024-11-05T08:30:00',
    driverName: 'H\u1ed3 Nguy\u1ec5n Minh Tri\u1ebft',
    userName: 'T\u0103ng H\u1ed3ng B\u1ea3o',
    pickupLocation: 'Vinhomes Grand Park ',
    destination: 'Nh\u00e0 v\u0103n ho\u00e1 sinh vi\u00ean TP.HCM',
    routeDistance: '7.7',
    price: '23,100',
    vouchers: '10%',
    priceAfterVoucher: '20,790',
    revenue: '6,237'
  },
  {
    id: 'BUDDYBIKE - 051104',
    tripCode: 'BUDDYBIKE - 051104',
    datetime: '2024-11-05T12:45:00',
    driverName: 'L\u00ea Qu\u1ed1c Duy',
    userName: 'Mai Ph\u01b0\u01a1ng Th\u1ea3o',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc T\u00e0i ch\u00ednh - Marketing',
    destination:
      '20 Khu P. 1, T\u00e2n Hi\u1ec7p, Bi\u00ean H\u00f2a, \u0110\u1ed3ng Nai',
    routeDistance: '24',
    price: '72,000',
    vouchers: '10%',
    priceAfterVoucher: '64,800',
    revenue: '19,440'
  },
  {
    id: 'BUDDYBIKE - 051105',
    tripCode: 'BUDDYBIKE - 051105',
    datetime: '2024-11-05T14:30:00',
    driverName: 'Tr\u01b0\u01a1ng Qu\u1ed1c H\u01b0ng',
    userName: 'Tri\u1ec7u Th\u1ecb Ki\u1ec1u Trang',
    pickupLocation:
      '185 Nguy\u1ec5n V\u0103n Tr\u1ed7i, Ph\u01b0\u1eddng 10, Qu\u1eadn Ph\u00fa Nhu\u1eadn, TP.HCM',
    destination: '\u0110\u1ea1i h\u1ecdc Ng\u00e2n h\u00e0ng TP.HCM',
    routeDistance: '4.9',
    price: '14,700',
    vouchers: '0%',
    priceAfterVoucher: '14,700',
    revenue: '4,410'
  },
  {
    id: 'BUDDYBIKE - 061101',
    tripCode: 'BUDDYBIKE - 061101',
    datetime: '2024-11-06T09:15:00',
    driverName: 'V\u00f5 Thanh T\u00f9ng',
    userName: 'L\u00fd Di\u1ec5m Ki\u1ec1u',
    pickupLocation:
      '\u0110\u1ea1i h\u1ecdc S\u01b0 ph\u1ea1m K\u1ef9 thu\u1eadt TP.HCM.',
    destination:
      '52 Ung V\u0103n Khi\u00eam, Ph\u01b0\u1eddng 25, B\u00ecnh Th\u1ea1nh, H\u1ed3 Ch\u00ed Minh',
    routeDistance: '10',
    price: '30,000',
    vouchers: '10%',
    priceAfterVoucher: '27,000',
    revenue: '8,100'
  },
  {
    id: 'BUDDYBIKE - 061102',
    tripCode: 'BUDDYBIKE - 061102',
    datetime: '2024-11-06T09:20:00',
    driverName: 'B\u1ea1ch Ng\u1ecdc Lan',
    userName: 'Cao K\u1ef3 S\u01a1n',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc FPT',
    destination:
      '869 \u0110\u01b0\u1eddng \u00c2u C\u01a1, T\u00e2n S\u01a1n Nh\u00ec, T\u00e2n Ph\u00fa, H\u1ed3 Ch\u00ed Minh',
    routeDistance: '25',
    price: '75,000',
    vouchers: '20%',
    priceAfterVoucher: '60,000',
    revenue: '18,000'
  },
  {
    id: 'BUDDYBIKE - 061103',
    tripCode: 'BUDDYBIKE - 061103',
    datetime: '2024-11-06T11:30:00',
    driverName: 'L\u01b0u Tr\u1ecdng Nh\u00e2n',
    userName: 'Ph\u1ea1m Ph\u01b0\u1edbc Thi\u1ec7n',
    pickupLocation:
      'Chung C\u01b0 Ng\u00f4 Gia T\u1ef1, L\u00f4 K/009 \u0110. S\u01b0 V\u1ea1n H\u1ea1nh, Ph\u01b0\u1eddng 2, Qu\u1eadn 10, H\u1ed3 Ch\u00ed Minh 72519',
    destination: '\u0110\u1ea1i h\u1ecdc T\u00f4n \u0110\u1ee9c Th\u1eafng',
    routeDistance: '5.9',
    price: '17,700',
    vouchers: '5%',
    priceAfterVoucher: '16,815',
    revenue: '5,045'
  },
  {
    id: 'BUDDYBIKE - 061104',
    tripCode: 'BUDDYBIKE - 061104',
    datetime: '2024-11-06T13:10:00',
    driverName: '\u0110\u1eb7ng T\u00e0i \u0110\u1ee9c',
    userName: 'Qu\u00e1ch \u0110\u1ea1t Ph\u01b0\u1edbc',
    pickupLocation:
      '10 Mai Ch\u00ed Th\u1ecd, Ph\u01b0\u1eddng An Ph\u00fa, Qu\u1eadn 2, TP.HCM',
    destination: '\u0110\u1ea1i h\u1ecdc C\u00f4ng Th\u01b0\u01a1ng TP.HCM',
    routeDistance: '18',
    price: '54,000',
    vouchers: '20%',
    priceAfterVoucher: '43,200',
    revenue: '12,960'
  },
  {
    id: 'BUDDYBIKE - 061105',
    tripCode: 'BUDDYBIKE - 061105',
    datetime: '2024-11-06T15:10:00',
    driverName: 'T\u1ea1 H\u1ea3i Y\u1ebfn',
    userName: 'Phan L\u00e2m Vi\u00ean',
    pickupLocation:
      '56 Nguy\u1ec5n Duy Trinh, Ph\u01b0\u1eddng B\u00ecnh Tr\u01b0ng \u0110\u00f4ng, Qu\u1eadn 9, TP.HCM',
    destination:
      '\u0110\u1ea1i h\u1ecdc B\u00e1ch khoa \u2013 \u0110\u1ea1i h\u1ecdc Qu\u1ed1c gia TP.HCM.',
    routeDistance: '14',
    price: '42,000',
    vouchers: '5%',
    priceAfterVoucher: '39,900',
    revenue: '11,970'
  },
  {
    id: 'BUDDYBIKE - 071101',
    tripCode: 'BUDDYBIKE - 071101',
    datetime: '2024-11-07T06:40:00',
    driverName: 'Ho\u00e0ng Kh\u00e1nh V\u00e2n',
    userName: 'D\u01b0\u01a1ng Thanh B\u00ecnh',
    pickupLocation: 'Vinhomes Grand Park ',
    destination: '\u0110\u1ea1i h\u1ecdc T\u00e0i ch\u00ednh - Marketing',
    routeDistance: '21',
    price: '63,000',
    vouchers: '15%',
    priceAfterVoucher: '53,550',
    revenue: '16,065'
  },
  {
    id: 'BUDDYBIKE - 071102',
    tripCode: 'BUDDYBIKE - 071102',
    datetime: '2024-11-07T09:50:00',
    driverName: 'Tr\u1ea7n B\u1ea3o Khang',
    userName: 'Nguy\u1ec5n L\u00ea B\u1ea3o L\u00e2m',
    pickupLocation:
      '\u0110\u1ea1i h\u1ecdc Th\u1ec3 D\u1ee5c Th\u1ec3 Thao TP.HCM',
    destination:
      '47 T\u00e2n Ti\u1ebfn, ph\u01b0\u1eddng 8, qu\u1eadn T\u00e2n B\u00ecnh',
    routeDistance: '22',
    price: '66,000',
    vouchers: '20%',
    priceAfterVoucher: '52,800',
    revenue: '15,840'
  },
  {
    id: 'BUDDYBIKE - 071103',
    tripCode: 'BUDDYBIKE - 071103',
    datetime: '2024-11-07T10:00:00',
    driverName: 'Tr\u1ea7n Ho\u00e0ng Nam',
    userName: 'V\u0169 Di\u1ec5m Th\u01b0',
    pickupLocation:
      '\u0110\u1ea1i h\u1ecdc S\u01b0 ph\u1ea1m K\u1ef9 thu\u1eadt TP.HCM.',
    destination:
      '509 \u0110\u01b0\u1eddng C\u00e1ch M\u1ea1ng Th\u00e1ng 8, Ph\u01b0\u1eddng 13, Qu\u1eadn 10, H\u1ed3 Ch\u00ed Minh',
    routeDistance: '16',
    price: '48,000',
    vouchers: '15%',
    priceAfterVoucher: '40,800',
    revenue: '12,240'
  },
  {
    id: 'BUDDYBIKE - 071104',
    tripCode: 'BUDDYBIKE - 071104',
    datetime: '2024-11-07T14:15:00',
    driverName: 'Tr\u1ea7n Thu H\u00e0',
    userName: 'Phan Ti\u1ebfn Ph\u00fac Anh',
    pickupLocation:
      'S\u1ed1 20 \u0111\u01b0\u1eddng 49 ph\u01b0\u1eddng B\u00ecnh Thu\u1eadn, Q7',
    destination: '\u0110\u1ea1i h\u1ecdc FPT',
    routeDistance: '19',
    price: '57,000',
    vouchers: '20%',
    priceAfterVoucher: '45,600',
    revenue: '13,680'
  },
  {
    id: 'BUDDYBIKE - 081101',
    tripCode: 'BUDDYBIKE - 081101',
    datetime: '2024-11-08T06:10:00',
    driverName: 'M\u1ea1c Quang Huy',
    userName: 'Ng\u00f4 V\u0129nh Khoa',
    pickupLocation:
      '\u0110\u1ea1i h\u1ecdc B\u00e1ch khoa \u2013 \u0110\u1ea1i h\u1ecdc Qu\u1ed1c gia TP.HCM.',
    destination:
      '51 Ho\u00e0ng Hoa Th\u00e1m, Ph\u01b0\u1eddng 13, Qu\u1eadn Ph\u00fa Nhu\u1eadn, TP.HCM',
    routeDistance: '25',
    price: '75,000',
    vouchers: '15%',
    priceAfterVoucher: '63,750',
    revenue: '19,125'
  },
  {
    id: 'BUDDYBIKE - 081102',
    tripCode: 'BUDDYBIKE - 081102',
    datetime: '2024-11-08T08:35:00',
    driverName: 'H\u00e0 V\u0129nh Ph\u00fac',
    userName: 'Qu\u00e1ch Th\u1ecb Di\u1ec5m My',
    pickupLocation:
      '10 Nguy\u1ec5n Th\u1ecb Minh Khai, Ph\u01b0\u1eddng T\u00e2n \u0110\u00f4ng Hi\u1ec7p, Th\u00e0nh ph\u1ed1 D\u0129 An, B\u00ecnh D\u01b0\u01a1ng',
    destination:
      'Tr\u01b0\u1eddng \u0110H Giao th\u00f4ng V\u1eadn t\u1ea3i Ph\u00e2n hi\u1ec7u t\u1ea1i TP.HCM',
    routeDistance: '16',
    price: '48,000',
    vouchers: '10%',
    priceAfterVoucher: '43,200',
    revenue: '12,960'
  },
  {
    id: 'BUDDYBIKE - 081103',
    tripCode: 'BUDDYBIKE - 081103',
    datetime: '2024-11-08T09:00:00',
    driverName: 'Hu\u1ef3nh Th\u1ecb Kim Ng\u1ecdc',
    userName: 'Nguy\u1ec5n Quang Anh',
    pickupLocation:
      '152/11 L\u00ea \u0110\u00ecnh Th\u00e1m, ph\u01b0\u1eddng T\u00e2n Qu\u00fd, qu\u1eadn T\u00e2n Ph\u00fa',
    destination:
      '\u0110\u1ea1i h\u1ecdc Kinh t\u1ebf T\u00e0i ch\u00ednh TP.HCM',
    routeDistance: '8.1',
    price: '24,300',
    vouchers: '10%',
    priceAfterVoucher: '21,870',
    revenue: '6,561'
  },
  {
    id: 'BUDDYBIKE - 081104',
    tripCode: 'BUDDYBIKE - 081104',
    datetime: '2024-11-08T13:50:00',
    driverName: 'Qu\u00e1ch \u0110\u1ea1t Ph\u01b0\u1edbc',
    userName: 'L\u00ea D\u01b0\u01a1ng Di\u1ec7u Trinh',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc C\u00f4ng Th\u01b0\u01a1ng TP.HCM',
    destination:
      '67 L\u01b0\u01a1ng \u0110\u1ecbnh C\u1ee7a, ph\u01b0\u1eddng B\u00ecnh An, Qu\u1eadn 2',
    routeDistance: '14',
    price: '42,000',
    vouchers: '20%',
    priceAfterVoucher: '33,600',
    revenue: '10,080'
  },
  {
    id: 'BUDDYBIKE - 081105',
    tripCode: 'BUDDYBIKE - 081105',
    datetime: '2024-11-08T17:25:00',
    driverName: 'La Gia H\u01b0ng',
    userName: 'Th\u1ea1ch Ng\u1ecdc B\u00edch',
    pickupLocation:
      '\u0110\u1ea1i h\u1ecdc Kinh t\u1ebf T\u00e0i ch\u00ednh TP.HCM',
    destination:
      '20 V\u00f5 Ch\u00ed C\u00f4ng, Ph\u01b0\u1eddng Ph\u00fa H\u1eefu, Qu\u1eadn 9, TP.HCM',
    routeDistance: '16',
    price: '48,000',
    vouchers: '5%',
    priceAfterVoucher: '45,600',
    revenue: '13,680'
  },
  {
    id: 'BUDDYBIKE - 091101',
    tripCode: 'BUDDYBIKE - 091101',
    datetime: '2024-11-09T06:30:00',
    driverName: 'H\u1ed3 Kh\u00e1nh Anh',
    userName: 'Ho\u00e0ng Th\u1ecb Qu\u00fd',
    pickupLocation:
      '10 Mai Ch\u00ed Th\u1ecd, Ph\u01b0\u1eddng An Ph\u00fa, Qu\u1eadn 2, TP.HCM',
    destination: '\u0110\u1ea1i h\u1ecdc FPT',
    routeDistance: '13',
    price: '39,000',
    vouchers: '15%',
    priceAfterVoucher: '33,150',
    revenue: '9,945'
  },
  {
    id: 'BUDDYBIKE - 091102',
    tripCode: 'BUDDYBIKE - 091102',
    datetime: '2024-11-09T09:25:00',
    driverName: 'Tr\u1ea7n Thanh B\u1ea3o',
    userName: 'L\u01b0u Th\u1ecb H\u00e0 Trinh',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc Ki\u1ebfn Tr\u00fac TP.HCM',
    destination:
      '32-34 B\u00ecnh Ti\u00ean, Ph\u01b0\u1eddng 4, Qu\u1eadn 6, TP.HCM',
    routeDistance: '8.1',
    price: '24,300',
    vouchers: '5%',
    priceAfterVoucher: '23,085',
    revenue: '6,926'
  },
  {
    id: 'BUDDYBIKE - 091103',
    tripCode: 'BUDDYBIKE - 091103',
    datetime: '2024-11-09T13:50:00',
    driverName: 'Phan Anh Th\u01b0',
    userName: '\u0110\u1eb7ng Th\u1ecb Kim Chi',
    pickupLocation: 'SaiGon Mystery Villa',
    destination: 'Tr\u01b0\u1eddng \u0110H Kinh t\u1ebf \u2013 Lu\u1eadt',
    routeDistance: '13',
    price: '39,000',
    vouchers: '5%',
    priceAfterVoucher: '37,050',
    revenue: '11,115'
  },
  {
    id: 'BUDDYBIKE - 101101',
    tripCode: 'BUDDYBIKE - 101101',
    datetime: '2024-11-10T14:00:00',
    driverName: '\u0110\u1eb7ng T\u00e0i \u0110\u1ee9c',
    userName: 'Qu\u00e1ch \u0110\u1ea1t Ph\u01b0\u1edbc',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc C\u00f4ng Th\u01b0\u01a1ng TP.HCM',
    destination:
      'Chung C\u01b0 Ng\u00f4 Gia T\u1ef1, L\u00f4 K/009 \u0110. S\u01b0 V\u1ea1n H\u1ea1nh, Ph\u01b0\u1eddng 2, Qu\u1eadn 10, H\u1ed3 Ch\u00ed Minh 72519',
    routeDistance: '9.3',
    price: '27,900',
    vouchers: '0%',
    priceAfterVoucher: '27,900',
    revenue: '8,370'
  },
  {
    id: 'BUDDYBIKE - 111101',
    tripCode: 'BUDDYBIKE - 111101',
    datetime: '2024-11-11T06:20:00',
    driverName: 'Qu\u00e1ch Th\u1ecb Di\u1ec5m My',
    userName: 'T\u1ea1 Minh Khang',
    pickupLocation:
      'Tr\u01b0\u1eddng \u0110H Giao th\u00f4ng V\u1eadn t\u1ea3i Ph\u00e2n hi\u1ec7u t\u1ea1i TP.HCM',
    destination:
      '22 H\u1ebbm 303/18 T\u00e2n S\u01a1n Nh\u00ec, ph\u01b0\u1eddng T\u00e2n S\u01a1n Nh\u00ec, qu\u1eadn T\u00e2n Ph\u00fa',
    routeDistance: '9.4',
    price: '28,200',
    vouchers: '15%',
    priceAfterVoucher: '23,970',
    revenue: '7,191'
  },
  {
    id: 'BUDDYBIKE - 111102',
    tripCode: 'BUDDYBIKE - 111102',
    datetime: '2024-11-11T08:50:00',
    driverName: 'Tr\u1ea7n B\u1ea3o Khang',
    userName: 'Nguy\u1ec5n L\u00ea B\u1ea3o L\u00e2m',
    pickupLocation:
      '88 \u0110\u01b0\u1eddng s\u1ed1 7, ph\u01b0\u1eddng B\u00ecnh Tr\u1ecb \u0110\u00f4ng B, qu\u1eadn B\u00ecnh T\u00e2n, H\u1ed3 Ch\u00ed Minh',
    destination:
      '\u0110\u1ea1i h\u1ecdc Th\u1ec3 D\u1ee5c Th\u1ec3 Thao TP.HCM',
    routeDistance: '28',
    price: '84,000',
    vouchers: '15%',
    priceAfterVoucher: '71,400',
    revenue: '21,420'
  },
  {
    id: 'BUDDYBIKE - 111103',
    tripCode: 'BUDDYBIKE - 111103',
    datetime: '2024-11-11T09:10:00',
    driverName: 'L\u00fd L\u1ec7 Anh',
    userName: 'B\u00f9i H\u1eefu Chi',
    pickupLocation:
      '\u0110\u1ea1i h\u1ecdc Khoa h\u1ecdc T\u1ef1 nhi\u00ean - \u0110\u1ea1i h\u1ecdc Qu\u1ed1c Qu\u1ed1c Gia TP.HCM',
    destination:
      'H\u1ebbm 180/9A, \u0110\u01b0\u1eddng Nguy\u1ec5n H\u1eefu C\u1ea3nh, Ph\u01b0\u1eddng 22, Qu\u1eadn B\u00ecnh Th\u1ea1nh, TP.HCM',
    routeDistance: '7.6',
    price: '22,800',
    vouchers: '15%',
    priceAfterVoucher: '19,380',
    revenue: '5,814'
  },
  {
    id: 'BUDDYBIKE - 111104',
    tripCode: 'BUDDYBIKE - 111104',
    datetime: '2024-11-11T12:45:00',
    driverName: 'Tr\u1ea7n Qu\u1ed1c T\u00fa',
    userName: 'L\u00ea V\u0103n Qu\u00fd',
    pickupLocation:
      '17 \u0111\u01b0\u1eddng D7, khu ph\u1ed1 4, ph\u01b0\u1eddng An Kh\u00e1nh, qu\u1eadn 2, TP HCM',
    destination: '\u0110\u1ea1i h\u1ecdc V\u0103n Lang',
    routeDistance: '6.9',
    price: '20,700',
    vouchers: '15%',
    priceAfterVoucher: '17,595',
    revenue: '5,279'
  },
  {
    id: 'BUDDYBIKE - 111105',
    tripCode: 'BUDDYBIKE - 111105',
    datetime: '2024-11-11T13:30:00',
    driverName: 'Ph\u1ea1m Mai Anh',
    userName: 'L\u00ea D\u01b0\u01a1ng Anh T\u00fa',
    pickupLocation: '\u0110\u1ea1i H\u1ecdc M\u1edf TP. H\u1ed3 Ch\u00ed Minh',
    destination:
      'H\u1ebbm 123/17, \u0110\u01b0\u1eddng X\u00f4 Vi\u1ebft Ngh\u1ec7 T\u0129nh, Ph\u01b0\u1eddng 25, Qu\u1eadn B\u00ecnh Th\u1ea1nh, TP.HCM',
    routeDistance: '7.1',
    price: '21,300',
    vouchers: '15%',
    priceAfterVoucher: '18,105',
    revenue: '5,432'
  },
  {
    id: 'BUDDYBIKE - 111106',
    tripCode: 'BUDDYBIKE - 111106',
    datetime: '2024-11-11T16:55:00',
    driverName: 'Tr\u01b0\u01a1ng Qu\u1ed1c H\u01b0ng',
    userName: 'Tri\u1ec7u Th\u1ecb Ki\u1ec1u Trang',
    pickupLocation:
      '185 Nguy\u1ec5n V\u0103n Tr\u1ed7i, Ph\u01b0\u1eddng 10, Qu\u1eadn Ph\u00fa Nhu\u1eadn, TP.HCM',
    destination: '\u0110\u1ea1i h\u1ecdc Ng\u00e2n h\u00e0ng TP.HCM',
    routeDistance: '4.5',
    price: '13,500',
    vouchers: '15%',
    priceAfterVoucher: '11,475',
    revenue: '3,443'
  },
  {
    id: 'BUDDYBIKE - 111107',
    tripCode: 'BUDDYBIKE - 111107',
    datetime: '2024-11-11T17:10:00',
    driverName: '\u0110\u1ed7 Ng\u1ecdc \u00c1nh',
    userName: 'V\u00f5 Kh\u00e1nh Anh',
    pickupLocation:
      '170 H\u1eadu Giang, Ph\u01b0\u1eddng 6, Qu\u1eadn 6, TP.HCM',
    destination: '\u0110\u1ea1i h\u1ecdc N\u00f4ng L\u00e2m TP.HCM',
    routeDistance: '25',
    price: '75,000',
    vouchers: '15%',
    priceAfterVoucher: '63,750',
    revenue: '19,125'
  },
  {
    id: 'BUDDYBIKE - 121101',
    tripCode: 'BUDDYBIKE - 121101',
    datetime: '2024-11-12T06:55:00',
    driverName: 'Mai Ho\u00e0ng \u0110\u1ea1t',
    userName: 'Nguy\u1ec5n H\u1eefu Linh',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc S\u00e0i G\u00f2n',
    destination:
      'H\u1ebbm 43/5A, \u0110\u01b0\u1eddng Ho\u00e0ng Hoa Th\u00e1m, Ph\u01b0\u1eddng 13, Qu\u1eadn T\u00e2n B\u00ecnh, TP.HCM',
    routeDistance: '33',
    price: '99,000',
    vouchers: '20%',
    priceAfterVoucher: '79,200',
    revenue: '23,760'
  },
  {
    id: 'BUDDYBIKE - 121102',
    tripCode: 'BUDDYBIKE - 121102',
    datetime: '2024-11-12T08:30:00',
    driverName: 'Mai Xu\u00e2n Th\u1ecbnh',
    userName: 'H\u1ed3 Thanh Qu\u00fd',
    pickupLocation:
      '247/32 Bis B\u00ecnh Ti\u00ean, Ph\u01b0\u1eddng 8, Qu\u1eadn 6, TP.HCM',
    destination: '\u0110\u1ea1i h\u1ecdc S\u00e0i G\u00f2n',
    routeDistance: '5.6',
    price: '16,800',
    vouchers: '5%',
    priceAfterVoucher: '15,960',
    revenue: '4,788'
  },
  {
    id: 'BUDDYBIKE - 121103',
    tripCode: 'BUDDYBIKE - 121103',
    datetime: '2024-11-12T12:10:00',
    driverName: 'L\u00ea Qu\u1ed1c Duy',
    userName: 'D\u01b0\u01a1ng Thanh B\u00ecnh',
    pickupLocation: 'Vinhomes Grand Park ',
    destination: '\u0110\u1ea1i h\u1ecdc T\u00e0i ch\u00ednh - Marketing',
    routeDistance: '6.1',
    price: '18,300',
    vouchers: '5%',
    priceAfterVoucher: '17,385',
    revenue: '5,216'
  },
  {
    id: 'BUDDYBIKE - 121104',
    tripCode: 'BUDDYBIKE - 121104',
    datetime: '2024-11-12T15:30:00',
    driverName: 'Ph\u1ea1m L\u00ea Qu\u1ed1c Tu\u1ea5n',
    userName: 'L\u00ea Thanh Ki\u00ean',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc C\u00f4ng Nghi\u1ec7p TP.HCM',
    destination: 'Chung c\u01b0 Sky 9 Q9',
    routeDistance: '16',
    price: '48,000',
    vouchers: '5%',
    priceAfterVoucher: '45,600',
    revenue: '13,680'
  },
  {
    id: 'BUDDYBIKE - 121105',
    tripCode: 'BUDDYBIKE - 121105',
    datetime: '2024-11-12T18:30:00',
    driverName: 'L\u01b0u Tr\u1ecdng Nh\u00e2n',
    userName: 'Ph\u1ea1m Ph\u01b0\u1edbc Thi\u1ec7n',
    pickupLocation:
      'H\u1ebbm 3/2A, \u0110\u01b0\u1eddng S\u01b0 V\u1ea1n H\u1ea1nh, Ph\u01b0\u1eddng 12, Qu\u1eadn 10, TP.HCM',
    destination: '\u0110\u1ea1i h\u1ecdc T\u00f4n \u0110\u1ee9c Th\u1eafng',
    routeDistance: '6.9',
    price: '20,700',
    vouchers: '10%',
    priceAfterVoucher: '18,630',
    revenue: '5,589'
  },
  {
    id: 'BUDDYBIKE - 131101',
    tripCode: 'BUDDYBIKE - 131101',
    datetime: '2024-11-13T06:10:00',
    driverName: 'Nguy\u1ec5n Th\u1ecb Thu H\u1eb1ng',
    userName: 'L\u00ea D\u01b0\u01a1ng Di\u1ec7u Trinh',
    pickupLocation: 'Vinhomes Grand Park Q9',
    destination: 'Nh\u00e0 v\u0103n h\u00f3a sinh vi\u00ean TP.HCM',
    routeDistance: '7.9',
    price: '23,700',
    vouchers: '10%',
    priceAfterVoucher: '21,330',
    revenue: '6,399'
  },
  {
    id: 'BUDDYBIKE - 131102',
    tripCode: 'BUDDYBIKE - 131102',
    datetime: '2024-11-13T06:30:00',
    driverName: 'H\u1ed3 Nguy\u1ec5n Minh Tri\u1ebft',
    userName: 'T\u0103ng H\u1ed3ng B\u1ea3o',
    pickupLocation:
      '10 Mai Ch\u00ed Th\u1ecd, Ph\u01b0\u1eddng An Ph\u00fa, Qu\u1eadn 2, TP.HCM',
    destination: '\u0110\u1ea1i h\u1ecdc FPT',
    routeDistance: '13',
    price: '39,000',
    vouchers: '10%',
    priceAfterVoucher: '35,100',
    revenue: '10,530'
  },
  {
    id: 'BUDDYBIKE - 131103',
    tripCode: 'BUDDYBIKE - 131103',
    datetime: '2024-11-13T06:50:00',
    driverName: '\u0110\u1eb7ng Th\u1ecb Lan Anh',
    userName: 'Phan Gia Kh\u00e1nh',
    pickupLocation:
      '12 \u0110\u01b0\u1eddng Phan V\u0103n Tr\u1ecb, Ph\u01b0\u1eddng 7, G\u00f2 V\u1ea5p, H\u1ed3 Ch\u00ed Minh',
    destination: 'Tr\u01b0\u1eddng \u0110H Kinh t\u1ebf \u2013 Lu\u1eadt',
    routeDistance: '18',
    price: '54,000',
    vouchers: '20%',
    priceAfterVoucher: '43,200',
    revenue: '12,960'
  },
  {
    id: 'BUDDYBIKE - 131104',
    tripCode: 'BUDDYBIKE - 131104',
    datetime: '2024-11-13T08:05:00',
    driverName: 'T\u1ea1 Minh Khang',
    userName: 'Tr\u1ea7n Minh Trang',
    pickupLocation:
      '284 \u0110\u01b0\u1eddng \u00c2u C\u01a1, T\u00e2n S\u01a1n Nh\u00ec, T\u00e2n Ph\u00fa, H\u1ed3 Ch\u00ed Minh',
    destination: '\u0110\u1ea1i h\u1ecdc V\u0103n Lang',
    routeDistance: '11',
    price: '33,000',
    vouchers: '5%',
    priceAfterVoucher: '31,350',
    revenue: '9,405'
  },
  {
    id: 'BUDDYBIKE - 131105',
    tripCode: 'BUDDYBIKE - 131105',
    datetime: '2024-11-13T18:10:00',
    driverName: 'T\u1ea1 H\u1ea3i Y\u1ebfn',
    userName: 'M\u1ea1c Quang Huy',
    pickupLocation:
      '\u0110\u1ea1i h\u1ecdc B\u00e1ch khoa \u2013 \u0110\u1ea1i h\u1ecdc Qu\u1ed1c gia TP.HCM.',
    destination:
      'Chung c\u01b0 C7, \u0111\u01b0\u1eddng Man Thi\u1ec7n, T\u0103ng Nh\u01a1n Ph\u00fa A, Qu\u1eadn 9, TP.HCM',
    routeDistance: '23',
    price: '69,000',
    vouchers: '15%',
    priceAfterVoucher: '58,650',
    revenue: '17,595'
  },
  {
    id: 'BUDDYBIKE - 141101',
    tripCode: 'BUDDYBIKE - 141101',
    datetime: '2024-11-14T09:40:00',
    driverName: 'Tr\u1ecbnh Th\u1ecb B\u00edch Huy\u1ec1n',
    userName: 'T\u0103ng Th\u00e0nh \u0110\u1ecbnh',
    pickupLocation: '\u0110\u1ea1i h\u1ecdc y d\u01b0\u1ee3c',
    destination:
      '23/3, \u0110\u01b0\u1eddng L\u00ea V\u0103n Vi\u1ec7t, Ph\u01b0\u1eddng T\u0103ng Nh\u01a1n Ph\u00fa A, TP. Th\u1ee7 \u0110\u1ee9c, TP.HCM',
    routeDistance: '18.3',
    price: '54,900',
    vouchers: '5%',
    priceAfterVoucher: '52,155',
    revenue: '15,647'
  },
  {
    id: 'BUDDYBIKE - 141102',
    tripCode: 'BUDDYBIKE - 141102',
    datetime: '2024-11-14T10:48:00',
    driverName: 'L\u00ea V\u0169 Ng\u1ecdc An',
    userName: 'La Gia H\u01b0ng',
    pickupLocation:
      '\u0110\u1ea1i h\u1ecdc Kinh t\u1ebf T\u00e0i ch\u00ednh TP.HCM',
    destination:
      '46, \u0110\u01b0\u1eddng B\u1ea1ch \u0110\u1eb1ng, Ph\u01b0\u1eddng 24, Qu\u1eadn B\u00ecnh Th\u1ea1nh, TP.HCM',
    routeDistance: '2.7',
    price: '8,100',
    vouchers: '15%',
    priceAfterVoucher: '6,885',
    revenue: '2,066'
  },
  {
    id: 'BUDDYBIKE - 141103',
    tripCode: 'BUDDYBIKE - 141103',
    datetime: '2024-11-14T11:10:00',
    driverName: 'Mai Nguy\u1ec5n Ho\u00e0ng An',
    userName: 'Ho\u00e0ng Ho\u00e0ng Hoa',
    pickupLocation:
      'H\u1ebbm 68/9, \u0110\u01b0\u1eddng L\u00ea V\u0103n S\u1ef9, Ph\u01b0\u1eddng 11, Qu\u1eadn Ph\u00fa Nhu\u1eadn, TP.HCM',
    destination: '\u0110\u1ea1i h\u1ecdc FPT',
    routeDistance: '16.4',
    price: '49,200',
    vouchers: '15%',
    priceAfterVoucher: '41,820',
    revenue: '12,546'
  },
  {
    id: 'BUDDYBIKE - 141104',
    tripCode: 'BUDDYBIKE - 141104',
    datetime: '2024-11-14T12:10:00',
    driverName: 'Tr\u1ea7n Thu H\u00e0',
    userName: 'Ho\u00e0ng H\u1eefu Vi\u1ec7t',
    pickupLocation: 'Vinhomes Grand Park ',
    destination: '\u0110\u1ea1i h\u1ecdc FPT',
    routeDistance: '4.4',
    price: '13,200',
    vouchers: '5%',
    priceAfterVoucher: '12,540',
    revenue: '3,762'
  }
];
export function RecentSales() {
  const driverRevenue = trips.reduce(
    (acc, trip) => {
      // Lấy tên tài xế
      const driver = trip.driverName;

      // Lấy doanh thu của chuyến đi (cần chuyển đổi về số nếu cần)
      const revenue = parseFloat(trip.revenue.replace(/[^0-9.-]+/g, ''));

      // Nếu tài xế đã có trong đối tượng, cộng doanh thu vào
      if (acc[driver]) {
        acc[driver] += revenue;
      } else {
        acc[driver] = revenue;
      }

      return acc;
    },
    {} as Record<string, number>
  );

  const topDrivers = Object.entries(driverRevenue)
    .sort(([, revenueA], [, revenueB]) => revenueB - revenueA) // Sắp xếp giảm dần theo doanh thu
    .slice(0, 5);

  return (
    <div className="space-y-8">
      {topDrivers.map(([driverName, totalRevenue], index) => (
        <div className="flex items-center" key={index}>
          <Avatar className="h-9 w-9">
            <AvatarImage src={`/avatars/${index + 1}.png`} alt="Avatar" />
            <AvatarFallback>{driverName.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{driverName}</p>
            <p className="text-sm text-muted-foreground">
              Doanh thu: {totalRevenue.toLocaleString()} đ
            </p>
          </div>
        </div>
      ))}
      {/* <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>PT</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Phạm Hoàng Thủy Tiên
          </p>
          <p className="text-sm text-muted-foreground">Đại học FPT</p>
        </div>
        <div className="ml-auto font-medium">200.000 đ</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>VL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Võ Nguyễn Hoàng Long
          </p>
          <p className="text-sm text-muted-foreground">Đại học FPT</p>
        </div>
        <div className="ml-auto font-medium">75.000 đ</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>MA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Mai Nguyễn Hoàng An
          </p>
          <p className="text-sm text-muted-foreground">Đại học Y Dược TP.HCM</p>
        </div>
        <div className="ml-auto font-medium">50.000 đ</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>TV</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">
            Trương Hoàng Anh Vũ
          </p>
          <p className="text-sm text-muted-foreground">Đại học FPT</p>
        </div>
        <div className="ml-auto font-medium">30.000 đ</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>LH</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Lê Gia Hân</p>
          <p className="text-sm text-muted-foreground">Đại học FPT</p>
        </div>
        <div className="ml-auto font-medium">30.000 đ</div>
      </div> */}
    </div>
  );
}
