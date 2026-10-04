import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import AmcServices from './pages/AmcServices';
import RefurbishedLaptops from './pages/RefurbishedLaptops';
import PcSolutions from './pages/PcSolutions';
import EnterpriseSolutions from './pages/EnterpriseSolutions';

// Unicom Infotel Exact Structure Pages
import WhoWeAre from './pages/about/WhoWeAre';
import Awards from './pages/about/Awards';
import Careers from './pages/about/Careers';

import ProAvWorkplaces from './pages/solutions/ProAvWorkplaces';
import UnifiedCollaboration from './pages/solutions/UnifiedCollaboration';
import SecuredItInfrastructure from './pages/solutions/SecuredItInfrastructure';
import SecuredSurveillance from './pages/solutions/SecuredSurveillance';
import PrintSolutions from './pages/solutions/PrintSolutions';

import ProfessionalServices from './pages/services/ProfessionalServices';
import ManagedServices from './pages/services/ManagedServices';
import SupportMaintenance from './pages/services/SupportMaintenance';

import Blog from './pages/resources/Blog';
import CaseStudies from './pages/resources/CaseStudies';

import ContactUs from './pages/ContactUs';

import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* About Us Routes */}
          <Route path="/about-us/who-we-are" element={<WhoWeAre />} />
          <Route path="/about-us/awards" element={<Awards />} />
          <Route path="/about-us/careers" element={<Careers />} />

          {/* Solutions Routes */}
          <Route path="/solutions/pro-av-smart-workplaces" element={<ProAvWorkplaces />} />
          <Route path="/solutions/unified-collaboration" element={<UnifiedCollaboration />} />
          <Route path="/solutions/secured-it-infrastructure" element={<SecuredItInfrastructure />} />
          <Route path="/solutions/secured-surveillance" element={<SecuredSurveillance />} />
          <Route path="/solutions/print-solutions" element={<PrintSolutions />} />
          <Route path="/enterprise-solutions" element={<EnterpriseSolutions />} />

          {/* Services Routes */}
          <Route path="/services/professional-services" element={<ProfessionalServices />} />
          <Route path="/services/managed-services" element={<ManagedServices />} />
          <Route path="/services/support-maintenance" element={<SupportMaintenance />} />

          {/* Resources & Events Routes */}
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Legacy Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/amc" element={<AmcServices />} />
          <Route path="/refurbished-laptops" element={<RefurbishedLaptops />} />
          <Route path="/pc-solutions" element={<PcSolutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;