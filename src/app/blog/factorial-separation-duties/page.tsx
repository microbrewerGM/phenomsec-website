import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factorial Separation of Duties for Modern AppSec Compliance",
  description: "Exploring how breaking down high-risk activities into manageable components enhances security and efficiency in modern application development pipelines. A research-driven approach to DevSecOps security.",
  keywords: [
    "factorial separation of duties",
    "DevSecOps",
    "application security",
    "software security",
    "compliance",
    "risk management",
    "security automation",
    "development pipeline security",
    "FLOSS security",
    "code review",
    "security controls"
  ],
  authors: [{ name: "Aaron Smith" }],
  openGraph: {
    title: "Factorial Separation of Duties for Modern AppSec Compliance",
    description: "Exploring how breaking down high-risk activities into manageable components enhances security and efficiency in modern application development pipelines.",
    url: "https://phenomsec.com/blog/factorial-separation-duties",
    type: "article",
    publishedTime: "2023-03-21T00:00:00.000Z",
    authors: ["Aaron Smith"],
    section: "Application Security",
    tags: ["DevSecOps", "Application Security", "Compliance", "Risk Management"],
    images: [
      {
        url: "/img/fact-separation-mountain-image.svg",
        width: 800,
        height: 500,
        alt: "Software delivery journey visualization - building roads instead of climbing mountains"
      }
    ]
  },
  alternates: {
    canonical: "https://phenomsec.com/blog/factorial-separation-duties"
  }
};

