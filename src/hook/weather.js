

export function useWeather(data) {

  const symbolToUpperCase = word => {
    return word[0].toUpperCase() + word.slice(1);
  }

  const getDerectionWind = data => {
    const deg = data?.data?.wind?.deg;

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

    if (248 <= deg <= 293) {
      return 'З';
    }

    if (294 <= deg <= 337) {
      return 'СЗ';

    }

    return 'С';

  }


  const dataWeather = {
    "cityName": data?.data?.name,
    "temp": Math.round(data?.data?.main?.temp ?? null),
    "description": symbolToUpperCase(data?.data?.weather[0].description),
    "iconId": data?.data?.weather[0]?.icon,
    "wind": {
      "direction": getDerectionWind(data),
      "speed": Math.round(data?.data?.wind?.speed ?? null),
      "gust": Math.round(data?.data?.wind?.gust ?? null)
    },
    'sys': {
      "sunrise": new Date(data?.data?.sys?.sunrise * 1000).getHours(),
      "sunset": new Date(data?.data?.sys?.sunset * 1000).getHours(),
    },
    "clouds": data?.data?.clouds?.all,
    "visibility": data?.data?.visibility,
    "pressure": Math.round(data?.data?.main?.pressure * 0.750062 ?? null),
    "humidity": data?.data?.main?.humidity,
    "weatherId": data?.data?.weather[0]?.id,
  }

  return dataWeather;
}