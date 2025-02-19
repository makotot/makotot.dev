import { describe, it, expect } from 'vitest';
import { dateISO8601 } from '.';

describe('dateISO8601', () => {
  it.each([
    ['Jan 08, 2025', '2025-01-08'],
    ['May 01, 2024', '2024-05-01'],
  ])('should convert %s to %s', (date, expected) => {
    expect(dateISO8601(date)).toBe(expected);
  });
});
