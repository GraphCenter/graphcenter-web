import type { ReactNode, CSSProperties } from 'react';

interface SectionProps {
    children: ReactNode;
    eyebrow?: string;
    className?: string;
    style?: CSSProperties;
    /** 'default' = the full spacious 60-120px rhythm; 'tight' = a smaller gap for lighter-weight content. */
    spacing?: 'default' | 'tight';
}

/**
 * Wraps the repeated `<section className="section"><div className="container">`
 * pattern used across every page, standardizing the new spacious vertical
 * rhythm (design.md: 60-120px section gaps) instead of a flat 10rem
 * regardless of content weight.
 */
export default function Section({ children, eyebrow, className, style, spacing = 'default' }: SectionProps) {
    const padding = spacing === 'tight' ? '4rem 0' : undefined; // 'default' falls back to globals.css's .section rule
    return (
        <section className={['section', className].filter(Boolean).join(' ')} style={{ ...(padding ? { padding } : {}), ...style }}>
            <div className="container">
                {eyebrow && <span className="section-label">{eyebrow}</span>}
                {children}
            </div>
        </section>
    );
}
