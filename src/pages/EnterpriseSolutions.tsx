import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Network,
  Tv,
  PhoneCall,
  ShieldCheck,
  Cpu,
  Wrench,
  Printer,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Headphones,
  Award,
} from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import ParticlesBackground from '../components/ParticlesBackground';
import { GradientButton } from '../components/ui/gradient-button';
import ciscoLogo from '../Logo/Cisco_logo.svg.webp';
import arubaLogo from '../Logo/HPE-aruba-networking-logo.webp';
import dellLogo from '../Logo/Dell.webp';
import polyLogo from '../Logo/hppoly.jpg';
import yealinkLogo from '../Logo/Yealink_logo.png';
import grandstreamLogo from '../Logo/Grandstream.png';
import hikvisionLogo from '../Logo/Hikvision_logo.svg';
import dahuaLogo from '../Logo/Dahua_Technology_logo.svg';
import honeywellLogo from '../Logo/Honeywell.jpeg';
import canonLogo from '../Logo/Canon.png';
import epsonLogo from '../Logo/Epson_.png';
import xeroxLogo from '../Logo/Xerox-logo.jpg';
import konicaLogo from '../Logo/Konica1.png';

interface SolutionCategory {
  id: string;
  title: string;
  shortDesc: string;
  icon: React.ElementType;
  badge: string;
  bannerBg: string;
  highlights: string[];
  keyOfferings: {
    title: string;
    description: string;
    details: string[];
  }[];
  oems: string[];
  partnerIds: string[];
  deploymentDomains: string[];
}

