import { WeekStartDay } from '@/constants/calendar';
import type { CalendarItemType } from '@/types/calendar';
import { getFullDateString } from './localeDate';

function getDaysForPreviousMonth(year: number, month: number, monthStartDay: number) {
  const result: CalendarItemType[] = [];

  const prevMonthDiff = monthStartDay === 0 ? 6 : monthStartDay - 1;
  const previousMonthDaysCount = new Date(year, month, 0).getDate() + 1;
  let startDay = previousMonthDaysCount - prevMonthDiff;

  for (let i = 0; i < prevMonthDiff; i++, startDay++) {
    const buffDate = new Date(year, month - 1, startDay);

    result.push({
      id: getFullDateString(buffDate),
      value: buffDate.getDate().toString(),
      isDisabled: true,
    });
  }

  return result;
}

function getDaysForNextMonth(year: number, month: number, lastMonthDayOfWeek: number) {
  const result: CalendarItemType[] = [];
  const nextMonthDiff = 7 - lastMonthDayOfWeek;

  for (let i = 0; i < nextMonthDiff; i++) {
    const buffDate = new Date(year, month + 1, i + 1);

    result.push({
      id: getFullDateString(buffDate),
      value: buffDate.getDate().toString(),
      isDisabled: true,
    });
  }

  return result;
}

export function getCalendarDays(
  currentDate: Date,
  weekStartDay: WeekStartDay,
  chooseWeekends?: boolean
): CalendarItemType[] {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthStartDayOfWeek = new Date(year, month, 1).getDay();
  const currentMonthDaysCount = new Date(year, month + 1, 0).getDate();

  const result: CalendarItemType[] = [];

  if (monthStartDayOfWeek !== 1) {
    const monthStartDay = weekStartDay === 'Sunday' ? monthStartDayOfWeek + 1 : monthStartDayOfWeek;

    result.push(...getDaysForPreviousMonth(year, month, monthStartDay));
  }

  for (let i = 0; i < currentMonthDaysCount; i++) {
    const buffDate = new Date(year, month, i + 1);
    const isWeekend = buffDate.getDay() % 6 === 0;

    result.push({
      id: getFullDateString(buffDate),
      value: buffDate.getDate().toString(),
      isDisabled: chooseWeekends ? isWeekend : false,
    });

    if (i === currentMonthDaysCount - 1 && buffDate.getDay() !== 0) {
      const lastMonthDayOfWeek =
        weekStartDay === 'Sunday' ? buffDate.getDay() + 1 : buffDate.getDay();

      result.push(...getDaysForNextMonth(year, month, lastMonthDayOfWeek));
    }
  }

  return result;
}
