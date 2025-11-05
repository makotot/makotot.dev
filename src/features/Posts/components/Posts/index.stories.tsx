import { Meta, StoryObj } from '@storybook/nextjs';
import { expect, within } from 'storybook/test';
import { Posts } from './';

type ComponentType = typeof Posts;

const meta: Meta<ComponentType> = {
  component: Posts,
  args: {
    posts: [
      {
        title: 'Post 1',
        date: '2024-01-24',
        tags: [],
        draft: false,
        code: 'post-1-code',
        path: '/posts/post-1',
      },
      {
        title: 'Post 2 from Zenn',
        date: '2024-01-23',
        tags: [],
        draft: false,
        code: 'post-2-code',
        path: '/posts/post-2',
        type: 'zenn',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<ComponentType>;

export const Default: Story = {
  async play({ canvasElement }) {
    const canvas = within(canvasElement);
    const listItems = canvas.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);

    const firstItem = within(listItems[0]);
    expect(firstItem.getByText('Post 1')).toBeVisible();
    expect(firstItem.getByText('Jan 24, 2024')).toBeVisible();

    const secondItem = within(listItems[1]);
    expect(secondItem.getByText('Post 2 from Zenn')).toBeVisible();
    expect(secondItem.getByText('Jan 23, 2024')).toBeVisible();
    expect(secondItem.getByText('Zenn')).toBeVisible();
  },
};
