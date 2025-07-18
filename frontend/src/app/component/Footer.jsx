'use client';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#7A95B1] text-white px-6 sm:px-16 py-12">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm">

        {/* Logo */}
        <div className="flex flex-col gap-6">
          <img src="/imgi_1_Final-Logo.png" alt="XLNC Logo" className="h-20 object-contain" />
        </div>

        {/* Catalog */}
        <div>
          <h4 className="font-semibold mb-4">Catalog</h4>
          <ul className="space-y-1">
            <li><Link href="/projects/residential" className="hover:underline">Residential Projects</Link></li>
            <li><Link href="/projects/commercial" className="hover:underline">Commercial Projects</Link></li>
            <li><Link href="/projects/fit-out" className="hover:underline">Fit-Out Works</Link></li>
            <li><Link href="/projects/industrial" className="hover:underline">Industrial Projects</Link></li>
            <li><Link href="/projects/maintenance" className="hover:underline">Maintenance Projects</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-1">
            <li><Link href="/services/carpentry" className="hover:underline">Carpentry Works</Link></li>
            <li><Link href="/services/cleaning" className="hover:underline">Cleaning Services</Link></li>
            <li><Link href="/services/electrical" className="hover:underline">Electrical Works</Link></li>
            <li><Link href="/services/fit-out" className="hover:underline">Fit-out Works</Link></li>
            <li><Link href="/services/hvac" className="hover:underline">HVAC Works</Link></li>
            <li><Link href="/services/masonry" className="hover:underline">Masonry Works</Link></li>
            <li><Link href="/services/painting" className="hover:underline">Painting Works</Link></li>
            <li><Link href="/services/steel" className="hover:underline">Structure/Steel Works</Link></li>
            <li><Link href="/services/tiling" className="hover:underline">Tiling Works</Link></li>
            <li><Link href="/services/water-proofing" className="hover:underline">Water Proofing Works</Link></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold mb-4">About</h4>
          <ul className="space-y-1">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/team" className="hover:underline">Meet Our Team</Link></li>
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact Button */}
        <div className="flex items-start justify-start md:justify-end">
  <Link href="/contact">
    <button
      className="px-5 py-2 rounded-full font-semibold transition"
      style={{
        color: 'black',
        backgroundColor: '#5C748E',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#FFFFFF';
        e.currentTarget.style.color = '#5C748E';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#5C748E';
        e.currentTarget.style.color = 'black';
      }}
    >
      Get In Touch
    </button>
  </Link>
</div>
      </div>

      {/* Divider Section */}
      <div className="border-t border-white/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm gap-6">

        {/* Left Side: Social Icons */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="w-5 h-5 hover:opacity-80" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-5 h-5 hover:opacity-80" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 hover:opacity-80" />
          </a>
        </div>

        {/* Center: Contact Info */}
        <div className="text-center">
          <a href="tel:+97148249956" className="block hover:underline">(+971) 48-249-956</a>
          <a href="mailto:info@xlnccontracting.com" className="block hover:underline">info@xlnccontracting.com</a>
        </div>

        {/* Right Side: Credits */}
        <div className="text-center md:text-right">
          <p>© 2010 — xlnccontracting. All Rights Reserved</p>
          <p>
            Designed by{' '}
            <a
              href="https://luminatewebsol.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Luminate Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
