import React from "react";
import Link from "next/link"; // Needed for Next.js routing

// Converts title to slug format for URLs
const slugify = (text) =>
  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

const sections = [
  {
    id: 1,
    title: "Commercial Projects",
    slug: "Commercial",
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
        title: "Downtown Offices",
        location: "Downtown Dubai",
        area: "22,000 sq ft",
        image: "/images/projects/commercial5.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Industrial Projects",
    slug: "Ip",
    projects: [
      {
        title: "Advanced Fabrication Plant",
        location: "Sharjah",
        area: "30,000 sq ft",
        image: "/images/projects/industrial1.jpg",
      },
      {
        title: "Steel Works Unit",
        location: "Jebel Ali",
        area: "25,000 sq ft",
        image: "/images/projects/industrial2.jpg",
      },
      {
        title: "Oil & Gas Warehouse",
        location: "Ras Al Khaimah",
        area: "40,000 sq ft",
        image: "/images/projects/industrial3.jpg",
      },
      {
        title: "Auto Parts Manufacturing",
        location: "Ajman",
        area: "22,000 sq ft",
        image: "/images/projects/industrial4.jpg",
      },
      {
        title: "Textile Production Unit",
        location: "Al Quoz",
        area: "35,000 sq ft",
        image: "/images/projects/industrial5.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Hospitality Projects",
    slug: "Hp",
    projects: [
      {
        title: "Elite Grand Hotel",
        location: "Palm Jumeirah",
        area: "22,000 sq ft",
        image: "/images/projects/hospitality1.jpg",
      },
      {
        title: "Luxury Suites",
        location: "Downtown Dubai",
        area: "15,000 sq ft",
        image: "/images/projects/hospitality2.jpg",
      },
      {
        title: "Beachside Resort",
        location: "Jumeirah Beach",
        area: "28,000 sq ft",
        image: "/images/projects/hospitality3.jpg",
      },
      {
        title: "Marina View Hotel",
        location: "Dubai Marina",
        area: "20,000 sq ft",
        image: "/images/projects/hospitality4.jpg",
      },
      {
        title: "Skyline Business Hotel",
        location: "Sheikh Zayed Road",
        area: "24,000 sq ft",
        image: "/images/projects/hospitality5.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Public & Government Projects",
    slug: "Govt",
    projects: [
      {
        title: "Municipal Office",
        location: "Abu Dhabi",
        area: "28,000 sq ft",
        image: "/images/projects/public1.jpg",
      },
      {
        title: "Community Health Center",
        location: "Ajman",
        area: "12,000 sq ft",
        image: "/images/projects/public2.jpg",
      },
      {
        title: "Education Board HQ",
        location: "Dubai",
        area: "32,000 sq ft",
        image: "/images/projects/public3.jpg",
      },
      {
        title: "Transport Office",
        location: "Sharjah",
        area: "15,000 sq ft",
        image: "/images/projects/public4.jpg",
      },
      {
        title: "Fire Station Facility",
        location: "Al Ain",
        area: "18,000 sq ft",
        image: "/images/projects/public5.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Residential Projects",
    slug: "Rp",
    projects: [
      {
        title: "Skyline Villas",
        location: "Al Ain",
        area: "10,000 sq ft",
        image: "/images/projects/residential1.jpg",
      },
      {
        title: "Green Community Homes",
        location: "Dubai Hills",
        area: "12,000 sq ft",
        image: "/images/projects/residential2.jpg",
      },
      {
        title: "Palm Island Residence",
        location: "Palm Jumeirah",
        area: "9,500 sq ft",
        image: "/images/projects/residential3.jpg",
      },
      {
        title: "Lakeview Apartments",
        location: "Jumeirah Lakes Towers",
        area: "8,000 sq ft",
        image: "/images/projects/residential4.jpg",
      },
      {
        title: "Uptown Villas",
        location: "Mirdif",
        area: "11,000 sq ft",
        image: "/images/projects/residential5.jpg",
      },
    ],
  },
];

const OurProjects = () => {
  return (
    <div className="font-sans bg-[#f8f9fb]">
      {/* Hero Section */}
      <div className="w-full h-[650px] relative overflow-hidden">
        <img
          src="/construction-site-silhouettes.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">Our Projects</h1>
        </div>
      </div>

      {/* Project Sections */}
      {sections.map((section) => (
        <section key={section.id} className="px-4 md:px-20 py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">{section.title}</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {section.projects.slice(0, 5).map((project, index) => {
              const projectSlug = slugify(project.title);
              return (
                <Link
                  key={index}
                  href={`/projects/${section.slug}/${projectSlug}`} // Optional individual project page
                >
                  <div className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-44 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-base font-semibold mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">📍 {project.location}</p>
                      <p className="text-sm text-gray-600">📐 {project.area}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* View All Button to Section Page */}
          <div className="flex justify-center mt-8">
            <Link href={`/project/${section.slug}`}>
              <button className="bg-[#1E40AF] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1e3a8a] transition">
                View All {section.title}
              </button>
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default OurProjects;
