import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image src="/chatbot-logo.png" alt="GraphCenter Logo" width={40} height={40} />
            <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>GraphCenter</span>
          </div>
          <div style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
            <Link href="#features">Features</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '12rem', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'var(--accent)', color: 'var(--primary)', borderRadius: '30px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '2rem' }}>
            Next-Gen AI Orchestration
          </div>
          <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Built for the <br />
            <span className="gradient-text">scale of thought</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            Architecting the Next Generation of Autonomous Enterprise Ecosystems. At Graphcenter, we engineer intelligence by providing the systems architecture and cloud solutions that allow enterprises to thrive at scale. 
            We specialize in the transition from static automation to Agentic AI, building autonomous ecosystems where AI agents reason, plan, and execute complex workflows within your corporate software landscape.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn-primary" style={{ fontSize: '1.1rem' }}>Start Free Trial</button>
            <button className="glass" style={{ padding: '0.8rem 2rem', borderRadius: '30px', fontWeight: 600, border: '1px solid var(--border)' }}>Watch Demo</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section" style={{ background: 'rgba(230, 240, 255, 0.3)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>Powered by Advanced Agentic Workflows</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <FeatureCard 
              title="LangGraph Orchestration" 
              description="Built on LangGraph for robust, cyclical agent interactions and state management."
              icon="🧠"
            />
            <FeatureCard 
              title="ERP Integration" 
              description="Directly connect with your budget, revenue, and staffing modules for real-time updates."
              icon="💼"
            />
            <FeatureCard 
              title="Scalable SaaS" 
              description="Cloud-native architecture designed to grow with your enterprise infrastructure."
              icon="☁️"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>Predictable Pricing</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <PricingCard tier="Starter" price="$49" features={['Up to 5 Agents', 'Standard Support', 'Basic ERP Integration']} />
            <PricingCard tier="Pro" price="$249" features={['Unlimited Agents', 'Priority Support', 'Full API Access', 'Custom Workflows']} isFeatured />
            <PricingCard tier="Enterprise" price="Custom" features={['Dedicated Infrastructure', 'SLA Guarantees', 'On-premise Options']} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <Image src="/chatbot-logo.png" alt="GraphCenter Logo" width={30} height={30} />
            <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)' }}>GraphCenter</span>
          </div>
          <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            Our core expertise spans robust systems architecture, high-velocity cloud and data engineering, and bespoke software development designed for seamless integration. 
            By deploying specialized AI agents as a digital workforce, we ensure your technology is built for the scale of thought and as ambitious as your vision.
          </p>
          <p style={{ color: 'var(--text-muted)' }}>&copy; 2026 GraphCenter Inc. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius)', transition: 'transform 0.3s ease' }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{icon}</div>
      <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{description}</p>
    </div>
  );
}

function PricingCard({ tier, price, features, isFeatured = false }: { tier: string, price: string, features: string[], isFeatured?: boolean }) {
  return (
    <div className={isFeatured ? "" : "glass"} style={{ 
      padding: '3rem 2rem', 
      borderRadius: 'var(--radius)', 
      textAlign: 'center',
      border: isFeatured ? '2px solid var(--primary)' : '1px solid var(--border)',
      background: isFeatured ? 'white' : 'var(--glass)',
      transform: isFeatured ? 'scale(1.05)' : 'none',
      boxShadow: isFeatured ? '0 20px 40px rgba(0, 82, 204, 0.15)' : 'var(--shadow)'
    }}>
      <div style={{ fontSize: '1.1rem', fontWeight: 600, color: isFeatured ? 'var(--primary)' : 'inherit', marginBottom: '1rem' }}>{tier}</div>
      <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '2rem' }}>{price}<span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-muted)' }}>{price !== 'Custom' ? '/mo' : ''}</span></div>
      <ul style={{ listStyle: 'none', marginBottom: '2.5rem', textAlign: 'left', paddingLeft: '1rem' }}>
        {features.map((f, i) => <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: '#00C853' }}>✓</span> {f}
        </li>)}
      </ul>
      <button className={isFeatured ? "btn-primary" : "glass"} style={{ width: '100%', padding: '0.8rem', borderRadius: '30px', fontWeight: 600, border: isFeatured ? 'none' : '1px solid var(--border)' }}>
        {tier === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
      </button>
    </div>
  );
}
