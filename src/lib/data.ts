import { mockFraudApps, mockFraudUrls, mockFraudTrends } from './mockData';
import { FraudulentApp, FraudulentUrl, FraudTrend } from '@/types/fraud';

export async function getFraudApps(): Promise<FraudulentApp[]> {
  return mockFraudApps; // Replace with DB or API call in when real data coming
}

export async function getFraudUrls(): Promise<FraudulentUrl[]> {
  return mockFraudUrls;
}

export async function getFraudTrends(): Promise<FraudTrend[]> {
  return mockFraudTrends;
}