import { useMapEvent } from 'react-leaflet/hooks';
import PropTypes from 'prop-types';

export default function Click({ handleClickMap }) {
  const map = useMapEvent({
    click: () => {
      map.locate()
    },
    locationfound: (location) => {
      if (handleClickMap) {
        handleClickMap(location.target['_animateToCenter'])
      };
    }
  })
  return null;
}

Click.propTypes = {
  handleClickMap: PropTypes.func
}