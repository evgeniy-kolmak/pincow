import { AppBar, Toolbar, IconButton, Typography, Box, Icon, Tooltip, Skeleton } from '@mui/material';
import { usePosition } from '../hook/positionWeather';
import { Menu, FiberPin, NearMe, CalendarMonth } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import Modal from './Modal';

export default function Header({ handleMenu }) {
  const position = usePosition();
  const matchesMD = useMediaQuery('@media (max-width:900px)');
  const matchesSM = useMediaQuery('@media (max-width:600px)');
  const matchesSX = useMediaQuery('@media (max-width:450px)');
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => setOpenModal(!openModal);


  return (
    <>
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
            {position.assent
              ?
              <Typography
                onClick={handleModal}
                variant="h6"
                component="span"
                sx={{
                  ml: {
                    md: 4,
                    sm: 3,
                    xs: 2
                  },
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                {matchesSX ? null : <NearMe sx={{ mr: 0.8 }} />}
                {position?.city} {position?.temp} &deg;
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
                  <img src={`images/icons/${position?.iconId}.svg`} alt='' />
                </Icon>
              </Typography>

              :
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ml: {
                    md: 4,
                    sm: 3,
                    xs: 2
                  },
                }}
              >
                <Skeleton sx={{
                  bgcolor: 'rgba(0, 0, 0, 0.17)',
                  width: {
                    md: 113,
                    sm: 104.5,
                    xs: 95
                  },
                  height:
                  {
                    md: 40,
                    sm: 35,
                    xs: 30
                  }
                }}
                  animation="wave"
                  variant="text" />
                <Skeleton sx={{
                  bgcolor: 'rgba(0, 0, 0, 0.17)',
                  width: {
                    md: 40,
                    sm: 35,
                    xs: 30
                  },
                  height: {
                    md: 40,
                    sm: 35,
                    xs: 30
                  },
                  ml: {
                    md: 0.6,
                    sm: 0.5,
                    xs: 0.4
                  }
                }}
                  animation="wave"
                  variant="circular" />
              </Box>}
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
      <Modal openModal={openModal} handleCloseModal={handleModal} />
    </>
  );
}