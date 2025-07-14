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
} from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';
import { GradientButton } from "../components/ui/gradient-button";
import { GlowCard } from "../components/ui/spotlight-card";
import { TextShimmer } from '../components/ui/text-shimmer';



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

const Home = () => {
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
              10+ years of excellence in CCTV security, computer services, and printer solutions.
              Trusted by NABARD, DRDO, and high-profile clients across India.
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
            <Link to="/contact">
              <GradientButton className="w-full sm:w-auto">Get Free Quote</GradientButton>
            </Link>

            <Link to="/services">
              <GradientButton variant="variant" className="w-full sm:w-auto">View Services</GradientButton>
            </Link>
          </div>

          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <Fade direction="up" cascade triggerOnce delay={50} duration={800}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110">
                <div className="text-3xl font-bold text-blue-600 mb-2 ">10+</div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Slide direction="left" triggerOnce delay={0} duration={1000}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden ">
                  <img src={nabardLogo} alt="NABARD Logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg mb-2">NABARD</h3>
                <p className="text-gray-600">National Bank for Agriculture and Rural Development</p>
              </div>
            </Slide>

            <Slide direction="up" triggerOnce delay={200} duration={1000}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img src={drdoLogo} alt="DRDO Logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-lg mb-2">DRDO</h3>
                <p className="text-gray-600">Defence Research and Development Organisation</p>
              </div>
            </Slide>

            <Slide direction="right" triggerOnce delay={400} duration={1000}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-yellow-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <Star className="h-10 w-10 text-yellow-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Celebrity Clients</h3>
                <p className="text-gray-600">High-profile individuals and entertainment industry</p>
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
