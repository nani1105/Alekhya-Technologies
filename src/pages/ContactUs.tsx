import React from 'react';
import { Phone, Mail, MapPin, Clock, Headphones } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import { GradientButton } from '../components/ui/gradient-button';

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-sm font-semibold mb-6">
            <Headphones className="w-4 h-4" />
            <span>Connect with Solution Architects</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">Contact Us</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-8">
            Get in touch for site surveys, system integration BOQs, or 24/7 SLA AMC support contracts.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Cards */}
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start space-x-4">
              <Phone className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Direct Phone Lines</h3>
                <p className="text-slate-300 text-sm"><a href="tel:+919573376389" className="hover:underline">+91 95733 76389</a></p>
                <p className="text-slate-400 text-xs mt-1">Available Mon - Sat (9:00 AM - 8:00 PM)</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start space-x-4">
              <Mail className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Official Emails</h3>
                <p className="text-slate-300 text-sm"><a href="mailto:alekhyatechnologies7@gmail.com" className="hover:underline">alekhyatechnologies7@gmail.com</a></p>
                <p className="text-slate-400 text-xs mt-1">Technical Inquiries & AMC Proposals</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Corporate Headquarters</h3>
                <p className="text-slate-300 text-sm">Hyderabad, Telangana, India</p>
                <p className="text-slate-400 text-xs mt-1">Serving clients Pan-India with local resident engineers</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send an Inquiry</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name / Organization</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" placeholder="e.g. John Doe / DRDO Lab" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" placeholder="+91 95733 76389" required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                  <input type="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" placeholder="name@company.com" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Message Brief</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500" placeholder="Tell us about your IT, AV, or security requirements..."></textarea>
              </div>
              <GradientButton type="submit" className="w-full py-3 text-sm font-semibold">Submit Technical Inquiry</GradientButton>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
