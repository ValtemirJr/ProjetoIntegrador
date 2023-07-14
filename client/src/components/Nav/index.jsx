import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';
import { SiLinktree } from 'react-icons/si';
import { MdLocationPin } from 'react-icons/md';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import Ancor from '../Ancor';
import Button from '../Button';
import Menu from '../Menu';

import NavBar from './styles';

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
    </NavBar>
  );
}

export default Nav;
