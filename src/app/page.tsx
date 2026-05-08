import { ExternalLink, MapPin, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-10 px-8 py-5 flex justify-between items-center border-b border-stone-900 bg-[#0a0a0a]/90 backdrop-blur-sm">
        <span
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          className="text-lg font-light tracking-widest text-stone-300"
        >
          Trin
        </span>
        <a
          href="https://www.linkedin.com/in/andytrinugraha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-widest uppercase text-stone-500 hover:text-stone-300 transition-colors duration-200"
        >
          LinkedIn
        </a>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-32 px-8 max-w-4xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-stone-500 mb-8">
          HR Business Partner · Southeast Asia
        </p>
        <h1
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          className="text-7xl font-light leading-none text-stone-100 mb-8"
        >
          Andy Rachman
          <br />
          <span className="italic text-stone-400">Trinugraha</span>
        </h1>
        <p className="text-base text-stone-400 max-w-lg leading-relaxed">
          People operations, organizational development, and HR strategy
          across regional markets in Southeast Asia.
        </p>
        <div className="mt-12 flex gap-6 items-center">
          <a
          href="https://www.linkedin.com/in/andytrinugraha"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-stone-700 text-stone-300 text-xs tracking-widest uppercase px-8 py-3 hover:bg-stone-900 hover:border-stone-500 transition-all duration-300 flex items-center gap-2"
          >
          <span>LinkedIn Profile</span>
          <ExternalLink size={12} />
          </a>
          <span className="text-stone-700 text-xs tracking-wider flex items-center gap-1">
          <MapPin size={11} />
          Bali, Indonesia
          </span>
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 max-w-4xl mx-auto">
        <div className="border-t border-stone-800" />
      </div>

      {/* About */}
      <section className="py-24 px-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-600">
              About
            </p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <p className="text-stone-300 leading-relaxed">
              Currently serving as HR Business Partner at Wine Adore Group,
              a Singapore-headquartered wine import and distribution company
              with operations across Indonesia, Singapore, Malaysia, and the
              Philippines.
            </p>
            <p className="text-stone-400 leading-relaxed">
              My work focuses on building HR infrastructure and people
              systems during active organizational growth — spanning
              recruitment, onboarding design, performance management,
              culture development, and multi-site HR operations.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 max-w-4xl mx-auto">
        <div className="border-t border-stone-800" />
      </div>

      {/* Experience */}
      <section className="py-24 px-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-600">
              Experience
            </p>
          </div>
          <div className="md:col-span-2 space-y-12">

            <div className="border-l border-stone-800 pl-6">
              <p
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                className="text-xl font-light text-stone-100"
              >
                HR Business Partner
              </p>
              <p className="text-xs tracking-wider text-stone-500 mt-1">
                Wine Adore Group · 2025 – Present
              </p>
              <p className="text-sm text-stone-400 mt-3 leading-relaxed">
                Multi-site HR operations across Indonesia, Singapore,
                Malaysia, and the Philippines. Supporting Sales, Tech, and
                Business Support divisions with a primary focus on CRM team
                structure, regional onboarding design, and organizational
                development initiatives.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Recruitment", "OD", "L&D", "HRIS", "Multi-site Ops"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs text-stone-500 border border-stone-800 px-3 py-1"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 max-w-4xl mx-auto">
        <div className="border-t border-stone-800" />
      </div>

      {/* Contact */}
      <section className="py-24 px-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <p className="text-xs tracking-widest uppercase text-stone-600">
              Connect
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="text-stone-400 mb-8 leading-relaxed">
              Open to strategic HR conversations, regional collaboration,
              and professional networking.
            </p>
            <a
              href="https://www.linkedin.com/in/andytrinugraha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 text-sm underline underline-offset-4 decoration-stone-700 hover:text-stone-100 hover:decoration-stone-400 transition-all duration-200"
            >
              linkedin.com/in/andytrinugraha
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-900 px-8 py-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-stone-700 text-xs tracking-wide">
            © 2026 Andy Rachman Trinugraha
          </p>
          <p className="text-stone-700 text-xs tracking-wide">
            Bali, Indonesia
          </p>
        </div>
      </footer>

    </main>
  );
}