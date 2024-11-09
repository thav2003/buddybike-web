import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Separator } from '@/components/ui/separator';
import { Heading } from '@/components/ui/heading';
import { searchParamsCache } from '@/lib/searchparams';
import { Deposit } from '../deposit-table/columns';
import TransactionDepositTable from '../deposit-table';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Transaction Deposit', link: '/dashboard/transaction/deposit' }
];

export default async function DepositListingPage() {
  const page = searchParamsCache.get('page');
  const pageLimit = searchParamsCache.get('limit');
  const search = searchParamsCache.get('q');
  const from = searchParamsCache.get('from');
  const to = searchParamsCache.get('to');
  const status = searchParamsCache.get('status');

  const mockDeposits: Deposit[] = [
    {
      id: 'D001',
      datetime: '2024-10-20T08:30:00',
      status: 'Completed',
      user: 'Tran Thi B',
      amount: 1000000,
      method: 'Bank Transfer',
      transactionId: 'BT12345'
    },
    {
      id: 'D002',
      datetime: '2024-10-21T14:45:00',
      status: 'Pending',
      user: 'Nguyen Van A',
      amount: 500000,
      method: 'E-wallet',
      transactionId: 'EW67890'
    }
    // Add more mock deposits as needed
  ];

  const filteredDeposits = mockDeposits.filter((deposit) => {
    const depositDate = new Date(deposit.datetime).getTime();
    const fromTime = from ? new Date(from).getTime() : null;
    const toTime = to ? new Date(to).getTime() : null;

    const isWithinDateRange =
      (!fromTime || depositDate >= fromTime) &&
      (!toTime || depositDate <= toTime);

    const matchesSearch =
      !search ||
      deposit.user.toLowerCase().includes(search.toLowerCase()) ||
      deposit.transactionId.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = !status || deposit.status === status;

    return isWithinDateRange && matchesSearch && matchesStatus;
  });

  const startIndex = (page - 1) * pageLimit;
  const endIndex = startIndex + pageLimit;
  const paginatedDeposits = filteredDeposits.slice(startIndex, endIndex);

  return (
    <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading
            title={`Transaction Deposit (${filteredDeposits.length})`}
            description="Manage deposit transactions"
          />
        </div>
        <Separator />
        <TransactionDepositTable
          data={paginatedDeposits}
          totalData={filteredDeposits.length}
        />
      </div>
    </PageContainer>
  );
}
