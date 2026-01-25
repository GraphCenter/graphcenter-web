'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        summary: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('http://localhost:3001/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', company: '', summary: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const inputClasses = "w-full p-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm";
    const labelClasses = "block text-sm font-semibold text-gray-700 mb-2 ml-1";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
        >
            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="text-center py-12"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            className="inline-block p-4 rounded-full bg-green-100 mb-6"
                        >
                            <CheckCircle2 className="w-16 h-16 text-green-600" />
                        </motion.div>
                        <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                        <p className="text-gray-600 mb-8">Thank you for reaching out. Our team will get back to you shortly.</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="btn-primary"
                        >
                            Send Another Message
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                                <label className={labelClasses}>Full Name</label>
                                <input
                                    required
                                    type="text"
                                    className={inputClasses}
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </motion.div>
                            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                                <label className={labelClasses}>Work Email</label>
                                <input
                                    required
                                    type="email"
                                    className={inputClasses}
                                    placeholder="john@company.com"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </motion.div>
                        </div>

                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                            <label className={labelClasses}>Company Name</label>
                            <input
                                required
                                type="text"
                                className={inputClasses}
                                placeholder="GraphCenter Inc."
                                value={formData.company}
                                onChange={e => setFormData({ ...formData, company: e.target.value })}
                            />
                        </motion.div>

                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                            <label className={labelClasses}>Summary of Needs</label>
                            <textarea
                                required
                                rows={4}
                                className={inputClasses}
                                placeholder="Tell us about the autonomous ecosystems you're envisioning..."
                                value={formData.summary}
                                onChange={e => setFormData({ ...formData, summary: e.target.value })}
                            />
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={status === 'loading'}
                            type="submit"
                            className="w-full btn-primary py-4 rounded-xl flex items-center justify-center gap-2 text-lg font-bold shadow-lg shadow-blue-500/30"
                        >
                            {status === 'loading' ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                <>
                                    <span>Initiate Collaboration</span>
                                    <Send className="w-5 h-5" />
                                </>
                            )}
                        </motion.button>

                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-2 text-red-600 justify-center bg-red-50 p-3 rounded-lg"
                            >
                                <AlertCircle className="w-5 h-5" />
                                <span>Something went wrong. Please try again.</span>
                            </motion.div>
                        )}
                    </motion.form>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
