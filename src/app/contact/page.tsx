import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <main className="min-h-screen relative overflow-hidden" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px] opacity-50 animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-50 rounded-full blur-[100px] opacity-40 animate-bounce" style={{ animationDuration: '8s' }} />
            </div>

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-4">
                            Contact Our Team
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                            Build Your Digital <br />
                            <span className="gradient-text">Workforce Today</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Ready to bridge the gap between static automation and Agentic AI?
                            Tell us about your architectural goals and let's architect the future together.
                        </p>
                    </div>

                    <ContactForm />

                    <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <h4 className="font-bold text-lg mb-2">Systems Strategy</h4>
                            <p className="text-gray-500">strategy@graphcenter.ai</p>
                        </div>
                        <div className="p-6 border-x border-gray-100">
                            <h4 className="font-bold text-lg mb-2">Global Headquarters</h4>
                            <p className="text-gray-500">123 AI Boulevard, Tech Valley</p>
                        </div>
                        <div className="p-6">
                            <h4 className="font-bold text-lg mb-2">Direct Inquiry</h4>
                            <p className="text-gray-500">+1 (555) GRAPH-AI</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
