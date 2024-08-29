import { CalendarType } from '@/constants/calendar';
import { Calendar, CalendarLimitations } from './calendar';
import { RangePickerProps } from './rangePicker';

interface YearPickerProps extends Calendar, CalendarLimitations, RangePickerProps {
  type: CalendarType.Year;
}

export type { YearPickerProps };
