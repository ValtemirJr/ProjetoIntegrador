import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

// Componente de mapa para páginas
// Utiliza a biblioteca @react-google-maps/api
function Map() {
  // useMemo é utilizado para evitar que o mapa seja recarregado inúmeras vezes
  const libraries = useMemo(() => ['places'], []);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC6yrPLkxI22UyEmqJrmPYN9LVGNhhGe7I',
    libraries,
  });

  // Se o mapa não carregar, retorna uma mensagem de erro
  if (loadError) return 'Erro ao carregar o mapa';
  if (!isLoaded) return 'Carregando...';

  // Caso o mapa carregue, retorna o mapa com o marcador da localização da empresa
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
