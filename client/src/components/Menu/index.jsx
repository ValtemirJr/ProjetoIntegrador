/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';
import { SiLinktree } from 'react-icons/si';
import { MdLocationPin } from 'react-icons/md';
import Ancor from '../Ancor';

import MenuHamburguer from './styles';

// Componente de menu hamburguer para páginas
// Recebe como props a classe para estilização
// Ele surge nas telas menores e desaparece nas maiores
export default function Menu({ className }) {
  // Estado para controle do menu
  const [active, setMode] = useState(false);
  // Função para alternar o estado do menu entre aberto e fechado
  const toggleMode = () => {
    setMode(!active);
  };

  return (
    <MenuHamburguer className={className}>
      <div
        className={active ? 'icon icon__active' : 'icon'}
        onClick={toggleMode}
        role="button"
        tabIndex="0"
      >
        <div className="hamburguer hamburguerIcon" />
      </div>
      <div className={active ? 'menu menu__open' : 'menu menu__close'}>
        <div className="menu__links">
          <ul className="menu__links--list">
            <Ancor to="/" className="menu__links--list__item">
              Início
            </Ancor>
            <Ancor to="/about" className="menu__links--list__item">
              Sobre
            </Ancor>
            <Ancor to="/contact" className="menu__links--list__item">
              Entre em Contato
            </Ancor>
          </ul>
          <div className="nav__social">
            <ul className="nav__social--list">
              <a href="https://www.instagram.com/cetacchapeco/">
                <AiOutlineInstagram className="nav__social--icon" />
              </a>
              <a href="https://www.facebook.com/cetacchapeco">
                <AiFillFacebook className="nav__social--icon" />
              </a>
              <a href="https://linktr.ee/Cetacchapeco">
                <SiLinktree className="nav__social--icon" />
              </a>
              <a href="https://goo.gl/maps/5Qaes7QoZaEqzLLL9">
                <MdLocationPin className="nav__social--icon" />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </MenuHamburguer>
  );
}
