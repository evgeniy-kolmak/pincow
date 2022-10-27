import { getDerectionWind, symbolToUpperCase, getWeekIcon, getWeekTemp, getTimezone, getTimeInCity } from '../storage';
import { Commit } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useDate } from "./date";

export function useWeather(data, forecast) {
  const { dayWeek } = useDate()
  const city = data?.city;
  const currentForecast = data?.list[0];
  const arrayForecastHours = data?.list;

  console.log(data);


  const timezone = getTimezone(data);
  const getIcon = getWeekIcon(arrayForecastHours);
  const getTemp = getWeekTemp(arrayForecastHours);

  const getJsxDay = arrayForecastHours
    .filter((item, i) => (1 <= i && i <= 8))
    .map((item, i) => (
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} key={i}>
        <div>{item.dt_txt.slice(11, 16)}</div>
        < img src={`../images/icons/${item.weather[0].icon}.svg`} />
        <div>{Math.round(item.main.temp)}&deg;</div>
      </div>
    ));


  const getJsxWeek = getIcon.map((item, i) => (
    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '200px' }}>
      <Typography variant='h5' component='p'>{dayWeek[i]}</Typography>
      < img src={`../images/icons/${item}d.svg`} />
      <Typography variant='h5' component='span'>{getTemp[i].maxTemp}&deg;</Typography> <Commit /> <Typography variant='h5' component='span'>{getTemp[i].minTemp}&deg;</Typography>
    </div>
  ));

  const getCurrent = {
    "city": {
      "name": city.name,
      "country": city.country,
      "population": city.population,
      "sunrise": new Date(city.sunrise * 1000).toLocaleDateString('ru', {
        hour: 'numeric',
        minute: 'numeric',
      }).slice(12),
      "sunset": new Date(city.sunset * 1000).toLocaleDateString('ru', {
        hour: 'numeric',
        minute: 'numeric',
      }).slice(12),
      "timezone": timezone.toString().split('')[0] != '-' && timezone.toString().split('')[0] != 0 ? `(GMT+${timezone})` : `(GMT${timezone})`,
      "time": getTimeInCity(timezone).slice(12, 17),

    },
    'base': {
      "temp": Math.round(currentForecast.main.temp ?? null),
      "description": symbolToUpperCase(currentForecast.weather[0].description),
      "iconId": currentForecast.weather[0]?.icon

    },
    "wind": {
      "direction": getDerectionWind(data),
      "speed": Math.round(currentForecast.wind?.speed ?? null),
      "deg": currentForecast.wind?.deg,
    },
    "main": {
      "clouds": currentForecast.clouds.all,
      "pressure": Math.round(currentForecast.main.pressure * 0.750062 ?? null),
      "visibility": Math.round(currentForecast.visibility / 1000),
      "tempFeels": Math.round(currentForecast.main.feels_like ?? null),
      "pop": Math.round(currentForecast.pop * 100),
      "count": (currentForecast?.rain?.['3h'] || currentForecast?.snow?.['3h']) ?? 0,
      "humidity": currentForecast.main.humidity,
    },
  };

  switch (forecast) {
    case 'current': return getCurrent
    case 'day': return getJsxDay
    case 'week': return getJsxWeek
  }


}