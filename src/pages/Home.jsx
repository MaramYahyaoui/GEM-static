import React from 'react';
import ProductCard from '../components/Products/ProductCard';
import two from '../assets/two.png';
import VideoSec from '../components/shared/VideoSec';
import Hero from '../components/Hero/Hero';
import products from '../Data/product';
const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section>
        <Hero />
      </section>
{/* Best Seller Section 
<section className="px-6 py-8">
  <h1 className="text-6xl font-bold text-center text-primary pb-8">Best seller!</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
    {products.slice(0, 8).map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </div>
</section>*/}

      {/* Equipement Section (Full Width) 
      <section className="relative bg-primary text-white flex flex-col-reverse lg:flex-row
                           items-center justify-between px-6 py-12 mt-10 overflow-hidden w-full">
        <div className="text-center lg:text-left z-10 lg:ml-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-6">
            ÉQUIPEMENTS EN STOCK,<br />PRÊTS À ÊTRE EXPÉDIÉS
          </h1>
          <button className="bg-white text-black font-bold py-2 px-6 rounded-md hover:bg-gray-200 transition uppercase">
            let's shop
          </button>
        </div>

        <div className="w-full lg:w-1/2 max-w-md mb-8 lg:mb-0">
          <img
            src={two}
            alt="Padel equipment"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>*/}

      {/* Video Section */}
      <section className="px-6">
        <VideoSec />
      </section>
    </div>
  );
};

export default Home;
