"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function About(): JSX.Element {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div
      id="about"
      className="relative min-h-screen px-4 py-16 overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 sm:px-6 md:px-12 lg:px-20"
    >
      <motion.section
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
          >
            <div className="relative w-56 h-56 overflow-hidden border shadow-lg rounded-2xl sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 shadow-cyan-500/20 border-cyan-400/30 group">
              <Image
                src="/me.jpg"
                alt="Profile"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 384px"
              />
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-cyan-400/40 to-blue-500/40"></div>
            </div>
          </motion.div>

          <div className="space-y-6 text-center md:text-left lg:space-y-8">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Me
                </span>
              </h1>
              <div className="h-1 mx-auto mt-3 rounded-full w-28 bg-gradient-to-r from-cyan-400 to-blue-400 lg:mx-0"></div>
            </motion.div>

            <motion.div
              className="max-w-2xl mx-auto space-y-5 md:space-y-6 md:mx-0"
              variants={containerVariants}
            >
              <motion.p
                className="text-lg leading-relaxed text-gray-300 sm:text-xl"
                variants={itemVariants}
              >
                Hello! I&apos;m a passionate{" "}
                <span className="font-semibold text-cyan-300">
                  Full Stack Developer
                </span>{" "}
                who loves crafting elegant, responsive, and user-friendly web
                applications that bring ideas to life.
              </motion.p>

              <motion.p
                className="text-lg leading-relaxed text-gray-300 sm:text-xl"
                variants={itemVariants}
              >
                I thrive on building dynamic frontends and designing efficient
                backend systems. Exploring new technologies and solving
                real-world challenges keeps me motivated.
              </motion.p>

              <motion.p
                className="text-lg leading-relaxed text-gray-300 sm:text-xl"
                variants={itemVariants}
              >
                My mission is to grow continuously, collaborate on meaningful
                projects, and deliver digital products that truly make an impact
                — one line of code at a time.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
