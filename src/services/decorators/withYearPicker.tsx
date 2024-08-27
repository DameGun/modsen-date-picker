import { ComponentType, useContext, useMemo } from 'react';
import { CalendarType, ChangeActionType } from '@/constants/calendar';
import { CALENDAR_LIST_SECONDARY_LENGTH } from '@/constants/layout';
import type { CalendarLimitations, CalendarProps } from '@/types/calendar';
import type { YearPickerProps } from '@/types/yearPicker';
import { getCalendarHeaderTextYearRange } from '@/utils/calendarHeader';
import { getCalendarYears } from '@/utils/calendarYears';
import { checkYearPickerInput } from '@/utils/inputMask';
import { DatePickerContext } from '../context/datePickerContext';

export default function withYearPicker(
  WrappedComponent: ComponentType<CalendarProps & CalendarLimitations>
) {
  const YearPicker = ({
    type = CalendarType.Year,
    onChange,
    minDate,
    maxDate,
  }: YearPickerProps) => {
    const { currentDate, setCurrentDate, setInputValue } = useContext(DatePickerContext);
    const calendarYears = useMemo(
      () => getCalendarYears(currentDate),
      [currentDate, minDate, maxDate]
    );
    const headerText = useMemo(
      () => getCalendarHeaderTextYearRange(calendarYears),
      [calendarYears]
    );

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

    function handleChange(newDate: string, action: ChangeActionType) {
      let formattedInput = newDate;

      if (action === ChangeActionType.Input) {
        formattedInput = checkYearPickerInput(newDate);
      } else {
        formattedInput = new Date(newDate).getFullYear().toString();
      }

      setCurrentDate(
        formattedInput ? new Date(+formattedInput, currentDate.getMonth(), 1) : new Date()
      );
      setInputValue(formattedInput);
      if (onChange) onChange(newDate);
    }

    return (
      <WrappedComponent
        type={type}
        items={calendarYears}
        headerText={headerText}
        onPrevious={handlePreviousYearRange}
        onNext={handleNextYearRange}
        onChange={handleChange}
        minDate={minDate}
        maxDate={maxDate}
      />
    );
  };

  return YearPicker;
}
