/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import Lottie from "lottie-react";
import contact from "../assets/Contact.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_key: "dd0a67cc-7d10-4f12-a0b2-917608deefd3", 
        }),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear the form data
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setStatus("Error: Something went wrong.");
      console.error(error);
    }
  };

  return (
    <section
      id="contact"
      className="relative z-50 px-5 py-10 bg-gray-800 md:px-0"
    >
      <div className="mx-auto mb-16 max-w-7xl">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-8 ml-2 md:w-1/2 md:mb-0">
            <h2 className="mb-3 text-3xl font-bold text-red-500">
              Get in Touch
            </h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free
              to reach out!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={facebook} alt="" className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={instagram} alt="" className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img src={linkedin} alt="" className="w-6 h-6" />
              </a>
            </div>
            <Lottie
              animationData={contact}
              className="w-[350px] mx-auto lg:w-[500px]"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full p-10 bg-gray-100 border border-red-300 rounded-lg shadow-lg md:w-1/2 shadow-red-500"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-7">
              Contact Me
            </h1>
            {status && <p className="mb-4 text-red-500">{status}</p>}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                className="block w-full p-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button
              type="submit"
              className="px-3 py-2 text-white bg-red-500 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
