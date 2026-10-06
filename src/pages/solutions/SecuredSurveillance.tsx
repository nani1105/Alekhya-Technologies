import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Camera, Eye, Lock, Fingerprint } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';
import { TextShimmer } from '../../components/ui/text-shimmer';
import SEO from '../../components/SEO';

import cctv4kImg from '../../Logo/4k cctv.jpg';
import deepVideoAnalysisImg from '../../Logo/Deep video analysis.jpg';
import biometricAccessImg from '../../Logo/Biometric access control.jpg';
import gateAutomationImg from '../../Logo/Gate Automation.jpg';
import centralVmsImg from '../../Logo/Central VMS NVR storage.jpg';
import thermalSecurityImg from '../../Logo/Thermal perimeter security.jpg';

const SecuredSurveillance: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <SEO 
        title="4K AI CCTV Camera Installation & Maintenance in Hyderabad"
        description="Professional 4K Ultra-HD CCTV surveillance, Hikvision & Dahua AI cameras, ANPR, biometric access control, boom barrier automation, and central VMS storage systems in Hyderabad."
        keywords="CCTV installation Hyderabad, CCTV maintenance Hyderabad, Hikvision CCTV dealers Hyderabad, Biometric attendance machine Hyderabad, Boom barrier installation HITEC City, Security surveillance Gachibowli"
        canonicalPath="/solutions/secured-surveillance"
      />
      <ParticlesBackground />

      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-500/30 px-4 py-1.5 rounded-full text-rose-400 text-xs sm:text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <TextShimmer duration={2.5} className="[--base-color:#fb7185] [--base-gradient-color:#ffffff] dark:[--base-color:#fb7185] dark:[--base-gradient-color:#ffffff]">
              AI CCTV & Electronic Security
            </TextShimmer>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Secured Surveillance
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            Deploying 4K AI-powered IP CCTV surveillance, automated license plate recognition (ANPR), biometric access control, perimeter barriers, and central Video Management Systems (VMS).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <GradientButton asChild className="px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm">
              <Link to="/contact-us">Request Security Proposal</Link>
            </GradientButton>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Camera,
              title: '4K AI IP CCTV Surveillance',
              desc: 'High-definition dome, bullet, PTZ, and fisheye cameras with ColorVu night vision and automated human/vehicle classification.',
              image: cctv4kImg
            },
            {
              icon: Eye,
              title: 'ANPR & Deep Video Analytics',
              desc: 'Automated License Plate Recognition (ANPR), facial recognition, perimeter intrusion alerts, and heat mapping analytics.',
              image: deepVideoAnalysisImg
            },
            {
              icon: Fingerprint,
              title: 'Biometric Access Control',
              desc: 'Touchless face recognition, fingerprint terminals, RFID smart cards, and electromagnetic door lock integration.',
              image: biometricAccessImg
            },
            {
              icon: Lock,
              title: 'Gate Automation & Turnstiles',
              desc: 'Automatic boom barriers, optical flap barrier turnstiles, visitor management kiosks, and bollards.',
              image: gateAutomationImg
            },
            {
              icon: ShieldCheck,
              title: 'Central VMS & NVR Storage',
              desc: 'Enterprise central video management software, RAID NVR storage arrays, and redundant cloud backup.',
              image: centralVmsImg
            },
            {
              icon: Eye,
              title: 'Thermal & Perimeter Security',
              desc: 'Infrared thermal cameras for high-security facilities, fire boundary monitoring, and fence intrusion beams.',
              image: thermalSecurityImg
            }
          ].map((item, idx) => (
            <div key={idx} className="group bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-rose-500/50 transition-all backdrop-blur-sm shadow-xl flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                  <div className="absolute top-3 left-3 w-9 h-9 bg-rose-600/80 backdrop-blur-md text-white rounded-xl flex items-center justify-center shadow-lg">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="px-5 sm:px-6 pb-5 pt-0">
                <Link to="/contact-us" className="inline-flex items-center space-x-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300">
                  <span>Get Security Estimate</span>
                  <Camera className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SecuredSurveillance;
