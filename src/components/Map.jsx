import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Click from '../components/Click';
import { Box, Skeleton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { usePosition } from '../hook/positionWeather';
import PropTypes from 'prop-types';

export default function Map(props) {
  const { zoom, scrollWheelZoom, handleClickMap } = props;
  const position = usePosition();
  const matches = useMediaQuery('@media (max-width:600px)');
  const markerIcon = new L.Icon({
    iconUrl: 'images/location.svg',
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
      {position
        ?
        < MapContainer
          style={{
            width: '100%',
            height: matches ? '280px' : '380px'
          }}
          center={position?.coords}
          zoom={zoom}
          scrollWheelZoom={scrollWheelZoom}>
          <Click handleClickMap={handleClickMap} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            position?.assent
              ?
              <Marker position={position?.coords} icon={markerIcon}>
                <Popup>
                  Вы здесь!
                </Popup>
              </Marker>
              :
              null
          }
        </MapContainer>
        :
        <Box
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
        </Box>
      }
    </Box >
  );
}

Map.propTypes = {
  zoom: PropTypes.number,
  scrollWheelZoom: PropTypes.bool,
  handleClickMap: PropTypes.func
}