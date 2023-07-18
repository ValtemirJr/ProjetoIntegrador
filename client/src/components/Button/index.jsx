import React from 'react';
import ButtonStyled from './styles';

function Button({ children, to, className, onClick }) {
  return (
    <ButtonStyled to={to || undefined} className={className} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
