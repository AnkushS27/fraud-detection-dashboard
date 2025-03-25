import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get('session')?.value;
  if (!token) return null;

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as { email: string; role: string };
    return user;
  } catch {
    return null;
  }
}