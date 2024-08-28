import { CalendarType } from '@/constants/calendar';

export function getInitialDateOnCalendarType(type: CalendarType) {
  const currentDate = new Date();

  if (type === CalendarType.Month || type === CalendarType.Year) {
    return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  } else {
    return currentDate;
  }
}
