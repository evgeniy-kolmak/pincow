import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Card, Box, Button, SpeedDialAction, SpeedDial } from '@mui/material';
import { KeyboardBackspace, ZoomInMap, Filter1, Filter5 } from '@mui/icons-material';
import { styled } from '@mui/material/styles';


const actions = [
  { icon: <Filter5 />, name: 'На 5 дней', path: 'week' },
  { icon: <Filter1 />, name: 'На сутки', path: 'day' },
  { icon: <ZoomInMap />, name: 'Сейчас', path: 'current' },
];

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    right: theme.spacing(5),
  },

}));

export default function Done() {
  const navigate = useNavigate();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Card
        sx={{
          maxWidth: "100%",
          padding: "30px",
        }}
      >
        <Outlet />

      </Card>

      <Box sx={{ position: 'relative', mt: 3, height: 100 }}>
        <StyledSpeedDial
          direction='left'
          ariaLabel="Navigation cards"

          icon={<KeyboardBackspace />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => navigate(`/done/${action.path}`)}
            />
          ))}
        </StyledSpeedDial>
        <Button
          variant="contained"
          sx={{ width: 'max-content' }}
          type='submit'>
          <Link
            style={{
              color: 'inherit',
              textDecoration: 'none',
            }}
            to='/forecast'>Выбрать город</Link>
        </Button>
      </Box>
    </Box >

  );
}