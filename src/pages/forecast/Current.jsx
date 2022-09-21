import { useWeather } from "../../hook/weather";
import { Typography, Icon, List, ListItem, ListItemIcon } from '@mui/material';
import { North, Air, Compress } from '@mui/icons-material';
export default function Current({ data }) {
  const { temp, cityName, iconId, description, wind, pressure } = useWeather(data);


  return (
    <>
      <Typography variant='h2' >Текущий прогноз</Typography>
      <List>
        <ListItem>
          <Typography variant='h3' component='span'>{cityName} {temp}&deg;</Typography>
          <Icon sx={{ fontSize: 40 }}>
            <img src={`../images/icons/${iconId}.svg`} />
          </Icon>
        </ListItem>
        <ListItem>
          <Typography variant='h5' component='h6'>{description}</Typography>
        </ListItem>

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
          <Typography variant='h6' component='span'>Давление : {pressure} мм рт. ст.</Typography>
        </ListItem>
      </List>
    </>
  );

}