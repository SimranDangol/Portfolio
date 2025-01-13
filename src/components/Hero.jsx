/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import a from '../assets/a.png';
import { HiMiniArrowDownTray } from 'react-icons/hi2';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-[#fff] min-h-screen flex items-center justify-center"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="flex flex-col px-6 mt-10 mb-8 space-y-4 md:w-1/2 md:mb-0 lg:px-0 lg:mt-0">
            <h1 className="text-4xl font-bold lg:text-7xl lg:leading-snug">
              Hi There, <br />
              I'm Simran <span className="text-red-500">Dangol</span>
            </h1>
            <p className="mb-4 text-xl md:text-2xl">
              MERN Stack Enthusiast | Full Stack Developer
            </p>
            <p className="mb-4">
            I'm an aspiring web developer with a solid understanding of React, Node.js, Express, and modern web technologies. I enjoy creating engaging and functional websites that aim to address real-world challenges.
            </p>
            <button className="flex items-center gap-2 px-3 py-2 text-white bg-black rounded-md w-max">
              <HiMiniArrowDownTray size={20} />
              <a
                href="https://drive.google.com/file/d/1kxE2hjffw9O5Pc4o-VmIwh4WMz_xKM5o/view?usp=drive_link"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </button>
          </div>
          <div className="relative flex items-end justify-center md:w-1/2">
            <img src={a} alt="Hero" className="lg:h-[90vh] h-96" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
