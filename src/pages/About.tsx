import React from 'react';
import { Award, Users, Clock, Shield, CheckCircle, Star, Target, Heart } from 'lucide-react';
// Import animation components
import { Fade, Slide } from 'react-awesome-reveal';
import corevalues from '/logo/values.avif';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Fade direction="down" triggerOnce>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Alekhya Technologies</span>
            </h1>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A decade of excellence in technology solutions, trusted by government agencies, 
              enterprises, and high-profile clients across India.
            </p>
          </Fade>
        </div>

        {/* Our Story */}
        <Slide direction="left" triggerOnce cascade damping={0.1} className="mb-20">
          <div className="relative text-white p-8 md:p-12 rounded-2xl bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/logo/journey.jpg')" }} >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Founded over a decade ago, Alekhya Technologies began with a simple mission: to provide 
                    reliable, professional technology solutions that businesses and individuals can trust.
                  </p>
                  <p>
                    What started as a small local service has grown into a trusted partner for some of 
                    India's most prestigious organizations, including NABARD and DRDO. Our commitment 
                    to excellence and customer satisfaction has earned us a reputation that spans 
                    across various industries.
                  </p>
                  <p>
                    Today, we continue to evolve with technology while maintaining our core values: 
                    integrity, reliability, and exceptional service quality.
                  </p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
       
        {/* Our Values */}
        
        <div className="mb-20">
          <Fade direction="down" triggerOnce>
             
        
            <div className="text-center mb-12">
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
          </Fade>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Fade direction="up" triggerOnce cascade damping={0.1}>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trust & Reliability</h3>
                <p className="text-gray-600">
                  Building lasting relationships through consistent, dependable service delivery.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  Striving for perfection in every project, no matter how big or small.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer First</h3>
                <p className="text-gray-600">
                  Leading with tech and best practices, we always put our customers first.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Staying ahead with the latest technology and industry best practices.
                </p>
              </div>
            </Fade>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-20">
          <Fade direction="down" triggerOnce>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h2>
              <p className="text-xl text-gray-600">Comprehensive technology solutions across multiple domains</p>
            </div>
          </Fade>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Slide direction="left" triggerOnce cascade damping={0.1}>
              <div  className="relative text-white p-8 rounded-xl bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: "url('/logo/adobe1.jpg')" }}>
                <h3 className="text-xl font-bold mb-4">Security Solutions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Advanced CCTV Systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Access Control Systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Alarm & Monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Smart Home Integration</span>
                  </li>
                </ul>
              </div>
            </Slide>
            
            <Slide direction="up" triggerOnce cascade damping={0.1} delay={100}>
              <div  className="relative text-white p-8 rounded-xl bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: "url('/logo/adobe1.jpg')" }}>
                <h3 className="text-xl font-bold mb-4">IT Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Hardware & Software Support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Network Infrastructure</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Data Recovery & Backup</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">System Optimization</span>
                  </li>
                </ul>
              </div>
            </Slide>
            
            <Slide direction="right" triggerOnce cascade damping={0.1} delay={200}>
              <div  className="relative text-white p-8 rounded-xl bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: "url('/logo/adobe1.jpg')" }}>
                <h3 className="text-xl font-bold mb-4">Print Solutions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Multi-brand Support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Maintenance Contracts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Supply Chain Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">Bulk Printing Services</span>
                  </li>
                </ul>
              </div>
            </Slide>
          </div>
        </div>

        {/* Prestigious Clients */}
        <div className="mb-20">
          <Fade direction="down" triggerOnce>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
                <p className="text-xl text-gray-600">
                  Our reputation is built on the trust of prestigious clients across various sectors
                </p>
              </div>
            </div>
          </Fade>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[-3rem] md:mt-[-4rem] lg:mt-[-5rem] relative z-10">
            <Slide direction="left" triggerOnce cascade damping={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <img src="/logo/nabard.png" alt="NABARD Logo" 
                  className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-3">NABARD</h3>
                <p className="text-gray-600 mb-4">
                  National Bank for Agriculture and Rural Development
                </p>
                <div className="text-sm text-blue-600 font-semibold">
                  Complete IT infrastructure and security solutions
                </div>
              </div>
            </Slide>
            
            <Slide direction="up" triggerOnce cascade damping={0.1} delay={100}>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <img src="/logo/drdo.png" alt="DRdo Logo" 
                  className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-3">DRDO</h3>
                <p className="text-gray-600 mb-4">
                  Defence Research and Development Organisation
                </p>
                <div className="text-sm text-red-600 font-semibold">
                  High-security surveillance and IT support
                </div>
              </div>
            </Slide>
            
            <Slide direction="right" triggerOnce cascade damping={0.1} delay={200}>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Star className="h-12 w-12 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Celebrity Clients</h3>
                <p className="text-gray-600 mb-4">
                  High-profile individuals from entertainment industry
                </p>
                <div className="text-sm text-yellow-600 font-semibold">
                  Confidential security and technology services
                </div>
              </div>
            </Slide>
          </div>
        </div>

        {/* Why Choose Us */}
        <Fade direction="up" triggerOnce delay={200}>
          <div
            className="relative text-white p-8 md:p-12 rounded-2xl bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url('/logo/Tech1.jpg')" }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Alekhya Technologies ?</h2>
              <p className="text-xl text-blue-100">
                The advantages that set us apart in the industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-3">10+ Years Experience</h3>
                <p className="text-blue-100 text-sm font-semibold ">
                  Proven track record with a decade of successful projects and satisfied clients.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-3">Government Certified</h3>
                <p className="text-blue-100 text-sm font-semibold">
                  Trusted by prestigious government organizations for critical technology needs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-3">Expert Team</h3>
                <p className="text-blue-100 text-sm font-semibold">
                  Certified technicians with specialized expertise in security and IT solutions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-3">Quality Assurance</h3>
                <p className="text-blue-100 text-sm font-semibold">
                  Rigorous quality checks and 100% satisfaction guarantee on all our services.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-3">24/7 Support</h3>
                <p className="text-blue-100 text-sm font-semibold">
                  Round-the-clock technical support and emergency response services.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold mb-3">Competitive Pricing</h3>
                <p className="text-blue-100 text-sm font-semibold">
                  Premium quality services at competitive rates with flexible payment options.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;