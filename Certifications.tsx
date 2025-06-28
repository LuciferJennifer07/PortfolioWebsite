import React from 'react';
import { Award, Trophy, Star, Target } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "IoT Security Course",
      organization: "Cybersecurity Institute",
      date: "2024",
      icon: <Award className="h-8 w-8 text-blue-400" />,
      description: "Comprehensive course covering IoT device security, threat analysis, and mitigation strategies.",
      skills: ["IoT Security", "Device Management", "Threat Analysis"]
    },
    {
      title: "Codebuster Participation",
      organization: "National Coding Competition",
      date: "2023",
      icon: <Trophy className="h-8 w-8 text-yellow-400" />,
      description: "Active participation in national-level coding and cybersecurity challenges.",
      skills: ["Problem Solving", "Algorithmic Thinking", "Competitive Programming"]
    },
    {
      title: "HackerRank Contest Rank",
      organization: "HackerRank",
      date: "2023",
      icon: <Star className="h-8 w-8 text-green-400" />,
      description: "Achieved top rankings in multiple cybersecurity and programming contests.",
      skills: ["Competitive Programming", "Security Algorithms", "Code Optimization"]
    },
    {
      title: "Police Department Internship",
      organization: "Cyber Crime Division",
      date: "2023",
      icon: <Target className="h-8 w-8 text-red-400" />,
      description: "Hands-on experience in cybercrime investigation and digital forensics.",
      skills: ["Digital Forensics", "Cyber Investigation", "Legal Compliance"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{cert.organization}</p>
                <p className="text-gray-600 mb-6">{cert.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;