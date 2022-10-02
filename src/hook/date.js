export function useDate() {
  const date = new Date();

  const getListdaysWeek = () => {
    const daysWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    let day = date.getDay();
    const result = [];
    for (let i = 0; i < 5; i++) {
      if (day + i > 6) {
        day -= day + i;
      }
      result.push(daysWeek[day + i])
    }
    return result;
  }

  const dateString = date.toLocaleDateString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });


  return {
    dayWeek: getListdaysWeek(),
    currentDateString: dateString,
  }
}