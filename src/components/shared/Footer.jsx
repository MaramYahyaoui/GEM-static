import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary/40 text-primary font-semibold py-4">
      <div className="container mx-auto flex justify-between items-center px-4 ml">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-28" />
          </Link>
        </div>
        <div className="flex space-x-8 ml-4">
          <div>
            <h4 className="font-bold">BOUTIQUE</h4>
            <ul className="text-sm space-y-1 mt-4">
              <li>Accueil</li>
              <li>Raquettes de Padel</li>
              <li>Accessoires de Padel</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">AIDE</h4>
            <ul className="text-sm space-y-1 mt-4">
              <li>Nous Contacter</li>
              <li>Suivi de Commande</li>
              <li>Expédition</li>
              <li>Conditions de Retours</li>
            </ul>
          </div>
          <div>
            <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <span className="text-2xl"><FaFacebookF /></span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <span className="text-2xl"><FaInstagram /></span>
            </a>
          </div>
            <ul className="text-sm space-y-1 mt-4">
              <li>✉ info@GEM.tn</li>
              <li>📞 +216 52 662 357</li>
            
            </ul>
          </div>
          
        </div>
        <div>
        
        </div>
      </div>
      <div className="text-center text-xs mt-4">
        <p>xxxx 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;