import { Meta, StoryObj } from '@storybook/react';
import { CalendarType, WeekStartDay } from '@/constants/calendar';
import { CalendarCountries } from '@/constants/holidays';
import DatePickerCreator from '@/services/datePickerCreator';
import { baseArgsType, DatePickerCreatorTemplate } from '@/utils/storybook';

const meta = {
  component: DatePickerCreator,
  argTypes: {
    ...baseArgsType,
    weekStartDay: {
      options: Object.values(WeekStartDay),
      control: 'select',
    },
    holidaysCountry: {
      options: Object.keys(CalendarCountries),
      control: 'select',
    },
    chooseWeekends: {
      control: 'boolean',
    },
    withTodoList: {
      control: 'boolean',
    },
  },
  parameters: {
    type: CalendarType.Date,
  },
} satisfies Meta<typeof DatePickerCreator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: DatePickerCreatorTemplate,
  args: {
    type: CalendarType.Date,
    weekStartDay: WeekStartDay.Monday,
    chooseWeekends: false,
    withTodoList: true,
    withRangePicker: false,
  },
};
