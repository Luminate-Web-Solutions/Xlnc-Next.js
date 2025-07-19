'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { X } from 'lucide-react';

const ProjectSection = ({ category }) => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/projects/category/${category}`)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error('Failed to fetch projects:', err);
        setProjects([]);
      });
  }, [category]);

  return (
    <div className="py-10 px-4 md:px-20 relative">
      <h2 className="text-2xl font-bold text-[#1E40AF] mb-6 capitalize">
        {category} Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-4 shadow rounded-lg cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={`http://localhost:4000/uploads/${project.image}`}
                alt={project.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">{project.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No {category} projects found.</p>
        )}
      </div>

      {/* Popup Modal */}
  {selectedProject && (
  <div className="fixed inset-0 z-50 bg-black/50 bg-opacity-60 flex items-center justify-center px-4">
    <div className="bg-white max-w-2xl w-full p-6 rounded-xl relative shadow-xl">
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
      >
        <X size={24} />
      </button>
      <img
        src={`http://localhost:4000/uploads/${selectedProject.image}`}
        alt={selectedProject.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-2xl font-bold text-[#1E40AF] mt-4">{selectedProject.title}</h2>
      <p className="text-gray-700 mt-3 whitespace-pre-line">
        {selectedProject.popupDesc || selectedProject.description}
      </p>
    </div>
  </div>
)}
    </div>
  );
};

export default ProjectSection;
