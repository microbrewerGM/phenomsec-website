import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      id: "factorial-separation-duties",
      title: "Factorial Separation of Duties for Modern AppSec Compliance",
      date: "March 21, 2025",
      excerpt: "Exploring how breaking down high-risk activities into manageable components enhances security and efficiency in modern application development pipelines.",
      readTime: "8 min read",
      category: "Application Security",
      href: "/blog/factorial-separation-duties"
    },
    {
      id: "calculus-crossroads-policy-pyramid",
      title: "The Calculus Crossroads of Policy Pyramid",
      date: "April 3, 2025",
      excerpt: "An unconventional approach to understanding and managing information security frameworks by drawing parallels with mathematical concepts.",
      readTime: "12 min read",
      category: "Security Frameworks",
      href: "/blog/calculus-crossroads-policy-pyramid"
    }
  ];

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

      {/* Header */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Security <span className="text-cyan-400">Insights</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Research-driven perspectives on cybersecurity, compliance, and enterprise security architecture from our diverse team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 mb-2 md:mb-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-sm">{post.readTime}</span>
                  </div>
                  <div className="text-cyan-400 text-sm font-semibold">
                    {post.date.toUpperCase()}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                  <Link href={post.href}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  href={post.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Read Full Article
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-slate-800/30 p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Get the latest security insights and research findings delivered to your inbox. Join our community of security professionals.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Subscribe to Updates
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
              <Link href="/#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</Link>
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