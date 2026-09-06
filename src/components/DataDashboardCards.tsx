/**
 * The hero's actual imagery per design1.md — a cluster of overlapping "Data
 * Dashboard Cards" (white, rounded, simple charts with the logo's blue accent
 * strokes) in place of any generative/particle visual. Each card drifts
 * gently on its own cycle so the hero stays alive at rest.
 */
export default function DataDashboardCards() {
    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: '460px', height: '400px', marginLeft: 'auto' }}>
            {/* Line graph card */}
            <div
                className="float-card"
                style={{ position: 'absolute', top: 0, left: 0, width: '80%', zIndex: 1, animationDuration: '7s' }}
            >
                <div className="card-asymmetric" style={{ padding: '24px', borderRadius: '20px' }}>
                    <span className="text-caption" style={{ color: 'var(--text-tertiary)' }}>Platform Throughput</span>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '28px', marginTop: '4px', marginBottom: '12px' }}>
                        2.4M <span style={{ fontSize: '14px', color: 'var(--primary)' }}>req/day</span>
                    </div>
                    <svg viewBox="0 0 200 70" width="100%" height="70" fill="none">
                        <polyline
                            points="0,55 25,48 50,50 75,32 100,38 125,20 150,24 175,8 200,14"
                            stroke="var(--primary)"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <polyline
                            points="0,60 25,58 50,52 75,54 100,44 125,46 150,34 175,36 200,26"
                            stroke="var(--secondary)"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity="0.6"
                        />
                    </svg>
                </div>
            </div>

            {/* Profitability ring card */}
            <div
                className="float-card"
                style={{ position: 'absolute', top: '150px', left: '10px', width: '56%', zIndex: 2, animationDuration: '8.5s', animationDelay: '0.6s' }}
            >
                <div className="card-asymmetric" style={{ padding: '20px', borderRadius: '20px' }}>
                    <span className="text-caption" style={{ color: 'var(--text-tertiary)' }}>System Uptime</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '10px' }}>
                        <svg width="72" height="72" viewBox="0 0 72 72">
                            <circle cx="36" cy="36" r="30" stroke="var(--border)" strokeWidth="7" fill="none" />
                            <circle
                                cx="36"
                                cy="36"
                                r="30"
                                stroke="var(--primary)"
                                strokeWidth="7"
                                fill="none"
                                strokeDasharray={2 * Math.PI * 30}
                                strokeDashoffset={2 * Math.PI * 30 * (1 - 0.994)}
                                strokeLinecap="round"
                                transform="rotate(-90 36 36)"
                            />
                        </svg>
                        <div>
                            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px' }}>99.4%</div>
                            <div className="text-caption" style={{ color: 'var(--text-tertiary)' }}>last 90 days</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stat card */}
            <div
                className="float-card"
                style={{ position: 'absolute', bottom: 0, right: 0, width: '54%', zIndex: 3, animationDuration: '6.5s', animationDelay: '1.2s' }}
            >
                <div className="card-asymmetric" style={{ padding: '20px', borderRadius: '20px' }}>
                    <span className="text-caption" style={{ color: 'var(--text-tertiary)' }}>Services Orchestrated</span>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '30px', marginTop: '4px' }}>12+</div>
                    <div style={{ display: 'flex', gap: '4px', marginTop: '12px', alignItems: 'flex-end', height: '28px' }}>
                        {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
                            <div
                                key={i}
                                style={{
                                    width: '6px',
                                    height: `${h}%`,
                                    background: i % 3 === 0 ? 'var(--secondary)' : 'var(--primary)',
                                    opacity: i % 3 === 0 ? 0.7 : 1,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
