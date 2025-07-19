'use client';

import { useState } from 'react';
import axios from 'axios';
import { UploadCloud } from 'lucide-react';

export default function ProjectUpload() {
  const [formData, setFormData] = useState({
    title: '',
    description: '', // ✅ Correct field name
    popupDesc: '',
    category: 'commercial',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, data);
      alert('Uploaded successfully!');
    } catch (err) {
      alert('Upload failed!');
      console.error(err.response?.data || err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">Upload New Project</h2>

        {/* Category */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            onChange={handleChange}
            value={formData.category}
            className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <label className="block mb-1 text-sm font-medium text-gray-700">Project Title</label>
          <input
            name="title"
            placeholder="Enter title"
            onChange={handleChange}
            required
            className="w-full border text-black border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Short Description -> description */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Short Description</label>
          <textarea
            name="description" // ✅ Updated to match backend
            placeholder="Write a short description"
            onChange={handleChange}
            required
            rows={3}
            className="w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Popup Description */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Detailed Description</label>
          <textarea
            name="popupDesc"
            placeholder="Write full popup description"
            onChange={handleChange}
            required
            rows={5}
            className="w-full text-black border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Project Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full border text-black border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
        >
          <UploadCloud className="w-5 h-5 mr-2" />
          Upload Project
        </button>
      </form>
    </div>
  );
}
