import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
export default function SinglePage() {
  const token = 'ed91ab4fb4bd6e64a38a185d33502a50';

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header token={token} handleMenu={() => setMenuOpen(true)} />
      <Container>
        <Sidebar
          menuOpen={isMenuOpen}
          closeMenu={() => setMenuOpen(false)}
        />
        <Outlet />
      </Container>
    </>
  );
}

// нужен крестик для закрытия
