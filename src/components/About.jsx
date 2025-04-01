/* eslint-disable react/no-unescaped-entities */
import MernStack from "../assets/mernstack.png";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind Css.png";
import Bootstrap from "../assets/Bootstrap.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/mongodb.svg";
import Express from "../assets/Express.png";
import Next from "../assets/nextjs.svg";
import Typescript from "../assets/typescript.svg";

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="py-12 bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide text-red-600 uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Simran Dangol
            </p>
            <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
              I am a motivated MERN stack developer with a passion for creating
              innovative and scalable web applications. I am currently focused
              on improving my skills and building a portfolio of meaningful
              projects. My goal is to contribute to projects that enhance user
              experiences and simplify workflows. I’m excited to start my
              professional journey and collaborate with teams to turn ideas into
              reality.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  My journey into web development started with a fascination for
                  building interactive websites. I began with HTML, CSS, and
                  JavaScript, eventually mastering the MERN stack (MongoDB,
                  Express.js, React.js, Node.js). Along the way, I worked on
                  projects like an Chat Application, Job Portal Website and a
                  Blog Website, Social Media App gaininghands-on experience in
                  creating responsive UIs and integrating APIs. With a passion
                  for learning and solving real-world problems, I am excited to
                  transition from a student to a professional developer, ready
                  to contribute to impactful projects.
                </p>
                <img
                  src={MernStack}
                  alt=""
                  className="p-2 mt-4 rounded-lg w-52"
                />
              </div>
              <div className="flex flex-col items-center gap-8 border border-red-200 rounded-lg shadow-lg md:p-7 py-7 shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Skills & Expertise
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <div className="flex items-center gap-1 px-2 py-1 border border-red-300 rounded-lg shadow-md w-max shadow-red-300">
                    <img src={Html} alt="" className="w-10" />
                    <span className="font-semibold">HTML</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 border border-red-300 rounded-lg shadow-md w-max shadow-red-300">
                    <img src={Css} alt="" className="w-8" />
                    <span className="font-semibold">CSS</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 border border-red-300 rounded-lg shadow-md w-max shadow-red-300">
                    <img src={Javascript} alt="" className="w-10" />
                    <span className="font-semibold">Javascript</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 border border-red-300 rounded-lg shadow-md w-max shadow-red-300">
                    <img src={Typescript} alt="" className="w-10" />
                    <span className="font-semibold">Typescript</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 border border-red-300 rounded-lg shadow-md w-max shadow-red-300">
                    <img src={ReactLogo} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">React</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 border border-red-300 rounded-lg shadow-md w-max shadow-red-300">
                    <img src={Next} alt="" className="w-10" />
                    <span className="font-semibold">Next.js</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 border border-red-300 rounded-lg shadow-md w-max shadow-red-300">
                    <img src={ReduxLogo} alt="" className="w-8" />
                    <span className="font-semibold">Redux</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 border border-red-300 rounded-lg shadow-md w-max shadow-red-300">
                    <img src={Tailwind} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">Tailwind Css</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 border border-red-300 rounded-lg shadow-md w-max shadow-red-300">
                    <img src={Bootstrap} alt="" className="w-10" />
                    <span className="font-semibold">Bootstrap</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 border border-red-300 rounded-lg shadow-md w-max shadow-red-300">
                    <img src={NodeLogo} alt="" className="w-10" />
                    <span className="font-semibold">Node Js</span>
                  </div>
                  <div className="flex items-center px-2 py-1 border border-red-300 rounded-lg shadow-md w-max shadow-red-300">
                    <img src={Mongodb} alt="" className="w-10" />
                    <span className="font-semibold">Mongodb</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 border border-red-300 rounded-lg shadow-md w-max shadow-red-300">
                    <img src={Express} alt="" className="w-10" />
                    <span className="font-semibold">Express Js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
