import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import './HorizontalParallax.css';

export interface ParallaxCardItem {
  tag: string;
  label: string;
  desc?: string;
  badge?: string;
  link: string;
}

export interface HorizontalParallaxProps {
  rows?: ParallaxCardItem[][];
  title?: string;
  subtitle?: string;
  badge?: string;
}

// Default curated products across Alekhya Technologies' domain portfolio with direct links
const defaultAlekhyaProducts: ParallaxCardItem[][] = [
  // Row 1: Surveillance, Access Control & Core IT Infrastructure
  [
    {
      tag: 'CCTV // 4K AI',
      label: 'Hikvision 4K AI ColorVu Cameras',
      desc: 'Human & vehicle target classification with 24/7 vivid night color.',
      badge: 'Surveillance',
      link: '/solutions/secured-surveillance',
    },
    {
      tag: 'ACCESS CONTROL',
      label: 'Face Recognition & Touchless Biometrics',
      desc: 'Enterprise multi-door biometric access control with cloud HR sync.',
      badge: 'Security',
      link: '/services',
    },
    {
      tag: 'NETWORK // L3',
      label: 'Cisco Catalyst Gigabit Managed Switches',
      desc: 'High-density multi-gigabit campus switching & VLAN security.',
      badge: 'Core Network',
      link: '/solutions/secured-it-infrastructure',
    },
    {
      tag: 'PTZ SURVEILLANCE',
      label: 'Dahua DeepinView Smart PTZ Cameras',
      desc: '32x optical zoom with AI perimeter protection & auto-tracking.',
      badge: 'AI Vision',
      link: '/solutions/secured-surveillance',
    },
    {
      tag: 'FIREWALL // SD-WAN',
      label: 'Fortinet & SonicWall Enterprise NGFW',
      desc: 'Next-Gen network threat prevention, UTM filtering & zero-trust VPN.',
      badge: 'Cybersecurity',
      link: '/solutions/secured-it-infrastructure',
    },
    {
      tag: 'PERIMETER',
      label: 'Automated Boom Barriers & Flap Turnstiles',
      desc: 'Heavy-duty vehicle barrier gates and RFID pedestrian access.',
      badge: 'Automation',
      link: '/solutions/secured-surveillance',
    },
    {
      tag: 'STORAGE // VMS',
      label: 'Honeywell Enterprise 64-Ch NVR & VMS',
      desc: 'Redundant RAID storage with central video management analytics.',
      badge: 'High Capacity',
      link: '/solutions/secured-surveillance',
    },
  ],

  // Row 2: Laptops, Desktops, Servers & Workstations
  [
    {
      tag: 'LAPTOP // REFURB',
      label: 'Lenovo ThinkPad T480 / T490 Series',
      desc: 'Intel Core i5/i7 | 16GB RAM | 512GB NVMe SSD | A-Grade Mint.',
      badge: 'Best Seller',
      link: '/refurbished-laptops',
    },
    {
      tag: 'ENTERPRISE PC',
      label: 'Dell Latitude 5400 / 7490 Commercial',
      desc: 'Durable magnesium chassis with 1-year warranty & high battery life.',
      badge: 'Corporate',
      link: '/refurbished-laptops',
    },
    {
      tag: 'ULTRABOOK',
      label: 'HP EliteBook 840 G5 / G6 Aluminum',
      desc: 'Slim aluminum body, Bang & Olufsen sound & FHD anti-glare display.',
      badge: 'Executive',
      link: '/refurbished-laptops',
    },
    {
      tag: 'APPLE // RETINA',
      label: 'Apple MacBook Air & Pro M1/Intel',
      desc: 'Retina TrueTone displays for developers, creatives & leadership.',
      badge: 'Premium',
      link: '/refurbished-laptops',
    },
    {
      tag: 'WORKSTATION',
      label: 'Dell Precision & HP Z-Workstations',
      desc: 'NVIDIA Quadro GPU power for 3D CAD, rendering & machine learning.',
      badge: 'Heavy Duty',
      link: '/pc-solutions',
    },
    {
      tag: 'SERVER // RACK',
      label: 'Dell PowerEdge & HPE ProLiant Servers',
      desc: 'Virtualization & database host servers with dual redundant power.',
      badge: 'Data Center',
      link: '/solutions/secured-it-infrastructure',
    },
    {
      tag: 'DESKTOP PC',
      label: 'Custom Intel/AMD Enterprise Desktops',
      desc: 'Tailored desktop PCs for universities, banks, and call centers.',
      badge: 'Custom Built',
      link: '/pc-solutions',
    },
  ],

  // Row 3: Pro AV, Unified Telephony, Printers & Copiers
  [
    {
      tag: 'PRO-AV // 4K',
      label: 'Poly Studio 4K Video Collaboration Bar',
      desc: 'AI acoustic fence & automatic speaker tracking for boardrooms.',
      badge: 'Smart AV',
      link: '/solutions/pro-av-smart-workplaces',
    },
    {
      tag: 'IP TELEPHONY',
      label: 'Grandstream Enterprise IP PBX Gateways',
      desc: 'Multi-party SIP trunking, interactive IVR & call center logging.',
      badge: 'Unified Voice',
      link: '/solutions/unified-collaboration',
    },
    {
      tag: 'COPIER // A3',
      label: 'Konica Minolta Bizhub Digital Production',
      desc: 'High-speed heavy duty duplex laser copier & network scanner.',
      badge: 'Heavy Duty',
      link: '/solutions/print-solutions',
    },
    {
      tag: 'SIP PHONES',
      label: 'Yealink Executive HD Video & Desk Phones',
      desc: 'Color touch display with dual Gigabit ports & Teams certification.',
      badge: 'VoIP',
      link: '/solutions/unified-collaboration',
    },
    {
      tag: 'PRINTER // MFP',
      label: 'Canon imageRUNNER Network Laser MFPs',
      desc: 'Secure printing, departmental accounting & cloud scan-to-email.',
      badge: 'Office Print',
      link: '/solutions/print-solutions',
    },
    {
      tag: 'IFPD DISPLAY',
      label: '65" / 75" / 86" 4K Interactive Flat Panels',
      desc: '20-point touch smart whiteboards with wireless screen casting.',
      badge: 'Interactive',
      link: '/solutions/pro-av-smart-workplaces',
    },
    {
      tag: 'CONTINUOUS INK',
      label: 'Epson EcoTank Commercial InkTank Printers',
      desc: 'Ultra low-cost high-volume continuous ink color printing.',
      badge: 'Eco Efficiency',
      link: '/solutions/print-solutions',
    },
    {
      tag: 'POWER // UPS',
      label: 'APC / Schneider Online Smart UPS Systems',
      desc: 'Zero-millisecond switchover pure sine wave power protection.',
      badge: 'Zero Downtime',
      link: '/solutions/secured-it-infrastructure',
    },
  ],
];

