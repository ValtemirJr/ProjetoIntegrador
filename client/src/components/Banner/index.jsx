import React from 'react';

import BannerStyled from './styles';
import './bg-images.css';

export default function Banner({ children, className }) {
  return <BannerStyled className={className}>{children}</BannerStyled>;
}
