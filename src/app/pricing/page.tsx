import PricingCard from "@/components/PricingCard";

const faqs = [
    { q: 'How do AI agents count?', a: 'Each agent is a specialized AI worker assigned to a specific set of tools or data sources. You can scale your pool as your workflow complexity grows.' },
    { q: 'Do you offer custom integrations?', a: 'Yes! Our Enterprise tier includes bespoke development for proprietary systems and legacy ERP integrations.' },
    { q: 'Can I cancel at any time?', a: 'Absolutely. We offer flexible month-to-month billing with no long-term lock-in for Starter and Pro tiers.' },
    { q: 'What happens if we exceed our plan\'s user or agent limits?', a: 'We\'ll reach out before you hit a hard limit — most teams simply upgrade to the next tier, and Enterprise removes the ceiling entirely with custom agent allocation.' },
    { q: 'Do you support invoicing or purchase-order billing for Enterprise?', a: 'Yes. Enterprise accounts can be billed via invoice or purchase order instead of card, alongside dedicated infrastructure and SLA guarantees.' },
    { q: 'What does Priority Support include?', a: 'Pro and Enterprise accounts get a faster response commitment and a direct line to our team, rather than a shared support queue.' },
];

const comparisonRows: { label: string; starter: string; pro: string; enterprise: string }[] = [
    { label: 'User Accounts', starter: 'Up to 3', pro: 'Up to 20', enterprise: 'Unlimited' },
    { label: 'AI Agents', starter: 'Up to 5', pro: 'Unlimited', enterprise: 'Custom Allocation' },
    { label: 'Business Domains', starter: 'Up to 2', pro: 'Up to 5', enterprise: 'Unlimited' },
    { label: 'Support', starter: 'Standard', pro: 'Priority', enterprise: 'Dedicated Infrastructure' },
    { label: 'ERP / API Integration', starter: 'Basic ERP Integration', pro: 'Full API Access', enterprise: 'Full API Access + Bespoke Integrations' },
    { label: 'Custom Workflows', starter: '—', pro: '✓', enterprise: '✓' },
    { label: 'SLA Guarantees', starter: '—', pro: '—', enterprise: '✓' },
    { label: 'On-premise Options', starter: '—', pro: '—', enterprise: '✓' },
];

export default function Pricing() {
    return (
        <main>
            <section className="section" style={{ paddingTop: '10rem' }}>
                <div className="container">
                    <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3rem)', textAlign: 'center', marginBottom: '4rem' }}>Predictable Pricing</h1>
                    {/* Pragmatic exception to the no-card-grids rule — a real pricing
                        page needs tier comparison. Pricing figures unchanged. */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                        <PricingCard tier="Starter" price="M 950" features={['Up to 3 user accounts', 'Up to 5 AI Agents', 'Access up to 2 business domains', 'Standard Support', 'Basic ERP Integration']} />
                        <PricingCard tier="Pro" price="M 4,750" features={['Up to 20 user accounts', 'Unlimited AI Agents', 'Access up to 5 business domains', 'Priority Support', 'Full API Access', 'Custom Workflows']} isFeatured />
                        <PricingCard tier="Enterprise" price="Custom" features={['Unlimited user accounts', 'Custom Agent Allocation', 'Unlimited business domains', 'Dedicated Infrastructure', 'SLA Guarantees', 'On-premise Options']} />
                    </div>
                </div>
            </section>
            <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="container">
                    <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', textAlign: 'center', marginBottom: '3rem' }}>Compare Plans</h2>
                    <div className="pricing-table-wrapper" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>Starter</th>
                                    <th className="featured-col">Pro</th>
                                    <th>Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row) => (
                                    <tr key={row.label}>
                                        <td>{row.label}</td>
                                        <td>{row.starter}</td>
                                        <td className="featured-col">{row.pro}</td>
                                        <td>{row.enterprise}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="container" style={{ maxWidth: '760px' }}>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', textAlign: 'center', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        {faqs.map((f) => (
                            <div key={f.q} style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
                                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.15rem', color: 'var(--text-main)' }}>{f.q}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.6 }}>{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
