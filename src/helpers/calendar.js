export const getDaysInMonth = (year, month) => (
  32 - new Date(year, month, 32).getUTCDate()
);

export const getMonthName = (monthNumber) => {
  const newDate = new Date();
  newDate.setUTCDate(1);
  newDate.setUTCMonth(monthNumber);
  return newDate.toLocaleString('default', { month: 'short' });
};

export const getWeekdayName = (weekdayNumber) => {
  const newDate = new Date();
  newDate.setUTCDate(7 - newDate.getUTCDay() + weekdayNumber);
  return newDate.toLocaleString('default', { weekday: 'short' });
};

export const getDateString = (date) => date.toISOString().slice(0, 10);
