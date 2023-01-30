import { Link, Outlet, useNavigate, Navigate } from 'react-router-dom';
import { Card, Box, Button, SpeedDialAction, SpeedDial } from '@mui/material';
import { Segment, ZoomInMap, Filter1, Filter5 } from '@mui/icons-material';
import { styled } from '@mui/material/styles';


const actions = [
  { icon: <Filter5 sx={{ fontSize: { md: 22, xs: 17 } }} />, name: 'На 5 дней', path: 'week' },
  { icon: <Filter1 sx={{ fontSize: { md: 22, xs: 17 } }} />, name: 'На сутки', path: 'day' },
  { icon: <ZoomInMap sx={{ fontSize: { md: 22, xs: 17 } }} />, name: 'Сейчас', path: 'current' },
];

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionLeft': {
    right: theme.spacing(4),
  },

}));


export default function Done({ response }) {
  const navigate = useNavigate();

  return (
    <>
      {response === 200
        ?
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
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
                  sx={{
                    width: {
                      md: 45,
                      sx: 35,
                    },
                    height: {
                      md: 45,
                      sx: 35,
                    }
                  }}
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
    </>
  );
}