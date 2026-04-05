'use client';

import { useState, useEffect } from 'react';

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    // Using any for demo data structure; normally this would have an interface mapped to Prisma
    const [contacts, setContacts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            setIsAuthenticated(true);
            sessionStorage.setItem('adminAuth', 'true');
        } else {
            setError('Invalid authenticators');
        }
    };

    useEffect(() => {
        if (sessionStorage.getItem('adminAuth') === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            setIsLoading(true);
            fetch('http://localhost:3001/contacts')
                .then(res => {
                    if (!res.ok) throw new Error("Network error");
                    return res.json();
                })
                .then(data => {
                    setContacts(data);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.error("Failed to fetch contacts", err);
                    setIsLoading(false);
                });
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return (
            <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
                <div className="glass-dark" style={{ padding: '3rem', borderRadius: 'var(--radius)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
                    <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem', textShadow: '0 0 20px rgba(0, 178, 255, 0.5)' }}>🛡️</div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '2rem', letterSpacing: '-0.5px' }}>Secure Portal</h1>
                    
                    {error && <div style={{ color: '#ff4444', marginBottom: '1rem', background: 'rgba(255,0,0,0.1)', padding: '0.8rem', borderRadius: '4px', fontSize: '0.9rem', border: '1px solid rgba(255,0,0,0.2)' }}>{error}</div>}
                    
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Admin Username"
                            className="auth-input"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Passcode"
                            className="auth-input"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '0.5rem', boxShadow: '0 0 15px rgba(0,82,204,0.5)' }}>
                            Authenticate
                        </button>
                    </form>
                </div>
            </main>
        );
    }

    return (
        <main style={{ minHeight: '100vh', paddingTop: '8rem', paddingBottom: '4rem', position: 'relative', zIndex: 10 }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#f8faff', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                        Admin <span style={{ color: '#00b2ff' }}>Command Center</span>
                    </h1>
                    <button 
                        onClick={() => { setIsAuthenticated(false); sessionStorage.removeItem('adminAuth'); }}
                        style={{ background: 'rgba(255,0,0,0.1)', border: '1px solid rgba(255,0,0,0.3)', color: '#ff7777', padding: '0.6rem 1.5rem', borderRadius: '30px', cursor: 'pointer', fontWeight: 600, transition: 'all 0.3s ease' }}
                    >
                        Disconnect
                    </button>
                </div>
                
                <div className="glass-dark" style={{ padding: '2rem', borderRadius: 'var(--radius)', overflowX: 'auto', borderTop: '4px solid #0052cc' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '1.5rem', color: '#f8faff', margin: 0 }}>Incoming Service Requests</h2>
                        <div style={{ background: 'rgba(0, 178, 255, 0.1)', color: '#00b2ff', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>
                            {contacts.length} Record(s) Active
                        </div>
                    </div>
                    
                    {isLoading ? (
                        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'rgba(255,255,255,0.5)' }}>
                            <div className="animate-spin inline-block w-8 h-8 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full mb-4"></div>
                            <div>Loading secure remote data...</div>
                        </div>
                    ) : contacts.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'rgba(255,255,255,0.5)' }}>
                            No service requests found in the database.
                        </div>
                    ) : (
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '80px' }}>ID</th>
                                    <th style={{ width: '120px' }}>Received</th>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Email</th>
                                    <th>Project Summary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact: any) => (
                                    <tr key={contact.id}>
                                        <td style={{ color: '#00b2ff', fontWeight: 600 }}>#{contact.id}</td>
                                        <td style={{ color: 'rgba(255,255,255,0.6)' }}>{new Date(contact.createdAt).toLocaleDateString()}</td>
                                        <td style={{ fontWeight: 600, color: 'white' }}>{contact.name}</td>
                                        <td style={{ color: 'rgba(255,255,255,0.8)' }}>{contact.company || '-'}</td>
                                        <td><a href={`mailto:${contact.email}`} style={{ color: '#00b2ff', textDecoration: 'none' }}>{contact.email}</a></td>
                                        <td style={{ maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'rgba(255,255,255,0.7)' }} title={contact.summary}>
                                            {contact.summary}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </main>
    );
}
