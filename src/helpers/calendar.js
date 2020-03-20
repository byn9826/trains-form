export const getDaysInMonth = (year, month) => (
  32 - new Date(year, month, 32).getDate()
);

export const getMonthName = (monthNumber) => {
  const newDate = new Date();
  newDate.setDate(1);
  newDate.setMonth(monthNumber);
  return newDate.toLocaleString('default', { month: 'short' });
};

export const getWeekdayName = (weekdayNumber) => {
  const newDate = new Date();
  newDate.setDate(7 - newDate.getDay() + weekdayNumber);
  return newDate.toLocaleString('default', { weekday: 'short' });
};

export const getDateString = (date) => {
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};
