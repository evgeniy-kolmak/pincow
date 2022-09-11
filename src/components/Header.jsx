import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { useDate } from '../hook/date';
import { usePosition } from '../hook/positionWeather';
import { Menu, Phishing } from '@mui/icons-material';
import { Link } from 'react-router-dom';



export default function Header({ handleMenu }) {
  const { currentDateString } = useDate();
  const { temp, cityName, iconId } = usePosition();

  return (
    <AppBar position='static'>
      <Toolbar >
        <Box sx={{ flexGrow: 1, }}>
          <Link style={{ color: 'inherit', textDecoration: 'none', display: 'flex' }} to="/">
            <Phishing sx={{
              color: '#f2df33'
            }} fontSize="large" />
            <Typography
              variant="h5"
              component="span"
              sx={{
                ml: 1,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.4rem',
                color: 'inherit',
                textDecoration: 'none',
                textTransform: 'uppercase',
                color: '#ede8e8',
              }}
            >
              pincow
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

          }}
        >
          <Typography
            sx={{
              fontSize: '17px'
            }}
          >Сегодня {currentDateString} </Typography>
          <Typography
            variant="h6"
            component="span"
            sx={{
              ml: 4,
            }}>
            {cityName} {temp} &deg;
            {/* change icon */}
            <img style={{ width: '50px', verticalAlign: 'middle', marginLeft: '5px' }} src={`https://openweathermap.org/img/wn/${iconId}@2x.png`} />
          </Typography>
        </Box>
        <IconButton onClick={handleMenu}>
          <Menu fontSize='large' sx={{ ml: 5, color: "#fff" }} />
        </IconButton>
      </Toolbar>
    </AppBar >

  );


}