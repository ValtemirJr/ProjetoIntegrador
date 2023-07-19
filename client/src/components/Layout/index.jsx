import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/public';
import Footer from '../Footer';

export default function Layout() {
  return (
    <main>
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
}
