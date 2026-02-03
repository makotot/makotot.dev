import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from 'react-aria-components';
import { Tooltip } from './';

type ComponentType = typeof Tooltip;

const meta: Meta<ComponentType> = {
  component: Tooltip,
};

export default meta;

type Story = StoryObj<ComponentType>;

export const Default: Story = {
  args: {
    content: 'Tooltip content',
    children: <Button>Hover me</Button>,
  },
};
