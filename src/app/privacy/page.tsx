import type { Metadata } from 'next';
import PoweredByBadge from '@/components/PoweredByBadge';

export const metadata: Metadata = {
    title: 'Privacy Policy | GraphCenter',
    description: 'Privacy Policy for GraphCenter and the GraphControl platform.',
};

const SECTIONS = [
    {
        title: '1. Information We Collect',
        body: 'We collect information you provide directly (such as account and contact details), information generated through your use of the Services (such as usage and diagnostic data), and information from third parties where applicable.',
    },
    {
        title: '2. How We Use It',
        body: 'We use collected information to provide and improve the Services, communicate with you, secure our systems, and comply with legal obligations.',
    },
    {
        title: '3. Data Sharing',
        body: 'We do not sell personal information. We may share information with service providers who process it on our behalf, or where required by law.',
    },
    {
        title: '4. Data Retention & Security',
        body: 'We retain information for as long as necessary to provide the Services and for legitimate business or legal purposes, and apply reasonable technical and organizational measures to protect it.',
    },
    {
        title: '5. Your Rights',
        body: 'Depending on your jurisdiction, you may have rights to access, correct, or delete your personal information, or to object to certain processing. Contact us to exercise these rights.',
    },
    {
        title: '6. Changes to This Policy',
        body: 'We may update this Privacy Policy from time to time. Material changes will be reflected by an updated "Effective date" below.',
    },
    {
        title: '7. Contact',
        body: 'Questions about this Privacy Policy can be directed to our team via the Contact page.',
    },
];

export default function PrivacyPage() {
    return (
        <main className="min-h-screen" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    <div className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-4">
                        Legal
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Privacy Policy</h1>
                    <p className="text-gray-500 mb-2">Effective date: draft — pending legal review</p>
                    <p className="text-gray-600 leading-relaxed mb-12">
                        This is a placeholder Privacy Policy intended as a starting structure for GraphCenter&apos;s
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
