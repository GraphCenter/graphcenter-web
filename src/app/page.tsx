import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '12rem', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'var(--accent)', color: 'var(--primary)', borderRadius: '30px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '2rem' }}>
            Next-Gen AI Orchestration
          </div>
          <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 900 }}>
            Built for the <br />
            <span className="gradient-text">scale of thought</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            Architecting the Next Generation of Autonomous Enterprise Ecosystems. At GraphCenter, we engineer intelligence by providing the systems architecture and cloud solutions that allow enterprises to thrive at scale.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/services" className="btn-primary" style={{ textDecoration: 'none' }}>Our Services</Link>
            <Link href="/software" className="glass" style={{ padding: '0.8rem 2rem', borderRadius: '30px', fontWeight: 600, border: '1px solid var(--border)', textDecoration: 'none' }}>Explore Software</Link>
          </div>
        </div>
      </section>

      {/* Why Architecture Matters Section */}
      <section className="section" style={{ background: 'var(--glass)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8 leading-tight">Why Architecture <br /><span className="text-blue-600">is the AI Bottleneck</span></h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  In the race to adopt Agentic AI, most enterprises focus on the "Agents" while ignoring the "Landscape".
                  Without a robust system architecture, even the most capable AI workers remain silos of information.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  GraphCenter solves this. We provide the structural integrity required to turn fragmented
                  automations into a cohesive, autonomous ecosystem that scales with your ambition.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl border border-blue-50 text-center">
                <div className="text-3xl mb-2">🔭</div>
                <h4 className="font-bold text-sm">Strategic Clarity</h4>
              </div>
              <div className="glass p-6 rounded-2xl border border-blue-50 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-bold text-sm">Operational Velocity</h4>
              </div>
              <div className="glass p-6 rounded-2xl border border-blue-50 text-center">
                <div className="text-3xl mb-2">🔒</div>
                <h4 className="font-bold text-sm">System Resilience</h4>
              </div>
              <div className="glass p-6 rounded-2xl border border-blue-50 text-center">
                <div className="text-3xl mb-2">📈</div>
                <h4 className="font-bold text-sm">Infinite Scalability</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Architect Your Future?</h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            Discover how our specialized architectural frameworks can accelerate your transition to an AI-native digital workforce.
          </p>
          <Link href="/contact" className="btn-primary btn-cta" style={{ textDecoration: 'none' }}>Start the Conversation</Link>
        </div>
      </section>
    </main>
  );
}
