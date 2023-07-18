import React from 'react';
import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { SiLinktree } from 'react-icons/si';
import { MdLocationPin } from 'react-icons/md';
import FooterWrapper from './styles';

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <h2>CETAC Chapecó</h2>
        <div className="footer-info">
          <div className="footer-social-media">
            <ul className="social-list">
              <a href="https://www.instagram.com/cetacchapeco/">
                <AiOutlineInstagram className="social-icon" />
              </a>
              <a href="https://www.facebook.com/cetacchapeco">
                <AiFillFacebook className="social-icon" />
              </a>
              <a href="https://linktr.ee/Cetacchapeco">
                <SiLinktree className="social-icon" />
              </a>
              <a href="https://goo.gl/maps/5Qaes7QoZaEqzLLL9">
                <MdLocationPin className="social-icon" />
              </a>
            </ul>
          </div>
          <div className="footer-contact">
            <a href="mailto:cetac.controle@gmail.com">
              cetac.controle@gmail.com
            </a>
            <p>(49) 3329-2006</p>
          </div>
          <div className="footer-address">
            <a href="https://goo.gl/maps/5Qaes7QoZaEqzLLL9">
              <p>
                R. Clevelândia, 50D - Centro, Chapecó - SC, 89801-010, Brasil
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-credits">
        <p>
          © CETAC Chapecó - Centro especializado em Terapias Alternativas,
          Complementares e Estética
        </p>
        <p>Todos os direitos reservados.</p>
      </div>
    </FooterWrapper>
  );
}
