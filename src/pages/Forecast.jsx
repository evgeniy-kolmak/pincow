import axios from 'axios';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { TextField, Button, Box, Grid, Typography, List, ListItem, ListItemText } from '@mui/material';
import Map from "../components/Map";
import { Announcement, LowPriority, LocationOff } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Forecast(props) {
  const token = process.env.REACT_APP_TOKEN;
  const { handleData, handleCity, handleResponse } = props;
  const [clickMap, setClickMap] = useState(null);
  const [response, setResponse] = useState(null);
  const [city, setCity] = useState(false);
  const matches = useMediaQuery('@media (max-width:600px)');

  const getData = async (url) => {
    try {
      const response = await axios(url);
      handleData(response.data);
      setResponse(response.status);
      handleResponse(response.status);
    } catch (error) {
      setResponse(error)
    }
  }

  const handleInput = (e) => {
    setCity(e.target.value);
  }

  const handleClickMap = data => {
    setClickMap(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const city = e.target.city.value.trim();
    handleCity(city);
    setCity(city);

    getData(
      clickMap && !city
        ?
        `https://api.openweathermap.org/data/2.5/forecast?lat=${clickMap?.lat.toFixed(4)}&lon=${clickMap?.lng.toFixed(4)}&lang=ru&units=metric&appid=${token}`
        :
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=${token}`
    );

  }


  return (
    <Box
      sx={{
        bgcolor: '#fff',
        borderRadius: 3
      }}
    >
      <List>
        <ListItem>
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontSize: {
                    md: 38,
                    sm: 30,
                    xs: 25
                  }
                }}
                component='p'>
                Воспользуйтесь картой для выбора местоположения.
              </Typography>}
            secondary={
              <Typography
                sx={{
                  fontSize: {
                    md: 24,
                    sm: 20,
                    xs: 17
                  },
                }}
                component='p'>
                Для более точного определения - используйте "Зум".
              </Typography>}
          />
        </ListItem>
        <ListItem>
          <Grid container
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} item md={0.7} sm={1} xs={12}>
              <Announcement
                sx={{
                  verticalAlign: 'middle',
                  fontSize: matches ? 42 : 35
                }}
                color='success' />
            </Grid>
            <Grid item md={10} sm={10} xs={12}>
              <Typography
                sx={{
                  fontSize: {
                    md: 18,
                    sm: 17,
                    xs: 16
                  }
                }}
              >
                Координаты вводить не нужно! Все сохраняется в памяти при выборе точки на карте.
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
        <Typography
          color="error"
          sx={{
            display: 'flex',
            alignItems: 'center',
            pl: '3%',
            mb: 0.6,
            fontSize: 14
          }}>
          <LocationOff
            sx={{
              mr: 0.4
            }}
            fontSize="small"
            color='error' />
          При отключении геолокации - карта не&nbsp;доступна.
        </Typography>
        <Map
          zoom={17}
          scrollWheelZoom={true}
          handleClickMap={handleClickMap} />
        <ListItem>
          <Typography
            color="error"
            sx={{
              display: 'flex',
              alignItems: 'center',
              pl: '2%',
              mt: 0.1,
              fontSize: 14
            }}>
            <LowPriority
              sx={{
                mr: 0.6
              }}
              fontSize="small"
              color='error' />
            Карта имеет больший приоритет, но меньшую точность.
          </Typography>
        </ListItem>
      </List>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: {
            md: 30,
            sm: 26,
            xs: 22
          }
        }}
        component='p'>
        или
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: '0 2%',
          }}
        >
          <TextField
            onChange={handleInput}
            size='small'
            sx={{
              width: '60%',
              alignSelf: 'center',
              m: '15px 0'
            }}
            placeholder='Введите город'
            variant="standard"
            name='city'
            type="text" />
          <Button
            disabled={!city && !clickMap}
            sx={{
              width: '10rem',
              mb: 3,
              alignSelf: matches ? 'center' : 'start'
            }}
            variant="contained"
            type='submit'>
            Отправить
          </Button>
        </Box>
      </form>
      {
        response === 200 && (
          <Navigate to="/done/current" replace={true} />
        )
      }
      {
        response instanceof Error && (
          <Navigate to="/error" replace={true} />
        )
      }

    </Box >
  );
}