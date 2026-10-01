import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Users,
  Award,
  CheckCircle,
  Camera,
  Monitor,
  Printer,
  Star,
  Fingerprint,
  Cctv,
  Network,
  Tv,
  PhoneCall,
  ShieldCheck,
  Cpu,
  Wrench,
  Sparkles,
} from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';
import ProductCarousel from "../components/product_corousel";
import { GradientButton } from "../components/ui/gradient-button";
import { GlowCard } from "../components/ui/spotlight-card";
import { TextShimmer } from '../components/ui/text-shimmer';
import GlassCard from "../components/ui/glass-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import heroImage from '../Logo/Hero2.jpg';
import cctvImage from '../Logo/cctv1.jpg';
import nabardLogo from '../Logo/NABARD1.png';
import drdoLogo from '../Logo/drdo.png';
import adobeImage from '../Logo/adobe1.jpg';
import CCtv from '../Logo/Cctv2.jpg';
import Computer from '../Logo/computer.png';
import printer from '../Logo/printer.webp';
import photocopy from '../Logo/photocopy.webp';
import biometric from '../Logo/biometric.webp';
import laptop from '../Logo/Laptop.jpeg';
import logo from '../Logo/logo.png';
import lenovo from '../Logo/lenovo-t480.jpg'



const Home = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
          className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >

        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-20 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
          <div className="bg-white p-3 sm:p-4 rounded-full">
            <img
              src={logo}
              alt="Alekhya Logo"
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
            />
          </div>
        </div>

           <div className="text-3xl sm:text-6xl font-bold leading-tight overflow-visible">
            <span className="inline-block align-baseline leading-[1.4]">
              <TextShimmer
                duration={3.2}
                className="block [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]">
                Alekhya Technologies
              </TextShimmer>
            </span>
          </div>




            <h2 className="text-blue-300 text-2xl md:text-4xl font-bold mb-6">Professional Tech Solutions</h2>
             <h3 className='text-2xl md-text-3xl font-bold'>You Can Trust</h3>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              15+ years of industry excellence in Enterprise IT AMC Contracts, Server & Networking, CCTV Security, and A-Grade Refurbished Laptops.
              Trusted by DRDO, Meteorological Dept, Air Force School, NABARD & National Banks.
            </p>

            
            <div className="mb-10 flex flex-wrap justify-center gap-6">
              <div className="relative group w-32 h-32 bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 shadow-[0_0_12px_rgba(96,165,250,0.8)]"  >
               <img
                src={CCtv}
                alt="CCTV"
                className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110 shadow-[0_0_12px_rgba(96,165,250,0.8)]"
              />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs p-2 text-center">
                  CCTV Installation & Monitoring
                </div>
              </div>

              <div className="relative group w-32 h-32 bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 shadow-[0_0_12px_rgba(96,165,250,0.8)]">
                <img
                src={Computer}
                alt="computer"
                className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
              />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs p-2 text-center">
                  Computer Sales, Repair & Networking
                </div>
              </div>
              
              <div className="relative group w-32 h-32 bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 shadow-[0_0_12px_rgba(96,165,250,0.8)]
