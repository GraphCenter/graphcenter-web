'use client';

import { useState } from 'react';
import { ShieldCheck, HardDrive, Network, Lock, CheckCircle2, ChevronRight, Copy, Terminal, Eye } from 'lucide-react';

export default function ArchitecturePage() {
    const [selectedSchema, setSelectedSchema] = useState<'acdoca' | 'material'>('acdoca');
    const [copied, setCopied] = useState(false);

    const schemas = {
        acdoca: {
            title: 'ACDOCA_RecordCreated (Real-Time In-Memory Ledger Accounting & Universal Journal Processing Ledger)',
            description: 'Fires when a validated double-entry financial record is committed. Dictates hot-tier ledger balancing.',
            code: `{
  "id": "ev-kp8z3abc-7u12x",
  "source": "/enterprise/sap/ledger",
  "type": "ACDOCA_RecordCreated",
  "specversion": "1.0",
  "datacontenttype": "application/json",
  "time": "2026-06-01T20:38:41.000Z",
  "data": {
    "docNum": "OB-2026-001",
    "glAccount": "100000",
    "valueCents": 125000000000,
    "currency": "USD",
    "postingDate": "2026-06-01",
    "user": "sys-seeder"
  }
}`
        },
        material: {
            title: 'MaterialDispatched (WMS Inventory)',
            description: 'Fires upon logistics warehouse dispatch. Triggers downstream recursive BOM check pipelines.',
            code: `{
  "id": "ev-kp8z3def-8v34y",
  "source": "/industrial/wms/dispatcher",
  "type": "MaterialDispatched",
  "specversion": "1.0",
  "datacontenttype": "application/json",
  "time": "2026-06-01T20:38:41.000Z",
  "data": {
    "materialSku": "SKU-BEARING-SEAL-001",
    "quantity": 12,
    "destinationWarehouse": "WH-MECH-EAST",
    "carrier": "CRR-DHL",
    "trackingNumber": "DHL-9876543210-US"
  }
}`
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(schemas[selectedSchema].code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main style={{ paddingTop: '8rem', minHeight: '100vh', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
            <style dangerouslySetInnerHTML={{__html: `
                .arch-header { text-align: center; padding: 4rem 0 2rem; }
                .spec-section { padding: 4rem 0; border-top: 1px solid var(--border); }
                .spec-grid { display: grid; grid-template-columns: 1fr; gap: 4rem; align-items: start; }
                @media (min-width: 1024px) {
                    .spec-grid { grid-template-columns: 1fr 1fr; }
                }
                
                .flow-card { background: white; border-radius: var(--radius); border: 1px solid var(--border); box-shadow: var(--shadow); padding: 2rem; position: relative; }
                .flow-step { display: flex; gap: 1rem; margin-bottom: 1.5rem; position: relative; }
                .flow-step:last-child { margin-bottom: 0; }
                .flow-step:not(:last-child)::after { content: ''; position: absolute; left: 16px; top: 32px; bottom: -20px; width: 2px; background: #e2e8f0; }
                
                .step-number { width: 34px; height: 34px; border-radius: 50%; background: var(--accent); color: var(--primary); font-weight: 700; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; flex-shrink: 0; }
                .step-content { flex-grow: 1; }
                .step-title { font-weight: 700; font-size: 1rem; margin-bottom: 0.25rem; display: flex; align-items: center; gap: 6px; }
                .step-desc { font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; }
                
                .db-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
                @media (min-width: 768px) {
                    .db-grid { grid-template-columns: repeat(3, 1fr); }
                }
                
                .db-card { background: var(--bg-card); border-radius: var(--radius); border: 1px solid var(--border); padding: 2rem; position: relative; transition: all 0.2s; }
                .db-card:hover { transform: translateY(-3px); border-color: var(--primary); }
                .db-badge { display: inline-block; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem; font-family: monospace; }
                .db-badge.hot { background: #fef2f2; color: #dc2626; border: 1px solid #fee2e2; }
                .db-badge.warm { background: #fffbeb; color: #d97706; border: 1px solid #fef3c7; }
                .db-badge.cold { background: #eff6ff; color: #2563eb; border: 1px solid #dbeafe; }
                
                .code-viewer { background: #0f172a; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.15); border: 1px solid #334155; }
                .code-header { background: #1e293b; padding: 0.75rem 1.25rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #334155; }
                .code-pre { margin: 0; padding: 1.5rem; overflow-x: auto; color: #cbd5e1; font-family: monospace; font-size: 0.825rem; line-height: 1.5; text-align: left; }
                
                .schema-btn { padding: 0.5rem 1rem; border-radius: 6px; font-weight: 600; cursor: pointer; border: 1px solid transparent; background: transparent; color: #94a3b8; font-size: 0.8rem; font-family: inherit; transition: all 0.2s; }
                .schema-btn.active { background: #334155; color: white; border-color: #475569; }
                
                .arch-pill { display: inline-flex; align-items: center; gap: 4px; background: var(--accent); color: var(--primary); padding: 0.25rem 0.6rem; border-radius: 30px; font-size: 0.75rem; font-weight: 600; margin-bottom: 1rem; }
            `}} />

            <div className="container">
                {/* Header */}
                <header className="arch-header">
                    <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'var(--accent)', color: 'var(--primary)', borderRadius: '30px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                        Enterprise-Grade Integrity
                    </div>
                    <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 900 }}>
                        System <span className="gradient-text">Architecture Spec</span>
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                        Explore the rigorous compliance floor, attribute-based access control engine (ABAC), multi-tier database configurations, and schema-validated event broker details.
                    </p>
                </header>

                {/* Database Tiering Spec */}
                <section className="spec-section">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <div className="arch-pill"><HardDrive size={14} /> Multi-Tier Composable Database</div>
                        <h2 className="text-3xl font-black mb-4">Storage Tiering &amp; Archival Pipeline</h2>
                        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                            The platform manages transaction states and high-throughput telemetry by tiering storage models across distinct engines, maintaining strict relational referential integrity.
                        </p>
                    </div>

                    <div className="db-grid">
                        {/* Hot Tier */}
                        <div className="db-card">
                            <span className="db-badge hot">Hot Tier</span>
                            <h3 className="text-xl font-bold mb-2">In-Memory Store</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Real-time, sub-millisecond transactional database with a Write-Ahead Log (WAL) and MVCC transactional rollbacks. Seeds and operates active core banking distributed ledgers and real-time in-memory unified accounting ledger entries.
                            </p>
                            <ul className="bullet-list" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                <li style={{ marginBottom: '0.5rem' }}>✓ Write-Ahead Log captures: BEGIN, INSERT, UPDATE, COMMIT.</li>
                                <li style={{ marginBottom: '0.5rem' }}>✓ Reverse MVCC rollback sequence for transaction failures.</li>
                                <li style={{ marginBottom: '0.5rem' }}>✓ Direct operational in-memory slot caching for WMS.</li>
                            </ul>
                        </div>

                        {/* Warm Tier */}
                        <div className="db-card">
                            <span className="db-badge warm">Warm Tier</span>
                            <h3 className="text-xl font-bold mb-2">Relational Doc Store</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Semi-structured document database with strict JSON schema validation and Foreign-Key (FK) referential integrity check loops. Operates multi-subsidiary consolidation matrices and declarative underwriting relationship chains.
                            </p>
                            <ul className="bullet-list" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                <li style={{ marginBottom: '0.5rem' }}>✓ Block-level validation of document field presence on write.</li>
                                <li style={{ marginBottom: '0.5rem' }}>✓ Dynamic referential integrity constraint checkers.</li>
                                <li style={{ marginBottom: '0.5rem' }}>✓ Rapid index keys matching Multi-Subsidiary Global Consolidation scopes.</li>
                            </ul>
                        </div>

                        {/* Cold Tier */}
                        <div className="db-card">
                            <span className="db-badge cold">Cold Tier</span>
                            <h3 className="text-xl font-bold mb-2">Columnar Parquet</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                High-density, cost-effective columnar partitioned engine. Converts incoming JSON streams into compressed column-oriented Parquet files written directly to disk storage for archival.
                            </p>
                            <ul className="bullet-list" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                <li style={{ marginBottom: '0.5rem' }}>✓ Columnar partitioning packs identical keys into single arrays.</li>
                                <li style={{ marginBottom: '0.5rem' }}>✓ High performance reading of singular telemetry vectors.</li>
                                <li style={{ marginBottom: '0.5rem' }}>✓ Stores high-frequency telemetry streams &amp; WMS shipping manifest logs.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ABAC Access Control Visualizer */}
                <section className="spec-section">
                    <div className="spec-grid">
                        {/* ABAC Process Flow */}
                        <div>
                            <div className="arch-pill"><Lock size={14} /> ABAC Engine Middleware</div>
                            <h2 className="text-3xl font-black mb-4">Attribute-Based Access Control</h2>
                            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                                Our security subsystem goes beyond simple role-based permissions (RBAC). It evaluates four separate contextual vectors in real-time to make granular access decisions, fulfilling SOC2 Type II and GDPR tenant-isolation constraints.
                            </p>

                            <div className="flow-card">
                                <div className="flow-step">
                                    <div className="step-number">1</div>
                                    <div className="step-content">
                                        <h4 className="step-title">Subject Attributes Evaluated</h4>
                                        <p className="step-desc">
                                            Loads current subject role (Admin, Manager, Auditor, Operator, Guest), clearanceLevel, department scope, and source tenant subsidiary.
                                        </p>
                                    </div>
                                </div>
                                <div className="flow-step">
                                    <div className="step-number">2</div>
                                    <div className="step-content">
                                        <h4 className="step-title">Resource Classification Matching</h4>
                                        <p className="step-desc">
                                            Checks target resource type and sensitivity boundaries: PUBLIC, INTERNAL, RESTRICTED, CONFIDENTIAL, or TOP_SECRET.
                                        </p>
                                    </div>
                                </div>
                                <div className="flow-step">
                                    <div className="step-number">3</div>
                                    <div className="step-content">
                                        <h4 className="step-title">Environmental Verification</h4>
                                        <p className="step-desc">
                                            Secures high-value banking and financial systems by strictly requiring **TLS v1.3** and client source IP validation matching RFC1918 private subnets.
                                        </p>
                                    </div>
                                </div>
                                <div className="flow-step">
                                    <div className="step-number">4</div>
                                    <div className="step-content">
                                        <h4 className="step-title">Subsidiary Scope Enforcement</h4>
                                        <p className="step-desc">
                                            For non-ADMIN and non-AUDITOR subjects, strictly blocks cross-tenant access. Validates that the resource subsidiary ownership field matches the subject subsidiary perfectly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event Broker Schema Viewer */}
                        <div>
                            <div className="arch-pill"><Network size={14} /> Event Transport Layer</div>
                            <h2 className="text-3xl font-black mb-4">Schema-Validated Event Streaming</h2>
                            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                                Subsystems communicate asynchronously using the schema-validated event broker. The broker enforces strict CloudEvents 1.0 structural invariants to guarantee message integrity.
                            </p>

                            <div className="code-viewer">
                                <div className="code-header">
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <button
                                            className={`schema-btn ${selectedSchema === 'acdoca' ? 'active' : ''}`}
                                            onClick={() => setSelectedSchema('acdoca')}
                                        >
                                            ACDOCA_RecordCreated
                                        </button>
                                        <button
                                            className={`schema-btn ${selectedSchema === 'material' ? 'active' : ''}`}
                                            onClick={() => setSelectedSchema('material')}
                                        >
                                            MaterialDispatched
                                        </button>
                                    </div>
                                    <button
                                        onClick={handleCopy}
                                        style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 600 }}
                                    >
                                        <Copy size={14} />
                                        {copied ? 'Copied!' : 'Copy Schema'}
                                    </button>
                                </div>
                                <div style={{ background: '#090d16', padding: '1rem', borderBottom: '1px solid #1e293b', fontSize: '0.8rem', color: '#64748b' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                                        <Terminal size={14} className="text-blue-500" />
                                        <strong style={{ color: '#94a3b8' }}>{schemas[selectedSchema].title}</strong>
                                    </div>
                                    <p style={{ fontSize: '0.75rem' }}>{schemas[selectedSchema].description}</p>
                                </div>
                                <pre className="code-pre">
                                    <code>{schemas[selectedSchema].code}</code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
