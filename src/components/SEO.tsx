import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  schema?: Record<string, any>;
}

const DEFAULT_TITLE = "Alekhya Technologies | Enterprise System Integrator, IT AMC & CCTV Solutions in Hyderabad";
const DEFAULT_DESC = "Alekhya Technologies is Hyderabad's premier Enterprise System Integrator with 15+ years of excellence. We provide Enterprise IT AMC contracts, 4K AI CCTV surveillance, PRO AV boardrooms, IP PBX telephony, certified refurbished laptops, networking & server rigging across HITEC City, Gachibowli, Madhapur, Secunderabad & Pan-India.";
const DEFAULT_KEYWORDS = "Enterprise System Integrator Hyderabad, IT AMC Services Hyderabad, Computer AMC Hyderabad, CCTV installation Hyderabad, Refurbished Laptops Hyderabad, Photocopier machine rental Hyderabad, Structured Cabling Hyderabad, Smart Boardroom AV solutions Hyderabad";

export const SEO: React.FC<SEOProps> = ({
  title,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  canonicalPath,
  schema,
}) => {
  const location = useLocation();
  const fullTitle = title 
    ? `${title} | Alekhya Technologies Hyderabad` 
    : DEFAULT_TITLE;

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
    setMetaTag('property', 'og:url', `https://alekhyatechnologies.com${canonicalPath || location.pathname}`);

    // 5. Update Twitter Meta
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);

    // 6. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://alekhyatechnologies.com${canonicalPath || location.pathname}`);

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
  }, [fullTitle, description, keywords, canonicalPath, location.pathname, schema]);

  return null;
};

export default SEO;
