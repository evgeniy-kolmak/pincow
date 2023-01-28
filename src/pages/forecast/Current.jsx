import { useWeather } from "../../hook/weather";
import { Typography, Icon, List, ListItem, Tooltip, ListItemText, Box } from '@mui/material';
import { North, Air, Compress, WbTwilight, WbSunny, People, FilterDrama, Opacity, Grain, FormatColorReset, Visibility, FiberManualRecord, AccessTime } from '@mui/icons-material';
export default function Current({ data }) {
  const { city, base, wind, main } = useWeather(data, 'current');
  return (
    <>
      <Typography variant='h2' >Текущий прогноз</Typography>
      <List>
        <ListItem sx={{ display: 'block' }}>
          <Typography sx={{ mb: 0.5 }} variant='h3' component='h6'>{city.name} | {city.country}  </Typography>
          <Tooltip title="Текущее время в городе" placement="bottom-start">
            <Typography sx={{ display: 'flex', alignItems: 'center', mb: 0.6, fontSize: 24, fontWeight: 600 }}>
              <AccessTime sx={{ mr: 0.5, fontSize: 32 }} />{city.time} {city.timezone}
            </Typography>
          </Tooltip>
          <Tooltip title="Население" placement="bottom-start">
            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 17 }}>
              <People sx={{ mr: 0.5, fontSize: 26 }} />{city.population} человек
            </Typography>
          </Tooltip>
        </ListItem>
        <Box sx={{ border: '0.15rem solid #ccc', borderRadius: '18px', width: 'max-content' }}>
          <ListItem >
            <Icon sx={{ fontSize: 90, mr: 1 }}>
              <img src={`../images/icons/${base.iconId}.svg`} alt='' />
            </Icon>
            <ListItemText primary={<Typography variant='h4' component='h6'>{base.description}</Typography>} secondary={
              <Typography variant='h4' component='span' sx={{ display: 'flex', alignItems: 'center' }}>
                {base.temp}&deg;
                <Typography sx={{ color: '#939693' }}>(Ощущается как: {main.tempFeels}&deg;)</Typography>
              </Typography>
            } />
          </ListItem>
          <ListItem sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Tooltip title="Ветер" placement="bottom-start">
              <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 17 }}>
                <Air sx={{ mr: 0.5, fontSize: 30 }} />{wind.direction} <North style={{ transform: `rotate(${wind.deg}deg)` }} />{wind.speed}м/c
              </Typography>
            </Tooltip>
            <FiberManualRecord sx={{ ml: 1.5, mr: 1.5, fontSize: 12, color: '#ccc' }} />
            <Tooltip title="Давление" placement="bottom-start">
              <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 17 }}>
                <Compress sx={{ mr: 0.5, fontSize: 30 }} />{main.pressure} мм рт. ст.
              </Typography>
            </Tooltip>
            <FiberManualRecord sx={{ ml: 1.5, mr: 1.5, fontSize: 12, color: '#ccc' }} />
            <Tooltip title="Видимость" placement="bottom-start">
              <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 17 }}>
                <Visibility sx={{ mr: 0.5, fontSize: 30 }} />{main.visibility}км
              </Typography>
            </Tooltip>
          </ListItem>
        </Box>
        <ListItem> <Typography sx={{ display: 'flex', fontSize: 17 }}><WbSunny sx={{ mr: 0.5, fontSize: 26 }} /> Восход: {city.sunrise} /  <WbTwilight sx={{ mr: 0.5, fontSize: 26 }} /> Закат: {city.sunset}</Typography></ListItem>
        <ListItem>
          <Tooltip title="Облачность" placement="bottom-start">
            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 17 }}>
              <FilterDrama sx={{ ml: 0.7, mr: 0.5, fontSize: 30 }} />{main.clouds}%
            </Typography>
          </Tooltip>
          <Tooltip title="Влажность" placement="bottom-start">
            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 17 }}>
              <Opacity sx={{ ml: 0.7, mr: 0.5, fontSize: 30 }} />{main.humidity}%
            </Typography>
          </Tooltip>
          <Tooltip title="Вероятность осадков" placement="bottom-start">
            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 17 }}>
              <FormatColorReset sx={{ ml: 0.7, mr: 0.5, fontSize: 30 }} />{main.pop}%
            </Typography>
          </Tooltip>
          <Tooltip title="Количество осадков за 3 часа" placement="bottom-start">
            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 17 }}>
              <Grain sx={{ ml: 0.7, mr: 0.5, fontSize: 30 }} />{main.count} мм
            </Typography>
          </Tooltip>
        </ListItem>

      </List>

    </>
  );

}