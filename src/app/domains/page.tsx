'use client';

import { useState } from 'react';
import FeatureMatrix from '@/components/FeatureMatrix';
import { Landmark, ShieldAlert, Cpu, Layers, HardDrive, Network, GitPullRequest, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function DomainsPage() {
    const [activeTab, setActiveTab] = useState<'commercial' | 'technical' | 'infrastructure'>('commercial');

    return (
        <main className="pt-20 md:pt-32" style={{ minHeight: '100vh' }}>
            <style dangerouslySetInnerHTML={{__html: `
                .domains-hero { text-align: center; padding: 4rem 0 2rem; }
                .tab-bar { display: flex; justify-content: center; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap; }
                .tab-btn { display: flex; align-items: center; gap: 8px; padding: 1rem 2rem; border-radius: 0px; font-weight: 500; cursor: pointer; transition: all 0.2s; font-family: inherit; font-size: 0.95rem; border: 1px solid var(--text-main); background: transparent; color: var(--text-main); }
                .tab-btn:hover { background: var(--nav-hover-bg); }
                .tab-btn.active { background: var(--text-main); color: white; border-color: var(--text-main); box-shadow: none; }

                .domain-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-bottom: 5rem; }
                @media (min-width: 1024px) {
                    .domain-grid { grid-template-columns: repeat(3, 1fr); }
                }

                .domain-card { background: #ffffff; border-radius: var(--radius-asymmetric); border: 1px solid var(--border); box-shadow: none; padding: 2.5rem; transition: transform 0.25s ease, border-color 0.25s ease; position: relative; overflow: hidden; overflow-wrap: break-word; min-width: 0; display: flex; flex-direction: column; }
                .domain-card:hover { border-color: var(--primary); transform: translateY(-3px); }

                .domain-icon-wrapper { width: 56px; height: 56px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; font-size: 1.5rem; }
                .domain-icon-wrapper.commercial { background: rgba(0,82,204,0.1); border: 1px solid rgba(0,82,204,0.25); }
                .domain-icon-wrapper.technical { background: rgba(0,178,255,0.1); border: 1px solid rgba(0,178,255,0.25); }
                .domain-icon-wrapper.infrastructure { background: var(--bg-card); border: 1px solid var(--border); }

                .tech-specs-box { background: var(--bg-alt); border-radius: 4px; border: 1px solid var(--border); padding: 1.25rem; font-family: monospace; font-size: 0.8rem; color: var(--text-tertiary); margin-top: auto; overflow-wrap: break-word; }
                .tech-specs-box h5 { font-family: inherit; font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem; letter-spacing: 0.5px; font-weight: 700; }
                .tech-specs-list { list-style: none; padding: 0; margin: 0; }
                .tech-specs-list li { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.25rem 0.75rem; border-bottom: 1px dashed var(--border); padding: 0.3rem 0; }
                .tech-specs-list li:last-child { border-bottom: none; }
                .tech-specs-list li span { min-width: 0; overflow-wrap: break-word; }
                .tech-specs-list li span:last-child { text-align: right; }

                .code-pill { background: rgba(0,82,204,0.1); color: var(--primary); padding: 0.15rem 0.4rem; border-radius: 4px; font-family: monospace; font-weight: 600; font-size: 0.75rem; }

                .feature-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 400; margin-bottom: 1rem; line-height: 1.2; color: var(--text-main); }
                .feature-desc { font-size: 0.925rem; color: var(--text-muted); font-weight: 400; line-height: 1.6; margin-bottom: 1.5rem; }

                .bullet-list { list-style: none; padding: 0; margin-bottom: 1.5rem; }
                .bullet-list li { display: flex; gap: 8px; font-size: 0.85rem; line-height: 1.5; color: var(--text-muted); font-weight: 400; margin-bottom: 0.75rem; align-items: flex-start; }

                .arch-diagram { display: flex; flex-direction: column; align-items: center; gap: 0; padding: 3rem 1rem; }
                .arch-node { padding: 0.9rem 1.6rem; border-radius: 0px; border: 1px solid var(--border); background: #ffffff; font-size: 0.85rem; font-weight: 500; color: var(--text-main); text-align: center; }
                .arch-node.hub { border-color: var(--primary); color: var(--primary); }
                .arch-arrow { width: 1px; height: 2.5rem; background: linear-gradient(180deg, var(--primary), transparent); }
                .arch-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; }
            `}} />

            <div className="container">
                {/* Hero Section */}
                <header className="domains-hero">
                    <span className="section-label">Enterprise Ecosystem Architecture</span>
                    <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                        Platform <span className="gradient-text">Domain Catalog</span>
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                        Explore the deeply coupled microservices, data protocols, and technical mechanics that aggregate the operations of our multi-tenant composable enterprise platform.
                    </p>
                </header>

                {/* Tab Switcher */}
                <div className="tab-bar">
                    <button
                        className={`tab-btn ${activeTab === 'commercial' ? 'active' : ''}`}
                        onClick={() => setActiveTab('commercial')}
                    >
                        <Landmark size={18} />
                        Commercial Pillar
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
                        onClick={() => setActiveTab('technical')}
                    >
                        <Cpu size={18} />
                        Technical &amp; Industrial
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'infrastructure' ? 'active' : ''}`}
                        onClick={() => setActiveTab('infrastructure')}
                    >
                        <Layers size={18} />
                        Infrastructure &amp; Security
                    </button>
                </div>

                {/* Tab Panels */}
                {activeTab === 'commercial' && (
                    <div className="domain-grid">
                        {/* Finance */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper commercial">
                                📊
                            </div>
                            <h3 className="feature-title">Finance</h3>
                            <p className="feature-desc">
                                Budget, expense, revenue, and forecast tracking in one connected view, instead of a different spreadsheet or tool per finance function.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Live budget vs. actuals, expense tracking, and revenue dashboards under one domain.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Rolling forecast tools that update as new transactions land, not just at month-end close.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Per-user, per-organization access control — finance data stays scoped to who should see it.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Domain Spec</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Sub-areas:</span> <span>Budget, Expenses, Revenue, Forecast</span></li>
                                    <li><span>Access model:</span> <span>Per-user domain scoping</span></li>
                                    <li><span>Data Target:</span> <span>Hot Tier</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Medical */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper commercial">
                                🏥
                            </div>
                            <h3 className="feature-title">Medical</h3>
                            <p className="feature-desc">
                                Patient records, lab results, admissions, and staffing in a single domain, gated behind the same organization-level access controls as every other domain.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Patient, lab, and admissions views built on the same real-time data layer as the rest of the platform.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Staff scheduling and department views alongside clinical data, not in a separate system.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Domain access can be restricted per user, so only the right staff reach patient data.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Domain Spec</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Sub-areas:</span> <span>Patients, Labs, Admissions, Staff</span></li>
                                    <li><span>Access model:</span> <span>Per-user domain scoping</span></li>
                                    <li><span>Data Target:</span> <span>Hot Tier</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Project Management */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper commercial">
                                📋
                            </div>
                            <h3 className="feature-title">Project Management</h3>
                            <p className="feature-desc">
                                Project tracking, team assignment, and utilization in the same shell as the rest of the business — no separate PM tool to keep in sync.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Project status, progress, and deadlines visible alongside the domains they actually depend on.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Team utilization and assignment tracking built into the same workspace.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Reachable from both the web dashboard and the GraphControl mobile app.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Domain Spec</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Surfaces:</span> <span>Web + Mobile</span></li>
                                    <li><span>Access model:</span> <span>Per-user domain scoping</span></li>
                                    <li><span>Data Target:</span> <span>Hot Tier</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Annual Operating Procedures */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper commercial">
                                🗂️
                            </div>
                            <h3 className="feature-title">Annual Operating Procedures</h3>
                            <p className="feature-desc">
                                Procedures, documentation, schedules, and staffing plans kept as living, structured records instead of a shared drive full of PDFs.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Standard operating procedures and supporting documentation in one searchable domain.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Recurring schedules and staffing plans tracked alongside the procedures they govern.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Same access-control model as every other domain — no separate compliance silo.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Domain Spec</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Sub-areas:</span> <span>Procedures, Docs, Schedules, Staffing</span></li>
                                    <li><span>Access model:</span> <span>Per-user domain scoping</span></li>
                                    <li><span>Data Target:</span> <span>Warm Tier</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Composable Enterprise */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper commercial">
                                🧩
                            </div>
                            <h3 className="feature-title">Composable Enterprise</h3>
                            <p className="feature-desc">
                                The meta-domain: add new business units to the platform without a re-deploy, and control exactly which users can reach each one.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>New business units can be added dynamically, each with its own configured workspace.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>ADMIN and SUPER_ADMIN accounts control which domains each user can see, down to the individual.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Leaving a user's domain access unrestricted keeps them unrestricted by default — no accidental lockouts.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Domain Spec</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Provisioning:</span> <span>Dynamic, no redeploy</span></li>
                                    <li><span>Access model:</span> <span>ADMIN / SUPER_ADMIN managed</span></li>
                                    <li><span>Data Target:</span> <span>Warm Tier</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'technical' && (
                    <div className="domain-grid">
                        {/* Mechanical 3D Design */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper technical">
                                ⚙️
                            </div>
                            <h3 className="feature-title">Mechanical 3D Design</h3>
                            <p className="feature-desc">
                                A real WebGL 3D CAD viewport in the browser — not a static preview. Every part renders as genuine procedural geometry, not a generic icon.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Bolts, nuts, brackets, bearings, PCBs, and sensors each render as real, distinguishable 3D geometry — a hex nut genuinely has a drilled hole, not a placeholder cube.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Click-to-select, drag-to-reposition, and drag-and-drop assembly placement directly in the 3D scene.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Explode view and shaded/wireframe/x-ray modes, with each route rendering the layout that fits its content — a live 3D viewport, a part catalog grid, or a model review pane.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Domain Spec</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Renderer:</span> <span>WebGL (react-three-fiber)</span></li>
                                    <li><span>Geometry:</span> <span>Procedural, per-part-type</span></li>
                                    <li><span>Layouts:</span> <span>Viewport / Catalog / Model Review</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Chemical Engineering */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper technical">
                                🧪
                            </div>
                            <h3 className="feature-title">Chemical Engineering</h3>
                            <p className="feature-desc">
                                Process and formulation data in the same composable workspace as every other engineering domain, instead of a disconnected process-engineering tool.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Process and formulation records rendered through the same multi-view workspace shell as the platform's other engineering domains.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Diagram, model, and list views available depending on what a given record needs to show.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Same organization- and user-level access controls as every other business domain.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Domain Spec</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Layouts:</span> <span>Diagram / Model / List</span></li>
                                    <li><span>Access model:</span> <span>Per-user domain scoping</span></li>
                                    <li><span>Data Target:</span> <span>Warm Tier</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Core Network Design */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper technical">
                                🌐
                            </div>
                            <h3 className="feature-title">Core Network Design</h3>
                            <p className="feature-desc">
                                Network topology and infrastructure design as live, structured records — not a static diagram file that goes stale the moment it's exported.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Topology and infrastructure diagrams rendered through the platform's own diagram engine, not a separate drawing tool.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Shares the same underlying data layer as the rest of the platform's engineering domains.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Domain access controlled per user, same as every other business unit.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Domain Spec</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Layouts:</span> <span>Diagram / Model / List</span></li>
                                    <li><span>Access model:</span> <span>Per-user domain scoping</span></li>
                                    <li><span>Data Target:</span> <span>Warm Tier</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'infrastructure' && (
                    <div className="domain-grid">
                        {/* Event Broker */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper infrastructure">
                                🔌
                            </div>
                            <h3 className="feature-title">CloudEvents 1.0 Broker</h3>
                            <p className="feature-desc">
                                Global event-driven messaging backbone implementing schema-validated transport mechanisms for microservices.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Enforces CloudEvents 1.0 schema specification compliance (id, source, type, time, application/json).</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Supports strict topic contracts for transaction logs (e.g. <span className="code-pill">ACDOCA_RecordCreated</span> require numeric valueCents).</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Buffers unvalidated/rejected messages, returning descriptive schema validation error logs.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Broker Architecture</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Standard:</span> <span>CloudEvents v1.0 Spec</span></li>
                                    <li><span>Payload Content:</span> <span>application/json</span></li>
                                    <li><span>Subscribers:</span> <span>Topic &amp; Wildcard (*)</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Database Storage Tier */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper infrastructure">
                                💾
                            </div>
                            <h3 className="feature-title">Multi-Tier Storage Engine</h3>
                            <p className="feature-desc">
                                Composable storage engine dividing datasets across Hot, Warm, and Cold storage tiers to maximize speed and cost-efficiency.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span><strong>Hot Tier:</strong> In-Memory storage using Write-Ahead Logging (WAL) and MVCC rollback steps for active transactions.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span><strong>Warm Tier:</strong> Relational document store evaluating foreign-key constraints (e.g., policy to account mappings).</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span><strong>Cold Tier:</strong> Columnar partitioned archival engine outputting optimized Parquet files to disk storage.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Storage Configuration</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Hot Engine:</span> <span>MVCC + WAL Logged</span></li>
                                    <li><span>Warm Engine:</span> <span>FK Constraint Checked</span></li>
                                    <li><span>Cold Engine:</span> <span>Columnar Parquet</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* ABAC Security Engine */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper infrastructure">
                                🔒
                            </div>
                            <h3 className="feature-title">ABAC Security Guard</h3>
                            <p className="feature-desc">
                                Attribute-Based Access Control middleware enforcing organization- and domain-scoped access at the request level.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Evaluates subject attributes (role — USER, ADMIN, or SUPER_ADMIN — plus organization and allowed domains) against resource classifications.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>ADMIN accounts are scoped to their own organization; SUPER_ADMIN accounts operate platform-wide.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Strictly scopes multi-tenant operations, ensuring users can only reach domains and organizations they're actually granted.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Compliance Engine</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Methodology:</span> <span>Attribute-Based (ABAC)</span></li>
                                    <li><span>Roles:</span> <span>USER / ADMIN / SUPER_ADMIN</span></li>
                                    <li><span>Scope:</span> <span>Organization + Domain</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* IT Operations */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper infrastructure">
                                🖥️
                            </div>
                            <h3 className="feature-title">IT Operations</h3>
                            <p className="feature-desc">
                                Infrastructure and systems oversight as its own domain, with the same live dashboards and access controls as every other business unit.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Infrastructure status and systems health surfaced as a dedicated, domain-scoped workspace.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>SUPER_ADMIN accounts get platform-wide system health — process, database, and infrastructure metrics — plus login analytics and raw AI-agent request logs.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Reachable from both the web dashboard and the GraphControl mobile app's own SUPER_ADMIN console.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Domain Spec</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Surfaces:</span> <span>Web + Mobile</span></li>
                                    <li><span>Admin console:</span> <span>System health, agent logs</span></li>
                                    <li><span>Data Target:</span> <span>Hot Tier</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Data and File Management */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper infrastructure">
                                🗄️
                            </div>
                            <h3 className="feature-title">Data and File Management</h3>
                            <p className="feature-desc">
                                Documents and files as first-class, access-controlled records — searchable and previewable in place, not scattered across shared drives.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Document upload, preview, and organization under the platform's own access-control model.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Backed by the same Hot/Warm/Cold tiered storage engine as the rest of the platform.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Same per-user domain access rules as every other business unit — no separate file-permissions system to maintain.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Domain Spec</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Storage:</span> <span>Hot / Warm / Cold Tiers</span></li>
                                    <li><span>Access model:</span> <span>Per-user domain scoping</span></li>
                                    <li><span>Data Target:</span> <span>Tiered</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Micro-Frontend Composable Shell */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper infrastructure">
                                🧩
                            </div>
                            <h3 className="feature-title">Composable Micro-Frontend Shell &amp; Cross-Boundary State Sync</h3>
                            <p className="feature-desc">
                                Module Federation-based host shell that loads independently deployable domain remotes at runtime, letting teams ship business-unit experiences without a monolithic frontend release.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Host shell dynamically loads remote bundles (e.g. Accounting) at runtime with only shared dependencies deduplicated at the edge.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Singleton page-context bridge shares live data, notifications, and AI-proposed actions seamlessly across the federation boundary.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} style={{ flexShrink: 0, color: 'var(--primary)' }} />
                                    <span>Each domain remote ships and deploys on its own cadence, isolated from the host&apos;s release cycle.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Federation Spec</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Pattern:</span> <span>Host + Independent Remotes</span></li>
                                    <li><span>State Bridge:</span> <span>Shared Singleton Context</span></li>
                                    <li><span>Deploy Model:</span> <span>Per-Domain Release Cadence</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '640px', margin: '-2rem auto 3rem', lineHeight: 1.6 }}>
                    Plus dozens of additional configurable domains — Procurement, Sales, Human Resources, Legal, Marketing, Cybersecurity Operations, Workplace Management, and more — each addable to an organization without a platform redeploy.
                </p>

                {/* Comparative Feature Matrix Section */}
                <section style={{ margin: '5rem 0' }}>
                    <FeatureMatrix />
                </section>

                {/* How the platform is built — drawn from the internal Architecture MS
                    solution document: one gateway fronting a fleet of gRPC
                    microservices. Service count is deliberately not stated as a
                    hard number since it keeps growing (most recently gaining a
                    CAD file-processing service and an OAuth2 integrations service). */}
                <section style={{ margin: '6rem 0', textAlign: 'center' }}>
                    <span className="section-label">Under the Hood</span>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', marginBottom: '1rem' }}>How the Platform Is Built</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
                        One browser-facing app talks to a single HTTP gateway, which fans out over gRPC to a fleet of independent
                        microservices — from finance and medical to CAD file processing and third-party OAuth integrations — each
                        backed by its own slice of a shared Postgres database.
                    </p>

                    <div className="arch-diagram">
                        <div className="arch-node">React SPA</div>
                        <div className="arch-arrow" />
                        <div className="arch-node hub">API Gateway</div>
                        <div className="arch-arrow" />
                        <div className="arch-row">
                            <div className="arch-node">Finance</div>
                            <div className="arch-node">Medical</div>
                            <div className="arch-node">Infrastructure</div>
                            <div className="arch-node">CAD Processing</div>
                            <div className="arch-node">Integrations</div>
                            <div className="arch-node">…and more</div>
                        </div>
                        <div className="arch-arrow" />
                        <div className="arch-node">PostgreSQL</div>
                    </div>
                </section>
            </div>
        </main>
    );
}
