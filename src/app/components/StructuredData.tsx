export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Phenom Security Group",
    "alternateName": "Phenom Security",
    "url": "https://phenomsec.com",
    "logo": "https://phenomsec.com/img/phenom-security-policy-pyramid.svg",
    "description": "Diverse US-based cybersecurity expertise delivering cutting-edge security solutions for Fortune 500 enterprises. Research-driven. Compliance-focused. Future-ready.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-766-3466",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": ["English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://phenomsec.com"
    ],
    "founder": {
      "@type": "Person",
      "name": "Phenom Security Phoenix"
    },
    "foundingDate": "2023",
    "numberOfEmployees": "50+",
    "industry": "Cybersecurity Services",
    "serviceArea": {
      "@type": "Country",
      "name": "United States"
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Phenom Security Group"
    },
    "serviceType": "Cybersecurity Consulting",
    "description": "Enterprise cybersecurity services including risk assessment, compliance, incident response, and security architecture.",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cybersecurity Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Risk Assessment & Compliance",
            "description": "Comprehensive security audits, compliance frameworks (SOC 2, HIPAA, PCI DSS), and risk mitigation strategies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Incident Response & Recovery",
            "description": "24/7 threat monitoring, rapid incident response, and business continuity planning for enterprise environments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Security Architecture",
            "description": "Zero-trust implementation, cloud security architecture, and enterprise-grade security infrastructure design"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData),
        }}
      />
    </>
  );
}