export interface Signal {
  id: string;
  slug: string;
  title: string;
  date: string;
  body: string;
  excerpt: string;
}
export const signals: Signal[] = [
  {
    id: "1",
    slug: "why-participation-must-become-infrastructure",
    title: "Why Participation Must Become Infrastructure",
    date: "2026-01-19",
    excerpt:
      "Modern economies reward scale, optimise payments, and accelerate capital. Yet they do not measure participation.",
    body: `Modern economies reward scale, optimise payments, and accelerate capital. Yet they do not measure participation.

When transactions end value, individuals lose position. When participation disappears, stability weakens.

Participation cannot remain a behavioural tool. It must become infrastructure.

This is the premise on which SIIPs is being built.`,
  },
  {
    id: "2",
    slug: "vat-visibility-as-economic-clarity",
    title: "VAT Visibility as Economic Clarity",
    date: "2026-01-20",
    excerpt:
      "VAT is one of the most important instruments of national participation. Yet consumers rarely see their contribution.",
    body: `VAT is one of the most important instruments of national participation. Yet consumers rarely see their contribution.

By making VAT visible inside participation flows, individuals understand not only what they spend, but how they contribute to the economy.

Participation begins with transparency.`,
  },
  {
    id: "3",
    slug: "siips-is-not-built-for-quarters-it-is-built-for-decades",
    title: "SIIPs is not built for quarters. It is built for decades",
    date: "2026-01-21",
    excerpt:
      "SIIPs is designed as long-term economic infrastructure, not a short-term venture.",
    body: `SIIPs is designed as long-term economic infrastructure, not a short-term venture.

    Our architecture, governance, and neutrality principles exist to ensure stability across
generations, not growth spikes across funding cycles.

We optimise for endurance, not acceleration.`,
  },
  {
    id: "4",
    slug: "in-siips-value-is-not-rewarded-it-is-positioned",
    title: "In SIIPs, value is not rewarded. It is positioned",
    date: "2026-01-22",
    excerpt: "SIIPs does not distribute rewards, cashback, or incentives.",
    body: `SIIPs does not distribute rewards, cashback, or incentives.
Instead, it builds long-term economic position through verified participation.

Position compounds.
Perks disappear.

This is the foundation of a stable participation economy.
`,
  },
  {
    id: "5",
    slug: "siips-does-not-optimise-for-profit-it-optimises-for-neutrality-integrity-and-stability",
    title:
      "SIIPs does not optimise for profit. It optimises for neutrality, integrity, and stability.",
    date: "2026-01-23",
    excerpt:
      "SIIPs is structurally prohibited from extraction, commissions, consumer fees, and incentive distortion.",
    body: `SIIPs is structurally prohibited from extraction, commissions, consumer fees, and incentive
distortion.

- We do not interfere with payments.

- We do not bias circulation.

- We do not sell attention or data.

Our only mandate is to preserve a neutral, trusted participation layer for the economy.
`,
  },
  {
    id: "6",
    slug: "siips-does-not-promise-outcomes-it-provides-structure",
    title: "SIIPs does not promise outcomes. It provides structure.",
    date: "2026-01-26",
    excerpt: "SIIPs does not guarantee growth, returns, or success.",
    body: `SIIPs does not guarantee growth, returns, or success.

It builds a neutral participation architecture in which retention, circulation, and long-term
position emerge naturally from real economic behaviour.

Outcomes belong to participants.
Structure belongs to SIIPs.`,
  },
  {
    id: "7",
    slug: "siips-grows-only-at-the-speed-neutrality-can-be-preserved",
    title: "SIIPs grows only at the speed neutrality can be preserved.",
    date: "2026-01-27",
    excerpt: "SIIPs does not expand for scale, headlines, or valuation.",
    body: `SIIPs does not expand for scale, headlines, or valuation.

Expansion is permitted only when governance, integrity, and architectural discipline can be
maintained without distortion.

Stability is a prerequisite for growth.
Not a by-product of it.`,
  },
];
export function getSignalBySlug(slug: string): Signal | undefined {
  return signals.find((signal) => signal.slug === slug);
}
