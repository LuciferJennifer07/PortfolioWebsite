import React from 'react';
import { ExternalLink, Github, Shield, Navigation, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "NakliWebsite",
      subtitle: "Phishing Simulation Tool",
      icon: <Shield className="h-8 w-8 text-red-400" />,
      description: "A comprehensive phishing simulation platform designed to educate users about phishing attacks and improve cybersecurity awareness.",
      features: [
        "Real-time phishing simulation",
        "Educational content delivery",
        "User behavior analytics",
        "Customizable scenarios"
      ],
      technologies: ["Python", "Flask", "JavaScript", "HTML/CSS", "SQLite"],
      github: "https://github.com/yuvrajtyagi/nakliwebsite",
      demo: "https://nakliwebsite-demo.com",
      category: "Security Tool"
    },
    {
      title: "Campus Navigation System",
      subtitle: "Hackathon Project",
      icon: <Navigation className="h-8 w-8 text-blue-400" />,
      description: "An intelligent campus navigation system developed during a hackathon, featuring real-time location tracking and optimized route planning.",
      features: [
        "Interactive campus map",
        "Real-time navigation",
        "POI recommendations",
        "Accessibility features"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Maps API", "Socket.io"],
      github: "https://github.com/yuvrajtyagi/campus-nav",
      demo: "https://campus-nav-demo.com",
      category: "Web Application"
    },
    {
      title: "Cybersecurity Awareness Campaign",
      subtitle: "Educational Initiative",
      icon: <Users className="h-8 w-8 text-green-400" />,
      description: "A multi-platform cybersecurity awareness campaign aimed at educating students and professionals about digital security best practices.",
      features: [
        "Interactive workshops",
        "Educational materials",
        "Community engagement",
        "Impact measurement"
      ],
      technologies: ["Content Creation", "Social Media", "Workshops", "Analytics"],
      github: "https://github.com/yuvrajtyagi/cyber-awareness",
      demo: "https://cyber-awareness-campaign.com",
      category: "Educational"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Innovative cybersecurity solutions and educational initiatives
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-blue-400 text-sm font-medium mb-4">{project.subtitle}</p>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;