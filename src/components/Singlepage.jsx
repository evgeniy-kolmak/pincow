import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { usePosition } from '../hook/positionWeather';
import { useBackground } from '../hook/background';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function SinglePage({ data }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { iconId } = usePosition();
  const color = useBackground(data, iconId);
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
          padding: '40px',
        }}
      >
        <Outlet />
      </Container>
      <Sidebar
        menuOpen={isMenuOpen}
        closeMenu={() => setMenuOpen(false)}
      />
    </div >
  );
}


