import { CalendarItemType } from '@/types/calendar';
import { getFullDateString } from './localeDate';

export function getCalendarYears(currentDate: Date) {
  const currentYear = currentDate.getFullYear();
  const result: CalendarItemType[] = [];

  const startYear = Math.floor(currentYear / 12) * 12;

  for (let i = 0; i < 12; i++) {
    const buffDate = new Date(startYear + i, currentDate.getMonth(), currentDate.getDate());

    result.push({
      id: getFullDateString(buffDate),
      value: buffDate.getFullYear().toString(),
      isDisabled: false,
    });
  }

  return result;
}
