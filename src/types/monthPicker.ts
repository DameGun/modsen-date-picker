import { CalendarType } from '@/constants/calendar';
import { Calendar, CalendarLimitations } from './calendar';
import { RangePickerProps } from './rangePicker';
import { UserStylingProps } from './styling';

interface MonthPickerProps
  extends Calendar,
    CalendarLimitations,
    RangePickerProps,
    UserStylingProps {
  type: CalendarType.Month;
}

export type { MonthPickerProps };
