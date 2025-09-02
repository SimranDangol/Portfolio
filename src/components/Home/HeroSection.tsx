"use client";

import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Github, Linkedin } from "lucide-react";

export default function Home() {
  const titles = useMemo(
    () => ["Full Stack Developer", "Frontend Developer", "Backend Developer"],
    []
  );
  const [displayText, setDisplayText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentTitleIndex, setCurrentTitleIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentIndex < titles[currentTitleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(
            titles[currentTitleIndex].substring(0, currentIndex + 1)
          );
          setCurrentIndex(currentIndex + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 1000);
      }
    } else {
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(
            titles[currentTitleIndex].substring(0, currentIndex - 1)
          );
          setCurrentIndex(currentIndex - 1);
        }, 50);
      } else {
        setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, currentTitleIndex, titles]);

  return (
    <div
      id="home"
      className="min-h-screen pt-24 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900"
    >
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="flex items-center justify-center gap-2 text-lg font-light text-cyan-400">
              <Sparkles size={16} className="animate-pulse" />
              Hey there, I&apos;m
              <Sparkles size={16} className="animate-pulse" />
            </span>
          </div>

          <h1 className="relative mb-6 text-5xl font-extrabold md:text-7xl">
            <span className="text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]">
              Simran Dangol
            </span>
          </h1>

          <div className="flex items-center justify-center h-12 mb-6">
            <h2 className="font-mono text-xl md:text-2xl text-cyan-300">
              {displayText}
              <span className="inline-block w-1 h-6 ml-1 bg-cyan-400 animate-pulse"></span>
            </h2>
          </div>

          <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-300">
            &ldquo;Turning ideas into smooth, interactive web experiences.
            Crafting modern, engaging, and responsive websites. Building
            seamless digital journeys, one line of code at a time.&quot;
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-semibold text-white transition-all rounded-full shadow-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:scale-105"
              asChild
            >
              <a
                href="/Simran_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                See Resume
              </a>
            </Button>

            <Button
              size="lg"
              className="px-8 py-6 text-lg transition-all border-2 rounded-full border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:scale-105"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                Let&apos;s Connect <ArrowRight size={20} />
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <a
              href="https://github.com/SimranDangol"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 transition-all border rounded-full border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-500/20"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/simran-dangol"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 transition-all border rounded-full border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-500/20"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="absolute hidden transform -translate-x-1/2 bottom-20 left-1/2 sm:block">
          <div className="animate-bounce">
            <div className="flex justify-center w-6 h-10 border-2 rounded-full border-cyan-400">
              <div className="w-1 h-3 mt-2 rounded-full bg-cyan-400"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
