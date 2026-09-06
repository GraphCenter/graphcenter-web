import type { ReactNode } from 'react';

interface SplitLayoutProps {
    left: ReactNode;
    right: ReactNode;
    /** Flips visual order on desktop (right renders first) — used to create the zigzag rhythm between alternating sections. */
    reverse?: boolean;
    gap?: number;
    /** Vertical alignment of the two columns. */
    align?: 'center' | 'start';
}

/**
 * The two-column asymmetric layout design.md's "zigzag" composition depends
 * on. Replaces the near-identical hand-copied `gridTemplateColumns:
 * 'repeat(auto-fit, minmax(min(400px,100%),1fr))'` pattern duplicated across
 * software/page.tsx, about/page.tsx, and page.tsx.
 */
export default function SplitLayout({ left, right, reverse = false, gap = 96, align = 'center' }: SplitLayoutProps) {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))',
                gap: `${gap}px`,
                alignItems: align === 'center' ? 'center' : 'start',
            }}
        >
            <div style={{ order: reverse ? 2 : 1 }}>{left}</div>
            <div style={{ order: reverse ? 1 : 2 }}>{right}</div>
        </div>
    );
}
