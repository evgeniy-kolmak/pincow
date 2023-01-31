import { Outlet } from 'react-router-dom';
import { Container, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { usePosition } from '../hook/positionWeather';
import { useBackground } from '../hook/background';
import useMediaQuery from '@mui/material/useMediaQuery';

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
          padding: {
            md: 5,
            sm: 4,
            sx: 3
          }
        }}
      >
        <Outlet />

        <Snackbar
          open={!position.assent && position.assent !== undefined}
          // autoHideDuration={6000}

          action={!position.assent && position.assent !== undefined}
        >
          <Alert severity="warning" sx={{ width: '100%' }}>
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


