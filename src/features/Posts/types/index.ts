import { type Post } from '#site/content';

export type ExternalPost = Omit<Post, 'path'> & {
  type: 'zenn';
  path: `https://${string}`;
};
