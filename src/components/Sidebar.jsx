import { Drawer, List, ListItem, ListItemIcon, Typography, Divider, IconButton } from "@mui/material";
import { Close, Widgets, LabelImportant, Info, Layers } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar(props) {
  const { menuOpen, closeMenu } = props;

  return (
    <Drawer
      anchor="right"
      open={menuOpen}
      onClose={closeMenu}
    >
      <List sx={{ width: '400px' }}>
        <ListItem>
          <ListItemIcon>
            <Widgets />
          </ListItemIcon>
          <Typography variant='h4' component='span' sx={{ flexGrow: 1 }}>Меню</Typography>
          <IconButton onClick={closeMenu}>
            <Close />
          </IconButton>
        </ListItem>
        <Divider
          sx={{
            mb: 2
          }}
        />
        <ListItem >
          <ListItemIcon>
            <LabelImportant />
          </ListItemIcon>
          <Link style={{ color: '#2d2d2d', textDecoration: 'none' }} to='/'><Typography variant="h6" component='span'>Главная</Typography></Link>
        </ListItem>
        <ListItem >
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <Link style={{ color: '#2d2d2d', textDecoration: 'none' }} to='about'><Typography variant="h6" component='span'>О нас</Typography></Link>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Layers />
          </ListItemIcon>
          <Link style={{ color: '#2d2d2d', textDecoration: 'none' }} to='forecast'><Typography variant="h6" component='span'>Прогноз</Typography>
          </Link>
        </ListItem>
      </List>
    </Drawer >

  );
}