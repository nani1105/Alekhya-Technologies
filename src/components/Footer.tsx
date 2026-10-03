import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import Logo from '../Logo/logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 text-slate-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white p-2 rounded-full shadow-md">
                <img
                  src={Logo}
                  alt="Alekhya Logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">Alekhya Technologies</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Pan-India System Integrator bringing diverse technologies together into cohesive, secure environments where everything connects and performs effortlessly—covering PRO AV, Unified Collaboration, IT Infrastructure, Surveillance, and Print.
            </p>
            <div className="flex items-center space-x-3 text-xs text-slate-400">
              <span className="flex items-center space-x-1"><Globe className="w-4 h-4 text-blue-400" /><span>ISO Certified System Integrator</span></span>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-4">Solutions</h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/solutions/pro-av-smart-workplaces" className="hover:text-white transition-colors">PRO AV & Smart Workplaces</Link></li>
              <li><Link to="/solutions/unified-collaboration" className="hover:text-white transition-colors">Unified Collaboration (UCC)</Link></li>
              <li><Link to="/solutions/secured-it-infrastructure" className="hover:text-white transition-colors">Secured IT Infrastructure</Link></li>
              <li><Link to="/solutions/secured-surveillance" className="hover:text-white transition-colors">Secured Surveillance</Link></li>
              <li><Link to="/solutions/print-solutions" className="hover:text-white transition-colors">Print Solutions</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-4">Services</h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/services/professional-services" className="hover:text-white transition-colors">Professional Services</Link></li>
              <li><Link to="/services/managed-services" className="hover:text-white transition-colors">Managed Services</Link></li>
              <li><Link to="/services/support-maintenance" className="hover:text-white transition-colors">Support & Maintenance</Link></li>
              <li><Link to="/enterprise-solutions#oem-ecosystem" className="hover:text-white transition-colors">OEM Technology Partners</Link></li>
            </ul>
          </div>

          {/* Navigation & Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-4">Company & Media</h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/about-us/who-we-are" className="hover:text-white transition-colors">Who We Are</Link></li>
              <li><Link to="/about-us/awards" className="hover:text-white transition-colors">Awards & Achievements</Link></li>
              <li><Link to="/about-us/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/resources/blog" className="hover:text-white transition-colors">Resource Blog</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="border-t border-slate-800 pt-8 pb-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-blue-400" />
            <span><a href="tel:+919573376389" className="hover:text-white">+91 95733 76389</a></span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-blue-400" />
            <span><a href="mailto:alekhyatechnologies7@gmail.com" className="hover:text-white">alekhyatechnologies7@gmail.com</a></span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>Hyderabad, Telangana, India (Pan-India Support)</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-900 mt-6 pt-6 text-center text-xs text-slate-500">
          © 2026 Alekhya Technologies Private Limited. All rights reserved. Built for enterprise scale across India.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
