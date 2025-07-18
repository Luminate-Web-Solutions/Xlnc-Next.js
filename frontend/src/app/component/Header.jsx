import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-between items-center text-white p-4" style={{ backgroundColor: '#7A95B1' }}>
      {/* Logo */}
      <div>
        <Link href="/">
          <img src="/imgi_1_Final-Logo.png" alt="Logo" className="w-20 h-18 cursor-pointer" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex space-x-10 font-medium">
          <li>
            <Link href="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:underline">About Us</Link>
          </li>
          <li>
            <Link href="/project" className="hover:underline">Projects</Link>
          </li>
          <li>
            <Link href="/service" className="hover:underline">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
