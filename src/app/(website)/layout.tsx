import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/layout/Footer';

interface WebsiteLayoutProps {
  children: React.ReactNode;
}

export default function WebsiteLayout({
  children,
}: WebsiteLayoutProps) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {children}
      </main>

      <Footer />
    </>
  );
}