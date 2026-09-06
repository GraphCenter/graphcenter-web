import Section from '@/components/ui/Section';
import SplitLayout from '@/components/ui/SplitLayout';
import Button from '@/components/ui/Button';
import AppDownloadBadges from '@/components/AppDownloadBadges';

function IconRow({ icon, title, body }: { icon: string; title: string; body: string }) {
    return (
        <div style={{ display: 'flex', gap: '1.25rem' }}>
            <div style={{ flexShrink: 0, width: '3rem', height: '3rem', borderRadius: '12px', background: 'rgba(0,82,204,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>{icon}</div>
            <div>
                <h4 style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>{title}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>{body}</p>
            </div>
        </div>
    );
}

function ChecklistPanel({ icon, title, body, items }: { icon: string; title: string; body: string; items: string[] }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{title}</h3>
            <p style={{ color: 'var(--text-tertiary)', marginBottom: '2rem', lineHeight: 1.6 }}>{body}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {items.map((item) => (
                    <div key={item} className="card-asymmetric" style={{ padding: '1rem', textAlign: 'left', fontSize: '14px', color: 'var(--text-main)' }}>
                        <span style={{ color: 'var(--primary)' }}>✓</span> {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Software() {
    return (
        <main>
            <Section spacing="tight" style={{ paddingTop: '10rem' }}>
                <SplitLayout
                    align="start"
                    left={
                        <div>
                            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', marginBottom: '1.5rem' }}>GraphControl AI <br /><span className="gradient-text">the control plane</span></h1>
                            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                                One agentic platform sits under every product. Each page registers its live data and available actions; you ask for a change in plain language; the agent proposes it with a full before/after preview and commits only on your confirmation &mdash; and only ever within the allow-list a developer declared.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '3rem' }}>
                                <IconRow icon="📋" title="Allow-list by design" body="Every data source and action is declared up front and independently re-validated at execution time. The boundary is enforced, not prompted." />
                                <IconRow icon="👁️" title="Observability-first" body="Full transparency into agent reasoning and actions, logged and reviewable in the SUPER_ADMIN console for compliance and debugging." />
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-muted)' }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <span style={{ background: 'var(--primary)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', flexShrink: 0, marginTop: '2px' }}>01</span>
                                    <span style={{ flex: 1, minWidth: 0 }}><strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>Propose:</strong> the agent reasons over the page&rsquo;s registered context and drafts the change as a previewed diff.</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <span style={{ background: 'var(--primary)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', flexShrink: 0, marginTop: '2px' }}>02</span>
                                    <span style={{ flex: 1, minWidth: 0 }}><strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>Confirm:</strong> you accept or discard. Only on accept is anything committed, through the same validated registry.</span>
                                </li>
                            </ul>
                        </div>
                    }
                    right={
                        <div>
                            <ChecklistPanel
                                icon="🤖"
                                title="The Agentic Core"
                                body="The same engine, metered per use, powers the portfolio and ships to third-party apps as &ldquo;Powered by GraphControl&rdquo;."
                                items={['Allow-list registry + re-validation', 'Before / after preview on every change', 'Agent-generated dynamic UI']}
                            />
                            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Button href="/architecture" variant="primary">See the Architecture</Button>
                                <Button href="/whitepaper" variant="ghost">Technical Whitepaper</Button>
                            </div>
                        </div>
                    }
                />
            </Section>

            <Section eyebrow="Built In">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', marginBottom: '1rem' }}>Enterprise-Grade Features</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '520px', margin: '0 auto' }}>Built from the ground up for security, compliance, and limitless extensibility.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem' }}>
                    <div>
                        <div style={{ fontSize: '2.25rem', marginBottom: '1.25rem' }}>🔌</div>
                        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>Seamless Integrations</h3>
                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>Connects directly into your existing ERPs, CRMs, and custom databases via standardized, secure API gateways.</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.25rem', marginBottom: '1.25rem' }}>🔒</div>
                        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>Zero-Trust Security</h3>
                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>Three real roles: USER accounts see only their granted domains, ADMIN manages users and domain access within their own organization, and SUPER_ADMIN gets platform-wide control &mdash; organizations, users, and a live system health &amp; agent-log console.</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.25rem', marginBottom: '1.25rem' }}>🧠</div>
                        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--text-main)' }}>Dynamic Memory</h3>
                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>Agents uniquely retain contextual memory across sessions and complex workflows, enabling highly personalized and accurate reasoning.</p>
                    </div>
                </div>
            </Section>

            <Section>
                <SplitLayout
                    align="start"
                    reverse
                    left={
                        <div>
                            <ChecklistPanel
                                icon="💬"
                                title="Conversational Control Plane"
                                body="An embedded assistant that doesn't just answer questions — it proposes changes, shows you the before/after, and only commits when you say go."
                                items={['Live Before/After Preview', 'Agent-Generated Dynamic UI', 'Voice & Text Interaction']}
                            />
                        </div>
                    }
                    right={
                        <div>
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1.5rem' }}>Assistants That <br /><span className="gradient-text">Act, Not Just Chat</span></h2>
                            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                                Every page in the platform registers its live data and available actions with the embedded assistant. Ask it to make a change and it proposes the action with a full preview of the resulting state &mdash; you confirm or discard before anything is committed.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                                <IconRow icon="🖼️" title="Renders Its Own UI" body="Beyond text, the assistant can render live charts, metric cards, and interactive components directly into the conversation, wired to real platform actions." />
                                <IconRow icon="📱" title="Native Mobile Companion" body="GraphControl, our native Android &amp; iOS companion app, brings the same assistant, biometric app-lock, and real-time notifications to the field — plus a domain hub that surfaces every business unit a user can reach, full-screen detail views in place of cramped popups, and the same SUPER_ADMIN console (system health, agent logs, organization management) available on web." />
                            </div>
                            <AppDownloadBadges />
                        </div>
                    }
                />
            </Section>
        </main>
    );
}
