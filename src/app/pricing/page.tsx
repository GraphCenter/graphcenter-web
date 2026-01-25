import PricingCard from "@/components/PricingCard";

export default function Pricing() {
    return (
        <main style={{ paddingTop: '8rem' }}>
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}>Predictable Pricing</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
                        <PricingCard tier="Starter" price="$49" features={['Up to 5 Agents', 'Standard Support', 'Basic ERP Integration']} />
                        <PricingCard tier="Pro" price="$249" features={['Unlimited Agents', 'Priority Support', 'Full API Access', 'Custom Workflows']} isFeatured />
                        <PricingCard tier="Enterprise" price="Custom" features={['Dedicated Infrastructure', 'SLA Guarantees', 'On-premise Options']} />
                    </div>
                </div>
            </section>
            <section className="section" style={{ background: 'var(--glass)', borderTop: '1px solid var(--border)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <div>
                            <h3 style={{ marginBottom: '0.5rem' }}>How do AI agents count?</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Each agent is a specialized AI worker assigned to a specific set of tools or data sources. You can scale your pool as your workflow complexity grows.</p>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '0.5rem' }}>Do you offer custom integrations?</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Yes! Our Enterprise tier includes bespoke development for proprietary systems and legacy ERP integrations.</p>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '0.5rem' }}>Can I cancel at any time?</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Absolutely. We offer flexible month-to-month billing with no long-term lock-in for Starter and Pro tiers.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
