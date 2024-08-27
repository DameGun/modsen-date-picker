import { ComponentType, useContext, useMemo } from 'react';
import WeekDaysHeader from '@/components/WeekDaysHeader';
import { CalendarType, ChangeActionType } from '@/constants/calendar';
import { CalendarLimitations, CalendarProps } from '@/types/calendar';
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
    weekStartDay,
    minDate,
    maxDate,
    onChange,
    chooseWeekends,
    ...props
  }: DatePickerProps) => {
    const { currentDate, setInputValue, setCurrentDate } = useContext(DatePickerContext);
    const calendarDays = useMemo(
      () => getCalendarDays(currentDate, weekStartDay, chooseWeekends),
      [currentDate, weekStartDay, minDate, maxDate]
    );
    const headerText = useMemo(() => getCalendarHeaderText(type, currentDate), [type, currentDate]);

    function handleNextMonth() {
      const newDate = new Date(currentDate);
      newDate.setMonth(newDate.getMonth() + 1);

      setCurrentDate(newDate);
    }

    function handlePreviousMonth() {
      const newDate = new Date(currentDate);
      newDate.setMonth(newDate.getMonth() - 1);

      setCurrentDate(newDate);
    }

    function handleChange(newDate: string, actionType: ChangeActionType) {
      let formattedInput = newDate;

      if (actionType === ChangeActionType.Input) {
        formattedInput = checkDatePickerInput(newDate);
      }

      setInputValue(formattedInput);
      setCurrentDate(new Date(formattedInput));
      if (onChange) onChange(formattedInput);
    }

    return (
      <WrappedComponent
        {...props}
        type={type}
        additionalHeader={<WeekDaysHeader weekStartDay={weekStartDay} />}
        onNext={handleNextMonth}
        onPrevious={handlePreviousMonth}
        items={calendarDays}
        onChange={handleChange}
        headerText={headerText}
        minDate={minDate}
        maxDate={maxDate}
      />
    );
  };

  return DatePicker;
}
