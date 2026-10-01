import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Camera, Eye, Lock, Fingerprint, CheckCircle2, ArrowRight } from 'lucide-react';
import ParticlesBackground from '../../components/ParticlesBackground';
import { GradientButton } from '../../components/ui/gradient-button';
import cctvImage from '../../Logo/cctv1.jpg';

const SecuredSurveillance: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center border-b border-slate-800"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.98)), url(${cctvImage})` }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-500/30 px-4 py-1.5 rounded-full text-rose-400 text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>AI CCTV & Electronic Security</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Secured Surveillance
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
            Deploying 4K AI-powered IP CCTV surveillance, automated license plate recognition (ANPR), biometric access control, perimeter barriers, and central Video Management Systems (VMS).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <GradientButton asChild className="px-6 py-3 text-sm">
              <Link to="/contact-us">Request Security Proposal</Link>
            </GradientButton>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-rose-500/50 transition-all">
              <div className="w-12 h-12 bg-rose-600/20 text-rose-400 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SecuredSurveillance;
