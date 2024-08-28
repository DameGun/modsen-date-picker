import { Meta, StoryObj } from '@storybook/react';
import { CalendarType, WeekStartDay } from '@/constants/calendar';
import { CalendarCountries } from '@/constants/holidays';
import DatePickerCreator from '@/services/datePickerCreator';

const meta = {
  component: DatePickerCreator.renderDatePicker,
  render: ({ minDate, maxDate, ...args }) => (
    <DatePickerCreator.renderDatePicker
      minDate={minDate && new Date(minDate)}
      maxDate={maxDate && new Date(maxDate)}
      {...args}
    />
  ),
  argTypes: {
    weekStartDay: {
      options: Object.values(WeekStartDay),
      control: 'select',
    },
    holidaysCountry: {
      options: Object.keys(CalendarCountries),
      control: 'select',
    },
    minDate: {
      control: 'date',
    },
    maxDate: {
      control: 'date',
    },
    chooseWeekends: {
      control: 'boolean',
    },
  },
  parameters: {
    type: CalendarType.Date,
  },
} satisfies Meta<typeof DatePickerCreator.renderDatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    type: CalendarType.Date,
    weekStartDay: WeekStartDay.Monday,
    chooseWeekends: false,
    minDate: undefined,
    maxDate: undefined,
    holidaysCountry: undefined,
    onChange: (date) => console.log('User will get this date:', date),
  },
};
