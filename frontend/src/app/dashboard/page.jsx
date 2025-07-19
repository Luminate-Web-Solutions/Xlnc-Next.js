'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from "jwt-decode";
import AdminHeader from '../component/Adminheader';

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [adminEmail, setAdminEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime || decoded.role !== 'admin') {
        localStorage.removeItem('token');
        router.push('/login');
        return;
      }

      setAdminEmail(decoded.email);
      setLoading(false);
    } catch (err) {
      console.error('Invalid token:', err);
      localStorage.removeItem('token');
      router.push('/login');
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">Checking Authorization...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader email={adminEmail} />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-2">Welcome, Admin 👋</h1>
        <p className="text-gray-700">You're logged in as <strong>{adminEmail}</strong>.</p>
        {/* Add dashboard content here */}
      </main>
    </div>
  );
}
