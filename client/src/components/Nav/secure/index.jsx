import React from 'react';
import { NavLink } from 'react-router-dom';
import { PiUserList } from 'react-icons/pi';
import { RiServiceLine } from 'react-icons/ri';
import { BsStar } from 'react-icons/bs';
import { TfiAgenda } from 'react-icons/tfi';
import { FiLogOut } from 'react-icons/fi';
import SideNav from './styles';
import { ReactComponent as Logo } from '../../../assets/logo.svg';

// Componente de navegação para páginas privadas
export default function Nav() {
  const handleLogout = () => {
    localStorage.clear();
  };

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
          <NavLink to="/secure/solicitations">
            <RiServiceLine />
            <span>Solicitações de Contato</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/secure/clients">
            <PiUserList />
            <span>Clientes</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/secure/services">
            <BsStar />
            <span>Serviços</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/secure/schedules">
            <TfiAgenda />
            <span>Agendamentos</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={handleLogout}>
            <FiLogOut />
            <span>Sair</span>
          </NavLink>
        </li>
      </ul>
    </SideNav>
  );
}
