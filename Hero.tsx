import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Yuvraj <span className="text-blue-400">Tyagi</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-300 font-medium mb-4">
            Cybersecurity Enthusiast & Ethical Hacker
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Defending the Digital World One Bit at a Time
          </p>
        </div>

        <div className="flex items-center justify-center space-x-6 mb-12">
          <a
            href="https://github.com/yuvrajtyagi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200"
          >
            <Github className="h-6 w-6 text-white" />
          </a>
          <a
            href="https://linkedin.com/in/yuvrajtyagi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200"
          >
            <Linkedin className="h-6 w-6 text-white" />
          </a>
          <a
            href="mailto:yuvraj.tyagi@example.com"
            className="p-3 bg-emerald-600 hover:bg-emerald-700 rounded-full transition-colors duration-200"
          >
            <Mail className="h-6 w-6 text-white" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Explore My Work
        </button>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;