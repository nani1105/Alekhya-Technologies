import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  Award,
  CheckCircle,
  Camera,
  Monitor,
  Printer,
  Fingerprint,
  Network,
  Tv,
  PhoneCall,
  ShieldCheck,
  Cpu,
  Wrench,
  Sparkles,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';
import HeroProductCarousel from "../components/HeroProductCarousel";
import HorizontalParallax from "../components/HorizontalParallax";
import AnimatedCounter from "../components/AnimatedCounter";
import { GradientButton } from "../components/ui/gradient-button";
import { TextShimmer } from '../components/ui/text-shimmer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import nabardLogo from '../Logo/NABARD1.png';
import drdoLogo from '../Logo/drdo.png';
import logo from '../Logo/logo.png';
import IMDLogo from '../Logo/imd.png';
import airforceschoolLogo from '../Logo/airforceschool.jpg';

const Home = () => {
  const whatsappUrl =
    "https://wa.me/919573376389?text=Hello%20Alekhya%20Technologies%2C%20I%20would%20like%20to%20inquire%20about%20your%20IT%2C%20Surveillance%2C%20Networking%2C%20and%20Office%20Solutions.%20Please%20provide%20more%20details.";

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
     <section className="relative w-full min-h-[60vh] sm:min-h-[85vh] flex items-start justify-center text-white overflow-hidden pt-6 sm:pt-8 pb-8">
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Desktop & Tablet Layout: 2 Columns (Left: Brand/Description/CTAs, Right: Glass Product Carousel)
              Mobile Layout: Brand name -> Description -> Carousel (compact, all in 70% viewport height) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            {/* Left Column: Brand, Description & Action Buttons */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Brand Logo & Pill */}
              <div className="flex items-center space-x-3 mb-2 sm:mb-4">
                <div className="bg-white p-1.5 sm:p-2.5 rounded-full shadow-lg shadow-blue-500/20">
                  <img
                    src={logo}
                    alt="Alekhya Logo"
                    className="h-8 w-8 sm:h-12 sm:w-12 object-contain"
                  />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                  Enterprise System Integrator
                </span>
              </div>

              {/* Brand Name */}
              <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-2 sm:mb-3">
                <span className="inline-block">
                  <TextShimmer
                    duration={3.2}
                    className="block [--base-color:theme(colors.blue.500)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.500)] dark:[--base-gradient-color:theme(colors.blue.300)]"
                  >
                    Alekhya Technologies
                  </TextShimmer>
                </span>
              </div>

              {/* Subheading */}
              <h2 className="text-base sm:text-2xl lg:text-3xl font-bold text-blue-300 mb-2 sm:mb-3">
                Technology That Works Together
              </h2>

              {/* Description (concise on mobile, rich on desktop) */}
              <p className="text-xs sm:text-base lg:text-lg text-slate-300 mb-4 sm:mb-6 max-w-xl leading-relaxed">
                We bring AV, unified communications, secured IT infrastructure, surveillance, print, and managed AMC support together into one dependable technology ecosystem. Trusted by DRDO, NABARD, banks & enterprises.
              </p>

              {/* CTAs: Call, WhatsApp, Enterprise & Quotes */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3.5 justify-center lg:justify-start w-full">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-emerald-900/40 border border-emerald-400/30 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Chat</span>
                </a>

                <a
                  href="tel:+919573376389"
                  className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-blue-900/40 border border-blue-400/30 transition-all hover:scale-105 active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: +91 95733 76389</span>
                </a>

                <Link to="/enterprise-solutions" className="hidden sm:inline-flex">
                  <GradientButton className="w-full sm:w-auto flex items-center justify-center space-x-2 text-xs sm:text-sm px-4 py-2.5">
                    <Sparkles className="h-4 w-4" />
                    <span>Enterprise Solutions</span>
                  </GradientButton>
                </Link>

                <Link to="/contact" className="hidden sm:inline-flex">
                  <GradientButton variant="variant" className="w-full sm:w-auto text-xs sm:text-sm px-4 py-2.5">
                    Get Free Quote
                  </GradientButton>
                </Link>
              </div>
            </div>

            {/* Right Column (On Desktop) / Bottom Section (On Mobile): Glass Box with Product Carousel */}
            <div className="lg:col-span-6 w-full mt-2 sm:mt-0">
              <HeroProductCarousel />
            </div>

          </div>
        </div>
      </section>

      {/* Enterprise Verticals Grid Section */}
      <section className="py-10 sm:py-12 bg-transparent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Turnkey Enterprise Integration</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
              Solutions that adapt to your needs and scale with you
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base">
              From collaboration spaces and voice platforms to secure networks, surveillance, and print workflows, we design technology around how your teams operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Network,
                title: 'Secured IT Infrastructure',
                desc: 'Network access, connectivity, monitoring, structured cabling, enterprise switching, Wi-Fi, and secure optimization.',
                link: '/solutions/secured-it-infrastructure',
                tag: 'Network Core',
              },
              {
                icon: Tv,
                title: 'PRO AV & Smart Workplaces',
                desc: 'AI-enabled meeting spaces, hybrid boardrooms and classrooms, digital signage, control rooms, and auditoriums.',
                link: '/solutions/pro-av-smart-workplaces',
                tag: 'AV Automation',
              },
              {
                icon: PhoneCall,
                title: 'Unified Collaboration',
                desc: 'On-premise, cloud, and hybrid calling with enterprise voice, video collaboration, and contact-center solutions.',
                link: '/solutions/unified-collaboration',
                tag: 'Unified Voice',
              },
              {
                icon: ShieldCheck,
                title: 'Secured Surveillance',
                desc: 'IP video surveillance, AI-enabled analytics, access control, centralized monitoring, and protected storage.',
                link: '/solutions/secured-surveillance',
                tag: '4K Security',
              },
              {
                icon: Printer,
                title: 'Commercial Print Solutions',
                desc: 'Multifunction photocopiers, Managed Print Services (MPS), commercial laser printers, and toner supply.',
                link: '/solutions/print-solutions',
                tag: 'Print & MPS',
              },
              {
                icon: Cpu,
                title: 'End-to-End System Integration',
                desc: 'Turnkey convergence of multi-vendor hardware, unified central monitoring dashboards, and middleware.',
                link: '/enterprise-solutions#system-integration',
                tag: 'System Integration',
              },
              {
                icon: Wrench,
                title: 'Implementation & SLA Support',
                desc: 'Pre-deployment OEM staging, 24/7 SLA-backed AMC contracts, resident technicians, and rapid repair dispatch.',
                link: '/enterprise-solutions#implementation-support',
                tag: 'SLA Support',
              },
            ].map((vertical, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 p-6 sm:p-7 rounded-2xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-xl backdrop-blur-sm"
              >
                <div>
                  <div className="flex justify-between items-center mb-5">
                    <div className="bg-blue-600/20 text-blue-400 p-3 rounded-xl border border-blue-500/30">
                      <vertical.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
                      {vertical.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {vertical.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {vertical.desc}
                  </p>
                </div>

                <Link
                  to={vertical.link}
                  className="inline-flex items-center space-x-2 text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors pt-3"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/enterprise-solutions"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3 rounded-xl transition-colors shadow-lg shadow-blue-600/30 text-sm sm:text-base"
            >
              <span>View Full Enterprise Portfolio & OEM Partners</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products & Technology Horizontal Parallax Showcase with Inclination-to-Straight animation on scroll */}
      <HorizontalParallax />

      {/* Stats Section with Smooth Counter Animation (0 -> target) */}
      <section className="py-8 sm:py-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <Fade direction="up" cascade triggerOnce delay={50} duration={800}>
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
                <div className="text-4xl font-extrabold text-blue-400 mb-2">
                  <AnimatedCounter end={15} suffix="+" duration={1800} />
                </div>
                <div className="text-slate-300 font-medium">Years Experience</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
                <div className="text-4xl font-extrabold text-emerald-400 mb-2">
                  <AnimatedCounter end={500} suffix="+" duration={2000} />
                </div>
                <div className="text-slate-300 font-medium">Happy Clients</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
                <div className="text-4xl font-extrabold text-purple-400 mb-2">
                  <AnimatedCounter end={24} suffix="/7" duration={1500} />
                </div>
                <div className="text-slate-300 font-medium">Support Available</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
                <div className="text-4xl font-extrabold text-cyan-400 mb-2">
                  <AnimatedCounter end={100} suffix="%" duration={2000} />
                </div>
                <div className="text-slate-300 font-medium">Satisfaction Rate</div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Services Highlight Section */}
      <section className="relative py-10 sm:py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">
              Services That Keep Technology Performing
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Practical design, delivery, and lifecycle support for connected enterprise environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* CCTV Card */}
            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105 hover:border-blue-500/50">
              <div className="bg-blue-500/10 border border-blue-500/30 p-2.5 rounded-full w-fit mb-4">
                <Camera className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">CCTV Security Systems</h3>
              <p className="text-slate-300 mb-4 font-normal text-xs leading-relaxed">
                Complete surveillance solutions including installation, maintenance, and monitoring for homes and businesses.
              </p>
              <ul className="space-y-1.5 mb-4 text-slate-300 text-xs">
                <li className="flex items-center space-x-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-400" /><span>HD & 4K Camera Installation</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-400" /><span>Remote Monitoring Setup</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-400" /><span>24/7 Maintenance Support</span></li>
              </ul>
              <Link to="/solutions/secured-surveillance" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center space-x-2 text-xs">
                <span>Learn More</span><ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Computer Card */}
            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105 hover:border-emerald-500/50">
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-2.5 rounded-full w-fit mb-4">
                <Monitor className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Computer & Network Services</h3>
              <p className="text-slate-300 mb-4 font-normal text-xs leading-relaxed">
                Expert computer repair, networking, and IT support services for all your technology needs.
              </p>
              <ul className="space-y-1.5 mb-4 text-slate-300 text-xs">
                <li className="flex items-center space-x-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-400" /><span>Hardware & Software Repair</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-400" /><span>Network Setup & Management</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-400" /><span>Data Recovery Services</span></li>
              </ul>
              <Link to="/solutions/secured-it-infrastructure" className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center space-x-2 text-xs">
                <span>Learn More</span><ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Biometric Card */}
            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105 hover:border-amber-500/50">
              <div className="bg-amber-500/10 border border-amber-500/30 p-2.5 rounded-full w-fit mb-4">
                <Fingerprint className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Biometric Systems</h3>
              <p className="text-slate-300 mb-4 font-normal text-xs leading-relaxed">
                Expert Biometric & RFID attendance systems installation, repair, and maintenance.
              </p>
              <ul className="space-y-1.5 mb-4 text-slate-300 text-xs">
                <li className="flex items-center space-x-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-400" /><span>Installation and Repair</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-400" /><span>Service & Maintenance</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-400" /><span>Advanced Systems</span></li>
              </ul>
              <Link to="/services" className="text-amber-400 hover:text-amber-300 font-semibold flex items-center space-x-2 text-xs">
                <span>Learn More</span><ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Printer Card */}
            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105 hover:border-purple-500/50">
              <div className="bg-purple-500/10 border border-purple-500/30 p-2.5 rounded-full w-fit mb-4">
                <Printer className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Printer & Copier Solutions</h3>
              <p className="text-slate-300 mb-4 font-normal text-xs leading-relaxed">
                Complete printer services including repair, maintenance, and supplies for all major brands.
              </p>
              <ul className="space-y-1.5 mb-4 text-slate-300 text-xs">
                <li className="flex items-center space-x-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-400" /><span>All Brand Repair Services</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-400" /><span>Toner & Cartridge Supply</span></li>
                <li className="flex items-center space-x-2"><CheckCircle className="h-3.5 w-3.5 text-emerald-400" /><span>Preventive Maintenance</span></li>
              </ul>
              <Link to="/solutions/print-solutions" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center space-x-2 text-xs">
                <span>Learn More</span><ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="py-8 sm:py-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade direction="down" triggerOnce cascade damping={0.2} duration={1000}>
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Trusted by Leading Organizations</h2>
              <p className="text-base sm:text-lg text-slate-400">
                We're proud to serve government agencies, enterprises, and high-profile clients
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            <Slide direction="left" triggerOnce delay={0} duration={1000}>
              <div className="bg-slate-900/80 border border-slate-800 p-5 sm:p-6 rounded-xl shadow-lg text-center h-full hover:border-blue-500/40 transition-colors">
                <div className="bg-white p-2 w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
                  <img src={drdoLogo} alt="DRDO Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-white mb-1.5">DRDO & Defense</h3>
                <p className="text-slate-400 text-xs sm:text-sm">Defence Research & Development Organisation AMC & Tech Partner</p>
              </div>
            </Slide>

            <Slide direction="up" triggerOnce delay={150} duration={1000}>
              <div className="bg-slate-900/80 border border-slate-800 p-5 sm:p-6 rounded-xl shadow-lg text-center h-full hover:border-blue-500/40 transition-colors">
                <div className="bg-white p-2 w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
                  <img src={nabardLogo} alt="NABARD Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-white mb-1.5">NABARD & National Banks</h3>
                <p className="text-slate-400 text-xs sm:text-sm">National Banks & Financial Institutions Infrastructure Contracts</p>
              </div>
            </Slide>

            <Slide direction="up" triggerOnce delay={300} duration={1000}>
              <div className="bg-slate-900/80 border border-slate-800 p-5 sm:p-6 rounded-xl shadow-lg text-center h-full hover:border-blue-500/40 transition-colors">
                <div className="bg-white p-2 w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
                  <img src={IMDLogo} alt="IMD Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-white mb-1.5">Meteorological Dept</h3>
                <p className="text-slate-400 text-xs sm:text-sm">India Meteorological Department Electronics & Server AMC Contracts</p>
              </div>
            </Slide>

            <Slide direction="right" triggerOnce delay={450} duration={1000}>
              <div className="bg-slate-900/80 border border-slate-800 p-5 sm:p-6 rounded-xl shadow-lg text-center h-full hover:border-blue-500/40 transition-colors">
                <div className="bg-white p-2 w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
                  <img src={airforceschoolLogo} alt="Air Force School Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-white mb-1.5">Air Force School & Edu</h3>
                <p className="text-slate-400 text-xs sm:text-sm">Schools, Educational Institutions, CA Firms & Software Startups</p>
              </div>
            </Slide>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-10 sm:py-14 flex items-center justify-center text-white bg-transparent">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <Fade direction="up" triggerOnce duration={1000}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Ready to Connect Your Technology Ecosystem?
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-7 text-blue-200 max-w-2xl mx-auto">
              Get a clear plan for collaboration, infrastructure, security, print, and ongoing support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-emerald-900/40 border border-emerald-400/30 transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+919573376389"
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-blue-900/40 border border-blue-400/30 transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Call: +91 95733 76389</span>
              </a>

              <Link to="/contact">
                <GradientButton className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base">
                  Get Free Consultation
                </GradientButton>
              </Link>
            </div>
          </Fade>
        </div>
      </section>

    </div>
  );
};

export default Home;
