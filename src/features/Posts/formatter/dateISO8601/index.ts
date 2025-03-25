/**
 * Convert date to ISO8601 format
 * @param date - Date string
 * @returns ISO8601 format date ex. 2024-10-24
 */
export function dateISO8601(dateString: string) {
  const currentDate = new Date(dateString);
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const date = String(currentDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${date}`;
}
