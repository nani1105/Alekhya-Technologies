import React, { useState } from 'react';
import { Phone, Mail, MapPin, Headphones } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import { SERVICES_CATALOG } from './Contact';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [subService, setSubService] = useState('');
  const [message, setMessage] = useState('');

  const selectedServiceObj = SERVICES_CATALOG.find((s) => s.name === service);
  const currentSubServices = selectedServiceObj ? selectedServiceObj.subServices : [];

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setService(e.target.value);
    setSubService('');
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "919573376389";
    const textMessage = `*NEW TECHNICAL ENQUIRY - ALEKHYA TECHNOLOGIES*
---------------------------------------
👤 *Customer / Org Name:* ${name || 'Not provided'}
📱 *Phone Number:* ${phone}
📧 *Email Address:* ${email}
🛠️ *Primary Service:* ${service || 'General Technical Consultation'}
🎯 *Sub-Service / Need:* ${subService || 'All / General Requirement'}
📝 *Requirement Details:* ${message || 'N/A'}
---------------------------------------`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      <ParticlesBackground />

      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <Headphones className="w-4 h-4" />
            <span>Connect with Solution Architects</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">Contact Us</h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-6">
            Get in touch for site surveys, system integration BOQs, or 24/7 SLA AMC support contracts.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Contact Cards */}
          <div className="space-y-4">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-start space-x-4">
              <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-base font-bold text-white mb-1">Direct Phone Lines</h3>
                <p className="text-slate-300 text-sm"><a href="tel:+919573376389" className="hover:underline">+91 95733 76389</a></p>
                <p className="text-slate-400 text-xs mt-0.5">Available Mon - Sat (9:00 AM - 8:00 PM)</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-start space-x-4">
              <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-base font-bold text-white mb-1">Official Emails</h3>
                <p className="text-slate-300 text-sm"><a href="mailto:alekhyatechnologies7@gmail.com" className="hover:underline">alekhyatechnologies7@gmail.com</a></p>
                <p className="text-slate-400 text-xs mt-0.5">Technical Inquiries & AMC Proposals</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-start space-x-4">
              <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-base font-bold text-white mb-1">Corporate Headquarters</h3>
                <p className="text-slate-300 text-sm">Hyderabad, Telangana, India</p>
                <p className="text-slate-400 text-xs mt-0.5">Serving clients Pan-India with local resident engineers</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Send an Inquiry</h3>
            <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name / Organization *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-400 cursor-text hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="e.g. John Doe / DRDO Lab"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-400 cursor-text hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="+91 95733 76389"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-400 cursor-text hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Service *</label>
                  <select
                    required
                    value={service}
                    onChange={handleServiceChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  >
                    <option value="">Select a Primary Service</option>
                    {SERVICES_CATALOG.map((s) => (
                      <option key={s.name} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Specific Sub-Service / Need</label>
                  <select
                    disabled={!service}
                    value={subService}
                    onChange={(e) => setSubService(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option value="">
                      {service ? '-- Select Specific Sub-Service --' : '-- Choose Service First --'}
                    </option>
                    {currentSubServices.map((sub, idx) => (
                      <option key={idx} value={sub}>
                        {sub}
                      </option>
                    ))}
                    {service && (
                      <option value="Other / Custom Need under this category">
                        Other / Custom Need under this category
                      </option>
                    )}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Message Brief</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-400 cursor-text hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="Tell us about your IT, AV, or security requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-950/50 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Submit Technical Inquiry via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
