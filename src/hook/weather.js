import { getDerectionWind, symbolToUpperCase, getWeekIcon, getWeekTemp, getTimezone, getTimeInCity } from '../storage';
import { Commit } from '@mui/icons-material';
import { Icon, Typography, Box, Divider } from '@mui/material';
import { useDate } from "./date";

export function useWeather(data, forecast) {
  const { dayWeek } = useDate()
  const city = data?.city;
  const currentForecast = data?.list[0];
  const arrayForecastHours = data?.list;

  const timezone = getTimezone(data);
  const getIcon = getWeekIcon(arrayForecastHours);
  const getTemp = getWeekTemp(arrayForecastHours);

  const getJsxDay = arrayForecastHours
    .filter((item, i) => (1 <= i && i <= 8))
    .map((item, i) => (
      <Box sx={{ display: 'flex', alignItems: 'center', width: 'max-content' }} key={i}>
        <Divider sx={{ mr: 2 }} orientation="vertical" variant="middle" flexItem />
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} >
          <Typography variant="h6" sx={{ fontSize: 18 }} >{item.dt_txt.slice(11, 16)}</Typography>
          <Icon sx={{ fontSize: 50, mt: 1.2, mb: 1.2 }}>
            <img src={`../images/icons/${item.weather[0].icon}.svg`} />
          </Icon>
          <Typography variant="h6" sx={{ fontSize: 16 }}>{Math.round(item.main.temp)}&deg;</Typography>
        </Box>
        <Divider sx={{ ml: 2 }} orientation="vertical" variant="middle" flexItem />
      </Box>
    ));


  const getJsxWeek = getIcon.map((item, i) => (
    <Box Box key={i} >
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1.5, ml: 3.5 }}>
        <Typography sx={{ width: 32, fontSize: 27 }} variant='h5' component='p'>{dayWeek[i]}:</Typography>
        <Icon sx={{ fontSize: 60, mr: 3, ml: 3 }}>
          <img src={`../images/icons/${item}d.svg`} />
        </Icon>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' component='span'>{getTemp[i].maxTemp}&deg;</Typography> <Commit sx={{ mr: 0.6, ml: 0.6 }} /> <Typography variant='h5' component='span'>{getTemp[i].minTemp}&deg;</Typography>
        </Box>
      </Box>
      <Divider sx={{ mt: 0.5 }} />
    </Box >
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
      "timezone": timezone.toString().split('')[0] !== '-' && timezone.toString().split('')[0] !== 0 ? `(GMT+${timezone})` : `(GMT${timezone})`,
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
    default: return getCurrent
  }


}