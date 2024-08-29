import { ArgTypes } from 'storybook/internal/types';
import { CalendarType } from '@/constants/calendar';
import DatePickerCreator from '@/services/datePickerCreator';
import type { CalendarCreatorProps } from '@/types/calendar';
import type { DatePickerProps } from '@/types/datePicker';
import type { MonthPickerProps } from '@/types/monthPicker';
import type { YearPickerProps } from '@/types/yearPicker';

export const baseArgsType: Partial<ArgTypes<CalendarCreatorProps>> = {
  minDate: {
    control: 'date',
  },
  maxDate: {
    control: 'date',
  },
  withRangePicker: {
    control: 'boolean',
  },
  customTheme: {
    control: 'object',
  },
};

export const DatePickerCreatorTemplate = (args: CalendarCreatorProps) => {
  if (args.type === CalendarType.Date) {
    const datePickerArgs = args as DatePickerProps;
    return (
      <DatePickerCreator
        {...datePickerArgs}
        minDate={datePickerArgs.minDate ? new Date(datePickerArgs.minDate) : undefined}
        maxDate={datePickerArgs.maxDate ? new Date(datePickerArgs.maxDate) : undefined}
      />
    );
  }
  if (args.type === CalendarType.Month) {
    const monthPickerArgs = args as MonthPickerProps;
    return (
      <DatePickerCreator
        {...monthPickerArgs}
        minDate={monthPickerArgs.minDate ? new Date(monthPickerArgs.minDate) : undefined}
        maxDate={monthPickerArgs.maxDate ? new Date(monthPickerArgs.maxDate) : undefined}
      />
    );
  }
  if (args.type === CalendarType.Year) {
    const yearPickerArgs = args as YearPickerProps;
    return (
      <DatePickerCreator
        {...yearPickerArgs}
        minDate={yearPickerArgs.minDate ? new Date(yearPickerArgs.minDate) : undefined}
        maxDate={yearPickerArgs.maxDate ? new Date(yearPickerArgs.maxDate) : undefined}
      />
    );
  }

  return <DatePickerCreator {...args} />;
};
