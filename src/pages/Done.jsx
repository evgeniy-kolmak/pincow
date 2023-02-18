import { Link, Outlet, useNavigate, Navigate, } from 'react-router-dom';
import { Card, Box, Button, ToggleButtonGroup, ToggleButton, Paper } from '@mui/material';
import { DateRange, Today, CalendarMonth } from '@mui/icons-material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,

  }
}));


export default function Done({ response }) {
  const navigate = useNavigate();
  const [active, setActive] = useState('current');

  const handleChange = (event, path) => {
    if (path !== null) {
      navigate(`/done/${path}`);
      setActive(path);
    }
  };

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
            md: '1%',
            sm: '1.5%',
            xs: '6%'
          },
          overflowX: 'hidden',
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

          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              m: '1rem 0',
              border: (theme) => `1px solid ${theme.palette.divider}`,
              flex: 'wrap'
            }}>
            <Button
              variant="contained"
              sx={{
                width: 'max-content',
                height: 'min-content',
                ml: {
                  md: 1,
                  sm: 0.7,
                  xs: 0.5
                },
                fontSize: {
                  md: 14,
                  sm: 13,
                  xs: 11.35
                }
              }}
              type='submit'>
              <Link
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
                to='/forecast'>Выбрать город</Link>
            </Button>

            <StyledToggleButtonGroup
              size={matches ? 'smal' : 'medium'}
              value={active}
              selected={true}
              exclusive
              onChange={handleChange}
              aria-label="Forecast"
              color='info'>
              <ToggleButton
                aria-label='current'
                value='current'>
                <Today />
              </ToggleButton>
              <ToggleButton
                aria-label='day'
                value='day'>
                <DateRange />
              </ToggleButton>
              <ToggleButton
                aria-label='week'
                value='week'>
                <CalendarMonth />
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Paper>
        </Box >
        :
        <Navigate to='/forecast' replace={true} />
      }
    </Box>
  );
}


Done.propTypes = {
  response: PropTypes.number
}