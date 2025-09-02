"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About Me" },
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
    ],
    []
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = window.innerWidth < 768 ? 80 : 100;
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition =
        window.scrollY + (window.innerWidth < 768 ? 120 : 150);

      setScrolled(window.scrollY > 50);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileOpen) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [navItems, mobileOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileOpen && !(event.target as HTMLElement).closest("nav")) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed z-50 top-0 left-0 right-0 transition-all duration-300 ${
        scrolled
          ? "py-1.5 sm:py-2 bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "py-2 sm:py-3 md:py-4"
      }`}
    >
      <div className="container flex items-center justify-between px-3 mx-auto sm:px-4 md:px-6 lg:px-8 max-w-7xl">
        <button
          onClick={() => scrollToSection("home")}
          className="px-1 py-1 text-lg font-bold transition-all duration-300 rounded-lg text-cyan-400 whitespace-nowrap hover:text-cyan-300 hover:scale-105 sm:text-xl md:text-xl focus:outline-none focus:ring-0"
        >
          <span className="text-cyan-400">&lt;</span>
          <span className="text-white">Simran</span>
          <span className="text-cyan-400">/&gt;</span>
        </button>

        <div className="relative items-center justify-center hidden gap-4 px-4 py-2.5 border rounded-full shadow-lg lg:flex xl:gap-6 xl:px-8 xl:py-3 border-white/20 backdrop-blur-md bg-gray-900/80 lg:gap-5 lg:px-6 lg:py-2.5">
          <div className="flex gap-3 lg:gap-4 xl:gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-2 py-1.5 font-medium transition-all duration-300 group lg:px-3 lg:py-2 text-sm lg:text-base focus:outline-none focus:ring-0 rounded-lg"
              >
                <span
                  className={`relative z-10 ${
                    activeSection === item.id
                      ? "text-cyan-400"
                      : "text-white hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex">
          <Button
            onClick={() => scrollToSection("contact")}
            className="relative overflow-hidden text-white rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] group xl:px-6 xl:py-3 xl:text-base focus:outline-none focus:ring-0"
          >
            <Sparkles
              size={18}
              className="mr-1.5 transition-transform group-hover:rotate-12 xl:size-5 xl:mr-2"
            />
            <span className="hidden xl:inline">Get In Touch</span>
            <span className="xl:hidden">Contact</span>
          </Button>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 text-white transition-colors rounded-lg hover:bg-white/10 focus:outline-none focus:ring-0 active:scale-95"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={20} className="sm:w-6 sm:h-6" />
            ) : (
              <Menu size={20} className="sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute left-0 right-0 px-3 py-3 mt-1 border-t top-full bg-gray-900/95 backdrop-blur-lg border-white/20 lg:hidden sm:px-4 sm:py-4">
          <div className="flex flex-col gap-1.5 sm:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2.5 rounded-lg font-medium transition-all duration-300 text-left flex items-center text-sm sm:text-base sm:px-4 sm:py-3 focus:outline-none focus:ring-0 ${
                  activeSection === item.id
                    ? "text-cyan-400 bg-cyan-400/10"
                    : "text-white hover:text-cyan-400 hover:bg-white/5 active:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="py-2.5 mt-2 text-sm font-semibold text-white transition-all duration-300 rounded-full px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 active:scale-95 sm:py-3 sm:mt-3 sm:text-base sm:px-6 focus:outline-none focus:ring-0"
            >
              <Sparkles size={18} className="mr-1.5 sm:mr-2 sm:w-5 sm:h-5" />
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
