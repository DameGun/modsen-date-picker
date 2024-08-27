import { CalendarType, WeekStartDay } from '@/constants/calendar';
import { Calendar, CalendarLimitations } from './calendar';
import { HolidaysProps } from './holidays';

interface WeekHeaderProps {
  weekStartDay: WeekStartDay;
}

interface DatePickerProps extends Calendar, WeekHeaderProps, HolidaysProps, CalendarLimitations {
  type: CalendarType.Date;
  chooseWeekends?: boolean;
  withTodoList?: boolean;
}

export type { DatePickerProps, WeekHeaderProps };
