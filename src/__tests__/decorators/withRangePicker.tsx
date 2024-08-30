import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CalendarType, WeekStartDay } from '@/constants/calendar';
import DatePickerCreator from '@/services/datePickerCreator';

describe('RangePicker Integration Tests', () => {
  const renderDatePicker = (type: CalendarType) => {
    return render(
      <DatePickerCreator type={type} weekStartDay={WeekStartDay.Monday} withRangePicker />
    );
  };

  test('handle range for DatePicker', async () => {
    renderDatePicker(CalendarType.Date);

    const datePickerInput = screen.getByTestId('date-picker-input');
    fireEvent.click(datePickerInput);

    const firstDate = screen.getAllByText('1')[0];
    fireEvent.click(firstDate);

    await waitFor(() => {
      expect(screen.getByDisplayValue(/\d{2}\/01\/\d{1,4} -/i)).toBeInTheDocument();
    });

    const secondDate = screen.getAllByText('20')[0];
    fireEvent.click(secondDate);

    await waitFor(() => {
      expect(screen.getByDisplayValue(/- \d{2}\/20\/\d{1,4}/i)).toBeInTheDocument();
    });
  });

  test('handle range for MonthPicker', async () => {
    renderDatePicker(CalendarType.Month);

    const datePickerInput = screen.getByTestId('date-picker-input');
    fireEvent.click(datePickerInput);

    const firstDate = screen.getAllByText('Jan')[0];
    fireEvent.click(firstDate);

    await waitFor(() => {
      expect(screen.getByDisplayValue(/01\/\d{1,4} -/i)).toBeInTheDocument();
    });

    const secondDate = screen.getAllByText('Jul')[0];
    fireEvent.click(secondDate);

    await waitFor(() => {
      expect(screen.getByDisplayValue(/- 07\/\d{1,4}/i)).toBeInTheDocument();
    });
  });

  test('handle range for YearPicker', async () => {
    renderDatePicker(CalendarType.Year);
    const currentYear = new Date().getFullYear();

    const datePickerInput = screen.getByTestId('date-picker-input');
    fireEvent.click(datePickerInput);

    const firstDate = screen.getAllByText(currentYear - 2)[0];
    fireEvent.click(firstDate);

    await waitFor(() => {
      expect(screen.getByDisplayValue(/\d{1,4} -/i)).toBeInTheDocument();
    });

    const secondDate = screen.getAllByText(currentYear + 2)[0];
    fireEvent.click(secondDate);

    await waitFor(() => {
      expect(screen.getByDisplayValue(/- \d{1,4}/i)).toBeInTheDocument();
    });
  });
});
