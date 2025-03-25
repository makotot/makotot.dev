import { type Post } from '#site/content';

export type ExternalPost = Post & { type: 'zenn' };
