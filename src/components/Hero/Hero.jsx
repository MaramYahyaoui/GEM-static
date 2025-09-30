import React from 'react';
import Slider from 'react-slick';
import banner from '../../assets/banner.png';
import banner1 from '../../assets/banner1.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  const ImageList = [
    { id: 1, image: banner },
    { id: 2, image: banner1 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <Slider {...settings}>
        {ImageList.map((item) => (
          <div key={item.id} className="relative">
            <img
              src={item.image}
              alt=""
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              text-white text-4xl font-bold uppercase text-center space-y-4 bg-black/40 p-6 rounded-md shadow-md z-10">
              <h1>Are you ready</h1>
              <h1>to shine on the court</h1>
              <Link to='/listeProd'>
              <button className="bg-primary py-3 px-6 mt-4 border rounded-full">
                Shop Now
              </button>
              </Link>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
