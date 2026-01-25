function FeatureCard({ title, description, icon }: { title: string, description: string, icon: string }) {
    return (
        <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius)', transition: 'transform 0.3s ease' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{icon}</div>
            <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{description}</p>
        </div>
    );
}

export default function Services() {
    return (
        <main style={{ paddingTop: '8rem' }}>
            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-black mb-6">Expertise for the Digital Workforce</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our architectural services are designed to support complex enterprise requirements,
                            ensuring stability while enabling rapid innovation in the Agentic AI era.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                        <FeatureCard
                            title="Modern Systems Architecture"
                            description="Strategic design of Event-Driven, Hexagonal, and Microservices architectures tailored for scalability and resilience."
                            icon="🏗️"
                        />
                        <FeatureCard
                            title="Cloud & Data Engineering"
                            description="High-velocity data pipelines and cloud-native infrastructure optimized for real-time processing and distributed intelligence."
                            icon="⚡"
                        />
                        <FeatureCard
                            title="Agentic Software Development"
                            description="Custom, integration-first software development that empowers AI agents to interact with your existing corporate landscape."
                            icon="🛠️"
                        />
                    </div>

                    <div className="glass p-12 rounded-3xl">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Architectural Process</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 font-bold text-blue-600">01</div>
                                <h4 className="font-bold mb-2">Discovery</h4>
                                <p className="text-sm text-gray-500">Deep dive into current bottlenecks and future business goals.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 font-bold text-blue-600">02</div>
                                <h4 className="font-bold mb-2">Design</h4>
                                <p className="text-sm text-gray-500">Creating high-fidelity architectural blueprints and roadmaps.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 font-bold text-blue-600">03</div>
                                <h4 className="font-bold mb-2">Validation</h4>
                                <p className="text-sm text-gray-500">Rigorous stress-testing and architectural review of the proposed system.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 font-bold text-blue-600">04</div>
                                <h4 className="font-bold mb-2">Continuity</h4>
                                <p className="text-sm text-gray-500">Long-term implementation support and architectural evolution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
