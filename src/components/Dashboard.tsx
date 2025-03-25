'use client';

import AppTable from './AppTable';
import UrlTable from './UrlTable';
import TrendChart from './TrendChart';
import { FraudulentApp, FraudulentUrl, FraudTrend } from '@/types/fraud';

export default function Dashboard({
  apps,
  urls,
  trends,
}: {
  apps: FraudulentApp[];
  urls: FraudulentUrl[];
  trends: FraudTrend[];
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">Fraudulent Apps</h2>
        <AppTable apps={apps} />
      </div>
      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">Fraudulent URLs</h2>
        <UrlTable urls={urls} />
      </div>
      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">30-Day Fraud Trend</h2>
        <TrendChart trends={trends} />
      </div>
    </div>
  );
}