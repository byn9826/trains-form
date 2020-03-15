export const isNumber = (value) => typeof value === 'number';

export const isBoolean = (value) => typeof value === 'boolean';

export const isFunction = (value) => typeof value === 'function';

export const isDefined = (value) => typeof value !== 'undefined';

export const isNotEmpty = (value) => {
  if (value === undefined || value === null) {
    return false;
  }
  if (typeof value === 'string' && value.trim() === '') {
    return false;
  }
  if (Array.isArray(value) && value.length === 0) {
    return false;
  }
  return true;
};

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

export const getDateString = (date) => date.toISOString().slice(0, 10);
