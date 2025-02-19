import { describe, it, expect } from 'vitest';
import { dateShort } from '.';

describe('dateShort', () => {
  it.each([
    ['Thu, 24 Oct 2024 15:40:20 GMT', 'Oct 24, 2024'],
    ['Wed, 15 Jan 2025 14:21:48 GMT', 'Jan 15, 2025'],
  ])('should convert %s to %s', (date, expected) => {
    expect(dateShort(date)).toBe(expected);
  });
});
