export const getMonthNumber = (howManyMonthsBefore = 0) => {
  const now = new Date();
  const prevMonth = new Date();
  prevMonth.setMonth(now.getMonth() - howManyMonthsBefore);

  return prevMonth.getMonth();
}