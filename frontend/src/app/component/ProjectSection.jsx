'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectSection = ({ category }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/projects/category/${category}`)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        console.error('Failed to fetch projects:', err);
        setProjects([]); // fallback to empty array
      });
  }, [category]);

  return (
    <div className="py-10 px-4 md:px-20">
      <h2 className="text-2xl font-bold text-[#1E40AF] mb-6 capitalize">
        {category} Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="bg-white p-4 shadow rounded-lg">
              <img
                src={`http://localhost:4000/uploads/${project.image}`}
                alt={project.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{project.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No {category} projects found.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
