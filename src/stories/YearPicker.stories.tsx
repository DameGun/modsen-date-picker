import { Meta, StoryObj } from '@storybook/react';
import { CalendarType } from '@/constants/calendar';
import DatePickerCreator from '@/services/datePickerCreator';

const meta = {
  component: DatePickerCreator.renderYearPicker,
  render: ({ minDate, maxDate, ...args }) => (
    <DatePickerCreator.renderYearPicker
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
    type: CalendarType.Year,
  },
} satisfies Meta<typeof DatePickerCreator.renderYearPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    type: CalendarType.Year,
    minDate: undefined,
    maxDate: undefined,
    onChange: (date) => console.log('User will get this date:', date),
  },
};
