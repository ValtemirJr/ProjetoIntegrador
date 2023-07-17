import React from 'react';
import Banner from '../../components/Banner';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Professional from '../../components/Professional';

export default function About() {
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
          text="Adelina Soares de Lima (CRP: 1208035), proprietária do CETAC Chapecó, é uma profissional altamente qualificada, que tem paixão pela recuperação da vidas de dependentes químicos. Possui um espírito acolhedor com todos seus clientes e familiares. É pós-graduada em Teoria Cognitiva Comportamental e Arteterapia, pela Universidade do Oeste de Santa Catarina no curso de Psicologia (São Miguel do Oeste/SC - 2008), Terapeuta Holística Credenciada em 2020 pelo Conselho de Auto Regulamentação da Terapia Holística (CRT: 49274), Acupuntura pela Faculdade de Tecnologia IBRATE (Curitiba/PR - 2016) e Curso Básico de Capacitação para Agentes Comunitários em Substâncias Psicoativas pela Faculdade Luterana de Teologia Cruz Azul (Chapecó/SC - 2011)."
        />
        <Professional
          photo="https://static.wixstatic.com/media/f4f167_706f8b24d3fe412c82803b8f60dc97cd~mv2.jpg/v1/crop/x_239,y_659,w_551,h_551/fill/w_289,h_289,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/_MG_6847_JPG.jpg"
          name="ANA CAROLINA MARSANGO"
          subtitle="Secretária, Massoterapeuta e Terapeuta Holística"
          text="Ana Carolina é a profissional responsável por atuar em Terapias Integrativas Complementares de forma profissional, responsável e atenciosa, visando no bem estar físico, psíquico e energético do cliente. Ana cursa Psicologia na Universidade do Oeste de Santa Catarina (Chapecó/SC) e é formada em Massagem com Conchas e Bamboo, Massagem Bioenergética, Cromoterapia, Aromaterapia, Florais de Bach e de Minas e Arteterapia pelo Instituto Fisiomar (Chapecó/SC - 2018)."
        />
      </Section>
      <Section id="clinic">Conheça a clínica</Section>
    </>
  );
}
