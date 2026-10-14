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
import { motion, useScroll, useTransform } from 'framer-motion';
import { Fade, Slide } from 'react-awesome-reveal';
import HeroProductCarousel from "../components/HeroProductCarousel";
import HorizontalParallax from "../components/HorizontalParallax";
import AnimatedCounter from "../components/AnimatedCounter";
import { GradientButton } from "../components/ui/gradient-button";
import { TextShimmer } from '../components/ui/text-shimmer';
import TypewriterProducts from '../components/ui/TypewriterProducts';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import nabardLogo from '../Logo/NABARD1.png';
import drdoLogo from '../Logo/drdo.png';
import logo from '../Logo/logo.png';
import IMDLogo from '../Logo/imd.png';
import airforceschoolLogo from '../Logo/airforceschool.jpg';

import itInfraImg from '../Logo/Structured LAN.jpg';
import proAvImg from '../Logo/Executive boardroom.jpg';
import uccImg from '../Logo/Teams  Zoom Room Systems.jpg';
import surveillanceImg from '../Logo/4k cctv.jpg';
import printImg from '../Logo/Multifunction Photocopiers.jpg';
import sysIntegImg from '../Logo/solution architecture.jpg';
import slaSupportImg from '../Logo/Technical Consultancy  Audits.jpg';

import cctvHomeImg from '../Logo/4k cctv.jpg';
import computerHomeImg from '../Logo/computer-transparent.png';
import biometricHomeImg from '../Logo/Biometric access control.jpg';
import printerHomeImg from '../Logo/printer.webp';

import SEO from '../components/SEO';

