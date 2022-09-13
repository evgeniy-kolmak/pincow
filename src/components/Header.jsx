import { AppBar, Toolbar, IconButton, Typography, Box, Tooltip } from '@mui/material';
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
              color: '#fcad03'
            }} fontSize="large" />
            <Typography
              variant="h5"
              component="span"
              sx={{
                ml: 1,
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
            <img style={{ verticalAlign: 'middle', marginLeft: '5px' }} src={`images/icons/${iconId}.svg`} />
          </Typography>
        </Box>
        <Tooltip title="Oткрыть меню">
          <IconButton onClick={handleMenu}>
            <Menu fontSize='large' sx={{ ml: 5, color: "#fff" }} />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar >

  );


}