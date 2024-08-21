import { CalendarType } from '@/constants/calendar';
import { CalendarItemType } from '@/types/calendar';

const getMonthAndYear = (date: Date) => [date.getMonth(), date.getFullYear()];

export function checkDateMin(
  currentDate: Date,
  type: CalendarType,
  minDate?: Date,
  yearRange?: string
) {
  if (minDate) {
    const prevDate = new Date(currentDate).setMonth(currentDate.getMonth() - 1);

    const [checkMonth, checkYear] = getMonthAndYear(minDate);
    const [prevMonth, prevYear] = getMonthAndYear(new Date(prevDate));

    switch (type) {
      case CalendarType.Date: {
        if (prevYear <= checkYear && prevMonth < checkMonth) return true;
        break;
      }
      case CalendarType.Year: {
        if (yearRange) {
          const [startYear] = yearRange.split('-');
          if (checkYear > +startYear) return true;
        }
        break;
      }
      case CalendarType.Month: {
        if (prevYear <= checkYear) return true;
        break;
      }
      default: {
        return false;
      }
    }
  }

  return false;
}

export function checkDateMax(
  currentDate: Date,
  type: CalendarType,
  maxDate?: Date,
  yearRange?: string
) {
  if (maxDate) {
    const nextDate = new Date(currentDate).setMonth(currentDate.getMonth() + 1);

    const [checkMonth, checkYear] = getMonthAndYear(maxDate);
    const [nextMonth, nextYear] = getMonthAndYear(new Date(nextDate));

    switch (type) {
      case CalendarType.Date: {
        if (nextYear >= checkYear && nextMonth > checkMonth) return true;
        break;
      }
      case CalendarType.Year: {
        if (yearRange) {
          const endYear = yearRange.split('-')[1];
          if (checkYear < +endYear) return true;
        }
        break;
      }
      case CalendarType.Month: {
        if (nextYear >= checkYear) return true;
        break;
      }
      default: {
        return false;
      }
    }
  }

  return false;
}

export function checkMinMaxItems(items: CalendarItemType[], minDate?: Date, maxDate?: Date) {
  if (!minDate && !maxDate) return items;

  const newItems = [...items];

  for (let i = 0; i < newItems.length; i++) {
    const currentItemDate = new Date(newItems[i].id);

    if (minDate && currentItemDate < minDate) newItems[i].isDisabled = true;
    if (maxDate && currentItemDate > maxDate) newItems[i].isDisabled = true;
  }

  return newItems;
}
