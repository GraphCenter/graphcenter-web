import Link from 'next/link';
import Section from '@/components/ui/Section';
import SplitLayout from '@/components/ui/SplitLayout';
import Button from '@/components/ui/Button';

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

const boundaryPoints = [
  { icon: '📋', label: 'Allow-list Registry' },
  { icon: '👁️', label: 'Before / After Preview' },
  { icon: '🔒', label: 'Independent Re-validation' },
  { icon: '🧠', label: 'Agent-Generated UI' },
];

const oemPoints = [
  { title: 'Drop-in assistant', body: 'Register your pages’ data and actions; the agent does the rest.' },
  { title: 'Metered AI billing', body: 'Usage priced above model cost, passed through to your plan.' },
  { title: 'Same safety boundary', body: 'Allow-list registry and independent re-validation, unchanged.' },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Section spacing="tight" style={{ paddingTop: '11rem', textAlign: 'center' }}>
        <span className="section-label" style={{ display: 'inline-block' }}>The Agentic Control Plane</span>
        <h1 className="text-display" style={{ marginBottom: '1.5rem', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
          Natural language in. Working software out.
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '760px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          GraphControl AI turns a request in plain English into a previewed change you approve or discard. It can only ever wire together data and actions a developer pre-approved &mdash; a hard safety boundary, not a prompt. One platform runs a portfolio of consumer and enterprise products, and ships to third-party apps as &ldquo;Powered by GraphControl&rdquo;.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button href="/software" variant="primary">Explore the Platform</Button>
          <Button href="/pricing" variant="ghost">See Pricing</Button>
        </div>
      </Section>

      {/* Why the boundary is the product */}
      <Section eyebrow="Why It Matters" style={{ background: 'var(--bg-card)' }}>
        <SplitLayout
          left={
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '2rem', lineHeight: 1.15 }}>
                Why the <span style={{ color: 'var(--primary)' }}>boundary is the product</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: 1.6 }}>
                  In the race to adopt agentic AI, most teams bolt a chatbot onto an app and hope it behaves. The hard part isn&rsquo;t the model &mdash; it&rsquo;s making an autonomous system safe to hand real work.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: 1.6 }}>
                  GraphControl AI enforces an allow-list registry: every data source and action is declared and independently re-validated at execution time. The agent proposes, shows the before/after, and commits only on your confirmation. That safety model is built once and reused across every product on the platform.
                </p>
              </div>
            </div>
          }
          right={
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {boundaryPoints.map((item) => (
                <div key={item.label} className="card-asymmetric" style={{ padding: '1.5rem 1rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>{item.label}</h4>
                </div>
              ))}
            </div>
          }
        />
      </Section>

      {/* Portfolio */}
      <Section eyebrow="The Portfolio">
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', marginBottom: '1rem', textAlign: 'center' }}>One platform, a portfolio of products</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '640px', margin: '0 auto 3rem', lineHeight: 1.6, textAlign: 'center' }}>
          The same control plane, identity model and metered AI underneath every one. Build the substrate once; run many verticals on it.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {portfolio.map((p) => (
            <div key={p.name} className="card-asymmetric" style={{ padding: '2.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{p.icon}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                <h3 style={{ fontSize: '1.25rem' }}>{p.name}</h3>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--primary)', background: 'var(--accent)', padding: '2px 10px', borderRadius: 'var(--radius-tag)' }}>{p.tag}</span>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6, marginBottom: '1.5rem' }}>{p.line}</p>
              <Link href={p.href} style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>{p.cta} &rarr;</Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Powered by GraphControl */}
      <Section eyebrow="OEM" style={{ background: 'var(--bg-card)' }}>
        <SplitLayout
          left={
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1.5rem', lineHeight: 1.15 }}>
                Put the engine in <span style={{ color: 'var(--primary)' }}>your own product</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Embed the agentic control plane and its metered AI inside your vertical app. You bring the domain and the customers; GraphControl brings the assistant, the safety boundary, the agent-generated UI and the usage-based billing.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                The attribution mark already ships in three products in our own portfolio. It can ship in yours.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/contact" variant="primary">Talk to Us</Button>
                <Button href="/architecture" variant="ghost">How It&rsquo;s Built</Button>
              </div>
            </div>
          }
          right={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {oemPoints.map((point) => (
                <div key={point.title} className="card-asymmetric" style={{ padding: '1.25rem 1.5rem' }}>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--text-main)' }}>&#10003; {point.title}</strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}> &mdash; {point.body}</span>
                </div>
              ))}
            </div>
          }
        />
      </Section>

      {/* Final CTA */}
      <Section spacing="tight" style={{ textAlign: 'center' }}>
        <h2 className="text-heading-lg" style={{ marginBottom: '1.5rem' }}>Put GraphControl AI in your product</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '3rem', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
          Start on a plan, or talk to us about the OEM model and a domain pack for your vertical.
        </p>
        <Button href="/contact" variant="primary" size="large">Start the Conversation</Button>
      </Section>
    </main>
  );
}
