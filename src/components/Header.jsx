import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { useDate } from '../hook/date';
import { usePosition } from '../hook/positionWeather';
import MenuIcon from '@mui/icons-material/Menu';


export default function Header({ handleMenu }) {
  const date = useDate();
  const defaultValue = { temp: 18, cityName: 'Minsk', iconId: '01d' };
  const { temp, cityName, iconId } = usePosition();

  return (
    <AppBar position='static'>
      <Toolbar>
        <img style={{ width: '150px', marginRight: '60%' }} src="./images/pincow-logo.png" alt="" />
        <Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>Сегодня {date} </Typography>
        <Typography variant='h6' component='span' sx={{ flexGrow: 0.3 }}>
          {cityName ?? defaultValue.cityName} {temp ?? defaultValue.temp} &deg;
          <img style={{ width: '50px', verticalAlign: 'middle', marginLeft: '10px' }} src={`https://openweathermap.org/img/wn/${iconId ?? defaultValue.iconId}@2x.png`} />
        </Typography>
        <IconButton onClick={handleMenu}>
          <MenuIcon
            sx={{ color: '#fff' }} />
        </IconButton>
      </Toolbar>
    </AppBar>

  );


}