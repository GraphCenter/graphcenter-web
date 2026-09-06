import type { Metadata } from 'next';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
    title: 'FAQ | GraphCenter',
    description: 'Answers to common questions about GraphCenter, GraphControl AI, and the product portfolio: the safety boundary, platform domains, access control, integrations, and the mobile companion app.',
};

const FAQS: { category: string; items: { q: string; a: string }[] }[] = [
    {
        category: 'Platform',
        items: [
            {
                q: 'What is GraphCenter?',
                a: 'GraphCenter is the company behind GraphControl AI, an agentic control plane for vertical applications. One platform provides identity, permissions, metered AI, and a hard safety boundary; a portfolio of products and an OEM licensing model run on top of it.',
            },
            {
                q: 'What is GraphControl AI?',
                a: 'GraphControl AI is the control plane itself. Each page in a product registers its live data and available actions; a request in plain language is proposed as a previewed, before/after change; nothing is committed until a human confirms — and the agent can only ever touch what a developer pre-declared in the allow-list registry.',
            },
            {
                q: 'What products run on the platform?',
                a: 'Three today: HomeAuto, a multi-vendor marketplace for home automation; Moeletsi, an AI legal advisor that drafts and checks documents against a curated knowledge base; and Softlearn, attendance-based tutoring with sessions, progress, and payments in one place. GraphControl AI itself also runs the enterprise domains directly (Finance, Medical, Mechanical 3D Design, and dozens more).',
            },
            {
                q: 'Can we embed GraphControl AI in our own product?',
                a: 'Yes — that\'s the OEM model. You bring the domain and the customers; GraphControl brings the assistant, the safety boundary, the agent-generated UI, and usage-based billing, shipped under a "Powered by GraphControl" mark.',
            },
            {
                q: 'Can we add custom business domains?',
                a: 'Yes. New business units can be added to an organization dynamically, with no platform redeploy. ADMIN and SUPER_ADMIN accounts control exactly which domains each user can reach, down to the individual.',
            },
        ],
    },
    {
        category: 'Access & Security',
        items: [
            {
                q: 'How does access control work across domains?',
                a: 'Every request runs through an attribute-based access control (ABAC) layer that evaluates the requesting user’s role, organization, and allowed-domains list against the resource being requested. ADMIN accounts are scoped to their own organization; SUPER_ADMIN accounts operate platform-wide. See the Trust & Security page for the full posture.',
            },
            {
                q: 'What happens if a user\'s domain access isn\'t explicitly restricted?',
                a: 'Leaving a user\'s domain access unrestricted keeps them unrestricted by default — the platform is designed so composability doesn\'t come at the cost of accidental lockouts.',
            },
        ],
    },
    {
        category: 'Integrations',
        items: [
            {
                q: 'Does GraphCenter integrate with our existing ERP or CRM?',
                a: 'Yes — the platform connects directly into existing ERPs, CRMs, and custom databases via standardized, secure API gateways, rather than requiring a wholesale replacement of your current systems.',
            },
            {
                q: 'How does data move between domains?',
                a: 'Cross-domain communication runs over a schema-validated event backbone (CloudEvents 1.0). Every event is validated on the way in, and messages that fail validation are buffered with a descriptive error rather than silently dropped.',
            },
        ],
    },
];

export default function FaqPage() {
    return (
        <main>
            <Section spacing="tight" style={{ paddingTop: '10rem', textAlign: 'center' }}>
                <span className="section-label">FAQ</span>
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>Frequently Asked Questions</h1>
                <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                    For plan-specific questions, see the <a href="/pricing" style={{ color: 'var(--primary)' }}>Pricing FAQ</a>.
                </p>
            </Section>

            <Section spacing="tight">
                <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {FAQS.map((group) => (
                        <div key={group.category}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{group.category}</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {group.items.map((item) => (
                                    <details key={item.q} className="card-asymmetric" style={{ padding: '1.25rem 1.5rem' }}>
                                        <summary style={{ cursor: 'pointer', fontWeight: 500, color: 'var(--text-main)', fontSize: '1.02rem' }}>
                                            {item.q}
                                        </summary>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6, marginTop: '0.9rem' }}>
                                            {item.a}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
