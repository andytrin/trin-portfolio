export default function Home() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-3xl mx-auto">

      {/* Hero */}
      <section className="mb-24">
        <p className="text-sm tracking-widest uppercase text-stone-400 mb-6">
          HR Business Partner
        </p>
        <h1 className="text-5xl font-light leading-tight text-stone-100 mb-6">
          Trin
        </h1>
        <p className="text-lg text-stone-400 max-w-xl leading-relaxed">
          People operations, culture, and organizational development across
          regional markets in Southeast Asia.
        </p>
        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-stone-600 text-stone-300 text-sm tracking-wider px-6 py-3 hover:bg-stone-800 transition-colors duration-200"
          >
            View LinkedIn Profile
          </a>
        </div>
      </section>

      {/* About */}
      <section className="mb-24">
        <h2 className="text-xs tracking-widest uppercase text-stone-500 mb-6">
          About
        </h2>
        <p className="text-stone-300 leading-relaxed">
          Based in Bali, Indonesia. Currently serving as HR Business Partner
          with a focus on Sales, CRM, and multi-site operations across
          Indonesia, Singapore, Malaysia, and the Philippines.
        </p>
        <p className="text-stone-300 leading-relaxed mt-4">
          My work sits at the intersection of people strategy, operational
          structure, and organizational growth — with a particular focus on
          building HR infrastructure during active company expansion phases.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-24">
        <h2 className="text-xs tracking-widest uppercase text-stone-500 mb-6">
          Experience
        </h2>
        <div className="space-y-8">
          <div>
            <p className="text-stone-200 font-medium">HR Business Partner</p>
            <p className="text-stone-500 text-sm mt-1">
              Wine Adore Group · 2023 – Present
            </p>
            <p className="text-stone-400 text-sm mt-2 leading-relaxed">
              Multi-site HR operations across Indonesia, Singapore, Malaysia,
              and the Philippines. Focus on Sales Division, CRM team
              structure, onboarding systems, and regional expansion support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-12">
        <h2 className="text-xs tracking-widest uppercase text-stone-500 mb-6">
          Connect
        </h2>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-300 underline underline-offset-4 hover:text-stone-100 transition-colors duration-200"
        >
          LinkedIn
        </a>
      </section>

      {/* Footer */}
      <footer className="pt-12 border-t border-stone-800">
        <p className="text-stone-600 text-xs tracking-wide">
          © 2026 Andy Rachman Trinugraha
        </p>
      </footer>

    </main>
  );
}