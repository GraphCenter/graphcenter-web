import Link from 'next/link';
import type { ReactNode, CSSProperties } from 'react';

interface ButtonProps {
    href?: string;
    variant?: 'primary' | 'ghost';
    size?: 'default' | 'large';
    children: ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit';
    className?: string;
    style?: CSSProperties;
}

/**
 * The two button dialects design1.md allows: a filled Graphite button with
 * sharp 0px corners (primary) and a Graphite-outlined ghost button
 * (secondary). The logo blues are never used as a button fill.
 */
export default function Button({ href, variant = 'primary', size = 'default', children, onClick, type = 'button', className, style }: ButtonProps) {
    const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
    const sizeClass = size === 'large' ? 'btn-cta' : '';
    const combinedClassName = [baseClass, sizeClass, className].filter(Boolean).join(' ');

    if (href) {
        return (
            <Link href={href} className={combinedClassName} style={{ textDecoration: 'none', ...style }}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClassName} style={style}>
            {children}
        </button>
    );
}
