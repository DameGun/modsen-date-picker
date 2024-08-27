import { CalendarType } from '@/constants/calendar';

export function getInitialDateOnCalendarType(type: CalendarType) {
  const currentDate = new Date();

  switch (type) {
    case CalendarType.Month: {
      return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    }
    case CalendarType.Year: {
      return new Date(currentDate.getFullYear(), 1, 1);
    }
    default: {
      return currentDate;
    }
  }
}
