import { NextResponse } from 'next/server';
import { getFraudTrends } from '@/lib/data';
import { getCurrentUser } from '@/lib/auth';

export async function GET() {
  if (!getCurrentUser()) return new Response('Unauthorized', { status: 401 });
  const trends = await getFraudTrends();
  return NextResponse.json(trends);
}