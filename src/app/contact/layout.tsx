import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact TOBOD - Get in Touch',
  description: 'Contact TOBOD for desiccant inquiries, technical support, and business partnerships. We are here to help with your moisture protection needs.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
