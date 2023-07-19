import React from 'react';
import { Link } from 'react-router-dom';
import { PiUserList } from 'react-icons/pi';
import { RiServiceLine } from 'react-icons/ri';
import { BsStar } from 'react-icons/bs';
import { TfiAgenda } from 'react-icons/tfi';
import SideNav from './styles';
import { ReactComponent as Logo } from '../../../assets/logo.svg';

// Componente de navegação para páginas privadas
export default function Nav() {
  return (
    <SideNav>
      <Logo
        style={{ width: '100px', height: '100px', marginTop: '20px' }}
        className="logo"
      />
      <h1>Dashboard</h1>
      <hr />
      <ul>
        <li>
          <RiServiceLine />
          <Link to="/secure/solicitations">Solicitações de Contato</Link>
        </li>
        <li>
          <PiUserList />
          <Link to="/secure/clients">Clientes</Link>
        </li>
        <li>
          <BsStar />
          <Link to="/secure/services">Serviços</Link>
        </li>
        <li>
          <TfiAgenda />
          <Link to="/secure/schedules">Agendamentos</Link>
        </li>
      </ul>
    </SideNav>
  );
}
