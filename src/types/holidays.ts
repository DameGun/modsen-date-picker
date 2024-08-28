import { CalendarCountries } from '@/constants/holidays';

type HolidayItem = {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
};

interface HolidaysProps {
  holidaysCountry?: keyof typeof CalendarCountries;
}

export type { HolidayItem, HolidaysProps };
