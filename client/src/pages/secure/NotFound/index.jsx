import React from 'react';
import { useNavigate } from 'react-router-dom';
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${greyColor};
`;

// Componente para tratar páginas não encontradas
export default function NotFound() {
  const navigate = useNavigate();

  // Função para voltar para a página anterior
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Section style={{ backgroundColor: `${greyColor}` }}>
        <H1>404</H1>
        <H2>Página não encontrada</H2>
        <Button onClick={handleGoBack} className="section-button__404">
          Voltar para a página anterior
        </Button>
      </Section>
    </Container>
  );
}
