import React from 'react';
import Banner from '../../components/Banner';
import Carousel from '../../components/Carousel';
import Section from '../../components/Section';
import Button from '../../components/Button';

export default function Contact() {
  return (
    <>
      <Banner>
        <h1 className="header-title__home">Bem-vindo ao CETAC</h1>
        <p className="header-subtitle__home">
          Garantimos seu bem estar, saúde física e mental, de forma segura e
          confiável!
        </p>
      </Banner>
      <Carousel />
      <Section>
        <div
          className="section-container"
          style={{ backgroundColor: '#F0F0F0' }}
        >
          <h2 className="section-title__home">Sobre a Clínica</h2>
          <p className="section-subtitle__home">
            O cuidado que você precisa, com a qualidade que você merece!
          </p>
          <p className="section-text__home">
            O CETAC Chapecó é um centro especializado em Terapias Alternativas,
            complementares e estética que está no mercado desde 2020, localizado
            em Chapecó - SC. Contamos com especializações e qualificações
            capacitadas para garantir o melhor desempenho e segurança. Partindo
            de uma abordagem centrada no paciente e priorizando o conforto e
            bem-estar, oferecemos cuidados de excelência, com tecnologias de
            ponta e tratamentos de qualidade que abrangem desde a Medicina
            Tradicional Chinesa, & Facial, até Consultas Psicológicas,
            Assistência Psicossocial e Tratamento para Dependência Química. Para
            saber mais, marque uma consulta conosco ou simplesmente venha nos
            fazer uma visita!
          </p>
          <div className="section-button-wrapper__home">
            <Button to="/about" className="section-button__about">
              Saiba mais
            </Button>
            <Button to="/contact" className="section-button__about">
              Entre em contato
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