export default function HorizontalParallax({
  rows = defaultAlekhyaProducts,
  title = 'Comprehensive Technology & Product Showcase',
  subtitle = 'Explore the full spectrum of enterprise hardware, certified refurbished laptops, smart AV, network infrastructure, and surveillance solutions by Alekhya Technologies.',
  badge = 'Product & Solutions Ecosystem',
}: HorizontalParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track vertical scroll progress strictly through this section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth inclination to straight effect
  const rotate = useTransform(scrollYProgress, [0, 0.25], [-3.5, 0]);
  const skewX = useTransform(scrollYProgress, [0, 0.25], [-2, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25], [0.96, 1]);

  // Translate each row horizontally based on vertical scroll so EVERY card in the row passes through the viewport
  // Row 1: moves left from 0 to -1400px (or percentage)
  const translateRow1 = useTransform(scrollYProgress, [0, 1], ['0%', '-55%']);
  // Row 2: moves right from -55% to 0%
  const translateRow2 = useTransform(scrollYProgress, [0, 1], ['-52%', '0%']);
  // Row 3: moves left from 0% to -58%
  const translateRow3 = useTransform(scrollYProgress, [0, 1], ['0%', '-58%']);

  const translators = [translateRow1, translateRow2, translateRow3];

  return (
    <div className="hparallax-pin-wrapper" ref={containerRef}>
      <div className="hparallax-sticky">
        {/* Header Info */}
        <div className="hparallax__header">
          {badge && (
            <div className="hparallax__badge">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
          )}
          {title && <h2 className="hparallax__title">{title}</h2>}
          {subtitle && <p className="hparallax__subtitle">{subtitle}</p>}
        </div>

        {/* Animated Parallax Rows driven strictly by vertical scrolling */}
        <motion.div
          className="hparallax__inner"
          style={{
            rotate,
            skewX,
            scale,
            transformOrigin: 'left center',
          }}
        >
          {rows.map((row, i) => (
            <div className="hparallax__row-wrapper" key={i}>
              <motion.div
                className="hparallax__row"
                style={{ x: translators[i % translators.length] }}
              >
                {row.map((card, idx) => (
                  <Link
                    to={card.link}
                    key={`${card.label}-${idx}`}
                    className="hparallax__card group/card block no-underline"
                  >
                    <div>
                      <div className="hparallax__card-top">
                        <span className="designator mono">{card.tag}</span>
                        {card.badge && (
                          <span className="hparallax__card-badge mono">{card.badge}</span>
                        )}
                      </div>
                      <div className="hparallax__card-body mt-2.5">
                        <p className="hparallax__card-label group-hover/card:text-blue-400 transition-colors">
                          {card.label}
                        </p>
                        {card.desc && <p className="hparallax__card-desc">{card.desc}</p>}
                      </div>
                    </div>

                    <div className="hparallax__card-footer mono">
                      <span className="flex items-center text-blue-400 font-semibold group-hover/card:underline">
                        View Product Details
                        <ArrowRight className="w-3 h-3 ml-1 group-hover/card:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-slate-500">● Active Supply</span>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
