export function splitDate(date: Date) {
  return date.toISOString().split('T')[0].split('-'); // [2024, 11, 27]
}

export function formatNumber(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // 2500000 -> 2.500.000
}
