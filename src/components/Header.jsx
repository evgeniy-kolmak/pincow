import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { useDate } from '../hook/date';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Header({ token, handleMenu }) {
  const date = useDate();
  const [currentPosition, setCurrentPosition] = useState(null);
  console.log(currentPosition);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&appid=${token}`;
      axios(url)
        .then(res => setCurrentPosition(res))
    });
  }, []);

  return (

    <AppBar position='static'>
      <Toolbar>
        <img style={{ width: '150px', marginRight: '60%' }} src="./images/pincow-logo.png" alt="" />
        <Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>Сегодня {date} </Typography>
        <Typography variant='h6' component='span' sx={{ flexGrow: 0.3 }}>
          {currentPosition?.data.name} {Math.round(currentPosition?.data.main.temp - 273)}
          <img style={{ width: '50px', verticalAlign: 'middle', marginLeft: '10px' }} src={`https://openweathermap.org/img/wn/${currentPosition?.data.weather[0].icon}@2x.png`} />
        </Typography>
        <IconButton onClick={handleMenu}>
          <MenuIcon
            sx={{ color: '#fff' }} />
        </IconButton>
      </Toolbar>
    </AppBar>

  );


}