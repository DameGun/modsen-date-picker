import { ComponentType, useContext, useEffect, useMemo } from 'react';
import type { CalendarLimitations, CalendarProps } from '@/types/calendar';
import { checkDateMax, checkDateMin, checkMinMaxItems } from '@/utils/dateLimitations';
import { DatePickerContext } from '../context/datePickerContext';

export default function withMinMaxDate(WrappedComponent: ComponentType<CalendarProps>) {
  const MinMaxDate = ({
    type,
    minDate,
    maxDate,
    items,
    headerText,
    ...props
  }: CalendarProps & CalendarLimitations) => {
    const { currentDate, setCurrentDate } = useContext(DatePickerContext);
    const isPrevMin = useMemo(
      () => checkDateMin(currentDate, type, minDate, headerText),
      [minDate, currentDate]
    );
    const isNextMax = useMemo(
      () => checkDateMax(currentDate, type, maxDate, headerText),
      [minDate, currentDate]
    );
    const itemsCheck = useMemo(
      () => checkMinMaxItems(items, minDate, maxDate),
      [minDate, maxDate, items]
    );

    useEffect(() => {
      if (minDate && currentDate < minDate) {
        setCurrentDate(minDate);
      } else if (maxDate && currentDate > maxDate) {
        setCurrentDate(maxDate);
      }
    }, [minDate, maxDate, currentDate]);

    return (
      <WrappedComponent
        {...props}
        type={type}
        headerText={headerText}
        items={itemsCheck}
        disablePreviousButton={isPrevMin}
        disableNextButton={isNextMax}
      />
    );
  };

  return MinMaxDate;
}
