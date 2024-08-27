import { CalendarType } from '@/constants/calendar';
import { DateRange } from '@/types';
import {
  checkDatePickerInput,
  checkMonthPickerInput,
  checkYearPickerInput,
  parseMonthPickerInput,
  parseYearPickerInput,
} from './inputMask';
import { getFullDateString, getMonthYearDateString, getYearDateString } from './localeDate';

export function parseDateRange(type: CalendarType, range: DateRange) {
  switch (type) {
    case CalendarType.Date: {
      return getFullDateString(range[0]) + ' - ' + (range[1] ? getFullDateString(range[1]!) : '');
    }
    case CalendarType.Month: {
      return (
        getMonthYearDateString(range[0]) +
        ' - ' +
        (range[1] ? getMonthYearDateString(range[1]!) : '')
      );
    }
    case CalendarType.Year: {
      return getYearDateString(range[0]) + ' - ' + (range[1] ? getYearDateString(range[1]!) : '');
    }
    default: {
      return getFullDateString(range[0]) + ' - ' + (range[1] ? getFullDateString(range[1]!) : '');
    }
  }
}

export function rangeInputValidation(type: CalendarType, value: string): [string, DateRange] {
  switch (type) {
    case CalendarType.Date: {
      const formattedInput = datePickerRangeInputValidation(value);
      const formattedInputAsDateRange = parseDateRangePickerInput(formattedInput);

      return [formattedInput, formattedInputAsDateRange];
    }
    case CalendarType.Month: {
      const formattedInput = monthPickerRangeInputValidation(value);
      const formattedInputAsDateRange = parseMonthRangePickerInput(formattedInput);

      return [formattedInput, formattedInputAsDateRange];
    }
    case CalendarType.Year: {
      const formattedInput = yearPickerRangeInputValidation(value);
      const formattedInputAsDateRange = parseYearRangePickerInput(formattedInput);

      return [formattedInput, formattedInputAsDateRange];
    }
    default: {
      const formattedInput = datePickerRangeInputValidation(value);
      const formattedInputAsDateRange = parseDateRangePickerInput(formattedInput);

      return [formattedInput, formattedInputAsDateRange];
    }
  }
}

export function parseDateRangePickerInput(formattedInput: string): DateRange {
  const [leftDate, rightDate] = formattedInput.split('-');

  return [new Date(leftDate), new Date(rightDate)];
}

export function parseMonthRangePickerInput(formattedInput: string): DateRange {
  const [leftDate, rightDate] = formattedInput.split('-');
  const parsedLeftDate = parseMonthPickerInput(leftDate);
  const parsedRightDate = rightDate ? parseMonthPickerInput(rightDate) : null;

  return [parsedLeftDate, parsedRightDate];
}

export function parseYearRangePickerInput(formattedInput: string): DateRange {
  const [leftDate, rightDate] = formattedInput.split('-');
  const parsedLeftDate = parseYearPickerInput(leftDate);
  const parsedRightDate = parseYearPickerInput(rightDate);

  return [parsedLeftDate, parsedRightDate];
}

function datePickerRangeInputValidation(value: string) {
  const input = value.replace(/\D/g, '');
  let result = checkDatePickerInput(value);

  if (input.length > 8) result += ' - ' + checkDatePickerInput(input.slice(8));

  return result;
}

function monthPickerRangeInputValidation(value: string) {
  const input = value.replace(/\D/g, '');
  let result = checkMonthPickerInput(value);

  if (input.length > 6) result += ' - ' + checkMonthPickerInput(input.slice(6));

  return result;
}

function yearPickerRangeInputValidation(value: string) {
  const input = value.replace(/\D/g, '');
  let result = checkYearPickerInput(value);

  if (input.length > 4) result += ' - ' + checkYearPickerInput(input.slice(4));

  return result;
}
