import { CalendarItemType } from '@/types/calendar';
import { HolidayItem } from '@/types/holidays';

export function parseHolidaysInCalendarItems(holidays: HolidayItem[], items: CalendarItemType[]) {
  const newItems = [...items];

  for (let i = 0; i < newItems.length; i++) {
    const findHoliday = holidays.find(
      ({ date }) => new Date(date).toDateString() === new Date(newItems[i].id).toDateString()
    );

    if (findHoliday) {
      newItems[i].holiday = { ...findHoliday };
    } else {
      newItems[i].holiday = undefined;
    }
  }

  return newItems;
}
