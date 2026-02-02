import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Header } from './';

type ComponentType = typeof Header;

const meta: Meta<ComponentType> = {
  component: Header,
};

export default meta;

type Story = StoryObj<ComponentType>;

export const Default: Story = {};
