import { Link, Outlet, useNavigate, Navigate } from 'react-router-dom';
import { Card, Box, Button, SpeedDialAction, SpeedDial } from '@mui/material';
import { Segment, ZoomInMap, Filter1, Filter5 } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const actions = [
  { icon: <Filter5 />, name: 'На 5 дней', path: 'week' },
  { icon: <Filter1 />, name: 'На сутки', path: 'day' },
  { icon: <ZoomInMap />, name: 'Сейчас', path: 'current' },
];

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionLeft': {
    right: theme.spacing(4),
  },

}));


export default function Done({ response }) {
  const navigate = useNavigate();
  const matches = useMediaQuery('@media (max-width:600px)');

  return (
    <Box>
      {response === 200
        ?
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: `calc(100vh - ${matches ? 56 : 64}px)`,
          pb: {
            md: '3%',
            sm: '4%',
            xs: '7%'
          }
        }}>
          <Card
            sx={{
              maxWidth: "100%",
              p: {
                md: 5,
                sm: 3,
                xs: 1.5
              }

            }}
          >
            <Outlet />

          </Card>

          <Box sx={{
            position: 'relative',
            height: 90,
            top: 16,
            left: {
              md: 8,
              sm: 20,
              xs: 27
            },

          }}>
            <StyledSpeedDial
              direction='left'
              ariaLabel="Navigation cards"
              icon={<Segment />}
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
          </Box>
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
        </Box >
        :
        <Navigate to='/forecast' replace={true} />
      }
    </Box>
  );
}