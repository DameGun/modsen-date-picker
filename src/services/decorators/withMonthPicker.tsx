import { ComponentType, useCallback, useContext, useMemo } from 'react';
import { CalendarType } from '@/constants/calendar';
import { PlaceholderMaskType } from '@/constants/input';
import type { CalendarLimitations, CalendarProps } from '@/types/calendar';
import type { MonthPickerProps } from '@/types/monthPicker';
import { getCalendarHeaderText } from '@/utils/calendarHeader';
import { getCalendarMonths } from '@/utils/calendarMonths';
import { checkMonthPickerInput, parseMonthPickerInput } from '@/utils/inputMask';
import { getMonthYearDateString } from '@/utils/localeDate';
import { DatePickerContext } from '../context/datePickerContext';

export default function withMonthPicker(
  WrappedComponent: ComponentType<CalendarProps & CalendarLimitations>
) {
  const MonthPicker = ({ type = CalendarType.Month, minDate, maxDate }: MonthPickerProps) => {
    const { currentDate, setCurrentDate, handleChange } = useContext(DatePickerContext);
    const calendarMonths = useMemo(() => getCalendarMonths(currentDate), [currentDate]);
    const headerText = useMemo(() => getCalendarHeaderText(type, currentDate), [currentDate]);

    const handleNextYear = useCallback(() => {
      const newDate = new Date(currentDate);
      newDate.setFullYear(currentDate.getFullYear() + 1);

      setCurrentDate(newDate);
    }, [currentDate]);

    const handlePreviousYear = useCallback(() => {
      const newDate = new Date(currentDate);
      newDate.setFullYear(currentDate.getFullYear() - 1);

      setCurrentDate(newDate);
    }, [currentDate]);

    const handleInput = useCallback((newDate: string) => {
      const formattedInput = checkMonthPickerInput(newDate);
      const formattedInputAsDate = parseMonthPickerInput(formattedInput);

      handleChange(formattedInputAsDate, formattedInput);
    }, []);

    const handleClick = useCallback((newDate: string) => {
      const formattedInputAsDate = new Date(newDate);
      const formattedInput = getMonthYearDateString(formattedInputAsDate);

      handleChange(formattedInputAsDate, formattedInput);
    }, []);

    return (
      <WrappedComponent
        type={type}
        items={calendarMonths}
        headerText={headerText}
        onNext={handleNextYear}
        onPrevious={handlePreviousYear}
        onInputChange={handleInput}
        onItemClick={handleClick}
        minDate={minDate}
        maxDate={maxDate}
        placeholderMask={PlaceholderMaskType[type]}
      />
    );
  };

  return MonthPicker;
}
