import { ReactNode } from 'react';
import { CalendarType } from '@/constants/calendar';
import { Calendar, ResultDateType } from './calendar';

interface DatePickerContextType {
  currentDate: Date;
  setCurrentDate(newDate: Date): void;
  inputValue: string;
  setInputValue(newDate: string): void;
  handleChange(newDate: Date, formattedInput: string, userValue?: ResultDateType): void;
}

interface DatePickerContextProviderProps extends Pick<Calendar, 'onChange'> {
  type: CalendarType;
  children?: ReactNode;
}

export type { DatePickerContextProviderProps, DatePickerContextType };
