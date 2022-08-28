import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';



export default function SinglePage() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header handleMenu={() => setMenuOpen(true)} />
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


