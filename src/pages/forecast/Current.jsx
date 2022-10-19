import { useWeather } from "../../hook/weather";
import { Typography, Icon, List, ListItem, ListItemIcon } from '@mui/material';
import { North, Air, Compress, WbTwilight, WbSunny } from '@mui/icons-material';
export default function Current({ data }) {
  const { city, base, wind, main } = useWeather(data, 'current');
  return (
    <>
      <Typography variant='h2' >Текущий прогноз</Typography>
      <List>
        <ListItem>
          <Typography variant='h3' component='span'>{city.name} | {city.country} {base.temp}&deg;</Typography>
          <Icon sx={{ fontSize: 40 }}>
            <img src={`../images/icons/${base.iconId}.svg`} />
          </Icon>
        </ListItem>
        <ListItem>
          <Typography variant='h5' component='h6'>{base.description}</Typography>
        </ListItem>
        <Typography>Население: {city.population} человек</Typography>
        <Typography>Облачность: {main.clouds}%</Typography>
        <Typography>Ощущается как {main.tempFeels}&deg;</Typography>
        <Typography>Вероятность осадков {main.pop}%</Typography>
        <Typography>Влажность {main.humidity}%</Typography>
        <Typography>Количество осадков {main.count} мм/за 3 часа</Typography>
        <Typography><WbSunny /> Восход: {city.sunrise} /  <WbTwilight /> Закат: {city.sunset}</Typography>
        <ListItem>
          <ListItemIcon >
            <Air fontSize='large' />
          </ListItemIcon>
          <Typography style={{ display: 'flex', alignItems: 'center' }} variant='h6' component='span'>Ветер: {wind.direction}<North style={{ transform: `rotate(${wind.deg}deg)` }} />{wind.speed}м/c</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon >
            <Compress fontSize='large' />
          </ListItemIcon>
          <Typography variant='h6' component='span'>Давление: {main.pressure} мм рт. ст.</Typography>
        </ListItem>
      </List>
    </>
  );

}