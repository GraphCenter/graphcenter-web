import Image from 'next/image';
import Link from 'next/link';

const FOOTER_COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
    {
        title: 'Product',
        links: [
            { href: '/services', label: 'Services' },
            { href: '/software', label: 'Software' },
            { href: '/domains', label: 'Domains' },
            { href: '/architecture', label: 'Architecture' },
            { href: '/pricing', label: 'Pricing' },
        ],
    },
    {
        title: 'Company',
        links: [
            { href: '/about', label: 'About' },
            { href: '/investors', label: 'Investors' },
            { href: '/contact', label: 'Contact' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { href: '/resources', label: 'Resources' },
            { href: '/whitepaper', label: 'Technical Whitepaper' },
            { href: '/faq', label: 'FAQ' },
            { href: '/trust', label: 'Trust & Security' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { href: '/privacy', label: 'Privacy Policy' },
            { href: '/terms', label: 'Terms of Service' },
        ],
    },
];

export default function Footer() {
    return (
        <footer style={{ padding: '4rem 0 2rem', borderTop: '1px solid var(--border)' }}>
            <style dangerouslySetInnerHTML={{ __html: `
                .footer-grid { display: grid; grid-template-columns: 1.6fr repeat(4, 1fr); gap: 2.5rem; margin-bottom: 3rem; }
                .footer-col h4 { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-tertiary); margin-bottom: 1rem; }
                .footer-col a { display: block; width: fit-content; padding: 0.25rem 0; margin: 0 -0.25rem; padding-left: 0.25rem; padding-right: 0.25rem; border-radius: 4px; font-size: 0.9rem; }
                .footer-bottom { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding-top: 2rem; border-top: 1px solid var(--border); }
                @media (max-width: 900px) {
                    .footer-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 560px) {
                    .footer-grid { grid-template-columns: 1fr; }
                }
            `}} />
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem', textDecoration: 'none' }}>
                            <Image
                                src="/graphcenter-logo.png"
                                alt="GraphCenter Logo"
                                width={30}
                                height={30}
                                style={{ borderRadius: '10px' }}
                            />
                            <span style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--text-main)' }}>GraphCenter</span>
                        </Link>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '320px', lineHeight: 1.6 }}>
                            GraphCenter is the agentic control plane for vertical applications. One platform &mdash; GraphControl AI &mdash; turns natural language into working software behind a hard safety boundary, and powers a portfolio of consumer and enterprise products.
                        </p>
                    </div>

                    {FOOTER_COLUMNS.map((col) => (
                        <div className="footer-col" key={col.title}>
                            <h4>{col.title}</h4>
                            {col.links.map((link) => (
                                <Link key={link.href} href={link.href} className="nav-link">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="footer-bottom">
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>&copy; 2026 GraphCenter. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
