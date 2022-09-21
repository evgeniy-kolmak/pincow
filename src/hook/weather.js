export function useWeather(data) {

  const symbolToUpperCase = word => {
    return word[0].toUpperCase() + word.slice(1);
  }

  const getDerectionWind = data => {
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

  }


  const dataWeather = {
    "cityName": data?.city.name,
    "temp": Math.round(data?.list[0].main.temp ?? null),
    "description": symbolToUpperCase(data?.list[0].weather[0].description),
    "iconId": data?.list[0].weather[0]?.icon,
    "wind": {
      "direction": getDerectionWind(data),
      "speed": Math.round(data?.list[0].wind?.speed ?? null),
      "gust": Math.round(data?.list[0].wind?.gust ?? null),
      "deg": data?.list[0].wind?.deg,
    },
    'sys': {
      "sunrise": new Date(data?.data?.sys?.sunrise * 1000).getHours(),
      "sunset": new Date(data?.data?.sys?.sunset * 1000).getHours(),
    },
    "clouds": data?.data?.clouds?.all,
    "visibility": data?.data?.visibility,
    "pressure": Math.round(data?.list[0].main?.pressure * 0.750062 ?? null),
    "humidity": data?.data?.main?.humidity,
    "weatherId": data?.list[0].weather[0]?.id,
  }


  return dataWeather;
}