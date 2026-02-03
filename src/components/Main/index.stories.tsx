import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Main } from './';

type ComponentType = typeof Main;

const meta: Meta<ComponentType> = {
  component: Main,
};

export default meta;

type Story = StoryObj<ComponentType>;

export const Default: Story = {
  args: {
    children: 'Main content area',
  },
};
