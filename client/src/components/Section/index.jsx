import React from 'react';

import SectionStyled from './styles';
import './bg-images.css';

export default function Section({ children, className, style, id }) {
  return (
    <SectionStyled className={className} style={style} id={id}>
      {children}
    </SectionStyled>
  );
}
