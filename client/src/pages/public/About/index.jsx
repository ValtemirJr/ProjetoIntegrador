import React from 'react';
import Banner from '../../../components/Banner';
import Section from '../../../components/Section';
import Button from '../../../components/Button';
import Professional from '../../../components/Professional';
import { greyColor } from '../../../components/UI/variables';
import AboutCarousel from '../../../components/Carousel/AboutCarousel';

// Página Sobre
export default function About() {
  // Função para rolar a página até a seção Conheça a Clínica
  const handleClick = () => {
    const element = document.querySelector('#clinic');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Banner className="banner-about-bg">
        <h2 className="header-title__about">Conheça nossas profissionais</h2>
        <Button className="banner-button" onClick={handleClick}>
          Conheça a Clínica
        </Button>
      </Banner>
      <Section>
        <Professional
          photo="https://static.wixstatic.com/media/f4f167_11fe748d10b1433782704ffa9ca57279~mv2.jpg/v1/crop/x_168,y_422,w_876,h_875/fill/w_275,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/_MG_6862_JPG.jpg"
          name="ADELINA SOARES DE LIMA"
          subtitle="Psicóloga, Acupunturista e Terapeuta Holística"
          text="Adelina Soares de Lima (CRP: 1208035), proprietária do CETAC Chapecó, é uma profissional altamente qualificada, que tem paixão pela recuperação das vidas de dependentes químicos. Possui um espírito acolhedor com todos os seus clientes e familiares. É pós-graduada em Teoria Cognitivo-Comportamental e Arteterapia, pela Universidade do Oeste de Santa Catarina, no curso de Psicologia (São Miguel do Oeste/SC - 2008), Terapeuta Holística Credenciada em 2020 pelo Conselho de Auto Regulamentação da Terapia Holística (CRT: 49274), Acupuntura pela Faculdade de Tecnologia IBRATE (Curitiba/PR - 2016) e concluiu o Curso Básico de Capacitação para Agentes Comunitários em Substâncias Psicoativas pela Faculdade Luterana de Teologia Cruz Azul (Chapecó/SC - 2011)."
        />
        <Professional
          photo="https://static.wixstatic.com/media/f4f167_706f8b24d3fe412c82803b8f60dc97cd~mv2.jpg/v1/crop/x_239,y_659,w_551,h_551/fill/w_289,h_289,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/_MG_6847_JPG.jpg"
          name="ANA CAROLINA MARSANGO"
          subtitle="Secretária, Massoterapeuta e Terapeuta Holística"
          text="Ana Carolina é a profissional responsável por atuar em Terapias Integrativas Complementares de forma profissional, responsável e atenciosa, visando o bem-estar físico, psíquico e energético do cliente. Ana cursa Psicologia na Universidade do Oeste de Santa Catarina (Chapecó/SC) e é formada em Massagem com Conchas e Bambu, Massagem Bioenergética, Cromoterapia, Aromaterapia, Florais de Bach e de Minas, além de Arteterapia pelo Instituto Fisiomar (Chapecó/SC - 2018)."
        />
      </Section>
      <Section id="clinic">
        <div
          className="section-container"
          style={{ backgroundColor: greyColor }}
        >
          <h2 className="section-title__about">Conheça a Clínica</h2>
          <p className="section-text__about">
            O CETAC Chapecó é um centro especializado em Terapias Alternativas,
            Complementares e Estética, que está no mercado desde 2020,
            localizado em Chapecó (Santa Catarina). Contamos com uma equipe
            especializada e formada por profissionais capacitados para um melhor
            desempenho e segurança. Partindo de uma abordagem centrada no
            paciente, priorizando o conforto e bem-estar, oferecemos cuidados de
            excelência, com tecnologias de ponta e tratamentos de qualidade que
            abrangem desde a Medicina Tradicional Chinesa, Terapias Alternativas
            e Yoga, Massoterapia e Estética Corporal & Facial, até Consultas
            Psicológicas, Assistência Psicossocial e Tratamento para Dependentes
            Químicos. Para saber mais, marque uma consulta com um dos
            experientes membros da nossa equipe ou simplesmente passe aqui para
            nos conhecer.
          </p>
          <div className="section-button-wrapper__about">
            <Button to="/contact" className="section-button__about">
              Entre em contato
            </Button>
          </div>
        </div>
      </Section>
      <AboutCarousel />
    </>
  );
}
