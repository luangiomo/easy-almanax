export function formatDate(date: string, language: "pt" | "en" | "fr" | "es") {
  if (language === "en") return date;

  const [month, day, year] = date.split("/");
  return `${day}/${month}/${year}`;
}
