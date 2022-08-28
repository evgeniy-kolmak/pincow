import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { useDate } from '../hook/date';
import { usePosition } from '../hook/positionWeather';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


export default function Header({ handleMenu }) {
  const { currentDateString } = useDate();
  const { temp, cityName, iconId } = usePosition();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Link to="/">
          <img style={{ width: '150px', marginRight: '60%' }} src="./images/pincow-logo.png" alt="" />
        </Link>
        <Typography variant='h6' component='span' sx={{ flexGrow: 1, ml: '65%' }}>Сегодня {currentDateString} </Typography>
        <Typography variant='h6' component='span' sx={{ flexGrow: 0.1 }}>
          {cityName} {temp} &deg;
          <img style={{ width: '50px', verticalAlign: 'middle', marginLeft: '10px' }} src={`https://openweathermap.org/img/wn/${iconId}@2x.png`} />
        </Typography>
        <IconButton onClick={handleMenu}>
          <MenuIcon
            sx={{ color: '#fff' }} />
        </IconButton>
      </Toolbar>
    </AppBar>

  );


}