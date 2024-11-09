import { searchParams } from '@/lib/searchparams';
import { useQueryState } from 'nuqs';

export const STATUS_OPTIONS = [
  { value: 'Pending', label: 'Pending' },
  { value: 'Approved', label: 'Approved' },
  { value: 'Rejected', label: 'Rejected' },
  { value: 'Completed', label: 'Completed' }
];

export function useWithdrawTableFilters() {
  const [from, setFrom] = useQueryState(
    'from',
    searchParams.from.withOptions({ shallow: false })
  );
  const [to, setTo] = useQueryState(
    'to',
    searchParams.to.withOptions({ shallow: false })
  );
  const [searchQuery, setSearchQuery] = useQueryState(
    'q',
    searchParams.q
      .withOptions({ shallow: false, throttleMs: 1000 })
      .withDefault('')
  );
  const [page, setPage] = useQueryState(
    'page',
    searchParams.page.withDefault(1)
  );
  const [statusFilter, setStatusFilter] = useQueryState(
    'status',
    searchParams.status.withOptions({ shallow: false }).withDefault('')
  );
  const isAnyFilterActive =
    !!to || !!from || !statusFilter || searchQuery !== '';

  const resetFilters = () => {
    setFrom(null);
    setTo(null);
    setStatusFilter(null);
    setSearchQuery('');
    setPage(1);
  };

  return {
    to,
    setTo,
    from,
    setFrom,
    searchQuery,
    setSearchQuery,
    page,
    setPage,
    isAnyFilterActive,
    resetFilters,
    statusFilter,
    setStatusFilter
  };
}
