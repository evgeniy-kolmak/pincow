const storage = {
  getDerectionWind: data => {
    const deg = data?.list[0].wind?.deg;
    if (23 <= deg && deg <= 67) {
      return 'СВ';
    }

    if (68 <= deg && deg <= 113) {
      return 'В';
    }

    if (114 <= deg && deg <= 157) {
      return 'ЮВ';

    }

    if (158 <= deg && deg <= 203) {
      return 'Ю';

    }

    if (204 <= deg && deg <= 247) {
      return 'ЮЗ';
    }

    if (248 <= deg && deg <= 293) {
      return 'З';
    }

    if (294 <= deg && deg <= 337) {
      return 'СЗ';

    }

    return 'C';

  },
  getWeekIcon: data => {
    let index = -1;
    const iconArray = data.reduce((acc, item, i) => {
      if (i % 8 === 0) {
        acc.push([])
        index++;
      }
      acc[index].push(item.weather[0].icon.slice(0, 2))
      return acc
    }, [])

    const duplicateCount = iconArray.map(item => {
      return item.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
      }, {})
    })

    const weekIcon = duplicateCount.map(item => {
      let count = 0;
      return Object.entries(item).reduce((acc, [key, value]) => {
        if (value > count) {
          count += value;
          acc = key;
        }
        return acc;
      }, '')
    })


    return weekIcon;
  },
  getWeekTemp: data => {
    let index = -1;
    return data
      .reduce((acc, item, i) => {
        if (i % 8 === 0) {
          acc.push([])
          index++;
        }
        acc[index].push(Math.floor(item.main.temp))
        return acc
      }, [])
      .map(item => {
        const sortArray = item.sort((a, b) => b - a);
        return {
          maxTemp: sortArray[0],
          minTemp: sortArray[sortArray.length - 1]
        };
      })

  },
  symbolToUpperCase: word => {
    return word[0].toUpperCase() + word.slice(1);
  },
  getListdaysWeek: date => {
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
  },
  getTimezone: data => data?.city.timezone / (3.6 * 10 ** 6) * 1000,

  getTimeInCity: timezone => {
    const date = new Date();
    const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    const time = new Date(utc + (3600000 * timezone));

    return time.toLocaleString();
  },
  getTimeOfDay: date => {
    const hour = date.getHours();
    if (4 <= hour && hour <= 11) {
      return 'Доброе утро';
    } else if (12 <= hour && hour <= 18) {
      return 'Добрый день';
    } else if (19 <= hour && hour <= 23) {
      return 'Добрый вечер';
    } else {
      return 'Доброй ночи';
    }
  }

};

export const getDerectionWind = storage.getDerectionWind;
export const symbolToUpperCase = storage.symbolToUpperCase;
export const getWeekIcon = storage.getWeekIcon;
export const getWeekTemp = storage.getWeekTemp;
export const getListdaysWeek = storage.getListdaysWeek;
export const getTimezone = storage.getTimezone;
export const getTimeInCity = storage.getTimeInCity;
export const getTimeOfDay = storage.getTimeOfDay;