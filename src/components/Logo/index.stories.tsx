import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Logo } from './';

type ComponentType = typeof Logo;

const meta: Meta<ComponentType> = {
  component: Logo,
};

export default meta;

type Story = StoryObj<ComponentType>;

export const Default: Story = {};
