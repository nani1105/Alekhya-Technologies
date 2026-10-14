import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export interface ProductItem {
  title: string;
  path: string;
}

export const PRODUCTS_LIST: ProductItem[] = [
  { title: 'Photocopier', path: '/products/photocopier' },
  { title: 'Laptop & Desktops', path: '/products/laptop-desktops' },
  { title: 'LaserJet & Dot Matrix', path: '/products/laserjet-dot-matrix' },
  { title: 'CCTV Systems & Video Wall', path: '/products/cctv-video-wall' },
  { title: 'Biometric Devices', path: '/products/biometric-devices' },
  { title: 'Projectors', path: '/products/projectors' },
  { title: 'IP Intercom System', path: '/products/ip-intercom-systems' },
  { title: 'Large LED Display Panel', path: '/products/large-led-display-panel' },
];

interface TypewriterProductsProps {
  className?: string;
  badgeClassName?: string;
}

export const TypewriterProducts: React.FC<TypewriterProductsProps> = ({
  className = '',
  badgeClassName = '',
}) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = PRODUCTS_LIST[index].title;
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < current.length) {
        // Typing forward
        timer = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 70);
      } else {
        // Finished typing, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayText.length > 0) {
        // Deleting characters
        timer = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length - 1));
        }, 35);
      } else {
        // Finished deleting, brief pause then next word
        timer = setTimeout(() => {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % PRODUCTS_LIST.length);
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);

  const activeProduct = PRODUCTS_LIST[index];

  return (
    <Link
      to={activeProduct.path}
      className={`inline-flex items-center align-middle font-bold text-[#0077B6] hover:text-[#00B4D8] transition-colors group ${badgeClassName}`}
      title={`Explore ${activeProduct.title} solutions`}
      aria-label={`Current product: ${activeProduct.title}`}
    >
      <span className={`bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent font-extrabold ${className}`}>
        {displayText}
      </span>
      {/* Blinking Typewriter Cursor */}
      <span
        className="inline-block w-[2.5px] h-[1.1em] ml-1 bg-[#00B4D8] animate-cursor-blink rounded-full align-middle"
        aria-hidden="true"
      />
    </Link>
  );
};

export default TypewriterProducts;
