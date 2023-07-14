import React from 'react';
import ButtonStyled from './styles';

function Button({ children, to, className }) {
  return (
    <ButtonStyled to={to || undefined} className={className}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
