import React from 'react';
import { Shield, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Alekhya Technologies</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for CCTV security, computer solutions, and printer services. 
              Serving businesses and individuals with 10+ years of excellence.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                10+ Years Experience
              </div>
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                24/7 Support
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@techguardpro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Tirupati, Andhra Pradesh</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <div>
                  <div className="text-gray-300">Mon - Sat: 9:00 AM - 8:00 PM</div>
                  <div className="text-gray-300">Sun: 10:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Alekhya Technologies. All rights reserved. Trusted by government agencies and enterprises.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;