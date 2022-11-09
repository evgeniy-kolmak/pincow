import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Loader from "../components/Loader";
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Box, Typography } from '@mui/material';
import { WrongLocation } from '@mui/icons-material';


export default function Map({ size }) {
  const [width, height] = size;
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setCoords([lat, lon]);
      coords ? setIsPageLoading(true) : setIsPageLoading(false);

    })

  }, [])

  const markerIcon = new L.Icon({
    iconUrl: '/images/location.svg',
    iconSize: [50, 65],
    popupAnchor: [0, -25]
  });

  return (
    <Box
      sx={{
        bgcolor: '#fff',
        height: '100%',
        width: '100%',
        padding: '0px 3%'
      }}
    >
      {!isPageLoading ? <MapContainer style={{ width: width, height: height }} center={coords} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords} icon={markerIcon}>
          <Popup>
            Вы здесь!
          </Popup>
        </Marker>
      </MapContainer > : <Box
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
    </Box>

  );
}