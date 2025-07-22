'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function BlogDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/blogs/${id}`);
        const data = await res.json();
        setBlog(data.blog); // ✅ Ensure proper field
      } catch (err) {
        console.error('Failed to fetch blog:', err);
      }
    };
    if (id) fetchBlog();
  }, [id]);

  if (!blog) return <p className="text-center text-gray-600 mt-10">Loading blog...</p>;

  return (
    <div className="min-h-screen bg-white text-black px-4 py-10">
      <div className="max-w-4xl mx-auto">
    

        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src={`http://localhost:4000/uploads/blogs/${blog.image}`}
            alt={blog.title}
            className="w-230 h-120 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-6">{blog.title}</h1>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg tracking-wide">
          {blog.content}
        </div>
      </div>
    </div>
  );
}