">
                <img
                src={biometric}
                alt="biometic"
                className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
              />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs p-2 text-center">
                  Biometric systems Installation & Maintainance
                </div>
              </div>

               <div className="relative group w-32 h-32 bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 shadow-[0_0_12px_rgba(96,165,250,0.8)]">
                <img
                src={photocopy}
                alt="photocopy"
                className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
              />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs p-2 text-center">
                  Xerox Machines Sales & Repair
                </div>
              </div>
              
                <div className="relative group w-32 h-32 bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 shadow-[0_0_12px_rgba(96,165,250,0.8)]">
                <img
                src={laptop}
                alt="laptop"
                className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
              />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs p-2 text-center">
                  Laptops Sales & Repair
                </div>
              </div>

              <div className="relative group w-32 h-32 bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 shadow-[0_0_12px_rgba(96,165,250,0.8)]">
                <img
                src={printer}
                alt="printer"
                className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110 "
              />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-xs p-2 text-center ">
                  Printer Sales, Service & Cartridge Supply
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/enterprise-solutions">
                <GradientButton className="w-full sm:w-auto flex items-center justify-center space-x-2">
                  <Sparkles className="h-4 w-4" />
                  <span>Enterprise Solutions (IT, AV & Security)</span>
                </GradientButton>
              </Link>

              <Link to="/contact">
                <GradientButton variant="variant" className="w-full sm:w-auto">Get Free Quote</GradientButton>
              </Link>

              <Link to="/services">
                <GradientButton variant="variant" className="w-full sm:w-auto">View All Services</GradientButton>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Enterprise Verticals Grid Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Turnkey Enterprise Integration</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
              Enterprise System Integration & Infrastructure Solutions
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto text-base sm:text-lg">
              Empowering corporate workplaces, defense laboratories, banking facilities, and educational campuses with resilient IT networks, AV automation, IP telephony, 4K security, and SLA-backed AMC contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Network,
                title: 'IT Infrastructure & Networking',
                desc: 'Enterprise L2/L3 switching, Wi-Fi 6/6E, structured fiber cabling, data center racks, and next-gen firewalls.',
                link: '/enterprise-solutions#it-infrastructure',
                tag: 'Network Core'
              },
              {
                icon: Tv,
                title: 'Audio-Visual (AV) Infrastructure',
                desc: 'Executive boardroom automation, fine-pitch LED video walls, interactive flat panels, and DSP audio setups.',
                link: '/enterprise-solutions#av-infrastructure',
                tag: 'AV Automation'
              },
              {
                icon: PhoneCall,
                title: 'IP Telephony & Unified Voice (UCC)',
                desc: 'Enterprise IP PBX systems, cloud telephony, Microsoft Teams / Zoom Room integrations, and SIP endpoints.',
                link: '/enterprise-solutions#voice-telephony',
                tag: 'Unified Voice'
              },
              {
                icon: ShieldCheck,
                title: 'IP Surveillance & Security',
                desc: '4K AI IP CCTV cameras, thermal vision, biometric access control (Face ID & Fingerprint), and perimeter barriers.',
                link: '/enterprise-solutions#ip-surveillance',
                tag: '4K Security'
              },
              {
                icon: Cpu,
                title: 'End-to-End System Integration',
                desc: 'Turnkey convergence of multi-vendor hardware, unified central monitoring dashboards, and middleware.',
                link: '/enterprise-solutions#system-integration',
                tag: 'System Integration'
              },
              {
                icon: Wrench,
                title: 'Implementation & SLA Support',
                desc: 'Pre-deployment OEM staging, 24/7 SLA-backed AMC contracts, resident technicians, and rapid repair dispatch.',
                link: '/enterprise-solutions#implementation-support',
                tag: 'SLA Support'
              }
            ].map((vertical, idx) => (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 hover:border-blue-500/50 p-8 rounded-2xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="bg-blue-600/20 text-blue-400 p-3.5 rounded-xl border border-blue-500/30">
                      <vertical.icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
                      {vertical.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {vertical.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {vertical.desc}
                  </p>
                </div>

                <Link
                  to={vertical.link}
                  className="inline-flex items-center space-x-2 text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors pt-4 border-t border-slate-800/80"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/enterprise-solutions"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg shadow-blue-600/30"
            >
              <span>View Full Enterprise Portfolio & OEM Partners</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 py-20">
        <Fade triggerOnce direction="up">
          <ProductCarousel />
        </Fade>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <Fade direction="up" cascade triggerOnce delay={50} duration={800}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110">
                <div className="text-3xl font-bold text-blue-600 mb-2 ">15+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110">
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-700">Happy Clients</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110">
                <div className="text-3xl font-bold text-purple-600 mb-2 ">24/7</div>
                <div className="text-gray-700">Support Available</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-700">Satisfaction Rate</div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section   className="relative py-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${cctvImage})` }}
        >
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Expert Services
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Comprehensive technology solutions for businesses and individuals
            </p>
          </div>


              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* CCTV Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-110 hover:z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-full w-fit mb-6">
                  <Camera className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">CCTV Security Systems</h3>
                <p className="text-white mb-6 font-semibold">
                  Complete surveillance solutions including installation, maintenance, and monitoring for homes and businesses.
                </p>
                <ul className="space-y-2 mb-6 text-white text-sm">
                  <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>HD & 4K Camera Installation</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Remote Monitoring Setup</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>24/7 Maintenance Support</span></li>
                </ul>
                <Link to="/services#cctv" className="text-blue-400 hover:text-blue-500 font-semibold flex items-center space-x-2">
                  <span>Learn More</span><ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Computer Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-110 hover:z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-full w-fit mb-6">
                  <Monitor className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Computer Services</h3>
                <p className="text-white mb-6 font-semibold">
                  Expert computer repair, networking, and IT support services for all your technology needs.
                </p>
                <ul className="space-y-2 mb-6 text-white text-sm">
                  <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Hardware & Software Repair</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Network Setup & Management</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Data Recovery Services</span></li>
                </ul>
                <Link to="/services#Computer" className="text-green-400 hover:text-green-500 font-semibold flex items-center space-x-2">
                  <span>Learn More</span><ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Biometric Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-110 hover:z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-full w-fit mb-6">
                  <Fingerprint className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Biometric Systems</h3>
                <p className="text-white mb-6 font-semibold">
                  Expert Biometric & RFID attendance systems installation, repair, and maintenance.
                </p>
                <ul className="space-y-2 mb-6 text-white text-sm">
                  <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Installation and Repair</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Service & Maintenance</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Advanced Systems</span></li>
                </ul>
                <Link to="/services#biometric" className="text-amber-400 hover:text-amber-500 font-semibold flex items-center space-x-2">
                  <span>Learn More</span><ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Printer Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-110 hover:z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-full w-fit mb-6">
                  <Printer className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Printer Solutions</h3>
                <p className="text-white mb-6 font-semibold">
                  Complete printer services including repair, maintenance, and supplies for all major brands.
                </p>
                <ul className="space-y-2 mb-6 text-white text-sm">
                  <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>All Brand Repair Services</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Toner & Cartridge Supply</span></li>
                  <li className="flex items-center space-x-2"><CheckCircle className="h-4 w-4 text-green-500" /><span>Preventive Maintenance</span></li>
                </ul>
                <Link to="/services#Printer" className="text-purple-400 hover:text-purple-500 font-semibold flex items-center space-x-2">
                  <span>Learn More</span><ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            </div>
            </section>
      {/* Trusted Clients */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Fade direction="down" triggerOnce cascade damping={0.2} duration={1000}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
              <p className="text-xl text-gray-600">
                We're proud to serve government agencies, enterprises, and high-profile clients
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Slide direction="left" triggerOnce delay={0} duration={1000}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="bg-blue-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img src={drdoLogo} alt="DRDO Logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg mb-2">DRDO & Defense</h3>
                <p className="text-gray-600 text-sm">Defence Research & Development Organisation AMC & Tech Partner</p>
              </div>
            </Slide>

            <Slide direction="up" triggerOnce delay={150} duration={1000}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="bg-blue-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img src={nabardLogo} alt="NABARD Logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg mb-2">NABARD & National Banks</h3>
                <p className="text-gray-600 text-sm">National Banks & Financial Institutions Infrastructure Contracts</p>
              </div>
            </Slide>

            <Slide direction="up" triggerOnce delay={300} duration={1000}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="bg-blue-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <Award className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Meteorological Dept</h3>
                <p className="text-gray-600 text-sm">India Meteorological Department Electronics & Server AMC Contracts</p>
              </div>
            </Slide>

            <Slide direction="right" triggerOnce delay={450} duration={1000}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center h-full">
                <div className="bg-green-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Air Force School & Edu</h3>
                <p className="text-gray-600 text-sm">Schools, Educational Institutions, CA Firms & Software Startups</p>
              </div>
            </Slide>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     <section
          className="relative w-full min-h-[60vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${adobeImage})` }}
        >
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <Fade direction="up" triggerOnce duration={1000}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto">
                Get expert consultation and customized solutions for your security and technology needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+919573376389"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
                >
                  Call: +91 9573376389
                </a>
              </div>
            </Fade>
          </div>
        </section>

    </div>
  );
};

export default Home;
