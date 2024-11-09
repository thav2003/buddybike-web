import React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Options } from 'nuqs';
import { Icons } from '../icons';

interface DatePickerProps {
  selected: Date | null;
  onChange: <Shallow>(
    value: Date | ((old: Date | null) => Date | null) | null,
    options?: Options<Shallow> | undefined
  ) => Promise<URLSearchParams>;
  placeholderText: string;
}

export function DatePicker({
  selected,
  onChange,
  placeholderText
}: DatePickerProps) {
  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-[240px] justify-start text-left font-normal',
              !selected && 'text-muted-foreground'
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selected ? (
              format(selected, 'PPP')
            ) : (
              <span>{placeholderText}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={selected ? selected : undefined}
            onSelect={(e) => {
              onChange(e ? e : null);
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {selected && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0"
          onClick={() => onChange(null)}
        >
          <Icons.close className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
