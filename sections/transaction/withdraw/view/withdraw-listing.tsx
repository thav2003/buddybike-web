import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Separator } from '@/components/ui/separator';
import { Heading } from '@/components/ui/heading';
import { searchParamsCache } from '@/lib/searchparams';
import { Withdrawal } from '../withdraw-table/columns';
import WithdrawTable from '../withdraw-table';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  {
    title: 'Transaction Withdrawals',
    link: '/dashboard/transaction/withdrawals'
  }
];

export default async function WithdrawListingPage() {
  const page = searchParamsCache.get('page');
  const pageLimit = searchParamsCache.get('limit');
  const search = searchParamsCache.get('q');
  const from = searchParamsCache.get('from');
  const to = searchParamsCache.get('to');
  const status = searchParamsCache.get('status');
  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(from && { from: from }),
    ...(to && { from: to })
  };

  const mockWithdrawals: Withdrawal[] = [
    {
      id: '212031',
      datetime: '2024-10-24 17:41:14',
      amount: 25000,
      accountName: 'Ph\u1ea1m Ph\u01b0\u1edbc Vi\u1ec7t',
      qrCode: 'QR3176',
      status: 'cancelled',
      customerName: 'B\u00f9i Ho\u00e0ng H\u01b0ng',
      bankAccountNumber: '1054550725',
      bankName: 'Sacombank'
    },
    {
      id: '224838',
      datetime: '2024-10-24 05:42:50',
      amount: 30000,
      accountName: 'Ng\u00f4 Th\u1ecb Kim Chi',
      qrCode: 'QR5195',
      status: 'processing',
      customerName: 'Nguy\u1ec5n Ph\u01b0\u1edbc Chi',
      bankAccountNumber: '6916138341',
      bankName: 'OCB'
    },
    {
      id: '577051',
      datetime: '2024-10-24 13:31:44',
      amount: 10000,
      accountName: '\u0110\u1ed7 V\u0103n Trang',
      qrCode: 'QR3490',
      status: 'completed',
      customerName: 'B\u00f9i Kh\u00e1nh Chi',
      bankAccountNumber: '3821234439',
      bankName: 'BIDV'
    },
    {
      id: '191271',
      datetime: '2024-10-24 21:53:31',
      amount: 25000,
      accountName: 'B\u00f9i Thanh H\u01b0ng',
      qrCode: 'QR6352',
      status: 'completed',
      customerName: 'Ph\u1ea1m Kh\u00e1nh Qu\u00e2n',
      bankAccountNumber: '6161109091',
      bankName: 'Nam A Bank'
    },
    {
      id: '803923',
      datetime: '2024-10-24 12:33:55',
      amount: 15000,
      accountName: 'T\u1eeb Kh\u00e1nh Vy',
      qrCode: 'QR2534',
      status: 'processing',
      customerName: 'B\u00f9i Thanh H\u01b0ng',
      bankAccountNumber: '1647660422',
      bankName: 'OCB'
    },
    {
      id: '357248',
      datetime: '2024-10-24 09:10:49',
      amount: 30000,
      accountName: 'L\u00ea D\u01b0\u01a1ng Di\u1ec7u Trinh',
      qrCode: null,
      status: 'completed',
      customerName: '\u0110o\u00e0n L\u01b0u Ng\u1ecdc Linh',
      bankAccountNumber: '7467968318',
      bankName: 'BIDV'
    },
    {
      id: '212078',
      datetime: '2024-10-24 01:14:15',
      amount: 30000,
      accountName: 'Ho\u00e0ng H\u1eefu Vi\u1ec7t',
      qrCode: 'QR9887',
      status: 'pending',
      customerName: '\u0110\u1ed7 Ph\u01b0\u1edbc Nh\u01b0',
      bankAccountNumber: '2896028833',
      bankName: 'Nam A Bank'
    },
    {
      id: '295626',
      datetime: '2024-10-24 15:55:45',
      amount: 15000,
      accountName: 'Ho\u00e0ng Thanh Dung',
      qrCode: null,
      status: 'cancelled',
      customerName: 'Nguy\u1ec5n H\u1ed3ng H\u1ea1nh',
      bankAccountNumber: '8785799521',
      bankName: 'Techcombank'
    },
    {
      id: '883851',
      datetime: '2024-10-25 10:29:16',
      amount: 20000,
      accountName: 'V\u00f5 Ho\u00e0ng Long',
      qrCode: 'QR7785',
      status: 'processing',
      customerName: 'Nguy\u1ec5n Ho\u00e0ng H\u01b0ng',
      bankAccountNumber: '5499557025',
      bankName: 'VPBank'
    },
    {
      id: '194057',
      datetime: '2024-10-25 12:54:27',
      amount: 15000,
      accountName: '\u0110\u1ed7 Minh Chi',
      qrCode: 'QR2117',
      status: 'failed',
      customerName: 'L\u00ea V\u0103n Vi\u1ec7t',
      bankAccountNumber: '3321230378',
      bankName: 'OCB'
    },
    {
      id: '960097',
      datetime: '2024-10-25 05:03:24',
      amount: 20000,
      accountName: 'Ho\u00e0ng Ph\u01b0\u1edbc B\u1ea3o',
      qrCode: null,
      status: 'processing',
      customerName: '\u0110\u1ed7 Thanh Linh',
      bankAccountNumber: '6066602791',
      bankName: 'HDBank'
    },
    {
      id: '755754',
      datetime: '2024-10-25 01:32:21',
      amount: 30000,
      accountName: '\u0110\u1ed7 Ho\u00e0ng Nh\u01b0',
      qrCode: null,
      status: 'completed',
      customerName: '\u0110\u1ed7 Minh Chi',
      bankAccountNumber: '9116623154',
      bankName: 'MBBank'
    },
    {
      id: '993811',
      datetime: '2024-10-25 18:50:31',
      amount: 15000,
      accountName: 'Ho\u00e0ng Kh\u00e1nh Nh\u01b0',
      qrCode: 'QR7952',
      status: 'pending',
      customerName: 'L\u00ea H\u1eefu B\u1ea3o',
      bankAccountNumber: '3985043046',
      bankName: 'Lien Viet Post Bank'
    },
    {
      id: '838133',
      datetime: '2024-10-25 20:44:43',
      amount: 10000,
      accountName: 'L\u00ea V\u0103n Qu\u00fd',
      qrCode: 'QR8748',
      status: 'cancelled',
      customerName: 'Ho\u00e0ng Th\u1ecb S\u01a1n',
      bankAccountNumber: '8383508689',
      bankName: 'Sacombank'
    },
    {
      id: '988786',
      datetime: '2024-10-25 17:17:28',
      amount: 20000,
      accountName: 'Nguy\u1ec5n Kh\u00e1nh Ng\u1ecdc',
      qrCode: 'QR6904',
      status: 'failed',
      customerName: '\u0110\u1eb7ng V\u0103n S\u01a1n',
      bankAccountNumber: '6831519394',
      bankName: 'Lien Viet Post Bank'
    },
    {
      id: '360487',
      datetime: '2024-10-25 16:18:05',
      amount: 20000,
      accountName: 'Tr\u1ea7n Minh Nh\u01b0',
      qrCode: 'QR3813',
      status: 'failed',
      customerName: 'Nguy\u1ec5n Ho\u00e0ng H\u01b0ng',
      bankAccountNumber: '9999072564',
      bankName: 'MBBank'
    },
    {
      id: '491114',
      datetime: '2024-10-25 01:50:21',
      amount: 10000,
      accountName: 'H\u1ed3 H\u1eefu Anh',
      qrCode: 'QR6257',
      status: 'cancelled',
      customerName: '\u0110o\u00e0n L\u01b0u Ng\u1ecdc Linh',
      bankAccountNumber: '9224832136',
      bankName: 'Techcombank'
    },
    {
      id: '808586',
      datetime: '2024-10-25 18:00:10',
      amount: 10000,
      accountName: 'Ph\u1ea1m Minh Vi\u1ec7t',
      qrCode: 'QR1611',
      status: 'pending',
      customerName: 'L\u01b0u Tr\u1ecdng C\u01b0\u1eddng',
      bankAccountNumber: '4845784672',
      bankName: 'Sacombank'
    },
    {
      id: '765359',
      datetime: '2024-10-25 06:39:02',
      amount: 10000,
      accountName: '\u0110\u1eb7ng Kh\u00e1nh Qu\u00e2n',
      qrCode: 'QR8404',
      status: 'pending',
      customerName: 'Nguy\u1ec5n H\u1ed3ng H\u1ea1nh',
      bankAccountNumber: '4913819481',
      bankName: 'BIDV'
    },
    {
      id: '977300',
      datetime: '2024-10-25 15:02:31',
      amount: 30000,
      accountName: 'Nguy\u1ec5n Ho\u00e0ng Kim Ng\u00e2n',
      qrCode: 'QR9569',
      status: 'pending',
      customerName: '\u0110\u1ed7 Thanh Ki\u00ean',
      bankAccountNumber: '3179397456',
      bankName: 'VIB'
    },
    {
      id: '689343',
      datetime: '2024-10-26 23:36:53',
      amount: 15000,
      accountName: 'Ph\u1ea1m Kh\u00e1nh S\u01a1n',
      qrCode: 'QR2049',
      status: 'processing',
      customerName: '\u0110\u1eb7ng V\u0103n Linh',
      bankAccountNumber: '6369349451',
      bankName: 'Sacombank'
    },
    {
      id: '807796',
      datetime: '2024-10-26 15:46:25',
      amount: 20000,
      accountName: 'Ph\u1ea1m Kh\u00e1nh Lan',
      qrCode: null,
      status: 'failed',
      customerName: 'H\u1ed3 Ho\u00e0ng Duy',
      bankAccountNumber: '6770407179',
      bankName: 'Agribank'
    },
    {
      id: '907635',
      datetime: '2024-10-26 21:43:41',
      amount: 25000,
      accountName: 'L\u00ea Minh Hoa',
      qrCode: null,
      status: 'processing',
      customerName: 'Ph\u1ea1m Minh B\u1ea3o',
      bankAccountNumber: '2147201312',
      bankName: 'OCB'
    },
    {
      id: '137770',
      datetime: '2024-10-26 19:53:30',
      amount: 25000,
      accountName: 'V\u00f5 H\u1eefu Dung',
      qrCode: null,
      status: 'processing',
      customerName: 'Tr\u1ea7n Th\u1ecb Qu\u00fd',
      bankAccountNumber: '9841185173',
      bankName: 'OCB'
    },
    {
      id: '156009',
      datetime: '2024-10-26 03:34:38',
      amount: 25000,
      accountName: 'Ph\u1ea1m Th\u1ecb Hoa',
      qrCode: 'QR3231',
      status: 'completed',
      customerName: 'Ph\u1ea1m Kh\u00e1nh Linh',
      bankAccountNumber: '4222826958',
      bankName: 'HDBank'
    },
    {
      id: '894519',
      datetime: '2024-10-26 17:13:34',
      amount: 25000,
      accountName: 'Nguy\u1ec5n Kh\u00e1nh Chi',
      qrCode: null,
      status: 'processing',
      customerName: '\u0110\u1eb7ng Minh S\u01a1n',
      bankAccountNumber: '4674844984',
      bankName: 'Nam A Bank'
    },
    {
      id: '644958',
      datetime: '2024-10-26 08:22:09',
      amount: 30000,
      accountName: 'B\u00f9i H\u1eefu Chi',
      qrCode: null,
      status: 'cancelled',
      customerName: 'Ph\u1ea1m Ho\u00e0ng Dung',
      bankAccountNumber: '7936750831',
      bankName: 'MBBank'
    },
    {
      id: '596137',
      datetime: '2024-10-26 22:21:30',
      amount: 25000,
      accountName: 'Ho\u00e0ng Ho\u00e0ng Hoa',
      qrCode: 'QR6897',
      status: 'cancelled',
      customerName: 'Nguy\u1ec5n Ho\u00e0ng Trang',
      bankAccountNumber: '2331840156',
      bankName: 'VIB'
    },
    {
      id: '538323',
      datetime: '2024-10-26 03:21:22',
      amount: 30000,
      accountName: 'H\u1ed3 Ho\u00e0ng Th\u1ea3o',
      qrCode: 'QR8173',
      status: 'cancelled',
      customerName: '\u0110\u1eb7ng Minh B\u1ea3o',
      bankAccountNumber: '4441718608',
      bankName: 'Lien Viet Post Bank'
    },
    {
      id: '521192',
      datetime: '2024-10-26 12:11:45',
      amount: 30000,
      accountName: '\u0110\u1ed7 Ho\u00e0ng Nh\u01b0',
      qrCode: 'QR3329',
      status: 'cancelled',
      customerName: '\u0110\u1ed7 Ho\u00e0ng Nh\u01b0',
      bankAccountNumber: '6032598576',
      bankName: 'MBBank'
    },
    {
      id: '432281',
      datetime: '2024-10-26 14:57:01',
      amount: 30000,
      accountName: 'Ph\u1ea1m Kh\u00e1nh Lan',
      qrCode: 'QR7055',
      status: 'completed',
      customerName: 'Ho\u00e0ng Thanh Lan',
      bankAccountNumber: '2958789797',
      bankName: 'VietcomBank'
    },
    {
      id: '324761',
      datetime: '2024-10-26 17:43:19',
      amount: 15000,
      accountName: 'V\u00f5 Ho\u00e0ng Long',
      qrCode: 'QR4140',
      status: 'failed',
      customerName: 'Nguy\u1ec5n Kh\u00e1nh Chi',
      bankAccountNumber: '6144683002',
      bankName: 'VPBank'
    },
    {
      id: '213066',
      datetime: '2024-10-26 17:35:39',
      amount: 15000,
      accountName: 'Nguy\u1ec5n Kh\u00e1nh Qu\u00fd',
      qrCode: 'QR5948',
      status: 'completed',
      customerName: 'B\u00f9i Thanh Dung',
      bankAccountNumber: '8262879917',
      bankName: 'OCB'
    },
    {
      id: '328794',
      datetime: '2024-10-26 06:49:51',
      amount: 20000,
      accountName: 'L\u00ea V\u0103n Qu\u00fd',
      qrCode: null,
      status: 'completed',
      customerName: 'Tr\u1ea7n Minh Ki\u00ean',
      bankAccountNumber: '1001764518',
      bankName: 'VIB'
    },
    {
      id: '489440',
      datetime: '2024-10-26 09:45:37',
      amount: 30000,
      accountName: 'H\u1ed3 H\u1eefu Anh',
      qrCode: null,
      status: 'pending',
      customerName: '\u0110\u1ed7 H\u1eefu Anh',
      bankAccountNumber: '4341399319',
      bankName: 'VietcomBank'
    },
    {
      id: '540693',
      datetime: '2024-10-27 13:29:52',
      amount: 30000,
      accountName: 'L\u00ea V\u0169 Ng\u1ecdc An',
      qrCode: null,
      status: 'failed',
      customerName: '\u0110\u1ed7 V\u0103n T\u00fa',
      bankAccountNumber: '8013900561',
      bankName: 'MBBank'
    },
    {
      id: '335515',
      datetime: '2024-10-27 08:10:18',
      amount: 30000,
      accountName: 'B\u00f9i Kh\u00e1nh Linh',
      qrCode: 'QR5545',
      status: 'processing',
      customerName: 'L\u00ea V\u0103n Chi',
      bankAccountNumber: '6692728077',
      bankName: 'BIDV'
    },
    {
      id: '393622',
      datetime: '2024-10-27 06:18:54',
      amount: 10000,
      accountName: 'T\u1eeb Kh\u00e1nh Vy',
      qrCode: 'QR8865',
      status: 'failed',
      customerName: '\u0110\u1ed7 Ph\u01b0\u1edbc Nh\u01b0',
      bankAccountNumber: '5431002553',
      bankName: 'VietcomBank'
    },
    {
      id: '964542',
      datetime: '2024-10-27 18:34:41',
      amount: 30000,
      accountName: 'V\u00f5 Kh\u00e1nh Th\u1ecbnh',
      qrCode: null,
      status: 'pending',
      customerName: 'B\u00f9i Minh T\u00fa',
      bankAccountNumber: '8162329127',
      bankName: 'Agribank'
    },
    {
      id: '947584',
      datetime: '2024-10-27 14:05:56',
      amount: 25000,
      accountName: 'B\u00f9i Thanh H\u01b0ng',
      qrCode: 'QR2462',
      status: 'pending',
      customerName: 'H\u1ed3 Kh\u00e1nh Anh',
      bankAccountNumber: '4868823183',
      bankName: 'Techcombank'
    },
    {
      id: '518242',
      datetime: '2024-10-27 17:47:39',
      amount: 15000,
      accountName: 'Nguy\u1ec5n Ho\u00e0ng Hoa',
      qrCode: null,
      status: 'cancelled',
      customerName: 'Ho\u00e0ng Ho\u00e0ng H\u01b0ng',
      bankAccountNumber: '2779696128',
      bankName: 'Nam A Bank'
    },
    {
      id: '946742',
      datetime: '2024-10-28 06:47:26',
      amount: 30000,
      accountName: 'V\u00f5 Minh Lan',
      qrCode: null,
      status: 'cancelled',
      customerName: '\u0110\u1ed7 V\u0103n Trang',
      bankAccountNumber: '7428264332',
      bankName: 'Techcombank'
    },
    {
      id: '820146',
      datetime: '2024-10-28 09:39:50',
      amount: 15000,
      accountName: 'Ho\u00e0ng Ho\u00e0ng H\u01b0ng',
      qrCode: null,
      status: 'completed',
      customerName: '\u0110\u1eb7ng V\u0103n Anh',
      bankAccountNumber: '6588635879',
      bankName: 'OCB'
    },
    {
      id: '582639',
      datetime: '2024-10-28 16:25:24',
      amount: 30000,
      accountName: 'Nguy\u1ec5n Ho\u00e0ng Hoa',
      qrCode: null,
      status: 'completed',
      customerName: '\u0110\u1eb7ng V\u0103n Anh',
      bankAccountNumber: '4492562712',
      bankName: 'Agribank'
    },
    {
      id: '590625',
      datetime: '2024-10-28 19:28:55',
      amount: 15000,
      accountName: 'L\u01b0u Th\u1ecb H\u00e0 Trinh',
      qrCode: null,
      status: 'pending',
      customerName: 'B\u00f9i H\u1eefu Chi',
      bankAccountNumber: '8854984812',
      bankName: 'Agribank'
    },
    {
      id: '306948',
      datetime: '2024-10-28 19:53:46',
      amount: 30000,
      accountName: 'Ph\u1ea1m H\u1eefu S\u01a1n',
      qrCode: null,
      status: 'completed',
      customerName: 'Ho\u00e0ng Ph\u01b0\u1edbc Th\u1ecbnh',
      bankAccountNumber: '4925489945',
      bankName: 'OCB'
    },
    {
      id: '405176',
      datetime: '2024-10-28 15:47:26',
      amount: 15000,
      accountName: 'B\u00f9i V\u0103n Linh',
      qrCode: null,
      status: 'failed',
      customerName: '\u0110\u1eb7ng Thanh Qu\u00e2n',
      bankAccountNumber: '9477610005',
      bankName: 'OCB'
    },
    {
      id: '552024',
      datetime: '2024-10-28 11:45:42',
      amount: 10000,
      accountName: 'Tr\u1ea7n H\u1eefu Vi\u1ec7t',
      qrCode: null,
      status: 'processing',
      customerName: 'Nguy\u1ec5n H\u1ed3ng H\u1ea1nh',
      bankAccountNumber: '5140068784',
      bankName: 'Agribank'
    },
    {
      id: '616006',
      datetime: '2024-10-28 19:22:48',
      amount: 30000,
      accountName: 'Tr\u1ea7n Kh\u00e1nh Dung',
      qrCode: null,
      status: 'processing',
      customerName: 'L\u00ea V\u0169 Ng\u1ecdc An',
      bankAccountNumber: '8744785582',
      bankName: 'Nam A Bank'
    },
    {
      id: '264567',
      datetime: '2024-10-29 12:10:33',
      amount: 10000,
      accountName: 'L\u00ea Th\u1ecb Ki\u00ean',
      qrCode: 'QR2040',
      status: 'completed',
      customerName: 'Ph\u1ea1m H\u1eefu Ngh\u0129a',
      bankAccountNumber: '9304256454',
      bankName: 'OCB'
    },
    {
      id: '225811',
      datetime: '2024-10-29 12:08:36',
      amount: 10000,
      accountName: 'V\u00f5 Minh Lan',
      qrCode: null,
      status: 'failed',
      customerName: 'Nguy\u1ec5n T\u00f9ng D\u01b0\u01a1ng',
      bankAccountNumber: '1604370422',
      bankName: 'Sacombank'
    },
    {
      id: '275136',
      datetime: '2024-10-29 16:12:51',
      amount: 30000,
      accountName: 'Qu\u00e1ch \u0110\u1ea1t Ph\u01b0\u1edbc',
      qrCode: 'QR2768',
      status: 'failed',
      customerName: 'B\u00f9i Kh\u00e1nh Linh',
      bankAccountNumber: '7103343035',
      bankName: 'Techcombank'
    },
    {
      id: '320670',
      datetime: '2024-10-29 18:47:17',
      amount: 10000,
      accountName: '\u0110o\u00e0n L\u01b0u Ng\u1ecdc Linh',
      qrCode: 'QR3073',
      status: 'failed',
      customerName: 'L\u00ea Th\u1ecb Ki\u00ean',
      bankAccountNumber: '4126861536',
      bankName: 'Nam A Bank'
    },
    {
      id: '724697',
      datetime: '2024-10-29 10:22:41',
      amount: 30000,
      accountName: 'Ho\u00e0ng Ph\u01b0\u1edbc Th\u1ecbnh',
      qrCode: null,
      status: 'processing',
      customerName: 'Nguy\u1ec5n L\u00ea B\u1ea3o L\u00e2m',
      bankAccountNumber: '6458648088',
      bankName: 'VIB'
    },
    {
      id: '358344',
      datetime: '2024-10-29 16:20:40',
      amount: 30000,
      accountName: 'Nguy\u1ec5n L\u00ea B\u1ea3o L\u00e2m',
      qrCode: null,
      status: 'failed',
      customerName: 'Ph\u1ea1m Ho\u00e0ng T\u00fa',
      bankAccountNumber: '4508201805',
      bankName: 'VietcomBank'
    },
    {
      id: '422918',
      datetime: '2024-10-29 17:31:37',
      amount: 30000,
      accountName: 'Nguy\u1ec5n Ho\u00e0ng Chi',
      qrCode: null,
      status: 'processing',
      customerName: 'Nguy\u1ec5n V\u0103n Nh\u01b0',
      bankAccountNumber: '6959855955',
      bankName: 'HDBank'
    },
    {
      id: '504694',
      datetime: '2024-10-29 22:08:37',
      amount: 25000,
      accountName: 'L\u01b0u Th\u1ecb H\u00e0 Trinh',
      qrCode: null,
      status: 'pending',
      customerName: '\u0110\u1eb7ng Kh\u00e1nh Qu\u00e2n',
      bankAccountNumber: '6427839697',
      bankName: 'VietcomBank'
    },
    {
      id: '569202',
      datetime: '2024-10-29 19:52:56',
      amount: 25000,
      accountName: 'Nguy\u1ec5n Ho\u00e0ng Chi',
      qrCode: 'QR8936',
      status: 'failed',
      customerName: 'B\u00f9i Kh\u00e1nh Chi',
      bankAccountNumber: '8201011893',
      bankName: 'Lien Viet Post Bank'
    },
    {
      id: '245044',
      datetime: '2024-10-29 16:34:47',
      amount: 20000,
      accountName: 'V\u00f5 Kh\u00e1nh T\u00fa',
      qrCode: null,
      status: 'completed',
      customerName: 'B\u00f9i Ph\u01b0\u1edbc H\u01b0ng',
      bankAccountNumber: '8819080860',
      bankName: 'Lien Viet Post Bank'
    },
    {
      id: '638330',
      datetime: '2024-10-29 14:41:47',
      amount: 25000,
      accountName: 'Nguy\u1ec5n Ho\u00e0ng H\u01b0ng',
      qrCode: 'QR8000',
      status: 'pending',
      customerName: 'Nguy\u1ec5n Kh\u00e1nh Ng\u1ecdc',
      bankAccountNumber: '6632222065',
      bankName: 'MBBank'
    },
    {
      id: '262752',
      datetime: '2024-10-30 22:59:52',
      amount: 20000,
      accountName: 'Ph\u1ea1m Th\u1ecb Qu\u00e2n',
      qrCode: null,
      status: 'failed',
      customerName: 'T\u0103ng H\u1ed3ng B\u1ea3o',
      bankAccountNumber: '6426025516',
      bankName: 'OCB'
    },
    {
      id: '376379',
      datetime: '2024-10-30 07:50:28',
      amount: 10000,
      accountName: 'Phan L\u00e2m Vi\u00ean',
      qrCode: null,
      status: 'failed',
      customerName: 'Nguy\u1ec5n Ho\u00e0ng Duy',
      bankAccountNumber: '7097864885',
      bankName: 'Agribank'
    },
    {
      id: '532887',
      datetime: '2024-10-30 01:00:26',
      amount: 10000,
      accountName: 'Tr\u1ea7n Ho\u00e0ng Anh',
      qrCode: null,
      status: 'failed',
      customerName: 'Ph\u1ea1m Th\u1ecb Hoa',
      bankAccountNumber: '8412798487',
      bankName: 'Lien Viet Post Bank'
    },
    {
      id: '499447',
      datetime: '2024-10-30 01:30:46',
      amount: 15000,
      accountName: '\u0110\u1ed7 H\u1eefu T\u00fa',
      qrCode: 'QR8394',
      status: 'cancelled',
      customerName: 'Ho\u00e0ng H\u1eefu Vi\u1ec7t',
      bankAccountNumber: '1096405268',
      bankName: 'MBBank'
    },
    {
      id: '918420',
      datetime: '2024-10-30 01:47:02',
      amount: 25000,
      accountName: '\u0110o\u00e0n L\u01b0u Ng\u1ecdc Linh',
      qrCode: null,
      status: 'cancelled',
      customerName: 'Ph\u1ea1m Thanh Lan',
      bankAccountNumber: '5769301429',
      bankName: 'BIDV'
    },
    {
      id: '219813',
      datetime: '2024-10-30 04:11:23',
      amount: 25000,
      accountName: '\u0110\u1ed7 H\u1eefu T\u00fa',
      qrCode: null,
      status: 'pending',
      customerName: 'Ph\u1ea1m H\u1eefu Chi',
      bankAccountNumber: '7584880209',
      bankName: 'VIB'
    },
    {
      id: '654421',
      datetime: '2024-10-30 11:15:14',
      amount: 15000,
      accountName: 'H\u00e0 Ki\u1ec1u Anh',
      qrCode: 'QR2685',
      status: 'processing',
      customerName: 'V\u00f5 Ho\u00e0ng Long',
      bankAccountNumber: '1874792833',
      bankName: 'MBBank'
    },
    {
      id: '481235',
      datetime: '2024-10-30 19:35:43',
      amount: 15000,
      accountName: 'Nguy\u1ec5n L\u00ea B\u1ea3o L\u00e2m',
      qrCode: null,
      status: 'cancelled',
      customerName: 'Nguy\u1ec5n Tr\u1ea7n Trung Anh',
      bankAccountNumber: '8414497263',
      bankName: 'Sacombank'
    },
    {
      id: '622162',
      datetime: '2024-10-30 02:45:44',
      amount: 20000,
      accountName: 'Phan Th\u1ecb Ki\u1ec1u Ng\u00e2n',
      qrCode: 'QR1096',
      status: 'completed',
      customerName: 'Qu\u00e1ch Th\u1ecb Di\u1ec5m My',
      bankAccountNumber: '2974597546',
      bankName: 'VIB'
    },
    {
      id: '147458',
      datetime: '2024-10-31 13:24:53',
      amount: 30000,
      accountName: 'H\u1ed3 Kh\u00e1nh Anh',
      qrCode: 'QR7683',
      status: 'completed',
      customerName: 'Ph\u1ea1m H\u1eefu S\u01a1n',
      bankAccountNumber: '6761055285',
      bankName: 'OCB'
    },
    {
      id: '391149',
      datetime: '2024-10-31 01:59:42',
      amount: 10000,
      accountName: 'V\u00f5 Ho\u00e0ng Long',
      qrCode: null,
      status: 'completed',
      customerName: 'Ph\u1ea1m Kh\u00e1nh Lan',
      bankAccountNumber: '9957337541',
      bankName: 'HDBank'
    },
    {
      id: '144982',
      datetime: '2024-10-31 05:39:11',
      amount: 15000,
      accountName: '\u0110\u1eb7ng Thanh Qu\u00fd',
      qrCode: 'QR4069',
      status: 'cancelled',
      customerName: 'Nguy\u1ec5n H\u1eefu Lan',
      bankAccountNumber: '6924677333',
      bankName: 'VietcomBank'
    },
    {
      id: '490313',
      datetime: '2024-10-31 07:59:33',
      amount: 25000,
      accountName: '\u0110\u1ed7 Ho\u00e0ng S\u01a1n',
      qrCode: 'QR7137',
      status: 'cancelled',
      customerName: 'H\u1ed3 Minh H\u01b0ng',
      bankAccountNumber: '6177046918',
      bankName: 'VietcomBank'
    },
    {
      id: '676249',
      datetime: '2024-10-31 20:58:44',
      amount: 15000,
      accountName: 'H\u1ed3 H\u1eefu Anh',
      qrCode: null,
      status: 'failed',
      customerName: 'Ho\u00e0ng Th\u1ecb S\u01a1n',
      bankAccountNumber: '6799522970',
      bankName: 'BIDV'
    },
    {
      id: '799634',
      datetime: '2024-10-31 03:25:18',
      amount: 25000,
      accountName: 'L\u00ea Ho\u00e0ng Th\u1ecbnh',
      qrCode: 'QR4438',
      status: 'failed',
      customerName: 'Ph\u1ea1m H\u1eefu S\u01a1n',
      bankAccountNumber: '9389954164',
      bankName: 'VietcomBank'
    },
    {
      id: '301239',
      datetime: '2024-10-31 17:29:36',
      amount: 20000,
      accountName: 'H\u1ed3 Minh H\u01b0ng',
      qrCode: 'QR3329',
      status: 'cancelled',
      customerName: 'Nguy\u1ec5n An B\u1ea3o Khang',
      bankAccountNumber: '3613157782',
      bankName: 'VPBank'
    },
    {
      id: '900431',
      datetime: '2024-10-31 17:53:28',
      amount: 20000,
      accountName: 'Nguy\u1ec5n Ph\u01b0\u1edbc Qu\u00e2n',
      qrCode: null,
      status: 'cancelled',
      customerName: 'Nguy\u1ec5n Ho\u00e0ng Duy',
      bankAccountNumber: '3262021972',
      bankName: 'Sacombank'
    },
    {
      id: '598647',
      datetime: '2024-11-01 16:34:33',
      amount: 10000,
      accountName: 'L\u00ea D\u01b0\u01a1ng Anh T\u00fa',
      qrCode: null,
      status: 'pending',
      customerName: 'Ho\u00e0ng H\u1eefu Vi\u1ec7t',
      bankAccountNumber: '6136017655',
      bankName: 'VPBank'
    },
    {
      id: '227143',
      datetime: '2024-11-01 03:30:56',
      amount: 15000,
      accountName: 'B\u00f9i Kh\u00e1nh Linh',
      qrCode: null,
      status: 'processing',
      customerName: 'L\u00ea V\u0103n Vi\u1ec7t',
      bankAccountNumber: '8105311595',
      bankName: 'VIB'
    },
    {
      id: '965412',
      datetime: '2024-11-01 05:40:56',
      amount: 20000,
      accountName: 'V\u00f5 Kh\u00e1nh Th\u1ecbnh',
      qrCode: 'QR9622',
      status: 'completed',
      customerName: '\u0110\u1eb7ng Minh T\u00fa',
      bankAccountNumber: '2457110379',
      bankName: 'Techcombank'
    },
    {
      id: '213192',
      datetime: '2024-11-01 18:49:20',
      amount: 20000,
      accountName: 'Nguy\u1ec5n L\u00ea B\u1ea3o L\u00e2m',
      qrCode: null,
      status: 'processing',
      customerName: '\u0110\u1ed7 Ho\u00e0ng Vi\u1ec7t',
      bankAccountNumber: '8008612824',
      bankName: 'BIDV'
    },
    {
      id: '422400',
      datetime: '2024-11-01 20:21:34',
      amount: 15000,
      accountName: '\u0110\u1ed7 Ho\u00e0ng Nh\u01b0',
      qrCode: null,
      status: 'processing',
      customerName: 'T\u1eeb Kh\u00e1nh Vy',
      bankAccountNumber: '7762358985',
      bankName: 'Agribank'
    },
    {
      id: '993938',
      datetime: '2024-11-01 17:55:45',
      amount: 20000,
      accountName: 'L\u00ea Minh Qu\u00e2n',
      qrCode: 'QR2988',
      status: 'completed',
      customerName: 'L\u00ea Ho\u00e0ng Kim Kh\u00e1nh',
      bankAccountNumber: '7348378669',
      bankName: 'OCB'
    },
    {
      id: '628643',
      datetime: '2024-11-01 18:15:54',
      amount: 20000,
      accountName: 'H\u1ed3 Ho\u00e0ng Th\u1ea3o',
      qrCode: 'QR6488',
      status: 'pending',
      customerName: 'Nguy\u1ec5n L\u00ea B\u1ea3o L\u00e2m',
      bankAccountNumber: '6425753008',
      bankName: 'VPBank'
    },
    {
      id: '832291',
      datetime: '2024-11-01 09:16:08',
      amount: 25000,
      accountName: 'L\u00ea Thanh Ki\u00ean',
      qrCode: null,
      status: 'processing',
      customerName: 'L\u00ea Ho\u00e0ng Th\u1ecbnh',
      bankAccountNumber: '2128062705',
      bankName: 'BIDV'
    },
    {
      id: '508060',
      datetime: '2024-11-01 03:02:05',
      amount: 15000,
      accountName: 'H\u1ed3 Th\u1ecb H\u01b0ng',
      qrCode: 'QR6006',
      status: 'cancelled',
      customerName: '\u0110\u1ed7 H\u1eefu B\u1ea3o',
      bankAccountNumber: '1816613194',
      bankName: 'MBBank'
    },
    {
      id: '827945',
      datetime: '2024-11-01 22:48:18',
      amount: 20000,
      accountName: 'Ph\u1ea1m V\u0103n Duy',
      qrCode: 'QR2843',
      status: 'cancelled',
      customerName: 'B\u00f9i Minh Th\u1ea3o',
      bankAccountNumber: '5628805322',
      bankName: 'Techcombank'
    },
    {
      id: '177741',
      datetime: '2024-11-01 04:32:11',
      amount: 10000,
      accountName: 'Phan B\u1ea3o Ng\u1ecdc',
      qrCode: 'QR4401',
      status: 'pending',
      customerName: 'V\u00f5 Kh\u00e1nh Th\u1ecbnh',
      bankAccountNumber: '8912424058',
      bankName: 'MBBank'
    },
    {
      id: '829781',
      datetime: '2024-11-01 11:39:30',
      amount: 10000,
      accountName: 'L\u00ea Th\u1ecb Duy',
      qrCode: 'QR9177',
      status: 'completed',
      customerName: 'V\u0169 Di\u1ec5m Th\u01b0',
      bankAccountNumber: '8947010508',
      bankName: 'Nam A Bank'
    },
    {
      id: '749506',
      datetime: '2024-11-02 08:50:49',
      amount: 15000,
      accountName: 'V\u00f5 V\u0103n Th\u1ea3o',
      qrCode: 'QR8602',
      status: 'cancelled',
      customerName: 'Nguy\u1ec5n Ph\u01b0\u1edbc Chi',
      bankAccountNumber: '3153900106',
      bankName: 'MBBank'
    },
    {
      id: '148961',
      datetime: '2024-11-02 18:45:16',
      amount: 30000,
      accountName: 'Nguy\u1ec5n V\u0103n B\u1ea3o',
      qrCode: null,
      status: 'pending',
      customerName: 'V\u00f5 Ho\u00e0ng Anh',
      bankAccountNumber: '5364161612',
      bankName: 'BIDV'
    },
    {
      id: '585365',
      datetime: '2024-11-02 21:37:32',
      amount: 10000,
      accountName: 'Ho\u00e0ng H\u1eefu Hoa',
      qrCode: null,
      status: 'processing',
      customerName: 'Ph\u1ea1m Kh\u00e1nh Qu\u00e2n',
      bankAccountNumber: '8558706385',
      bankName: 'VIB'
    },
    {
      id: '643559',
      datetime: '2024-11-02 03:36:54',
      amount: 20000,
      accountName: 'L\u00ea V\u0103n Qu\u00fd',
      qrCode: 'QR9750',
      status: 'completed',
      customerName: 'Nguy\u1ec5n Minh Lan',
      bankAccountNumber: '6074541063',
      bankName: 'Nam A Bank'
    },
    {
      id: '780181',
      datetime: '2024-11-02 19:12:56',
      amount: 30000,
      accountName: 'V\u00f5 Ho\u00e0ng Anh',
      qrCode: null,
      status: 'processing',
      customerName: 'Nguy\u1ec5n Quang Anh',
      bankAccountNumber: '4691570632',
      bankName: 'VPBank'
    },
    {
      id: '151514',
      datetime: '2024-11-02 19:12:17',
      amount: 20000,
      accountName: 'Phan Ti\u1ebfn Ph\u00fac Anh',
      qrCode: null,
      status: 'pending',
      customerName: 'Ph\u1ea1m H\u1eefu Ngh\u0129a',
      bankAccountNumber: '7357186785',
      bankName: 'Sacombank'
    },
    {
      id: '651038',
      datetime: '2024-11-02 16:06:14',
      amount: 25000,
      accountName: 'Nguy\u1ec5n V\u0103n B\u1ea3o',
      qrCode: 'QR4556',
      status: 'processing',
      customerName: '\u0110\u1eb7ng H\u1eefu Qu\u00e2n',
      bankAccountNumber: '7171712916',
      bankName: 'Lien Viet Post Bank'
    },
    {
      id: '890643',
      datetime: '2024-11-03 15:45:18',
      amount: 30000,
      accountName: 'L\u00ea Thanh Hoa',
      qrCode: null,
      status: 'cancelled',
      customerName: 'L\u00ea D\u01b0\u01a1ng Anh T\u00fa',
      bankAccountNumber: '7548347189',
      bankName: 'VPBank'
    },
    {
      id: '823386',
      datetime: '2024-11-03 01:20:40',
      amount: 10000,
      accountName: '\u0110\u1ed7 Thanh Linh',
      qrCode: null,
      status: 'cancelled',
      customerName: '\u0110\u1eb7ng Kh\u00e1nh Qu\u00e2n',
      bankAccountNumber: '3422998955',
      bankName: 'VIB'
    },
    {
      id: '267563',
      datetime: '2024-11-03 03:12:54',
      amount: 15000,
      accountName: 'Nguy\u1ec5n Ho\u00e0ng Vi\u1ec7t',
      qrCode: null,
      status: 'completed',
      customerName: '\u0110\u1ed7 H\u1eefu Anh',
      bankAccountNumber: '1255739568',
      bankName: 'OCB'
    },
    {
      id: '145705',
      datetime: '2024-11-03 00:30:05',
      amount: 15000,
      accountName: '\u0110\u1ed7 Ho\u00e0ng Nh\u01b0',
      qrCode: 'QR7871',
      status: 'processing',
      customerName: 'Tr\u1ea7n V\u0103n Chi',
      bankAccountNumber: '3566835963',
      bankName: 'OCB'
    },
    {
      id: '342802',
      datetime: '2024-11-03 12:56:53',
      amount: 20000,
      accountName: 'Ho\u00e0ng Minh Dung',
      qrCode: 'QR6024',
      status: 'failed',
      customerName: 'L\u00ea Ho\u00e0ng Th\u1ecbnh',
      bankAccountNumber: '1922692099',
      bankName: 'Lien Viet Post Bank'
    },
    {
      id: '336884',
      datetime: '2024-11-04 17:33:22',
      amount: 30000,
      accountName: 'Ph\u1ea1m Th\u1ecb Ki\u00ean',
      qrCode: null,
      status: 'pending',
      customerName: 'L\u00ea Th\u1ecb Th\u1ea3o',
      bankAccountNumber: '9008334936',
      bankName: 'VietcomBank'
    },
    {
      id: '818736',
      datetime: '2024-11-04 20:15:16',
      amount: 15000,
      accountName: 'Nguy\u1ec5n Ho\u00e0ng Chi',
      qrCode: 'QR1583',
      status: 'processing',
      customerName: 'L\u00ea V\u0103n Vi\u1ec7t',
      bankAccountNumber: '5049003179',
      bankName: 'Agribank'
    },
    {
      id: '221156',
      datetime: '2024-11-04 02:04:01',
      amount: 15000,
      accountName: '\u0110\u1eb7ng Th\u1ecb Trang',
      qrCode: 'QR8569',
      status: 'failed',
      customerName: 'Ph\u1ea1m Th\u1ecb Hoa',
      bankAccountNumber: '7016025425',
      bankName: 'Nam A Bank'
    },
    {
      id: '944510',
      datetime: '2024-11-04 04:06:15',
      amount: 10000,
      accountName: 'Ho\u00e0ng Ho\u00e0ng Hoa',
      qrCode: null,
      status: 'failed',
      customerName: 'B\u00f9i Thanh Lan',
      bankAccountNumber: '2062409259',
      bankName: 'Nam A Bank'
    },
    {
      id: '287724',
      datetime: '2024-11-04 20:41:34',
      amount: 25000,
      accountName: '\u0110\u1eb7ng Minh B\u1ea3o',
      qrCode: null,
      status: 'failed',
      customerName: 'Nguy\u1ec5n L\u00ea B\u1ea3o L\u00e2m',
      bankAccountNumber: '7248905153',
      bankName: 'OCB'
    },
    {
      id: '997225',
      datetime: '2024-11-04 22:57:39',
      amount: 10000,
      accountName: 'L\u00ea Th\u1ecb Ki\u00ean',
      qrCode: null,
      status: 'pending',
      customerName: 'Ho\u00e0ng H\u1eefu Hoa',
      bankAccountNumber: '9265803021',
      bankName: 'BIDV'
    },
    {
      id: '664440',
      datetime: '2024-11-04 23:04:22',
      amount: 15000,
      accountName: 'L\u00ea Th\u1ecb Duy',
      qrCode: 'QR7638',
      status: 'completed',
      customerName: '\u0110\u1eb7ng Thanh Hoa',
      bankAccountNumber: '6726250440',
      bankName: 'Nam A Bank'
    },
    {
      id: '453700',
      datetime: '2024-11-04 00:05:08',
      amount: 30000,
      accountName: 'V\u00f5 Kh\u00e1nh Anh',
      qrCode: 'QR7634',
      status: 'completed',
      customerName: 'Nguy\u1ec5n Trung Ngh\u0129a',
      bankAccountNumber: '2560117052',
      bankName: 'MBBank'
    },
    {
      id: '663358',
      datetime: '2024-11-04 10:12:16',
      amount: 10000,
      accountName: 'Phan Th\u1ecb Ki\u1ec1u Ng\u00e2n',
      qrCode: null,
      status: 'failed',
      customerName: 'Ph\u1ea1m Th\u1ecb Qu\u00e2n',
      bankAccountNumber: '9264719316',
      bankName: 'Nam A Bank'
    },
    {
      id: '495364',
      datetime: '2024-11-04 14:42:00',
      amount: 10000,
      accountName: 'Nguy\u1ec5n Thi\u1ec7u Th\u00fay Ng\u00e2n',
      qrCode: 'QR1462',
      status: 'cancelled',
      customerName: 'Nguy\u1ec5n Minh Ki\u00ean',
      bankAccountNumber: '3923825051',
      bankName: 'Techcombank'
    },
    {
      id: '121627',
      datetime: '2024-11-04 21:36:54',
      amount: 30000,
      accountName: 'Tr\u1ea7n Minh Ki\u00ean',
      qrCode: 'QR8227',
      status: 'processing',
      customerName: 'Ph\u1ea1m Kh\u00e1nh Lan',
      bankAccountNumber: '1200128852',
      bankName: 'Techcombank'
    },
    {
      id: '286589',
      datetime: '2024-11-04 02:18:42',
      amount: 30000,
      accountName: 'L\u00ea Ph\u01b0\u1edbc Trang',
      qrCode: 'QR1543',
      status: 'processing',
      customerName: '\u0110\u1ed7 Thanh Linh',
      bankAccountNumber: '6333078270',
      bankName: 'VietcomBank'
    },
    {
      id: '554451',
      datetime: '2024-11-04 11:27:10',
      amount: 20000,
      accountName: 'Nguy\u1ec5n V\u0103n Duy',
      qrCode: 'QR6970',
      status: 'completed',
      customerName: 'Nguy\u1ec5n Ho\u00e0ng Hoa',
      bankAccountNumber: '8738490299',
      bankName: 'VIB'
    },
    {
      id: '685735',
      datetime: '2024-11-05 17:18:16',
      amount: 15000,
      accountName: '\u0110\u1eb7ng Ph\u01b0\u1edbc Hoa',
      qrCode: 'QR6522',
      status: 'cancelled',
      customerName: 'Ph\u1ea1m Ph\u01b0\u01a1ng Trinh',
      bankAccountNumber: '9117854803',
      bankName: 'Nam A Bank'
    },
    {
      id: '893912',
      datetime: '2024-11-05 15:43:45',
      amount: 10000,
      accountName: 'L\u00ea Minh Hoa',
      qrCode: 'QR4442',
      status: 'cancelled',
      customerName: 'Nguy\u1ec5n Ho\u00e0ng Trang',
      bankAccountNumber: '2058648614',
      bankName: 'BIDV'
    },
    {
      id: '749437',
      datetime: '2024-11-05 23:24:56',
      amount: 25000,
      accountName: 'B\u00f9i Kh\u00e1nh Linh',
      qrCode: 'QR8895',
      status: 'completed',
      customerName: 'H\u1ed3 Minh H\u01b0ng',
      bankAccountNumber: '3799739362',
      bankName: 'Lien Viet Post Bank'
    },
    {
      id: '549219',
      datetime: '2024-11-05 18:42:15',
      amount: 20000,
      accountName: 'Tr\u1ea7n Th\u1ecb Th\u1ecbnh',
      qrCode: null,
      status: 'completed',
      customerName: '\u0110\u1eb7ng Th\u1ecb Qu\u00fd',
      bankAccountNumber: '9215056202',
      bankName: 'Techcombank'
    },
    {
      id: '997720',
      datetime: '2024-11-05 02:21:45',
      amount: 15000,
      accountName: '\u0110\u1ed7 Thanh Ki\u00ean',
      qrCode: 'QR1130',
      status: 'cancelled',
      customerName: 'H\u1ed3 Kh\u00e1nh Anh',
      bankAccountNumber: '4563547037',
      bankName: 'Lien Viet Post Bank'
    },
    {
      id: '536349',
      datetime: '2024-11-05 00:29:29',
      amount: 30000,
      accountName: '\u0110\u1eb7ng Minh S\u01a1n',
      qrCode: null,
      status: 'completed',
      customerName: 'Tr\u1ea7n Th\u1ecb Th\u1ecbnh',
      bankAccountNumber: '6050269850',
      bankName: 'HDBank'
    },
    {
      id: '119097',
      datetime: '2024-11-05 14:33:57',
      amount: 25000,
      accountName: 'Tr\u1ea7n V\u0103n Anh',
      qrCode: 'QR1090',
      status: 'cancelled',
      customerName: 'L\u00ea Ho\u00e0ng T\u00fa',
      bankAccountNumber: '8827961230',
      bankName: 'MBBank'
    },
    {
      id: '769980',
      datetime: '2024-11-06 13:59:45',
      amount: 20000,
      accountName: '\u0110\u1ed7 V\u0103n Trang',
      qrCode: null,
      status: 'processing',
      customerName: '\u0110\u1eb7ng Thanh Hoa',
      bankAccountNumber: '9622100627',
      bankName: 'Agribank'
    },
    {
      id: '835790',
      datetime: '2024-11-06 22:17:27',
      amount: 10000,
      accountName: 'Nguy\u1ec5n Ho\u00e0ng H\u01b0ng',
      qrCode: null,
      status: 'completed',
      customerName: 'Ho\u00e0ng H\u1eefu Hoa',
      bankAccountNumber: '9046587617',
      bankName: 'VIB'
    },
    {
      id: '409881',
      datetime: '2024-11-06 03:42:21',
      amount: 15000,
      accountName: 'Nguy\u1ec5n V\u0103n Duy',
      qrCode: null,
      status: 'cancelled',
      customerName: 'Nguy\u1ec5n An B\u1ea3o Khang',
      bankAccountNumber: '2390002347',
      bankName: 'Techcombank'
    },
    {
      id: '716834',
      datetime: '2024-11-06 09:35:23',
      amount: 15000,
      accountName: 'L\u00ea Thanh Qu\u00e2n',
      qrCode: 'QR2878',
      status: 'cancelled',
      customerName: 'Tr\u1ea7n H\u1eefu Vi\u1ec7t',
      bankAccountNumber: '9666059492',
      bankName: 'Sacombank'
    },
    {
      id: '824158',
      datetime: '2024-11-06 20:29:01',
      amount: 30000,
      accountName: 'L\u00ea D\u01b0\u01a1ng Di\u1ec7u Trinh',
      qrCode: null,
      status: 'completed',
      customerName: 'Ph\u1ea1m H\u1eefu Chi',
      bankAccountNumber: '6540335632',
      bankName: 'VPBank'
    },
    {
      id: '996971',
      datetime: '2024-11-06 12:06:57',
      amount: 30000,
      accountName: '\u0110\u1ed7 Thanh Ki\u00ean',
      qrCode: null,
      status: 'failed',
      customerName: 'Phan Gia Kh\u00e1nh',
      bankAccountNumber: '7021362750',
      bankName: 'Techcombank'
    },
    {
      id: '795361',
      datetime: '2024-11-06 06:36:06',
      amount: 25000,
      accountName: 'Nguy\u1ec5n Ho\u00e0ng Qu\u00e2n',
      qrCode: null,
      status: 'cancelled',
      customerName: 'V\u00f5 Kh\u00e1nh Anh',
      bankAccountNumber: '1230110742',
      bankName: 'Agribank'
    },
    {
      id: '988994',
      datetime: '2024-11-06 08:43:14',
      amount: 15000,
      accountName: 'B\u00f9i Kh\u00e1nh Linh',
      qrCode: null,
      status: 'pending',
      customerName: 'H\u1ed3 H\u1eefu Anh',
      bankAccountNumber: '5402565993',
      bankName: 'VPBank'
    },
    {
      id: '733801',
      datetime: '2024-11-06 15:16:44',
      amount: 25000,
      accountName: '\u0110o\u00e0n L\u01b0u Ng\u1ecdc Linh',
      qrCode: 'QR3390',
      status: 'pending',
      customerName: 'L\u00fd Di\u1ec5m Ki\u1ec1u',
      bankAccountNumber: '2589581573',
      bankName: 'Lien Viet Post Bank'
    },
    {
      id: '174092',
      datetime: '2024-11-06 17:12:17',
      amount: 20000,
      accountName: '\u0110\u1ed7 Th\u1ecb H\u01b0ng',
      qrCode: null,
      status: 'cancelled',
      customerName: '\u0110\u1eb7ng Thanh Hoa',
      bankAccountNumber: '6440463763',
      bankName: 'BIDV'
    },
    {
      id: '637902',
      datetime: '2024-11-06 00:13:40',
      amount: 30000,
      accountName: '\u0110\u1eb7ng Minh T\u00fa',
      qrCode: 'QR1701',
      status: 'failed',
      customerName: 'B\u00f9i Ph\u01b0\u1edbc T\u00fa',
      bankAccountNumber: '2744860650',
      bankName: 'Techcombank'
    },
    {
      id: '591679',
      datetime: '2024-11-07 00:55:25',
      amount: 25000,
      accountName: 'V\u00f5 H\u1eefu Dung',
      qrCode: null,
      status: 'cancelled',
      customerName: 'Nguy\u1ec5n V\u0103n B\u1ea3o',
      bankAccountNumber: '4939426759',
      bankName: 'Techcombank'
    },
    {
      id: '168810',
      datetime: '2024-11-07 01:51:51',
      amount: 20000,
      accountName: '\u0110\u1eb7ng H\u1eefu Qu\u00e2n',
      qrCode: null,
      status: 'pending',
      customerName: 'Ph\u1ea1m Kh\u00e1nh Hoa',
      bankAccountNumber: '9266165667',
      bankName: 'Nam A Bank'
    },
    {
      id: '591541',
      datetime: '2024-11-07 07:56:19',
      amount: 20000,
      accountName: 'H\u1ed3 Th\u1ecb Th\u1ecbnh',
      qrCode: null,
      status: 'cancelled',
      customerName: 'B\u00f9i V\u0103n Linh',
      bankAccountNumber: '5438742594',
      bankName: 'OCB'
    },
    {
      id: '736922',
      datetime: '2024-11-07 18:43:35',
      amount: 10000,
      accountName: 'Nguy\u1ec5n Ho\u00e0ng Trang',
      qrCode: 'QR8291',
      status: 'completed',
      customerName: '\u0110\u1ed7 Kh\u00e1nh B\u1ea3o',
      bankAccountNumber: '5786446767',
      bankName: 'Nam A Bank'
    },
    {
      id: '681199',
      datetime: '2024-11-07 16:26:30',
      amount: 15000,
      accountName: 'Ho\u00e0ng Ph\u01b0\u1edbc Linh',
      qrCode: 'QR3933',
      status: 'pending',
      customerName: 'B\u00f9i Ho\u00e0ng Hoa',
      bankAccountNumber: '9604895259',
      bankName: 'MBBank'
    },
    {
      id: '788491',
      datetime: '2024-11-07 22:35:07',
      amount: 15000,
      accountName: 'L\u00ea Thanh Ki\u00ean',
      qrCode: null,
      status: 'processing',
      customerName: 'Ph\u1ea1m Kh\u00e1nh Qu\u00e2n',
      bankAccountNumber: '6589687333',
      bankName: 'HDBank'
    },
    {
      id: '826022',
      datetime: '2024-11-08 01:37:58',
      amount: 10000,
      accountName: 'Ph\u1ea1m H\u1eefu Linh',
      qrCode: 'QR5279',
      status: 'cancelled',
      customerName: 'Ph\u1ea1m Th\u1ecb Ki\u00ean',
      bankAccountNumber: '4685820740',
      bankName: 'VietcomBank'
    },
    {
      id: '999149',
      datetime: '2024-11-08 03:43:55',
      amount: 30000,
      accountName: '\u0110\u1eb7ng Th\u1ecb Trang',
      qrCode: null,
      status: 'cancelled',
      customerName: 'Nguy\u1ec5n Minh Ki\u00ean',
      bankAccountNumber: '3467207298',
      bankName: 'Lien Viet Post Bank'
    },
    {
      id: '216262',
      datetime: '2024-11-08 16:59:26',
      amount: 25000,
      accountName: 'Tr\u1ea7n V\u0103n Chi',
      qrCode: 'QR2618',
      status: 'processing',
      customerName: 'Th\u00e1i Ho\u00e0ng Kim',
      bankAccountNumber: '1272111530',
      bankName: 'Nam A Bank'
    },
    {
      id: '333863',
      datetime: '2024-11-08 17:50:26',
      amount: 30000,
      accountName: 'B\u00f9i Ho\u00e0ng Qu\u00e2n',
      qrCode: null,
      status: 'cancelled',
      customerName: 'L\u00ea D\u01b0\u01a1ng Anh T\u00fa',
      bankAccountNumber: '9015382103',
      bankName: 'Lien Viet Post Bank'
    },
    {
      id: '226293',
      datetime: '2024-11-08 02:20:21',
      amount: 20000,
      accountName: 'Ph\u1ea1m H\u1eefu Chi',
      qrCode: null,
      status: 'pending',
      customerName: 'V\u00f5 Kh\u00e1nh T\u00fa',
      bankAccountNumber: '9066668180',
      bankName: 'Techcombank'
    },
    {
      id: '406201',
      datetime: '2024-11-08 04:02:06',
      amount: 30000,
      accountName: 'Tr\u1ea7n V\u0103n Chi',
      qrCode: 'QR9628',
      status: 'completed',
      customerName: 'Nguy\u1ec5n Thi\u1ec7u Th\u00fay Ng\u00e2n',
      bankAccountNumber: '7698384656',
      bankName: 'Nam A Bank'
    }
  ];

  // Implement filtering logic here (similar to the deposit listing, but for withdrawals)
  let filteredWithdrawals = [...mockWithdrawals];

  // Filter by search query (if any)
  if (filters.search) {
    const searchQuery = filters.search.toLowerCase();
    filteredWithdrawals = filteredWithdrawals.filter(
      (withdrawal) =>
        withdrawal.customerName.toLowerCase().includes(searchQuery) ||
        withdrawal.accountName.toLowerCase().includes(searchQuery) ||
        withdrawal.bankName.toLowerCase().includes(searchQuery) ||
        withdrawal.bankAccountNumber.includes(searchQuery) ||
        withdrawal.status.toLowerCase().includes(searchQuery)
    );
  }

  // Filter by date range (from and to)
  if (filters.from) {
    const fromDate = filters.from ? new Date(filters.from) : new Date(0); // default to epoch start

    filteredWithdrawals = filteredWithdrawals.filter((withdrawal) => {
      const withdrawalDate = new Date(withdrawal.datetime);
      return withdrawalDate >= fromDate;
    });
  }
  if (filters.to) {
    const toDate = filters.to ? new Date(filters.to) : new Date(); // default to now

    filteredWithdrawals = filteredWithdrawals.filter((withdrawal) => {
      const withdrawalDate = new Date(withdrawal.datetime);
      return withdrawalDate <= toDate;
    });
  }
  // Filter by status (if any)
  filteredWithdrawals = filteredWithdrawals.filter((withdrawal) => {
    if (!status) return true;
    return withdrawal.status === status;
  });

  // Pagination
  const startIndex = (page - 1) * pageLimit;
  const endIndex = startIndex + pageLimit;
  const paginatedWithdrawals = filteredWithdrawals.slice(startIndex, endIndex);

  return (
    <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="total-amount">
          Total Withdrawal Amount:{' '}
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
          }).format(
            mockWithdrawals
              .filter((item) => item.status === 'completed') // Lọc các mục có status là 'completed'
              .reduce((total, item) => total + item.amount, 0) // Tính tổng số tiền
          )}
        </div>

        <div className="flex items-start justify-between">
          <Heading
            title={`Transaction Withdrawals (${mockWithdrawals.length})`}
            description="Manage customer withdrawal requests"
          />
        </div>
        <Separator />
        <WithdrawTable
          data={paginatedWithdrawals}
          totalData={mockWithdrawals.length}
        />
      </div>
    </PageContainer>
  );
}
