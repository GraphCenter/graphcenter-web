'use client';

import { useState } from 'react';
import FeatureMatrix from '@/components/FeatureMatrix';
import { Landmark, ShieldAlert, Cpu, Layers, HardDrive, Network, GitPullRequest, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function DomainsPage() {
    const [activeTab, setActiveTab] = useState<'commercial' | 'technical' | 'infrastructure'>('commercial');

    return (
        <main style={{ paddingTop: '8rem', minHeight: '100vh', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
            <style dangerouslySetInnerHTML={{__html: `
                .domains-hero { text-align: center; padding: 4rem 0 2rem; }
                .tab-bar { display: flex; justify-content: center; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap; }
                .tab-btn { display: flex; align-items: center; gap: 8px; padding: 1rem 2rem; border-radius: 40px; font-weight: 700; cursor: pointer; transition: all 0.3s; font-family: inherit; font-size: 0.95rem; border: 1px solid var(--border); background: white; color: var(--text-muted); }
                .tab-btn:hover { background: var(--accent); color: var(--primary); border-color: var(--primary); transform: translateY(-2px); }
                .tab-btn.active { background: var(--primary); color: white; border-color: var(--primary); box-shadow: 0 10px 20px -5px rgba(0, 82, 204, 0.25); }
                
                .domain-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-bottom: 5rem; }
                @media (min-width: 1024px) {
                    .domain-grid { grid-template-columns: repeat(3, 1fr); }
                }
                
                .domain-card { background: var(--bg-card); border-radius: var(--radius); border: 1px solid var(--border); box-shadow: var(--shadow); padding: 2.5rem; transition: all 0.3s ease; position: relative; overflow: hidden; display: flex; flex-direction: column; }
                .domain-card:hover { transform: translateY(-5px); box-shadow: 0 20px 30px rgba(0, 82, 204, 0.08); border-color: var(--primary); }
                
                .domain-icon-wrapper { width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; font-size: 1.5rem; }
                .domain-icon-wrapper.commercial { background: #e0f2fe; color: #0052cc; border: 1px solid #bae6fd; }
                .domain-icon-wrapper.technical { background: #faf5ff; color: #6b21a8; border: 1px solid #f3e8ff; }
                .domain-icon-wrapper.infrastructure { background: #ecfdf5; color: #047857; border: 1px solid #d1fae5; }
                
                .tech-specs-box { background: #f8fafc; border-radius: 8px; border: 1px solid var(--border); padding: 1.25rem; font-family: monospace; font-size: 0.8rem; color: #334155; margin-top: auto; }
                .tech-specs-box h5 { font-family: inherit; font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.5rem; letter-spacing: 0.5px; font-weight: 700; }
                .tech-specs-list { list-style: none; padding: 0; margin: 0; }
                .tech-specs-list li { display: flex; justify-content: space-between; border-bottom: 1px dashed rgba(0,0,0,0.06); padding: 0.3rem 0; }
                .tech-specs-list li:last-child { border-bottom: none; }
                
                .code-pill { background: #eff6ff; color: var(--primary); padding: 0.15rem 0.4rem; border-radius: 4px; font-family: monospace; font-weight: 600; font-size: 0.75rem; }
                
                .feature-title { font-size: 1.5rem; font-weight: 800; margin-bottom: 1rem; line-height: 1.2; }
                .feature-desc { font-size: 0.925rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem; }
                
                .bullet-list { list-style: none; padding: 0; margin-bottom: 1.5rem; }
                .bullet-list li { display: flex; gap: 8px; font-size: 0.85rem; line-height: 1.5; color: var(--text-main); margin-bottom: 0.75rem; align-items: flex-start; }
            `}} />

            <div className="container">
                {/* Hero Section */}
                <header className="domains-hero">
                    <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'var(--accent)', color: 'var(--primary)', borderRadius: '30px', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                        Enterprise Ecosystem Architecture
                    </div>
                    <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 900 }}>
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
                        {/* Real-Time Ledger Integration */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper commercial">
                                📊
                            </div>
                            <h3 className="feature-title">Real-Time In-Memory Ledger Accounting &amp; Universal Journal Processing</h3>
                            <p className="feature-desc">
                                Core transactional module enabling real-time double-entry journal postings directly into the unified in-memory ledger database structures.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Maps record updates utilizing structured identifiers: Client <span className="code-pill">RCLNT: "100"</span> and Ledger <span className="code-pill">RLDNR: "0L"</span>.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Executes balanced postings validating Debit/Credit markers (<span className="code-pill">S</span> / <span className="code-pill">H</span>) and transaction values (<span className="code-pill">TSL</span>).</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Tightly integrates with the physical WMS slot coordinate map to update inventories synchronously.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>In-Memory Ledger Invariant</h5>
                                <ul className="tech-specs-list">
                                    <li><span>GL Cash Account:</span> <span>100000</span></li>
                                    <li><span>Posting Type:</span> <span>Double-Entry Balance</span></li>
                                    <li><span>Data Target:</span> <span>Hot Tier + WAL</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Multi-Subsidiary Global Consolidation */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper commercial">
                                🌍
                            </div>
                            <h3 className="feature-title">Multi-Subsidiary Global Consolidation &amp; Automated Intercompany Elimination Engine</h3>
                            <p className="feature-desc">
                                Manages the global corporate multi-subsidiary matrix, facilitating dynamic consolidated tax conversions and intercompany eliminations.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Consolidates annual revenues across primary regions: AMER ($1.25B), Europe EMEA ($820M), and APAC ($530M).</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Automates tax rules mapping localized codes (<span className="code-pill">DE-MWST-19</span> / <span className="code-pill">SG-GST-9</span>) to core currency bases.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Performs transactional parenting checks based on <span className="code-pill">parentSubsidiaryId</span> relationships.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Global Hierarchy Spec</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Parent Tenant:</span> <span>Apex Global (AMER)</span></li>
                                    <li><span>Active Tenants:</span> <span>3 Subsidiaries</span></li>
                                    <li><span>Consolidation:</span> <span>Dynamic Relational</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Core Banking Distributed Ledger & Portfolio NAV */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper commercial">
                                💳
                            </div>
                            <h3 className="feature-title">Distributed Ledger Core Banking &amp; Portfolio NAV Engine</h3>
                            <p className="feature-desc">
                                Strategic financial ledger handling high-liquidity corporate treasury vaults and real-time Net Asset Value (NAV) wealth portfolio aggregations.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Computes continuous-compound interest dynamically on treasury vaults (e.g. 4.75% USD AMER Treasury, 3.9% EUR EMEA Ops).</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Uses <span className="code-pill">lastInterestAccrualTime</span> to calculate precise time differentials for ledger credit updates.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Sums multi-asset wealth portfolios (AAPL, MSFT, NVDA, GOOGL, TSLA) to calculate live C-Level corporate liquidity indices.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Treasury Specs</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Total Liquidity:</span> <span>$260M+ Vaults</span></li>
                                    <li><span>Interest Model:</span> <span>Continuous Compound</span></li>
                                    <li><span>Database Engine:</span> <span>Hot Tier In-Memory</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Commercial Real Estate Asset Leasing */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper commercial">
                                🏢
                            </div>
                            <h3 className="feature-title">Commercial Real Estate Asset Leasing &amp; CAM Reconciliation Engine</h3>
                            <p className="feature-desc">
                                Automates commercial lease management, indexing rentable square foot calculations against dynamic CAM (Common Area Maintenance) rates.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Processes active lease accounts (e.g. rent calculations and active portfolio metrics).</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Dynamically recalculates outstanding balances by applying proportional CAM shares (<span className="code-pill">camSharePercent</span>).</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Integrates lease tenures directly to general ledger accounts for revenue amortization schedules.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Lease Calculations</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Base Index:</span> <span>Rentable SF Mapped</span></li>
                                    <li><span>CAM Allocation:</span> <span>Variable % Share</span></li>
                                    <li><span>Data Target:</span> <span>Hot Tier Store</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Restricted Fund Accounting */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper commercial">
                                🎗️
                            </div>
                            <h3 className="feature-title">Restricted Fund Accounting &amp; Allocation Pool Tracker</h3>
                            <p className="feature-desc">
                                Non-Profit grant and community endowment tracking module, establishing strict legal compliance boundaries for restricted funds.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Separates grant allocations into restricted and unrestricted accounts (e.g. NSF STEM Lab Research at $15M).</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Enforces spending validation against pre-allocated pools, tracking exact spent vs remaining balances.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Automatically freezes accounts upon reaching expiration years (<span className="code-pill">expirationYear</span>) to avoid audits.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Fund Allocation Specs</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Allocation Rules:</span> <span>Restricted Partitioning</span></li>
                                    <li><span>SLA Safeguards:</span> <span>Auto-Expiration Freeze</span></li>
                                    <li><span>Auditability:</span> <span>SOC2 Balanced</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'technical' && (
                    <div className="domain-grid">
                        {/* MES / BOM Explosion */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper technical">
                                ⚙️
                            </div>
                            <h3 className="feature-title">Discrete Manufacturing Execution System (MES) &amp; Recursive BOM Explosion Routing</h3>
                            <p className="feature-desc">
                                Industrial routing engine executing recursive 3-tier deep Bill of Materials (BOM) explosions for multi-component machinery.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Explodes complex items (Heavy Turbines) down to Rotor Assembly (Tier 1), Main Bearing Set (Tier 2), and sealed bearing components (Tier 3).</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Uses sub-BOM recursive objects mapping precise SKU counts, and quantities required.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Directly maps manufacturing workflows to logistics purchase orders on parts exhaustion.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>BOM Explosion Specs</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Recursion Limit:</span> <span>3 Tiers Deep</span></li>
                                    <li><span>BOM Core Target:</span> <span>ASM-TURBINE-HVY-001</span></li>
                                    <li><span>Communication:</span> <span>CloudEvents Trigger</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* IoT Telemetry Ingestion */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper technical">
                                🛰️
                            </div>
                            <h3 className="feature-title">IoT Telemetry Ingestion &amp; Predictive Asset Performance Engineering</h3>
                            <p className="feature-desc">
                                High-velocity industrial telemetry diagnostic loops utilizing Root Cause Failure Analysis (RCFA) models on rotating machinery assets.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Ingests live physical data parameters: vibration frequency (<span className="code-pill">vibrationHz</span>) and thermal levels (<span className="code-pill">temperatureC</span>).</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Triggers preventive work orders when anomalous limits are exceeded (e.g. vibration &gt; 3Hz).</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Archives historical streams directly into columnar Parquet format in the database Cold Tier.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>RCFA Telemetry</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Ingestion Frequency:</span> <span>5-min Interval Loops</span></li>
                                    <li><span>Assets:</span> <span>Heavy Turbine / Jet Fleet</span></li>
                                    <li><span>Archival Format:</span> <span>Parquet JSONL files</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Declarative BPM */}
                        <div className="domain-card">
                            <div className="domain-icon-wrapper technical">
                                🌐
                            </div>
                            <h3 className="feature-title">Declarative Business Process Management (BPM) &amp; Policy Underwriting Engine</h3>
                            <p className="feature-desc">
                                Core business process management (BPM) engine driving commercial policies and insurance state-machines.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Orchestrates insurance policies, tracking coverage value limits ($1.2B Marine Cargo) and risk indicators.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Evaluates state transitions (DRAFT → UNDERWRITTEN → ACTIVE) through strict validation pipelines.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Integrates directly with CRM accounts via referential ID checks, blocking orphaned entities.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>BPM State-Machine</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Transition Rules:</span> <span>Declarative BPM State Engine</span></li>
                                    <li><span>Integrations:</span> <span>CRM Relational</span></li>
                                    <li><span>Policy Target:</span> <span>underwriting_policy</span></li>
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
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Enforces CloudEvents 1.0 schema specification compliance (id, source, type, time, application/json).</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Supports strict topic contracts for transaction logs (e.g. <span className="code-pill">ACDOCA_RecordCreated</span> require numeric valueCents).</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
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
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>**Hot Tier:** In-Memory storage using Write-Ahead Logging (WAL) and MVCC rollback steps for active transactions.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>**Warm Tier:** Relational document store evaluating foreign-key constraints (e.g., policy to account mappings).</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>**Cold Tier:** Columnar partitioned archival engine outputting optimized Parquet files to disk storage.</span>
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
                                Attribute-Based Access Control middleware enforcing SOC2/GDPR compliance at the request level.
                            </p>
                            <ul className="bullet-list">
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Evaluates subject attributes (Role, Clearance level, Subsidiary) against resource classifications.</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Secures financial data by requiring **TLS v1.3** and private range IP addresses (**RFC1918**).</span>
                                </li>
                                <li>
                                    <CheckCircle2 size={16} className="text-green-600" style={{ flexShrink: 0 }} />
                                    <span>Strictly scopes multi-tenant operations, ensuring users can only manipulate resources matching their subsidiary ID.</span>
                                </li>
                            </ul>
                            <div className="tech-specs-box">
                                <h5>Compliance Engine</h5>
                                <ul className="tech-specs-list">
                                    <li><span>Methodology:</span> <span>Attribute-Based (ABAC)</span></li>
                                    <li><span>Cryptographic Floor:</span> <span>TLS 1.3 Standard</span></li>
                                    <li><span>Network Scope:</span> <span>RFC1918 Private IP</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Comparative Feature Matrix Section */}
                <section style={{ margin: '5rem 0' }}>
                    <FeatureMatrix />
                </section>
            </div>
        </main>
    );
}
