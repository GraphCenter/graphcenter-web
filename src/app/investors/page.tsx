import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import SplitLayout from '@/components/ui/SplitLayout';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
    title: 'Investors | GraphCenter',
    description: 'GraphCenter builds GraphControl AI, an agentic control plane that runs a portfolio of products and an OEM licensing model on one shared substrate. Get in touch with our Investor Relations team.',
};

export default function InvestorsPage() {
    return (
        <main>
            <Section spacing="tight" style={{ paddingTop: '10rem', textAlign: 'center' }}>
                <span className="section-label">Investors</span>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
                    One <span className="gradient-text">control plane</span>, a portfolio of products
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
                    Every vertical software company rebuilds the same substrate: an AI assistant, a dashboard, an identity and permissions layer, billing. GraphCenter builds it once &mdash; GraphControl AI &mdash; and runs a portfolio of products, plus an OEM licensing model, on top of it.
                </p>
            </Section>

            <Section eyebrow="The Thesis">
                <SplitLayout
                    align="start"
                    left={
                        <div>
                            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', marginBottom: '1.5rem' }}>
                                The <span style={{ color: 'var(--primary)' }}>boundary is the product</span>
                            </h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: 1.6 }}>
                                Most teams adopting agentic AI bolt a chatbot onto an app and hope it behaves. The hard part isn&rsquo;t the model &mdash; it&rsquo;s making an autonomous system safe to hand real work. GraphControl AI enforces an allow-list registry, independently re-validated at execution time, with a human confirming every committed change.
                            </p>
                        </div>
                    }
                    right={
                        <div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                                Because the assistant, the permissions model, and metered billing are shared infrastructure, a new vertical is mostly domain configuration &mdash; not a new company. That&rsquo;s how a small team runs HomeAuto, Moeletsi, and Softlearn side by side, and offers the same engine to third parties under &ldquo;Powered by GraphControl.&rdquo;
                            </p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: 1.6 }}>
                                The bet is that a validated safety boundary and a multi-vertical data flywheel compound faster than any single vertical product can on its own &mdash; and that distribution is already shipped, not a roadmap.
                            </p>
                        </div>
                    }
                />
            </Section>

            <Section eyebrow="Why It's Defensible" style={{ background: 'var(--bg-card)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                    <div className="card-asymmetric" style={{ padding: '2rem' }}>
                        <h4 style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>A Validated Allow-List Registry</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6 }}>Every data source and action is declared and independently re-validated at execution time &mdash; the moat competitors have to rebuild, not just prompt around.</p>
                    </div>
                    <div className="card-asymmetric" style={{ padding: '2rem' }}>
                        <h4 style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>A Multi-Vertical Data Flywheel</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6 }}>Patterns learned running one domain make the next one faster to stand up and better on day one.</p>
                    </div>
                    <div className="card-asymmetric" style={{ padding: '2rem' }}>
                        <h4 style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>Distribution Already Shipped</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6 }}>Three live products and an OEM mark, not a roadmap &mdash; the platform earns from usage across all of them.</p>
                    </div>
                </div>
            </Section>

            <Section spacing="tight" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1.5rem' }}>Investor Relations</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '2.5rem', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
                    For inquiries about GraphCenter&rsquo;s business, technology, or growth plans, reach our team directly.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button href="mailto:investors@graphcenter.ai" variant="primary">investors@graphcenter.ai</Button>
                    <Button href="/contact" variant="ghost">Contact the Team</Button>
                </div>
            </Section>
        </main>
    );
}
