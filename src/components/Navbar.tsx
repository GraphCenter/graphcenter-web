'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isActive = (path: string) => pathname === path;

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { href: '/about', label: 'About' },
        { href: '/services', label: 'Services' },
        { href: '/software', label: 'Software' },
        { href: '/domains', label: 'Domains' },
        { href: '/architecture', label: 'Architecture' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/trust', label: 'Trust' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <style dangerouslySetInnerHTML={{__html: `
                .navbar-fixed { position: fixed; top: 0; left:0; width: 100%; z-index: 50; padding: 20px 0; }
                .navbar-container { display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: 0 1.5rem; max-width: 1320px; margin: 0 auto; }
                .logo-wrapper { display: flex; align-items: center; gap: 10px; text-decoration: none; }
                .logo-text { font-family: 'Space Grotesk', 'Inter', sans-serif; font-size: 1.25rem; font-weight: 400; color: var(--text-main); }

                /* Floating Ash pill — the nav's signature container. Fully
                   round (200px) per the Ventriloc nav-pill radius role. */
                .nav-pill { background: var(--nav-bg); border-radius: var(--radius-pill); padding: 8px 8px; display: none; align-items: center; gap: 0.1rem; }

                .mobile-controls { display: flex; align-items: center; gap: 0.5rem; }
                .mobile-toggle { display: block; background: var(--nav-bg); border: none; cursor: pointer; padding: 0.6rem; border-radius: var(--radius-pill); transition: background 0.2s; }
                .mobile-toggle:hover { background: var(--nav-hover-bg); }

                .mobile-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(32,32,32,0.4); z-index: 40; }
                .mobile-panel { position: fixed; top: 0; right: 0; bottom: 0; width: 320px; max-width: 85%; background: var(--nav-panel-bg); border-left: 1px solid var(--border); z-index: 50; box-shadow: none; display: flex; flex-direction: column; transition: transform 0.3s ease; }
                .mobile-panel-header { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; border-bottom: 1px solid var(--border); }
                .mobile-nav-links { display: flex; flex-direction: column; padding: 1.5rem; gap: 0.5rem; }
                .mobile-nav-item { padding: 1rem; border-radius: 0px; font-weight: 400; font-size: 1.1rem; text-decoration: none; transition: all 0.2s; }
                .mobile-nav-item:hover { background: var(--nav-hover-bg); color: var(--text-main) !important; padding-left: 1.5rem; }

                /* The full desktop nav (logo + pill of 8 links + CTA) needs
                   real width to breathe; defer to the mobile panel until
                   1024px. */
                @media (min-width: 1024px) {
                    .nav-pill { display: flex; }
                    .mobile-controls { display: none !important; }
                    .mobile-overlay, .mobile-panel { display: none !important; }
                }
            `}} />
            <nav className="navbar-fixed">
                <div className="navbar-container">
                    <Link href="/" className="logo-wrapper">
                        <Image src="/graphcenter-logo.png" alt="GraphCenter" width={34} height={34} style={{ borderRadius: '0px' }} />
                        <span className="logo-text">GraphCenter</span>
                    </Link>

                    <div className="nav-pill">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={isActive(link.href) ? 'nav-link-active nav-link' : 'nav-link'}
                                style={{ fontSize: '13px', fontWeight: 500, whiteSpace: 'nowrap' }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Link href="/contact" className="btn-primary hide-on-mobile" style={{ textDecoration: 'none', padding: '0.65rem 1.15rem', whiteSpace: 'nowrap' }}>
                            Get Started
                        </Link>

                        {/* Mobile: menu button only */}
                        <div className="mobile-controls">
                            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
                                <Menu size={22} color="var(--text-main)" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <>
                    <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
                    <div className="mobile-panel">
                        <div className="mobile-panel-header">
                            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>
                                <Image src="/graphcenter-logo.png" alt="GraphCenter" width={26} height={26} style={{ borderRadius: '0px' }} />
                                <span className="logo-text" style={{ fontSize: '1.1rem' }}>GraphCenter</span>
                            </Link>
                            <button onClick={() => setMobileMenuOpen(false)} style={{ background: 'var(--nav-hover-bg)', border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '50%', display: 'flex' }}>
                                <X size={20} color="var(--text-muted)" />
                            </button>
                        </div>
                        <div className="mobile-nav-links">
                            {navLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="mobile-nav-item"
                                    style={{
                                        background: isActive(link.href) ? 'var(--nav-hover-bg)' : 'transparent',
                                        color: isActive(link.href) ? 'var(--text-main)' : 'var(--text-muted)',
                                        borderLeft: isActive(link.href) ? '4px solid var(--primary)' : '4px solid transparent'
                                    }}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div style={{ marginTop: '2rem' }}>
                                <Link href="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', padding: '1rem' }} onClick={() => setMobileMenuOpen(false)}>
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
