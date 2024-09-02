import { CalendarCountries } from '@/constants/holidays';

type HolidayItem = {
  date: Date;
  name: string;
};

interface HolidaysProps {
  holidaysCountry?: keyof typeof CalendarCountries;
  customHolidays?: HolidayItem[];
}

export type { HolidayItem, HolidaysProps };
