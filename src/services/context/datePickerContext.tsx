import { createContext, useState } from 'react';
import type { ResultDateType } from '@/types/calendar';
import type {
  DatePickerContextProviderProps,
  DatePickerContextType,
} from '@/types/datePickerContext';
import { getInitialDateOnCalendarType } from '@/utils/datePickerContext';

export const DatePickerContext = createContext<DatePickerContextType>({
  currentDate: new Date(),
  setCurrentDate: () => console.log('Method not implemented'),
  inputValue: new Date().toLocaleDateString('en-US'),
  setInputValue: () => console.log('Method not implemented'),
  handleChange: () => console.log('Method not implemented'),
});

export function DatePickerContextProvider({
  children,
  type,
  onChange,
  initialDate,
}: DatePickerContextProviderProps) {
  const [currentDate, setCurrentDate] = useState<Date>(
    getInitialDateOnCalendarType(type, initialDate)
  );
  const [inputValue, setInputValue] = useState<string>('');

  const handleDate = (newDate: Date) => {
    if (!isNaN(newDate.getTime())) setCurrentDate(newDate);
    else setCurrentDate(new Date());
  };

  const handleInputValue = (newDate: string) => setInputValue(newDate);

  const handleChange = (newDate: Date, formattedDate: string, userValue?: ResultDateType) => {
    handleInputValue(formattedDate);
    handleDate(newDate);
    onChange?.(userValue ?? newDate);
  };

  return (
    <DatePickerContext.Provider
      value={{
        inputValue,
        setInputValue: handleInputValue,
        currentDate,
        handleChange,
        setCurrentDate: handleDate,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
}
