import { createContext, ReactNode, useState } from 'react';
import { CalendarType } from '@/constants/calendar';
import type { DatePickerContextType } from '@/types/datePickerContext';
import { getInitialDateOnCalendarType } from '@/utils/datePickerContext';

export const DatePickerContext = createContext<DatePickerContextType>({
  currentDate: new Date(),
  setCurrentDate: () => console.log('Method not implemented'),
  inputValue: new Date().toLocaleDateString('en-US'),
  setInputValue: () => console.log('Method not implemented'),
});

export function DatePickerContextProvider({
  children,
  type,
}: {
  children: ReactNode;
  type: CalendarType;
}) {
  const [currentDate, setCurrentDate] = useState<Date>(getInitialDateOnCalendarType(type));
  const [inputValue, setInputValue] = useState<string>('');

  function handleDate(newDate: Date) {
    if (!isNaN(newDate.getTime())) setCurrentDate(newDate);
    else setCurrentDate(new Date());
  }

  function handleInputValue(newDate: string) {
    setInputValue(newDate);
  }

  return (
    <DatePickerContext.Provider
      value={{
        inputValue,
        setInputValue: handleInputValue,
        currentDate,
        setCurrentDate: handleDate,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
}
