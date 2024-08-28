import { CalendarType } from '@/constants/calendar';
import { CalendarItemType } from '@/types/calendar';
import { getMonthLongYearDateString, getYearDateString } from './localeDate';

export function getCalendarHeaderText(type: CalendarType, date: Date) {
  switch (type) {
    case CalendarType.Month: {
      return getYearDateString(date);
    }
    case CalendarType.Date: {
      return getMonthLongYearDateString(date);
    }
    default: {
      return getMonthLongYearDateString(date);
    }
  }
}

export function getCalendarHeaderTextYearRange(calendarYears: CalendarItemType[]) {
  const startYear = calendarYears[0].value;
  const endYear = calendarYears[calendarYears.length - 1].value;

  return `${startYear} - ${endYear}`;
}
