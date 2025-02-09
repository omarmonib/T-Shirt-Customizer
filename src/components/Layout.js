import React, { memo } from 'react';
import Navbar from './Navbar';
import Info from './Info';
import Footer from './Footer';

const Layout = memo(({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="content">
        {children}
      </main>
      <Info />
      <Footer />
    </div>
  );
});

export default Layout;
