// app/projects/page.jsx

import ProjectSection from "../component/ProjectSection";

export default function ProjectsPage() {
  return (
    <main className="bg-[#F4F7FA] pb-20">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-[#1E40AF]">Our Projects</h1>
        <p className="text-gray-600 mt-2">Explore our diverse project portfolio</p>
      </div>

      <ProjectSection category="commercial" />
      <ProjectSection category="industrial" />
      <ProjectSection category="hospital" />
      <ProjectSection category="government" />
      <ProjectSection category="residential" />
    </main>
  );
}
