import { Meta, StoryObj } from '@storybook/react';
import { CalendarType } from '@/constants/calendar';
import DatePickerCreator from '@/services/datePickerCreator';

const meta = {
  component: DatePickerCreator.renderMonthPicker,
  render: ({ minDate, maxDate, ...args }) => (
    <DatePickerCreator.renderMonthPicker
      minDate={minDate && new Date(minDate)}
      maxDate={maxDate && new Date(maxDate)}
      {...args}
    />
  ),
  argTypes: {
    minDate: {
      control: 'date',
    },
    maxDate: {
      control: 'date',
    },
  },
  parameters: {
    type: CalendarType.Month,
  },
} satisfies Meta<typeof DatePickerCreator.renderMonthPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    type: CalendarType.Month,
    minDate: undefined,
    maxDate: undefined,
    onChange: (date) => console.log('User will get this date:', date),
  },
};
