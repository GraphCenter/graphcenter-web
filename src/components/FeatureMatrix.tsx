'use client';

import { useState } from 'react';
import { Search, Database, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface SubsystemFeature {
    id: string;
    subsystem: string;
    pillar: 'Commercial' | 'Technical & Industrial' | 'Infrastructure & Security';
    capability: string;
    legacyDrawback: string;
    dataTier: string;
    protocol: string;
    efficiency: string;
}

const FEATURES: SubsystemFeature[] = [
    {
        id: 'sap',
        subsystem: 'Real-Time In-Memory Ledger Accounting & Universal Journal Processing Module',
        pillar: 'Commercial',
        capability: 'Real-time double-entry journal mappings directly to in-memory unified ledger structures, incorporating automated physical rack slot configurations.',
        legacyDrawback: 'Overnight batch reconciliation routines with static database allocations leading to inventory mismatches.',
        dataTier: 'Hot Tier (In-Memory transactional store with WAL write-ahead logs)',
        protocol: 'Synchronous gRPC over HTTP/2',
        efficiency: '99.98% Synced'
    },
    {
        id: 'netsuite',
        subsystem: 'Multi-Subsidiary Global Consolidation & Automated Intercompany Elimination Engine',
        pillar: 'Commercial',
        capability: 'Dynamic multi-subsidiary global consolidations, automated intercompany transaction eliminations, and live multi-currency tax mapping.',
        legacyDrawback: 'Manual multi-currency spreadsheet reconciliations and slow monthly consolidation runs.',
        dataTier: 'Warm Tier (Relational Document Store with schema constraints)',
        protocol: 'Synchronous gRPC over HTTP/2',
        efficiency: '< 100ms Consolidation'
    },
    {
        id: 'temenos',
        subsystem: 'High-Frequency Core Banking Distributed Ledger & Multilateral Clearing Scheme',
        pillar: 'Commercial',
        capability: 'Continuous-compound interest calculation engine for global liquidity vaults. Handles corporate accounts dynamically.',
        legacyDrawback: 'End-of-day batch interest calculations, delaying portfolio valuation updates and asset balancing.',
        dataTier: 'Hot Tier (In-Memory store with WAL logging & MVCC rollbacks)',
        protocol: 'Synchronous gRPC over HTTP/2',
        efficiency: 'Real-time Accrual'
    },
    {
        id: 'yardi',
        subsystem: 'Commercial Real Estate Asset Leasing & Common Area Maintenance (CAM) Reconciliation Engine',
        pillar: 'Commercial',
        capability: 'Live lease valuation and CAM (Common Area Maintenance) share percentage indexation. Dynamically updates outstanding balances.',
        legacyDrawback: 'Static property ledgers requiring offline recalculations and manual property sync.',
        dataTier: 'Hot Tier (In-Memory transactional store)',
        protocol: 'Synchronous gRPC over HTTP/2',
        efficiency: 'Zero Leakage'
    },
    {
        id: 'blackbaud',
        subsystem: 'Restricted Fund Accounting & Multi-Fiscal Year Allocation Pool Tracker',
        pillar: 'Commercial',
        capability: 'Fund accounting logic partitioning restricted vs unrestricted grant allocations, enforcing expiration safeguards.',
        legacyDrawback: 'Rigid manual chart of accounts structure and high administrative auditing overhead.',
        dataTier: 'Hot Tier (In-Memory balanced ledger)',
        protocol: 'Synchronous gRPC over HTTP/2',
        efficiency: '100% Audit Trails'
    },
    {
        id: 'epicor',
        subsystem: 'Discrete Manufacturing Execution System (MES) & Recursive BOM Explosion Routing',
        pillar: 'Technical & Industrial',
        capability: 'Recursive, multi-stage 3-tier deep BOM (Bill of Materials) explosions traversing complex industrial components.',
        legacyDrawback: 'Flat component list structures causing slow lookup tables and inventory assembly lags.',
        dataTier: 'Hot Tier (In-Memory transactional store)',
        protocol: 'Asynchronous CloudEvents 1.0 (MRP trigger)',
        efficiency: 'Immediate Explosion'
    },
    {
        id: 'maximo',
        subsystem: 'IoT Telemetry Ingestion & Predictive Asset Performance Engineering Module',
        pillar: 'Technical & Industrial',
        capability: 'High-frequency telemetry stream ingestion (vibration Hz, temperature C) driving real-time Root Cause Failure Analysis (RCFA) diagnostic trees.',
        legacyDrawback: 'Reactive maintenance programs driven by static calendar intervals rather than real-time machine telemetry.',
        dataTier: 'Cold Tier (Columnar partitioned Parquet archival on disk)',
        protocol: 'Asynchronous CloudEvents 1.0 (IoT telemetry stream)',
        efficiency: '99.4% Failure Prevention'
    },
    {
        id: 'guidewire',
        subsystem: 'Declarative Business Process Management (BPM) & Policy Underwriting Engine',
        pillar: 'Technical & Industrial',
        capability: 'State-machine driven workflow underwriting and claim approvals. Enforces MANAGER+ role clearances for approval states.',
        legacyDrawback: 'Static email-escalation queues and slow manual peer review loops.',
        dataTier: 'Warm Tier (Relational Document Store with schema constraints)',
        protocol: 'Synchronous gRPC over HTTP/2',
        efficiency: 'Automated Routing'
    },
    {
        id: 'eventbus',
        subsystem: 'Global Event Broker',
        pillar: 'Infrastructure & Security',
        capability: 'Strict schema validation of CloudEvents 1.0 payloads. Topic-based routing with automatic error logs for rejected transactions.',
        legacyDrawback: 'Unstructured, unvalidated JSON messaging queues leading to system-wide synchronization degradation.',
        dataTier: 'Cold Tier (Disk-persisted Parquet schema log)',
        protocol: 'Asynchronous CloudEvents 1.0 standard wrapper',
        efficiency: 'Zero-loss Stream'
    },
    {
        id: 'abac',
        subsystem: 'ABAC Access Control Guard',
        pillar: 'Infrastructure & Security',
        capability: 'Granular attribute evaluation (TLS 1.3 encryption version, client IP verification, role clearances, subsidiary tenant matching).',
        legacyDrawback: 'Coarse role-based permissions lacking network-level security, tenant separation, or cryptographic enforcement.',
        dataTier: 'Hot Tier (In-memory real-time security log)',
        protocol: 'Synchronous gRPC middleware evaluation',
        efficiency: 'SOC2/GDPR Compliant'
    }
];

export default function FeatureMatrix() {
    const [search, setSearch] = useState('');
    const [pillarFilter, setPillarFilter] = useState<'All' | 'Commercial' | 'Technical' | 'Infrastructure'>('All');

    const filtered = FEATURES.filter(item => {
        const matchesSearch = item.subsystem.toLowerCase().includes(search.toLowerCase()) || 
                             item.capability.toLowerCase().includes(search.toLowerCase()) || 
                             item.legacyDrawback.toLowerCase().includes(search.toLowerCase());
        
        let matchesPillar = true;
        if (pillarFilter === 'Commercial') matchesPillar = item.pillar === 'Commercial';
        if (pillarFilter === 'Technical') matchesPillar = item.pillar === 'Technical & Industrial';
        if (pillarFilter === 'Infrastructure') matchesPillar = item.pillar === 'Infrastructure & Security';

        return matchesSearch && matchesPillar;
    });

    return (
        <div style={{ width: '100%' }}>
            <style dangerouslySetInnerHTML={{__html: `
                .matrix-card { background: var(--bg-card); border-radius: var(--radius); border: 1px solid var(--border); box-shadow: var(--shadow); padding: 2rem; }
                .search-bar-wrapper { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
                .search-input-container { position: relative; flex-grow: 1; min-width: 280px; }
                .search-icon { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none; }
                .search-input { width: 100%; padding: 0.8rem 1rem 0.8rem 2.8rem; border-radius: 30px; border: 1px solid var(--border); font-family: inherit; font-size: 0.95rem; color: var(--text-main); transition: all 0.2s; background: rgba(255,255,255,0.7); }
                .search-input:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(0, 82, 204, 0.1); background: white; }
                
                .filter-buttons { display: flex; gap: 0.5rem; flex-wrap: wrap; }
                .filter-btn { padding: 0.6rem 1.2rem; border-radius: 30px; border: 1px solid var(--border); background: white; color: var(--text-muted); font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
                .filter-btn:hover { background: var(--accent); color: var(--primary); border-color: var(--primary); }
                .filter-btn.active { background: var(--primary); color: white; border-color: var(--primary); }
                
                .matrix-table-container { overflow-x: auto; border-radius: 8px; border: 1px solid var(--border); margin-top: 1rem; background: white; }
                .matrix-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem; min-width: 800px; }
                .matrix-table th { background: #f8fafc; padding: 1.2rem 1.5rem; font-weight: 700; color: var(--text-main); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid var(--border); }
                .matrix-table td { padding: 1.2rem 1.5rem; border-bottom: 1px solid var(--border); vertical-align: top; color: var(--text-main); }
                
                .matrix-row:hover td { background-color: rgba(0, 82, 204, 0.01); }
                .matrix-row:last-child td { border-bottom: none; }
                
                .badge-pillar { display: inline-flex; align-items: center; padding: 0.25rem 0.6rem; border-radius: 30px; font-size: 0.75rem; font-weight: 600; }
                .badge-pillar.commercial { background: #e0f2fe; color: #0369a1; }
                .badge-pillar.technical { background: #faf5ff; color: #6b21a8; }
                .badge-pillar.infrastructure { background: #ecfdf5; color: #047857; }
                
                .badge-tier { display: inline-flex; align-items: center; gap: 4px; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; font-family: monospace; }
                .badge-tier.hot { background: #fef2f2; color: #b91c1c; border: 1px solid #fca5a5; }
                .badge-tier.warm { background: #fffbeb; color: #b45309; border: 1px solid #fde047; }
                .badge-tier.cold { background: #eff6ff; color: #1d4ed8; border: 1px solid #93c5fd; }
                
                .protocol-text { font-family: monospace; font-size: 0.8rem; background: #f1f5f9; padding: 0.2rem 0.4rem; border-radius: 4px; color: #334155; }
                
                .pill-capsule { display: inline-block; background: #f0fdf4; border: 1px solid #bbf7d0; color: #15803d; font-size: 0.75rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 30px; }
            `}} />
            
            <div className="matrix-card">
                <h3 className="text-2xl font-bold mb-2">Interactive Enterprise Capability Matrix</h3>
                <p className="text-sm text-gray-500 mb-6">
                    Directly compare our native composable architectural capability sets, technical protocols, and storage targets against legacy monolith suites.
                </p>
                
                <div className="search-bar-wrapper">
                    <div className="search-input-container">
                        <Search size={18} className="search-icon" />
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search capability, module, drawbacks..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    
                    <div className="filter-buttons">
                        <button
                            className={`filter-btn ${pillarFilter === 'All' ? 'active' : ''}`}
                            onClick={() => setPillarFilter('All')}
                        >
                            All Pillars
                        </button>
                        <button
                            className={`filter-btn ${pillarFilter === 'Commercial' ? 'active' : ''}`}
                            onClick={() => setPillarFilter('Commercial')}
                        >
                            Commercial
                        </button>
                        <button
                            className={`filter-btn ${pillarFilter === 'Technical' ? 'active' : ''}`}
                            onClick={() => setPillarFilter('Technical')}
                        >
                            Technical &amp; Industrial
                        </button>
                        <button
                            className={`filter-btn ${pillarFilter === 'Infrastructure' ? 'active' : ''}`}
                            onClick={() => setPillarFilter('Infrastructure')}
                        >
                            Infrastructure &amp; Security
                        </button>
                    </div>
                </div>
                
                <div className="matrix-table-container">
                    <table className="matrix-table">
                        <thead>
                            <tr>
                                <th style={{ width: '18%' }}>Module / Subsystem</th>
                                <th style={{ width: '15%' }}>Pillar</th>
                                <th style={{ width: '25%' }}>GraphCenter Composable Capability</th>
                                <th style={{ width: '22%' }}>Legacy Suite Drawbacks</th>
                                <th style={{ width: '20%' }}>Architecture Specification</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.length > 0 ? (
                                filtered.map((item) => (
                                    <tr key={item.id} className="matrix-row">
                                        <td style={{ fontWeight: 700 }}>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                                <span>{item.subsystem}</span>
                                                <span className="pill-capsule" style={{ width: 'fit-content' }}>
                                                    {item.efficiency}
                                                </span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`badge-pillar ${
                                                item.pillar === 'Commercial' ? 'commercial' :
                                                item.pillar === 'Technical & Industrial' ? 'technical' : 'infrastructure'
                                            }`}>
                                                {item.pillar}
                                            </span>
                                        </td>
                                        <td style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                                            <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                                                <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0, marginTop: '2px' }} />
                                                <span>{item.capability}</span>
                                            </div>
                                        </td>
                                        <td style={{ fontSize: '0.85rem', lineHeight: '1.4', color: 'var(--text-muted)' }}>
                                            <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                                                <span style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '1rem', lineHeight: '1', flexShrink: 0 }}>×</span>
                                                <span>{item.legacyDrawback}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                    <Database size={14} style={{ color: 'var(--primary)' }} />
                                                    <span className={`badge-tier ${
                                                        item.dataTier.includes('Hot') ? 'hot' :
                                                        item.dataTier.includes('Warm') ? 'warm' : 'cold'
                                                    }`}>
                                                        {item.dataTier.includes('Hot') ? 'Hot Tier' : 
                                                         item.dataTier.includes('Warm') ? 'Warm Tier' : 'Cold Tier'}
                                                    </span>
                                                </div>
                                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                                    {item.dataTier.split(' (')[0]}
                                                </div>
                                                <div>
                                                    <span className="protocol-text">{item.protocol}</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                                        No subsystems match your search criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
