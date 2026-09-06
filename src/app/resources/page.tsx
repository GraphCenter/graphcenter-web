import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
    title: 'Resources | GraphCenter',
    description: 'GraphCenter resources: the Technical Whitepaper, plus documentation and blog content coming soon.',
};

export default function ResourcesPage() {
    return (
        <main>
            <Section spacing="tight" style={{ paddingTop: '10rem', textAlign: 'center' }}>
                <span className="section-label">Resources</span>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>Learn how it&rsquo;s built</h1>
                <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                    Deep dives into the architecture, plus documentation and platform updates as they ship.
                </p>
            </Section>

            <Section spacing="tight">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                    <div className="card-asymmetric" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
                        <span className="section-label" style={{ marginBottom: '0.75rem' }}>Available now</span>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Technical Whitepaper</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>
                            The Agentic Control Plane: how GraphControl AI stays safe to hand real work, and how one platform runs a portfolio of products on a composable domain model, an event-driven backbone, and attribute-based access control.
                        </p>
                        <Button href="/whitepaper" variant="primary">Read the Whitepaper</Button>
                    </div>

                    <div className="card-asymmetric" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', opacity: 0.7 }}>
                        <span style={{ display: 'inline-block', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}>Coming soon</span>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Documentation</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>
                            API references, domain-configuration guides, and integration walkthroughs for building on the platform.
                        </p>
                        <Button variant="ghost" style={{ opacity: 0.5, cursor: 'not-allowed', pointerEvents: 'none' }}>Coming Soon</Button>
                    </div>

                    <div className="card-asymmetric" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', opacity: 0.7 }}>
                        <span style={{ display: 'inline-block', fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-tertiary)', marginBottom: '0.75rem' }}>Coming soon</span>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Blog</h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>
                            Notes from the engineering team on composable architecture, event-driven systems, and building for the Agentic AI era.
                        </p>
                        <Button variant="ghost" style={{ opacity: 0.5, cursor: 'not-allowed', pointerEvents: 'none' }}>Coming Soon</Button>
                    </div>
                </div>
            </Section>
        </main>
    );
}
