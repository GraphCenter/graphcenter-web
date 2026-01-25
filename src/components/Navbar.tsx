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
            <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, padding: '0.75rem 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                        <Image
                            src="/chatbot-logo.png"
                            alt="GraphCenter Logo"
                            width={36}
                            height={36}
                            className="w-8 h-8 sm:w-10 sm:h-10"
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 2px 8px rgba(0, 82, 204, 0.08)',
                                transition: 'all 0.3s ease'
                            }}
                        />
                        <span style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--primary)' }} className="sm:text-xl md:text-2xl">
                            GraphCenter
                        </span>
                    </Link>

                    <div style={{ display: 'flex', gap: '0.5rem', fontWeight: 500, alignItems: 'center' }}>
                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex lg:gap-3 xl:gap-4">
                            {navLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`nav-link text-sm xl:text-base ${isActive(link.href) ? 'nav-link-active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Get Started Button */}
                        <Link
                            href="/contact"
                            className="hidden lg:inline-block btn-primary text-sm xl:text-base"
                            style={{ padding: '0.5rem 1.25rem', textDecoration: 'none', marginLeft: '0.75rem' }}
                        >
                            Get Started
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
                            aria-label="Toggle menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-blue-600" />
                            ) : (
                                <Menu className="w-6 h-6 text-blue-600" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Slide-in Menu */}
            {mobileMenuOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Menu Panel */}
                    <div
                        className="fixed top-0 left-0 h-full w-72 sm:w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden"
                        style={{ paddingTop: '5rem' }}
                    >
                        <div className="flex flex-col p-6 space-y-3 overflow-y-auto h-full">
                            {navLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-base sm:text-lg font-semibold p-3 sm:p-4 rounded-xl transition-all ${isActive(link.href)
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="btn-primary text-center py-4 rounded-xl mt-6"
                                style={{ textDecoration: 'none' }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
