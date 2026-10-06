import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

export const SERVICES_CATALOG = [
  {
    name: 'CCTV & Security Surveillance',
    subServices: [
      'Dome, Bullet & PTZ 4K AI Cameras',
      'ColorVu & Night Vision Surveillance',
      'ANPR & Perimeter Intrusion Detection',
      'Centralized NVR & VMS Storage Setup',
      'CCTV Repair, Relocation & Maintenance'
    ]
  },
  {
    name: 'Access Control & Biometrics',
    subServices: [
      'Face Recognition & Touchless Attendance',
      'Fingerprint & RFID Smart Card Systems',
      'Multi-Door Access Controllers & EM Locks',
      'Boom Barriers & Flap Turnstiles',
      'Visitor Management Systems (VMS)'
    ]
  },
  {
    name: 'Computers, Laptops & Servers',
    subServices: [
      'Certified A-Grade Refurbished Laptops',
      'Custom CAD & Video Editing Workstations',
      'All-in-One (AIO) PCs & Desktop Setup',
      'Enterprise Tower & Rack Server Deployments',
      'Chip-Level Motherboard Diagnostics & Upgrades'
    ]
  },
  {
    name: 'Secured IT & Networking',
    subServices: [
      'Enterprise Cisco L2/L3 Switching & VLANs',
      'Wi-Fi 6 / 6E Wireless Access Points',
      'Structured CAT6 & Fiber Optic Cabling',
      'Next-Gen Firewalls (Fortinet/SonicWall) & VPN',
      'Online Smart UPS & Server Rack Cabinets'
    ]
  },
  {
    name: 'PRO AV & Smart Workplaces',
    subServices: [
      '4K Interactive Flat Panels (IFPD / Smart Boards)',
      'Executive Boardroom Touch Automation',
      'High-Definition LED & LCD Video Walls',
      'Acoustic DSP & Beamforming Ceiling Mics',
      'Smart Classrooms & Laser Projectors'
    ]
  },
  {
    name: 'Unified Telephony & UCC',
    subServices: [
      'Grandstream Enterprise IP PBX & IVR Systems',
      'MS Teams & Zoom Certified Video Conferencing Bars',
      'Executive VoIP SIP Desk Phones',
      'Call Center Solutions & Voice Recording',
      'Session Border Controllers (SBC) & Gateways'
    ]
  },
  {
    name: 'Commercial Printers & Copiers',
    subServices: [
      'Multifunction Photocopier (MFP) Sales & Rentals',
      'Commercial Laser & EcoTank Printers',
      'Managed Print Services (MPS) & Cost-Per-Page',
      'Toner Cartridges & Consumable Supply',
      'Currency & Note Counting Machines'
    ]
  },
  {
    name: 'Annual Maintenance Contracts (AMC)',
    subServices: [
      'Comprehensive IT AMC (Parts + Labor Included)',
      'Non-Comprehensive IT AMC (Preventive + Labor)',
      'Govt & Defense Sector AMC (DRDO, NABARD, IMD)',
      'School, College & University Lab AMC',
      'Resident On-Site SLA Engineers'
    ]
  },
  {
    name: 'General / Turnkey Solutions',
    subServices: [
      'Complete Office IT Turnkey Setup',
      'Custom Technology Consultation',
      'Emergency On-Site Technical Support',
      'Multi-Service Integration Package'
    ]
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subService: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedServiceObj = SERVICES_CATALOG.find((s) => s.name === formData.service);
  const currentSubServices = selectedServiceObj ? selectedServiceObj.subServices : [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'service') {
      setFormData(prev => ({
        ...prev,
        service: value,
        subService: ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "919573376389";
    const textMessage = `*NEW ENQUIRY - ALEKHYA TECHNOLOGIES*
---------------------------------------
👤 *Customer Name:* ${formData.name || 'Not provided'}
📧 *Email Address:* ${formData.email}
📱 *Phone Number:* ${formData.phone}
🛠️ *Primary Service:* ${formData.service || 'General Consultation'}
🎯 *Sub-Service / Need:* ${formData.subService || 'All / General Requirement'}
📝 *Message / Scope:* ${formData.message || 'N/A'}
---------------------------------------`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen py-10 sm:py-12 bg-transparent text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <Fade direction="down" triggerOnce>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h1>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
              Ready to secure your business with professional technology solutions? 
              Contact us for a free consultation and customized quote.
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Slide direction="left" triggerOnce>
            <div>
              <div
                className="relative text-white p-8 rounded-2xl mb-8 bg-slate-900/80 border border-slate-800 shadow-2xl overflow-hidden"
              >
                <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                <div className="space-y-6">
                  <Fade cascade damping={0.1} triggerOnce> 
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-600/20 border border-blue-500/30 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Phone</h3>
                        <a href="tel:+919573376389" className="text-slate-300 hover:text-blue-400 transition-colors">
                          +91 95733 76389
                        </a>
                        <br/>
                        <a href="tel:+918977755173" className="text-slate-300 hover:text-blue-400 transition-colors">
                          +91 89777 55173
                        </a>
                        
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:alekhyatechnologies7@gmail.com" className="text-slate-300 hover:text-blue-400 transition-colors">alekhyatechnologies7@gmail.com</a>
                        <br/>
                        <a href="mailto:alekhyatechnologies@yahoo.com" className="text-slate-300 hover:text-blue-400 transition-colors">alekhyatechnologies@yahoo.com</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-600/20 border border-blue-500/30 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Address</h3>
                        <p className="text-slate-300">
                          # 8-3-167-11/A<br />
                          Indraprastha, Siddarth Nagar, <br/>
                          AG Colony, <br/>
                          Hyderabad, Telangana 500008<br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-600/20 border border-blue-500/30 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Business Hours</h3>
                        <p className="text-slate-300">
                          Monday - Saturday: 9:00 AM - 8:00 PM<br />
                          Sunday: 10:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>

              <Fade direction="up" delay={200} triggerOnce>
                <div className="bg-red-950/40 border border-red-800/60 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-red-400 mb-2">Emergency Support</h3>
                  <p className="text-red-200/80 mb-3 text-sm">
                    Need urgent technical assistance? Our emergency support team is available 24/7.
                  </p>
                  <a
                    href="tel:+919573376389"
                    className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Emergency: +91 95733 76389</span>
                  </a>
                </div>
              </Fade>
            </div>
          </Slide>

          {/* Contact Form */}
          <Slide direction="right" triggerOnce>
            <div>
              <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                  <Fade key="success-message" triggerOnce>
                    <div className="text-center py-8">
                      <div className="bg-emerald-500/20 border border-emerald-500/30 p-4 rounded-full w-fit mx-auto mb-4">
                        <CheckCircle className="h-12 w-12 text-emerald-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-emerald-400 mb-2">Message Sent Successfully!</h3>
                      <p className="text-slate-300">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </Fade>
                ) : (
                  <Fade key="contact-form" triggerOnce>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="your@email.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                            Primary Service *
                          </label>
                          <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                          <label htmlFor="subService" className="block text-sm font-medium text-slate-300 mb-2">
                            Specific Sub-Service / Need
                          </label>
                          <select
                            id="subService"
                            name="subService"
                            disabled={!formData.service}
                            value={formData.subService}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <option value="">
                              {formData.service ? '-- Select Specific Sub-Service --' : '-- Choose Service First --'}
                            </option>
                            {currentSubServices.map((sub, idx) => (
                              <option key={idx} value={sub}>
                                {sub}
                              </option>
                            ))}
                            {formData.service && (
                              <option value="Other / Custom Need under this category">
                                Other / Custom Need under this category
                              </option>
                            )}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Please describe your requirements or any questions you have..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-900/30"
                      >
                        <WhatsAppIcon className="h-5 w-5 text-white" />
                        <span>Send Message via WhatsApp</span>
                      </button>
                    </form>
                  </Fade>
                )}
              </div>

              <Fade direction="up" delay={300} triggerOnce>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a
                    href="tel:+919573376389"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-3 shadow-lg"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">Call Now</span>
                  </a>

                  <a
                    href="mailto:alekhyatechnologies7@gmail.com"
                    className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-xl transition-colors duration-200 flex items-center justify-center space-x-3 shadow-lg"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="font-semibold">Email Us</span>
                  </a>
                </div>
              </Fade>
            </div>
          </Slide>
        </div>

        {/* Additional Info */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <Fade direction="up" triggerOnce cascade damping={0.1}>
            <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-xl text-center">
              <h3 className="text-base font-bold text-blue-400 mb-1.5">Free Consultation</h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                Get expert advice on your security and technology needs at no cost.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-xl text-center">
              <h3 className="text-base font-bold text-emerald-400 mb-1.5">Quick Response</h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                We respond to all inquiries within 2 hours during business hours.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-xl text-center">
              <h3 className="text-base font-bold text-purple-400 mb-1.5">Custom Solutions</h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                Every project is tailored to meet your specific requirements and budget.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
