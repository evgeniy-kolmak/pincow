const getSuccess = {
  getSuccessPike: (weather, date) => {
    let chance = 33;
    const nigativeWind = ['C', 'СЗ', 'СВ'];
    const currentHour = new Date().getHours();

    if (weather.humidity >= 40) {
      chance += 4;
    }

    if (weather.sys.sunrise === currentHour || weather.sys.sunset === currentHour) {
      chance += 10;
      chance += Math.round(weather.humidity / 10);
    }

    if (date.month === 7 || date.month === 8) {
      chance -= 10;
    } else if (date.month === 10 || date.month === 11) {
      chance += 15;
    }

    if (date.season === 'winter' || date.season === 'spring') {

      if (date.month === 5) chance += 8;
      if (weather.descritption === 'Ясно') {
        chance += 10;
      } else {
        chance -= 15;
      }
    }

    if (date.season === 'autumn') {
      if (weather.clouds >= 33) {
        chance += 8;
        if (weather.visibility < 10000) {
          chance += 2;
        } else {
          chance -= 4;
        }
      }

      if (weather.wind.speed >= 5) {
        chance += 9;
      }

      if (weather.descritption === 'Дождь' || weather.descritption === 'Морось') {
        chance += 11;
      }

    }

    if (762 <= weather.pressure || weather.pressure <= 759) {
      chance -= 8;
    } else {
      chance += 4;
    }

    if (nigativeWind.indexOf(weather.wind.direction) >= 0) {
      chance -= 15;
    } else {
      chance += 3;
    }

    return chance;
  },
  getSuccessPerch: (weather, date) => {
    let chance = 38;
    const currentHour = new Date().getHours();
    const favoritMonth = [3, 4, 6, 7, 8, 10, 11];
    const nigativeWind = ['C', 'СЗ', 'СВ', 'В'];

    if (762 <= weather.pressure || weather.pressure <= 759) {
      chance -= 10;
    } else {
      chance += 4;
    }

    if (weather.weatherId === 500 || weather.weatherId === 501) {
      chance += 6
    } else if (weather.description === 'Гроза') {
      chance -= 20;
    }

    if (favoritMonth.indexOf(date.month) >= 0) {
      chance += 10;
    } else {
      chance -= 6;
    }
    if (weather.temp < 15 || weather.wind.speed >= 5 || weather.weatherId.toString()[0] === '5') {
      chance -= 9;
    }
    if (date.season === 'spring' || date.season === 'summer') {
      if (weather.temp > 15 || weather.wind.speed < 5 || weather.description === 'Пасмурно') {
        chance += 20;
      }

      if (weather.clouds >= 50) {
        chance += 5;
      }

      if (weather.humidity >= 50) {
        chance -= 6;
      }
      if (date.season === 'summer') {
        if (weather.sys.sunrise > currentHour && weather.sys.sunset < currentHour) {
          chance += 10;
        }
      }

      if (date.month === 8 && weather.sys.sunrise === currentHour) {
        chance += 12
      }

    }

    if (date.month === 1 || date.month === 12) {
      chance -= 14;
    }

    if (date.season === 'winter') {
      if (weather.sys.sunrise === currentHour || weather.sys.sunset === currentHour) {
        chance += 12;
        if (weather.temp > 0) {
          chance += 9;
        }

      }

    }

    if (nigativeWind.indexOf(weather.wind.direction) >= 0) {
      chance -= 15;
    } else {
      chance += 5;
    }

    return chance;
  },
  getSuccessBurbot: (weather, date) => {
    let chance = 37;
    const favoritMonth = [1, 11, 12];
    const currentHour = new Date().getHours();
    const positiveWind = ['C', 'СЗ', 'СВ'];

    if (762 <= weather.pressure || weather.pressure <= 759) {
      chance -= 8;
    } else {
      chance += 4;
    }

    if (weather.humidity >= 47) {
      chance += 4;
    }

    if (favoritMonth.indexOf(date.month) >= 0) {
      chance += 17
    } else {
      chance -= 3;
    }

    if (weather.sys.sunrise <= currentHour && weather.sys.sunset <= currentHour) {
      chance += 15;
    } else {
      chance -= 5;
    }

    if (weather.visibility < 10000) {
      chance += 3;
    } else {
      chance -= 7;
    }


    if (positiveWind.indexOf(weather.wind.direction) >= 0) {
      chance += 11
    } else {
      chance -= 3;
    }

    if (date.season === 'winter' || date.season === 'autumn') {
      chance += 7
      if (weather.clouds >= 60) {
        chance += 5;
      }
      if (weather.wind.speed >= 5 || weather.wind.gust >= 5) {
        chance += 10;
      }

      if (weather.weatherId.toString()[0] === '5' || weather.weatherId.toString()[0] === '6') {
        chance += 20;
      } else {
        chance -= 6;
      }
    } else {
      chance -= 7
    }


    return chance;
  },
  getSuccessCrucian: (weather, date) => {
    let chance = 47;
    const positiveWind = ['Ю', 'ЮЗ', 'ЮВ'];

    if (weather.pressure > 750) {
      chance -= 10;
    } else {
      chance += 4;
    }

    if (weather.weatherId.toString()[0] === '5' || weather.weatherId.toString()[0] === '3') {
      if (date.season === 'summer') {
        chance += 20;
      } else if (date.season === 'spring' || date.season === 'autumn') {
        chance -= 12;
      }
    }

    if (date.season === 'winter') {
      chance -= 20;
      if (weather.weatherId.toString()[0] === '6') {
        chance -= 10;
      }
    }

    if (7 <= weather.wind.speed && 10 <= weather.wind.speed) {
      chance += 7;
    }

    if (weather.wind.speed >= 10 || weather.wind.gust >= 10 || weather.wind.speed <= 1) {
      chance -= 10;
    }

    if (positiveWind.indexOf(weather.wind.direction) >= 0) {
      chance += 11
    } else {
      chance -= 3;
    }

    if (weather.visibility < 10000) {
      chance += 3;
    } else {
      chance -= 7;
    }

    if (weather.clouds >= 50) {
      chance += 5;
    }

    if (weather.humidity >= 50) {
      chance -= 6;
    } else {
      chance += 3
    }

    if (date.season === 'spring' || date.season === 'autumn') {
      if (weather.temp >= 15) {
        chance += 15;
      } else {
        chance -= 5;
      }
    }

    if (date.season === 'summer') {
      if (weather.temp >= 23) {
        chance -= 14;
      } else {
        chance += 6;
      }
    }
    return chance;
  },
  getSuccessRoach: (weather, date) => {
    let chance = 48;

    if (762 <= weather.pressure || weather.pressure <= 759) {
      chance -= 12;
    } else {
      chance += 4;
    }

    if (weather.humidity >= 40) {
      chance += 4;
    }

    if (weather.visibility < 10000) {
      chance += 5;
    } else {
      chance -= 7;
    }

    if (date.season === 'summer' || date.season === 'winter') {
      if (weather.temp >= 25) {
        chance -= 11;
      }
    }


    return chance;
  },

  getSuccessCarp: (weather, date) => {
    let chance = 42;
    const positiveWind = ['Ю', 'ЮЗ', 'ЮВ'];
    const nigativeWind = ['C', 'СЗ', 'СВ'];

    if (nigativeWind.indexOf(weather.wind.direction) >= 0) {
      chance -= 15;
    } else {
      chance += 5;
    }

    if (762 <= weather.pressure || weather.pressure <= 759) {
      chance -= 10;
    } else {
      chance += 5;
    }

    if (weather.visibility < 10000) {
      chance += 3;
    } else {
      chance -= 7;
    }

    if (date.season === 'summer') {
      chance += 10;

      if (weather.wind.speed <= 5 || weather.wind.gust <= 5) {
        chance += 10;
      } else {
        chance -= 6;
      }

      if (weather.weatherID === 500) {
        chance += 8;
      }

      if (weather.clouds >= 65) {
        chance += 12
      } else {
        chance -= 4;
      }

      if (weather.temp >= 22) {
        chance += 7;
      }

    }

    if (date.season === 'spring') {
      if (weather.wind.speed <= 5 || weather.wind.gust <= 5) {
        chance += 10;
      } else {
        chance -= 6;
      }
    }

    if (date.season === 'autumn') {
      if (positiveWind.indexOf(weather.wind.direction) >= 0) {
        chance += 14
      } else {
        chance -= 6;
      }

      if (weather.temp >= 15) {
        chance += 12
      } else {
        chance -= 7;
      }

    }

    if (date.season === 'winter') {
      chance += 3;
      if (positiveWind.indexOf(weather.wind.direction) >= 0) {
        chance += 11
      } else {
        chance -= 3;
      }

      if (weather.clouds >= 50) {
        chance += 10
      } else {
        chance -= 4;
      }

      if (weather.temp >= 0) {
        chance += 15
      } else {
        chance -= 7;
      }

      if (weather.weatherID === 600) {
        chance += 10;
      }
    }

    return chance;
  },
  getSuccessBream: (weather, date) => {
    let chance = 41;

    if (762 <= weather.pressure || weather.pressure <= 759) {
      chance -= 10;
    } else {
      chance += 4;
    }

    if (weather.temp >= 30) {
      chance -= 25;
    }

    if (weather.wind.direction === "ЮЗ") {
      chance += 10;
    } else {
      chance -= 4;
    }

    if (weather.wind.speed <= 5 || weather.wind.gust <= 5) {
      chance += 10;
    } else {
      chance -= 6;
    }

    if (weather.visibility < 10000) {
      chance += 5;
    } else {
      chance -= 7;
    }


    if (date.season === 'summer') {
      if (weather.weatherId.toString()[0] === '5') {
        chance += 9;
      }
      if (weather.temp >= 20) {
        chance += 6;
      }
    }

    if (weather.humidity >= 50) {
      chance -= 4;
    } else {
      chance += 7
    }

    if (date.season === 'spring' || date.season === 'autumn') {
      if (15 <= weather.temp && 17 <= weather.temp) {
        chance += 10;
      } else {
        chance -= 4;
      }
    }

    return chance;
  },

  getSuccessRudd: (weather, date) => {
    let chance = 41;

    const favoritMonth = {
      good: [3, 6, 7, 8],
      middle: [2, 4, 5, 9],
      bad: [1, 10, 11, 12],

    };

    const nigativeWind = ['C', 'СЗ', 'СВ'];

    if (weather.humidity >= 40) {
      chance += 4;
    }


    if (favoritMonth.good.indexOf(date.month) >= 0) {
      chance += 17;
    } else if (favoritMonth.middle.indexOf(date.month) >= 0) {
      chance += 8;
    } else if (favoritMonth.bad.indexOf(date.month >= 0)) {
      chance -= 11;
    }

    if (date.season === 'spring') {
      if (date.month === 3) {
        chance += 12;
      }
      if (date.month === 5 && weather.temp > 18) {
        chance -= 35;
      }
    }

    if (date.month === 9 && weather.temp > 18) {
      chance += 9;
    }

    if (weather.description === 'Ясно') {
      chance += 4;
    } else {
      chance -= 5;
    }

    if (762 <= weather.pressure || weather.pressure <= 759) {
      chance -= 10;
    } else {
      chance += 4;
    }


    if (nigativeWind.indexOf(weather.wind.direction) >= 0) {
      chance -= 15;
    } else {
      chance += 5;
    }

    return chance;
  }

}

export const getSuccessPike = getSuccess.getSuccessPike;
export const getSuccessPerch = getSuccess.getSuccessPerch;
export const getSuccessBurbot = getSuccess.getSuccessBurbot;
export const getSuccessCrucian = getSuccess.getSuccessCrucian;
export const getSuccessRoach = getSuccess.getSuccessRoach;
export const getSuccessCarp = getSuccess.getSuccessCarp;
export const getSuccessBream = getSuccess.getSuccessBream;
export const getSuccessRudd = getSuccess.getSuccessRudd;

