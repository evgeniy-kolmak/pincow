import { getListdaysWeek } from '../storage';

export function useDate() {
  const date = new Date();

  const dateString = date.toLocaleDateString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return {
    dayWeek: getListdaysWeek(date),
    currentDateString: dateString,
  }
}