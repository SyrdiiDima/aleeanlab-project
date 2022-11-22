import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import scss from './map.module.scss';
import { useMemo } from 'react';
import Loader from 'components/LoaderSpinner/Loader';
export const Home = ({ location }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDoXOwQC2vqqJgOfbmhNzUMA_DwzrhqeNc',
  });
  const coordinates = location;

  const center = useMemo(
    () => ({ lat: coordinates.lat, lng: coordinates.long }),
    [coordinates.lat, coordinates.long]
  );
  if (!isLoaded)
    return (
      <div>
        <Loader />
      </div>
    );
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName={scss.map}>
      <Marker position={center} />
    </GoogleMap>
  );
};
