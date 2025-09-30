import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../Data/product';
import ProductCard from '../components/Products/ProductCard';

const ListeProd = () => {
  const { category } = useParams();
  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6 px-4">
      <div className="w-full max-w-7xl">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Tous les produits'}
          </h2>
          <span className="text-gray-600">{filteredProducts.length} produits</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProducts.length > 0 ? (
            currentProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))
          ) : (
            <p className="text-center text-gray-600">Aucun produit disponible dans cette catégorie.</p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 border rounded ${currentPage === i + 1 ? 'bg-black text-white' : 'bg-white text-black'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListeProd;
