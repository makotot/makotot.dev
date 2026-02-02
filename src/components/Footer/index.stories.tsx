import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Footer } from './';

type ComponentType = typeof Footer;

const meta: Meta<ComponentType> = {
  component: Footer,
};

export default meta;

type Story = StoryObj<ComponentType>;

export const Default: Story = {};
