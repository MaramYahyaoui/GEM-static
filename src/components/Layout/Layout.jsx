// components/Layout/Layout.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Newslette from '../shared/Newslette';
import Footer from '../shared/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Newslette/>
      <Footer/>
    </>
  );
};

export default Layout;
