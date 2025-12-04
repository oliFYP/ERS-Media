import React from "react";
import CompanyLogo from "../assets/company-logo.png"; // same logo as in App

const Navbar: React.FC = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 shadow-md gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={CompanyLogo}
              alt="Company Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-white hover:text-[#d68a2d] font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-[#d68a2d] font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:text-[#d68a2d] font-medium transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
