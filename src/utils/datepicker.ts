import { weekDays, WeekStartDay } from '@/constants/calendar';

export function getWeekDays(weekStartDay: WeekStartDay) {
  return weekStartDay === WeekStartDay.Monday
    ? weekDays
    : [weekDays[weekDays.length - 1], ...weekDays.slice(0, -1)];
}
