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
        id: 'finance',
        subsystem: 'Finance',
        pillar: 'Commercial',
        capability: 'Live budget, expense, revenue, and forecast dashboards in one connected domain, scoped per user and organization.',
        legacyDrawback: 'A different spreadsheet or point tool per finance function, reconciled by hand.',
        dataTier: 'Hot Tier (In-memory transactional store)',
        protocol: 'Synchronous gRPC over HTTP/2',
        efficiency: 'Real-time'
    },
    {
        id: 'medical',
        subsystem: 'Medical',
        pillar: 'Commercial',
        capability: 'Patients, labs, admissions, and staffing under one domain, gated by the platform’s own per-user access controls.',
        legacyDrawback: 'Clinical data siloed across separate EHR and scheduling systems.',
        dataTier: 'Hot Tier (In-memory transactional store)',
        protocol: 'Synchronous gRPC over HTTP/2',
        efficiency: 'Real-time'
    },
    {
        id: 'project-management',
        subsystem: 'Project Management',
        pillar: 'Commercial',
        capability: 'Project status, deadlines, and team utilization in the same shell as the domains those projects actually touch.',
        legacyDrawback: 'A standalone PM tool disconnected from the operational data it tracks.',
        dataTier: 'Hot Tier (In-memory transactional store)',
        protocol: 'Synchronous gRPC over HTTP/2',
        efficiency: 'Web + Mobile'
    },
    {
        id: 'aop',
        subsystem: 'Annual Operating Procedures',
        pillar: 'Commercial',
        capability: 'Procedures, documentation, schedules, and staffing plans as structured, searchable records.',
        legacyDrawback: 'SOPs and compliance docs scattered across a shared drive full of PDFs.',
        dataTier: 'Warm Tier (Relational document store)',
        protocol: 'Synchronous gRPC over HTTP/2',
        efficiency: 'Searchable'
    },
    {
        id: 'composable-enterprise',
        subsystem: 'Composable Enterprise',
        pillar: 'Commercial',
        capability: 'New business units addable to an organization dynamically, with per-user domain access controlled by ADMIN/SUPER_ADMIN accounts.',
        legacyDrawback: 'A fixed, single-tenant SaaS configuration that needs a vendor ticket to change.',
        dataTier: 'Warm Tier (Relational document store)',
        protocol: 'Synchronous gRPC over HTTP/2',
        efficiency: 'No redeploy'
    },
    {
        id: 'mechanical-3d',
        subsystem: 'Mechanical 3D Design',
        pillar: 'Technical & Industrial',
        capability: 'Real WebGL CAD viewport with procedural per-part geometry (bolts, nuts, brackets, bearings), drag-and-drop assembly, and explode view.',
        legacyDrawback: 'Desktop-only CAD software requiring a separate license and install per seat, no web access.',
        dataTier: 'Hot Tier (In-memory transactional store)',
        protocol: 'Client-rendered WebGL (react-three-fiber)',
        efficiency: 'Browser-native'
    },
    {
        id: 'chemical-engineering',
        subsystem: 'Chemical Engineering',
        pillar: 'Technical & Industrial',
        capability: 'Process and formulation records through the same multi-view (diagram/model/list) engineering workspace shell.',
        legacyDrawback: 'Process data siloed in disconnected spreadsheets per team.',
        dataTier: 'Warm Tier (Relational document store)',
        protocol: 'Synchronous gRPC over HTTP/2',
        efficiency: 'Unified shell'
    },
    {
        id: 'core-network-design',
        subsystem: 'Core Network Design',
        pillar: 'Technical & Industrial',
        capability: 'Network topology as live, structured diagram records instead of a static exported file.',
        legacyDrawback: 'Network diagrams that go stale the moment they’re exported from a drawing tool.',
        dataTier: 'Warm Tier (Relational document store)',
        protocol: 'Synchronous gRPC over HTTP/2',
        efficiency: 'Always current'
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
        capability: 'Attribute evaluation against real platform roles — USER, ADMIN (organization-scoped), and SUPER_ADMIN (platform-wide) — plus per-user domain allowlists.',
        legacyDrawback: 'Coarse role-based permissions with no organization- or domain-level scoping.',
        dataTier: 'Hot Tier (In-memory real-time security log)',
        protocol: 'Synchronous gRPC middleware evaluation',
        efficiency: 'Org + Domain scoped'
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
                .matrix-card { background: #ffffff; border-radius: var(--radius-asymmetric); border: 1px solid var(--border); box-shadow: none; padding: 2rem; overflow-wrap: break-word; min-width: 0; }
                .search-bar-wrapper { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
                .search-input-container { position: relative; flex-grow: 1; min-width: min(280px, 100%); }
                .search-icon { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-muted); pointer-events: none; }
                .search-input { width: 100%; padding: 0.8rem 1rem 0.8rem 2.8rem; border-radius: 0px; border: 1px solid var(--border); font-family: inherit; font-size: 0.95rem; color: var(--text-main); transition: all 0.2s; background: var(--bg-alt); }
                .search-input:focus { outline: none; border-color: var(--primary); }

                .filter-buttons { display: flex; gap: 0.5rem; flex-wrap: wrap; }
                .filter-btn { padding: 0.6rem 1.2rem; border-radius: var(--radius-pill); border: 1px solid var(--border); background: transparent; color: var(--text-muted); font-size: 0.85rem; font-weight: 500; cursor: pointer; transition: all 0.2s; }
                .filter-btn:hover { background: var(--nav-hover-bg); color: var(--text-main); }
                .filter-btn.active { background: var(--text-main); color: white; border-color: var(--text-main); }

                .matrix-table-container { overflow-x: auto; border-radius: 4px; border: 1px solid var(--border); margin-top: 1rem; background: #ffffff; }
                .matrix-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem; min-width: 800px; }
                .matrix-table th { background: var(--bg-alt); padding: 1.2rem 1.5rem; font-weight: 600; color: var(--text-muted); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid var(--border); }
                .matrix-table td { padding: 1.2rem 1.5rem; border-bottom: 1px solid var(--border); vertical-align: top; color: var(--text-main); }

                .matrix-row:hover td { background-color: var(--bg-alt); }
                .matrix-row:last-child td { border-bottom: none; }

                .badge-pillar { display: inline-flex; align-items: center; padding: 0.25rem 0.6rem; border-radius: var(--radius-pill); font-size: 0.75rem; font-weight: 600; }
                .badge-pillar.commercial { background: rgba(0,82,204,0.12); color: var(--primary); }
                .badge-pillar.technical { background: rgba(0,178,255,0.14); color: var(--primary-deep); }
                .badge-pillar.infrastructure { background: var(--bg-card); color: var(--text-muted); }

                .badge-tier { display: inline-flex; align-items: center; gap: 4px; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; font-family: monospace; }
                .badge-tier.hot { background: rgba(0,82,204,0.1); color: var(--primary); border: 1px solid rgba(0,82,204,0.25); }
                .badge-tier.warm { background: rgba(0,178,255,0.14); color: var(--primary-deep); border: 1px solid rgba(0,178,255,0.3); }
                .badge-tier.cold { background: var(--bg-card); color: var(--text-muted); border: 1px solid var(--border); }

                .protocol-text { font-family: monospace; font-size: 0.8rem; background: var(--bg-alt); padding: 0.2rem 0.4rem; border-radius: 4px; color: var(--text-tertiary); }

                .pill-capsule { display: inline-block; background: var(--bg-card); border: 1px solid var(--border); color: var(--text-main); font-size: 0.75rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: var(--radius-pill); }
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
                                                <CheckCircle2 size={16} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--primary)' }} />
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
