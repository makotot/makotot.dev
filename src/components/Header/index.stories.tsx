import { Meta, StoryObj } from '@storybook/react';
import { Header } from './';

type ComponentType = typeof Header;

const meta: Meta<ComponentType> = {
  component: Header,
};

export default meta;

type Story = StoryObj<ComponentType>;

export const Default: Story = {};
