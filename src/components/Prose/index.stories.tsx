import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Prose } from './';

type ComponentType = typeof Prose;

const meta: Meta<ComponentType> = {
  component: Prose,
};

export default meta;

type Story = StoryObj<ComponentType>;

export const Default: Story = {
  args: {
    children: <p>Prose content</p>,
  },
};
