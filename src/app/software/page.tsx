export default function Software() {
    return (
        <main className="pt-20 md:pt-32">
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius)' }}>
                            <h1 className="font-black mb-6" style={{ fontSize: 'clamp(2rem, 9vw, 3rem)' }}>GraphControl AI <br /><span className="gradient-text">the control plane</span></h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                One agentic platform sits under every product. Each page registers its live data and available
                                actions; you ask for a change in plain language; the agent proposes it with a full before/after
                                preview and commits only on your confirmation &mdash; and only ever within the allow-list a
                                developer declared.
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">📋</div>
                                    <div>
                                        <h4 className="font-bold">Allow-list by design</h4>
                                        <p className="text-sm text-gray-500">Every data source and action is declared up front and independently re-validated at execution time. The boundary is enforced, not prompted.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">👁️</div>
                                    <div>
                                        <h4 className="font-bold">Observability-first</h4>
                                        <p className="text-sm text-gray-500">Full transparency into agent reasoning and actions, logged and reviewable in the SUPER_ADMIN console for compliance and debugging.</p>
                                    </div>
                                </div>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <span style={{ background: 'var(--primary)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', flexShrink: 0, marginTop: '2px' }}>01</span>
                                    <span style={{ flex: 1, minWidth: 0 }}><strong>Propose:</strong> the agent reasons over the page&apos;s registered context and drafts the change as a previewed diff.</span>
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <span style={{ background: 'var(--primary)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', flexShrink: 0, marginTop: '2px' }}>02</span>
                                    <span style={{ flex: 1, minWidth: 0 }}><strong>Confirm:</strong> you accept or discard. Only on accept is anything committed, through the same validated registry.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="glass p-12 rounded-3xl border border-gray-100 text-center">
                            <div className="text-6xl mb-6">🤖</div>
                            <h3 className="text-2xl font-bold mb-4">The Agentic Core</h3>
                            <p className="text-gray-500 mb-8">The same engine, metered per use, powers the portfolio and ships to third-party apps as &ldquo;Powered by GraphControl&rdquo;.</p>
                            <div className="space-y-3">
                                <div className="p-4 bg-white/50 rounded-xl border border-blue-50 text-left text-sm">
                                    <strong>✓ Allow-list registry + re-validation</strong>
                                </div>
                                <div className="p-4 bg-white/50 rounded-xl border border-blue-50 text-left text-sm">
                                    <strong>✓ Before / after preview on every change</strong>
                                </div>
                                <div className="p-4 bg-white/50 rounded-xl border border-blue-50 text-left text-sm">
                                    <strong>✓ Agent-generated dynamic UI</strong>
                                </div>
                            </div>
                            <a href="/architecture" className="btn-primary w-full mt-8" style={{ display: 'block', textDecoration: 'none' }}>See the architecture</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Enterprise-Grade Features</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Built from the ground up for security, compliance, and limitless extensibility.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass hover-scale" style={{ padding: '2.5rem', borderRadius: 'var(--radius)', transition: 'transform 0.3s ease' }}>
                            <div className="text-4xl mb-6">🔌</div>
                            <h3 className="text-xl font-bold mb-3">Seamless Integrations</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Connects directly into your existing ERPs, CRMs, and custom databases via standardized, secure API gateways.</p>
                        </div>
                        <div className="glass hover-scale" style={{ padding: '2.5rem', borderRadius: 'var(--radius)', transition: 'transform 0.3s ease' }}>
                            <div className="text-4xl mb-6">🔒</div>
                            <h3 className="text-xl font-bold mb-3">Zero-Trust Security</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Three real roles: USER accounts see only their granted domains, ADMIN manages users and domain access within their own organization, and SUPER_ADMIN gets platform-wide control &mdash; organizations, users, and a live system health &amp; agent-log console.</p>
                        </div>
                        <div className="glass hover-scale" style={{ padding: '2.5rem', borderRadius: 'var(--radius)', transition: 'transform 0.3s ease' }}>
                            <div className="text-4xl mb-6">🧠</div>
                            <h3 className="text-xl font-bold mb-3">Dynamic Memory</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Agents uniquely retain contextual memory across sessions and complex workflows, enabling highly personalized and accurate reasoning.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius)' }}>
                            <h2 className="text-4xl font-black mb-6">Assistants That <br /><span className="gradient-text">Act, Not Just Chat</span></h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Every page in the platform registers its live data and available actions with the embedded assistant. Ask it to make a change and it proposes the action with a full preview of the resulting state &mdash; you confirm or discard before anything is committed.
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">🖼️</div>
                                    <div>
                                        <h4 className="font-bold">Renders Its Own UI</h4>
                                        <p className="text-sm text-gray-500">Beyond text, the assistant can render live charts, metric cards, and interactive components directly into the conversation, wired to real platform actions.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">📱</div>
                                    <div>
                                        <h4 className="font-bold">Native Mobile Companion</h4>
                                        <p className="text-sm text-gray-500">GraphControl, our native Android &amp; iOS companion app, brings the same assistant, biometric app-lock, and real-time notifications to the field &mdash; plus a domain hub that surfaces every business unit a user can reach, full-screen detail views in place of cramped popups, and the same SUPER_ADMIN console (system health, agent logs, organization management) available on web.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass p-12 rounded-3xl border border-gray-100 text-center">
                            <div className="text-6xl mb-6">💬</div>
                            <h3 className="text-2xl font-bold mb-4">Conversational Control Plane</h3>
                            <p className="text-gray-500 mb-8">An embedded assistant that doesn&apos;t just answer questions &mdash; it proposes changes, shows you the before/after, and only commits when you say go.</p>
                            <div className="space-y-3">
                                <div className="p-4 bg-white/50 rounded-xl border border-blue-50 text-left text-sm">
                                    <strong>✓ Live Before/After Preview</strong>
                                </div>
                                <div className="p-4 bg-white/50 rounded-xl border border-blue-50 text-left text-sm">
                                    <strong>✓ Agent-Generated Dynamic UI</strong>
                                </div>
                                <div className="p-4 bg-white/50 rounded-xl border border-blue-50 text-left text-sm">
                                    <strong>✓ Voice &amp; Text Interaction</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
