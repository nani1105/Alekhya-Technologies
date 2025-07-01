import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, CheckCircle, Camera, Monitor, Printer, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 p-3 rounded-full">
                <Shield className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="text-blue-300">Tech Solutions</span>
              <br />You Can Trust
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              10+ years of excellence in CCTV security, computer services, and printer solutions. 
              Trusted by NABARD, DRDO, and high-profile clients across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-700">Happy Clients</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-700">Support Available</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-700">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions for businesses and individuals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div
                className="bg-white/20 p-3 rounded-full bg-no-repeat bg-center bg-contain h-14 w-14"
                style={{ backgroundImage: "url('/logo/cctv.png')" }}
              >
                {/* Optionally keep icon for fallback */}
              </div>
              <h3 className="text-xl font-semibold mb-4">CCTV Security Systems</h3>
              <p className="text-gray-600 mb-6">
                Complete surveillance solutions including installation, maintenance, and monitoring for homes and businesses.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">HD & 4K Camera Installation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Remote Monitoring Setup</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">24/7 Maintenance Support</span>
                </li>
              </ul>
              <Link
                to="/services"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-6">
                <Monitor className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Computer Services</h3>
              <p className="text-gray-600 mb-6">
                Expert computer repair, networking, and IT support services for all your technology needs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Hardware & Software Repair</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Network Setup & Management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Data Recovery Services</span>
                </li>
              </ul>
              <Link
                to="/services"
                className="text-green-600 font-semibold hover:text-green-700 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-6">
                <Printer className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Printer Solutions</h3>
              <p className="text-gray-600 mb-6">
                Complete printer services including repair, maintenance, and supplies for all major brands.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">All Brand Repair Services</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Toner & Cartridge Supply</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Preventive Maintenance</span>
                </li>
              </ul>
              <Link
                to="/services"
                className="text-purple-600 font-semibold hover:text-purple-700 flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
            <p className="text-xl text-gray-600">
              We're proud to serve government agencies, enterprises, and high-profile clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">NABARD</h3>
              <p className="text-gray-600">National Bank for Agriculture and Rural Development</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">DRDO</h3>
              <p className="text-gray-600">Defence Research and Development Organisation</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-yellow-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Celebrity Clients</h3>
              <p className="text-gray-600">High-profile individuals and entertainment industry</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get expert consultation and customized solutions for your security and technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+919876543210"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
            >
              Call: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;