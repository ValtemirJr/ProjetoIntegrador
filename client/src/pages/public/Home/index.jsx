import React from 'react';
import Banner from '../../../components/Banner';
import HomeCarousel from '../../../components/Carousel/HomeCarousel';
import Section from '../../../components/Section';
import Button from '../../../components/Button';
import Map from '../../../components/Map';

import { greyColor } from '../../../components/UI/variables';

// Página inicial
export default function Home() {
  return (
    <>
      <Banner>
        <h1 className="header-title__home">Bem-vindo ao CETAC</h1>
        <p className="header-subtitle__home">
          Garantimos seu bem estar, saúde física e mental, de forma segura e
          confiável!
        </p>
      </Banner>
      <HomeCarousel />
      <Section>
        <div
          className="section-container"
          style={{ backgroundColor: greyColor }}
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
      <Section style={{ backgroundColor: greyColor }}>
        <div className="section-work-schedule-container">
          <div className="section-work-schedule">
            <h2>Horário</h2>
            <p>Venha nos visitar!</p>
            <p>Segunda a Sexta: 08:30 - 21:00</p>
            <p>Sábado: 09:00 - 14:00</p>
            <p>Domingo: Fechado</p>
            <p>Telefone: (49) 3329-2006</p>
          </div>
          <div className="section-button-wrapper__work-schedule">
            <Button to="/contact" className="section-button__work-schedule">
              Agende sua consulta
            </Button>
          </div>
        </div>
        <Map />
      </Section>
    </>
  );
}
