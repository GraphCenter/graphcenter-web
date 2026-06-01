import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
            <div className="container">
                <Link href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1.5rem', textDecoration: 'none' }}>
                    <Image
                        src="/chatbot-logo.png"
                        alt="GraphCenter Logo"
                        width={30}
                        height={30}
                        style={{
                            borderRadius: '10px',
                            boxShadow: '0 2px 6px rgba(0, 82, 204, 0.08)'
                        }}
                    />
                    <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)' }}>GraphCenter</span>
                </Link>
                <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                    Our core expertise spans robust systems architecture, high-velocity cloud and data engineering, and bespoke software development designed for seamless integration.
                    By deploying specialized AI agents as a digital workforce, we ensure your technology is built for the scale of thought and as ambitious as your vision.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary)', flexWrap: 'wrap' }}>
                    <Link href="/about" className="nav-link">About</Link>
                    <Link href="/services" className="nav-link">Services</Link>
                    <Link href="/software" className="nav-link">Software</Link>
                    <Link href="/domains" className="nav-link">Platform Domains</Link>
                    <Link href="/architecture" className="nav-link">System Architecture</Link>
                    <Link href="/pricing" className="nav-link">Pricing</Link>
                    <Link href="/contact" className="nav-link">Contact</Link>
                </div>
                <p style={{ color: 'var(--text-muted)' }}>&copy; 2026 GraphCenter Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}
