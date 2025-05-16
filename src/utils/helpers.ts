import dayjs from 'dayjs';

export const groupBy = <T>(array: T[], keyFn: (item: T) => string) =>
  array.reduce(
    (acc, item) => {
      const key = keyFn(item);
      acc[key] = acc[key] || [];
      acc[key].push(item);
      return acc;
    },
    {} as Record<string, T[]>,
  );

export const filter = <T>(
  array: T[] | undefined,
  predicate: (item: T) => boolean,
) => (array ? array.filter(predicate) : []);

export const find = <T>(array: T[] | undefined, predicate: Partial<T>) =>
  array?.find((item) =>
    Object.entries(predicate).every(([k, v]) => item[k as keyof T] === v),
  );

export const getDate = (offset = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return dayjs(date).format('YYYY-MM-DD');
};
