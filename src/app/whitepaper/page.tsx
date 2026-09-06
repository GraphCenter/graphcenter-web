import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
    title: 'Technical Whitepaper | GraphCenter',
    description: 'How GraphControl AI stays safe to hand real work, and how one control plane runs a portfolio of products: the allow-list safety boundary, composable domains, an event-driven backbone, tiered storage, and attribute-based access control.',
};

const SECTIONS = [
    {
        title: '1. The Safety Boundary',
        body: [
            'Most teams adopting agentic AI bolt a chatbot onto an app and hope it behaves. The hard part isn\'t the model — it\'s making an autonomous system safe to hand real work, especially work that changes production data.',
            'GraphControl AI enforces an allow-list registry: every data source and action a page exposes to the assistant is declared up front by a developer, and independently re-validated against that registry at execution time — not just checked once at the prompt layer. The agent proposes a change, shows the before/after, and commits only on explicit human confirmation.',
            'That boundary is enforced, not prompted, and it is built once and reused everywhere: the same safety model underneath every product on the platform, and the same one that ships to third-party apps under the "Powered by GraphControl" mark.',
        ],
    },
    {
        title: '2. One Platform, a Portfolio of Products',
        body: [
            'GraphControl AI is the control plane itself — identity, permissions, metered AI billing, and the safety boundary — and it runs underneath a portfolio of products rather than being sold as a single vertical tool: HomeAuto, a multi-vendor home-automation marketplace; Moeletsi, an AI legal advisor that drafts and checks documents against a curated knowledge base; and Softlearn, attendance-based tutoring with sessions, progress, and payments in one place.',
            'A new vertical is mostly domain configuration on top of already-shared infrastructure, not a new company. The same engine is also available as an OEM embed: a third party brings its own domain and customers, and GraphControl brings the assistant, the safety boundary, the agent-generated UI, and usage-based billing.',
        ],
    },
    {
        title: '3. Composable Domain Architecture',
        body: [
            'Every business function on the platform — Finance, Medical, Project Management, Annual Operating Procedures, Mechanical 3D Design, Chemical Engineering, Core Network Design, and dozens more — is modeled as an independent, addable "business unit" rather than a hardcoded module.',
            'New units can be provisioned onto an organization dynamically, with no platform redeploy. ADMIN accounts manage which domains their own organization can reach; SUPER_ADMIN accounts operate platform-wide. Leaving a user\'s domain access unrestricted keeps it unrestricted by default, so composability doesn\'t come at the cost of accidental lockouts.',
            'This is what makes the platform genuinely multi-tenant and composable rather than a single fixed vertical SaaS product wearing a configurable skin.',
        ],
    },
    {
        title: '4. Event-Driven Backbone',
        body: [
            'Cross-domain communication runs over a global messaging backbone that enforces CloudEvents 1.0 schema compliance — every event carries a validated id, source, type, and timestamp, with an application/json payload.',
            'Topic contracts can be strict: a transaction-log topic like ACDOCA_RecordCreated requires a numeric valueCents field, for example. Messages that fail validation are buffered rather than silently dropped, and the broker returns a descriptive schema-validation error rather than a generic failure — a deliberate choice, since a fleet of AI agents reasoning over event streams needs to know exactly why a message was rejected, not just that it was.',
        ],
    },
    {
        title: '5. Multi-Tier Data Architecture',
        body: [
            'Storage is composable in the same way domains are: data is placed into Hot, Warm, or Cold tiers based on how it\'s actually used, not treated as one undifferentiated database.',
            'The Hot tier is an in-memory store using Write-Ahead Logging and MVCC rollback for active transactions — the tier active ledgers and real-time accounting entries live in. The Warm tier is a relational document store that evaluates foreign-key constraints as data lands (policy-to-account mappings, for example). The Cold tier is a columnar, partitioned archival engine that converts incoming JSON streams into compressed Parquet files for long-term, cost-efficient storage.',
            'The effect is that recent, high-throughput data stays fast; structured operational data stays consistent; and historical data stays cheap to retain — without three separate systems to reconcile by hand.',
        ],
    },
    {
        title: '6. Attribute-Based Access Control',
        body: [
            'Every request is evaluated by an ABAC middleware layer rather than a flat role check. The evaluation walks a real four-step flow: it reads the subject\'s attributes — role (USER, ADMIN, or SUPER_ADMIN), organization, and allowed-domains list — classifies the resource being requested, checks transport-level requirements, and then applies organization scoping before the request is allowed through.',
            'ADMIN accounts are scoped to their own organization; SUPER_ADMIN accounts operate platform-wide. Because the check happens per-request against real subject and resource attributes, a multi-tenant deployment can guarantee that one organization\'s users can never reach another organization\'s domains or data, regardless of how many business units are active on the platform.',
        ],
    },
    {
        title: '7. Composable Micro-Frontend Shell',
        body: [
            'The frontend mirrors the backend\'s composability. A host shell loads independently deployable domain "remotes" at runtime via Module Federation — a business unit like Finance or Mechanical 3D Design ships and deploys on its own cadence, isolated from the host application\'s release cycle.',
            'A shared, singleton state bridge carries live data, notifications, and AI-proposed actions across the federation boundary, so a change proposed by an embedded assistant in one domain remote can be reflected consistently across the rest of the shell without a full page reload or a monolithic frontend release.',
        ],
    },
    {
        title: '8. Real Technical Domains, Not Mockups',
        body: [
            'The platform\'s technical/industrial domains aren\'t placeholder screens — Mechanical 3D Design renders a genuine WebGL viewport with procedural, per-part geometry for bolts, brackets, bearings, and PCBs, supporting click-to-select, drag-and-drop assembly, and explode/wireframe/x-ray view modes. Chemical Engineering models real process and formulation records through the same multi-view (diagram/model/list) workspace shell used across the platform\'s other engineering domains. Core Network Design treats topology and infrastructure diagrams as live, structured records rendered by the platform\'s own diagram engine, not static exported files that go stale the moment they\'re shared.',
            'These are proof points for the same underlying thesis: a composable architecture doesn\'t have to trade away depth in any single domain to stay general-purpose across all of them.',
        ],
    },
];

