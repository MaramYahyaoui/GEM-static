import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { CartContext } from "../../components/cart/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);

  // compteur direct sans useMemo, React va rerender automatiquement
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { label: "ACCUEIL", path: "/home" },
    { label: "RAQUETTES DE PADEL", path: "/listeProd/raquettes" },
    { label: "ACCESSOIRES", path: "/listeProd/accessoires" },
    { label: "CONTACTEZ-NOUS", path: "/contact" },
  ];

  return (
    <div className="relative z-50">
      <div className="bg-primary/40 text-white text-sm py-2 px-4 flex justify-center font-bold">
        🚚 LIVRAISON GRATUITE À PARTIR DE 400 TND D’ACHATS
      </div>

      <div className="flex items-center justify-between bg-white dark:bg-gray-900 px-4 py-3 shadow-md">
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(true)}>
          <FaBars />
        </button>
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-28" />
        </Link>

        <div className="hidden md:flex gap-6 text-sm font-semibold uppercase text-gray-800 dark:text-white">
          {navLinks.map((item, index) => (
            <Link to={item.path} key={index} className="hover:text-primary">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/favoris">
            <FaHeart className="text-xl" />
          </Link>
          <Link to="/panier" className="relative">
            <FaShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Drawer mobile */}
      <div className={`fixed top-0 left-0 h-full w-[270px] bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setIsOpen(false)} className="text-xl">
            <FaTimes />
          </button>
        </div>

        <nav className="px-4 py-2 flex flex-col gap-3 text-sm font-semibold uppercase">
          {navLinks.map((item, index) => (
            <Link to={item.path} key={index} onClick={() => setIsOpen(false)} className="hover:text-primary border-b py-2">
              {item.label}
            </Link>
          ))}
          <Link to="/favoris" className="flex items-center gap-2 py-2">
            <FaHeart /> Favoris
          </Link>
          <Link to="/panier" className="flex items-center gap-2 py-2 relative">
            <FaShoppingCart /> Panier
            {cartCount > 0 && (
              <span className="absolute left-20  text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>

      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  );
};

export default Navbar;
