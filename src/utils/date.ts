import dayjs from 'dayjs';

const isValidDate = (date: string | null) =>
  !date || date === undefined || date !== typeof 'string';

export const getLocalizedWeeks = () => {
  const current = new Date().getFullYear();

  return current;
};

// MONTH
export const formatMonth = (date: string | null) => {
  if (isValidDate(date)) return dayjs().format('MMMM');

  return dayjs(date).format('MMMM');
};
