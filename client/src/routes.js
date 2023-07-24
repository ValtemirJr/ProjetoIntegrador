import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Layout from './components/Layout';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Contact from './pages/public/Contact';
import PrivacyPolicy from './pages/public/PrivatePolicy';
import NotFoundPublic from './pages/public/NotFound';
import NotFoundSecure from './pages/secure/NotFound';
import Login from './pages/secure/Login';
import SecureHome from './pages/secure/Secure';
import Solicitations from './pages/secure/Solicitations';
import ClientList from './pages/secure/Clients/List';
import ClientUpdate from './pages/secure/Clients/Update';
import ClientCreate from './pages/secure/Clients/Create';
import ServiceList from './pages/secure/Services/List';
import ServiceUpdate from './pages/secure/Services/Update';
import ServiceCreate from './pages/secure/Services/Create';
import ScheduleList from './pages/secure/Schedule/List';
import ScheduleUpdate from './pages/secure/Schedule/Update';
import ScheduleCreate from './pages/secure/Schedule/Create';

// AppRoutes é o componente que define as rotas da aplicação
function AppRoutes() {
  return (
    <>
      <GlobalStyle /> {/* Componente que define o estilo global da aplicação */}
      {/* Componente que define o roteamento da aplicação */}
      <BrowserRouter>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFoundPublic />} /> {/* Rota 404 */}
          </Route>
          {/* Rotas privadas */}
          <Route path="/secure/login" element={<Login />} />
          <Route path="/secure/" element={<SecureHome />}>
            <Route path="/secure/solicitations" element={<Solicitations />} />
            <Route path="/secure/clients" element={<ClientList />} />
            <Route path="/secure/clients/:id" element={<ClientUpdate />} />
            <Route path="/secure/clients/create" element={<ClientCreate />} />
            <Route path="/secure/services" element={<ServiceList />} />
            <Route path="/secure/services/create" element={<ServiceCreate />} />
            <Route path="/secure/services/:id" element={<ServiceUpdate />} />
            <Route path="/secure/schedules" element={<ScheduleList />} />
            <Route
              path="/secure/schedules/create"
              element={<ScheduleCreate />}
            />
            <Route path="/secure/schedules/:id" element={<ScheduleUpdate />} />
            {/* Rota 404 */}
            <Route path="/secure/*" element={<NotFoundSecure />} />
            <Route path="*" element={<NotFoundSecure />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
