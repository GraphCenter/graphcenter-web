import Link from 'next/link';

const portfolio = [
  {
    icon: '🧩',
    name: 'GraphControl AI',
    tag: 'The platform',
    line: 'The agentic control plane itself — enterprise domains from finance and medical to project management, asset operations and the composable enterprise.',
    href: '/domains',
    cta: 'Explore the domains',
  },
  {
    icon: '🏠',
    name: 'HomeAuto',
    tag: 'Consumer marketplace',
    line: 'A multi-vendor marketplace for home automation — browse, quote and book installers, with the assistant handling the busywork.',
    href: '/software',
    cta: 'See the platform',
  },
  {
    icon: '⚖️',
    name: 'Moeletsi',
    tag: 'Legal',
    line: 'An AI legal advisor that drafts, explains and checks documents against a curated knowledge base — answers you can trace to a source.',
    href: '/software',
    cta: 'See the platform',
  },
  {
    icon: '🎓',
    name: 'Softlearn',
    tag: 'Education',
    line: 'Attendance-based tutoring: sessions, progress and payments in one place, with an assistant that keeps tutors and guardians in the loop.',
    href: '/software',
    cta: 'See the platform',
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '12rem', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'var(--accent)', color: 'var(--primary)', borderRadius: '30px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '2rem' }}>
            The Agentic Control Plane
          </div>
          <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 900 }}>
            Natural language in. <br />
            <span className="gradient-text">Working software out.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '820px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            GraphControl AI turns a request in plain English into a previewed change you approve or discard. It can only
            ever wire together data and actions a developer pre-approved &mdash; a hard safety boundary, not a prompt.
            One platform runs a portfolio of consumer and enterprise products, and ships to third-party apps as
            &ldquo;Powered by GraphControl&rdquo;.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/software" className="btn-primary" style={{ textDecoration: 'none' }}>Explore the platform</Link>
            <Link href="/pricing" className="glass" style={{ padding: '0.8rem 2rem', borderRadius: '30px', fontWeight: 600, border: '1px solid var(--border)', textDecoration: 'none' }}>See pricing</Link>
          </div>
        </div>
      </section>

      {/* Why Architecture Matters Section */}
      <section className="section" style={{ background: 'var(--glass)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8 leading-tight">Why the <br /><span className="text-blue-600">boundary is the product</span></h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  In the race to adopt agentic AI, most teams bolt a chatbot onto an app and hope it behaves. The hard
                  part isn&apos;t the model &mdash; it&apos;s making an autonomous system safe to hand real work.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  GraphControl AI enforces an allow-list registry: every data source and action is declared and
                  independently re-validated at execution time. The agent proposes, shows the before/after, and commits
                  only on your confirmation. That safety model is built once and reused across every product on the
                  platform.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-2xl border border-blue-50 text-center">
                <div className="text-3xl mb-2">📋</div>
                <h4 className="font-bold text-sm">Allow-list Registry</h4>
              </div>
              <div className="glass p-6 rounded-2xl border border-blue-50 text-center">
                <div className="text-3xl mb-2">👁️</div>
                <h4 className="font-bold text-sm">Before / After Preview</h4>
              </div>
              <div className="glass p-6 rounded-2xl border border-blue-50 text-center">
                <div className="text-3xl mb-2">🔒</div>
                <h4 className="font-bold text-sm">Independent Re-validation</h4>
              </div>
              <div className="glass p-6 rounded-2xl border border-blue-50 text-center">
                <div className="text-3xl mb-2">🧠</div>
                <h4 className="font-bold text-sm">Agent-Generated UI</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section" style={{ background: 'white', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">One platform, a portfolio of products</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The same control plane, identity model and metered AI underneath every one. Build the substrate once;
              run many verticals on it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((p) => (
              <div key={p.name} className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{p.icon}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary)', background: 'var(--accent)', padding: '2px 10px', borderRadius: '20px' }}>{p.tag}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">{p.line}</p>
                <Link href={p.href} style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>{p.cta} &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powered by GraphControl Section */}
      <section className="section" style={{ background: 'var(--glass)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div style={{ display: 'inline-block', padding: '0.4rem 1.2rem', background: 'var(--accent)', color: 'var(--primary)', borderRadius: '30px', fontWeight: 600, fontSize: '0.8rem', marginBottom: '1.5rem' }}>
                Powered by GraphControl
              </div>
              <h2 className="text-4xl font-black mb-6 leading-tight">Put the engine in <br /><span className="gradient-text">your own product</span></h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Embed the agentic control plane and its metered AI inside your vertical app. You bring the domain and
                the customers; GraphControl brings the assistant, the safety boundary, the agent-generated UI and the
                usage-based billing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The attribution mark already ships in three products in our own portfolio. It can ship in yours.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>Talk to us</Link>
                <Link href="/architecture" className="glass" style={{ padding: '0.8rem 2rem', borderRadius: '30px', fontWeight: 600, border: '1px solid var(--border)', textDecoration: 'none' }}>How it&apos;s built</Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="glass p-6 rounded-2xl border border-blue-50 text-left text-sm">
                <strong>✓ Drop-in assistant</strong> &mdash; register your pages&apos; data and actions; the agent does the rest.
              </div>
              <div className="glass p-6 rounded-2xl border border-blue-50 text-left text-sm">
                <strong>✓ Metered AI billing</strong> &mdash; usage priced above model cost, passed through to your plan.
              </div>
              <div className="glass p-6 rounded-2xl border border-blue-50 text-left text-sm">
                <strong>✓ Same safety boundary</strong> &mdash; allow-list registry and independent re-validation, unchanged.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Put GraphControl AI in your product</h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            Start on a plan, or talk to us about the OEM model and a domain pack for your vertical.
          </p>
          <Link href="/contact" className="btn-primary btn-cta" style={{ textDecoration: 'none' }}>Start the conversation</Link>
        </div>
      </section>
    </main>
  );
}
