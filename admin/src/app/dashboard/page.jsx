'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import AdminHeader from '../componet/Adminheader';

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [adminEmail, setAdminEmail] = useState('');
  const [projectsByCategory, setProjectsByCategory] = useState({});
  const [blogs, setBlogs] = useState([]);

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
      fetchProjects(token);
      fetchBlogs(token);
    } catch (err) {
      console.error('Token error:', err);
      localStorage.removeItem('token');
      router.push('/login');
    }
  }, [router]);

  const fetchProjects = async (token) => {
    try {
      const res = await axios.get('http://localhost:4000/api/projects', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const grouped = res.data.reduce((acc, project) => {
        const cat = project.category;
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(project);
        return acc;
      }, {});
      setProjectsByCategory(grouped);
    } catch (err) {
      console.error('Failed to fetch projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogs = async (token) => {
    try {
      const res = await axios.get('http://localhost:4000/api/blogs', {
        headers: { Authorization: `Bearer ${token}` },
      });

      // If response is an object (e.g. { blogs: [...] }), extract array
      if (Array.isArray(res.data)) {
        setBlogs(res.data);
      } else if (res.data.blogs && Array.isArray(res.data.blogs)) {
        setBlogs(res.data.blogs);
      } else {
        console.warn("Unexpected blog data:", res.data);
        setBlogs([]);
      }
    } catch (err) {
      console.error('Failed to fetch blogs:', err);
      setBlogs([]);
    }
  };

  const handleDeleteProject = async (id) => {
    const token = localStorage.getItem('token');
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      await axios.delete(`http://localhost:4000/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProjectsByCategory((prev) => {
        const updated = { ...prev };
        for (const category in updated) {
          updated[category] = updated[category].filter((p) => p.id !== id);
        }
        return updated;
      });
    } catch (err) {
      console.error('Delete error:', err);
      alert('Failed to delete project.');
    }
  };

  const handleDeleteBlog = async (id) => {
    const token = localStorage.getItem('token');
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      await axios.delete(`http://localhost:4000/api/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (err) {
      console.error('Blog delete error:', err);
      alert('Failed to delete blog.');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-lg">
        Checking authorization...
      </div>
    );
  }

  return (
    <div className="bg-[#f9fafb] min-h-screen">
      <AdminHeader email={adminEmail} />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">All Projects</h1>

        {Object.entries(projectsByCategory).map(([category, projects]) => (
          <section key={category} className="mb-10">
            <h2 className="text-2xl font-semibold text-[#1e40af] mb-4 capitalize">{category} Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 3).map(({ id, image, title, description }) => (
                <div
                  key={id}
                  className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-[1.01]"
                >
                  <img
                    src={`http://localhost:4000/uploads/${image}`}
                    alt={title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg text-black font-semibold">{title}</h3>
                    <p className="text-sm text-gray-600 mt-1 mb-3 line-clamp-3">{description}</p>
                    <button
                      onClick={() => handleDeleteProject(id)}
                      className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* --- BLOGS SECTION --- */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-center text-[#1e40af] mb-6">Blogs</h2>
          {blogs.length === 0 ? (
            <p className="text-center text-gray-500">No blogs available.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.slice(0, 3).map(({ id, image, title, content }) => (
                <div
                  key={id}
                  className="bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-lg"
                >
                  <img
                    src={`http://localhost:4000/uploads/${image}`}
                    alt={title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black">{title}</h3>
                    <p className="text-sm text-gray-600 mt-1 mb-3 line-clamp-3">{content}</p>
                    <button
                      onClick={() => handleDeleteBlog(id)}
                      className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
