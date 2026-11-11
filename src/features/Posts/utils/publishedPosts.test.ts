import { describe, it, expect } from 'vitest';
import { type Post } from '#site/content';
import { getPublishedPostBySlug, getPublishedSlugs } from './publishedPosts';

function createPost(overrides: Pick<Post, 'path' | 'draft'>): Post {
  return {
    title: overrides.path,
    date: '2025-01-01T00:00:00.000Z',
    tags: [],
    code: '',
    ...overrides,
  };
}

const published = createPost({ path: 'posts/published', draft: false });
const draft = createPost({ path: 'posts/draft', draft: true });
const posts = [published, draft];

describe('getPublishedSlugs', () => {
  it.each([
    {
      name: 'published and draft posts',
      posts,
      expected: [{ slug: 'published' }],
    },
    { name: 'no posts', posts: [], expected: [] },
  ])('should return only published slugs for $name', ({ posts, expected }) => {
    expect(getPublishedSlugs(posts)).toEqual(expected);
  });
});

describe('getPublishedPostBySlug', () => {
  it.each([
    { slug: 'published', expected: published },
    { slug: 'draft', expected: undefined },
    { slug: 'unknown', expected: undefined },
  ])('should return $expected.path for slug "$slug"', ({ slug, expected }) => {
    expect(getPublishedPostBySlug(posts, slug)).toBe(expected);
  });
});
