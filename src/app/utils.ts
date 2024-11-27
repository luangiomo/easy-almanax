export function separateDate(date: Date) {
  return date.toISOString().split('T')[0].split('-'); // [2024, 11, 27]
}
