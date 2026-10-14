import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import Logo from '../Logo/logo.png';

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-cyan-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative flex items-center justify-center p-0.5 rounded-full bg-gradient-to-br from-[#00b4d8] to-[#0077b6] shadow-sm">
                <img
                  src={Logo}
                  alt="Alekhya Logo"
                  className="h-10 w-10 object-contain rounded-full bg-white p-0.5"
                />
              </div>
              <span className="text-xl font-bold text-white">
                <span className="text-[#00B4D8]">Alekhya</span>{" "}
                <span className="text-[#38BDF8]">Technologies</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              Pan-India Enterprise System Integrator bringing diverse technologies together into cohesive, secure environments.
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <Globe className="w-3.5 h-3.5 text-[#00B4D8]" />
              <span>ISO Certified System Integrator</span>
            </div>
          </div>

          {/* Products Column (Matching SVS Technologies) */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#00B4D8] mb-3">Products</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/products/photocopier" className="hover:text-[#38BDF8] transition-colors">Photocopier</Link></li>
              <li><Link to="/products/laptop-desktops" className="hover:text-[#38BDF8] transition-colors">Laptop &amp; Desktops</Link></li>
              <li><Link to="/products/laserjet-dot-matrix" className="hover:text-[#38BDF8] transition-colors">LaserJet &amp; Dot Matrix</Link></li>
              <li><Link to="/products/cctv-video-wall" className="hover:text-[#38BDF8] transition-colors">CCTV &amp; Video Wall</Link></li>
              <li><Link to="/products/biometric-devices" className="hover:text-[#38BDF8] transition-colors">Biometric Devices</Link></li>
              <li><Link to="/products/projectors" className="hover:text-[#38BDF8] transition-colors">Projectors</Link></li>
              <li><Link to="/products/ip-intercom-systems" className="hover:text-[#38BDF8] transition-colors">IP Intercom System</Link></li>
              <li><Link to="/products/large-led-display-panel" className="hover:text-[#38BDF8] transition-colors">Large LED Display Panel</Link></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#00B4D8] mb-3">Solutions</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/solutions/pro-av-smart-workplaces" className="hover:text-[#38BDF8] transition-colors">PRO AV &amp; Workplaces</Link></li>
              <li><Link to="/solutions/unified-collaboration" className="hover:text-[#38BDF8] transition-colors">Unified Collaboration (UCC)</Link></li>
              <li><Link to="/solutions/secured-it-infrastructure" className="hover:text-[#38BDF8] transition-colors">Secured IT Infrastructure</Link></li>
              <li><Link to="/solutions/secured-surveillance" className="hover:text-[#38BDF8] transition-colors">Secured Surveillance</Link></li>
              <li><Link to="/solutions/print-solutions" className="hover:text-[#38BDF8] transition-colors">Print Solutions</Link></li>
              <li><Link to="/enterprise-solutions" className="hover:text-[#38BDF8] transition-colors font-semibold text-[#00B4D8]">All Solutions &amp; OEMs →</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#00B4D8] mb-3">Services</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services/professional-services" className="hover:text-[#38BDF8] transition-colors">Professional Services</Link></li>
              <li><Link to="/services/managed-services" className="hover:text-[#38BDF8] transition-colors">Managed Services</Link></li>
              <li><Link to="/services/support-maintenance" className="hover:text-[#38BDF8] transition-colors">Support &amp; Maintenance</Link></li>
              <li><Link to="/enterprise-solutions#oem-ecosystem" className="hover:text-[#38BDF8] transition-colors">OEM Technology Partners</Link></li>
            </ul>
          </div>

          {/* Navigation & Company */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#00B4D8] mb-3">Company</h3>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about-us/who-we-are" className="hover:text-[#38BDF8] transition-colors">Who We Are</Link></li>
              <li><Link to="/about-us/awards" className="hover:text-[#38BDF8] transition-colors">Awards &amp; Achievements</Link></li>
              <li><Link to="/about-us/careers" className="hover:text-[#38BDF8] transition-colors">Careers</Link></li>
              <li><Link to="/resources/blog" className="hover:text-[#38BDF8] transition-colors">Resource Blog</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#38BDF8] transition-colors">Case Studies</Link></li>
              <li><Link to="/contact-us" className="hover:text-[#38BDF8] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="pt-8 pb-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400 border-t border-slate-800">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-[#00B4D8]" />
            <span><a href="tel:+919573376389" className="hover:text-[#38BDF8]">+91 95733 76389</a></span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-[#00B4D8]" />
            <span><a href="mailto:alekhyatechnologies7@gmail.com" className="hover:text-[#38BDF8]">alekhyatechnologies7@gmail.com</a></span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-[#00B4D8]" />
            <span>Hyderabad, Telangana, India (Pan-India Support)</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 text-center text-xs text-slate-500">
          © 2026 Alekhya Technologies Private Limited. All rights reserved. Built for enterprise scale across India.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
