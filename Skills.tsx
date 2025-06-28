import React from 'react';
import { Shield, Terminal, Network, Search, Code, Lock, Globe, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Penetration Testing",
      icon: <Shield className="h-8 w-8 text-red-400" />,
      skills: ["Vulnerability Assessment", "Exploit Development", "Social Engineering", "Report Writing"],
      level: 85
    },
    {
      title: "Network Security",
      icon: <Network className="h-8 w-8 text-blue-400" />,
      skills: ["Firewall Configuration", "IDS/IPS", "Network Monitoring", "Traffic Analysis"],
      level: 90
    },
    {
      title: "Linux & Kali Linux",
      icon: <Terminal className="h-8 w-8 text-green-400" />,
      skills: ["Command Line", "System Administration", "Security Tools", "Scripting"],
      level: 88
    },
    {
      title: "Security Tools",
      icon: <Search className="h-8 w-8 text-purple-400" />,
      skills: ["Wireshark", "Burp Suite", "Nmap", "Metasploit"],
      level: 85
    },
    {
      title: "Python Scripting",
      icon: <Code className="h-8 w-8 text-yellow-400" />,
      skills: ["Automation", "Security Scripts", "Data Analysis", "Tool Development"],
      level: 80
    },
    {
      title: "Phishing Simulation",
      icon: <Lock className="h-8 w-8 text-orange-400" />,
      skills: ["Campaign Design", "Awareness Training", "Email Security", "User Education"],
      level: 92
    },
    {
      title: "Web Security",
      icon: <Globe className="h-8 w-8 text-indigo-400" />,
      skills: ["OWASP Top 10", "XSS", "SQL Injection", "Secure Coding"],
      level: 78
    },
    {
      title: "Incident Response",
      icon: <Zap className="h-8 w-8 text-pink-400" />,
      skills: ["Threat Hunting", "Forensics", "Malware Analysis", "Recovery"],
      level: 75
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive expertise across multiple cybersecurity domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors duration-300 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-sm text-blue-400 font-medium">{category.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${category.level}%` }}
                  ></div>
                </div>
              </div>

              <ul className="space-y-1">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-300 text-sm flex items-center">
                    <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;