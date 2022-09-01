import { getSuccessPike, getSuccessPerch, getSuccessRudd } from "../data"



export function useDepend(weather, date) {

  const fishData = [
    { name: 'Щука', 'Успех': getSuccessPike(weather, date) },
    { name: 'Окунь', 'Успех': getSuccessPerch(weather, date) },
    { name: 'Налим', 'Успех': 0 },
    { name: 'Карась', 'Успех': 0 },
    { name: 'Плотва', 'Успех': 0 },
    { name: 'Карп', 'Успех': 0 },
    { name: 'Лещ', 'Успех': 0 },
    { name: 'Красноперка', 'Успех': getSuccessRudd(weather, date) },
  ];



  return fishData;
}

