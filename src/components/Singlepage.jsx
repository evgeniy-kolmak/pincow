import { Outlet } from 'react-router-dom';
import { Container, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { usePosition } from '../hook/positionWeather';
import { useBackground } from '../hook/background';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';

export default function SinglePage({ data }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const position = usePosition();
  const color = useBackground(data, position?.iconId);
  const matches = useMediaQuery('@media (max-width:600px)');

  return (
    <div
      style={{
        backgroundImage: color,
        backgroundSize: '400%, 400%',
        animation: 'gradient 40s linear 0s infinite normal forwards',
        minHeight: '100vh'
      }}
    >
      <Header handleMenu={() => setMenuOpen(true)} />
      <Container
        fixed
        sx={{
          backgroundColor: '#1E1E1E',
          minHeight: `calc(100vh - ${matches ? 56 : 64}px)`,
          pt: 3,
          pb: {
            md: '3%',
            sm: '4%',
            xs: '10%'
          }
        }}
      >
        <Outlet />

        <Snackbar
          open={!position.assent && position.assent !== undefined}
          anchorOrigin={matches ? { vertical: 'bottom', horizontal: "center" } : { vertical: 'bottom', horizontal: "left" }}
        >
          <Alert
            severity="error"
            sx={{
              width: {
                md: '100%',
                sx: '85%'
              }
            }}>
            Геолокация отключена!
          </Alert>
        </Snackbar >
      </Container>
      <Sidebar
        menuOpen={isMenuOpen}
        closeMenu={() => setMenuOpen(false)}
      />
    </div >
  );
}

SinglePage.propTypes = {
  data: PropTypes.object
}
