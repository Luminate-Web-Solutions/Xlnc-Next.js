'use client';

import React, { useState } from 'react';

const PopupCard = ({ img, title, cardDesc, popupDesc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200 transform hover:scale-105"
      >
        <div className="w-full h-28 mb-4 overflow-hidden rounded-lg">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-md font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{cardDesc}</p>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg max-w-md w-full p-4 relative shadow-lg">
            <button
              className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <img src={img} alt={title} className="w-full h-52 object-cover rounded-md mb-4" />
            <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
            <p className="text-sm text-gray-600">{popupDesc}</p>
          </div>
        </div>
      )}
    </>
  );
};

const Page = () => {
 const services = [
  {
    img: 'si1.jpg',
    title: 'Custom Furniture',
    cardDesc: 'Create unique, handcrafted furniture pieces tailored to your style and space.',
    popupDesc: 'We specialize in designing and building one-of-a-kind furniture using quality hardwoods and expert craftsmanship. Every piece is tailored to your exact preferences and spatial requirements. Whether you seek a modern minimalist look or a traditional design, our team ensures a seamless blend of functionality and aesthetics. We handle everything from concept sketches to final polish. Our focus is durability, precision, and timeless appeal.'
  },
  {
    img: 'si2.jpg',
    title: 'Cabinetry',
    cardDesc: 'Design and build custom cabinets for kitchens, bathrooms, and other areas.',
    popupDesc: 'Our custom cabinetry solutions combine beauty and practicality to transform any space. We create cabinets for kitchens, bathrooms, offices, and wardrobes using premium materials. Our designs optimize storage while matching your décor. Whether built-in or standalone, each cabinet is finished with care and built to last. We also handle seamless installation and post-service touchups.'
  },
  {
    img: 'si3.jpg',
    title: 'Wood Flooring',
    cardDesc: 'Install and refinish wood flooring to add warmth and elegance to your home.',
    popupDesc: 'We provide expert wood flooring services that bring natural warmth and sophistication to any space. From traditional oak to modern engineered options, our installations are clean, fast, and long-lasting. We also offer refinishing services to revive old floors with sanding, staining, and polishing. Slip-resistant and scratch-resistant options are available to suit your lifestyle.'
  },
  {
    img: 'is4.jpg',
    title: 'Trim Work',
    cardDesc: 'Enhance your interiors with custom trim work, including baseboards, crown molding, and door casings.',
    popupDesc: 'Our trim work adds elegant detailing to interiors with custom-fitted moldings and casings. From baseboards to crown molding and door/window frames, we ensure precision cuts and seamless installations. The right trim transforms plain rooms into refined spaces. We use MDF, hardwoods, or composite materials depending on your style and budget.'
  },
];


 const technicalCapabilities = [
  {
    title: 'Fit-out Works',
    img: 'Fit-out Works.jpg',
    cardDesc: 'Complete fit-out services for residential and commercial spaces.',
    popupDesc: 'We manage complete fit-out projects for both residential and commercial interiors. Our services include flooring, ceiling, partitioning, electricals, and custom carpentry. From shell and core to turnkey handover, we coordinate every phase. Our team ensures timely delivery with strict quality control and cost efficiency. Perfect for retail, office, and luxury spaces.'
  },
  {
    title: 'Maintenance Contracts',
    img: 'Maintenance Contracts.jpg',
    cardDesc: 'Ongoing maintenance and repair services to keep your property in top condition.',
    popupDesc: 'We provide annual and on-demand maintenance contracts tailored to your facility. Our team handles HVAC systems, electricals, plumbing, and minor civil work. Routine inspections and preventive maintenance ensure safety, efficiency, and reduced downtime. Clients receive prompt support, detailed reports, and peace of mind for all maintenance needs.'
  },
  {
    title: 'Structure/Steel Works',
    img: 'Structure Steel Works.jpg',
    cardDesc: 'Structural and steel work for building and renovation projects.',
    popupDesc: 'Our structural steel services include fabrication and erection of beams, columns, frames, and metal components. We support both new construction and renovations with safe, code-compliant designs. Our team ensures accuracy, durability, and cost-effectiveness across all scales of steel work—from commercial buildings to custom staircases and frames.'
  },
];

const Finishingservices = [
  {
    img: 'Cleaning Services.jpg',
    title: 'Cleaning Services',
    cardDesc: 'Reliable cleaning solutions for residential, commercial, and industrial spaces.',
    popupDesc: 'We provide professional cleaning services tailored to homes, offices, retail stores, and industrial settings. From deep cleaning to scheduled upkeep, our trained staff uses eco-friendly products and modern equipment. Services include floor polishing, window cleaning, post-construction cleanup, and more. Your space stays spotless, safe, and welcoming.'
  },
  {
    img: 'Electrical Works.jpg',
    title: 'Electrical Works',
    cardDesc: 'Safe and efficient electrical solutions for all projects.',
    popupDesc: 'Our certified electricians handle everything from basic wiring to complex panel installations. Services include lighting, power distribution, smart home setups, and safety audits. We follow strict electrical codes and offer both installation and maintenance. Our team ensures efficient energy use, minimal disruptions, and safety-first execution.'
  },
  {
    img: 'HVAC Works.jpg',
    title: 'HVAC Works',
    cardDesc: 'Efficient HVAC solutions for optimal indoor climate control.',
    popupDesc: 'Our HVAC solutions cover heating, ventilation, and air conditioning for residential and commercial spaces. From split AC units to centralized ducting systems, we offer design, installation, and maintenance. Our technicians are trained in energy-efficient and environment-friendly systems for year-round comfort. Emergency repair and AMCs also available.'
  },
  {
    img: 'Masonry Works.jpg',
    title: 'Masonry Works',
    cardDesc: 'Expert masonry services for brickwork, blockwork, and stonework.',
    popupDesc: 'Our experienced masons deliver precise and sturdy bricklaying, blockwork, plastering, and stone facades. Whether constructing walls, pavements, or decorative features, we focus on structural integrity and craftsmanship. We work with both modern materials and traditional methods for long-lasting results.'
  },
  {
    img: 'Painting Works.jpg',
    title: 'Painting Works',
    cardDesc: 'Professional interior and exterior painting services for lasting finishes.',
    popupDesc: 'We provide high-quality painting services that enhance and protect your surfaces. Our painters handle both interiors and exteriors using durable, weather-resistant paints. We offer a wide color palette, texture finishes, and stencils. Prior surface prep and post-cleaning are included for flawless results.'
  },
  {
    img: 'Plumbing & Sewerage Works.jpeg',
    title: 'Plumbing & Sewerage Works',
    cardDesc: 'Reliable plumbing and sewerage services for all needs.',
    popupDesc: 'Our licensed plumbers install and maintain water supply lines, drainage systems, and sanitary fittings. We specialize in bathroom and kitchen plumbing, leak detection, and pipeline repair. We also design and implement sewerage systems for buildings and facilities, ensuring efficient and hygienic flow.'
  },
  {
    img: 'Tiling Works.jpeg',
    title: 'Tiling Works',
    cardDesc: 'Precision tiling services for floors and walls with flawless finishes.',
    popupDesc: 'We offer professional tile installation using ceramic, porcelain, marble, and mosaic tiles. From kitchens and bathrooms to commercial lobbies, our skilled team ensures level surfaces and tight grout lines. We also handle re-tiling, waterproof underlays, and decorative patterns to suit your interior theme.'
  },
  {
    img: 'Waterproofing Works.jpg',
    title: 'Waterproofing Works',
    cardDesc: 'Effective waterproofing solutions for structural integrity.',
    popupDesc: 'Our waterproofing experts apply protective systems to roofs, basements, bathrooms, and terraces. We use membranes, coatings, and sealants that prevent water infiltration and damage. Ideal for new builds or renovations, our solutions extend building lifespan and prevent mold, leakage, and structural decay.'
  },
];


  return (
    <div className="bg-white text-black">
      <div className="w-full h-[450px] relative overflow-hidden">
        <img src="/Our Service h.jpg" alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 px-4 text-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight">What We Offer</h1>
        </div>
      </div>

      <section className="bg-[#f4f6f8] py-12 px-6 md:px-10 lg:px-20">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto text-sm">
          We provide a wide range of services to meet your needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => <PopupCard key={i} {...s} />)}
        </div>
      </section>

      <section className="py-12 px-6 md:px-10 lg:px-20 bg-white">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">Technical Capabilities</h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Our technical team ensures precision and durability in every task.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalCapabilities.map((s, i) => <PopupCard key={i} {...s} />)}
        </div>
      </section>

      <section className="bg-[#f4f6f8] py-12 px-6 md:px-10 lg:px-20">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">Finishing Services</h2>
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto text-sm">
          Detailing Spaces to Perfection
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Finishingservices.map((s, i) => <PopupCard key={i} {...s} />)}
        </div>
      </section>
    </div>
  );
};

export default Page;
