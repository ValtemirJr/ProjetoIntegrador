import React from 'react';
import styled from 'styled-components';
import {
  primaryColor,
  subtitleFont,
  greyColor,
} from '../../../components/UI/variables';
import Section from '../../../components/Section';
import Button from '../../../components/Button';

const H1 = styled.h1`
  font-size: 6rem;
  font-weight: 300;
  margin: 0;
  color: ${primaryColor};
`;

const H2 = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  font-family: ${subtitleFont};
  margin: 0;
  color: ${primaryColor};
`;

export default function NotFound() {
  return (
    <Section style={{ backgroundColor: `${greyColor}` }}>
      <H1>404</H1>
      <H2>Página não encontrada</H2>
      <Button to="/" className="section-button__404">
        Voltar para a página inicial
      </Button>
    </Section>
  );
}
