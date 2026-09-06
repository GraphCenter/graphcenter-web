import Section from '@/components/ui/Section';

const features = [
    { title: 'Domain Packs', description: 'We model your vertical as a GraphControl domain — the data sources, actions, and permissions the assistant is allowed to touch — and validate it against the allow-list registry.', icon: '🧩' },
    { title: 'Integration & Data', description: 'Connecting the platform to your existing ERPs, CRMs, and databases through the standardized, secure API gateway, plus the pipelines to keep them in sync.', icon: '⚡' },
    { title: 'Migration & Onboarding', description: 'Moving an existing product onto the control plane, or standing up a new one — data migration, rollout, and training for your team.', icon: '🛠️' },
];

const process = [
    { num: '01', title: 'Discovery', body: 'Deep dive into current bottlenecks and future business goals.' },
    { num: '02', title: 'Design', body: 'Creating high-fidelity architectural blueprints and roadmaps.' },
    { num: '03', title: 'Validation', body: 'Rigorous stress-testing and architectural review of the proposed system.' },
    { num: '04', title: 'Continuity', body: 'Long-term implementation support and architectural evolution.' },
];

export default function Services() {
    return (
        <main>
            <Section spacing="tight" style={{ paddingTop: '10rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>Solutions &amp; Implementation</h1>
                <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
                    The platform does the heavy lifting. These engagements are the thin layer around it &mdash; domain packs, integration with your existing systems, and migration &mdash; so a new vertical goes live in weeks, not quarters.
                </p>
            </Section>

            <Section spacing="tight">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem' }}>
                    {features.map((f) => (
                        <div key={f.title}>
                            <div style={{ fontSize: '2.25rem', marginBottom: '1.25rem' }}>{f.icon}</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>{f.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.6 }}>{f.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section eyebrow="How We Work">
                <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', marginBottom: '3rem' }}>How an Engagement Runs</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem' }}>
                    {process.map((p) => (
                        <div key={p.num} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.75rem', fontWeight: 400, color: 'var(--primary)', marginBottom: '1rem' }}>{p.num}</div>
                            <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>{p.title}</h4>
                            <p style={{ color: 'var(--text-tertiary)', fontSize: '14px', lineHeight: 1.5 }}>{p.body}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
