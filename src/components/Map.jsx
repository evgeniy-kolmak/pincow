import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Box, Skeleton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Map() {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [coords, setCoords] = useState(null);
  const matches = useMediaQuery('@media (max-width:600px)');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setCoords([lat, lon]);
      coords ? setIsPageLoading(false) : setIsPageLoading(true);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const markerIcon = new L.Icon({
    iconUrl: '/images/location.svg',
    iconSize: [matches ? 40 : 50, matches ? 55 : 65],
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
      {isPageLoading ? <MapContainer style={{ width: '100%', height: matches ? '280px' : '380px' }} center={coords} zoom={13} scrollWheelZoom={false}>
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
          height: matches ? '280px' : '380px',
          width: '100%',
        }}>
        <Skeleton
          animation='wave'
          variant="rectangular"
          sx={{
            bgcolor: 'rgba(0, 0, 0, 0.43)',
            width: '100%',
            height: '100%'
          }}
        />
      </Box>}
    </Box>

  );
}