// Routers/Routers.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import ListeProd from '../pages/ListeProd';
import Contact from '../pages/Contact';
import Favoris from '../pages/Favoris';
import DetailProd from '../pages/DetailProd';
import Panier from '../pages/Panier';
import AdminCommandes from '../pages/AdminCommandes';


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/listeProd" element={<ListeProd />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/favoris' element={<Favoris />} />
      <Route path="/listeProd/:category" element={<ListeProd />} />
      <Route path="/detailProd/:id" element={<DetailProd />} />
      <Route path="/favoris" element={<Favoris />} />
      <Route path="/panier" element={<Panier/>} />
      <Route path="/admin-commandes" element={<AdminCommandes />} />
      <Route path="*" element={<h2 className="text-center mt-10">Page non trouvée</h2>} />
    </Routes>
  );
};

export default Routers;
