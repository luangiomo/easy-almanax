export function getParisTime() {
  const parisTime = new Date()
    .toLocaleString("en-US", {
      timeZone: "Europe/Paris",
      hour12: false,
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })
    .split("/"); // [12,31,24]
  return {
    day: parisTime[1],
    month: parisTime[0],
    year: parisTime[2],
  };
}
