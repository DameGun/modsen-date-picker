import { CalendarType, WeekStartDay } from '@/constants/calendar';
import { Calendar, CalendarLimitations } from './calendar';
import { HolidaysProps } from './holidays';
import { RangePickerProps } from './rangePicker';

interface WeekHeaderProps {
  weekStartDay: WeekStartDay;
}

interface DatePickerProps
  extends Calendar,
    WeekHeaderProps,
    HolidaysProps,
    CalendarLimitations,
    RangePickerProps {
  type: CalendarType.Date;
  chooseWeekends?: boolean;
  withTodoList?: boolean;
}

export type { DatePickerProps, WeekHeaderProps };
