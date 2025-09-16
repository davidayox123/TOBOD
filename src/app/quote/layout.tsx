import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Quote - TOBOD Desiccant Manufacturer',
  description: 'Get a customized quote for premium desiccant products. Fast response, competitive pricing, and expert recommendations for your moisture protection needs.',
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
