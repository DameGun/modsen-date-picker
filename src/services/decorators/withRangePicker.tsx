import { ComponentType, useContext, useMemo, useState } from 'react';
import { ParseCalendarTypeToRangeType } from '@/constants/rangePicker';
import type { CalendarProps, DateRange } from '@/types';
import { parseDateRange, rangeInputValidation } from '@/utils/rangePicker';
import { DatePickerContext } from '../context/datePickerContext';

export default function withRangePicker(WrappedComponent: ComponentType<CalendarProps>) {
  const RangePicker = ({ type, items, ...props }: CalendarProps) => {
    const { handleChange } = useContext(DatePickerContext);
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
    const newItems = useMemo(() => {
      if (dateRange[0] && dateRange[1] && dateRange[0] !== dateRange[1]) {
        return items.map((item) => {
          const parsedAsDate = new Date(item.id);

          if (parsedAsDate.getTime() === dateRange[0]!.getTime())
            return { ...item, isStartRange: true };
          else if (parsedAsDate.getTime() === dateRange[1]!.getTime())
            return { ...item, isEndRange: true };
          else if (parsedAsDate > dateRange[0]! && parsedAsDate < dateRange[1]!)
            return { ...item, isInsideRange: true };

          return item;
        });
      }

      return items;
    }, [dateRange, items]);

    const handleInputRange = (value: string) => {
      const [formattedInput, newDateRange] = rangeInputValidation(type, value);

      if (newDateRange[1] && newDateRange[0].getTime() > newDateRange[1].getTime()) {
        [newDateRange[0], newDateRange[1]] = [newDateRange[1], newDateRange[0]];
      }

      handleChange(new Date(newDateRange[1] ?? ''), formattedInput, newDateRange);
      setDateRange(newDateRange);
    };

    const handleSelectRange = (newDate: string) => {
      const newDateParsed = new Date(newDate);

      if (dateRange[0] && !dateRange[1]) {
        const newDateRange: DateRange =
          dateRange[0] < newDateParsed
            ? [dateRange[0], newDateParsed]
            : [newDateParsed, dateRange[0]];

        const formattedInput = parseDateRange(type, newDateRange);

        setDateRange(newDateRange);
        handleChange(newDateParsed, formattedInput, [newDateRange[0], newDateRange[1]]);
      } else {
        const newDateRange: DateRange = [newDateParsed, null];
        const formattedInput = parseDateRange(type, newDateRange);

        setDateRange(newDateRange);
        handleChange(newDateParsed, formattedInput, newDateRange);
      }
    };

    return (
      <WrappedComponent
        type={type}
        {...props}
        items={newItems}
        onInputChange={handleInputRange}
        onItemClick={handleSelectRange}
        placeholderMask={ParseCalendarTypeToRangeType[type]}
      />
    );
  };

  return RangePicker;
}
