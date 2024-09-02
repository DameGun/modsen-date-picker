import { getCalendarYears } from '@/utils/calendarYears';

describe('getCalendarYears', () => {
  it('should return 12 years starting from the current year', () => {
    const currentDate = new Date(2023, 5, 15); // June 15, 2023
    const result = getCalendarYears(currentDate);

    expect(result.length).toBe(12);
    expect(result[0].value).toBe('2016');
    expect(result[11].value).toBe('2027');
  });

  it('should handle the start of a decade correctly', () => {
    const currentDate = new Date(2020, 0, 1); // January 1, 2020
    const result = getCalendarYears(currentDate);

    expect(result[0].value).toBe('2016');
    expect(result[11].value).toBe('2027');
  });

  it('should handle the end of a decade correctly', () => {
    const currentDate = new Date(2029, 11, 31); // December 31, 2029
    const result = getCalendarYears(currentDate);

    expect(result[0].value).toBe('2028');
    expect(result[11].value).toBe('2039');
  });

  it('should set isDisabled to false for all years', () => {
    const currentDate = new Date(2023, 5, 15);
    const result = getCalendarYears(currentDate);

    result.forEach((year) => {
      expect(year.isDisabled).toBe(false);
    });
  });
});