const enterpriseCategories: SolutionCategory[] = [
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure & Enterprise Networking',
    shortDesc: 'High-availability enterprise switching, routing, structured fiber cabling, data center racks, and next-gen network security.',
    icon: Network,
    badge: 'Core Infrastructure',
    bannerBg: 'from-blue-900 via-indigo-900 to-slate-900',
    highlights: [
      'High-Density L2/L3 Switching & Core Routing',
      'Wi-Fi 6 & 6E Enterprise Wireless Solutions',
      'Structured LAN & High-Speed Optical Fiber Cabling',
      'Data Center Racks, Precision Power & Smart PDU Setup',
      'Next-Gen Firewalls (NGFW) & SD-WAN Architectures'
    ],
    keyOfferings: [
      {
        title: 'Enterprise Network Architecture',
        description: 'Design and deployment of resilient, high-speed campus networks with multi-gigabit core backbones.',
        details: [
          'Stackable L2/L3 Managed Switches',
          'Redundant WAN Load Balancing & SD-WAN',
          'VLAN Segmentation & Zero-Trust Access Control',
          'Centralized Cloud Network Monitoring Dashboards'
        ]
      },
      {
        title: 'Structured Fiber & LAN Cabling',
        description: 'Certified structured cabling solutions ensuring pristine signal integrity and scalability.',
        details: [
          'Cat6, Cat6A Gigabit Twisted Pair Wiring',
          'Single-Mode & Multi-Mode Fiber Optic Networks',
          'Patch Panel Engineering & Cable Management',
          'OTDR Testing & Certification Documentation'
        ]
      },
      {
        title: 'Data Center & Network Security',
        description: 'Hardened physical and cyber protection for enterprise data assets and server hardware.',
        details: [
          'Next-Generation Firewall Deployment & UTM',
          'Server Rack Enclosures & Precision Cooling Solutions',
          'Online Uninterruptible Power Supply (UPS) Systems',
          'Network Vulnerability Audits & Intrusion Prevention'
        ]
      }
    ],
    oems: ['Cisco', 'HPE Aruba', 'Dell Technologies', 'MicroTik', 'TP-Link Omada', 'Fortinet', 'Schneider / APC'],
    partnerIds: ['cisco', 'aruba', 'dell'],
    deploymentDomains: ['Corporate HQ Offices', 'Defense & Aerospace Labs', 'Banking Data Centers', 'Educational Campuses']
  },
  {
    id: 'av-infrastructure',
    title: 'Audio-Visual (AV) Infrastructure & Solutions',
    shortDesc: 'State-of-the-art boardroom automation, interactive flat panels, video walls, digital signage, and smart classroom setups.',
    icon: Tv,
    badge: 'Visual Experience',
    bannerBg: 'from-purple-900 via-violet-900 to-slate-900',
    highlights: [
      'Executive Boardroom & Conference Room AV Automation',
      'High-Resolution Interactive Flat Panels (IFPD)',
      'Fine-Pitch LED & Ultra-Narrow Bezel LCD Video Walls',
      'Digital Signage Networks & Content Controllers',
      'Professional Audio DSP, Beamforming Mics & Speakers'
    ],
    keyOfferings: [
      {
        title: 'Smart Boardrooms & Meeting Spaces',
        description: 'Seamless touch-control automation integrating lighting, displays, audio, and conferencing.',
        details: [
          'One-Touch Wireless Screen Mirroring & Presentation',
          'Acoustic Echo Cancellation (AEC) Audio DSPs',
          'Ceiling-Array Beamforming Microphones',
          'Motorized Screen Mounts & Table Cable Cubbies'
        ]
      },
      {
        title: 'Video Walls & High-Impact Displays',
        description: 'High-brightness video visual displays designed for command centers, lobbies, and auditoriums.',
        details: [
          'Seamless Direct-View Fine-Pitch LED Displays',
          '4K Ultra HD Commercial Signage Monitors',
          'Multi-Window Video Wall Processors & Controllers',
          'Centralized Cloud Digital Signage Content Management'
        ]
      },
      {
        title: 'Smart Classrooms & Auditorium AV',
        description: 'Engaging interactive tools and high-volume sound amplification for modern education and halls.',
        details: [
          'Interactive Touch Displays with Whiteboard Software',
          'Short-Throw Laser Projectors & Motorized Screens',
          'Auditorium Line-Array Speakers & Digital Mixers',
          'Podium AV Control Consoles & Lecture Capture'
        ]
      }
    ],
    oems: ['Poly', 'Logitech', 'Samsung', 'LG Commercial', 'Epson', 'Crestron', 'Kramer', 'Bose Professional'],
    partnerIds: ['poly', 'epson'],
    deploymentDomains: ['Executive Boardrooms', 'Command & Control Rooms', 'University Auditoriums', 'Training Institutes']
  },
  {
    id: 'voice-telephony',
    title: 'IP Telephony, Voice & Unified Collaboration (UCC)',
    shortDesc: 'Enterprise IP PBX systems, cloud telephony, Microsoft Teams / Zoom Room integrations, and hybrid workspace endpoints.',
    icon: PhoneCall,
    badge: 'Unified Communications',
    bannerBg: 'from-cyan-900 via-teal-900 to-slate-900',
    highlights: [
      'Enterprise On-Premise IP PBX & Cloud Telephony',
      'Microsoft Teams & Zoom Rooms Hardware Integration',
      'SIP Executive Desk Phones, Video Phones & DECT Handsets',
      'Multi-Party Audio & Video Teleconferencing Gateways',
      'Interactive Voice Response (IVR) & Contact Center Solutions'
    ],
    keyOfferings: [
      {
        title: 'Enterprise IP Telephony Systems',
        description: 'Rich voice features connecting multi-branch organizations with crystal-clear audio routing.',
        details: [
          'IP PBX Hardware Gateways & SIP Trunking',
          'Multi-Level Auto-Attendant & IVR Routing',
          'Voicemail-to-Email & Mobile Softphone Extensions',
          'Call Recording, Analytics & CDR Reporting'
        ]
      },
      {
        title: 'Unified Video Collaboration Rooms',
        description: 'Turnkey Video Conferencing room kits certified for Microsoft Teams, Zoom, and Cisco Webex.',
        details: [
          'All-in-One Video Bars with AI Auto-Framing',
          'Touch Controller Consoles for Instant Join',
          'PTZ Optical Zoom Cameras for Large Spaces',
          'BYOD (Bring Your Own Device) Wireless AV Pass-Through'
        ]
      },
      {
        title: 'Contact Center & Intercom Solutions',
        description: 'Scalable customer support voice infrastructure and office intercom endpoints.',
        details: [
          'Omnichannel Contact Center Agent Queues',
          'IP Video Door Phones & Access Intercoms',
          'Noise-Canceling Enterprise Headsets',
          'Emergency PA & Voice Broadcast Integration'
        ]
      }
    ],
    oems: ['Yealink', 'Grandstream', 'Poly', 'Cisco Webex', 'Avaya', 'Fanvil', 'Jabra'],
    partnerIds: ['yealink', 'grandstream', 'poly'],
    deploymentDomains: ['BPOs & Call Centers', 'Multi-Branch Enterprises', 'Government Offices', 'Healthcare Facilities']
  },
  {
    id: 'ip-surveillance',
    title: 'IP Surveillance & Integrated Security Solutions',
    shortDesc: '4K AI-powered IP CCTV surveillance, thermal imaging, biometric access control, time-attendance, and perimeter protection.',
    icon: ShieldCheck,
    badge: 'Security & Surveillance',
    bannerBg: 'from-slate-900 via-rose-950 to-slate-950',
    highlights: [
      '4K Ultra HD AI IP Cameras with Night Color Vision',
      'AI Video Analytics: ANPR (License Plate), Face ID & Intrusion',
      'Biometric Access Control (Face Recognition, Fingerprint, RFID)',
      'Enterprise Central VMS & Redundant NVR Storage',
      'Perimeter Security, Tripwire Alarms & Gate Automation'
    ],
    keyOfferings: [
      {
        title: 'AI-Powered IP CCTV Surveillance',
        description: 'Smart surveillance systems engineered for 24/7 high-clarity monitoring and automated threat detection.',
        details: [
          'Dome, Bullet, PTZ & Panoramic Fisheye IP Cameras',
          'Deep Learning Video Analytics & Perimeter Guarding',
          'Automated License Plate Recognition (ANPR)',
          'Thermal Surveillance & Heat Mapping Cameras'
        ]
      },
      {
        title: 'Biometric Access Control & Attendance',
        description: 'Strict identity verification and automated attendance tracking integrated with HR management systems.',
        details: [
          'Touchless Face Recognition & Mask Detection Terminals',
          'Fingerprint & RFID Smart Card Controllers',
          'Multi-Door Electro-Magnetic Lock Integration',
          'Cloud Sync Payroll & Leave Attendance Software'
        ]
      },
      {
        title: 'Intrusion Alarm & Gate Automation',
        description: 'Comprehensive perimeter defense safeguarding facilities against unauthorized access.',
        details: [
          'Infrared Beam Perimeter Intrusion Detection',
          'Automatic Boom Barriers & Flap Barrier Turnstiles',
          'Centralized Alarm Monitoring Panels',
          'Mobile Alert Notifications & Siren Triggers'
        ]
      }
    ],
    oems: ['Hikvision', 'Dahua', 'Honeywell', 'CP Plus', 'Matrix Comsec', 'ZKTeco', 'Bosch'],
    partnerIds: ['hikvision', 'dahua', 'honeywell'],
    deploymentDomains: ['High-Security Govt Facilities', 'Gated Communities', 'Manufacturing Plants', 'Retail Chains']
  },
  {
    id: 'print-solutions',
    title: 'Commercial Print Solutions & Managed Print Services (MPS)',
    shortDesc: 'Multifunction photocopiers (MFP), Managed Print Services, commercial laser printers, and toner consumable management.',
    icon: Printer,
    badge: 'Enterprise Print',
    bannerBg: 'from-amber-950 via-yellow-950 to-slate-950',
    highlights: [
      'High-Speed Color & Monochrome A3/A4 Multifunction Photocopiers',
      'Managed Print Services (MPS) with Pay-Per-Page Billing',
      'Heavy-Duty Commercial Laser Printers & Production Machines',
      'Currency & Note-Counting Machines with Fake Note Detection',
      'Original OEM Toner Cartridges & Doorstep Replenishment'
    ],
    keyOfferings: [
      {
        title: 'Multifunction Photocopiers (MFP)',
        description: 'Enterprise networked digital copiers delivering high-volume duplex printing, scanning, and secure PIN release.',
        details: [
          'A3/A4 Heavy-Duty Workgroup Copiers',
          'Touchscreen Android-Based Smart User Interface',
          'Cloud & Mobile Printing (AirPrint, Mopria)',
          'Secure Card-Authentication & Pull-Printing'
        ]
      },
      {
        title: 'Managed Print Services (MPS)',
        description: 'Cost-reduction print management software and proactive toner maintenance contracts.',
        details: [
          'Pay-Per-Page (Cost-per-Copy) Model',
          'Automated Fleet Monitoring & Toner Alerts',
          'User Quota Allocation & Department Billing',
          'Preventive Maintenance & Dedicated Technician'
        ]
      },
      {
        title: 'Copier Rental & Leasing',
        description: 'Zero upfront capital investment rental schemes tailored for offices, banks, and institutions.',
        details: [
          'Flexible Monthly / Yearly Lease Agreements',
          'Free Maintenance, Spares & Toner Replacement',
          'Same-Day Breakdown Service & Standby Units',
          'Upgrade Paths to Latest High-Speed Models'
        ]
      }
    ],
    oems: ['Canon', 'Xerox', 'Konica Minolta', 'Epson', 'HP Commercial Print'],
    partnerIds: ['canon', 'xerox', 'konica', 'epson'],
    deploymentDomains: ['Banks & Financial Institutions', 'Government Departments', 'CA & Law Firms', 'Educational Campuses']
  },
  {
    id: 'system-integration',
    title: 'End-to-End System Integration',
    shortDesc: 'Unifying multi-vendor IT, AV, Telephony, and Security hardware into a single, cohesive, high-performance ecosystem.',
    icon: Cpu,
    badge: 'Turnkey Integration',
    bannerBg: 'from-emerald-950 via-teal-900 to-slate-950',
    highlights: [
      'Turnkey Multi-Vendor Technology Stack Convergence',
      'Unified Monitoring & Central Management Dashboards',
      'Legacy System Upgrades & Seamless Migration Paths',
      'Custom API & Middleware Data Interoperability',
      'Comprehensive Engineering Documentation & Handover'
    ],
    keyOfferings: [
      {
        title: 'Cross-Domain Technology Convergence',
        description: 'Connecting disparate IT, AV, security, and telecommunication hardware into a single operational interface.',
        details: [
          'AV-over-IP Signal Routing Across LAN Networks',
          'Security VMS & Access Control Unified Dashboards',
          'VoIP & PA System Emergency Interoperability',
          'IoT Sensor Integration for Smart Infrastructure'
        ]
      },
      {
        title: 'Turnkey Project Management',
        description: 'End-to-end execution from initial site assessment to final commissioning and staff training.',
        details: [
          'Dedicated Solution Architects & Project Managers',
          'OEM Staging, Firmware Calibration & Pre-Testing',
          'On-Time Deployment adhering to ISO/SLA standards',
          'Complete As-Built Drawings & Operating Manuals'
        ]
      }
    ],
    oems: ['Multi-Vendor Ecosystem Integrations across Cisco, Poly, Hikvision, Dell, HP & Honeywell'],
    partnerIds: ['cisco', 'aruba', 'dell', 'poly', 'hikvision', 'honeywell'],
    deploymentDomains: ['Smart Campus Projects', 'Government Institutions', 'Enterprise HQs', 'Infrastructure Hubs']
  },
  {
    id: 'implementation-support',
    title: 'Implementation Support & SLA Managed AMC',
    shortDesc: 'Expert deployment support, resident engineers, 24/7 SLA-backed AMC contracts, and rapid emergency dispatch.',
    icon: Wrench,
    badge: 'Lifecycle Support',
    bannerBg: 'from-amber-950 via-slate-900 to-zinc-900',
    highlights: [
      'Comprehensive & Non-Comprehensive AMC Contracts',
      'Guaranteed SLA Response Times with Emergency On-Site Support',
      'Dedicated Resident Engineers for On-Premise Management',
      'Preventive Maintenance Audits & Firmware Upgrades',
      'Buffer Stock Management & Rapid Spare Replacement'
    ],
    keyOfferings: [
      {
        title: 'SLA-Driven Annual Maintenance Contracts (AMC)',
        description: 'Proactive equipment upkeep protecting client technology investments and guaranteeing uptime.',
        details: [
          'Customizable Tier 1, Tier 2, and Tier 3 Support SLAs',
          'Comprehensive AMC (Hardware Repair + Spare Parts)',
          'Non-Comprehensive AMC (Labor + Preventive Service)',
          'Quarterly Health Checks & Performance Tuning'
        ]
      },
      {
        title: 'Managed Field & Resident Engineers',
        description: 'Skilled certified IT & AV personnel stationed at your facility for continuous operational assurance.',
        details: [
          'Dedicated On-Site Technicians for Daily Maintenance',
          '24/7 Technical Helpdesk & Remote Diagnostics',
          'Emergency Standby Hardware & Loaner Units',
          'Detailed Service Level Reports & Log Insights'
        ]
      }
    ],
    oems: ['All Major OEM Partners (HP, Dell, Canon, Epson, Xerox, Cisco, Yealink, Hikvision)'],
    partnerIds: ['dell', 'canon', 'epson', 'xerox', 'konica', 'yealink', 'hikvision'],
    deploymentDomains: ['Defense Facilities (DRDO)', 'Banks & NABARD', 'Government Departments', 'Software Companies']
  }
];

