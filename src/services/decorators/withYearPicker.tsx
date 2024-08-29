import { ComponentType, useContext, useMemo } from 'react';
import { CalendarType } from '@/constants/calendar';
import { PlaceholderMaskType } from '@/constants/input';
import { CALENDAR_LIST_SECONDARY_LENGTH } from '@/constants/layout';
import type { CalendarLimitations, CalendarProps } from '@/types/calendar';
import type { YearPickerProps } from '@/types/yearPicker';
import { getCalendarHeaderTextYearRange } from '@/utils/calendarHeader';
import { getCalendarYears } from '@/utils/calendarYears';
import { checkYearPickerInput, parseYearPickerInput } from '@/utils/inputMask';
import { DatePickerContext } from '../context/datePickerContext';

export default function withYearPicker(
  WrappedComponent: ComponentType<CalendarProps & CalendarLimitations>
) {
  const YearPicker = ({ type = CalendarType.Year, minDate, maxDate }: YearPickerProps) => {
    const { currentDate, setCurrentDate, handleChange } = useContext(DatePickerContext);
    const calendarYears = useMemo(
      () => getCalendarYears(currentDate),
      [currentDate, minDate, maxDate]
    );
    const headerText = useMemo(
      () => getCalendarHeaderTextYearRange(calendarYears),
      [calendarYears]
    );

    console.log(calendarYears);

    function handlePreviousYearRange() {
      const newDate = new Date(currentDate);
      newDate.setFullYear(currentDate.getFullYear() - CALENDAR_LIST_SECONDARY_LENGTH);

      setCurrentDate(newDate);
    }

    function handleNextYearRange() {
      const newDate = new Date(currentDate);
      newDate.setFullYear(currentDate.getFullYear() + CALENDAR_LIST_SECONDARY_LENGTH);

      setCurrentDate(newDate);
    }

    const handleInput = (newDate: string) => {
      const formattedInput = checkYearPickerInput(newDate);
      const formattedInputAsDate = parseYearPickerInput(formattedInput);

      handleChange(formattedInputAsDate, formattedInput);
    };

    function handleClick(newDate: string) {
      const formattedInput = new Date(newDate).getFullYear().toString();
      const formattedInputAsDate = parseYearPickerInput(formattedInput);

      handleChange(formattedInputAsDate, formattedInput);
    }

    return (
      <WrappedComponent
        type={type}
        items={calendarYears}
        headerText={headerText}
        onPrevious={handlePreviousYearRange}
        onNext={handleNextYearRange}
        onInputChange={handleInput}
        onItemClick={handleClick}
        minDate={minDate}
        maxDate={maxDate}
        placeholderMask={PlaceholderMaskType[type]}
      />
    );
  };

  return YearPicker;
}
