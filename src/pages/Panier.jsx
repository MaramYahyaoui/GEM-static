import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { CartContext } from '../components/cart/CartContext';

const Panier = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    adresse: '',
    telephone: '',
    email: '',
  });

  const serviceFee = 7.0;
  const productSubtotal = cart.reduce(
    (acc, item) => acc + parseFloat(item.price) * (item.quantity || 1),
    0
  );
  const totalWithDelivery = (productSubtotal + serviceFee).toFixed(2);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const saveOrderToLocalStorage = () => {
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];

    const newOrder = {
      id: `CMD${Math.floor(Math.random() * 1000000)}`,
      ...formData,
      cartItems: cart,
      total: totalWithDelivery,
      date: new Date().toLocaleString(),
    };

    existingOrders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    clearCart(); // vide directement le panier du context
    setOrderSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center uppercase">Mes achats</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="lg:col-span-2 space-y-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="bg-white shadow-sm p-4 rounded-md flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-900 font-bold">{item.price} TND</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity || 1}
                    className="w-12 text-center border rounded"
                    disabled
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Votre panier est vide.</p>
          )}
          <Link to="/" className="text-primary underline text-sm">
            ‹ continuer mes achats
          </Link>
        </div>

        <div className="bg-white p-6 rounded-md shadow-sm space-y-4 h-fit">
          <div className="flex justify-between text-sm">
            <span>Produits</span>
            <span>{productSubtotal.toFixed(2)} TND</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Livraison</span>
            <span>{serviceFee.toFixed(2)} TND</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{totalWithDelivery} TND</span>
          </div>
          <button
            onClick={() => {
              setShowPopup(true);
              setOrderSuccess(false);
            }}
            className="bg-orange-500 w-full text-white py-2 rounded hover:bg-green-700 transition"
          >
            Valider ma commande
          </button>
        </div>
      </div>

      {/* Popup commande */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded p-6 w-full max-w-md">
            {!orderSuccess ? (
              <>
                <h2 className="text-lg font-bold mb-4">Finaliser ma commande</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    saveOrderToLocalStorage();
                  }}
                  className="space-y-3"
                >
                  {['nom','prenom','adresse','telephone','email'].map(field => (
                    <input
                      key={field}
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      placeholder={field.charAt(0).toUpperCase()+field.slice(1)}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full border p-2 rounded"
                    />
                  ))}
                  <div className="flex justify-between">
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Valider</button>
                    <button onClick={() => setShowPopup(false)} type="button" className="text-red-600">Annuler</button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-bold text-green-600 mb-4">✅ Commande passée avec succès !</h2>
                <button onClick={() => setShowPopup(false)} className="bg-orange-500 text-white px-4 py-2 rounded">Fermer</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Panier;
