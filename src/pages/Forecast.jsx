import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { TextField, Button, Box, Grid, Typography, List, ListItem, ListItemText } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Click from '../components/Click';
import Loader from '../components/Loader';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { WrongLocation, Announcement, LowPriority } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Forecast(props) {
  const token = process.env.REACT_APP_TOKEN;
  const { handleData, handleCity } = props;
  const [success, setSuccess] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [coords, setCoords] = useState(null);
  const [clickMap, setClickMap] = useState(false);
  const [city, setCity] = useState(false);
  const matches = useMediaQuery('@media (max-width:600px)');


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setCoords([lat, lon]);
      coords ? setIsPageLoading(true) : setIsPageLoading(false);

    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const markerIcon = new L.Icon({
    iconUrl: '/images/location.svg',
    iconSize: [matches ? 40 : 50, matches ? 55 : 65],
    popupAnchor: [0, -25]
  });

  const handleClickMap = data => {
    setClickMap(data)
  }

  const getData = async (url) => {
    try {
      const response = await axios(url);
      handleData(response.data);
      setSuccess('success')
    } catch (error) {
      setSuccess('fail');
    }
  }

  const handleInput = (e) => {
    setCity(e.target.value);
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
      </List>
      {!isPageLoading ? <Box sx={{
        bgcolor: '#fff',
        height: '100%',
        width: '100%',
        padding: '0px 3%'
      }}>
        <MapContainer
          style={{
            width: '100%',
            height: matches ? '280px' : '380px'
          }}
          center={coords}
          zoom={17} >
          <Click handleClickMap={handleClickMap} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coords} icon={markerIcon}>
            <Popup>
              Вы здесь!
            </Popup>
          </Marker>

        </MapContainer ></Box> : <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: matches ? '280px' : '380px',
            width: '100%',
            background: 'linear-gradient(to right, #2b5876, #4e4376)',
            backgroundSize: '400%, 400%',
            animation: 'gradient 40s linear 0s infinite normal forwards',
            flexDirection: 'column',
          }}>
        <Loader />
        <Typography
          variant="h6"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            mt: 2,
          }}>
          <WrongLocation
            sx={{
              mr: 0.8,
              fontSize: {
                md: 26,
                sm: 23,
                xs: 20
              }
            }} /> Поиск геопозиции</Typography>
        <Typography align='center' sx={{ color: '#fff', mt: 0.65, pr: 1, pl: 1, fontSize: matches ? 13 : 15 }}>Разрешите доступ к геоданным и перезагрузите страницу</Typography>
      </Box>}
      <Grid container
        sx={{ display: 'flex', alignItems: 'center', ml: 2, mt: 0.6, }}
      >
        <Grid item md={0.1} sm={0.5} xs={0.8}>
          <LowPriority sx={{ mr: 0.1, verticalAlign: 'middle' }} fontSize="small" color='error' />
        </Grid>
        <Grid item md={10} sm={10} xs={10}>
          <Typography color="error" sx={{ display: 'flex', alignItems: 'center', pl: '3%', fontSize: 14 }}>Карта имеет больший приоритет, но меньшую точность. </Typography>
        </Grid>
      </Grid>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: {
            md: 30,
            sm: 26,
            xs: 22
          }
        }}
        component='p'>или</Typography>
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
        success === "success" && (
          <Navigate to="/done/current" replace={true} />
        )
      }
      {
        success === 'fail' && (
          <Navigate to="/error" replace={true} />
        )
      }
    </Box >
  );
}