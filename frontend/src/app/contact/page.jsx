'use client';

import React from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import Lottie from 'lottie-react';
import { Phone, Mail, MapPin, SendHorizontal   } from 'lucide-react';

import contactAnimation from '../component/ani.json';

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <Head>
        <title>Contact Us | DesignCo</title>
      </Head>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative h-[500px] md:h-[550px] w-full overflow-hidden">
          <img
            src="/ContactusHero.jpg"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">Let's Connect</h1>
            <p className="mt-3 text-white text-base md:text-lg max-w-xl">
              We’re here to answer your questions and help you move forward.
            </p>
          </div>
        </div>

       {/* Main Section */}
<main className="max-w-6xl mx-auto px-4 py-14 rounded-2xl">
  <h2 className="text-3xl text-black font-bold text-center mb-10">Reach Out to Us</h2>

  {/* Contact Info Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
    {[
      { icon: <Phone size={22} />, label: '+1-555-123-4567' },
      { icon: <Mail size={22} />, label: 'info@designco.com' },
      { icon: <MapPin size={22} />, label: '123 Main Street, Anytown, USA' },
    ].map((info, idx) => (
      <div
        key={idx}
        className="bg-[#5C748E] text-white p-4 rounded-xl shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      >
        <div className="flex justify-center items-center mb-3">
          {info.icon}
        </div>
        <p className="text-lg font-semibold">{info.label}</p>
      </div>
    ))}
  </div>




 {/* Contact Form & Animation */}
<div className="flex flex-col lg:flex-row gap-10 mt-12 bg-gradient-to-br from-white to-blue-50 p-6 lg:p-10 rounded-2xl shadow-lg transition-all duration-300">
  {/* Contact Form */}
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="bg-white w-full lg:w-3/5 p-8 rounded-2xl shadow-2xl border border-gray-200 min-h-[600px] flex flex-col justify-between"
  >
    <h3 className="text-2xl text-[#5C748E] font-bold mb-6"> Send Us a Message</h3>

    <div className="grid gap-5 mb-6 flex-grow">
      {/* Name */}
      <div>
        <label className="block font-medium text-gray-700">Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Your Name"
          className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block font-medium text-gray-700">Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          placeholder="your@email.com"
          className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

    {/* Subject */}
{/* Subject */}
<div>
  <label className="block font-medium text-gray-700">Subject</label>
  <textarea
    {...register("subject", { required: "Subject is required" })}
    rows={3}
    placeholder="Subject of your message"
    className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
  />
  {errors.subject && (
    <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
  )}
</div>

      {/* Message */}
      <div>
        <label className="block font-medium text-gray-700">Message</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          rows={4}
          placeholder="Write your message..."
          className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
        />
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>
    </div>

    <button
      type="submit"
      className="w-full bg-[#5C748E] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition flex justify-center items-center gap-2 mt-auto"
    >
       <SendHorizontal /> Send Message
    </button>
  </form>

  {/* Lottie Animation */}
  <div className="w-full lg:w-2/5 flex justify-center items-center">
    <div className="w-full max-w-sm h-[350px] rounded-xl overflow-hidden shadow-md bg-white p-4">
      <Lottie animationData={contactAnimation} loop={true} />
    </div>
  </div>
</div>


          {/* Map Section */}
          <div className="mt-24">
            <h3 className="text-xl text-black font-semibold mb-4">Our Location</h3>
            <iframe
              src="https://maps.google.com/maps?q=123%20Main%20Street,%20Anytown,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[400px] rounded-lg border-2 border-gray-300"
              loading="lazy"
            ></iframe>
          </div>
        </main>
      </div>
    </>
  );
}
