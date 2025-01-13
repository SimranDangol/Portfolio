/* eslint-disable no-unused-vars */
import React from "react";

const education = [
  {
    degree: "Bachelor of Computer Science and Software Engineering (BSC HONS)",
    institution: "Patan College for Professional Studies",
    year: "2022 - Present",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary (11th-12th)",
    institution: "Kanjirowa National Higher Secondary School",
    year: "2020 - 2022",
    icon: "🎓",
  },
  {
    degree: "Secondary (10th)",
    institution: "Nepal Don Bosco School",
    year: "2020",
    icon: "🎓",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="flex items-center min-h-screen px-6 py-16 bg-gradient-to-r from-blue-100 via-white to-blue-100"
    >
      <div className="w-full max-w-6xl mx-auto">
        <h3 className="mb-12 text-3xl font-semibold text-center text-gray-800">
          Education
        </h3>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex items-start p-6 mb-6 transition-transform transform bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-lg hover:-translate-y-2"
            >
              <div className="mr-6 text-4xl text-blue-600">{edu.icon}</div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  {edu.degree}
                </h4>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm italic text-gray-500">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
