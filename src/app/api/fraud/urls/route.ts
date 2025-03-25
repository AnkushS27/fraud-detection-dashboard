import { NextResponse } from 'next/server';
import { getFraudUrls } from '@/lib/data';
import { getCurrentUser } from '@/lib/auth';

export async function GET() {
  if (!getCurrentUser()) return new Response('Unauthorized', { status: 401 });
  const urls = await getFraudUrls();
  return NextResponse.json(urls);
}