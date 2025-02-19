/**
 * Format date to short format
 * ex. 'Thu, 24 Oct 2024 15:40:20 GMT' => 'Oct 24, 2024'
 */
export function dateShort(date: string) {
  return dateFormat.format(new Date(date));
}

const dateFormat = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  timeZone: 'UTC',
});
