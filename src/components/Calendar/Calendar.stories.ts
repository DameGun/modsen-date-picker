import { Meta, StoryObj } from '@storybook/react';

import { Calendar } from '@/components';

const meta = {
  component: Calendar,
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
