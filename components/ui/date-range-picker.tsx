import React from 'react';
import { DatePicker } from '@/components/ui/date-picker';
import { Options } from 'nuqs';

export interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

interface DateRangePickerProps {
  value: DateRange;
  onChange: <Shallow>(
    value: DateRange | ((old: DateRange) => DateRange | null) | null,
    options?: Options<Shallow> | undefined
  ) => Promise<URLSearchParams>;
}

export function DateRangePicker({ value, onChange }: DateRangePickerProps) {
  return (
    <div className="flex items-center space-x-2">
      <DatePicker
        selected={value.from || null}
        onChange={(date) => onChange({ ...value, from: date as Date })}
        placeholderText="Start Date"
      />
      <span>to</span>
      <DatePicker
        selected={value.to || null}
        onChange={(date) => onChange({ ...value, to: date as Date })}
        placeholderText="End Date"
      />
    </div>
  );
}
