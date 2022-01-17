import GoogleMapReact from 'google-map-react';
import { useMediaQuery } from '@material-ui/core';
import {} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

function Map() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  const coordinates = { lat: 43.75474384945263, lng: -79.31631430760713 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_GOOGLE_MAP_API }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