const oemPartners = [
  { id: 'cisco', name: 'Cisco Systems', category: 'Networking & Telephony', image: ciscoLogo },
  { id: 'aruba', name: 'HPE Aruba', category: 'Enterprise Wi-Fi & Switching', image: arubaLogo },
  { id: 'dell', name: 'Dell Technologies', category: 'Servers, Storage & Workstations', image: dellLogo },
  { id: 'poly', name: 'Poly (HP)', category: 'Video Conferencing & Headsets', image: polyLogo },
  { id: 'yealink', name: 'Yealink', category: 'IP Phones & Zoom/Teams Rooms', image: yealinkLogo },
  { id: 'grandstream', name: 'Grandstream', category: 'IP PBX & VoIP Solutions', image: grandstreamLogo },
  { id: 'hikvision', name: 'Hikvision', category: 'AI IP CCTV & Security', image: hikvisionLogo },
  { id: 'dahua', name: 'Dahua Technology', category: '4K CCTV & Video Analytics', image: dahuaLogo },
  { id: 'honeywell', name: 'Honeywell', category: 'Security & Access Control', image: honeywellLogo },
  { id: 'canon', name: 'Canon', category: 'Photocopiers & Commercial Print', image: canonLogo },
  { id: 'epson', name: 'Epson', category: 'Laser Projectors & Printers', image: epsonLogo },
  { id: 'xerox', name: 'Xerox', category: 'Enterprise MFP & Production', image: xeroxLogo },
  { id: 'konica', name: 'Konica Minolta', category: 'Digital Printing & Scanning', image: konicaLogo }
];

const EnterpriseSolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('it-infrastructure');
  const [rfqOrg, setRfqOrg] = useState('');
  const [rfqPhone, setRfqPhone] = useState('');
  const [rfqEmail, setRfqEmail] = useState('');
  const [rfqRequirement, setRfqRequirement] = useState('it-networking');
  const [rfqScope, setRfqScope] = useState('');
  const location = useLocation();

  const handleRfqWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "919573376389";
    const textMessage = `*SYSTEM INTEGRATION PROPOSAL REQUEST - ALEKHYA TECHNOLOGIES*
---------------------------------------
🏢 *Organization / Contact:* ${rfqOrg || 'Not provided'}
📱 *Phone Number:* ${rfqPhone}
📧 *Work Email:* ${rfqEmail}
⚙️ *Primary Requirement:* ${rfqRequirement}
📝 *Project Scope Brief:* ${rfqScope || 'N/A'}
---------------------------------------`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveTab(targetId);
      }
    }
  }, [location]);

  const activeCategory = enterpriseCategories.find((c) => c.id === activeTab) || enterpriseCategories[0];
  const activePartners = oemPartners.filter((partner) => activeCategory.partnerIds.includes(partner.id));

  return (
    <div className="min-h-screen bg-transparent text-slate-100 overflow-hidden">
      {/* Background Effect */}
      <ParticlesBackground />

      {/* Hero Header Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <Fade direction="down" triggerOnce>
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Enterprise Technology Integration & Infrastructure</span>
            </div>
          </Fade>

          <Fade direction="up" delay={100} triggerOnce>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
              End-to-End Enterprise <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                IT, AV, Telephony, Print & Security Solutions
              </span>
            </h1>
          </Fade>

          <Fade direction="up" delay={200} triggerOnce>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
              Alekhya Technologies architects, builds, and maintains robust digital ecosystems. From high-density IT networks and AV boardroom automation to IP telephony, 4K security, print solutions, and SLA-backed AMC support—we deliver turn-key integration engineered for enterprise scale.
            </p>
          </Fade>

          <Fade direction="up" delay={300} triggerOnce>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <GradientButton asChild className="text-base px-6 py-3">
                <a href="#quote-form" className="flex items-center space-x-2">
                  <span>Request Technical Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </GradientButton>

              <a
                href="#oem-ecosystem"
                className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3 rounded-lg font-semibold border border-slate-700 transition-colors"
              >
                <Award className="w-4 h-4 text-blue-400" />
                <span>Explore OEM Partners</span>
              </a>
            </div>
          </Fade>

          {/* Quick Metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-10">
            <div>
              <div className="text-3xl font-extrabold text-blue-400">15+</div>
              <div className="text-sm text-slate-400 mt-1">Years Industry Expertise</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-indigo-400">500+</div>
              <div className="text-sm text-slate-400 mt-1">Enterprise & Govt Deployments</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-purple-400">100%</div>
              <div className="text-sm text-slate-400 mt-1">SLA Contract Compliance</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-emerald-400">24/7</div>
              <div className="text-sm text-slate-400 mt-1">Managed Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Category Navigation Tabs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Our Core Practice Verticals</h2>
          <p className="text-slate-400 text-sm sm:text-base">Select a domain to inspect detailed solutions, OEM architectures, and deployment capabilities.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-12">
          {enterpriseCategories.map((cat) => {
            const IconComp = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  const el = document.getElementById(cat.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-300 ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/20 scale-105'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <IconComp className={`w-7 h-7 mb-2 ${isSelected ? 'text-blue-400' : 'text-slate-400'}`} />
                <span className="text-xs font-semibold line-clamp-2">{cat.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Vertical Detail Section */}
        <div id={activeCategory.id} className="scroll-mt-24">
          <div className={`rounded-3xl p-8 sm:p-12 bg-gradient-to-br ${activeCategory.bannerBg} border border-slate-700/60 shadow-2xl relative overflow-hidden mb-16`}>
            {/* Category Banner Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10 border-b border-slate-700/60 pb-8">
              <div>
                <div className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 border border-blue-400/30">
                  {activeCategory.badge}
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 flex items-center gap-3">
                  <activeCategory.icon className="w-9 h-9 text-blue-400" />
                  <span>{activeCategory.title}</span>
                </h2>
                <p className="text-slate-300 text-lg max-w-3xl">{activeCategory.shortDesc}</p>
              </div>

              <div className="flex-shrink-0">
                <GradientButton asChild className="px-5 py-2.5 text-sm">
                  <a href="#quote-form" className="flex items-center space-x-2">
                    <span>Consult Architect</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </GradientButton>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Key Capabilities & Architecture Highlights</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCategory.highlights.map((hl, i) => (
                  <div key={i} className="bg-slate-900/70 border border-slate-800 p-4 rounded-xl flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-slate-200 font-medium">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Offering Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {activeCategory.keyOfferings.map((offering, idx) => (
                <div key={idx} className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{offering.title}</h4>
                    <p className="text-sm text-slate-400 mb-4">{offering.description}</p>
                    <ul className="space-y-2 mb-6">
                      {offering.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-xs text-slate-300 flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Row: OEMs & Deployments */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-700/60">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-3">Featured Technology Alliances</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
                  {activePartners.map((partner) => (
                    <div key={partner.id} className="h-16 bg-white rounded-md p-2 flex items-center justify-center" title={partner.name}>
                      <img src={partner.image} alt={`${partner.name} logo`} className="max-h-full max-w-full object-contain" />
                    </div>
                  ))}
                </div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block mb-2">Additional Compatible OEMs</span>
                <div className="flex flex-wrap gap-2">
                  {activeCategory.oems.map((oem, oIdx) => (
                    <span key={oIdx} className="bg-slate-900 text-blue-300 border border-slate-700 text-xs px-3 py-1 rounded-md font-semibold">
                      {oem}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-2">Ideal Deployment Domains</span>
                <div className="flex flex-wrap gap-2">
                  {activeCategory.deploymentDomains.map((domain, dIdx) => (
                    <span key={dIdx} className="bg-slate-900 text-purple-300 border border-slate-700 text-xs px-3 py-1 rounded-md font-semibold">
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Strategic Ecosystem & Partnerships */}
      <section id="oem-ecosystem" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 px-4 py-1.5 rounded-full text-purple-400 text-sm font-semibold mb-4">
              <Award className="w-4 h-4" />
              <span>Technology Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Strategic OEM & Technology Alliances</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base">
              We partner with global technology pioneers to deliver certified, enterprise-grade hardware, warranties, and direct implementation support.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {oemPartners.map((oem) => (
              <div
                key={oem.id}
                className="bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 p-4 rounded-xl flex flex-col items-center justify-center text-center group transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <div className="w-full h-16 bg-white rounded-md p-2 flex items-center justify-center mb-3">
                  <img src={oem.image} alt={`${oem.name} logo`} className="max-h-full max-w-full object-contain" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{oem.name}</h4>
                <p className="text-[10px] text-slate-400 leading-tight">{oem.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Engineering Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Our Turnkey Implementation Lifecycle</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Structured methodologies guaranteeing zero project friction, rigorous testing, and seamless operational handover.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { step: '01', title: 'Site Assessment', desc: 'Detailed physical audit, bandwidth analysis, and requirement scoping.' },
            { step: '02', title: 'Architecture Design', desc: 'Custom network topology, BOQ preparation, and OEM selection.' },
            { step: '03', title: 'OEM Staging', desc: 'Procurement, pre-configuration, firmware updates, and burn-in testing.' },
            { step: '04', title: 'Deployment & QC', desc: 'Professional cabling, rack mounting, IP configuration, and safety QA.' },
            { step: '05', title: 'Commissioning & AMC', desc: 'Handover, admin training, documentation, and SLA support kickoff.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl relative backdrop-blur-sm">
              <div className="text-4xl font-black text-blue-500/20 mb-4">{item.step}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & RFQ Form Section */}
      <section id="quote-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-5xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded-full text-blue-400 text-xs font-semibold mb-4">
                <Headphones className="w-3.5 h-3.5" />
                <span>Enterprise Technical Consultation</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-4">Request a Customized System Integration Proposal</h2>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Connect directly with our senior solution architects for on-site surveys, BOQ estimates, and SLA AMC contracts tailored to your facility.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Free Initial Site Assessment & BOQ Audit</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Direct OEM Partner Warranties & Support</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>24-Hour Rapid Response SLA Guarantee</span>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleRfqWhatsApp}>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Organization / Contact Person *</label>
                <input
                  type="text"
                  required
                  value={rfqOrg}
                  onChange={(e) => setRfqOrg(e.target.value)}
                  placeholder="e.g. Acme Corp / Admin Officer"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-400 cursor-text hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={rfqPhone}
                    onChange={(e) => setRfqPhone(e.target.value)}
                    placeholder="+91 95733 76389"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={rfqEmail}
                    onChange={(e) => setRfqEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Solution Requirement *</label>
                <select
                  value={rfqRequirement}
                  onChange={(e) => setRfqRequirement(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                >
                  <option value="IT Infrastructure & Enterprise Networking">IT Infrastructure & Enterprise Networking</option>
                  <option value="Audio-Visual (AV) Boardroom Automation">Audio-Visual (AV) Boardroom Automation</option>
                  <option value="IP Telephony & Unified Communications (UCC)">IP Telephony & Unified Communications (UCC)</option>
                  <option value="IP CCTV Surveillance & Access Control">IP CCTV Surveillance & Access Control</option>
                  <option value="End-to-End System Integration">End-to-End System Integration</option>
                  <option value="SLA Managed AMC Support Contract">SLA Managed AMC Support Contract</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Project Details / Scope Brief</label>
                <textarea
                  rows={3}
                  value={rfqScope}
                  onChange={(e) => setRfqScope(e.target.value)}
                  placeholder="Describe your site locations, user count, or desired technology stack..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-emerald-950/50"
              >
                <span>Submit Request via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseSolutions;
