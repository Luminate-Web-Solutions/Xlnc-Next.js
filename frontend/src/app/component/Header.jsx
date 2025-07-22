'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#7A95B1] text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img src="/imgi_1_Final-Logo.png" alt="Logo" className="w-20 h-18 cursor-pointer" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 font-medium">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about-us" className="hover:underline">About Us</Link>
          <Link href="/project" className="hover:underline">Projects</Link>
          <Link href="/service" className="hover:underline">Services</Link>
                      <Link href="/blogs" onClick={toggleMenu}>Blogs</Link>

          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-4 font-medium">
            <Link href="/" onClick={toggleMenu}>Home</Link>
            <Link href="/about-us" onClick={toggleMenu}>About Us</Link>
            <Link href="/project" onClick={toggleMenu}>Projects</Link>
            <Link href="/service" onClick={toggleMenu}>Services</Link>
            <Link href="/blogs" onClick={toggleMenu}>Blogs</Link>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
