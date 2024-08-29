import { Component } from 'react';
import { Calendar, ErrorBoundary } from '@/components';
import { CalendarType } from '@/constants/calendar';
import type { CalendarCreatorProps } from '@/types/calendar';
import type { DatePickerProps } from '@/types/datePicker';
import type { MonthPickerProps } from '@/types/monthPicker';
import { YearPickerProps } from '@/types/yearPicker';
import {
  withDatePicker,
  withHolidays,
  withMinMaxValues,
  withMonthPicker,
  withRangePicker,
  withStyling,
  withTodoList,
  withYearPicker,
} from './decorators';

export default class DatePickerCreator extends Component<CalendarCreatorProps> {
  constructor(props: CalendarCreatorProps) {
    super(props);
  }

  private renderDatePicker(props: DatePickerProps) {
    let basePicker = Calendar;

    if (props.withRangePicker) basePicker = withRangePicker(basePicker);
    if (props.withTodoList) basePicker = withTodoList(basePicker);
    if (props.minDate || props.maxDate) basePicker = withMinMaxValues(basePicker);
    if (props.holidaysCountry) basePicker = withHolidays(basePicker);
    if (props.customTheme) basePicker = withStyling(basePicker);

    return withDatePicker(basePicker);
  }

  private renderMonthPicker(props: MonthPickerProps) {
    let basePicker = Calendar;

    if (props.withRangePicker) basePicker = withRangePicker(basePicker);
    if (props.minDate || props.maxDate) basePicker = withMinMaxValues(basePicker);
    if (props.customTheme) basePicker = withStyling(basePicker);

    return withMonthPicker(basePicker);
  }

  private renderYearPicker(props: YearPickerProps) {
    let basePicker = Calendar;

    if (props.withRangePicker) basePicker = withRangePicker(basePicker);
    if (props.minDate || props.maxDate) basePicker = withMinMaxValues(basePicker);
    if (props.customTheme) basePicker = withStyling(basePicker);

    return withYearPicker(basePicker);
  }

  render() {
    switch (this.props.type) {
      case CalendarType.Date: {
        const DatePicker = this.renderDatePicker(this.props);

        return (
          <ErrorBoundary>
            <DatePicker {...this.props} />
          </ErrorBoundary>
        );
      }
      case CalendarType.Month: {
        const MonthPicker = this.renderMonthPicker(this.props);

        return (
          <ErrorBoundary>
            <MonthPicker {...this.props} />
          </ErrorBoundary>
        );
      }
      case CalendarType.Year: {
        const YearPicker = this.renderYearPicker(this.props);

        return (
          <ErrorBoundary>
            <YearPicker {...this.props} />
          </ErrorBoundary>
        );
      }
    }
  }
}
