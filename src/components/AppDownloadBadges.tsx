'use client';

import { useState } from 'react';
import { Apple, PlayCircle, Smartphone } from 'lucide-react';

const STORES = [
    { id: 'ios', label: 'App Store', sublabel: 'iOS', Icon: Apple },
    { id: 'android', label: 'Google Play', sublabel: 'Android', Icon: PlayCircle },
    { id: 'harmony', label: 'AppGallery', sublabel: 'HarmonyOS', Icon: Smartphone },
];

/**
 * GraphControl isn't published to any store yet — every badge here shows a
 * brief "Coming soon" instead of linking out, per design.
 */
export default function AppDownloadBadges() {
    const [active, setActive] = useState<string | null>(null);

    const handleClick = (id: string) => {
        setActive(id);
        window.setTimeout(() => {
            setActive((current) => (current === id ? null : current));
        }, 2000);
    };

    return (
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            {STORES.map(({ id, label, sublabel, Icon }) => (
                <div key={id} style={{ position: 'relative' }}>
                    <button
                        type="button"
                        onClick={() => handleClick(id)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '0.55rem 0.9rem',
                            border: '1px solid var(--text-main)',
                            borderRadius: '0px',
                            background: 'transparent',
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                        }}
                    >
                        <Icon size={20} color="var(--text-main)" />
                        <span style={{ textAlign: 'left', lineHeight: 1.2 }}>
                            <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>{sublabel}</span>
                            <span style={{ display: 'block', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-main)' }}>{label}</span>
                        </span>
                    </button>

                    {active === id && (
                        <span
                            style={{
                                position: 'absolute',
                                bottom: 'calc(100% + 8px)',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'var(--text-main)',
                                color: '#ffffff',
                                fontSize: '0.75rem',
                                fontWeight: 500,
                                padding: '0.35rem 0.7rem',
                                borderRadius: '4px',
                                whiteSpace: 'nowrap',
                                zIndex: 5,
                            }}
                        >
                            Coming soon
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}
