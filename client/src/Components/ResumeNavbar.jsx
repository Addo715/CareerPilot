import React, { useEffect, useState } from 'react'

const ResumeNavbar = () => {
     const [scrolled, setScrolled] = useState(false);



       useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
   <nav
      className={`w-full fixed px-6 lg:px-12 py-4 flex items-center justify-between z-50 transition-all duration-300 ${
        scrolled ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""
      }`}
    >
      {/* Left Logo / Title */}
      <h1 className="font-bold text-2xl text-gray-900">
        ResumeAssistantAi<span className="text-blue-600">.</span>
      </h1>

      {/* Right Link */}
      <a
        href="#upload"
        className="px-6 py-2 border border-gray-500 rounded-full hover:bg-blue-500 hover:text-white transition"
      >
        Upload Resume
      </a>
    </nav>
  )
}

export default ResumeNavbar