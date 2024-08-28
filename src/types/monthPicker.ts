import { CalendarType } from '@/constants/calendar';
import { Calendar, CalendarLimitations } from './calendar';

interface MonthPickerProps extends Calendar, CalendarLimitations {
  type: CalendarType.Month;
}

export type { MonthPickerProps };
