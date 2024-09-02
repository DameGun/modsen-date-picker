import { CalendarType } from '@/constants/calendar';

export function getInitialDateOnCalendarType(type: CalendarType, initialDate?: Date) {
  const currentDate = new Date();

  switch (type) {
    case CalendarType.Month: {
      if (initialDate) {
        return new Date(initialDate.getFullYear(), initialDate.getMonth(), 1);
      }
      return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    }
    case CalendarType.Year: {
      if (initialDate) {
        return new Date(initialDate.getFullYear(), 1, 1);
      }
      return new Date(currentDate.getFullYear(), 1, 1);
    }
    default: {
      return initialDate ?? currentDate;
    }
  }
}
