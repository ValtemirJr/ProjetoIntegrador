import React from 'react';

import BannerStyled from './styles';

export default function Banner({ children, className }) {
  return <BannerStyled className={className}>{children}</BannerStyled>;
}
