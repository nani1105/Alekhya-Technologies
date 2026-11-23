import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  schema?: Record<string, any>;
}

const SITE_URL = 'https://alekhyatechnologies.in';
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;
const DEFAULT_TITLE = "Alekhya Technologies | Enterprise System Integrator, IT AMC & CCTV Solutions in Hyderabad";
const DEFAULT_DESC = "Alekhya Technologies — Hyderabad's premier Enterprise System Integrator with 15+ years of excellence. Enterprise IT AMC contracts, 4K AI CCTV surveillance, PRO AV boardrooms, IP PBX telephony, certified refurbished laptops, networking & server infrastructure across HITEC City, Gachibowli, Madhapur, Secunderabad & Pan-India. Trusted by DRDO, NABARD & IMD.";
const DEFAULT_KEYWORDS = "Enterprise System Integrator Hyderabad, IT AMC Services Hyderabad, Computer AMC Hyderabad, CCTV installation Hyderabad, Refurbished Laptops Hyderabad, Photocopier machine rental Hyderabad, Structured Cabling Hyderabad, Smart Boardroom AV solutions Hyderabad, Biometric devices Hyderabad, Projector dealer Hyderabad";

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath,
  ogImage,
  schema,
}) => {
  const location = useLocation();
  const fullTitle = title 
    ? `${title} | Alekhya Technologies Hyderabad` 
    : DEFAULT_TITLE;
  const pageUrl = `${SITE_URL}${canonicalPath || location.pathname}`;
  const pageImage = ogImage || DEFAULT_OG_IMAGE;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Helper to set or update meta tag
    const setMetaTag = (nameAttr: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update Standard Meta
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);

    // 4. Update Open Graph Meta
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', pageUrl);
    setMetaTag('property', 'og:image', pageImage);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', 'Alekhya Technologies');
    setMetaTag('property', 'og:locale', 'en_IN');

    // 5. Update Twitter Meta
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', pageImage);

    // 6. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', pageUrl);

    // 7. Inject Page-specific Schema if provided
    let scriptTag: HTMLScriptElement | null = null;
    if (schema) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify(schema);
      scriptTag.id = 'page-jsonld-schema';
      // remove old page schema if any
      const existing = document.getElementById('page-jsonld-schema');
      if (existing) existing.remove();
      document.head.appendChild(scriptTag);
    }

    return () => {
      if (scriptTag) scriptTag.remove();
    };
  }, [fullTitle, description, keywords, pageUrl, pageImage, schema]);

  return null;
};

export default SEO;
