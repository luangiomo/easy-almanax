export function formatNumber(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); // 2500000 -> 2.500.000
}
