import { Meta, StoryObj } from '@storybook/react';
import { CalendarType } from '@/constants/calendar';
import DatePickerCreator from '@/services/datePickerCreator';
import { DatePickerCreatorTemplate } from '@/utils/storybook';

const meta = {
  component: DatePickerCreator,
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
} satisfies Meta<typeof DatePickerCreator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: DatePickerCreatorTemplate,
  args: {
    type: CalendarType.Month,
    minDate: undefined,
    maxDate: undefined,
    onChange: (date) => console.log('User will get this date:', date),
  },
};
