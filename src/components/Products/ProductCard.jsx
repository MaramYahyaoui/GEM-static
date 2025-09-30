import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { CartContext } from '../../components/cart/CartContext';

const ProductCard = ({ id, name, price, origPrice, discount, img, outOfStock }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { addToCart } = useContext(CartContext);

  // Favoris
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoris')) || [];
    setIsFavorited(favorites.some(prod => prod.id === id));
  }, [id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoris')) || [];
    let updatedFavorites;
    if (favorites.some(prod => prod.id === id)) {
      updatedFavorites = favorites.filter(prod => prod.id !== id);
    } else {
      updatedFavorites = [...favorites, { id, name, price, origPrice, discount, img, outOfStock }];
    }
    localStorage.setItem('favoris', JSON.stringify(updatedFavorites));
    setIsFavorited(!isFavorited);
  };

  // Ajouter au panier via contexte
  const handleAddToCart = () => {
    addToCart({ id, name, price, origPrice, discount, img, outOfStock }, 1);
  };

  // Animation Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }
  };

  return (
    <motion.div
      className="relative border rounded-2xl p-4 shadow-lg text-center flex flex-col bg-white"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <Link to={`/detailProd/${id}`}>
        <img src={img} alt={name} className="w-full h-48 object-cover mb-2 rounded-xl" />
        <h3 className="text-lg font-bold">{name}</h3>
        {discount && <p className="text-gray-500">-{discount}%</p>}
        {origPrice && <p className="text-gray-700 line-through">{origPrice} TND</p>}
        <p className="text-primary font-bold">{price} TND</p>
      </Link>

      {/* Icônes */}
      <div className="mt-auto flex justify-end gap-4 pt-4">
        <button onClick={toggleFavorite} className="text-xl">
          {isFavorited ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-600" />}
        </button>
        <button onClick={handleAddToCart} className="text-xl">
          <FaShoppingCart className="text-gray-800" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
