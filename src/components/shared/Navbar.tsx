"use client";

import { useState, useEffect, useMemo } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const hash = window.location.hash.replace("#", "");
    const pathSection = window.location.pathname.replace("/", "");
    const targetId = hash || pathSection;
    if (targetId && targetId !== "") {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 64;
          window.scrollTo({ top: y, behavior: "smooth" });
          history.replaceState(null, "", targetId === "home" ? "/" : `/#${targetId}`);
        }
      }, 100);
    }
  }, []);

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "education", label: "Education" },
    ],
    []
  );

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: "smooth" });
      const path = sectionId === "home" ? "/" : `/#${sectionId}`;
      history.replaceState(null, "", path);
    }, 10);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const sectionIds = [...navItems.map((i) => i.id), "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
            const path = id === "home" ? "/" : `/#${id}`;
            history.replaceState(null, "", path);
          }
        },
        {
          rootMargin: "-40% 0px -55% 0px",
          threshold: 0,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      observers.forEach((obs) => obs.disconnect());
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
          ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("home")}
          className="font-mono text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors focus:outline-none"
        >
          <span className="text-zinc-400 dark:text-zinc-600">{"<"}</span>
          <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Simran</span>
          <span className="text-zinc-400 dark:text-zinc-600">{"/>"}</span>
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm transition-colors focus:outline-none ${
                activeSection === item.id
                  ? "text-zinc-950 dark:text-zinc-100 font-semibold"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200 transition-colors focus:outline-none rounded-md"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm px-4 py-1.5 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-300 hover:border-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100 rounded-full transition-colors focus:outline-none"
          >
            Contact
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors p-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 px-6 py-4">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm py-2.5 text-left transition-colors focus:outline-none ${
                  activeSection === item.id
                    ? "text-zinc-950 dark:text-zinc-100 font-semibold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 mt-1 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3">
              <button
                onClick={() => scrollToSection("contact")}
                className="flex-1 text-sm px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-300 hover:border-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100 rounded-md transition-colors focus:outline-none"
              >
                Contact
              </button>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-md"
                aria-label="Toggle theme"
              >
                {mounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
