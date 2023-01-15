import { getListdaysWeek, getTimeOfDay } from '../storage';

export function useDate() {
  const date = new Date();

  return {
    dayWeek: getListdaysWeek(date),
    greeting: getTimeOfDay(date),
  }
}