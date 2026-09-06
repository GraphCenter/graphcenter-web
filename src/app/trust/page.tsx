import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, ScrollText, Server, Scale } from 'lucide-react';
import PoweredByBadge from '@/components/PoweredByBadge';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
    title: 'Trust & Security | GraphCenter',
    description: 'How GraphControl AI stays safe to hand real work: the allow-list safety boundary, responsible-AI governance, privacy under POPIA and GDPR, and the security programme.',
};

const PILLARS = [
    {
        icon: ShieldCheck,
        title: 'The safety boundary',
        body: 'The agent can only ever wire together data and actions a developer pre-declared in the allow-list registry. Every proposed action is independently re-validated against that registry at execution time, then previewed. Nothing is committed without an explicit human confirmation. This is enforcement, not prompt instruction.',
    },
    {
        icon: Eye,
        title: 'Responsible AI',
        body: 'Model changes pass evaluation gates before they reach production. A human stays in the loop for every state change. We do not train models on customer data without an explicit opt-in. Agent reasoning and actions are logged and reviewable in the SUPER_ADMIN console.',
    },
    {
        icon: Lock,
        title: 'Security programme',
        body: 'ABAC role isolation (USER / ADMIN / SUPER_ADMIN) scopes every request to a tenant and its granted domains. Data is tiered across hot, warm and cold storage with encryption in transit and at rest. A SOC 2 Type II programme is in progress; the current control set and roadmap are available under NDA.',
    },
    {
        icon: ScrollText,
        title: 'Privacy',
        body: 'The privacy programme is built to POPIA and the Lesotho Data Protection Act, and to the GDPR where EU customers are in scope. That covers lawful basis, data-subject requests, retention limits, breach notification, and records of processing. A Data Processing Addendum is available for enterprise customers.',
    },
    {
        icon: Scale,
        title: 'Governance',
        body: 'GraphCenter operates as a single legal entity in South Africa / SADC, with product lines run as brands and a subsidiary-ready structure. Governance follows King IV principles: a defined delegation-of-authority matrix, a risk register, and board-level oversight of model risk and security.',
    },
    {
        icon: Server,
        title: 'Sub-processors',
        body: 'Core sub-processors are Anthropic and Google (model inference), Vercel (application hosting), Neon (Postgres), Upstash (queues and cache), and Hugging Face (domain adapter hosting). The current list, with locations and purpose, is provided on request and versioned in the Data Room.',
    },
];

export default function TrustPage() {
    return (
        <main>
            <Section spacing="tight" style={{ paddingTop: '10rem' }}>
                <div style={{ maxWidth: '820px' }}>
                    <span className="section-label">Trust & Security</span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Safe to hand real work
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: 1.6 }}>
                        GraphControl AI is an autonomous system that changes production data. The reason it can be trusted with that is architectural, not aspirational: a hard boundary the agent cannot cross, a human in the loop for every commit, and a governance and privacy programme around it. This page summarises the posture; the underlying policies and evidence are available to customers and partners on request.
                    </p>
                </div>
            </Section>

            <Section spacing="tight">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {PILLARS.map((p) => {
                        const Icon = p.icon;
                        return (
                            <div key={p.title} className="card-asymmetric" style={{ padding: '2rem' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1rem' }}>
                                    <Icon size={22} />
                                </div>
                                <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-main)' }}>{p.title}</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6 }}>{p.body}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="card-asymmetric" style={{ padding: '2rem', marginTop: '2rem' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Reporting a vulnerability</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6 }}>
                        Email <span style={{ fontWeight: 600, color: 'var(--primary)' }}>security@graphcenter.ai</span> with details and reproduction steps. We acknowledge reports within three business days and will keep you updated through remediation. Please do not disclose publicly until a fix is released.
                    </p>
                </div>

                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', marginTop: '2rem' }}>
                    See also our <Link href="/terms" style={{ color: 'var(--primary)', fontWeight: 500 }}>Terms of Service</Link> and{' '}
                    <Link href="/privacy" style={{ color: 'var(--primary)', fontWeight: 500 }}>Privacy Policy</Link>. Security and compliance documentation is drafted and reviewed by qualified counsel before it is relied upon.
                </p>

                <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'center' }}>
                    <PoweredByBadge />
                </div>
            </Section>
        </main>
    );
}
