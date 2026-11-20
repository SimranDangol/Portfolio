"use client";

import { useState, useEffect, useMemo } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
    ],
    []
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 72;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      const sections = navItems.map((i) => i.id);
      const offset = window.innerWidth < 768 ? 120 : 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY + offset) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [navItems, mobileOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (mobileOpen && !(e.target as HTMLElement).closest("nav")) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed z-50 top-0 left-0 right-0 transition-all duration-200 ${
        scrolled
          ? "bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="font-mono text-sm text-zinc-400 hover:text-zinc-200 transition-colors focus:outline-none"
        >
          <span className="text-zinc-600">{"<"}</span>
          <span className="text-zinc-100">Simran</span>
          <span className="text-zinc-600">{"/>"}</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm transition-colors focus:outline-none ${
                activeSection === item.id
                  ? "text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Contact button */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm px-4 py-1.5 border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 rounded-md transition-colors focus:outline-none"
          >
            Contact
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-zinc-400 hover:text-zinc-200 transition-colors p-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm py-2.5 text-left transition-colors focus:outline-none ${
                  activeSection === item.id
                    ? "text-zinc-100"
                    : "text-zinc-500 hover:text-zinc-100"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 mt-1 border-t border-zinc-800">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full text-sm px-4 py-2 border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-zinc-100 rounded-md transition-colors focus:outline-none"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
