import { CalendarCountries, HOLIDAYS_API_URL } from '@/constants/holidays';
import type { HolidayItem } from '@/types/holidays';

export async function fetchHolidaysByCountryCode(
  countryCode: keyof typeof CalendarCountries,
  year: number
) {
  const requestUrl = `${HOLIDAYS_API_URL}/${year}/${CalendarCountries[countryCode]}`;

  try {
    const response = await fetch(requestUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch holidays');
    }
    const data: HolidayItem[] = await response.json();
    return data;
  } catch (err) {
    console.error('Error fetching holidays:', err);
  }
}
