import React from 'react';
import { Home, DollarSign, CalendarDays, Hammer, Check } from 'lucide-react';

const Page = () => {
  const steps = [
    {
      icon: <Home size={24} />,
      title: 'Your Requirement',
      description: 'Share your construction needs with us.',
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Cost Estimation',
      description: 'Receive a detailed cost breakdown.',
    },
    {
      icon: <CalendarDays size={24} />,
      title: 'Schedule Visit',
      description: 'Arrange a site visit at your convenience.',
    },
    {
      icon: <Hammer size={24} />,
      title: 'Work Execution',
      description: 'Our team executes the project with precision.',
    },
    {
      icon: <Check size={24} />,
      title: 'Satisfied Delivery',
      description: 'We ensure your complete satisfaction.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-[650px] relative overflow-hidden">
        <img
          src="/HomeHeroimg.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4 text-center">
          <div className="flex flex-row flex-wrap justify-center items-center gap-2 mb-4">
            <h1 className="text-red-900 text-3xl md:text-5xl font-bold">
              Crafting Spaces,
            </h1>
            <h1 className="text-[#CDF5D3] text-3xl md:text-5xl font-bold">
              Creating Dreams
            </h1>
          </div>
          <p className="text-white max-w-2xl text-sm md:text-base">
            We design and build thoughtful, functional spaces that turn your vision into reality —
            combining quality, innovation, and attention to detail in every project.
          </p>
          <a href="/contact">
            <button className="bg-[#5C748E] m-10 text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition">
              Get a Quote
            </button>
          </a>
        </div>
      </div>

      {/* Our Services Section */}
      <section className="bg-[#F4F7FA] py-16 px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#1E3A8A] mb-10">
          Our Services – Delivering Excellence Across Every Project
        </h2>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-gray-800 text-justify leading-7">
            <p>
              Xlnc Technical Services LLC is a trusted name in quality technical and maintenance
              solutions across the UAE. We specialize in carpentry, electrical, plumbing, HVAC,
              fit-out, and waterproofing works. Our team is equipped with the latest tools and industry knowledge
              to deliver precision-driven outcomes in every project.
            </p>

            <p className="mt-4">
              With a skilled team and commitment to excellence, we deliver reliable results on every
              project. Our services cover residential, commercial, and industrial spaces with
              long-term maintenance support. We build trust through quality, safety, and on-time
              execution. By integrating innovative practices and a customer-first approach, we ensure that every
              client’s vision is turned into a functional, efficient, and aesthetically pleasing reality.
              Our mission is to exceed expectations and set new benchmarks in service delivery.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src="/ourservicehome.jpg"
              alt="Workers discussing a project"
              className="w-full rounded-[12px] border-4 border-[#5C748E]"
            />
          </div>
        </div>
      </section>
<section className="bg-white py-20 px-4 md:px-16">
  <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">How It Works?</h2>

  <div className="max-w-5xl mx-auto relative">
    {/* Vertical Line */}
    <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-300 z-0" />

    {steps.map((step, idx) => (
      <div key={idx} className="flex items-start gap-6 relative mb-10 z-10">

        {/* Left Icon */}
        <div className="w-12 h-12 flex items-center justify-center text-blue-600 bg-white rounded-full shadow shrink-0">
          {step.icon}
        </div>

        {/* Right Text */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
          <p className="text-sm text-gray-600">{step.description}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Paragraph */}
  <div className="max-w-4xl mx-auto mt-12 text-center text-gray-700 text-sm md:text-base">
    Xlnc Contracting leverages technology to streamline processes for house construction
    contractors. Our platform ensures transparency, efficiency, and quality throughout the
    construction journey.
  </div>

  {/* CTA Button */}
  <div className="mt-8 flex justify-center">
    <a href="/contact">
      <button className="bg-[#1E40AF] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1E3A8A] transition">
        Start Your Project
      </button>
    </a>
  </div>
</section>
 {/* Built on Values */}
      <section className="bg-[#F4F7FA] py-16 px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#1E3A8A] mb-10">
          Built on Values
        </h2>
        

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
           <div className="md:w-1/2">
            <img
              src="/xlnc-home.jpg"
              alt="Workers discussing a project"
              className="w-full rounded-[12px] border-4 border-[#5C748E]"
            />
          </div>
          <div className="md:w-1/2 text-gray-800 text-justify leading-7">
            <p>
              Xlnc Technical Services LLC is a trusted name in quality technical and maintenance
              solutions across the UAE. We specialize in carpentry, electrical, plumbing, HVAC,
              fit-out, and waterproofing works. Our team is equipped with the latest tools and industry knowledge
              to deliver precision-driven outcomes in every project.
            </p>

            <p className="mt-4">
              With a skilled team and commitment to excellence, we deliver reliable results on every
              project. Our services cover residential, commercial, and industrial spaces with
              long-term maintenance support. We build trust through quality, safety, and on-time
              execution. By integrating innovative practices and a customer-first approach, we ensure that every
              client’s vision is turned into a functional, efficient, and aesthetically pleasing reality.
              Our mission is to exceed expectations and set new benchmarks in service delivery.
            </p>
          </div>

         
        </div>
      </section>
      {/* Project Section */}
      <section className="bg-white py-16 px-4 md:px-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-[#1E3A8A] mb-10">
          Our Projects
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <img src="/r3.jpg" alt="Project 1" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Residential Project</h3>
            {/* <p className="text-sm text-gray-600">A modern home with innovative design.</p> */}
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <img src="/i1.jpg" alt="Project 2" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Commercial Project</h3>
            {/* <p className="text-sm text-gray-600">A state-of-the-art office space.</p> */}
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <img src="/i3.jpg" alt="Project 3" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Industrial Project</h3>
            {/* <p className="text-sm text-gray-600">An efficient manufacturing facility.</p> */}
          </div>
           <div className="bg-gray-100 p-4 rounded-lg shadow">
            <img src="/i2.jpg" alt="Project 2" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Commercial Project</h3>
            {/* <p className="text-sm text-gray-600">A state-of-the-art office space.</p> */}
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <img src="/r3.jpg" alt="Project 3" className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Industrial Project</h3>
            {/* <p className="text-sm text-gray-600">An efficient manufacturing facility.</p> */}
          </div>
         
     </div>
   <div className="flex justify-center">
  <a href="/project">
    <button className="bg-[#5C748E] m-10 text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-500 transition">
      View All Projects
    </button>
  </a>
</div>

      </section>

    </>
  );
};

export default Page;
