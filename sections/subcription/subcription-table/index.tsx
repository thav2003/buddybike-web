'use client';

import { DataTable } from '@/components/ui/table/data-table';
import { DataTableResetFilter } from '@/components/ui/table/data-table-reset-filter';
import { DataTableSearch } from '@/components/ui/table/data-table-search';
import {
  STATUS_OPTIONS,
  useSubcriptionTableFilters
} from './use-subcription-table-filters';
import { columns, Trip } from './columns';
import { DatePicker } from '@/components/ui/date-picker';
import { DataTableFilterBox } from '@/components/ui/table/data-table-filter-box';

export default function SubcriptionTable({
  data,
  totalData
}: {
  data: Trip[];
  totalData: number;
}) {
  const {
    to,
    setTo,
    from,
    setFrom,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setPage,
    setSearchQuery,
    statusFilter,
    setStatusFilter
  } = useSubcriptionTableFilters();

  return (
    <div className="space-y-4 ">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="rider"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />

        <div className="flex items-center space-x-2">
          <DatePicker
            selected={from}
            onChange={setFrom}
            placeholderText="Start Date"
          />
          <span>to</span>
          <DatePicker
            selected={to}
            onChange={setTo}
            placeholderText="End Date"
          />
        </div>
        <DataTableFilterBox
          filterKey="status"
          title="Status"
          options={STATUS_OPTIONS}
          setFilterValue={setStatusFilter}
          filterValue={statusFilter}
        />
        <DataTableResetFilter
          isFilterActive={isAnyFilterActive}
          onReset={resetFilters}
        />
      </div>
      <DataTable columns={columns} data={data} totalItems={totalData} />
    </div>
  );
}
