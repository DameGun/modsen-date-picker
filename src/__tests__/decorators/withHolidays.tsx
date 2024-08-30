import { fireEvent, render, screen } from '@testing-library/react';
import { CalendarType, WeekStartDay } from '@/constants/calendar';
import { DatePickerContextProvider } from '@/services/context/datePickerContext';
import DatePickerCreator from '@/services/datePickerCreator';

describe('Holidays Integration Tests', () => {
  const renderDatePicker = () => {
    return render(
      <DatePickerContextProvider type={CalendarType.Date} onChange={() => {}}>
        <DatePickerCreator
          type={CalendarType.Date}
          weekStartDay={WeekStartDay.Monday}
          initialDate={new Date(2024, 10, 1)}
          customHolidays={[
            {
              date: new Date(2024, 10, 1),
              name: 'Custom Holiday',
            },
            {
              date: new Date(2024, 10, 2),
              name: 'Custom Holiday 2',
            },
          ]}
        />
      </DatePickerContextProvider>
    );
  };

  test('handle custom holidays', async () => {
    renderDatePicker();

    const datePickerInput = screen.getByTestId('date-picker-input');
    fireEvent.click(datePickerInput);

    expect(screen.getByText('Custom Holiday')).toBeInTheDocument();
    expect(screen.getByText('Custom Holiday 2')).toBeInTheDocument();
  });
});
