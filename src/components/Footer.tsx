import React from 'react';
import { Shield, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white mt-20 overflow-hidden">
      {/* Wave Animation Top */}
      <div className="absolute -top-16 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
        <svg
          className="relative block w-[calc(200%+1.3px)] h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.27C188.15,69.4,93.84,101.35,0,120V0H1200V120c-110.52-27.65-221.05-55.29-332.61-56.27C747.17,63.18,634.53,100.33,500,100.33S252.83,63.18,321.39,56.27Z"
            fill="#1f2937"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
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

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                
                <span className="text-gray-300"><a
              href="tel:+919573376389">+91 95733 76389</a> </span>
              </div>
              <div className="flex items-center space-x-2 break-all">
                <Mail className="h-4 w-4 text-blue-400" />
                <a
                  href="mailto:alekhyatechnologies99@gmail.com"
                  className="text-gray-300 hover:underline"
                >
                  alekhyatechnologies99@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Hyderabad, Telangana</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
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

        {/* Footer bottom */}
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
