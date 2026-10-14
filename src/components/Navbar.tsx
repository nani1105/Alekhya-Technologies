import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import logo from '../Logo/logo.png';
import { GradientButton } from "../components/ui/gradient-button";

import { TextShimmer } from '../components/ui/text-shimmer';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/85 backdrop-blur-md text-slate-900 border-b border-cyan-500/20 sticky top-0 z-50 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative flex items-center justify-center p-0.5 rounded-full bg-gradient-to-br from-[#00b4d8] to-[#0077b6] shadow-sm">
                <img
                  src={logo}
                  alt="Alekhya Logo"
                  className="h-10 w-10 object-contain rounded-full bg-white p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                  <span className="text-[#00B4D8]">Alekhya</span>{" "}
                  <span className="text-[#0077B6]">Technologies</span>
                </span>
                <span className="text-[10px] text-[#0077B6] font-semibold uppercase tracking-widest mt-1.5">
                  <TextShimmer duration={2.5} className="[--base-color:#0077b6] [--base-gradient-color:#00b4d8] dark:[--base-color:#0077b6] dark:[--base-gradient-color:#00b4d8]">
                    Enterprise System Integrator
                  </TextShimmer>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-sm font-semibold">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-[#0077B6] border-b-2 border-[#00B4D8]' : 'text-slate-700 hover:text-[#0077B6]'
              } py-2 transition-colors`}
            >
              Home
            </Link>

            {/* Products Dropdown (SVS Technologies Exact Structure) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 py-2 text-slate-700 hover:text-[#0077B6] transition-colors">
                <span className={`font-bold ${location.pathname.startsWith('/products') ? 'text-[#0077B6]' : 'text-slate-700 hover:text-[#0077B6]'}`}>
                  Products
                </span>
                <ChevronDown className="w-4 h-4 text-[#00B4D8]" />
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 w-72 bg-slate-950/95 border border-cyan-500/30 rounded-xl shadow-2xl py-2.5 z-50 backdrop-blur-md">
                  <Link to="/products/photocopier" className="block px-4 py-2 text-xs text-slate-200 hover:bg-slate-800 hover:text-[#00B4D8] font-semibold transition-colors">
                    Photocopier
                  </Link>
                  <Link to="/products/laptop-desktops" className="block px-4 py-2 text-xs text-slate-200 hover:bg-slate-800 hover:text-[#38BDF8] font-semibold transition-colors">
                    Laptop &amp; Desktops
                  </Link>
                  <Link to="/products/laserjet-dot-matrix" className="block px-4 py-2 text-xs text-slate-200 hover:bg-slate-800 hover:text-[#00B4D8] font-semibold transition-colors">
                    LaserJet &amp; Dot Matrix
                  </Link>
                  <Link to="/products/cctv-video-wall" className="block px-4 py-2 text-xs text-slate-200 hover:bg-slate-800 hover:text-[#38BDF8] font-semibold transition-colors">
                    CCTV Systems &amp; Video Wall
                  </Link>
                  <Link to="/products/biometric-devices" className="block px-4 py-2 text-xs text-slate-200 hover:bg-slate-800 hover:text-[#00B4D8] font-semibold transition-colors">
                    Biometric Devices
                  </Link>
                  <Link to="/products/projectors" className="block px-4 py-2 text-xs text-slate-200 hover:bg-slate-800 hover:text-[#38BDF8] font-semibold transition-colors">
                    Projectors
                  </Link>
                  <Link to="/products/ip-intercom-systems" className="block px-4 py-2 text-xs text-slate-200 hover:bg-slate-800 hover:text-[#00B4D8] font-semibold transition-colors">
                    IP Intercom System
                  </Link>
                  <Link to="/products/large-led-display-panel" className="block px-4 py-2 text-xs text-slate-200 hover:bg-slate-800 hover:text-[#38BDF8] font-semibold transition-colors">
                    Large LED Display Panel
                  </Link>
                  <div className="border-t border-slate-800 my-1.5"></div>
                  <Link to="/products" className="block px-4 py-2 text-[11px] text-[#00B4D8] font-bold uppercase tracking-wider hover:bg-slate-800">
                    Explore All 8 Product Lines →
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 py-2 text-slate-700 hover:text-[#0077B6] transition-colors">
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4 text-[#00B4D8]" />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 w-64 bg-slate-950/95 border border-cyan-500/30 rounded-xl shadow-2xl py-2 z-50 backdrop-blur-md">
                  <Link to="/solutions/pro-av-smart-workplaces" className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-[#00B4D8] font-semibold">PRO AV & Smart Workplaces</Link>
                  <Link to="/solutions/unified-collaboration" className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-[#38BDF8] font-semibold">Unified Collaboration (UCC)</Link>
                  <Link to="/solutions/secured-it-infrastructure" className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-[#00B4D8] font-semibold">Secured IT Infrastructure</Link>
                  <Link to="/solutions/secured-surveillance" className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-[#38BDF8] font-semibold">Secured Surveillance</Link>
                  <Link to="/solutions/print-solutions" className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-[#00B4D8] font-semibold">Print Solutions</Link>
                  <div className="border-t border-slate-800 my-1"></div>
                  <Link to="/enterprise-solutions" className="block px-4 py-2 text-[11px] text-[#00B4D8] font-bold uppercase tracking-wider hover:bg-slate-800">All Enterprise Solutions & OEMs →</Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 py-2 text-slate-700 hover:text-[#0077B6] transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-[#00B4D8]" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-56 bg-slate-950/95 border border-cyan-500/30 rounded-xl shadow-2xl py-2 z-50 backdrop-blur-md">
                  <Link to="/services/professional-services" className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-[#00B4D8]">Professional Services</Link>
                  <Link to="/services/managed-services" className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-[#00B4D8]">Managed Services</Link>
                  <Link to="/services/support-maintenance" className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-[#00B4D8]">Support & Maintenance (AMC)</Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 py-2 text-slate-700 hover:text-[#0077B6] transition-colors">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4 text-[#00B4D8]" />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 w-48 bg-slate-950/95 border border-cyan-500/30 rounded-xl shadow-2xl py-2 z-50 backdrop-blur-md">
                  <Link to="/resources/blog" className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-[#00B4D8]">Blog</Link>
                  <Link to="/case-studies" className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-[#00B4D8]">Case Studies</Link>
                </div>
              )}
            </div>

            <Link to="/contact-us" className="text-slate-700 hover:text-[#0077B6] transition-colors">Contact Us</Link>

            <GradientButton asChild className="px-3.5 xl:px-4 py-2 text-xs flex items-center space-x-1 shadow-sm">
              <a href="tel:+919573376389">
                <Phone className="h-3.5 w-3.5" />
                <span>Call +91 95733 76389</span>
              </a>
            </GradientButton>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-[#0077B6] p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-cyan-500/20 px-4 py-4 space-y-3 max-h-[85vh] overflow-y-auto">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-white">Home</Link>
          
          {/* Mobile Products Section (SVS Technologies Navbar Exact Structure) */}
          <div className="border-t border-slate-800 pt-2">
            <span className="text-xs uppercase font-bold text-[#00B4D8] block mb-1">Products</span>
            <Link to="/products/photocopier" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-200 hover:text-[#00B4D8] font-semibold">Photocopier</Link>
            <Link to="/products/laptop-desktops" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-200 hover:text-[#38BDF8] font-semibold">Laptop &amp; Desktops</Link>
            <Link to="/products/laserjet-dot-matrix" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-200 hover:text-[#00B4D8] font-semibold">LaserJet &amp; Dot Matrix</Link>
            <Link to="/products/cctv-video-wall" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-200 hover:text-[#38BDF8] font-semibold">CCTV Systems &amp; Video Wall</Link>
            <Link to="/products/biometric-devices" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-200 hover:text-[#00B4D8] font-semibold">Biometric Devices</Link>
            <Link to="/products/projectors" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-200 hover:text-[#38BDF8] font-semibold">Projectors</Link>
            <Link to="/products/ip-intercom-systems" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-200 hover:text-[#00B4D8] font-semibold">IP Intercom System</Link>
            <Link to="/products/large-led-display-panel" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-200 hover:text-[#38BDF8] font-semibold">Large LED Display Panel</Link>
            <Link to="/products" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-[#00B4D8] font-bold">All Products Overview →</Link>
          </div>

          <div className="border-t border-slate-800 pt-2">
            <span className="text-xs uppercase font-bold text-[#00B4D8] block mb-1">Solutions</span>
            <Link to="/solutions/pro-av-smart-workplaces" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-200 hover:text-[#00B4D8] font-semibold">PRO AV & Smart Workplaces</Link>
            <Link to="/solutions/unified-collaboration" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-200 hover:text-[#38BDF8] font-semibold">Unified Collaboration (UCC)</Link>
            <Link to="/solutions/secured-it-infrastructure" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-200 hover:text-[#00B4D8] font-semibold">Secured IT Infrastructure</Link>
            <Link to="/solutions/secured-surveillance" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-200 hover:text-[#38BDF8] font-semibold">Secured Surveillance</Link>
            <Link to="/solutions/print-solutions" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-200 hover:text-[#00B4D8] font-semibold">Print Solutions</Link>
          </div>
          <div className="border-t border-slate-800 pt-2">
            <span className="text-xs uppercase font-bold text-[#00B4D8] block mb-1">Services</span>
            <Link to="/services/professional-services" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-300">Professional Services</Link>
            <Link to="/services/managed-services" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-300">Managed Services</Link>
            <Link to="/services/support-maintenance" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-300">Support & Maintenance</Link>
          </div>
          <div className="border-t border-slate-800 pt-2">
            <span className="text-xs uppercase font-bold text-[#00B4D8] block mb-1">Resources</span>
            <Link to="/resources/blog" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-300">Blog</Link>
            <Link to="/case-studies" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-300">Case Studies</Link>
          </div>
          <div className="border-t border-slate-800 pt-2">
            <Link to="/contact-us" onClick={() => setIsOpen(false)} className="block text-sm font-bold text-[#00B4D8]">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
