import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, ScrollText, Server, Scale } from 'lucide-react';
import PoweredByBadge from '@/components/PoweredByBadge';

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
        <main className="min-h-screen" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-4">
                        Trust &amp; Security
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                        Safe to hand real work
                    </h1>
                    <p className="text-gray-600 leading-relaxed mb-12 max-w-3xl">
                        GraphControl AI is an autonomous system that changes production data. The reason it can be trusted
                        with that is architectural, not aspirational: a hard boundary the agent cannot cross, a human in
                        the loop for every commit, and a governance and privacy programme around it. This page summarises
                        the posture; the underlying policies and evidence are available to customers and partners on request.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {PILLARS.map((p) => {
                            const Icon = p.icon;
                            return (
                                <div key={p.title} className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius)' }}>
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                                        <Icon size={22} />
                                    </div>
                                    <h2 className="text-lg font-bold mb-2">{p.title}</h2>
                                    <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="glass mt-10" style={{ padding: '2rem', borderRadius: 'var(--radius)' }}>
                        <h2 className="text-lg font-bold mb-2">Reporting a vulnerability</h2>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Email <span style={{ fontWeight: 600, color: 'var(--primary)' }}>security@graphcenter.ai</span> with
                            details and reproduction steps. We acknowledge reports within three business days and will keep
                            you updated through remediation. Please do not disclose publicly until a fix is released.
                        </p>
                    </div>

                    <p className="text-gray-500 text-sm mt-8">
                        See also our <Link href="/terms" style={{ color: 'var(--primary)', fontWeight: 600 }}>Terms of Service</Link> and{' '}
                        <Link href="/privacy" style={{ color: 'var(--primary)', fontWeight: 600 }}>Privacy Policy</Link>. Security
                        and compliance documentation is drafted and reviewed by qualified counsel before it is relied upon.
                    </p>

                    <div className="mt-16 pt-8 border-t border-gray-100 flex justify-center">
                        <PoweredByBadge />
                    </div>
                </div>
            </div>
        </main>
    );
}
