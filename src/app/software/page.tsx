export default function Software() {
    return (
        <main style={{ paddingTop: '8rem' }}>
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
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
        </main>
    );
}
