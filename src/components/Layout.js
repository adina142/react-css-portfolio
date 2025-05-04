// src/components/Layout.js
import React from 'react';
import Header from '../layouts/Header';
import SideNav from '../layouts/SideNav';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <SideNav />
      <main>
        <Outlet /> {/* This renders the current route's component */}
      </main>
    </div>
  );
};

export default Layout;
