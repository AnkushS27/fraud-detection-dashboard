import { NextResponse } from 'next/server';
// import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { mockUsers } from '@/lib/mockData';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const user = mockUsers.find((u) => u.email === email);

  if (!user || password !== user.password_hashed) {
    return new Response('Invalid credentials', { status: 401 });
  }

  // correct implementation for above if statement to be added when there are actual users
  // if (!user || !(await bcrypt.compare(password, user.password_hashed))) {
  //   return new Response('Invalid credentials', { status: 401 });
  // }

  const token = jwt.sign({ email: user.email, role: user.role }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '1h' });
  const response = NextResponse.json({ message: 'Login successful' });
  console.log('Setting cookie:', token);
  response.cookies.set('session', token, { httpOnly: true, secure: true, path: '/', maxAge: 3600 });
  console.log('Redirecting to dashboard');
  return response;
}