import React from 'react';

import SectionStyled from './styles';
import './bg-images.css';

// Componente de seção para páginas
// Recebe como props a classe para estilização
// Seus filhos,
// Classe
// e ID.
// Eles podem ser todos opcionais.
export default function Section({ children, className, style, id }) {
  return (
    <SectionStyled className={className} style={style} id={id}>
      {children}
    </SectionStyled>
  );
}
