import { ComponentType, useContext, useMemo } from 'react';
import { CalendarType, ChangeActionType } from '@/constants/calendar';
import type { CalendarLimitations, CalendarProps } from '@/types/calendar';
import type { MonthPickerProps } from '@/types/monthPicker';
import { getCalendarHeaderText } from '@/utils/calendarHeader';
import { getCalendarMonths } from '@/utils/calendarMonths';
import { checkMonthPickerInput } from '@/utils/inputMask';
import { getMonthYearDateString } from '@/utils/localeDate';
import { DatePickerContext } from '../context/datePickerContext';

export default function withMonthPicker(
  WrappedComponent: ComponentType<CalendarProps & CalendarLimitations>
) {
  const MonthPicker = ({
    type = CalendarType.Month,
    onChange,
    minDate,
    maxDate,
  }: MonthPickerProps) => {
    const { currentDate, setCurrentDate, setInputValue } = useContext(DatePickerContext);
    const calendarMonths = useMemo(
      () => getCalendarMonths(currentDate),
      [currentDate, minDate, maxDate]
    );
    const headerText = useMemo(() => getCalendarHeaderText(type, currentDate), [currentDate]);

    function handleNextYear() {
      const newDate = new Date(currentDate);
      newDate.setFullYear(currentDate.getFullYear() + 1);

      setCurrentDate(newDate);
    }

    function handlePreviousYear() {
      const newDate = new Date(currentDate);
      newDate.setFullYear(currentDate.getFullYear() - 1);

      setCurrentDate(newDate);
    }

    function handleChange(newDate: string, actionType: ChangeActionType) {
      let formattedInput = newDate;
      let parsedDateObj = currentDate;

      if (actionType === ChangeActionType.Input) {
        formattedInput = checkMonthPickerInput(newDate);

        const [month, year] = formattedInput.split('/');
        const buffDate = new Date(+year, +month - 1, 1);

        parsedDateObj = buffDate;
      } else {
        parsedDateObj = new Date(newDate);
        formattedInput = getMonthYearDateString(parsedDateObj);
      }

      setInputValue(formattedInput);
      setCurrentDate(parsedDateObj);
      if (onChange) onChange(formattedInput);
    }

    return (
      <WrappedComponent
        type={type}
        items={calendarMonths}
        headerText={headerText}
        onNext={handleNextYear}
        onPrevious={handlePreviousYear}
        onChange={handleChange}
        minDate={minDate}
        maxDate={maxDate}
      />
    );
  };

  return MonthPicker;
}
