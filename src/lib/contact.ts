/**
 * The site's published email addresses.
 *
 * They were hard-coded to graphcenter.ai, a domain that is not registered:
 * whoever registers it receives every message sent to them, the security@
 * address for vulnerability reports included, and can send mail that looks
 * like it comes from GraphCenter. The domain is now a setting,
 * NEXT_PUBLIC_CONTACT_EMAIL_DOMAIN, set only to a domain you own with mail
 * configured. Without it no address is shown and the pages point to the
 * contact form instead.
 */
export function contactEmail(mailbox: 'strategy' | 'investors' | 'security'): string | null {
    const domain = (process.env.NEXT_PUBLIC_CONTACT_EMAIL_DOMAIN ?? '').trim().toLowerCase();
    if (!/^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(domain)) return null;
    return `${mailbox}@${domain}`;
}
