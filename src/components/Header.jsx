import { AppBar, Toolbar, IconButton, Typography, Box, Icon, Tooltip } from '@mui/material';
import { useDate } from '../hook/date';
import { usePosition } from '../hook/positionWeather';
import { Menu, FiberPin } from '@mui/icons-material';
import { Link } from 'react-router-dom';



export default function Header({ handleMenu }) {
  const { currentDateString } = useDate();
  const { temp, cityName, iconId } = usePosition();
  return (
    <AppBar position='static'>
      <Toolbar >
        <Box sx={{ flexGrow: 1, }}>
          <Link style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }} to="/">
            <FiberPin sx={{
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
              cow
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
              display: 'flex',
              alignItems: 'center'
            }}>
            {cityName} {temp} &deg;
            <Icon sx={{ fontSize: 40 }}>
              <img src={`images/icons/${iconId}.svg`} />
            </Icon>
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