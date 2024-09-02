import { CalendarType } from '@/constants/calendar';
import { checkDateMin } from '@/utils/dateLimitations';

describe('checkDateMin', () => {
  it('should return false when minDate is not provided', () => {
    const currentDate = new Date(2023, 5, 15);
    const result = checkDateMin(currentDate, CalendarType.Date);
    expect(result).toBe(false);
  });

  it('should return false for Date type when previous month is atfer minDate', () => {
    const currentDate = new Date(2023, 5, 15);
    const minDate = new Date(2023, 4, 1);
    const result = checkDateMin(currentDate, CalendarType.Date, minDate);
    expect(result).toBe(false);
  });

  it('should return true for Date type when previous month is before minDate', () => {
    const currentDate = new Date(2023, 4, 15);
    const minDate = new Date(2023, 4, 1);
    const result = checkDateMin(currentDate, CalendarType.Date, minDate);
    expect(result).toBe(true);
  });

  it('should return true for Year type when minDate year is after start of year range', () => {
    const currentDate = new Date(2023, 5, 15);
    const minDate = new Date(2022, 0, 1);
    const yearRange = '2020-2030';
    const result = checkDateMin(currentDate, CalendarType.Year, minDate, yearRange);
    expect(result).toBe(true);
  });

  it('should return false for Year type when minDate year is before start of year range', () => {
    const currentDate = new Date(2023, 5, 15);
    const minDate = new Date(2019, 0, 1);
    const yearRange = '2020-2030';
    const result = checkDateMin(currentDate, CalendarType.Year, minDate, yearRange);
    expect(result).toBe(false);
  });

  it('should return true for Month type when previous year is before or equal to minDate year', () => {
    const currentDate = new Date(2023, 0, 15);
    const minDate = new Date(2022, 11, 1);
    const result = checkDateMin(currentDate, CalendarType.Month, minDate);
    expect(result).toBe(true);
  });

  it('should return false for Month type when previous year is after minDate year', () => {
    const currentDate = new Date(2023, 1, 15);
    const minDate = new Date(2022, 11, 1);
    const result = checkDateMin(currentDate, CalendarType.Month, minDate);
    expect(result).toBe(false);
  });

  it('should return false for unknown CalendarType', () => {
    const currentDate = new Date(2023, 5, 15);
    const minDate = new Date(2023, 0, 1);
    const result = checkDateMin(currentDate, 'Unknown' as CalendarType, minDate);
    expect(result).toBe(false);
  });
});
