'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function BlogDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [moreBlogs, setMoreBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/blogs/${id}`);
        const data = await res.json();
        setBlog(data.blog);
      } catch (err) {
        console.error('Failed to fetch blog:', err);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  useEffect(() => {
    const fetchMoreBlogs = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/blogs');
        const data = await res.json();
        const filtered = data.blogs.filter((b) => b.id !== parseInt(id));
        setMoreBlogs(filtered.slice(0, 3)); // show 3 other blogs
      } catch (err) {
        console.error('Failed to fetch more blogs:', err);
      }
    };

    if (id) fetchMoreBlogs();
  }, [id]);

  if (!blog) return <p className="text-center text-gray-600 mt-10">Loading blog...</p>;

  return (
    <div className="min-h-screen bg-white text-black px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-xl shadow-md">
          <img
            src={`http://localhost:4000/uploads/blogs/${blog.image}`}
            alt={blog.title}
            className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-6">{blog.title}</h1>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg tracking-wide">
          {blog.content}
        </div>
      </div>

      {/* Read More Section */}
      {moreBlogs.length > 0 && (
        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl font-semibold mb-6">Read More Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreBlogs.map((b) => (
              <div
                key={b.id}
                className="cursor-pointer border rounded-lg overflow-hidden shadow hover:shadow-lg bg-white text-black"
                onClick={() => router.push(`/blogs/${b.id}`)}
              >
                <img
                  src={`http://localhost:4000/uploads/blogs/${b.image}`}
                  alt={b.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {b.content.slice(0, 100)}...
                  </p>
                  <button
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/blogs/${b.id}`);
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
