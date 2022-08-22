import { Drawer, ListItem, IconButton } from "@mui/material";
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';


export default function Sidebar(props) {
  const { menuOpen, closeMenu } = props;

  return (
    <Drawer
      anchor="right"
      open={menuOpen}
      onClose={closeMenu}
    >
      <ListItem sx={{ width: '400px' }}>
        <Link to='/'>Main</Link>
        <Link to='about'>About</Link>
        <Link to='interaction'>Interaction</Link>
      </ListItem>
      <IconButton onClick={closeMenu}>
        <CloseIcon />
      </IconButton>
    </Drawer >

  );
}