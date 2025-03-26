'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

// used mock data here this will be removed for real users
import { mockUsers } from '@/lib/mockData';

export default function LoginPage() {
  const [email, setEmail] = useState(mockUsers[0].email);
  const [password, setPassword] = useState(mockUsers[0].password_hashed);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); 

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      window.location.href = '/dashboard';
    } else {
      setError('Invalid credentials');
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold">Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="mb-4 w-full rounded border p-2"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mb-4 w-full rounded border p-2"
          required
        />
        <Button type="submit" variant="default" className="w-full cursor-pointer" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </Button>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </form>
    </div>
  );
}
