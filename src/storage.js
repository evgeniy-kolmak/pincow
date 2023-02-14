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
    const iconArray = data?.reduce((acc, item, i) => {
      if (i % 8 === 0) {
        acc.push([])
        index++;
      }
      acc[index].push(item.weather[0].icon.slice(0, 2))
      return acc
    }, [])

    const duplicateCount = iconArray?.map(item => {
      return item?.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
      }, {})
    })

    const weekIcon = duplicateCount?.map(item => {
      let count = 0;
      return Object.entries(item)?.reduce((acc, [key, value]) => {
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
      ?.reduce((acc, item, i) => {
        if (i % 8 === 0) {
          acc.push([])
          index++;
        }
        acc[index].push(Math.floor(item.main.temp))
        return acc
      }, [])
      ?.map(item => {
        const sortArray = item.sort((a, b) => b - a);
        return {
          maxTemp: sortArray[0],
          minTemp: sortArray[sortArray.length - 1]
        };
      })

  },
  symbolToUpperCase: word => {
    if (word) return word[0].toUpperCase() + word.slice(1);
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
  getTimezone: unixTime => unixTime / (3.6 * 10 ** 6) * 1000,

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
  },
  getRandomCapitalCoords: () => {
    const randomNumber = Math.floor(Math.random() * 10);
    const randomCoordsCapital = [
      [55.7522200, 37.6155600],
      [39.9075000, 116.3972300],
      [51.5085300, -0.1257400],
      [50.4546600, 30.5238000],
      [39.9198700, 32.8542700],
      [25.0657000, 55.1712800],
      [13.7539800, 100.5014400],
      [38.8951100, -77.0363700],
      [32.0808800, 34.7805700],
      [53.9000000, 27.5666700]
    ];
    return randomCoordsCapital[randomNumber];
  },
  getDifferenceHours: (tz, ctz) => {
    const hour = new Date().getHours();
    const hourInCity = Number(getTimeInCity(tz).slice(12, 14));

    let difference = 0;
    if (tz >= 0) {
      if (hourInCity < hour) {
        if (tz > ctz) {
          return difference += Math.abs((hour - 24) - hourInCity);
        }
        return difference += hour - hourInCity;
      }
      else if (hourInCity > hour) {
        return difference += tz > ctz ? hourInCity - hour : (hourInCity - hour) - 24;

      } else {
        return difference;
      }
    } else {
      return difference += hourInCity < hour ? hourInCity - hour : hourInCity - (hour + 24);

    }

  },
  currentHourInCity: (i, tz, ctz) => {
    const differenceTime = getDifferenceHours(tz, ctz);
    const itemHour = +i.dt_txt.slice(11, 13) + differenceTime;

    let result = 0;

    if (itemHour > 23) {
      result += itemHour - 24;
    } else if (differenceTime < 0 && !+i.dt_txt.slice(11, 13)) {
      result += 24 - Math.abs(itemHour);
    } else if (differenceTime < 0 && +i.dt_txt.slice(11, 13) < Math.abs(differenceTime)) {
      result += 24 + itemHour;
    } else {

      result += itemHour;
    }

    return `${result < 10 ? 0 : ''}${result}:00`

  },
  getSunHour: (i, tz, ctz, dt) => {
    const hour = Number(i.slice(0, 2));
    const minute = Number(i.slice(3, 5));

    const itemHour = hour + dt;

    let resultH = 0;
    let resultM = 0

    if (ctz && ctz >= tz) {
      if (dt < 0) {
        if (hour < Math.abs(dt)) {
          resultH += 24 + itemHour;
        } else {
          resultH += itemHour;
        }

      } else {
        resultH += hour - dt;
      }
    } else if (ctz && ctz < tz) {
      if (itemHour > 23) {
        resultH += itemHour - 24
      } else if (itemHour < 0) {
      } else {
        resultH += itemHour;
      }
    } else {
      return null;
    }

    if (!((tz ^ 0) === tz)) {
      const m = tz.toString().split(".")[1] === '5' ? 30 : 45;
      if (ctz && ctz >= tz) {
        if (minute - m < 0) {
          resultM += 60 + (minute - m);
          resultH--;
        } else {
          resultM += minute - m
        }

      } else if (ctz && ctz < tz) {
        if ((minute + m) > 59) {
          resultM += (minute + m) - 60;
          resultH++;
        } else {
          resultM += minute + m;
        }

      }
    } else {
      resultM += minute;
    }

    return {
      'hour': `${resultH < 10 ? 0 : ''}${Math.abs(resultH)}`,
      'minute': `${resultM < 10 ? 0 : ''}${Math.abs(resultM)}`
    };

  },
  getSunTime: (city, tz, ctz = true) => {
    const differenceTime = getDifferenceHours(tz, ctz);
    const sunriseTime = new Date(city?.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(city?.sunset * 1000).toLocaleTimeString();

    const sunriseHour = getSunHour(sunriseTime, tz, ctz, differenceTime);
    const sunsetHour = getSunHour(sunsetTime, tz, ctz, differenceTime);

    const sunrise = `${sunriseHour?.hour}:${sunriseHour?.minute}`;
    const sunset = `${sunsetHour?.hour}:${sunsetHour?.minute}`;

    return { sunrise, sunset };
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
export const getRandomCapitalCoords = storage.getRandomCapitalCoords;
export const getDifferenceHours = storage.getDifferenceHours;
export const currentHourInCity = storage.currentHourInCity;
export const getSunTime = storage.getSunTime;
export const getSunHour = storage.getSunHour;