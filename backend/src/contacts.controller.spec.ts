import { ContactsController, allowSubmission, parseContact } from './contacts.controller';

/**
 * The contact route used to list every lead to anyone (GET), and store
 * whatever body it was given (POST).
 */
describe('the contact form backend', () => {
    it('has no route that lists submissions', () => {
        expect((ContactsController.prototype as any).findAll).toBeUndefined();
        const routes = Object.getOwnPropertyNames(ContactsController.prototype).filter((k) => k !== 'constructor');
        expect(routes).toEqual(['create']);
    });

    it('takes the four fields, trimmed, and nothing else', () => {
        expect(parseContact({ name: ' Ada ', email: 'ada@example.com', company: '', summary: 'Hi', id: 5, createdAt: '1999' }))
            .toEqual({ name: 'Ada', email: 'ada@example.com', company: '', summary: 'Hi' });
    });

    it('refuses missing, oversized or malformed fields, and filled honeypots', () => {
        expect(parseContact({ email: 'a@b.co', summary: 'x' })).toMatch(/name is required/);
        expect(parseContact({ name: 'A', email: 'not-an-email', summary: 'x' })).toMatch(/email/);
        expect(parseContact({ name: 'A', email: 'a@b.co', summary: 'x'.repeat(4001) })).toMatch(/summary is too long/);
        expect(parseContact({ name: { $ne: 1 }, email: 'a@b.co', summary: 'x' })).toMatch(/name is required/);
        expect(parseContact({ name: 'A', email: 'a@b.co', summary: 'x', website: 'http://spam' })).toBe('Rejected');
    });

    it('accepts five submissions per address per ten minutes', () => {
        const now = 1_000_000;
        for (let i = 0; i < 5; i++) expect(allowSubmission('1.2.3.4', now + i)).toBe(true);
        expect(allowSubmission('1.2.3.4', now + 10)).toBe(false);
        expect(allowSubmission('5.6.7.8', now + 10)).toBe(true);
        expect(allowSubmission('1.2.3.4', now + 10 * 60_000 + 1)).toBe(true);
    });
});
