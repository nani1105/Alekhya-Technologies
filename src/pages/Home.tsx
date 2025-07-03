import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, CheckCircle, Camera, Monitor, Printer, Star, Fingerprint } from 'lucide-react';

// --- Import animation components from react-awesome-reveal ---
import { Fade, Slide } from 'react-awesome-reveal';



const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - No animation on hero as it's typically the first thing users see */}
      <section
        className="relative w-full h-[600px] flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/src/logo/hero2.jpg')` }}

      >
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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

      {/* Stats Section - Adding simple Fade animation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* Using Fade with stagger for stats */}
            <Fade direction="up" cascade triggerOnce delay={50} duration={800}>
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
            </Fade>
          </div>
        </div>
      </section>

      {/* Services Preview - MODIFIED FOR ANIMATION AND FIXES */}
      <section
        className="relative py-20 bg-gray-900 text-gray-100 bg-cover bg-center"
        style={{ backgroundImage: `url('/src/logo/cctv1.jpg')` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Using Fade for the section title and description */}
          <Fade direction="down" triggerOnce cascade damping={0.2} duration={1000}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Expert Services
              </h2>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Comprehensive technology solutions for businesses and individuals
              </p>
            </div>
          </Fade>

          {/* Adjusted gap and grid for better card consistency */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1: CCTV Security Systems */}
            <Slide direction="up" triggerOnce delay={0} duration={1000}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"> {/* Added flex flex-col h-full */}
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                  <Camera className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">CCTV Security Systems</h3>
                <p className="text-gray-700 mb-6 flex-grow"> {/* Added flex-grow */}
                  Complete surveillance solutions including installation, maintenance, and monitoring for homes and businesses.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2"> {/* Changed items-center to items-start for multiline text */}
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" /> {/* Increased size, flex-shrink-0 and mt-0.5 */}
                    <span className="text-sm text-gray-700">HD & 4K Camera Installation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Remote Monitoring Setup</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">24/7 Maintenance Support</span>
                  </li>
                </ul>
                <Link
                  to="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center space-x-2 mt-auto" // mt-auto pushes link to bottom
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Slide>

            {/* Service Card 2: Computer Services */}
            <Slide direction="up" triggerOnce delay={200} duration={1000}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                  <Monitor className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Computer Services</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Expert computer repair, networking, and IT support services for all your technology needs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Hardware & Software Repair</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Network Setup & Management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Data Recovery Services</span>
                  </li>
                </ul>
                <Link
                  to="/services"
                  className="text-blue-600 font-semibold hover:text-green-700 flex items-center space-x-2 mt-auto"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Slide>

            {/* Service Card 3: Biometric Systems - FIXES APPLIED HERE */}
            <Slide direction="up" triggerOnce delay={400} duration={1000}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                  <Fingerprint className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Biometric Systems</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Expert Biometric attendance systems Installation, repair, maintenance for Schools & Colleges, offices, factories.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Installation & repair</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Service and Maintenance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Fingerprint and RFID card Touchless Systems</span> {/* Changed to text-gray-700 for consistency */}
                  </li>
                </ul>
                <Link
                  to="/services"
                  className="text-blue-600 font-semibold hover:text-green-700 flex items-center space-x-2 mt-auto"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Slide>

            {/* Service Card 4: Printer Solutions - FIXES APPLIED HERE */}
            <Slide direction="up" triggerOnce delay={600} duration={1000}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-6">
                  <Printer className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Printer Solutions</h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  Complete printer services including repair, maintenance, and supplies for all major brands.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">All Brand Repair Services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Toner & Cartridge Supply</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Preventive Maintenance</span>
                  </li>
                </ul>
                <Link
                  to="/services"
                  className="text-blue-600 font-semibold hover:text-purple-700 flex items-center space-x-2 mt-auto"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Slide>
          </div>
        </div>
      </section>

      {/* Trusted Clients - Adding animation here as well */}
            <section className="py-16 bg-gray-50">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Fade for the Trusted Clients section title and description */}
       <Fade direction="down" triggerOnce cascade damping={0.2} duration={1000}>
       <div className="text-center mb-12">
       <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
          <p className="text-xl text-gray-600">
             We're proud to serve government agencies, enterprises, and high-profile clients
          </p>
       </div>
       </Fade>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       {/* Animation for each client block with staggered delays */}
       <Slide direction="left" triggerOnce delay={0} duration={1000}>
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
       <div className="bg-blue-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
      <img src="/src/logo/nabard1.png" alt="NABARD Logo" 
        className="w-full h-full object-cover" />
      </div>
      <h3 className="font-bold text-lg mb-2">NABARD</h3>
      <p className="text-gray-600">National Bank for Agriculture and Rural Development</p>
       </div>
      </Slide>

     <Slide direction="up" triggerOnce delay={200} duration={1000}>
       <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="bg-blue-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
      <img src="/src/logo/drdo.png" alt="DRDO Logo" 
        className="w-full h-full object-cover" />
       </div>
      <h3 className="font-bold text-lg mb-2">DRDO</h3>
       <p className="text-gray-600">Defence Research and Development Organisation</p>
       </div>
      </Slide>

       <Slide direction="right" triggerOnce delay={400} duration={1000}>
       <div className="bg-white p-6 rounded-lg shadow-md text-center">
       {/* MODIFIED: Celebrity Clients icon container to be same size/style */}
       <div className="bg-yellow-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
      <Star className="h-10 w-10 text-yellow-600" /> {/* Adjusted icon size to fill the larger circle */}
      </div>
      <h3 className="font-bold text-lg mb-2">Celebrity Clients</h3>
       <p className="text-gray-600">High-profile individuals and entertainment industry</p>
      </div>
       </Slide>
      </div>
      </div>
     </section>

      {/* CTA Section - Adding a simple Fade animation */}
      <section className="relative w-full h-[300px] flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
       style={{ backgroundImage: `url('/src/logo/Adobe1.jpg')` }}>
        
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Fade direction="up" triggerOnce duration={1000}>
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
                href="tel:+919573376389"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
              >
                Call: +91 9573376389
              </a>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default Home;