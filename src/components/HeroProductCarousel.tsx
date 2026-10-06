import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CCtv from "../Logo/Cctv2.jpg";
import Computer from "../Logo/computer.png";
import printer from "../Logo/printer.webp";
import photocopy from "../Logo/photocopy.webp";
import biometric from "../Logo/biometric.webp";
import laptop from "../Logo/Laptop.jpeg";
import techAv from "../Logo/TEch.jpg";

export interface HeroProduct {
  id: number;
  title: string;
  tag: string;
  desc: string;
  badge: string;
  image: string;
  link: string;
}

export const heroProducts: HeroProduct[] = [
  {
    id: 1,
    title: "CCTV & 4K AI Surveillance",
    tag: "SURVEILLANCE // 4K",
    desc: "AI perimeter detection, 24/7 color night vision & IP video surveillance.",
    badge: "Security",
    image: CCtv,
    link: "/solutions/secured-surveillance",
  },
  {
    id: 2,
    title: "Enterprise & Refurbished Laptops",
    tag: "LAPTOPS // REFURB",
    desc: "ThinkPad, Dell Latitude & HP EliteBook enterprise-grade laptops.",
    badge: "Best Seller",
    image: laptop,
    link: "/refurbished-laptops",
  },
  {
    id: 3,
    title: "Biometrics & Access Control",
    tag: "ACCESS // BIOMETRICS",
    desc: "Facial recognition, RFID card attendance and multi-door controllers.",
    badge: "Smart Access",
    image: biometric,
    link: "/services",
  },
  {
    id: 4,
    title: "Commercial Copiers & Multifunction",
    tag: "COPIERS // A3 HEAVY",
    desc: "Konica Minolta & Canon high-speed duplex copiers and scanners.",
    badge: "Heavy Duty",
    image: photocopy,
    link: "/solutions/print-solutions",
  },
  {
    id: 5,
    title: "Secured IT & Cisco Networking",
    tag: "NETWORK // SWITCHING",
    desc: "Gigabit switches, enterprise Wi-Fi, structured cabling & firewalls.",
    badge: "Enterprise",
    image: Computer,
    link: "/solutions/secured-it-infrastructure",
  },
  {
    id: 6,
    title: "Office Printers & Toner Services",
    tag: "PRINT // MPS",
    desc: "Commercial laser & EcoTank printers with toner AMC supply.",
    badge: "Office Print",
    image: printer,
    link: "/solutions/print-solutions",
  },
  {
    id: 7,
    title: "PRO AV & Smart Boardrooms",
    tag: "PRO-AV // COLLABORATION",
    desc: "Poly Studio 4K video bars, interactive IFPD displays & smart classrooms.",
    badge: "Smart AV",
    image: techAv,
    link: "/solutions/pro-av-smart-workplaces",
  },
];

const HeroProductCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="w-full relative">
      {/* Glass card container box */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-white/20 p-3 sm:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between mb-2 sm:mb-3 px-1">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-blue-300 font-semibold">
              Live Product Portfolio
            </span>
          </div>
          <span className="text-[9px] sm:text-[11px] text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full font-mono">
            Alekhya Verified
          </span>
        </div>

        <Slider {...settings}>
          {heroProducts.map((p) => (
            <div key={p.id} className="outline-none">
              <Link
                to={p.link}
                className="group block relative rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950/80 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Image Box Container */}
                <div className="relative w-full h-44 sm:h-64 md:h-72 bg-gradient-to-b from-slate-900/90 to-black flex items-center justify-center p-3 sm:p-6 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top Badge inside image box */}
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex items-center space-x-1.5 bg-black/70 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-emerald-400">
                    <Sparkles className="w-3 h-3" />
                    <span>{p.badge}</span>
                  </div>

                  {/* Tag Name & Label INSIDE the image box at the bottom */}
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 bg-black/80 backdrop-blur-md border border-white/15 rounded-xl p-2 sm:p-3 shadow-lg flex items-center justify-between transition-all duration-300 group-hover:bg-slate-900/90 group-hover:border-blue-500/40">
                    <div className="truncate pr-2">
                      <div className="text-[9px] sm:text-[11px] font-mono text-blue-400 uppercase tracking-wider truncate font-semibold">
                        {p.tag}
                      </div>
                      <div className="text-xs sm:text-sm md:text-base font-bold text-white truncate group-hover:text-blue-300 transition-colors">
                        {p.title}
                      </div>
                    </div>
                    <div className="flex-shrink-0 bg-blue-600/80 group-hover:bg-blue-600 text-white p-1.5 sm:p-2 rounded-lg transition-transform group-hover:translate-x-0.5">
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroProductCarousel;
