"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      {/* Top Navbar (Address and Contact) - Hidden on mobile */}
      <nav className="bg-gray-900 text-white font-poppins hidden md:block">
        <div className="flex justify-end px-4 md:px-10 py-2 text-sm">
          <div className="flex items-center mr-4 md:mr-6">
            <img src="/location-pin.svg" className="h-4 w-4 mr-1 filter invert" alt="Location" />
            <Link href="https://www.google.com/maps/dir/?api=1&destination=Seoul+Korean+BBQ+And+Hotpot%2C+825+Baltimore+Pike%2C+Springfield" className="hover:text-blue-400 transition-colors duration-200">
              <span className="underline underline-offset-2 text-xs md:text-sm">825 Baltimore Pike, Springfield, PA</span>
            </Link>
          </div>
          <div className="flex items-center">
            <img src="/phone-svgrepo-com.png" className="h-4 w-4 mr-1 filter invert" alt="Phone" />
            <Link href="/">
              <span className="hover:text-blue-400 transition-colors duration-200 underline underline-offset-2 text-xs md:text-sm">484-472-8799</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md flex items-center justify-between h-16 md:h-20 px-4 md:px-10 font-poppins text-gray-800 relative">
        {/* Hamburger Menu (Mobile Only) */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>

        {/* Centered Logo (Mobile Position) */}
        <Link href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <img 
            src="betterLogo.png" 
            alt="Seoul Logo" 
            className="h-12 md:h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex flex-1 items-center justify-between">
          {/* Left Links */}
          <div className="flex space-x-6 ml-8">
            <Link href="/" className="text-black hover:text-blue-500 transition-colors duration-200">
              <span className="font-semibold tracking-wide text-sm md:text-base">HOME</span>
            </Link>
            <Link href="/Menu" className="text-black hover:text-blue-500 transition-colors duration-200">
              <span className="font-semibold tracking-wide text-sm md:text-base">MENU</span>
            </Link>
          </div>

          {/* Right Links */}
          <div className="flex space-x-6 mr-8">
            <Link href="/AboutUs" className="text-black hover:text-blue-500 transition-colors duration-200">
              <span className="font-semibold tracking-wide text-sm md:text-base">OUR STORY</span>
            </Link>
            <Link href="/ContactUs" className="text-black hover:text-blue-500 transition-colors duration-200">
              <span className="font-semibold tracking-wide text-sm md:text-base">CONTACT</span>
            </Link>
            <Link href="/Reservations" className="text-black hover:text-blue-500 transition-colors duration-200 bg-blue-100 px-4 py-1 rounded-lg">
              <span className="font-semibold tracking-wide text-sm md:text-base">RESERVE</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link href="/" className="w-full text-center py-2 hover:bg-gray-50" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
            <Link href="/Menu" className="w-full text-center py-2 hover:bg-gray-50" onClick={() => setIsOpen(false)}>
              MENU
            </Link>
            <Link href="/AboutUs" className="w-full text-center py-2 hover:bg-gray-50" onClick={() => setIsOpen(false)}>
              OUR STORY
            </Link>
            <Link href="/ContactUs" className="w-full text-center py-2 hover:bg-gray-50" onClick={() => setIsOpen(false)}>
              CONTACT
            </Link>
            <Link href="/Reservations" className="w-full text-center py-2 bg-blue-100 mx-4 rounded-lg hover:bg-blue-200" onClick={() => setIsOpen(false)}>
              RESERVATIONS
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}