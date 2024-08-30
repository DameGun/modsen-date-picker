import { CalendarType } from '@/constants/calendar';
import { rangeInputValidation } from '@/utils/rangePicker';

describe('rangeInputValidation', () => {
  it('should handle date range input for CalendarType.Date', () => {
    const [formattedInput, dateRange] = rangeInputValidation(
      CalendarType.Date,
      '01/01/2023 - 01/30/2023'
    );
    expect(formattedInput).toBe('01/01/2023 - 01/30/2023');
    expect(dateRange[0]).toEqual(new Date(2023, 0, 1));
    expect(dateRange[1]).toEqual(new Date(2023, 0, 30));
  });

  it('should handle month range input for CalendarType.Month', () => {
    const [formattedInput, dateRange] = rangeInputValidation(
      CalendarType.Month,
      '01/2023 - 12/2023'
    );
    expect(formattedInput).toBe('01/2023 - 12/2023');
    expect(dateRange[0]).toEqual(new Date(2023, 0));
    expect(dateRange[1]).toEqual(new Date(2023, 11));
  });

  it('should handle year range input for CalendarType.Year', () => {
    const [formattedInput, dateRange] = rangeInputValidation(CalendarType.Year, '2023 - 2025');
    expect(formattedInput).toBe('2023 - 2025');
    expect(dateRange[0]).toEqual(new Date(2023, 1));
    expect(dateRange[1]).toEqual(new Date(2025, 1));
  });

  it('should default to date range input for unknown CalendarType', () => {
    const [formattedInput, dateRange] = rangeInputValidation(
      'Unknown' as CalendarType,
      '06/01/2023 - 06/30/2023'
    );
    expect(formattedInput).toBe('06/01/2023 - 06/30/2023');
    expect(dateRange[0]).toEqual(new Date(2023, 5, 1));
    expect(dateRange[1]).toEqual(new Date(2023, 5, 30));
  });
});
