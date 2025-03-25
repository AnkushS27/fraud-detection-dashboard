import { NextResponse } from 'next/server';
import { getFraudApps } from '@/lib/data';
import { getCurrentUser } from '@/lib/auth';

export async function GET() {
  if (!getCurrentUser()) return new Response('Unauthorized', { status: 401 });
  const apps = await getFraudApps();
  return NextResponse.json(apps);
}