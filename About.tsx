import React from 'react';
import { GraduationCap, Users, Trophy, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-400" />,
      title: "B.Tech Student",
      description: "2nd-year Cybersecurity specialist with strong academic foundation"
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-400" />,
      title: "Mentor & Leader",
      description: "Organizing events and mentoring junior students in cybersecurity"
    },
    {
      icon: <Trophy className="h-8 w-8 text-yellow-400" />,
      title: "Hackathon Participant",
      description: "Active participant in various cybersecurity competitions"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-purple-400" />,
      title: "Security Researcher",
      description: "Passionate about ethical hacking and phishing awareness"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm Yuvraj Tyagi, a passionate 2nd-year B.Tech student specializing in cybersecurity. 
              My journey in the digital security realm is driven by an unwavering commitment to 
              protecting the digital world from emerging threats.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With expertise in ethical hacking, phishing awareness, and cyber education, I actively 
              contribute to the cybersecurity community through hackathons, educational events, and 
              mentoring programs. My mission is to make the digital world safer for everyone.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not diving deep into security research, you'll find me organizing cybersecurity 
              awareness campaigns, participating in capture-the-flag competitions, or helping fellow 
              students navigate the complex world of information security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;