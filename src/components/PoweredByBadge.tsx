import Image from 'next/image';

interface PoweredByBadgeProps {
    label?: string;
    className?: string;
}

/**
 * Small cross-product attribution mark — "Powered by GraphControl" — the OEM
 * mark that also ships inside the portfolio apps (HomeAuto, Moeletsi, Softlearn)
 * and any third-party app embedding the platform. Used on loading/splash
 * surfaces and legal pages only (not the global nav/footer, which already
 * carries the GraphCenter identity on its own).
 */
export default function PoweredByBadge({ label = 'GraphControl', className }: PoweredByBadgeProps) {
    return (
        <div
            className={className}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: 0.7 }}
        >
            <Image
                src="/graphcenter-logo.png"
                alt={`${label} logo`}
                width={18}
                height={18}
                style={{ borderRadius: '5px' }}
            />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                Powered by {label}
            </span>
        </div>
    );
}
