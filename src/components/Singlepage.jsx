import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { usePosition } from '../hook/positionWeather';
import { useBackground } from '../hook/background';



export default function SinglePage({ data }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { iconId } = usePosition();
  const color = useBackground(data, iconId);

  return (
    <div
      style={{
        backgroundImage: color,
        backgroundSize: '400%, 400%',
        animation: 'gradient 40s linear 0s infinite normal forwards',
        height: '100vh'
      }}
    >
      <Header handleMenu={() => setMenuOpen(true)} />
      <Container
        style={{
          backgroundColor: '#1E1E1E',
          height: 'calc(100vh - 64px)',
          padding: '40px',
        }}
      >
        <Sidebar
          menuOpen={isMenuOpen}
          closeMenu={() => setMenuOpen(false)}
        />
        <Outlet />
      </Container>
    </div>
  );
}


