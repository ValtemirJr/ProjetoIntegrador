import React from 'react';
import Map from '../../components/Map';
import Section from '../../components/Section';
import SocialList from '../../components/SocialList';
import Form from '../../components/Form/Contact';

export default function Contact() {
  return (
    <Section className="section-contact-container">
      <div className="section-contact">
        <div className="section-contact__info">
          <h2 className="section-contact__title">Entre em contato conosco</h2>
          <p className="section-contact__text">
            O CETAC tem o compromisso de fornecer cuidados de saúde abrangentes
            e de qualidade. Para saber mais sobre nossa clínica e como podemos
            ajudar você, entre em contato conosco hoje.
          </p>
          <p className="section-contact__text">
            R. Clevelândia, 1111D - Jardim Itália, Chapecó - SC, 89802-405,
            Brasil
          </p>
          <a href="mailto:cetac.controle@gmail.com">cetac.controle@gmail.com</a>
          <p className="section-contact__text">(49) 3329-2006</p>
          <div className="footer-social-media">
            <SocialList className="nav__social--list" />
          </div>
        </div>
        <Form />
      </div>
      <Map />
    </Section>
  );
}
