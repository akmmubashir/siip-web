export interface Signal {
  id: string;
  slug: string;
  title: string;
  date: string;
  body: string;
  excerpt: string;
}
export const signals: Signal[] = [{
  id: '1',
  slug: 'why-participation-must-become-infrastructure',
  title: 'Why Participation Must Become Infrastructure',
  date: '2024-01-15',
  excerpt: 'Modern economies reward scale, optimise payments, and accelerate capital. Yet they do not measure participation.',
  body: `Modern economies reward scale, optimise payments, and accelerate capital. Yet they do not measure participation.

When transactions end value, individuals lose position. When participation disappears, stability weakens.

Participation cannot remain a behavioural tool. It must become infrastructure.

This is the premise on which SIIP is being built.`
}, {
  id: '2',
  slug: 'vat-visibility-as-economic-clarity',
  title: 'VAT Visibility as Economic Clarity',
  date: '2024-01-08',
  excerpt: 'VAT is one of the most important instruments of national participation. Yet consumers rarely see their contribution.',
  body: `VAT is one of the most important instruments of national participation. Yet consumers rarely see their contribution.

By making VAT visible inside participation flows, individuals understand not only what they spend, but how they contribute to the economy.

Participation begins with transparency.`
}];
export function getSignalBySlug(slug: string): Signal | undefined {
  return signals.find(signal => signal.slug === slug);
}