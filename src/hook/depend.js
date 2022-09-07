import { getSuccessPike, getSuccessPerch, getSuccessBurbot, getSuccessCrucian, getSuccessRoach, getSuccessCarp, getSuccessBream, getSuccessRudd } from "../data"

export function useDepend(weather, date) {

  const fishData = [
    { name: 'Щука', 'Успех': getSuccessPike(weather, date) },
    { name: 'Окунь', 'Успех': getSuccessPerch(weather, date) },
    { name: 'Налим', 'Успех': getSuccessBurbot(weather, date) },
    { name: 'Карась', 'Успех': getSuccessCrucian(weather, date) },
    { name: 'Плотва', 'Успех': getSuccessRoach(weather, date) },
    { name: 'Карп', 'Успех': getSuccessCarp(weather, date) },
    { name: 'Лещ', 'Успех': getSuccessBream(weather, date) },
    { name: 'Красноперка', 'Успех': getSuccessRudd(weather, date) },
  ];


  return fishData;
}

