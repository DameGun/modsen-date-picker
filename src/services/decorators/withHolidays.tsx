import { ComponentType, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { CalendarCountries } from '@/constants/holidays';
import type { CalendarLimitations, CalendarProps } from '@/types/calendar';
import type { HolidayItem, HolidaysProps } from '@/types/holidays';
import { parseHolidaysInCalendarItems } from '@/utils/holidays';
import { fetchHolidaysByCountryCode } from '../api/holidaysApi';
import { DatePickerContext } from '../context/datePickerContext';

export default function withHolidays(
  WrappedComponent: ComponentType<CalendarProps & CalendarLimitations>
) {
  const HolidaysComponent = ({
    holidaysCountry: country,
    items,
    ...props
  }: CalendarProps & HolidaysProps & CalendarLimitations) => {
    const { currentDate } = useContext(DatePickerContext);
    const [holidays, setHolidays] = useState<HolidayItem[]>([]);
    const [currentYear, setCurrentYear] = useState<number>();
    const itemsWithHolidays = useMemo(
      () => parseHolidaysInCalendarItems(holidays, items),
      [currentYear, holidays, items]
    );

    const getHolidays = useCallback(
      async (country: keyof typeof CalendarCountries) => {
        const response = await fetchHolidaysByCountryCode(country, currentDate.getFullYear());

        if (response) setHolidays([...response]);
      },
      [currentDate]
    );

    useEffect(() => {
      const nextYear = currentDate.getFullYear();

      if (nextYear !== currentYear && country) {
        setCurrentYear(nextYear);
        getHolidays(country);
      }
    }, [currentDate]);

    useEffect(() => {
      if (country) getHolidays(country);
    }, [country]);

    return <WrappedComponent {...props} items={itemsWithHolidays} />;
  };

  return HolidaysComponent;
}
