import React from 'react';
import ProfessionalStyled from './style';

export default function Professional({ photo, name, subtitle, text }) {
  return (
    <ProfessionalStyled>
      <img src={photo} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{subtitle}</p>
        <p>{text}</p>
      </div>
    </ProfessionalStyled>
  );
}
