'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import AdminHeader from '../component/Adminheader';
import axios from 'axios';

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [adminEmail, setAdminEmail] = useState('');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return router.push('/login');

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime || decoded.role !== 'admin') {
        localStorage.removeItem('token');
        return router.push('/login');
      }

      setAdminEmail(decoded.email);
      fetchProjects();
    } catch (err) {
      console.error('Token error:', err);
      localStorage.removeItem('token');
      router.push('/login');
    }
  }, [router]);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/projects');
      setProjects(res.data);
    } catch (err) {
      console.error('Failed to fetch projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      await axios.delete(`http://localhost:4000/api/projects/${id}`);
      setProjects((prev) => prev.filter((project) => project.id !== id));
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleEdit = (id) => router.push(`/edit-project/${id}`);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-lg">
        Checking authorization...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <AdminHeader email={adminEmail} />

      <main className="p-8">
        <h1 className="text-2xl font-bold mb-6">All Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ id, image, title, category, description }) => (
            <div key={id} className="bg-white shadow rounded-lg p-4">
              <img
                src={`http://localhost:4000/uploads/${image}`}
                alt={title}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-2">{title}</h2>
              <p className="text-sm text-gray-600">{category}</p>
              <p className="text-sm text-gray-700 mb-3">{description}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(id)}
                  className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