export default function WhitepaperPage() {
    return (
        <main style={{ paddingTop: '9rem', paddingBottom: '6rem' }}>
            <div className="container" style={{ maxWidth: '760px' }}>
                <span className="section-label">Technical Whitepaper</span>
                <h1 className="text-display" style={{ marginBottom: '1.5rem' }}>
                    The Agentic Control Plane
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    How GraphControl AI stays safe to hand real work, and how one control plane runs a portfolio of products on a composable domain model, an event-driven backbone, tiered storage, and attribute-based access control.
                </p>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', marginBottom: '3rem' }}>
                    GraphCenter Engineering · Updated 2026
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {SECTIONS.map((section) => (
                        <div key={section.title} className="whitepaper-section">
                            <h2 className="text-heading" style={{ marginBottom: '1.25rem' }}>{section.title}</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                                {section.body.map((para, i) => (
                                    <p key={i} style={{ color: 'var(--text-muted)', fontSize: '17px', lineHeight: 1.7 }}>
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="whitepaper-section" style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
                    <h3 className="text-heading" style={{ marginBottom: '1rem' }}>Run a vertical on it, or embed it in yours</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '17px', marginBottom: '2rem', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
                        Talk to our team about a domain pack for your vertical, or the OEM model for embedding the engine in a product you already have.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button href="/contact" variant="primary">Start the Conversation</Button>
                        <Button href="/domains" variant="ghost">Explore the Platform</Button>
                    </div>
                    <p style={{ marginTop: '2rem', fontSize: '0.85rem' }}>
                        <Link href="/resources" className="nav-link" style={{ color: 'var(--text-tertiary)' }}>&larr; Back to Resources</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
