'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
    return (
        <main className="overflow-hidden">
            {/* Hero Section */}
            <section style={{ paddingTop: '8rem', paddingBottom: '3rem' }} className="md:pt-48 md:pb-20">
                <div className="container">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-5 py-2 rounded-xl bg-blue-50 text-blue-600 font-semibold text-xs uppercase tracking-widest mb-6 border border-blue-100">
                                Our Mission
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight px-4">
                                Architecting the <br />
                                <span className="gradient-text">Next Evolution</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12 px-4">
                                GraphCenter was founded on a singular principle: that the transition to AI-native enterprise requires
                                more than just algorithms—it requires a fundamental reimagining of systems architecture.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section style={{ paddingBottom: '4rem' }} className="md:pb-24">
                <div className="container">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
                            {/* Left Column - Philosophy */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius)' }}
                            >
                                <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6 leading-tight">The "Scale of Thought"</h2>
                                <p className="text-gray-600 text-base leading-relaxed mb-5">
                                    Modern business moves at the speed of information, but intelligence has traditionally been bottlenecked by human capacity.
                                    We build for the "Scale of Thought" — an architectural standard where digital systems can reason, plan, and
                                    orchestrate complex workflows with the same depth and strategic intent as your best employees.
                                </p>
                                <p className="text-gray-600 text-base leading-relaxed mb-8">
                                    By bridging the gap between static automation and Agentic AI, we empower organizations to thrive in
                                    an era of distributed intelligence.
                                </p>
                                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl border border-blue-200">
                                    <p className="text-blue-900 font-semibold text-base italic">
                                        "Architecture is the foundation through which enterprise intelligence flows and scales."
                                    </p>
                                </div>
                            </motion.div>

                            {/* Right Column - Core Values */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius)' }}
                            >
                                <h3 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8">Core Architectural Values</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">01</div>
                                        <div>
                                            <h4 className="font-bold text-base mb-2">Architectural Integrity</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">We prioritize long-term stability and clean abstractions over short-term hacks.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">02</div>
                                        <div>
                                            <h4 className="font-bold text-base mb-2">Operational Velocity</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Systems designed for rapid deployment and continuous evolution.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">03</div>
                                        <div>
                                            <h4 className="font-bold text-base mb-2">Agentic Autonomy</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Empowering AI agents to act as first-class citizens in your software ecosystem.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-3xl"
                        >
                            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 sm:p-12 md:p-16 relative">
                                <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                                <div className="relative z-10 text-center">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Built for What's Next</h2>
                                    <p className="text-blue-100 text-base sm:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                                        We invite you to join us in architecting a future where enterprise software is as ambitious as your vision.
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-4">
                                        <Link
                                            href="/contact"
                                            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all inline-block"
                                        >
                                            Meet the Team
                                        </Link>
                                        <Link
                                            href="/services"
                                            className="bg-transparent text-white px-8 py-4 rounded-full font-bold border-2 border-white/30 hover:bg-white/10 hover:border-white transition-all inline-block"
                                        >
                                            Our Services
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
