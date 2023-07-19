import React from 'react';
import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { MdLocationPin } from 'react-icons/md';
import { SiLinktree } from 'react-icons/si';
import SocialListStyled from './styles';

// Componente de lista de redes sociais para páginas
export default function SocialList() {
  return (
    <SocialListStyled className="social-list">
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
    </SocialListStyled>
  );
}
