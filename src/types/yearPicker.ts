import { CalendarType } from '@/constants/calendar';
import { Calendar, CalendarLimitations } from './calendar';

interface YearPickerProps extends Calendar, CalendarLimitations {
  type: CalendarType.Year;
}

export type { YearPickerProps };
