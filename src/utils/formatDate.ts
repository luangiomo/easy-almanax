export function formatDate(date: string | undefined, language: string) {
  if (date === undefined) return date;
  if (language === undefined) return date;

  if (language === "en") return date;
  const [month, day, year] = date.split("/");

  return `${day}/${month}/${year}`;
}
