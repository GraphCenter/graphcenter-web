export default function Software() {
    return (
        <main style={{ paddingTop: '8rem' }}>
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius)' }}>
                            <h1 className="text-5xl font-black mb-6">Agentic AI <br /><span className="gradient-text">Frameworks</span></h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Our proprietary software framework enables the transition from static automation to autonomous ecosystems.
                                By integrating LangGraph with modern Vector Databases and RAG (Retrieval-Augmented Generation) patterns,
                                we ensure your AI digital workforce operates on a foundation of verifiable truth and robust logic.
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">⚖️</div>
                                    <div>
                                        <h4 className="font-bold">Scalability by Design</h4>
                                        <p className="text-sm text-gray-500">Architectures built to handle elastic workloads and growing organizational complexity without compromising on latency.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">👁️</div>
                                    <div>
                                        <h4 className="font-bold">Observability-First</h4>
                                        <p className="text-sm text-gray-500">Full transparency into agent reasoning and decision-making processes for enterprise-grade compliance and debugging.</p>
                                    </div>
                                </div>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ background: 'var(--primary)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>01</span>
                                    <strong>Reason & Plan:</strong> Agents analyze context and determine the best course of action using multi-step reasoning.
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ background: 'var(--primary)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>02</span>
                                    <strong>Execute Workflows:</strong> Seamless integration with corporate tools and legacy software to drive tangible outcomes.
                                </li>
                            </ul>
                        </div>

                        <div className="glass p-12 rounded-3xl border border-gray-100 text-center">
                            <div className="text-6xl mb-6">🤖</div>
                            <h3 className="text-2xl font-bold mb-4">The Agentic Core</h3>
                            <p className="text-gray-500 mb-8">Powering the next generation of autonomous enterprise ecosystems with verifiable intelligence.</p>
                            <div className="space-y-3">
                                <div className="p-4 bg-white/50 rounded-xl border border-blue-50 text-left text-sm">
                                    <strong>✓ LangGraph Integration</strong>
                                </div>
                                <div className="p-4 bg-white/50 rounded-xl border border-blue-50 text-left text-sm">
                                    <strong>✓ Vector-Driven Context</strong>
                                </div>
                                <div className="p-4 bg-white/50 rounded-xl border border-blue-50 text-left text-sm">
                                    <strong>✓ High-Velocity RAG</strong>
                                </div>
                            </div>
                            <button className="btn-primary w-full mt-8">Technical Whitepaper</button>
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
                            <p className="text-sm text-gray-600 leading-relaxed">End-to-end encryption with granular role-based access control (RBAC) over what data your agents can query and manipulate.</p>
                        </div>
                        <div className="glass hover-scale" style={{ padding: '2.5rem', borderRadius: 'var(--radius)', transition: 'transform 0.3s ease' }}>
                            <div className="text-4xl mb-6">🧠</div>
                            <h3 className="text-xl font-bold mb-3">Dynamic Memory</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Agents uniquely retain contextual memory across sessions and complex workflows, enabling highly personalized and accurate reasoning.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
