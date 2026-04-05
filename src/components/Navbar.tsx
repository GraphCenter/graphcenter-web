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
        { href: '/pricing', label: 'Pricing' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <style dangerouslySetInnerHTML={{__html: `
                .navbar-fixed { position: fixed; top: 0; left:0; width: 100%; z-index: 50; padding: 1rem 0; transition: all 0.3s ease; }
                .navbar-container { display: flex; justify-content: space-between; align-items: center; padding: 0 1rem; max-width: 1200px; margin: 0 auto; }
                .logo-wrapper { display: flex; align-items: center; gap: 10px; text-decoration: none; transition: transform 0.2s; }
                .logo-wrapper:hover { transform: scale(1.02); }
                .logo-text { font-size: 1.5rem; font-weight: 700; background: linear-gradient(90deg, #0052cc, #00b2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                
                .desktop-nav { display: none; }
                .mobile-toggle { display: block; background: #eff6ff; border: none; cursor: pointer; padding: 0.5rem; border-radius: 8px; transition: background 0.2s; }
                .mobile-toggle:hover { background: #e0f2fe; }
                
                .mobile-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 40; backdrop-filter: blur(4px); }
                .mobile-panel { position: fixed; top: 0; right: 0; bottom: 0; width: 320px; max-width: 85%; background: rgba(255, 255, 255, 0.98); z-index: 50; box-shadow: -5px 0 25px rgba(0,82,204,0.15); display: flex; flex-direction: column; transition: transform 0.3s ease; }
                .mobile-panel-header { display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; border-bottom: 1px solid #f0f0f0; }
                .mobile-nav-links { display: flex; flex-direction: column; padding: 1.5rem; gap: 0.5rem; }
                .mobile-nav-item { padding: 1rem; border-radius: 12px; font-weight: 600; font-size: 1.1rem; text-decoration: none; transition: all 0.2s; }
                .mobile-nav-item:hover { background: #eff6ff; color: #0052cc !important; padding-left: 1.5rem; }
                
                @media (min-width: 1024px) {
                    .desktop-nav { display: flex; gap: 1.5rem; align-items: center; }
                    .mobile-toggle { display: none; }
                    .mobile-overlay, .mobile-panel { display: none !important; }
                }
            `}} />
            <nav className="glass navbar-fixed">
                <div className="navbar-container">
                    <Link href="/" className="logo-wrapper">
                        <Image src="/chatbot-logo.png" alt="Logo" width={38} height={38} style={{ borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,82,204,0.2)' }} />
                        <span className="logo-text">GraphCenter</span>
                    </Link>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        {/* Desktop Navigation */}
                        <div className="desktop-nav">
                            {navLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={isActive(link.href) ? 'nav-link-active nav-link' : 'nav-link'}
                                    style={{ fontWeight: 600, color: '#374151' }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none', marginLeft: '1rem', padding: '0.6rem 1.5rem' }}>
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu">
                            <Menu size={24} color="#0052cc" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <>
                    <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
                    <div className="mobile-panel">
                        <div className="mobile-panel-header">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Image src="/chatbot-logo.png" alt="Logo" width={28} height={28} style={{ borderRadius: '6px' }} />
                                <span className="logo-text" style={{ fontSize: '1.25rem' }}>GraphCenter</span>
                            </div>
                            <button onClick={() => setMobileMenuOpen(false)} style={{ background: '#f3f4f6', border: 'none', cursor: 'pointer', padding: '8px', borderRadius: '50%', display: 'flex' }}>
                                <X size={20} color="#4b5563" />
                            </button>
                        </div>
                        <div className="mobile-nav-links">
                            {navLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="mobile-nav-item"
                                    style={{ 
                                        background: isActive(link.href) ? 'linear-gradient(90deg, #eff6ff, transparent)' : 'transparent', 
                                        color: isActive(link.href) ? '#0052cc' : '#4b5563',
                                        borderLeft: isActive(link.href) ? '4px solid #0052cc' : '4px solid transparent'
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