const Home = () => {
  const { scrollY } = useScroll();
  const heroLogoY = useTransform(scrollY, [0, 90], [0, -38]);
  const heroLogoX = useTransform(scrollY, [0, 90], [0, -12]);
  const heroLogoOpacity = useTransform(scrollY, [0, 60, 95], [1, 0.7, 0]);
  const heroLogoScale = useTransform(scrollY, [0, 90], [1, 0.95]);

  const whatsappUrl =
    "https://wa.me/919573376389?text=Hello%20Alekhya%20Technologies%2C%20I%20would%20like%20to%20inquire%20about%20your%20IT%2C%20Surveillance%2C%20Networking%2C%20and%20Office%20Solutions.%20Please%20provide%20more%20details.";

  return (
    <div className="min-h-screen bg-transparent">
      <SEO 
        title="Enterprise System Integrator, IT AMC & CCTV Solutions in Hyderabad"
        description="Alekhya Technologies is Hyderabad's leading Enterprise System Integrator providing IT AMC contracts, 4K CCTV surveillance, boardroom AV, IP telephony, refurbished laptops, and networking across HITEC City, Gachibowli, Madhapur, Secunderabad & Pan-India."
        keywords="Enterprise System Integrator Hyderabad, IT AMC Services Hyderabad, Computer AMC Hyderabad, CCTV installation Hyderabad, Refurbished Laptops Hyderabad, Photocopier machine rental Hyderabad, Structured Cabling Hyderabad"
        canonicalPath="/"
      />
      {/* Hero Section */}
     <section className="relative w-full min-h-[60vh] sm:min-h-[85vh] flex items-start justify-center text-slate-900 overflow-hidden pt-6 sm:pt-8 pb-8">
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Desktop & Tablet Layout: 2 Columns (Left: Brand/Description/CTAs, Right: Glass Product Carousel)
              Mobile Layout: Brand name -> Description -> Carousel (compact, all in 70% viewport height) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            {/* Left Column: Brand, Description & Action Buttons */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Brand Logo & Pill */}
              <div className="flex items-center space-x-3 mb-2 sm:mb-4">
                <motion.div
                  style={{
                    y: heroLogoY,
                    x: heroLogoX,
                    opacity: heroLogoOpacity,
                    scale: heroLogoScale,
                  }}
                  className="relative flex items-center justify-center p-0.5 rounded-full bg-gradient-to-br from-[#00b4d8] to-[#0077b6] shadow-sm"
                >
                  <img
                    src={logo}
                    alt="Alekhya Logo"
                    className="h-10 w-10 object-contain rounded-full bg-white p-0.5"
                  />
                </motion.div>
                <span className="text-[11px] sm:text-xs font-semibold text-[#0077B6] bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center">
                  <TextShimmer
                    duration={2.5}
                    className="[--base-color:#0077b6] [--base-gradient-color:#00b4d8] dark:[--base-color:#0077b6] dark:[--base-gradient-color:#00b4d8]"
                  >
                    Enterprise System Integrator
                  </TextShimmer>
                </span>
              </div>

              {/* Brand Name */}
              <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4 sm:mb-6 lg:mb-7">
                <span className="inline-block">
                  <TextShimmer
                    duration={3.2}
                    className="block [--base-color:#0077b6] [--base-gradient-color:#00b4d8] dark:[--base-color:#0077b6] dark:[--base-gradient-color:#00b4d8]"
                  >
                    <span className="text-[#00B4D8]">Alekhya</span>{" "}
                    <span className="text-[#0077B6]">Technologies</span>
                  </TextShimmer>
                </span>
              </div>

              {/* Subheading */}
              <h2 className="text-base sm:text-2xl lg:text-3xl font-bold text-[#004B75] mb-2 sm:mb-6">
                Technology That Works Together
              </h2>

              {/* Description (concise on mobile, rich on desktop with Typewriter) */}
              <p className="text-xs sm:text-base lg:text-lg text-slate-700 mb-4 sm:mb-6 max-w-xl leading-relaxed">
                We bring{' '}
                <TypewriterProducts badgeClassName="px-2 sm:px-2.5 py-0.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 shadow-sm hover:border-cyan-500/60 hover:bg-cyan-500/15 mx-0.5" />{' '}
                together into one dependable technology ecosystem. Trusted by DRDO, NABARD, banks & enterprises.
              </p>

              {/* CTAs: Call, WhatsApp, Enterprise & Quotes */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3.5 justify-center lg:justify-start w-full">
                

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
      <section className="py-10 sm:py-12 bg-transparent text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full text-[#0077B6] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
              <TextShimmer duration={2.5} className="[--base-color:#0077b6] [--base-gradient-color:#00b4d8] dark:[--base-color:#0077b6] dark:[--base-gradient-color:#00b4d8]">
                Turnkey Enterprise Integration
              </TextShimmer>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-3 text-slate-900">
              Solutions that adapt to your needs and scale with you
            </h2>
            <p className="text-slate-700 max-w-3xl mx-auto text-sm sm:text-base">
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
                image: itInfraImg
              },
              {
                icon: Tv,
                title: 'PRO AV & Smart Workplaces',
                desc: 'AI-enabled meeting spaces, hybrid boardrooms and classrooms, digital signage, control rooms, and auditoriums.',
                link: '/solutions/pro-av-smart-workplaces',
                tag: 'AV Automation',
                image: proAvImg
              },
              {
                icon: PhoneCall,
                title: 'Unified Collaboration',
                desc: 'On-premise, cloud, and hybrid calling with enterprise voice, video collaboration, and contact-center solutions.',
                link: '/solutions/unified-collaboration',
                tag: 'Unified Voice',
                image: uccImg
              },
              {
                icon: ShieldCheck,
                title: 'Secured Surveillance',
                desc: 'IP video surveillance, AI-enabled analytics, access control, centralized monitoring, and protected storage.',
                link: '/solutions/secured-surveillance',
                tag: '4K Security',
                image: surveillanceImg
              },
              {
                icon: Printer,
                title: 'Commercial Print Solutions',
                desc: 'Multifunction photocopiers, Managed Print Services (MPS), commercial laser printers, and toner supply.',
                link: '/solutions/print-solutions',
                tag: 'Print & MPS',
                image: printImg
              },
              {
                icon: Cpu,
                title: 'End-to-End System Integration',
                desc: 'Turnkey convergence of multi-vendor hardware, unified central monitoring dashboards, and middleware.',
                link: '/enterprise-solutions#system-integration',
                tag: 'System Integration',
                image: sysIntegImg
              },
              {
                icon: Wrench,
                title: 'Implementation & SLA Support',
                desc: 'Pre-deployment OEM staging, 24/7 SLA-backed AMC contracts, resident technicians, and rapid repair dispatch.',
                link: '/enterprise-solutions#implementation-support',
                tag: 'SLA Support',
                image: slaSupportImg
              },
            ].map((vertical, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 border border-slate-800 hover:border-cyan-400/60 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_10px_30px_rgba(0,180,216,0.15)] backdrop-blur-sm"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                    <img
                      src={vertical.image}
                      alt={vertical.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
                    <div className="absolute top-3 left-3 bg-gradient-to-br from-[#00b4d8] to-[#0077b6] backdrop-blur-md text-white p-2 rounded-xl border border-white/20 shadow-md">
                      <vertical.icon className="w-5 h-5" />
                    </div>
                    <span className="absolute top-3 right-3 text-[11px] font-bold uppercase tracking-wider text-slate-300 bg-black/70 backdrop-blur-md border border-white/10 px-2.5 py-0.5 rounded-full">
                      {vertical.tag}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00B4D8] transition-colors">
                      {vertical.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-2">
                      {vertical.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-0">
                  <Link
                    to={vertical.link}
                    className="inline-flex items-center space-x-2 text-[#00B4D8] text-sm font-semibold hover:text-[#38BDF8] transition-colors"
                  >
                    <span>Explore Architecture</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/enterprise-solutions"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0077b6] via-[#0284c7] to-[#00b4d8] hover:from-[#0284c7] hover:to-[#38bdf8] text-white font-bold px-7 py-3 rounded-xl transition-all shadow-lg shadow-cyan-900/30 hover:scale-[1.02] text-sm sm:text-base"
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
              <div className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-xl shadow-lg hover:scale-105 transition-all">
                <div className="text-4xl font-extrabold text-[#00B4D8] mb-2">
                  <AnimatedCounter end={15} suffix="+" duration={1800} />
                </div>
                <div className="text-slate-300 font-medium">Years Experience</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-xl shadow-lg hover:scale-105 transition-all">
                <div className="text-4xl font-extrabold text-[#38BDF8] mb-2">
                  <AnimatedCounter end={500} suffix="+" duration={2000} />
                </div>
                <div className="text-slate-300 font-medium">Happy Clients</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-xl shadow-lg hover:scale-105 transition-all">
                <div className="text-4xl font-extrabold text-[#0077B6] mb-2">
                  <AnimatedCounter end={24} suffix="/7" duration={1500} />
                </div>
                <div className="text-slate-300 font-medium">Support Available</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-xl shadow-lg hover:scale-105 transition-all">
                <div className="text-4xl font-extrabold text-[#00B4D8] mb-2">
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
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3">
              Services That Keep Technology Performing
            </h2>
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
              Practical design, delivery, and lifecycle support for connected enterprise environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CCTV Card */}
            <div className="group bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/60 flex flex-col justify-between">
              <div>
                <div className="relative h-40 w-full overflow-hidden bg-slate-950">
                  <img src={cctvHomeImg} alt="CCTV Security Systems" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                  <div className="absolute top-2.5 left-2.5 bg-gradient-to-br from-[#00b4d8] to-[#0077b6] backdrop-blur-md p-2 rounded-xl border border-white/20">
                    <Camera className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold mb-1.5 text-white group-hover:text-[#00B4D8] transition-colors">CCTV Security Systems</h3>
                  <p className="text-slate-300 mb-3 font-normal text-xs leading-relaxed">
                    Complete surveillance solutions including installation, maintenance, and monitoring for homes and businesses.
                  </p>
                  <ul className="space-y-1 mb-3 text-slate-300 text-xs">
                    <li className="flex items-center space-x-1.5"><CheckCircle className="h-3.5 w-3.5 text-[#00B4D8] flex-shrink-0" /><span>HD & 4K Camera Setup</span></li>
                    <li className="flex items-center space-x-1.5"><CheckCircle className="h-3.5 w-3.5 text-[#00B4D8] flex-shrink-0" /><span>Remote Mobile Monitoring</span></li>
                    <li className="flex items-center space-x-1.5"><CheckCircle className="h-3.5 w-3.5 text-[#00B4D8] flex-shrink-0" /><span>24/7 SLA Maintenance</span></li>
                  </ul>
                </div>
              </div>
              <div className="px-5 pb-5 pt-0">
                <Link to="/solutions/secured-surveillance" className="text-[#00B4D8] hover:text-[#38BDF8] font-semibold flex items-center space-x-1 text-xs">
                  <span>Learn More</span><ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Computer Card */}
            <div className="group bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/60 flex flex-col justify-between">
              <div>
                <div className="relative h-40 w-full overflow-hidden bg-slate-950 flex items-center justify-center p-3">
                  <img src={computerHomeImg} alt="Computer & Network Services" className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2.5 left-2.5 bg-gradient-to-br from-[#0077b6] to-[#00b4d8] backdrop-blur-md p-2 rounded-xl border border-white/20">
                    <Monitor className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold mb-1.5 text-white group-hover:text-[#00B4D8] transition-colors">Computer & Networks</h3>
                  <p className="text-slate-300 mb-3 font-normal text-xs leading-relaxed">
                    Expert computer repair, networking, and IT support services for all your technology needs.
                  </p>
                  <ul className="space-y-1 mb-3 text-slate-300 text-xs">
                    <li className="flex items-center space-x-1.5"><CheckCircle className="h-3.5 w-3.5 text-[#00B4D8] flex-shrink-0" /><span>Hardware & OS Repair</span></li>
                    <li className="flex items-center space-x-1.5"><CheckCircle className="h-3.5 w-3.5 text-[#00B4D8] flex-shrink-0" /><span>Structured LAN & WiFi</span></li>
                    <li className="flex items-center space-x-1.5"><CheckCircle className="h-3.5 w-3.5 text-[#00B4D8] flex-shrink-0" /><span>Data Recovery & Backup</span></li>
                  </ul>
                </div>
              </div>
              <div className="px-5 pb-5 pt-0">
                <Link to="/solutions/secured-it-infrastructure" className="text-[#00B4D8] hover:text-[#38BDF8] font-semibold flex items-center space-x-1 text-xs">
                  <span>Learn More</span><ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Biometric Card */}
            <div className="group bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/60 flex flex-col justify-between">
              <div>
                <div className="relative h-40 w-full overflow-hidden bg-slate-950">
                  <img src={biometricHomeImg} alt="Biometric Systems" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                  <div className="absolute top-2.5 left-2.5 bg-gradient-to-br from-[#0284c7] to-[#0077b6] backdrop-blur-md p-2 rounded-xl border border-white/20">
                    <Fingerprint className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold mb-1.5 text-white group-hover:text-[#00B4D8] transition-colors">Biometric Systems</h3>
                  <p className="text-slate-300 mb-3 font-normal text-xs leading-relaxed">
                    Expert Biometric & RFID attendance systems installation, repair, and maintenance.
                  </p>
                  <ul className="space-y-1 mb-3 text-slate-300 text-xs">
                    <li className="flex items-center space-x-1.5"><CheckCircle className="h-3.5 w-3.5 text-[#00B4D8] flex-shrink-0" /><span>Fingerprint & Face Recog</span></li>
                    <li className="flex items-center space-x-1.5"><CheckCircle className="h-3.5 w-3.5 text-[#00B4D8] flex-shrink-0" /><span>RFID Card Access Control</span></li>
                    <li className="flex items-center space-x-1.5"><CheckCircle className="h-3.5 w-3.5 text-[#00B4D8] flex-shrink-0" /><span>Cloud HR Sync & Reports</span></li>
                  </ul>
                </div>
              </div>
              <div className="px-5 pb-5 pt-0">
                <Link to="/services" className="text-[#00B4D8] hover:text-[#38BDF8] font-semibold flex items-center space-x-1 text-xs">
                  <span>Learn More</span><ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Printer Card */}
            <div className="group bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/60 flex flex-col justify-between">
              <div>
                <div className="relative h-40 w-full overflow-hidden bg-slate-950 flex items-center justify-center p-3">
                  <img src={printerHomeImg} alt="Printer & Copier Solutions" className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2.5 left-2.5 bg-gradient-to-br from-[#00b4d8] to-[#0284c7] backdrop-blur-md p-2 rounded-xl border border-white/20">
                    <Printer className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold mb-1.5 text-white group-hover:text-[#00B4D8] transition-colors">Printer & Copiers</h3>
                  <p className="text-slate-300 mb-3 font-normal text-xs leading-relaxed">
                    Complete printer services including repair, maintenance, and supplies for all major brands.
                  </p>
                  <ul className="space-y-1 mb-3 text-slate-300 text-xs">
                    <li className="flex items-center space-x-1.5"><CheckCircle className="h-3.5 w-3.5 text-[#00B4D8] flex-shrink-0" /><span>All Major Brand Service</span></li>
                    <li className="flex items-center space-x-1.5"><CheckCircle className="h-3.5 w-3.5 text-[#00B4D8] flex-shrink-0" /><span>Toner Cartridge Supply</span></li>
                    <li className="flex items-center space-x-1.5"><CheckCircle className="h-3.5 w-3.5 text-[#00B4D8] flex-shrink-0" /><span>Rental & AMC Contracts</span></li>
                  </ul>
                </div>
              </div>
              <div className="px-5 pb-5 pt-0">
                <Link to="/solutions/print-solutions" className="text-[#00B4D8] hover:text-[#38BDF8] font-semibold flex items-center space-x-1 text-xs">
                  <span>Learn More</span><ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients */}
      <section id="clients" className="py-8 sm:py-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade direction="down" triggerOnce cascade damping={0.2} duration={1000}>
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Trusted by Leading Organizations</h2>
              <p className="text-base sm:text-lg text-slate-700">
                We're proud to serve government agencies, enterprises, and high-profile clients
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            <Slide direction="left" triggerOnce delay={0} duration={1000}>
              <div className="bg-slate-900/80 border border-slate-800 p-5 sm:p-6 rounded-xl shadow-lg text-center h-full hover:border-cyan-500/40 transition-colors">
                <div className="bg-white p-2 w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
                  <img src={drdoLogo} alt="DRDO Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-white mb-1.5">DRDO & Defense</h3>
                <p className="text-slate-400 text-xs sm:text-sm">Defence Research & Development Organisation AMC & Tech Partner</p>
              </div>
            </Slide>

            <Slide direction="up" triggerOnce delay={150} duration={1000}>
              <div className="bg-slate-900/80 border border-slate-800 p-5 sm:p-6 rounded-xl shadow-lg text-center h-full hover:border-cyan-500/40 transition-colors">
                <div className="bg-white p-2 w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
                  <img src={nabardLogo} alt="NABARD Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-white mb-1.5">NABARD & National Banks</h3>
                <p className="text-slate-400 text-xs sm:text-sm">National Banks & Financial Institutions Infrastructure Contracts</p>
              </div>
            </Slide>

            <Slide direction="up" triggerOnce delay={300} duration={1000}>
              <div className="bg-slate-900/80 border border-slate-800 p-5 sm:p-6 rounded-xl shadow-lg text-center h-full hover:border-cyan-500/40 transition-colors">
                <div className="bg-white p-2 w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
                  <img src={IMDLogo} alt="IMD Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-white mb-1.5">Meteorological Dept</h3>
                <p className="text-slate-400 text-xs sm:text-sm">India Meteorological Department Electronics & Server AMC Contracts</p>
              </div>
            </Slide>

            <Slide direction="right" triggerOnce delay={450} duration={1000}>
              <div className="bg-slate-900/80 border border-slate-800 p-5 sm:p-6 rounded-xl shadow-lg text-center h-full hover:border-cyan-500/40 transition-colors">
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
        <div className="w-full max-w-7xl px-6 sm:px-10 py-10 sm:py-14 text-center z-10 bg-slate-950/95 border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-950/40 mx-4 sm:mx-6 lg:mx-8">
          <Fade direction="up" triggerOnce duration={1000}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Ready to Connect Your Technology Ecosystem?
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-7 text-cyan-100 max-w-2xl mx-auto">
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
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#0077b6] to-[#00b4d8] hover:from-[#0284c7] hover:to-[#38bdf8] text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl shadow-lg shadow-cyan-950/40 border border-cyan-400/30 transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
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
