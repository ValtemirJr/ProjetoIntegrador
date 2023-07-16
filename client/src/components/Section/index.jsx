import React from 'react';

import SectionStyled from './styles';

export default function Section({ children, className }) {
  return <SectionStyled className={className}>{children}</SectionStyled>;
}
