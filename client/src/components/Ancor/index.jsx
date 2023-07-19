import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { bodyFont } from '../UI/variables';

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 12px;
  font-weight: 400;
  font-family: ${bodyFont};
  margin: 0.5rem 1rem 0.5rem 0;
`;

// Componente de ancora para navegação interna
// Recebe como props o texto do link e o caminho
// para onde ele deve apontar, além de uma classe
// para estilização e os filhos.
export default function Ancor({ children, to, className }) {
  return (
    <NavLinkStyled to={to} className={className} end>
      {children}
    </NavLinkStyled>
  );
}
