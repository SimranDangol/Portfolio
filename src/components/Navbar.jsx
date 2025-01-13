/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setmMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0">
      <div className="flex items-center mx-auto max-w-7xl h-14">
        <div className="flex justify-between w-full md:mr-4">
          <a
            href="#"
            className="flex items-center mr-6 space-x-2 text-lg sm:text-2xl"
          >
            <span>Simran Dangol </span>
          </a>
          <nav className="items-center hidden space-x-6 text-lg font-medium md:flex">
            <a
              href="#about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </a>
            <a
              href="#education"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Education
            </a>
            <a
              href="#projects"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="p-2 transition-colors rounded-md bg-slate-400 hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </a>
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md md:hidden"
          onClick={() => setmMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#about"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#education"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-gray-900"
            >
              {" "}
              Education
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-gray-900"
            >
              Project
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md bg-slate-400 hover:bg-gray-50 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


