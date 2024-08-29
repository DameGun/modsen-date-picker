import { CalendarType } from '@/constants/calendar';
import { Calendar, CalendarLimitations } from './calendar';
import { RangePickerProps } from './rangePicker';

interface MonthPickerProps extends Calendar, CalendarLimitations, RangePickerProps {
  type: CalendarType.Month;
}

export type { MonthPickerProps };
