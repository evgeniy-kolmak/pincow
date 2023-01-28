import { AppBar, Toolbar, IconButton, Typography, Box, Icon, Tooltip } from '@mui/material';
import { usePosition } from '../hook/positionWeather';
import { Menu, FiberPin, NearMe, CalendarMonth } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Header({ handleMenu }) {
  const { temp, cityName, iconId } = usePosition();
  const matchesMD = useMediaQuery('@media (max-width:900px)');
  const matchesSM = useMediaQuery('@media (max-width:600px)');
  const matchesS = useMediaQuery('@media (max-width:450px)');
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
                ml: {
                  md: 1,
                  sm: 0.8,
                  xs: 0.6
                },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.4rem',
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
          <Box
            sx={{
              display: 'flex'
            }}
          >{matchesSM ? null
            :
            <>
              <CalendarMonth
                sx={{
                  verticalAlign: 'middle',
                  mr: 0.8
                }}
              />
              <Typography >Сегодня {new Date().toLocaleDateString('ru', {
                day: 'numeric',
                month: matchesMD ? 'numeric' : 'long',
                year: 'numeric'
              })} </Typography>
            </>
            }</Box>
          <Typography
            variant="h6"
            component="span"
            sx={{
              ml: {
                md: 4,
                sm: 3,
                xs: 2
              },
              display: 'flex',
              alignItems: 'center'
            }}>
            {matchesS ? null : <NearMe sx={{ mr: 0.8 }} />}
            {cityName} {temp} &deg;
            <Icon sx={{
              fontSize: {
                md: 40,
                sm: 35,
                xs: 30
              },
              ml: {
                md: 0.6,
                sm: 0.5,
                xs: 0.4
              }
            }}>
              <img src={`images/icons/${iconId}.svg`} alt='' />
            </Icon>
          </Typography>
        </Box>
        <Tooltip title="Oткрыть меню">
          <IconButton onClick={handleMenu}>
            <Menu sx={{
              fontSize: {
                md: 35,
                sm: 30,
                xs: 25
              },
              ml: {
                md: 5,
                sm: 3,
                xs: 1.8
              }, color: "#fff"
            }} />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar >
  );
}