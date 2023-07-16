import React from 'react';

import SectionStyled from './styles';
import './bg-images.css';

export default function Section({ children, className, style }) {
  return (
    <SectionStyled className={className} style={style}>
      {children}
    </SectionStyled>
  );
}
