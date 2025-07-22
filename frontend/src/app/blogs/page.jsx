'use client';
import { useEffect, useState } from 'react';
import BlogList from '../component/Bloglist'; // Adjust if needed

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/blogs');
        const data = await res.json();
        setBlogs(data.blogs || []);
      } catch (err) {
        setError('Failed to load blogs.');
        console.error('Fetch error:', err);
      }
    };

    getBlogs();
  }, []);

  return (
    <main className="min-h-screen bg-white text-black py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-[#1E40AF]">
           Our Latest Blog Posts
        </h1>

        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : blogs.length === 0 ? (
          <p className="text-gray-500 text-center">No blogs found.</p>
        ) : (
          <BlogList blogs={blogs} />
        )}
      </div>
    </main>
  );
}
