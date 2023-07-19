import React from 'react';
import ButtonStyled from './styles';

// Componente de botão para páginas
// Recebe como props o texto do botão, o caminho
// para onde ele deve apontar, além de uma classe
// para estilização e os filhos.
function Button({ children, to, className, onClick }) {
  return (
    <ButtonStyled to={to || undefined} className={className} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
