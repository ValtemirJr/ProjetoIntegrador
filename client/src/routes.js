import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Layout from './components/Layout';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Contact from './pages/public/Contact';
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

function AppRoutes() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPublic />} />
          </Route>
          <Route path="/secure/login" element={<Login />} />
          <Route path="/secure/" element={<SecureHome />}>
            <Route path="/secure/solicitations" element={<Solicitations />} />
            <Route path="/secure/clients" element={<ClientList />} />
            <Route path="/secure/clients/:id" element={<ClientUpdate />} />
            <Route path="/secure/clients/create" element={<ClientCreate />} />
            <Route path="/secure/services" element={<ServiceList />} />
            <Route path="/secure/services/create" element={<ServiceCreate />} />
            <Route path="/secure/services/:id" element={<ServiceUpdate />} />
            <Route path="/secure/*" element={<NotFoundSecure />} />
            <Route path="*" element={<NotFoundSecure />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
