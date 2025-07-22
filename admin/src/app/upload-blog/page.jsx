'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Upload, Loader2 } from 'lucide-react';

export default function UploadBlogPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const categories = ['Technology', 'Architecture', 'Design', 'Tips', 'News'];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login as admin');
      return router.push('/login');
    }

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      setLoading(true);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 201) {
        setMessage('✅ Blog uploaded successfully!');
        setFormData({ title: '', category: '', content: '', image: null });
        setTimeout(() => router.push('/dashboard'), 2000);
      }
    } catch (error) {
      console.error(error);
      setMessage('❌ Failed to upload blog. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white flex flex-col items-center justify-center px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-blue-800 mb-6"
      >
        Upload New Blog
      </motion.h1>

      {message && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-4 p-4 w-full max-w-xl text-center rounded shadow bg-white text-gray-800 border border-gray-300"
        >
          {message}
        </motion.div>
      )}

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl bg-white p-8 rounded-2xl shadow-xl space-y-5 border border-blue-100"
      >
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border text-black border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full border text-black border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <textarea
          name="content"
          placeholder="Write your blog content here..."
          rows={5}
          value={formData.content}
          onChange={handleChange}
          required
          className="w-full text-black border border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
          className="w-full border text-black border-black rounded px-4 py-3 bg-white"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex justify-center items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg transition hover:bg-blue-700 ${
            loading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="w-5 h-5" />
              Upload Blog
            </>
          )}
        </button>
      </motion.form>
    </div>
  );
}
