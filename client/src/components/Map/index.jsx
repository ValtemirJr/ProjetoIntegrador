import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

function Map() {
  const libraries = useMemo(() => ['places'], []);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC6yrPLkxI22UyEmqJrmPYN9LVGNhhGe7I',
    libraries,
  });

  if (loadError) return 'Erro ao carregar o mapa';
  if (!isLoaded) return 'Carregando...';

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '75vh' }}
      zoom={15}
      center={{ lat: -27.109048224759352, lng: -52.6244023461043 }}
    >
      <MarkerF
        position={{ lat: -27.109048224759352, lng: -52.6244023461043 }}
      />
    </GoogleMap>
  );
}

export default Map;
