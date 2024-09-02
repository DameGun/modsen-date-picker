import { Calendar, ResultDateType } from './calendar';

interface DatePickerContextType {
  currentDate: Date;
  setCurrentDate(newDate: Date): void;
  inputValue: string;
  setInputValue(newDate: string): void;
  handleChange(newDate: Date, formattedInput: string, userValue?: ResultDateType): void;
}

type DatePickerContextProviderProps = Calendar;

export type { DatePickerContextProviderProps, DatePickerContextType };
