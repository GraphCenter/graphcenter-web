import ContactForm from "@/components/ContactForm";
import Section from "@/components/ui/Section";

export default function ContactPage() {
    return (
        <main>
            <Section spacing="tight" style={{ paddingTop: '10rem' }}>
                <div style={{ maxWidth: '760px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span className="section-label">Contact Our Team</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                            Build Your Digital <br />
                            <span className="gradient-text">Workforce Today</span>
                        </h1>
                        <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
                            Ready to bridge the gap between static automation and Agentic AI?
                            Tell us about your architectural goals and let&rsquo;s architect the future together.
                        </p>
                    </div>

                    <ContactForm />

                    <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        <div>
                            <h4 style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Systems Strategy</h4>
                            <p style={{ color: 'var(--text-muted)' }}>strategy@graphcenter.ai</p>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Global Headquarters</h4>
                            <p style={{ color: 'var(--text-muted)' }}>Mohalalitoe, Maseru, Lesotho</p>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Direct Inquiry</h4>
                            <p style={{ color: 'var(--text-muted)' }}>
                                <a href="tel:+26657888155" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    +266 578 881 55
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
