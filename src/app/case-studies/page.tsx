import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Security Case Studies - Proven Results",
  description: "Real-world cybersecurity success stories from Fortune 500 implementations. Anonymous case studies showcasing enterprise security transformations, compliance achievements, and risk reduction.",
  keywords: [
    "cybersecurity case studies",
    "enterprise security success",
    "Fortune 500 security",
    "DevSecOps implementation",
    "compliance transformation",
    "security architecture",
    "incident response",
    "risk reduction",
    "CISO consulting"
  ],
  openGraph: {
    title: "Enterprise Security Case Studies - Proven Results",
    description: "Real-world cybersecurity success stories from Fortune 500 implementations.",
    url: "https://phenomsec.com/case-studies",
    type: "website",
    images: [
      {
        url: "/img/phenom-security-case-studies.svg",
        width: 800,
        height: 500,
        alt: "Phenom Security Enterprise Case Studies"
      }
    ]
  }
};

const caseStudies = [
  {
    id: "automotive-supply-chain",
    title: "Global Automotive Supply Chain Security Transformation",
    industry: "Automotive/Manufacturing",
    challenge: "Security Assessment & DevSecOps Implementation",
    overview: "North America's leading vehicle wholesaler with 19 subdivisions needed comprehensive application security assessment and secure development operations.",
    metrics: [
      { label: "Subdivisions Secured", value: "19" },
      { label: "Development Teams", value: "50+" },
      { label: "Security Tools Integrated", value: "12+" },
      { label: "Time to Security Review", value: "90% Reduction" }
    ],
    outcomes: [
      "Established comprehensive Open Source Software security protections across all subdivisions",
      "Implemented automated CI/CD pipeline security tooling reducing manual review time by 90%",
      "Deployed enterprise-grade human and service Identity & Access Management controls",
      "Defined and operationalized Software Supply Chain security program with real-time monitoring"
    ],
    technologies: ["DevSecOps Pipelines", "OSS Security Scanning", "IAM Controls", "CI/CD Security"],
    duration: "12 months",
    tags: ["DevSecOps", "Supply Chain Security", "Automotive"]
  },
  {
    id: "global-intelligence-threat-program",
    title: "Global Intelligence Agency Threat Management Program",
    industry: "Government/Intelligence",
    challenge: "National Security Threat Intelligence & Real-time Response",
    overview: "International intelligence consortium required comprehensive threat intelligence program with real-time facial recognition and global threat response capabilities.",
    metrics: [
      { label: "Intelligence Agencies", value: "15+" },
      { label: "Global Threat Feeds", value: "100+" },
      { label: "Real-time Recognition Systems", value: "50+" },
      { label: "Threat Response Time", value: "85% Faster" }
    ],
    outcomes: [
      "Developed IoT technologies performing real-time facial recognition for global threat response",
      "Established secure information systems certification meeting NSA and DIA standards",
      "Created mobile virtual datacenters for Department of Defense disaster response",
      "Implemented comprehensive insider threat processes with automated behavioral analysis"
    ],
    technologies: ["IoT Threat Detection", "Facial Recognition", "Mobile Datacenters", "Behavioral Analytics"],
    duration: "24 months",
    tags: ["Intelligence", "Threat Response", "Government"]
  },
  {
    id: "fortune-50-retail-redteam",
    title: "Fortune 50 Retail Enterprise Red Team Operations",
    industry: "Retail/E-commerce",
    challenge: "Enterprise Red Team & Advanced Penetration Testing",
    overview: "Fortune 50 retail corporation needed comprehensive red team capabilities and covert penetration testing to validate security controls across global operations.",
    metrics: [
      { label: "Retail Locations Tested", value: "1,000+" },
      { label: "Critical Vulnerabilities Found", value: "25+" },
      { label: "Social Engineering Success Rate", value: "90%" },
      { label: "Security Maturity Improvement", value: "300%" }
    ],
    outcomes: [
      "Co-founded enterprise red team performing covert narrow-focus penetration testing",
      "Implemented comprehensive social engineering testing across all business units",
      "Developed automated security testing frameworks reducing manual effort by 80%",
      "Established enterprise-wide security architecture standards and best practices"
    ],
    technologies: ["Red Team Tools", "Social Engineering", "Penetration Testing", "Security Architecture"],
    duration: "18 months",
    tags: ["Red Team", "Penetration Testing", "Retail"]
  },
  {
    id: "multi-billion-pci-compliance",
    title: "Multi-Billion Dollar PCI Compliance Transformation",
    industry: "Retail/Financial Services",
    challenge: "PCI DSS Compliance & Risk Mitigation",
    overview: "Multi-billion dollar retail organization faced critical PCI compliance gaps with potential fines of $25,000 per month and $50,000 per incident.",
    metrics: [
      { label: "Compliance Gap Closure", value: "100%" },
      { label: "Potential Fine Avoidance", value: "$2M+ Annual" },
      { label: "Retail Locations", value: "33" },
      { label: "Payment Transactions Secured", value: "50M+ Annual" }
    ],
    outcomes: [
      "Led multi-million dollar PCI compliance project protecting company from significant risk",
      "Avoided potential regulatory fines of $25,000 per month for non-compliance",
      "Implemented comprehensive vulnerability management across all retail locations",
      "Established automated compliance monitoring and reporting systems"
    ],
    technologies: ["PCI DSS Controls", "Vulnerability Management", "Compliance Automation", "Risk Assessment"],
    duration: "14 months",
    tags: ["PCI Compliance", "Retail", "Risk Management"]
  },
  {
    id: "open-source-vendor-lockin-solution",
    title: "Enterprise Vendor Lock-in Elimination & Cost Optimization",
    industry: "Technology/Consulting",
    challenge: "Vendor Lock-in Elimination & Infrastructure Cost Reduction",
    overview: "Large enterprise faced significant vendor lock-in issues and needed open-source security framework to reduce dependencies and operational costs.",
    metrics: [
      { label: "Annual Cost Savings", value: "$1.5M+" },
      { label: "Vendor Dependencies Reduced", value: "60%" },
      { label: "Security Framework Components", value: "25+" },
      { label: "Implementation ROI", value: "400%" }
    ],
    outcomes: [
      "Designed open-source security framework on Red Hat eliminating vendor lock-in",
      "Achieved $1.5 million in annual cost savings through vendor consolidation",
      "Implemented automated firewall rule management removing human error",
      "Created repeatable, scalable workflows meeting government compliance guidelines"
    ],
    technologies: ["Red Hat Enterprise", "Open Source Security", "Automation Frameworks", "Cost Optimization"],
    duration: "10 months",
    tags: ["Cost Optimization", "Open Source", "Vendor Management"]
  },
  {
    id: "purple-team-methodology",
    title: "Enterprise Purple Team Methodology Development",
    industry: "Cybersecurity/Consulting",
    challenge: "Real-world Threat Scenario Testing & Purple Team Operations",
    overview: "Fortune 500 gaming organizations required comprehensive purple team methodology to address real-world threat scenarios and demonstrate actual risk exposure.",
    metrics: [
      { label: "Gaming Organizations", value: "10+" },
      { label: "Threat Scenarios Developed", value: "50+" },
      { label: "Purple Team Exercises", value: "100+" },
      { label: "Risk Reduction", value: "70%" }
    ],
    outcomes: [
      "Developed industry-leading purple team methodology for real-world threat scenarios",
      "Successfully directed red team actions demonstrating critical security gaps",
      "Created comprehensive threat actor behavior modeling and simulation",
      "Established global perimeter security assessment framework for Fortune 500 companies"
    ],
    technologies: ["Purple Team Tools", "Threat Modeling", "Risk Simulation", "Perimeter Security"],
    duration: "16 months",
    tags: ["Purple Team", "Threat Modeling", "Gaming Industry"]
  },
  {
    id: "global-restaurant-automation",
    title: "Global Manufacturing Automation Security Framework",
    industry: "Food Service/Manufacturing",
    challenge: "IoT & Manufacturing Security for Global Deployment",
    overview: "Fortune 500 global restaurant corporation required foundational security framework for transformative manufacturing automation initiative across 30,000+ locations.",
    metrics: [
      { label: "Global Locations", value: "30,000+" },
      { label: "IoT Devices Secured", value: "100,000+" },
      { label: "Threat Models Created", value: "25+" },
      { label: "Equipment Manufacturers Engaged", value: "15+" }
    ],
    outcomes: [
      "Developed comprehensive threat models for ICS, real-time video analysis, and AI/ML systems",
      "Established integrated and compensating security controls for manufacturing environments",
      "Created security requirements framework for equipment manufacturers",
      "Implemented global visibility platform for 30,000+ automated locations"
    ],
    technologies: ["Industrial Control Systems", "AI/ML Security", "IoT Security", "Real-time Analytics"],
    duration: "18 months",
    tags: ["Manufacturing Security", "IoT", "Global Deployment"]
  },
  {
    id: "financial-perimeter-rationalization",
    title: "Global Financial Services Security Infrastructure Consolidation",
    industry: "Financial Services",
    challenge: "Security Perimeter Rationalization & Cost Optimization",
    overview: "Fortune 500 financial services corporation needed to rationalize edge security and critical IT service protections across global operations.",
    metrics: [
      { label: "Security Platforms Evaluated", value: "15+" },
      { label: "TCO Reduction", value: "40%" },
      { label: "Global Data Centers", value: "25+" },
      { label: "Maintenance Renewal Savings", value: "$2.5M+" }
    ],
    outcomes: [
      "Consolidated multiple firewall platforms, reducing vendor count by 60%",
      "Unified TCO solution significantly reducing multi-year maintenance renewals",
      "Established global data center and hybrid-cloud secure platform",
      "Implemented comprehensive security stack including SIEM, CASB, and network forensics"
    ],
    technologies: ["Firewalls", "SIEM", "CASB", "Network Security", "Cloud Security"],
    duration: "14 months",
    tags: ["Cost Optimization", "Infrastructure", "Financial Services"]
  },
  {
    id: "healthcare-compliance-transformation",
    title: "Regional Healthcare Security Program Overhaul",
    industry: "Healthcare",
    challenge: "Compliance & Data Protection Transformation",
    overview: "Regional hospital and healthcare organization required comprehensive security program assessment and PHI/PII protection implementation.",
    metrics: [
      { label: "Healthcare Practitioners Secured", value: "2,500+" },
      { label: "Patient Records Protected", value: "500,000+" },
      { label: "Compliance Frameworks", value: "3" },
      { label: "Security Controls Implemented", value: "40+" }
    ],
    outcomes: [
      "Conducted comprehensive PHI, PII, and PCI DSS discovery across all systems",
      "Implemented tactical and strategic security initiatives for critical medical environments",
      "Established security controls protecting 500,000+ patient records",
      "Achieved compliance with HIPAA, PCI DSS, and state healthcare regulations"
    ],
    technologies: ["Data Discovery", "Encryption", "Access Controls", "Compliance Monitoring"],
    duration: "10 months",
    tags: ["Healthcare", "Compliance", "Data Protection"]
  },
  {
    id: "cloud-native-fintech",
    title: "Cloud-Native Financial Platform Security Architecture",
    industry: "Financial Technology",
    challenge: "Cloud Security & Identity Management for Global Operations",
    overview: "Global financial organization required comprehensive cloud IAM architecture and security controls for AWS and Azure environments.",
    metrics: [
      { label: "Cloud Accounts Secured", value: "100+" },
      { label: "User Identities Managed", value: "10,000+" },
      { label: "Applications Migrated", value: "200+" },
      { label: "Compliance Frameworks", value: "5" }
    ],
    outcomes: [
      "Architected cloud IAM using Ping, OKTA, Microsoft Entra ID, and AWS Identity Center",
      "Built secure, fully automated OS gold image factory for containers and VMs",
      "Implemented enterprise security architectures exceeding business objectives",
      "Achieved compliance across FFIEC, GLBA, HIPAA, ISO 27001, SOX, NCUA, and PCI"
    ],
    technologies: ["Cloud IAM", "Container Security", "Multi-Cloud", "Compliance Automation"],
    duration: "16 months",
    tags: ["Cloud Security", "Identity Management", "Financial Services"]
  },
  {
    id: "ai-ml-threat-modeling",
    title: "AI/ML Security Framework for Enterprise Automation",
    industry: "Technology/Consulting",
    challenge: "AI/ML Security & Threat Modeling for Business Process Automation",
    overview: "Enterprise consulting firm required comprehensive security framework for AI/ML and LLM implementations in business process automation.",
    metrics: [
      { label: "AI/ML Models Secured", value: "50+" },
      { label: "Business Processes Automated", value: "100+" },
      { label: "Threat Models Created", value: "30+" },
      { label: "Security Controls Implemented", value: "25+" }
    ],
    outcomes: [
      "Developed comprehensive ML, AI, and LLM threat models for enterprise deployment",
      "Created security architectures for GenAI technology stacks and business process automation",
      "Implemented automated security testing for AI/ML model pipelines",
      "Established governance framework for responsible AI deployment"
    ],
    technologies: ["AI/ML Security", "GenAI", "Threat Modeling", "Automated Testing"],
    duration: "8 months",
    tags: ["AI/ML Security", "Process Automation", "Governance"]
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-white">
                <Link href="/">
                  <span className="text-cyan-400">Phenom</span>
                  <span className="text-slate-300">Security</span>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#services" className="text-slate-300 hover:text-cyan-400 transition-colors">Services</Link>
              <Link href="/#about" className="text-slate-300 hover:text-cyan-400 transition-colors">About</Link>
              <Link href="/blog" className="text-slate-300 hover:text-cyan-400 transition-colors">Blog</Link>
              <Link href="/case-studies" className="text-cyan-400 font-semibold">Case Studies</Link>
              <Link href="/#contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Enterprise Security
              <span className="block text-cyan-400">Success Stories</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Real-world cybersecurity transformations from Fortune 500 enterprises. These anonymous case studies demonstrate proven methodologies, measurable outcomes, and enterprise-grade security implementations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#case-studies" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors text-center">
                View Case Studies
              </Link>
              <Link href="/#contact" className="border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-8 py-3 rounded-lg text-lg font-semibold transition-colors text-center">
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="case-studies" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <article key={study.id} className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                      {study.industry}
                    </span>
                    <span className="text-slate-400 text-sm">{study.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-slate-300 mb-6">
                    {study.overview}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-slate-700/50 p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-cyan-400">{metric.value}</div>
                        <div className="text-xs text-slate-300">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Outcomes */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Outcomes:</h4>
                    <ul className="space-y-2">
                      {study.outcomes.slice(0, 2).map((outcome, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-cyan-400 mr-2 mt-1">✓</span>
                          <span className="text-slate-300 text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {study.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Security Posture?</h2>
            <p className="text-xl text-slate-300 mb-8">
              These case studies represent real implementations with measurable outcomes. Let&apos;s discuss how we can achieve similar results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Schedule Consultation
              </Link>
              <Link href="/blog" className="border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Read Our Insights
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-cyan-400">Phenom</span>
              <span className="text-slate-300">Security</span>
            </div>
            <p className="text-slate-400 mb-8">
              Enterprise cybersecurity excellence through diverse US-based expertise
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <Link href="/#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Services</Link>
              <Link href="/#about" className="text-slate-400 hover:text-cyan-400 transition-colors">About</Link>
              <Link href="/blog" className="text-slate-400 hover:text-cyan-400 transition-colors">Blog</Link>
              <Link href="/case-studies" className="text-slate-400 hover:text-cyan-400 transition-colors">Case Studies</Link>
              <Link href="/#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
            <div className="text-slate-500 text-sm">
              © 2025 Phenom Security Group. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}