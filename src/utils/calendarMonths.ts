import { CalendarItemType } from '@/types/calendar';
import { getFullDateString, getMonthShortDateString } from './localeDate';

export function getCalendarMonths(currentDate: Date) {
  const currentYear = currentDate.getFullYear();

  const result: CalendarItemType[] = [];

  for (let i = 0; i < 12; i++) {
    const buffDate = new Date(currentYear, i, 1);

    result.push({
      id: getFullDateString(buffDate),
      value: getMonthShortDateString(buffDate),
      isDisabled: false,
    });
  }

  return result;
}
