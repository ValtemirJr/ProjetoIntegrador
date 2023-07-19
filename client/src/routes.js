import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Layout from './components/Layout';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Contact from './pages/public/Contact';
import NotFound from './pages/public/NotFound';
import Login from './pages/secure/Login';
import SecureHome from './pages/secure/Secure';
import Solicitations from './pages/secure/Solicitations';
import ClientList from './pages/secure/Clients/List';
import ClientUpdate from './pages/secure/Clients/Update';

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
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/secure/login" element={<Login />} />
          <Route path="/secure/" element={<SecureHome />}>
            <Route path="/secure/solicitations" element={<Solicitations />} />
            <Route path="/secure/clients" element={<ClientList />} />
            <Route path="/secure/clients/:id" element={<ClientUpdate />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
