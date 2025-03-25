'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { FraudTrend } from '@/types/fraud';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function TrendChart({ trends }: { trends: FraudTrend[] }) {
  const data = {
    labels: trends.map((t) => t.date),
    datasets: [
      {
        label: 'Fraud Cases Detected',
        data: trends.map((t) => t.fraud_cases_detected),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '30-Day Fraud Trend' },
    },
    scales: {
      x: { title: { display: true, text: 'Date' } },
      y: { title: { display: true, text: 'Fraud Cases' } },
    },
  };

  return <Line data={data} options={options} />;
}