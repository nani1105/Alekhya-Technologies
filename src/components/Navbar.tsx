import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Shield } from 'lucide-react';
import logo from '../Logo/logo.png';
import { GradientButton } from "../components/ui/gradient-button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-white p-1.5 rounded-full shadow-md">
                <img
                  src={logo}
                  alt="Alekhya Logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">Alekhya Technologies</span>
                <span className="text-[10px] text-blue-400 font-semibold uppercase tracking-widest mt-1">Enterprise System Integrator</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-300 hover:text-blue-400'
              } py-2 transition-colors`}
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 py-2 text-slate-300 hover:text-blue-400 transition-colors">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-2 z-50">
                  <Link to="/about-us/who-we-are" className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-blue-400">Who We Are</Link>
                  <Link to="/about-us/awards" className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-blue-400">Awards & Honors</Link>
                  <Link to="/about-us/careers" className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-blue-400">Careers</Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 py-2 text-slate-300 hover:text-blue-400 transition-colors">
                <span className="font-bold text-blue-400">Solutions</span>
                <ChevronDown className="w-4 h-4 text-blue-400" />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-2 z-50">
                  <Link to="/solutions/pro-av-smart-workplaces" className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-purple-400 font-semibold">PRO AV & Smart Workplaces</Link>
                  <Link to="/solutions/unified-collaboration" className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-cyan-400 font-semibold">Unified Collaboration (UCC)</Link>
                  <Link to="/solutions/secured-it-infrastructure" className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-blue-400 font-semibold">Secured IT Infrastructure</Link>
                  <Link to="/solutions/secured-surveillance" className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-rose-400 font-semibold">Secured Surveillance</Link>
                  <Link to="/solutions/print-solutions" className="block px-4 py-2.5 text-xs text-slate-300 hover:bg-slate-800 hover:text-amber-400 font-semibold">Print Solutions</Link>
                  <div className="border-t border-slate-800 my-1"></div>
                  <Link to="/enterprise-solutions" className="block px-4 py-2 text-[11px] text-blue-400 font-bold uppercase tracking-wider hover:bg-slate-800">All Enterprise Solutions & OEMs →</Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 py-2 text-slate-300 hover:text-blue-400 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-2 z-50">
                  <Link to="/services/professional-services" className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-blue-400">Professional Services</Link>
                  <Link to="/services/managed-services" className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-blue-400">Managed Services</Link>
                  <Link to="/services/support-maintenance" className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-blue-400">Support & Maintenance (AMC)</Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 py-2 text-slate-300 hover:text-blue-400 transition-colors">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl py-2 z-50">
                  <Link to="/resources/blog" className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-blue-400">Blog</Link>
                  <Link to="/case-studies" className="block px-4 py-2 text-xs text-slate-300 hover:bg-slate-800 hover:text-blue-400">Case Studies</Link>
                </div>
              )}
            </div>

            <Link to="/events" className="text-slate-300 hover:text-blue-400 transition-colors">Events</Link>
            <Link to="/contact-us" className="text-slate-300 hover:text-blue-400 transition-colors">Contact Us</Link>

            <GradientButton asChild className="px-4 py-2 text-xs flex items-center space-x-1">
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
              className="text-slate-300 hover:text-blue-400 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-white">Home</Link>
          <div className="border-t border-slate-800 pt-2">
            <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Solutions</span>
            <Link to="/solutions/pro-av-smart-workplaces" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-purple-400 font-semibold">PRO AV & Smart Workplaces</Link>
            <Link to="/solutions/unified-collaboration" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-cyan-400 font-semibold">Unified Collaboration (UCC)</Link>
            <Link to="/solutions/secured-it-infrastructure" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-blue-400 font-semibold">Secured IT Infrastructure</Link>
            <Link to="/solutions/secured-surveillance" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-rose-400 font-semibold">Secured Surveillance</Link>
            <Link to="/solutions/print-solutions" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-amber-400 font-semibold">Print Solutions</Link>
          </div>
          <div className="border-t border-slate-800 pt-2">
            <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Services</span>
            <Link to="/services/professional-services" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-300">Professional Services</Link>
            <Link to="/services/managed-services" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-300">Managed Services</Link>
            <Link to="/services/support-maintenance" onClick={() => setIsOpen(false)} className="block py-1 text-xs text-slate-300">Support & Maintenance</Link>
          </div>
          <div className="border-t border-slate-800 pt-2">
            <Link to="/contact-us" onClick={() => setIsOpen(false)} className="block text-sm font-bold text-blue-400">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;