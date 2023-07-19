import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/secure/solicitations">Solicitações de Contato</Link>
        </li>
        <li>
          <Link to="/secure/contacts">Clientes</Link>
        </li>
        <li>
          <Link to="/secure/services">Serviços</Link>
        </li>
        <li>
          <Link to="/secure/schedules">Agendamentos</Link>
        </li>
      </ul>
    </nav>
  );
}
