import React from 'react';
import { Header, Footer } from './components';

import './index.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="page-content-container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
