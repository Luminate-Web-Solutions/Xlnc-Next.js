import React from "react";
import { Eye, Target, Landmark, Settings, Globe, Award } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="w-full h-[650px] relative overflow-hidden">
        <img
          src="/AbouusHero.jpg" 
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4 text-center">
          <div className="flex flex-row flex-wrap justify-center items-center gap-2 mb-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold">About Us,</h1>

          </div>
          
        </div>
      </div>

      {/* Mission and Target Section */}
      <section className="bg-white py-16 px-6 md:px-20 text-center">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <div className="flex justify-center mb-4">
              <Eye className="w-10 h-10 text-black" strokeWidth={1.5} />
            </div>
            <h2 className="text-xl font-bold mb-4">Our Mission</h2>
            <p className="text-[16px] leading-relaxed text-gray-700 max-w-md mx-auto">
              To revolutionize the way homes are built by integrating advanced technology,
              transparent processes, and customer-first service. We aim to simplify construction,
              reduce delays, and ensure every project is delivered with precision, quality, and peace of mind.
            </p>
          </div>

          <div>
            <div className="flex justify-center mb-4">
              <Target className="w-10 h-10 text-black" strokeWidth={1.5} />
            </div>
            <h2 className="text-xl font-bold mb-4">Our Target</h2>
            <p className="text-[16px] leading-relaxed text-gray-700 max-w-md mx-auto">
              To become the most trusted tech-enabled construction partner across the UAE,
              delivering hassle-free home-building experiences with on-time delivery, cost transparency,
              and unmatched quality.
            </p>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="bg-[#f4f6f8] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Our History</h2>
          <p className="text-gray-700 text-center leading-relaxed mb-10">
            Founded by a team of seasoned engineers and tech enthusiasts, BuildTech Solutions emerged from
            a shared vision to bridge the gap between traditional construction practices and cutting-edge
            technology. Starting as a small startup, we quickly gained recognition for our commitment to
            quality and innovation, expanding our services to cater to a diverse clientele across the globe.
          </p>

          <div className="relative border-l border-gray-300 pl-6">
            <div className="absolute top-0 left-6 w-[1px] h-full bg-gray-300"></div>

            {[
              {
                year: "2010",
                title: "Company Founded",
                icon: <Landmark className="w-5 h-5 text-gray-800" />,
                desc: "BuildTech Solutions is established with a focus on integrating technology into construction.",
              },
              {
                year: "2015",
                title: "Expanded Services",
                icon: <Settings className="w-5 h-5 text-gray-800" />,
                desc: "The company broadens its service offerings to include software solutions and project management tools.",
              },
              {
                year: "2020",
                title: "Global Expansion",
                icon: <Globe className="w-5 h-5 text-gray-800" />,
                desc: "BuildTech Solutions extends its operations internationally, serving clients across multiple continents.",
              },
              {
                year: "2022",
                title: "Industry Award",
                icon: <Award className="w-5 h-5 text-gray-800" />,
                desc: "Recognized as the ‘Most Innovative Construction Tech Company’ by a leading industry publication.",
              },
            ].map((item, index) => (
              <div key={index} className="mb-10 ml-4 relative">
                <div className="absolute -left-[32px] top-[2px] bg-white rounded-full p-1">
                  {item.icon}
                </div>
                <h3 className="text-[17px] font-semibold mb-1">{item.year}: {item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Core Value Section */}
      <section className="bg-white py-16 px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#1E3A8A] mb-10">
          Our Core Values
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <img src="/r3.jpg" alt="Project 1" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Integrity</h3>
            <p>Upholding the highest ethical standards in all our actions.</p>
            {/* <p className="text-sm text-gray-600">A modern home with innovative design.</p> */}
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <img src="/i1.jpg" alt="Project 2" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Excellence</h3>
            <p>Striving for superior quality and performance in every project.</p>
            {/* <p className="text-sm text-gray-600">A state-of-the-art office space.</p> */}
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <img src="/i3.jpg" alt="Project 3" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Innovation</h3>
            <p>Embracing creativity and cutting-edge solutions.</p>
            {/* <p className="text-sm text-gray-600">An efficient manufacturing facility.</p> */}
          </div>
           <div className="bg-gray-100 p-4 rounded-lg shadow">
            <img src="/i2.jpg" alt="Project 2" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Safety</h3>
            <p>Ensuring a safe working environment for all.</p>
            {/* <p className="text-sm text-gray-600">A state-of-the-art office space.</p> */}
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <img src="/r3.jpg" alt="Project 3" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Sustainability</h3>
            <p>Committing to environmentally responsible practices.</p>
            {/* <p className="text-sm text-gray-600">An efficient manufacturing facility.</p> */}
          </div>
         
     </div>
      </section>

      {/* Meet Our team */}

<section className="bg-white py-12 px-4 md:px-20">
  <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1E3A8A] mb-10">
    Meet Our Team
  </h2>

  {/* CEO Card */}
  <div className="max-w-md mx-auto bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 mb-12">
    <img src="/team1.jpg" alt="John Doe" className="w-full h-40 object-cover" />
    <div className="p-4 text-center">
      <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
      <p className="text-sm text-gray-600">CEO & Founder</p>
    </div>
  </div>

  {/* Team Grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Team Member 2 */}
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
      <img src="/team2.jpg" alt="Jane Smith" className="w-full h-36 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">Jane Smith</h3>
        <p className="text-sm text-gray-600">Chief Technology Officer</p>
      </div>
    </div>

    {/* Team Member 3 */}
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
      <img src="/team3.jpg" alt="Mike Johnson" className="w-full h-36 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">Mike Johnson</h3>
        <p className="text-sm text-gray-600">Project Manager</p>
      </div>
    </div>

    {/* Team Member 4 */}
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
      <img src="/team4.jpg" alt="Emily Davis" className="w-full h-36 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">Emily Davis</h3>
        <p className="text-sm text-gray-600">Lead Architect</p>
      </div>
    </div>
  </div>
</section>

        
    </div>
    
  );
};

export default AboutUs;
