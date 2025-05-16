import dayjs from 'dayjs';

export const getDate = (offset = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return dayjs(date).format('YYYY-MM-DD');
};
