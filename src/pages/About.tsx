import React from 'react';
import { Award, Users, Clock, CheckCircle, Star } from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';

// Import images
import nabardImg from '../Logo/Nabard.png';
import drdoImg from '../Logo/drdo.png';
import Logo from '../Logo/Alekhya.png';

const About = () => {
  return (
    <div className="min-h-screen py-10 sm:py-12 bg-transparent text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex justify-center mb-3">
            <div className="bg-white p-1 rounded-full shadow-lg">
              <img
                src={Logo}
                alt="Alekhya Logo"
                className="h-24 w-24 sm:h-28 sm:w-28 object-cover rounded-full shadow-lg"
              />
            </div>
          </div>

          <Fade direction="down" triggerOnce>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
              About <span className="text-blue-400">Alekhya Technologies</span>
            </h1>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
              15 years of industry excellence in enterprise technology solutions, IT AMC contracts, and security infrastructure. Trusted by DRDO, Meteorological Dept, Air Force School, NABARD & National Banks.
            </p>
          </Fade>
        </div>

        {/* Our Story */}
        <Slide direction="left" triggerOnce cascade damping={0.1} className="mb-10 sm:mb-12">
          <div className="relative text-white p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Journey</h2>
                <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  <p>
                    With 15 years in the IT industry, Alekhya Technologies provides end-to-end technology infrastructure, Annual Maintenance Contracts (AMC), server & networking deployments, CCTV security, and premium A-grade refurbished laptops.
                  </p>
                  <p>
                    We proudly serve State & Central Government Organizations, Educational Institutions & Schools, CA & Financial Firms, and Software Startups. Our track record includes key contracts with defense & government entities like DRDO, Meteorological Dept, Air Force School, NABARD, and National Banks.
                  </p>
                  <p>
                    Today, we continue to deliver high-uptime AMC SLAs, budget-friendly customized PCs, printer/photocopy solutions, and top-tier refurbished IT hardware across India.
                  </p>
                </div>
              </div>
              <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">15+</div>
                    <div className="text-xs sm:text-sm text-slate-300">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">500+</div>
                    <div className="text-xs sm:text-sm text-slate-300">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">24/7</div>
                    <div className="text-xs sm:text-sm text-slate-300">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">100%</div>
                    <div className="text-xs sm:text-sm text-slate-300">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Expertise Areas */}
        <div className="mb-10 sm:mb-12">
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Our Expertise</h2>
              <p className="text-base sm:text-lg text-slate-300">Comprehensive technology solutions across multiple domains</p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Slide direction="left" triggerOnce cascade damping={0.1}>
              <div className="relative text-white p-6 rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl hover:border-blue-500/40 transition-colors">
                <h3 className="text-lg font-bold mb-3 text-blue-400">Security Solutions</h3>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>Advanced CCTV Systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>Access Control Systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>Alarm & Monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>Smart Automation Integration</span>
                  </li>
                </ul>
              </div>
            </Slide>

            <Slide direction="up" triggerOnce cascade damping={0.1} delay={100}>
              <div className="relative text-white p-6 rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl hover:border-blue-500/40 transition-colors">
                <h3 className="text-lg font-bold mb-3 text-blue-400">IT Services</h3>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>Hardware & Software Support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>Network Infrastructure</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>Data Recovery & Backup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>System Optimization</span>
                  </li>
                </ul>
              </div>
            </Slide>

            <Slide direction="right" triggerOnce cascade damping={0.1} delay={200}>
              <div className="relative text-white p-6 rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-xl hover:border-blue-500/40 transition-colors">
                <h3 className="text-lg font-bold mb-3 text-blue-400">Print Solutions</h3>
                <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>Multi-brand Support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>Maintenance Contracts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>Supply Chain Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>Bulk Printing Services</span>
                  </li>
                </ul>
              </div>
            </Slide>
          </div>
        </div>

        {/* Prestigious Clients */}
        <div className="mb-10 sm:mb-12">
          <Fade direction="down" triggerOnce>
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 mb-6 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Trusted by Leading Organizations</h2>
              <p className="text-base sm:text-lg text-slate-300">
                Our reputation is built on the trust of prestigious clients across various sectors
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <Slide direction="left" triggerOnce cascade damping={0.1}>
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl shadow-lg text-center">
                <div className="bg-white p-2 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden">
                  <img src={nabardImg} alt="NABARD Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">NABARD</h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-3">
                  National Bank for Agriculture and Rural Development
                </p>
                <div className="text-xs text-blue-400 font-semibold">
                  Complete IT infrastructure and security solutions
                </div>
              </div>
            </Slide>

            <Slide direction="up" triggerOnce cascade damping={0.1} delay={100}>
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl shadow-lg text-center">
                <div className="bg-white p-2 w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden">
                  <img src={drdoImg} alt="DRDO Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">DRDO</h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-3">
                  Defence Research and Development Organisation
                </p>
                <div className="text-xs text-red-400 font-semibold">
                  High-security surveillance and IT support
                </div>
              </div>
            </Slide>

            <Slide direction="right" triggerOnce cascade damping={0.1} delay={200}>
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl shadow-lg text-center">
                <div className="bg-amber-500/20 border border-amber-500/30 p-3 rounded-full w-fit mx-auto mb-4">
                  <Star className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Celebrity Clients</h3>
                <p className="text-slate-300 text-xs sm:text-sm mb-3">
                  High-profile individuals from entertainment industry
                </p>
                <div className="text-xs text-amber-400 font-semibold">
                  Confidential security and technology services
                </div>
              </div>
            </Slide>
          </div>
        </div>

        {/* Why Choose Us */}
        <Fade direction="up" triggerOnce delay={200}>
          <div className="relative text-white p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Why Choose Alekhya Technologies?</h2>
              <p className="text-base text-slate-300">
                The advantages that set us apart in the industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="text-center bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
                <div className="bg-blue-600/20 border border-blue-500/30 p-2.5 rounded-full w-fit mx-auto mb-3">
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">15+ Years Experience</h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Proven track record with over a decade of successful projects and satisfied clients.
                </p>
              </div>

              <div className="text-center bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
                <div className="bg-emerald-600/20 border border-emerald-500/30 p-2.5 rounded-full w-fit mx-auto mb-3">
                  <Award className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">Government Certified</h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Trusted by prestigious government organizations for critical technology needs.
                </p>
              </div>

              <div className="text-center bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
                <div className="bg-purple-600/20 border border-purple-500/30 p-2.5 rounded-full w-fit mx-auto mb-3">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">Expert Team</h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Certified technicians with specialized expertise in security and IT solutions.
                </p>
              </div>

              <div className="text-center bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
                <div className="bg-cyan-600/20 border border-cyan-500/30 p-2.5 rounded-full w-fit mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">Quality Assurance</h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Rigorous quality checks and 100% satisfaction guarantee on all our services.
                </p>
              </div>

              <div className="text-center bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
                <div className="bg-rose-600/20 border border-rose-500/30 p-2.5 rounded-full w-fit mx-auto mb-3">
                  <Clock className="h-6 w-6 text-rose-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Round-the-clock technical support and emergency response services.
                </p>
              </div>

              <div className="text-center bg-slate-950/60 p-5 rounded-xl border border-slate-800/80">
                <div className="bg-amber-600/20 border border-amber-500/30 p-2.5 rounded-full w-fit mx-auto mb-3">
                  <Star className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">Competitive Pricing</h3>
                <p className="text-slate-300 text-xs sm:text-sm">
                  Premium quality services at competitive rates with flexible payment options.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
