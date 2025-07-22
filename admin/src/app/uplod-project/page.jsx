'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { UploadCloud } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import AdminHeader from '../componet/Adminheader';

export default function ProjectUpload() {
  const router = useRouter();
  const [adminEmail, setAdminEmail] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    popupDesc: '',
    category: 'commercial',
    image: null,
  });

  // ✅ Check token and role
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      try {
        const decoded = jwtDecode(token);
        if (decoded.role !== 'admin') {
          router.push('/login');
        } else {
          setAdminEmail(decoded.email);
        }
      } catch (err) {
        console.error('Token decoding error:', err);
        router.push('/login');
      }
    }
    setLoading(false);
  }, [router]);

  // ✅ Handle Form Input Changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  // ✅ Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL }/api/projects`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      alert('✅ Project uploaded successfully!');
      router.push('/dashboard');
    } catch (err) {
      console.error('Upload error:', err.response?.data || err);
      alert('❌ Upload failed. Please try again.');
    }
  };

  if (loading || !adminEmail) return null;

  return (
    <>
      <AdminHeader />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-blue-800">Upload Project</h2>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-black"
          >
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
            <option value="hospital">Hospital</option>
            <option value="government">Government</option>
            <option value="residential">Residential</option>
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Project Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Short Description</label>
          <textarea
            name="description"
            rows="3"
            placeholder="Short description"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
          ></textarea>
        </div>

        {/* Popup Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Popup Description</label>
          <textarea
            name="popupDesc"
            rows="5"
            placeholder="Full popup description"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-black bg-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center py-3 px-4 rounded-lg"
        >
          <UploadCloud className="w-5 h-5 mr-2" />
          Upload Project
        </button>
      </form>
    </div>
    </>
  );
}
