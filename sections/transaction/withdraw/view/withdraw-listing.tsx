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
      id: 'W001',
      datetime: '2024-10-20T08:30:00',
      amount: 1000000,
      accountName: 'Nguyen Van A',
      qrCode: 'qr_code_url_here',
      status: 'Pending',
      customerName: 'Nguyen Van A',
      bankAccountNumber: '1234567890',
      bankName: 'VietcomBank'
    },
    {
      id: 'W002',
      datetime: '2024-10-21T09:15:00',
      amount: 2000000,
      accountName: 'Tran Thi B',
      qrCode: 'qr_code_url_here',
      status: 'Approved',
      customerName: 'Tran Thi B',
      bankAccountNumber: '0987654321',
      bankName: 'Techcombank'
    },
    {
      id: 'W003',
      datetime: '2024-10-22T10:45:00',
      amount: 1500000,
      accountName: 'Le Van C',
      qrCode: 'qr_code_url_here',
      status: 'Rejected',
      customerName: 'Le Van C',
      bankAccountNumber: '1122334455',
      bankName: 'BIDV'
    },
    {
      id: 'W004',
      datetime: '2024-10-23T11:30:00',
      amount: 2500000,
      accountName: 'Pham Minh D',
      qrCode: 'qr_code_url_here',
      status: 'Completed',
      customerName: 'Pham Minh D',
      bankAccountNumber: '2233445566',
      bankName: 'Agribank'
    },
    {
      id: 'W005',
      datetime: '2024-10-24T14:00:00',
      amount: 500000,
      accountName: 'Nguyen Van E',
      qrCode: 'qr_code_url_here',
      status: 'Pending',
      customerName: 'Nguyen Van E',
      bankAccountNumber: '3344556677',
      bankName: 'Sacombank'
    },
    {
      id: 'W006',
      datetime: '2024-10-25T15:20:00',
      amount: 1200000,
      accountName: 'Hoang Thi F',
      qrCode: 'qr_code_url_here',
      status: 'Approved',
      customerName: 'Hoang Thi F',
      bankAccountNumber: '4455667788',
      bankName: 'VPBank'
    },
    {
      id: 'W007',
      datetime: '2024-10-26T16:45:00',
      amount: 3000000,
      accountName: 'Vu Van G',
      qrCode: 'qr_code_url_here',
      status: 'Rejected',
      customerName: 'Vu Van G',
      bankAccountNumber: '5566778899',
      bankName: 'MBBank'
    },
    {
      id: 'W008',
      datetime: '2024-10-27T08:00:00',
      amount: 800000,
      accountName: 'Nguyen Thi H',
      qrCode: 'qr_code_url_here',
      status: 'Completed',
      customerName: 'Nguyen Thi H',
      bankAccountNumber: '6677889900',
      bankName: 'Eximbank'
    },
    {
      id: 'W009',
      datetime: '2024-10-28T09:30:00',
      amount: 1700000,
      accountName: 'Tran Van I',
      qrCode: 'qr_code_url_here',
      status: 'Pending',
      customerName: 'Tran Van I',
      bankAccountNumber: '7788990011',
      bankName: 'SeABank'
    },
    {
      id: 'W010',
      datetime: '2024-10-29T10:00:00',
      amount: 950000,
      accountName: 'Le Thi J',
      qrCode: 'qr_code_url_here',
      status: 'Approved',
      customerName: 'Le Thi J',
      bankAccountNumber: '8899001122',
      bankName: 'OceanBank'
    },
    {
      id: 'W011',
      datetime: '2024-10-30T12:15:00',
      amount: 450000,
      accountName: 'Nguyen Van K',
      qrCode: 'qr_code_url_here',
      status: 'Pending',
      customerName: 'Nguyen Van K',
      bankAccountNumber: '9900112233',
      bankName: 'VIB'
    },
    {
      id: 'W012',
      datetime: '2024-10-31T13:30:00',
      amount: 1300000,
      accountName: 'Pham Thi L',
      qrCode: 'qr_code_url_here',
      status: 'Completed',
      customerName: 'Pham Thi L',
      bankAccountNumber: '1112223334',
      bankName: 'Nam A Bank'
    },
    {
      id: 'W013',
      datetime: '2024-11-01T14:45:00',
      amount: 2000000,
      accountName: 'Tran Van M',
      qrCode: 'qr_code_url_here',
      status: 'Approved',
      customerName: 'Tran Van M',
      bankAccountNumber: '2223334445',
      bankName: 'Lien Viet Post Bank'
    },
    {
      id: 'W014',
      datetime: '2024-11-02T15:00:00',
      amount: 850000,
      accountName: 'Le Van N',
      qrCode: 'qr_code_url_here',
      status: 'Rejected',
      customerName: 'Le Van N',
      bankAccountNumber: '3334445556',
      bankName: 'HDBank'
    },
    {
      id: 'W015',
      datetime: '2024-11-03T16:30:00',
      amount: 1200000,
      accountName: 'Hoang Van O',
      qrCode: 'qr_code_url_here',
      status: 'Completed',
      customerName: 'Hoang Van O',
      bankAccountNumber: '4445556667',
      bankName: 'OCB'
    },
    {
      id: 'W016',
      datetime: '2024-11-04T17:00:00',
      amount: 2700000,
      accountName: 'Nguyen Thi P',
      qrCode: 'qr_code_url_here',
      status: 'Pending',
      customerName: 'Nguyen Thi P',
      bankAccountNumber: '5556667778',
      bankName: 'Techcombank'
    },
    {
      id: 'W017',
      datetime: '2024-11-05T18:15:00',
      amount: 600000,
      accountName: 'Tran Van Q',
      qrCode: 'qr_code_url_here',
      status: 'Approved',
      customerName: 'Tran Van Q',
      bankAccountNumber: '6667778889',
      bankName: 'VietinBank'
    },
    {
      id: 'W018',
      datetime: '2024-11-06T19:30:00',
      amount: 4100000,
      accountName: 'Le Thi R',
      qrCode: 'qr_code_url_here',
      status: 'Rejected',
      customerName: 'Le Thi R',
      bankAccountNumber: '7778889990',
      bankName: 'Nam A Bank'
    },
    {
      id: 'W019',
      datetime: '2024-11-07T20:45:00',
      amount: 3100000,
      accountName: 'Hoang Van S',
      qrCode: 'qr_code_url_here',
      status: 'Completed',
      customerName: 'Hoang Van S',
      bankAccountNumber: '8889990001',
      bankName: 'BIDV'
    },
    {
      id: 'W020',
      datetime: '2024-11-08T21:00:00',
      amount: 2200000,
      accountName: 'Nguyen Van T',
      qrCode: 'qr_code_url_here',
      status: 'Pending',
      customerName: 'Nguyen Van T',
      bankAccountNumber: '9990001112',
      bankName: 'VietcomBank'
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
        <div className="flex items-start justify-between">
          <Heading
            title={`Transaction Withdrawals (${paginatedWithdrawals.length})`}
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
