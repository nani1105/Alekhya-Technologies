import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import lenovoT480 from "../Logo/lenovo-t480-2.avif";
import dellLatitude from "../Logo/Dell.webp";
import hpElitebook from "../Logo/hp.png";
import macbookAir from "../Logo/Mac.avif";
import thinkpadX1 from "../Logo/Thinkpad.jpg";



const products = [
  {
    id: 1,
    title: "Lenovo ThinkPad T480",
    desc: "Durable business laptop with Intel i5 & 8GB RAM.",
    image: lenovoT480,
  },
  {
    id: 2,
    title: "Dell Latitude 7490",
    desc: "Refurbished Dell Latitude with SSD & warranty.",
    image: dellLatitude,
  },
  {
    id: 3,
    title: "HP EliteBook 840 G5",
    desc: "Lightweight and powerful laptop for office use.",
    image: hpElitebook,
  },
  {
    id: 4,
    title: "Apple MacBook Air",
    desc: "Slim design, Retina display, excellent battery life.",
    image: macbookAir,
  },
  {
    id: 5,
    title: "Lenovo ThinkPad X1 Carbon",
    desc: "Premium ultrabook with best-in-class performance.",
    image: thinkpadX1,
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
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>
        <Slider {...settings}>
          {products.map((p) => (
            <div key={p.id}>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-6 mx-2 text-center hover:scale-105 transition-transform duration-300">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-40 w-auto mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-300">{p.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductCarousel;
