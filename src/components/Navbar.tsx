"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      {/* === TOP BAR === */}
      <div className="bg-[#D2A240] text-black text-sm py-2 px-4 rounded-t-lg flex justify-between items-center">
  {/* Left side: phone + email */}
  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
    <a href="tel:9636730201" className="flex items-center gap-2 hover:underline">
      <Phone size={16} /> 9636730201
    </a>
    <a href="mailto:thartribehostel@gmail.com" className="flex items-center gap-2 hover:underline">
      <Mail size={16} /> thartribehostel@gmail.com
    </a>
  </div>

  {/* Right side: social icons */}
  <div className="flex items-center gap-4">
    <a href="https://www.instagram.com/thartribehostel" aria-label="Instagram" className="hover:opacity-80">
      <FaInstagram size={18} />
    </a>
    <a href="https://www.facebook.com/share/19urnebVY7/" aria-label="Facebook" className="hover:opacity-80">
      <FaFacebookF size={18} />
    </a>
    <a href="https://wa.me/9636730201" aria-label="WhatsApp" className="hover:opacity-80">
      <FaWhatsapp size={18} />
    </a>
  </div>
</div>


      {/* === MAIN NAVBAR === */}
      <nav className="bg-[#f5f5e7] shadow-md">
        <div className=" mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo + Text */}
          <Link href="/" className="flex items-center space-x-3">
  <Image
    src="/photo/logo.svg"
    alt="Thar Tribe Hostel"
    width={50}
    height={50}
    quality={100}
    className="h-16 w-auto md:h-20" 
    priority
  />
  <span className="text-xl md:text-2xl font-bold text-[#D2A240]">
    The Tribe Hostel
  </span>
</Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-black font-bold hover:text-[#D2A240]">Home</Link>
            <Link href="/about" className="text-black font-bold hover:text-[#D2A240]">About Us</Link>
            <Link href="/hostels" className="text-black font-bold hover:text-[#D2A240]">Hostels</Link>
            <Link href="/gallery" className="text-black font-bold hover:text-[#D2A240]">Gallery</Link>
            <Link href="/packages" className="text-black font-bold hover:text-[#D2A240]">Package</Link>
            <Link href="/contact" className="text-black font-bold hover:text-[#D2A240]">Contact Us</Link>

            <Link href="https://wa.me/9636730201" className="bg-[#FF9933] text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition">
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-white">
            <Link href="/" className="text-black font-bold hover:text-[#D2A240]">Home</Link>
            <Link href="/about" className="text-black font-bold hover:text-[#D2A240]">About Us</Link>
            <Link href="/hostels" className="text-black font-bold hover:text-[#D2A240]">Hostels</Link>
            <Link href="/gallery" className="text-black font-bold hover:text-[#D2A240]">Gallery</Link>
            <Link href="/packages" className="text-black font-bold hover:text-[#D2A240]">Package</Link>
            <Link href="/contact" className="text-black font-bold hover:text-[#D2A240]">Contact Us</Link>

            <Link href="https://wa.me/9636730201" className="bg-[#FF9933] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 text-center">
              Book Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
