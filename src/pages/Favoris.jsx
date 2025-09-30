import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; // Pour l'icône coeur

import emptyImage from '../assets/empty-favorite.jpg';

const Favoris = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoris');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Fonction pour retirer un produit des favoris
  const removeFavorite = (id) => {
    const newFavorites = favorites.filter((prod) => prod.id !== id);
    setFavorites(newFavorites);
    localStorage.setItem('favoris', JSON.stringify(newFavorites));
  };

  return (
    <div className="min-h-screen p-6 bg-white text-center">
      <h1 className="text-4xl font-bold text-primary mb-8">Mes Favoris</h1>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-12 space-y-6">
          <img src={emptyImage} alt="wishlist vide" className="w-40 h-40 opacity-60" />
          <h2 className="text-2xl font-semibold">This wishlist is empty.</h2>
          <p className="text-gray-500 max-w-md">
            You don't have any products in the wishlist yet. You will find a lot of interesting products on our "Shop" page.
          </p>
          <Link
            to="/"
            className="bg-orange-600 text-white px-6 py-3 mt-4 font-semibold hover:bg-gray-800 transition"
          >
            RETOUR À LA BOUTIQUE
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {favorites.map((product) => (
            <div 
              key={product.id} 
              className="flex border rounded-lg shadow-md p-4 gap-4 items-center relative hover:shadow-lg transition"
            >
              {/* Lien sur toute la carte */}
              <Link to={`/detailProd/${product.id}`} className="flex gap-4 items-center flex-grow no-underline text-inherit">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-48 h-48 object-cover rounded-md flex-shrink-0"
                />
                <div className="flex flex-col items-start justify-center text-left space-y-2">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  {product.outOfStock && (
                    <span className="text-yellow-500 font-semibold">EN RUPTURE</span>
                  )}
                  {product.discount && (
                    <p className="text-gray-500">-{product.discount}%</p>
                  )}
                  {product.origPrice && (
                    <p className="text-gray-700 line-through">{product.origPrice} TND</p>
                  )}
                  <p className="text-primary font-bold">{product.price} TND</p>
                </div>
              </Link>

              {/* Icône pour retirer des favoris */}
              <button
                onClick={() => removeFavorite(product.id)}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition"
                aria-label="Retirer des favoris"
              >
                <FaHeart size={24} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoris;
