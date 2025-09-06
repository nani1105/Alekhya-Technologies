import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import laptopImg from "../Logo/Laptop.jpeg";
import allinoneImg from "../Logo/computer.png";

const products = [
  {
    id: 1,
    title: "Used Laptops",
    desc: "High-quality refurbished laptops with warranty.",
    image: laptopImg,
  },
  {
    id: 2,
    title: "New All-in-One PCs",
    desc: "Powerful desktops for office & personal use.",
    image: allinoneImg,
  },
];

const ProductCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-auto object-contain mb-4"
              />
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
