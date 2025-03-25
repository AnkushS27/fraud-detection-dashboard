import { getFraudApps, getFraudUrls, getFraudTrends } from '@/lib/data';
import Dashboard from '@/components/Dashboard';

export default async function DashboardPage() {
  const apps = await getFraudApps();
  const urls = await getFraudUrls();
  const trends = await getFraudTrends();
  return <Dashboard apps={apps} urls={urls} trends={trends} />;
}