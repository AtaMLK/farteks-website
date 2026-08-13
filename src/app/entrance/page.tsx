import type { Metadata } from 'next';
import EntrancePage from '@/components/entrance/page';

export const metadata: Metadata = {
  title: 'Welcome',
  robots: { index: false, follow: false },
};

export default function EntranceRoute() {
  return <EntrancePage />;
}
