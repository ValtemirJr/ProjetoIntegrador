import React from 'react';

import BannerStyled from './styles';
import './bg-images.css';

// Componente de banner para páginas
// Recebe como props a classe para estilização
// e os filhos.
export default function Banner({ children, className }) {
  return <BannerStyled className={className}>{children}</BannerStyled>;
}
