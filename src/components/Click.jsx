import { useMapEvent } from 'react-leaflet/hooks';

export default function Click({ handleClickMap }) {
  const map = useMapEvent({
    click: () => {
      map.locate()
    },
    locationfound: (location) => {
      handleClickMap(location.target['_animateToCenter']);
    }
  })
  return null;
}