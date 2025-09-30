import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const RelatedProducts = ({ products }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="related-products-swiper"
      >
        {products.map((prod) => (
          <SwiperSlide key={prod.id}>
            <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
              <img
                src={prod.image}
                alt={prod.nom}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h3 className="text-md font-semibold text-gray-800 mb-2">{prod.nom}</h3>
              <p className="text-lg font-bold text-orange-600 mb-2">{prod.prix} TND</p>
              <a
                href={`/detailProd/${prod.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Voir
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProducts;