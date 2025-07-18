"use client";
import React from "react";

const Page = () => {
  const section = {
    title: "Industrial Projects",
    projects: [
      {
        title: "Prestige Business Hub",
        location: "Dubai Marina",
        area: "20,000 sq ft",
        image: "/images/projects/commercial1.jpg",
      },
      {
        title: "Tech Park Tower",
        location: "Business Bay",
        area: "18,000 sq ft",
        image: "/images/projects/commercial2.jpg",
      },
      {
        title: "Global Trade Center",
        location: "Deira",
        area: "25,000 sq ft",
        image: "/images/projects/commercial3.jpg",
      },
      {
        title: "Innovation Plaza",
        location: "JLT",
        area: "17,500 sq ft",
        image: "/images/projects/commercial4.jpg",
      },
      {
        title: "Prestige Business Hub",
        location: "Dubai Marina",
        area: "20,000 sq ft",
        image: "/images/projects/commercial1.jpg",
      },
      {
        title: "Tech Park Tower",
        location: "Business Bay",
        area: "18,000 sq ft",
        image: "/images/projects/commercial2.jpg",
      },
      {
        title: "Global Trade Center",
        location: "Deira",
        area: "25,000 sq ft",
        image: "/images/projects/commercial3.jpg",
      },
      {
        title: "Innovation Plaza",
        location: "JLT",
        area: "17,500 sq ft",
        image: "/images/projects/commercial4.jpg",
      },{
        title: "Prestige Business Hub",
        location: "Dubai Marina",
        area: "20,000 sq ft",
        image: "/images/projects/commercial1.jpg",
      },
      {
        title: "Tech Park Tower",
        location: "Business Bay",
        area: "18,000 sq ft",
        image: "/images/projects/commercial2.jpg",
      },
      {
        title: "Global Trade Center",
        location: "Deira",
        area: "25,000 sq ft",
        image: "/images/projects/commercial3.jpg",
      },
      {
        title: "Innovation Plaza",
        location: "JLT",
        area: "17,500 sq ft",
        image: "/images/projects/commercial4.jpg",
      },
    ],
  };

  return (
    <div className="bg-[#F4F7FA] py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF]">
          {section.title}
        </h2>
        <div className="w-20 h-1 bg-[#1E40AF] mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {section.projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600">📍 {project.location}</p>
              <p className="text-sm text-gray-600">📐 {project.area}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
