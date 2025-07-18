'use client'
import React from 'react';

const Page = () => {
  const services = [
    {
      img: 'si1.jpg',
      title: 'Custom Furniture',
      desc: 'Create unique, handcrafted furniture pieces tailored to your style and space.',
    },
    {
      img: 'si2.jpg',
      title: 'Cabinetry',
      desc: 'Design and build custom cabinets for kitchens, bathrooms, and other areas.',
    },
    {
      img: 'si3.jpg',
      title: 'Wood Flooring',
      desc: 'Install and refinish wood flooring to add warmth and elegance to your home.',
    },
    {
      img: 'is4.jpg',
      title: 'Trim Work',
      desc: 'Enhance your interiors with custom trim work, including baseboards, crown molding, and door casings.',
    },
  ];

  const technicalCapabilities = [
    {
      title: 'Fit-out Works',
      img: 'Fit-out Works.jpg',
      desc: 'Complete fit-out services for residential and commercial spaces.',
    },
    {
      title: 'Maintenance Contracts',
      img: 'Maintenance Contracts.jpg',
      desc: 'Ongoing maintenance and repair services to keep your property in top condition.',
    },
    {
      title: 'Structure/Steel Works',
      img: 'Structure Steel Works.jpg',
      desc: 'Structural and steel work for building and renovation projects.',
    },
  ];

  const Finishingservices = [
    {
      img: 'Cleaning Services.jpg',
      title: 'Cleaning Services',
      desc: 'Reliable cleaning solutions for residential, commercial, and industrial spaces.',
    },
    {
      img: 'Electrical Works.jpg',
      title: 'Electrical Works',
      desc: 'Safe and efficient electrical solutions for all projects.',
    },
    {
      img: 'HVAC Works.jpg',
      title: 'HVAC Works',
      desc: 'Efficient HVAC solutions for optimal indoor climate control.',
    },
    {
      img: 'Masonry Works.jpg',
      title: 'Masonry Works',
      desc: 'Expert masonry services for brickwork, blockwork, and stonework.',
    },
    {
      img: 'Painting Works.jpg',
      title: 'Painting Works',
      desc: 'Professional interior and exterior painting services for lasting finishes.',
    },
    {
      img: 'Plumbing & Sewerage Works.jpeg',
      title: 'Plumbing & Sewerage Works',
      desc: 'Reliable plumbing and sewerage services for all needs.',
    },
    {
      img: 'Tiling Works.jpeg',
      title: 'Tiling Works',
      desc: 'Precision tiling services for floors and walls with flawless finishes.',
    },
    {
      img: 'Waterproofing Works.jpg',
      title: 'Waterproofing Works',
      desc: 'Effective waterproofing solutions for structural integrity.',
    },
  ];

  return (
    <>
      <div className="bg-white text-black">
        {/* Hero Section */}
        <div className="w-full h-[450px] relative overflow-hidden">
          <img
            src="/Our Service h.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4 text-center">
            <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight">
              What We Offer
            </h1>
          </div>
        </div>

        {/* Our Services */}
        <div className="bg-[#f4f6f8] py-8">
          <div>
            <h2 className="text-lg md:text-2xl font-semibold text-center mt-8 mb-4">
              Our Services
            </h2>
            <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto text-sm">
              We provide a wide range of services to meet your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-40 ">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-1 w-60 h-55 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 transform hover:scale-105 max-w-xs mx-auto"
                >
                  <div className="w-full h-28 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-md font-semibold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Capabilities */}
        <div className="py-8 bg-white px-40">
          <h2 className="text-lg md:text-2xl font-semibold text-center mb-6">
            Technical Capabilities
          </h2>
          <p className="text-center text-gray-600 mb-6 text-sm">
            Our technical team ensures precision and durability in every task.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {technicalCapabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 transform hover:scale-105 max-w-xs mx-auto"
              >
                <div className="w-full h-28 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={capability.img}
                    alt={capability.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-md font-semibold mb-2 text-gray-800">
                  {capability.title}
                </h3>
                <p className="text-gray-600 text-xs">{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Finishing Services */}
        <div className="bg-[#f4f6f8] py-8">
          <h2 className="text-lg md:text-2xl font-semibold text-center mt-8 mb-4">
            Finishing Services
          </h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto text-sm">
            Detailing Spaces to Perfection
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-40">
            {Finishingservices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 transform hover:scale-105 max-w-xs mx-auto"
              >
                <div className="w-full h-28 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-md font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
