import { Drawer, ListItem } from "@mui/material";
import { Link } from 'react-router-dom'
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
        <Link to='interaction'>Interaction</Link>
        <Link to='result'>Result</Link>
        <Link to='error'>Error</Link>
      </ListItem>
    </Drawer >

  );
}