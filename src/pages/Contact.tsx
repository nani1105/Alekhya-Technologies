import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';

import heroImage from '../Logo/Hero.jpg'; 

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "919573376389";
    const textMessage = `*NEW ENQUIRY - ALEKHYA TECHNOLOGIES*
---------------------------------------
👤 *Customer Name:* ${formData.name || 'Not provided'}
📧 *Email Address:* ${formData.email}
📱 *Phone Number:* ${formData.phone}
🛠️ *Service:* ${formData.service || 'General Consultation'}
📝 *Message:* ${formData.message || 'N/A'}
---------------------------------------`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Fade direction="down" triggerOnce>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to secure your business with professional technology solutions? 
              Contact us for a free consultation and customized quote.
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Slide direction="left" triggerOnce>
            <div>
              <div
                className="relative text-white p-8 rounded-2xl mb-8 bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${heroImage})` }} // 
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <Fade cascade damping={0.1} triggerOnce> 
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <a href="tel:+919573376389" className="text-blue-100 hover:underline">
                          +91 95733 76389
                        </a>
                        <br/>
                        <a href="tel:+918977755173" className="text-blue-100 hover:underline">
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
                        <a  href="mailto:alekhyatechnologies7@gmail.com" className="text-blue-100 hover:underline">alekhyatechnologies7@gmail.com</a>
                        <br/>
                        <a href="mailto:alekhyatechnologies@yahoo.com" className="text-blue-100 hover:underline">alekhyatechnologies@yahoo.com</a>
                        
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-blue-100">
                          # 8-3-167-11/A<br />
                          Indraprastha, Siddarth Nagar, <br/>
                          AG Colony, <br/>
                          Hyderabad, Telangana 500008<br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Business Hours</h3>
                        <p className="text-blue-100">
                          Monday - Saturday: 9:00 AM - 8:00 PM<br />
                          Sunday: 10:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>

              <Fade direction="up" delay={200} triggerOnce>
                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Support</h3>
                  <p className="text-red-700 mb-3">
                    Need urgent technical assistance? Our emergency support team is available 24/7.
                  </p>
                  <a
                    href="tel:+919573376389"
                    className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-flex items-center space-x-2"
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
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                  <Fade key="success-message" triggerOnce>
                    <div className="text-center py-8">
                      <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                      <p className="text-green-700">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </Fade>
                ) : (
                  <Fade key="contact-form" triggerOnce>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg cursor-text hover:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="your@email.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          <option value="cctv">CCTV Security Systems</option>
                          <option value="computer">Computer Services</option>
                          <option value="printer">Printer Solutions</option>
                          <option value="Biometric">Biometric Attendance services</option>
                          <option value="Photocopy">Photocopy Machines (Xerox Machines)</option>
                          <option value="multiple">Multiple Services</option>
                          <option value="consultation">Free Consultation</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Please describe your requirements or any questions you have..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white py-3.5 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-900/20"
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
                    className="bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-3"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-semibold">Call Now</span>
                  </a>

                  <a
                    href="mailto:alekhyatechnologies7@gmail.com"
                    className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-3"
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
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Fade direction="up" triggerOnce cascade damping={0.1}>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <h3 className="text-lg font-bold text-blue-800 mb-2">Free Consultation</h3>
              <p className="text-blue-700 font-semibold text-sm">
                Get expert advice on your security and technology needs at no cost.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl text-center">
              <h3 className="text-lg font-bold text-green-800 mb-2">Quick Response</h3>
              <p className="text-green-700 font-semibold text-sm">
                We respond to all inquiries within 2 hours during business hours.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <h3 className="text-lg font-bold text-purple-800 mb-2">Custom Solutions</h3>
              <p className="text-purple-700 font-semibold text-sm">
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
