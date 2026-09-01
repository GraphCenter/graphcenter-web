import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
            <div className="container">
                <Link href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1.5rem', textDecoration: 'none' }}>
                    <Image
                        src="/graphcenter-logo.png"
                        alt="GraphCenter Logo"
                        width={30}
                        height={30}
                        style={{ objectFit: 'contain' }}
                    />
                    <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)' }}>GraphCenter</span>
                </Link>
                <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                    GraphCenter is the agentic control plane for vertical applications. One platform &mdash; GraphControl AI &mdash;
                    turns natural language into working software behind a hard safety boundary, and powers a portfolio of consumer
                    and enterprise products. The same engine ships to third-party apps under &ldquo;Powered by GraphControl&rdquo;.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', flexWrap: 'wrap' }}>
                    <Link href="/about" className="nav-link">About</Link>
                    <Link href="/services" className="nav-link">Services</Link>
                    <Link href="/software" className="nav-link">Software</Link>
                    <Link href="/domains" className="nav-link">Domains</Link>
                    <Link href="/architecture" className="nav-link">Architecture</Link>
                    <Link href="/pricing" className="nav-link">Pricing</Link>
                    <Link href="/trust" className="nav-link">Trust</Link>
                    <Link href="/contact" className="nav-link">Contact</Link>
                </div>
                <p style={{ color: 'var(--text-muted)' }}>&copy; 2026 GraphCenter. All rights reserved.</p>
            </div>
        </footer>
    );
}
