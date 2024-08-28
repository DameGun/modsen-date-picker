import { CalendarType } from '@/constants/calendar';
import { Calendar, CalendarLimitations } from './calendar';
import { RangePickerProps } from './rangePicker';
import { UserStylingProps } from './styling';

interface YearPickerProps
  extends Calendar,
    CalendarLimitations,
    RangePickerProps,
    UserStylingProps {
  type: CalendarType.Year;
}

export type { YearPickerProps };
