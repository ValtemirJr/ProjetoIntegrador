import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/public';
import Footer from '../Footer';

// Componente de layout para páginas
// Define o layout padrão para todas as páginas
// dentro da rota principal.
// É utilizado na área pública.
export default function Layout() {
  return (
    <main>
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
}
