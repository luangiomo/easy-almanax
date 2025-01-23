export function getDaysInMonth(month: string, year: string) {
  let size = 0;
  const fullMonth = [];

  switch (month) {
    case "01": // January
    case "03": // March
    case "05": // May
    case "07": // July
    case "08": // August
    case "10": // October
    case "12": // December
      size = 31;
      break;
    case "04": // April
    case "06": // June
    case "09": // September
    case "11": // November
      size = 30;
      break;
    case "02": // February
      size =
        Number(2000 + year) % 4 === 0 &&
        (Number(2000 + year) % 100 !== 0 || Number(2000 + year) % 400 === 0)
          ? 29
          : 28;
      break;
    default:
      size = -1; // Invalid month
  }
  for (let index = 1; index <= size; index++) {
    fullMonth.push(index < 10 ? `${"0" + index}` : index.toString());
  }
  return fullMonth; // [01,02,03,....,30,31]
}
