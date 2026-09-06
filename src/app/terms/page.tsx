import type { Metadata } from 'next';
import PoweredByBadge from '@/components/PoweredByBadge';

export const metadata: Metadata = {
    title: 'Terms of Service | GraphCenter',
    description: 'Terms of Service for GraphCenter and the GraphControl platform.',
};

const SECTIONS = [
    {
        title: '1. Acceptance of Terms',
        body: 'By accessing or using GraphCenter\'s websites, dashboards, or the GraphControl platform (together, the "Services"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Services.',
    },
    {
        title: '2. Use of Service',
        body: 'You may use the Services only in compliance with these Terms and all applicable laws. You are responsible for the accuracy of information you provide and for maintaining the confidentiality of your account credentials.',
    },
    {
        title: '3. Accounts',
        body: 'Certain features require an account. You agree to provide accurate registration information and to promptly update it as needed. You are responsible for all activity that occurs under your account.',
    },
    {
        title: '4. Payments',
        body: 'Where the Services include paid plans, fees are billed in advance on a recurring or one-time basis as described at checkout. Fees are non-refundable except as required by law or as otherwise stated in a separate agreement.',
    },
    {
        title: '5. Termination',
        body: 'We may suspend or terminate access to the Services for conduct that violates these Terms or is otherwise harmful to other users, us, or third parties. You may stop using the Services at any time.',
    },
    {
        title: '6. Changes to These Terms',
        body: 'We may update these Terms from time to time. Material changes will be reflected by an updated "Effective date" below. Continued use of the Services after changes take effect constitutes acceptance of the revised Terms.',
    },
    {
        title: '7. Contact',
        body: 'Questions about these Terms can be directed to our team via the Contact page.',
    },
];

export default function TermsPage() {
    return (
        <main className="min-h-screen" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-4">
                        Legal
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Terms of Service</h1>
                    <p className="text-gray-500 mb-2">Effective date: draft — pending legal review</p>
                    <p className="text-gray-600 leading-relaxed mb-12">
                        This is a placeholder Terms of Service intended as a starting structure for GraphCenter&apos;s
                        legal team to review and finalize before publication.
                    </p>

                    <div className="space-y-10">
                        {SECTIONS.map((section) => (
                            <div key={section.title}>
                                <h2 className="text-xl font-bold mb-2">{section.title}</h2>
                                <p className="text-gray-600 leading-relaxed">{section.body}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 pt-8 flex justify-center" style={{ borderTop: '1px solid var(--border)' }}>
                        <PoweredByBadge />
                    </div>
                </div>
            </div>
        </main>
    );
}
