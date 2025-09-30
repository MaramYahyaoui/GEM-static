// DetailProd.jsx
import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../Data/product";
import RelatedProducts from "../components/shared/RelatedProducts";
import { CartContext } from "../components/cart/CartContext";

const DetailProd = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = products.find((p) => p.id === productId);

  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product?.img);

  if (!product)
    return (
      <p className="text-center text-gray-600 p-6">Produit introuvable</p>
    );

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={
            i <= Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
          }
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gray-700">Accueil</Link> {" > "}
          <Link to={`/listeProd/${product.category}`} className="hover:text-gray-700 capitalize">{product.category}</Link> {" > "}
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Main Product Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row gap-6 p-6">
          <div className="w-full md:w-1/2">
            {/* Main Image */}
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            {/* Thumbnail Images */}
            <div className="flex gap-2 overflow-x-auto">
              {product.images.filter(img => img !== product.img).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} - Thumbnail ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-md cursor-pointer hover:opacity-75"
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center mb-4">
                {renderStars(product.rating)}
                <span className="ml-2 text-gray-600 text-sm">({product.rating}/5)</span>
              </div>
              <p className="text-xl text-gray-700 mb-2">
                Prix : <span className="font-semibold">{product.price} TND</span>
              </p>
              {product.discount && (
                <p className="text-sm text-red-600 mb-2">Remise : {product.discount}%</p>
              )}
              {product.origPrice && (
                <p className="text-sm text-gray-500 line-through mb-4">{product.origPrice} TND</p>
              )}

              {/* Description Section */}
              <p className="text-gray-600 mb-4">
                Description : Ce produit est conçu pour offrir un confort optimal et une durabilité exceptionnelle. Idéal pour les amateurs de sport de haut niveau.
              </p>

              {/* Specifications */}
              <div className="text-gray-600 mb-4">
                <p><strong>Taille :</strong> M</p>
                <p><strong>Matériau :</strong> Polyester</p>
                <p><strong>Couleur :</strong> Noir</p>
              </div>

              {/* Quantity Selector */}
              {!product.outOfStock && (
                <div className="flex items-center gap-4 mb-4">
                  <label className="text-gray-700 font-medium">Quantité :</label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                    className="w-16 border rounded p-1 text-center"
                  />
                </div>
              )}
            </div>

            {/* ✅ Correct Add to Cart Button */}
            <button
              onClick={() => addToCart(product, quantity)}
              className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Ajouter au panier ({quantity})
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Avis des clients</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {renderStars(product.rating)}
              <span className="ml-2 text-gray-600 text-sm">({product.rating}/5 basé sur 120 avis)</span>
            </div>
            <div className="border-t pt-4">
              <p className="text-gray-700 italic">"Excellent produit, très satisfait de la qualité !"</p>
              <p className="text-gray-500 text-sm mt-1">- Jean Dupont</p>
            </div>
            <div className="border-t pt-4 mt-4">
              <p className="text-gray-700 italic">"Livraison rapide, mais un peu cher."</p>
              <p className="text-gray-500 text-sm mt-1">- Marie Leclerc</p>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Produits similaires</h2>
          <RelatedProducts products={relatedProducts.map(p => ({
            image: p.img,
            nom: p.name,
            prix: p.price,
            id: p.id
          }))} />
        </div>
      </div>
    </div>
  );
};

export default DetailProd;
