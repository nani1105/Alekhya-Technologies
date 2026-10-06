import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Camera, Eye, Lock, Fingerprint } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';

const SecuredSurveillance: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-500/30 px-4 py-1.5 rounded-full text-rose-400 text-xs sm:text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>AI CCTV & Electronic Security</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              icon: Camera,
              title: '4K AI IP CCTV Surveillance',
              desc: 'High-definition dome, bullet, PTZ, and fisheye cameras with ColorVu night vision and automated human/vehicle classification.'
            },
            {
              icon: Eye,
              title: 'ANPR & Deep Video Analytics',
              desc: 'Automated License Plate Recognition (ANPR), facial recognition, perimeter intrusion alerts, and heat mapping analytics.'
            },
            {
              icon: Fingerprint,
              title: 'Biometric Access Control',
              desc: 'Touchless face recognition, fingerprint terminals, RFID smart cards, and electromagnetic door lock integration.'
            },
            {
              icon: Lock,
              title: 'Gate Automation & Turnstiles',
              desc: 'Automatic boom barriers, optical flap barrier turnstiles, visitor management kiosks, and bollards.'
            },
            {
              icon: ShieldCheck,
              title: 'Central VMS & NVR Storage',
              desc: 'Enterprise central video management software, RAID NVR storage arrays, and redundant cloud backup.'
            },
            {
              icon: Eye,
              title: 'Thermal & Perimeter Security',
              desc: 'Infrared thermal cameras for high-security facilities, fire boundary monitoring, and fence intrusion beams.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl hover:border-rose-500/50 transition-all backdrop-blur-sm">
              <div className="w-10 h-10 bg-rose-600/20 text-rose-400 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SecuredSurveillance;
