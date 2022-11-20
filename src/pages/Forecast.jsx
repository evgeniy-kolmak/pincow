import axios from 'axios';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Click from '../components/Click';
import Loader from '../components/Loader';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { WrongLocation, Announcement, LowPriority } from '@mui/icons-material';


export default function Forecast(props) {
  const token = 'ed91ab4fb4bd6e64a38a185d33502a50';
  const { handleData, handleCity } = props;
  const [success, setSuccess] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [coords, setCoords] = useState(null);
  const [clickMap, setClickMap] = useState(false);
  const [city, setCity] = useState(false);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setCoords([lat, lon]);
      coords ? setIsPageLoading(true) : setIsPageLoading(false);

    })

  }, []);


  const markerIcon = new L.Icon({
    iconUrl: '/images/location.svg',
    iconSize: [50, 65],
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
      }}
    >
      <List>
        <ListItem>
          <ListItemText
            primary={<Typography variant='h4' component='p'>Воспользуйтесь картой для выбора местоположения.</Typography>}
            secondary={<Typography variant='h6' component='p'>Для более точного определения - используйте "Зум".</Typography>} />
        </ListItem>
        <ListItem>
          <Typography sx={{ display: 'flex', alignItems: 'center' }} fontSize={18}><Announcement fontSize='large' sx={{ mr: 0.4 }} color='success' />Координаты вводить не нужно! Все сохраняется в памяти при выборе точки на карте.</Typography>
        </ListItem>
      </List>
      {!isPageLoading ? <Box sx={{
        bgcolor: '#fff',
        height: '100%',
        width: '100%',
        padding: '0px 3%'
      }}>
        <MapContainer style={{ width: '100%', height: '380px' }} center={coords} zoom={17} >
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
            height: '380px',
            width: '100%',
            background: 'linear-gradient(to right, #2b5876, #4e4376)',
            backgroundSize: '400%, 400%',
            animation: 'gradient 40s linear 0s infinite normal forwards',
            flexDirection: 'column',
          }}>
        <Loader />
        <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', color: '#fff', mt: 2, }}><WrongLocation sx={{ mr: 0.8, fontSize: 28 }} /> Поиск геопозиции</Typography>
        <Typography sx={{ color: '#fff', mt: 0.65, fontSize: 15 }}>Разрешите доступ к геоданным и перезагрузите страницу</Typography>
      </Box>}
      <Typography color="error" sx={{ display: 'flex', alignItems: 'center', pl: '3%', mt: 0.6, fontSize: 14 }}> <LowPriority sx={{ mr: 0.4 }} fontSize="small" color='error' />Карта имеет больший приоритет, но меньшую точность. </Typography>
      <Typography sx={{ textAlign: 'center' }} variant='h4' component='p'>или</Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: '0 2%',
          }}
        >
          <TextField onChange={handleInput} sx={{ width: '35rem', alignSelf: 'center', m: '15px 0' }} placeholder='Введите город' variant="filled" name='city' type="text" />
          <Button disabled={!city && !clickMap} sx={{ width: '10rem', mb: 3 }} variant="contained" type='submit'>Отправить</Button>
        </Box>
      </form>
      {success === "success" && (
        <Navigate to="/done/current" replace={true} />
      )}
      {success === 'fail' && (
        <Navigate to="/error" replace={true} />
      )}
    </Box>
  );
}