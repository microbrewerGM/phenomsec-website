import Link from "next/link";
import ContactForm from "./components/ContactForm";
import MobileMenu from "./components/MobileMenu";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-white">
                <span className="text-cyan-400">Phenom</span>
                <span className="text-slate-300">Security</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors">Services</Link>
              <Link href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">About</Link>
              <Link href="/blog" className="text-slate-300 hover:text-cyan-400 transition-colors">Blog</Link>
              <Link href="#contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition-colors">Contact</Link>
            </div>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise Cybersecurity
              <span className="block text-cyan-400">Excellence</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Diverse US-based expertise delivering cutting-edge security solutions for Fortune 500 enterprises.
              Research-driven. Compliance-focused. Future-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
              <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-cyan-400">500+</div>
                <div className="text-slate-300">Enterprise Clients</div>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                <div className="text-slate-300">Uptime SLA</div>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-cyan-400">24/7</div>
                <div className="text-slate-300">US-Based Support</div>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-cyan-400">ISO</div>
                <div className="text-slate-300">27001 Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Enterprise Security Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed for large-scale enterprise environments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors">
              <div className="text-cyan-400 text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-4">Risk Assessment & Compliance</h3>
              <p className="text-slate-300 mb-4">
                Comprehensive security audits, compliance frameworks (SOC 2, HIPAA, PCI DSS), and risk mitigation strategies
              </p>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold">Learn More →</Link>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors">
              <div className="text-cyan-400 text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">Incident Response & Recovery</h3>
              <p className="text-slate-300 mb-4">
                24/7 threat monitoring, rapid incident response, and business continuity planning for enterprise environments
              </p>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold">Learn More →</Link>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors">
              <div className="text-cyan-400 text-3xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-4">Security Architecture</h3>
              <p className="text-slate-300 mb-4">
                Zero-trust implementation, cloud security architecture, and enterprise-grade security infrastructure design
              </p>
              <Link href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Diversity Showcase */}
      <section id="about" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Diverse Excellence, US-Based Expertise</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our team represents the full spectrum of American talent, bringing varied perspectives and deep expertise to every engagement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Diversity Drives Security Excellence</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span><strong className="text-white">Varied Threat Perspectives:</strong> Different backgrounds reveal blind spots in security approaches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span><strong className="text-white">Cultural Competency:</strong> Understanding diverse user behaviors and attack vectors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span><strong className="text-white">Innovation Through Inclusion:</strong> Diverse teams create more robust security solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span><strong className="text-white">US-Based Reliability:</strong> Time zone alignment and cultural understanding for seamless collaboration</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">🌟</div>
                <div className="text-cyan-400 font-bold">50+</div>
                <div className="text-slate-300 text-sm">Security Experts</div>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-cyan-400 font-bold">25+</div>
                <div className="text-slate-300 text-sm">US States Represented</div>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-cyan-400 font-bold">15+</div>
                <div className="text-slate-300 text-sm">Years Average Experience</div>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-2">📚</div>
                <div className="text-cyan-400 font-bold">100+</div>
                <div className="text-slate-300 text-sm">Industry Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights/Blog Preview */}
      <section id="insights" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Latest Security Insights</h2>
            <p className="text-xl text-slate-300 mb-6">Stay ahead with our research-driven perspectives on cybersecurity and enterprise security architecture</p>
            <Link href="/blog" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition-colors">
              View All Blog Posts
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                  Application Security
                </span>
                <div className="text-cyan-400 text-sm font-semibold">MARCH 21, 2025</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                <Link href="/blog/factorial-separation-duties">
                  Factorial Separation of Duties for Modern AppSec Compliance
                </Link>
              </h3>
              <p className="text-slate-300 mb-4">
                Exploring how breaking down high-risk activities into manageable components enhances security and efficiency in modern application development pipelines.
              </p>
              <div className="flex items-center justify-between">
                <Link href="/blog/factorial-separation-duties" className="text-cyan-400 hover:text-cyan-300 font-semibold">Read More →</Link>
                <span className="text-slate-400 text-sm">8 min read</span>
              </div>
            </article>
            <article className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                  Security Frameworks
                </span>
                <div className="text-cyan-400 text-sm font-semibold">APRIL 3, 2025</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                <Link href="/blog/calculus-crossroads-policy-pyramid">
                  The Calculus Crossroads of Policy Pyramid
                </Link>
              </h3>
              <p className="text-slate-300 mb-4">
                An unconventional approach to understanding and managing information security frameworks by drawing parallels with mathematical concepts.
              </p>
              <div className="flex items-center justify-between">
                <Link href="/blog/calculus-crossroads-policy-pyramid" className="text-cyan-400 hover:text-cyan-300 font-semibold">Read More →</Link>
                <span className="text-slate-400 text-sm">12 min read</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

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
              <Link href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Services</Link>
              <Link href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">About</Link>
              <Link href="/blog" className="text-slate-400 hover:text-cyan-400 transition-colors">Blog</Link>
              <Link href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</Link>
              <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy</Link>
            </div>
            <div className="text-slate-500 text-sm">
              © 2024 Phenom Security Group. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
