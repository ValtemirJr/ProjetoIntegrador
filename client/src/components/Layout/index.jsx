import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';

export default function Layout() {
  return (
    <main>
      <Nav />
      <Outlet />
    </main>
  );
}
