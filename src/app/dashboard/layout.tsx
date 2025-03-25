import Header from '@/components/Header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">{children}</main>
    </div>
  );
}