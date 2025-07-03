import React from 'react';
import {
  Camera,
  Monitor,
  Printer,
  CheckCircle,
  Shield,
  Wrench,
  Clock,
  Phone,
  Fingerprint,
} from 'lucide-react';
import { Fade, Slide } from 'react-awesome-reveal';


import adobeImage from '../Logo/adobe2.jpg';
import hpImage from '../Logo/Hp1.png';
import canonImage from '../Logo/Canon.png';
import epsonImage from '../Logo/Epson_.png';
import brotherImage from '../Logo/brother-log.png';
import xeroxImage from '../Logo/Xerox-logo.jpg';
import konicaImage from '../Logo/Konica1.png';

const Services = () => {
  const brandLogos = [
    { name: 'HP', src: hpImage },
    { name: 'Canon', src: canonImage },
    { name: 'Epson', src: epsonImage },
    { name: 'Brother', src: brotherImage },
    { name: 'Xerox', src: xeroxImage },
    { name: 'Konica', src: konicaImage },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Fade direction="down" triggerOnce>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Professional Services
            </h1>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions backed by 10+ years of expertise and trusted by
              government agencies
            </p>
          </Fade>
        </div>

        {/* Service Sections */}
        {[
          {
            icon: <Camera className="h-8 w-8" />,
            title: 'CCTV Security Systems',
            subtitle: 'Complete surveillance solutions for maximum security',
            audience: ['Businesses', 'Residential', 'Government'],
            audienceColors: ['text-blue-600', 'text-green-600', 'text-purple-600'],
            audienceDesc: [
              'Offices, retail stores, warehouses, manufacturing units',
              'Homes, apartments, gated communities',
              'Offices, institutions, public spaces',
            ],
            points: [
              'HD & 4K Camera Installation: High-resolution cameras for crystal clear footage',
              'Remote Monitoring Setup: Access your cameras from anywhere via mobile app',
              'Night Vision Systems: Advanced infrared technology for 24/7 surveillance',
              'Motion Detection & Alerts: Smart notifications for suspicious activities',
              'Cloud & Local Storage: Flexible recording options for your needs',
            ],
          },
          {
            icon: <Monitor className="h-8 w-8" />,
            title: 'Computer Services',
            subtitle: 'Expert IT solutions for all your computing needs',
            expertise: [
              'Hardware Repair & Upgrade: Motherboard, RAM, storage, and component repairs',
              'Software Solutions: OS installation, virus removal, software troubleshooting',
              'Network Setup: LAN/WAN configuration, WiFi setup, network security',
              'Data Recovery: Professional recovery from crashed drives and corrupted files',
              'System Optimization: Performance tuning and maintenance services',
            ],
          },
          {
            icon: <Printer className="h-8 w-8" />,
            title: 'Printer Solutions',
            subtitle: 'Complete printer for all major brands',
            services: [
              'All Brand Repairs: HP, Canon, Epson, Brother, Samsung, Konica Minolta and more',
              'Toner & Cartridge Supply: Original and compatible cartridges available',
              'Preventive Maintenance: Regular cleaning and calibration services',
              'Network Printer Setup: Wireless and wired network configuration',
              'Bulk Printing Solutions: High-volume printing services for businesses',
            ],
          },
          {
            icon: <Fingerprint className="h-8 w-8" />,
            title: 'Biometric Attendance Systems',
            subtitle: 'Modern attendance tracking with biometric and RFID solutions',
            features: [
              'Fingerprint & Face Recognition: Secure and fast identity verification',
              'RFID Card Access: Touchless attendance options',
              'Cloud Integration: Real-time data syncing with dashboards',
              'SMS Alerts & Reports: Automated attendance reports and alerts',
            ],
          },
          {
            icon: <Printer className="h-8 w-8" />,
            title: 'Photocopy Machines (Xerox Machines)',
            subtitle: 'Sales and servicing for top photocopier brands',
            highlights: [
              'New Machine Sales: Authorized dealer of Canon, Xerox, Konica Minolta, and more',
              'Rental & Leasing Options: Cost-effective plans for businesses',
              'Repair Services: Fast service with original spare parts',
              'Annual Maintenance: Scheduled service contracts to ensure uptime',
            ],
          },
        ].map((service, index) => (
          <Slide
            key={service.title}
            direction={index % 2 === 0 ? 'right' : 'left'}
            triggerOnce
            cascade
            damping={0.1}
            className="mb-20"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div
                className="relative p-8 text-white bg-cover bg-center"
                style={{ backgroundImage: `url(${adobeImage})` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-3 rounded-full">{service.icon}</div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                    <p className="text-blue-100">{service.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column - Services */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      {service.points ? 'What We Offer' : service.expertise ? 'Our Expertise' : service.services ? 'Comprehensive Services' : service.features ? 'Features' : 'What We Provide'}
                    </h3>
                    <ul className="space-y-3">
                      {(service.points ||
                        service.expertise ||
                        service.services ||
                        service.features ||
                        service.highlights
                      )?.map((item) => {
                        const [label, ...rest] = item.split(':');
                        return (
                          <li key={item} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <strong>{label}:</strong> {rest.join(':').trim()}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Right Column - Additional */}
                  {index === 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Perfect For</h3>
                      <div className="space-y-4">
                        {service.audience?.map((type, i) => (
                          <div key={type} className="bg-gray-50 p-4 rounded-lg">
                            <h4 className={`font-semibold ${service.audienceColors?.[i]}`}>{type}</h4>
                            <p className="text-sm text-gray-600">{service.audienceDesc?.[i]}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {index === 2 || index === 4 ? (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Supported Brands</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {brandLogos.map((brand) => (
                          <div
                            key={brand.name}
                            className="bg-white p-4 rounded-lg shadow flex justify-center items-center h-24"
                          >
                            <img src={brand.src} alt={brand.name} className="h-12 object-contain" />
                          </div>
                        ))}
                      </div>
                      {index === 2 && (
                        <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-purple-800 mb-2">Special Offers</h4>
                          <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Free pickup & delivery within city limits</li>
                            <li>• 10% discount on bulk cartridge orders</li>
                            <li>• Annual maintenance contracts available</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Slide>
        ))}

        {/* Why Choose Us */}
        <Fade direction="up" triggerOnce delay={200}>
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Alekhya Technologies?</h2>
              <p className="text-blue-100">Experience the difference that comes with 10+ years of expertise</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: 'Trusted by Government', desc: 'NABARD and DRDO certified services' },
                { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock assistance available' },
                { icon: CheckCircle, title: 'Quality Guaranteed', desc: '100% satisfaction guarantee' },
                { icon: Wrench, title: 'Expert Technicians', desc: 'Certified and experienced professionals' },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="bg-white/20 p-3 rounded-full w-fit mx-auto mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-blue-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Services;
