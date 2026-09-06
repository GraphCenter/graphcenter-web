'use client';

import Link from 'next/link';


export default function PricingCard({ tier, price, features, isFeatured = false }: { tier: string, price: string, features: string[], isFeatured?: boolean }) {
    const ctaLabel = tier === 'Enterprise' ? 'Contact Sales' : 'Get Started';
    const ctaHref  = `/contact?plan=${encodeURIComponent(tier)}`;

    const btnStyle: React.CSSProperties = {
        display: 'block',
        width: '100%',
        padding: '0.8rem',
        borderRadius: '0px',
        fontWeight: 500,
        textAlign: 'center',
        textDecoration: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'opacity 0.2s ease',
        border: isFeatured ? '1px solid var(--text-main)' : '1px solid var(--text-main)',
        ...(isFeatured
            ? { background: 'var(--text-main)', color: 'white' }
            : { background: 'transparent', color: 'var(--text-main)' }),
    };

    // Pragmatic exception to the no-cards rule (a pricing page genuinely
    // needs tier comparison) — restyled flat: no shadow, the signature
    // asymmetric radius, and a Deep Blue border used only as a highlight
    // on the featured tier — never as a button fill, per design1.md.
    return (
        <div style={{
            padding: '3rem 2rem',
            borderRadius: 'var(--radius-asymmetric)',
            textAlign: 'center',
            border: isFeatured ? '1px solid var(--primary)' : '1px solid var(--border)',
            background: '#ffffff',
            boxShadow: 'none',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: isFeatured ? 'var(--primary)' : 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.025em' }}>{tier}</div>
            <div className="text-heading-lg" style={{ marginBottom: '2rem', color: 'var(--text-main)' }}>
                {price}
                <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
                    {price !== 'Custom' ? '/mo' : ''}
                </span>
            </div>
            <ul style={{ listStyle: 'none', marginBottom: '2.5rem', textAlign: 'left', paddingLeft: '1rem', flex: 1 }}>
                {features.map((f, i) => (
                    <li key={i} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                        <span style={{ color: 'var(--primary)' }}>✓</span> {f}
                    </li>
                ))}
            </ul>
            <Link href={ctaHref} style={btnStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
            >
                {ctaLabel}
            </Link>
        </div>
    );
}

