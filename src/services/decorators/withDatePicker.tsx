import { ComponentType, useCallback, useContext, useMemo } from 'react';
import { WeekDaysHeader } from '@/components';
import { CalendarType, WeekStartDay } from '@/constants/calendar';
import { PlaceholderMaskType } from '@/constants/input';
import type { CalendarLimitations, CalendarProps } from '@/types/calendar';
import type { DatePickerProps } from '@/types/datePicker';
import type { HolidaysProps } from '@/types/holidays';
import { getCalendarDays } from '@/utils/calendarDays';
import { getCalendarHeaderText } from '@/utils/calendarHeader';
import { checkDatePickerInput } from '@/utils/inputMask';
import { DatePickerContext } from '../context/datePickerContext';

export default function withDatePicker(
  WrappedComponent: ComponentType<CalendarProps & CalendarLimitations & HolidaysProps>
) {
  const DatePicker = ({
    type = CalendarType.Date,
    weekStartDay = WeekStartDay.Monday,
    minDate,
    maxDate,
    chooseWeekends,
    ...props
  }: DatePickerProps) => {
    const { currentDate, handleChange, setCurrentDate } = useContext(DatePickerContext);
    const calendarDays = useMemo(
      () => getCalendarDays(currentDate, weekStartDay, chooseWeekends),
      [currentDate, weekStartDay, chooseWeekends]
    );
    const headerText = useMemo(() => getCalendarHeaderText(type, currentDate), [type, currentDate]);

    const handleNextMonth = useCallback(() => {
      const newDate = new Date(currentDate);
      newDate.setMonth(newDate.getMonth() + 1);

      setCurrentDate(newDate);
    }, [currentDate]);

    const handlePreviousMonth = useCallback(() => {
      const newDate = new Date(currentDate);
      newDate.setMonth(newDate.getMonth() - 1);

      setCurrentDate(newDate);
    }, [currentDate]);

    const handleInput = useCallback((newDate: string) => {
      const formattedInput = checkDatePickerInput(newDate);
      const formattedInputAsDate = new Date(formattedInput);

      handleChange(formattedInputAsDate, formattedInput);
    }, []);

    const handleClick = useCallback((newDate: string) => {
      const formattedInputAsDate = new Date(newDate);

      handleChange(formattedInputAsDate, newDate);
    }, []);

    return (
      <WrappedComponent
        {...props}
        type={type}
        additionalHeader={<WeekDaysHeader weekStartDay={weekStartDay} />}
        onNext={handleNextMonth}
        onPrevious={handlePreviousMonth}
        items={calendarDays}
        onInputChange={handleInput}
        onItemClick={handleClick}
        headerText={headerText}
        minDate={minDate}
        maxDate={maxDate}
        placeholderMask={PlaceholderMaskType[type]}
      />
    );
  };

  return DatePicker;
}
