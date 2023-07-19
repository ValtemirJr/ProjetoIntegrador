import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../../assets/logo.svg';

import Ancor from '../../Ancor';
import Button from '../../Button';
import Menu from '../../Menu';

import NavBar from './styles';
import SocialList from '../../SocialList';

// Componente de navegação para páginas públicas
function Nav() {
  return (
    <NavBar>
      <div className="nav__header">
        <Link to="/">
          <Logo className="nav__header--logo" />
        </Link>
        <div className="nav__header--title">
          <h1>CETAC Chapecó</h1>
          <p>
            Centro especializado em Terapias Alternativas, Complementares e
            Estética
          </p>
        </div>
        <Button to="/contact" className="nav__header--button">
          Entre em contato
        </Button>
      </div>
      <Menu className="div__menu--mobile" />
      <div className="nav__content">
        <div className="nav__links">
          <ul className="nav__links--list">
            <Ancor to="/">Início</Ancor>
            <Ancor to="/about">Sobre</Ancor>
            <Ancor to="/contact">Entre em Contato</Ancor>
          </ul>
        </div>
        <div className="nav__social">
          <SocialList />
        </div>
      </div>
    </NavBar>
  );
}

export default Nav;
