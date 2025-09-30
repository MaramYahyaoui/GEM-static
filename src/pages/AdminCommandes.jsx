import React, { useState, useEffect } from 'react';

const AdminCommandes = () => {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (authenticated) {
      const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
      setOrders(storedOrders);
    }
  }, [authenticated]);

  const handleLogin = () => {
    if (password === 'admin123') {
      setAuthenticated(true);
    } else {
      alert('Mot de passe incorrect');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setPassword('');
  };

  if (!authenticated) {
    return (
      <div className='flex flex-col items-center shadow-xl bg-primary/40 text-white p-8 space-y-4 mt-24 mx-auto w-full max-w-xl rounded-lg'>
        <h2 className='text-2xl font-bold'>Connexion Admin</h2>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full text-black focus:outline-none"
        />
        <button
          onClick={handleLogin}
          className="bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-gray-800 transition"
        >
          Se connecter
        </button>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center shadow-xl text-black p-6 space-y-6 mt-12 mx-auto w-full max-w-6xl bg-white rounded-lg'>
      <div className="w-full flex justify-between items-center">
        <h2 className='text-2xl font-bold'>Liste des Commandes</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white font-bold py-1 px-4 rounded-md hover:bg-red-700 transition"
        >
          Déconnexion
        </button>
      </div>

      {orders.length === 0 ? (
        <p>Aucune commande enregistrée.</p>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Nom</th>
                <th className="p-2 border">Prénom</th>
                <th className="p-2 border">Adresse</th>
                <th className="p-2 border">Téléphone</th>
                <th className="p-2 border">Articles</th>
                <th className="p-2 border">Total (TND)</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2 border">{order.date}</td>
                  <td className="p-2 border">{order.nom}</td>
                  <td className="p-2 border">{order.prenom}</td>
                  <td className="p-2 border">{order.adresse}</td>
                  <td className="p-2 border">{order.telephone}</td>
                  <td className="p-2 border">
                    <ul className="list-disc pl-4">
                      {order.cartItems.map((item, i) => (
                        <li key={i}>
                          {item.name} - {item.price} TND × {item.quantity}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-2 border font-semibold">{order.total} TND</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminCommandes;
