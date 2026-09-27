import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Phone } from 'lucide-react';
import logo from '../Logo/logo.png';
import { GradientButton } from "../components/ui/gradient-button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-full">
                  <img
                    src={logo}
                    alt="Alekhya Logo"
                    className="h-12 w-12 object-contain"
                  />
                </div>

              <span className="text-xl font-bold text-gray-900">Alekhya Technologies</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              } px-2 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              to="/amc"
              className={`${
                isActive('/amc') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              } px-2 py-2 text-sm font-medium transition-colors duration-200`}
            >
              AMC Contracts
            </Link>
            <Link
              to="/refurbished-laptops"
              className={`${
                isActive('/refurbished-laptops') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              } px-2 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Refurbished Laptops
            </Link>
            <Link
              to="/pc-solutions"
              className={`${
                isActive('/pc-solutions') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              } px-2 py-2 text-sm font-medium transition-colors duration-200`}
            >
              PC & AIO Solutions
            </Link>
            <Link
              to="/services"
              className={`${
                isActive('/services') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              } px-2 py-2 text-sm font-medium transition-colors duration-200`}
            >
              All Services
            </Link>
            <Link
              to="/about"
              className={`${
                isActive('/about') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              } px-2 py-2 text-sm font-medium transition-colors duration-200`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'
              } px-2 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Contact
            </Link>
            <GradientButton asChild className="flex items-center space-x-2">
              <a href="tel:+919573376389">
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </GradientButton>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/amc"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              AMC Contracts
            </Link>
            <Link
              to="/refurbished-laptops"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Refurbished Laptops
            </Link>
            <Link
              to="/pc-solutions"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              PC & AIO Solutions
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              All Services
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;