export default function FactorialSeparationPost() {
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
              <Link href="/blog" className="text-cyan-400 font-semibold">Blog</Link>
              <Link href="/#contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Post Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center mb-6">
              ← Back to Blog
            </Link>
            <div className="text-cyan-400 text-sm font-semibold mb-2">MARCH 21, 2023</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Factorial Separation of Duties for Modern AppSec Compliance
            </h1>
            <div className="text-xl text-slate-300 mb-8">
              Exploring the concept of Factorial Separation of Duties (SoD) as a means to enhance security and efficiency in modern application development pipelines.
            </div>
            <div className="text-sm text-slate-400 mb-4">
              Author: Aaron Smith | Originally Posted: February 21, 2023
            </div>
          </div>

          <div className="prose prose-invert prose-slate max-w-none">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 text-slate-300">
              <h2 className="text-2xl font-bold text-white mb-4 mt-8">What&apos;s on the other side of the mountain?</h2>

              <div className="mb-6">
                <Image
                  src="/img/fact-separation-mountain-image.svg"
                  alt="Mountain climbing journey representing the path to reach customers through software delivery"
                  width={800}
                  height={500}
                  className="rounded-lg border border-slate-600 w-full h-auto"
                />
              </div>

              <p className="mb-6">
                The place where the customers and users of our software applications are; it&apos;s what&apos;s driving our organizations to climb over to the other side.
              </p>

              <p className="mb-6">
                Traditionally, climbing was the only way to cross a mountain pass. We form a plan because it&apos;s a risky endeavor. We pull together our supplies, wear our packs, familiarize ourselves with our guide, set up a meeting location, and then start our journey. The first target is base camp, the first of many waypoints and stoppages. If you enjoy mountain climbing or have read or watched content about it, this may sound familiar.
              </p>

              <p className="mb-6">
                With today&apos;s technology we can ride in a car instead of a risky climbing endeavor. So how do we, as technologists, help get the software to the other side of the mountain faster? I would say, build a road. Or better yet, use the roads that other technologists have built so that we do not have to build our own.
              </p>

              <p className="mb-6">
                What about the guides, support staff, and staging camps that we absolutely depended upon to keep us safe and transport supplies? The majority of organizations are stuck driving around roads built between the staging camps. This is our current state of manual gates for QA (quality assurance) checks for software pipelines – we have automated very well up to each transition point in our development pipelines.
              </p>

              <p className="mb-6">
                How do we build a better metaphorical road for our software factories and pipelines to avoid costly stoppages? We build the guardrails and safety checks to keep us safe on the road if we have to veer for any reason. When it comes to technology guardrails we can accomplish this via Factorial Separation of Duties (SoD).
              </p>

              <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-slate-300 mb-6">
                &ldquo;Factorial separation is applied when several factors contribute to the completion of the activity. (For example, two-factor access authentication.)&rdquo; - Baykara
              </blockquote>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">How do we do that?</h2>
              <p className="mb-6">
                We perform risk reduction to help mitigate errors, deficiencies, inaccuracies, irregularities or corruption. We divide up our tasks to be completed, our undertakings and activities, as well as decisions and transactions. This division is one of the primary principles of SoD.
              </p>

              <p className="mb-6">
                Factorial SoD enables product managers, development teams, security teams, operations teams and business leaders, to ensure that their responsibilities and concerns are met. How do I know (regardless of where I sit in the organization) that the new code being merged into our trunk is functioning and safe to run? Let&apos;s factor our risk out.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Risk Modeling Framework</h3>
              <p className="mb-4">A code merge can combine newly developed code and additional third-party code, typically Free/Libre and Open Source Software (FLOSS). Let&apos;s model our roles, concerns, and risk reduction activities:</p>

              <div className="bg-slate-700/50 p-4 rounded-lg mb-6">
                <div className="space-y-2 text-sm font-mono">
                  <div><span className="text-cyan-400">Role</span> → <span className="text-yellow-400">Concern</span> → <span className="text-green-400">Activity</span></div>
                  <div className="mt-4 space-y-1">
                    <div><span className="text-cyan-400">Product Manager</span> → <span className="text-yellow-400">FLOSS Vulnerabilities</span> → <span className="text-green-400">FLOSS Vulnerability Checks</span></div>
                    <div><span className="text-cyan-400">Legal Counsel</span> → <span className="text-yellow-400">FLOSS Licensing</span> → <span className="text-green-400">FLOSS Licensing Checks</span></div>
                    <div><span className="text-cyan-400">Business Director</span> → <span className="text-yellow-400">App Code Vulnerabilities</span> → <span className="text-green-400">Static Code Checks</span></div>
                    <div><span className="text-cyan-400">Operations Lead</span> → <span className="text-yellow-400">App and Data Exposure via IaC</span> → <span className="text-green-400">IaC Checks</span></div>
                    <div><span className="text-cyan-400">Operations Lead</span> → <span className="text-yellow-400">Production Drift Detection</span> → <span className="text-green-400">Web App Vulnerability Checks</span></div>
                    <div><span className="text-cyan-400">Compliance Analyst</span> → <span className="text-yellow-400">Production Releases</span> → <span className="text-green-400">Fraud Prevention via Code Functions</span></div>
                  </div>
                </div>
              </div>

              <p className="mb-6">
                We are missing one critical component of our model, which is risk management thresholds. Not everything is binary and it&apos;s how the role holder knows the activity satisfies the concern put forth. Thresholds will allow us to perform an activity without an absolute 100% reduction of the risk.
              </p>

              <p className="mb-6">
                Let&apos;s pick on our FLOSS code for a bit. We put in vulnerability and licensing checks to be executed, with thresholds to meet, to satisfy our concerns. I am a cybersecurity professional (my role), and I&apos;m concerned about high and critically-defined FLOSS vulnerabilities residing in my code that is executed in production. Once the FLOSS scanners check for our concerns and if they meet our threshold (no critical or high issues), we are satisfied.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Real-World Implementation</h2>
              <p className="mb-6">
                An example within The DevOps Audit Defense Toolkit pertains to committing fraud within code functions. Protections, such as dual-developer or peer code reviews, and handling new code are put into place followed by FLOSS and static code analysis, with each rule set for analysis approved by the Change Approval Board (CAB).
              </p>

              <p className="mb-6">
                Allowing developers to code and release to production is analogous to allowing the driver of the car to be in charge all alone up the mountain, bypassing those stopping points. How can we trust the driver with our important product, get it to the customer, and get it back again with payment?
              </p>

              <p className="mb-6">
                These safeguards are our responsibility because we live and work in the age of the Shared Responsibility Model from cloud providers. We gather our resources from others that have done it before and done a decent job at it, just as we bring in FLOSS to handle some of the extremely common components.
              </p>

              <p className="mb-6">
                Factorial SoD allows us to have visibility into the safety checks that go into the automated workflow of developing applications in our dynamic, modern era.
              </p>

              <div className="bg-slate-700/50 p-6 rounded-lg mt-8 border border-slate-600">
                <h3 className="text-lg font-bold text-white mb-3">Want to Learn More?</h3>
                <p className="text-sm text-slate-300 mb-4">
                  This is a preview of our comprehensive research on Factorial Separation of Duties. For detailed implementation guides and case studies, contact our team.
                </p>
                <Link href="/#contact" className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Schedule Consultation →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}