import Section from '@/components/ui/Section';
import SplitLayout from '@/components/ui/SplitLayout';
import Button from '@/components/ui/Button';

const defensibility = [
    { num: '01', title: 'A validated allow-list registry', body: 'Every data source and action is declared and independently re-validated at execution time — the moat competitors have to rebuild, not just prompt around.' },
    { num: '02', title: 'A multi-vertical data flywheel', body: 'Patterns learned running one domain make the next one faster to stand up and better on day one.' },
    { num: '03', title: 'Distribution already shipped', body: 'Three live products and an OEM mark, not a roadmap — the platform earns from usage across all of them.' },
];

export default function About() {
    return (
        <main>
            {/* Hero */}
            <Section spacing="tight" style={{ paddingTop: '10rem', textAlign: 'center' }}>
                <span className="section-label">Our Mission</span>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
                    One platform. A portfolio. <br />
                    <span className="gradient-text">A safety model.</span>
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
                    Every vertical software company rebuilds the same substrate: an AI assistant, a dashboard, an identity and permissions layer, billing. GraphCenter builds it once &mdash; GraphControl AI &mdash; and runs a portfolio of products on top of it.
                </p>
            </Section>

            {/* Philosophy / Defensibility */}
            <Section>
                <SplitLayout
                    align="start"
                    left={
                        <div>
                            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', marginBottom: '1.5rem' }}>Build the substrate once</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                                GraphControl AI is an agentic control plane. Ask it, in plain language, to change something; it registers the live data and available actions on the page, proposes the change with a full before/after preview, and commits only when you confirm.
                            </p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: 1.6, marginBottom: '2rem' }}>
                                Because the assistant, the permissions model and the metered billing are shared infrastructure, a new vertical is mostly domain configuration &mdash; not a new company. That is how a small team runs HomeAuto, Moeletsi and Softlearn side by side, and offers the same engine to third parties.
                            </p>
                            <p style={{ color: 'var(--primary)', fontStyle: 'italic', fontSize: '18px', fontWeight: 400 }}>
                                &ldquo;The agent can only ever do what a developer already allowed. The boundary is the product.&rdquo;
                            </p>
                        </div>
                    }
                    right={
                        <div>
                            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '2rem' }}>What makes it defensible</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                {defensibility.map((item) => (
                                    <div key={item.num} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                                        <span style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--primary)', lineHeight: 1 }}>{item.num}</span>
                                        <div>
                                            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>{item.title}</h4>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.5 }}>{item.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                />
            </Section>

            {/* CTA */}
            <Section spacing="tight" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1.5rem' }}>Built for What&rsquo;s Next</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '2.5rem', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
                    Run a vertical on the platform, or embed the engine in a product you already have.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button href="/contact" variant="primary">Talk to Us</Button>
                    <Button href="/domains" variant="ghost">Explore the Platform</Button>
                </div>
            </Section>
        </main>
    );
}
