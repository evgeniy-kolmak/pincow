import { getDerectionWind, symbolToUpperCase, getWeekIcon, getWeekTemp, getTimezone, getTimeInCity } from '../storage';
import { Commit, LightMode, Nightlight } from '@mui/icons-material';
import { Icon, Typography, Box, Divider, Grid } from '@mui/material';
import { useDate } from "./date";

export function useWeather(data, forecast) {
  const { dayWeek } = useDate()
  const city = data?.city;
  const currentForecast = data?.list[0];
  const arrayForecastHours = data?.list;

  const timezone = getTimezone(data);
  const getIcon = getWeekIcon(arrayForecastHours);
  const getTemp = getWeekTemp(arrayForecastHours);

  console.log(data);

  const getJsxDay = arrayForecastHours
    ?.filter((item, i) => (1 <= i && i <= 8))
    ?.map((item, i) => (
      <Box>
        <Grid container
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content'

          }}
          key={i}
        >
          <Grid item
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: {
                md: '1.5rem 0 0 3.5rem ',
                sm: '1rem 0 0 2rem ',
                xs: '0.5rem 0 0 0.8rem '
              }
            }} >
            {item.sys.pod !== 'n'
              ?
              <LightMode
                sx={{
                  fontSize: {
                    md: 27,
                    sm: 25,
                    xs: 23
                  },
                  mr: 1
                }}
              />
              :
              <Nightlight
                sx={{
                  fontSize: {
                    md: 27,
                    sm: 25,
                    xs: 23
                  },
                  mr: 1
                }}
              />
            }
            <Typography sx={{
              fontSize: {
                md: 25,
                sm: 23,
                xs: 21
              },
            }}
              variant='h5'
              component='p'>
              {item.dt_txt.slice(11, 16)}
            </Typography>
            <Icon
              sx={{
                fontSize: {
                  lg: 60,
                  md: 55,
                  sm: 47,
                  xs: 40
                },
                m: {
                  md: '0 3rem',
                  sm: '0 2rem',
                  xs: '0 1rem'
                }
              }}>
              <img src={`../images/icons/${item.weather[0].icon}.svg`} alt='' />
            </Icon>
            <Typography
              sx={{
                fontSize: {
                  md: 23,
                  sm: 21,
                  xs: 19
                },
              }}>
              {Math.round(item.main.temp)}&deg;
            </Typography>
          </Grid>
        </Grid>
        <Divider
          sx={{
            mt: 0.5
          }}
        />
      </Box>
    ));


  const getJsxWeek = getIcon?.map((item, i) => (
    <Box key={i} >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        p: {
          md: '1.5rem 0 0 3.5rem ',
          sm: '1rem 0 0 2rem ',
          xs: '0.5rem 0 0 0.8rem '
        }

      }}>
        <Typography sx={{
          width: 32,
          fontSize: 27
        }}
          variant='h5'
          component='p'>
          {dayWeek[i]}:
        </Typography>
        <Icon
          sx={{
            fontSize: {
              lg: 60,
              md: 55,
              sm: 47,
              xs: 40
            },
            m: {
              md: '0 3rem',
              sm: '0 2rem',
              xs: '0 1rem'
            }
          }}>
          <img src={`../images/icons/${item}d.svg`} alt='' />
        </Icon>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
          <Typography
            variant='h5'
            component='span'>
            {getTemp[i].maxTemp}&deg;
          </Typography>
          <Commit
            sx={{
              mr: 0.6,
              ml: 0.6
            }} />
          <Typography
            variant='h5'
            component='span'
          >
            {getTemp[i].minTemp}&deg;
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          mt: 0.5
        }}
      />
    </Box >
  ));

  const getCurrent = {
    "city": {
      "name": city?.name,
      "country": city?.country,
      "population": city?.population,
      "sunrise": new Date(city?.sunrise * 1000).toLocaleDateString('ru', {
        hour: 'numeric',
        minute: 'numeric',
      }).slice(12),
      "sunset": new Date(city?.sunset * 1000).toLocaleDateString('ru', {
        hour: 'numeric',
        minute: 'numeric',
      }).slice(12),
      "timezone": timezone.toString().split('')[0] !== '-' && timezone.toString().split('')[0] !== 0 ? `(GMT+${timezone})` : `(GMT${timezone})`,
      "time": getTimeInCity(timezone).slice(12, 17),

    },
    'base': {
      "temp": Math.round(currentForecast?.main.temp ?? null),
      "description": symbolToUpperCase(currentForecast?.weather[0].description),
      "iconId": currentForecast?.weather[0]?.icon

    },
    "wind": {
      "direction": getDerectionWind(data),
      "speed": Math.round(currentForecast?.wind?.speed ?? null),
      "deg": currentForecast?.wind?.deg,
    },
    "main": {
      "clouds": currentForecast?.clouds.all,
      "pressure": Math.round(currentForecast?.main.pressure * 0.750062 ?? null),
      "visibility": Math.round(currentForecast?.visibility / 1000),
      "tempFeels": Math.round(currentForecast?.main.feels_like ?? null),
      "pop": Math.round(currentForecast?.pop * 100),
      "count": (currentForecast?.rain?.['3h'] || currentForecast?.snow?.['3h']) ?? 0,
      "humidity": currentForecast?.main.humidity,
    },
  };

  switch (forecast) {
    case 'current': return getCurrent
    case 'day': return getJsxDay
    case 'week': return getJsxWeek
    default: return getCurrent
  }


}