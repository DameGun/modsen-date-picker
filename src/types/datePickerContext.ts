interface DatePickerContextType {
  currentDate: Date;
  setCurrentDate(newDate: Date): void;
  inputValue: string;
  setInputValue(newDate: string): void;
}

export type { DatePickerContextType };
