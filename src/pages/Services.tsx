import React from 'react';
import { Camera, Monitor, Printer, CheckCircle, Shield, Wrench, Clock, Phone, Fingerprint } from 'lucide-react';
// Import animation components
import { Fade, Slide } from 'react-awesome-reveal';

const Services = () => {
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
              Comprehensive technology solutions backed by 10+ years of expertise and trusted by government agencies
            </p>
          </Fade>
        </div>

        {/* CCTV Services */}
        <Slide direction="right" triggerOnce cascade damping={0.1} className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
             <div  className="relative p-8 text-white bg-cover bg-center"
             style={{ backgroundImage: "url('/src/logo/adobe2.jpg')" }}>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Camera className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">CCTV Security Systems</h2>
                  <p className="text-blue-100">Complete surveillance solutions for maximum security</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>HD & 4K Camera Installation:</strong> High-resolution cameras for crystal clear footage
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Remote Monitoring Setup:</strong> Access your cameras from anywhere via mobile app
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Night Vision Systems:</strong> Advanced infrared technology for 24/7 surveillance
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Motion Detection & Alerts:</strong> Smart notifications for suspicious activities
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Cloud & Local Storage:</strong> Flexible recording options for your needs
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Perfect For</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-600">Businesses</h4>
                      <p className="text-sm text-gray-600">Offices, retail stores, warehouses, manufacturing units</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-600">Residential</h4>
                      <p className="text-sm text-gray-600">Homes, apartments, gated communities</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-600">Government</h4>
                      <p className="text-sm text-gray-600">Offices, institutions, public spaces</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Computer Services */}
        <Slide direction="left" triggerOnce cascade damping={0.1} className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
             <div  className="relative p-8 text-white bg-cover bg-center"
             style={{ backgroundImage: "url('/src/logo/adobe2.jpg')" }}>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Monitor className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Computer Services</h2>
                  <p className="text-green-100">Expert IT solutions for all your computing needs</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Hardware Repair & Upgrade:</strong> Motherboard, RAM, storage, and component repairs
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Software Solutions:</strong> OS installation, virus removal, software troubleshooting
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Network Setup:</strong> LAN/WAN configuration, WiFi setup, network security
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Data Recovery:</strong> Professional recovery from crashed drives and corrupted files
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>System Optimization:</strong> Performance tuning and maintenance services
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Service Areas</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <Wrench className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Repair</h4>
                      <p className="text-xs text-gray-600">Quick diagnosis & fix</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <Shield className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Security</h4>
                      <p className="text-xs text-gray-600">Antivirus & protection</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Maintenance</h4>
                      <p className="text-xs text-gray-600">Regular upkeep</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <Phone className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                      <h4 className="font-semibold">Support</h4>
                      <p className="text-xs text-gray-600">24/7 assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Printer Services */}
        <Slide direction="right" triggerOnce cascade damping={0.1} className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
             <div  className="relative p-8 text-white bg-cover bg-center"
             style={{ backgroundImage: "url('/src/logo/adobe2.jpg')" }}>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Printer className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Printer Solutions</h2>
                  <p className="text-purple-100">Complete printer for all major brands</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Comprehensive Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>All Brand Repairs:</strong> HP, Canon, Epson, Brother, Samsung, Konica Minolta and more
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Toner & Cartridge Supply:</strong> Original and compatible cartridges available
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Preventive Maintenance:</strong> Regular cleaning and calibration services
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Network Printer Setup:</strong> Wireless and wired network configuration
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Bulk Printing Solutions:</strong> High-volume printing services for businesses
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Supported Brands</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: "HP", src: "/src/logo/hp1.png" },
                      { name: "Canon", src: "/src/logo/Canon.png" },
                      { name: "Epson", src: "/src/logo/Epson_.png" },
                      { name: "Brother", src: "/src/logo/brother-log.png" },
                      { name: "Xerox", src: "/src/logo/Xerox-logo.jpg" },
                      { name: "Konica", src: "/src/logo/konica1.png" },
                    ].map((brand) => (
                      <div
                        key={brand.name}
                        className="bg-white p-4 rounded-lg shadow flex justify-center items-center h-24"
                      >
                        <img
                          src={brand.src}
                          alt={brand.name}
                          className="h-12 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Special Offers</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• Free pickup & delivery within city limits</li>
                      <li>• 10% discount on bulk cartridge orders</li>
                      <li>• Annual maintenance contracts available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Biometric Attendance Services */}
        <Slide direction="left" triggerOnce cascade damping={0.1} className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div  className="relative p-8 text-white bg-cover bg-center"
             style={{ backgroundImage: "url('/src/logo/adobe2.jpg')" }}>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Fingerprint className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Biometric Attendance Systems</h2>
                  <p className="text-amber-100">Modern attendance tracking with biometric and RFID solutions</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Fingerprint & Face Recognition:</strong> Secure and fast identity verification
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>RFID Card Access:</strong> Touchless attendance options
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Cloud Integration:</strong> Real-time data syncing with dashboards
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>SMS Alerts & Reports:</strong> Automated attendance reports and alerts
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Best For</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-amber-600">Schools & Colleges</h4>
                      <p className="text-sm text-gray-600">Track staff and student attendance efficiently</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700">Offices</h4>
                      <p className="text-sm text-gray-600">Ensure punctuality and maintain payroll accuracy</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700">Factories</h4>
                      <p className="text-sm text-gray-600">Shift-wise tracking and overtime calculation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Photocopy Machine Services */}
        <Slide direction="right" triggerOnce cascade damping={0.1} className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div  className="relative p-8 text-white bg-cover bg-center"
              style={{ backgroundImage: "url('/src/logo/adobe2.jpg')" }}>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Printer className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">Photocopy Machines (Xerox Machines)</h2>
                  <p className="text-gray-200">Sales and servicing for top photocopier brands</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">What We Provide</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>New Machine Sales:</strong> Authorized dealer of Canon, Xerox, Konica Minolta, and more
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Rental & Leasing Options:</strong> Cost-effective plans for businesses
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Repair Services:</strong> Fast service with original spare parts
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Annual Maintenance:</strong> Scheduled service contracts to ensure uptime
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Brands We Handle</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: "HP", src: "/src/logo/hp1.png" },
                      { name: "Canon", src: "/src/logo/Canon.png" },
                      { name: "Epson", src: "/src/logo/Epson_.png" },
                      { name: "Brother", src: "/src/logo/brother-log.png" },
                      { name: "Xerox", src: "/src/logo/Xerox-logo.jpg" },
                      { name: "Konica", src: "/src/logo/konica1.png" },
                    ].map((brand) => (
                      <div
                        key={brand.name}
                        className="bg-white p-4 rounded-lg shadow flex justify-center items-center h-24"
                      >
                        <img
                          src={brand.src}
                          alt={brand.name}
                          className="h-12 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* Why Choose Us */}
        <Fade direction="up" triggerOnce delay={200}>
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Alekhya Technologies ?</h2>
              <p className="text-blue-100">Experience the difference that comes with 10+ years of expertise</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Trusted by Government</h3>
                <p className="text-sm text-blue-100">NABARD and DRDO certified services</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-blue-100">Round-the-clock assistance available</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Quality Guaranteed</h3>
                <p className="text-sm text-blue-100">100% satisfaction guarantee</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Expert Technicians</h3>
                <p className="text-sm text-blue-100">Certified and experienced professionals</p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Services;