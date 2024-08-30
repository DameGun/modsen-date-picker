import { checkDatePickerInput } from '@/utils/inputMask';

describe('checkDatePickerInput', () => {
  it('should format input correctly for month only', () => {
    expect(checkDatePickerInput('12')).toBe('12');
  });

  it('should format input correctly for month and day', () => {
    expect(checkDatePickerInput('1231')).toBe('12/31');
  });

  it('should format input correctly for full date', () => {
    expect(checkDatePickerInput('12312023')).toBe('12/31/2023');
  });

  it('should remove non-digit characters', () => {
    expect(checkDatePickerInput('12/31/2023')).toBe('12/31/2023');
  });

  it('should truncate input to 8 digits', () => {
    expect(checkDatePickerInput('123120231')).toBe('12/31/2023');
  });

  it('should handle invalid month input', () => {
    expect(checkDatePickerInput('13')).toBe('1');
  });

  it('should handle invalid day input', () => {
    expect(checkDatePickerInput('1232')).toBe('12/3');
  });

  it('should handle input with only non-digit characters', () => {
    expect(checkDatePickerInput('ab/cd/efgh')).toBe('');
  });
});
