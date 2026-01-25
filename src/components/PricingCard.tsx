export default function PricingCard({ tier, price, features, isFeatured = false }: { tier: string, price: string, features: string[], isFeatured?: boolean }) {
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
