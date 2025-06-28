import React from 'react';
import { Calendar, Clock, ArrowRight, Shield, Wifi, Lock } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: "What is Phishing?",
      excerpt: "Understanding the most common cyber attack vector and how to protect yourself from sophisticated phishing attempts.",
      date: "March 15, 2024",
      readTime: "5 min read",
      icon: <Shield className="h-6 w-6 text-red-400" />,
      category: "Security Awareness",
      tags: ["Phishing", "Email Security", "Social Engineering"]
    },
    {
      title: "How to Secure Your Wi-Fi",
      excerpt: "Complete guide to securing your wireless network against unauthorized access and potential security breaches.",
      date: "March 10, 2024",
      readTime: "7 min read",
      icon: <Wifi className="h-6 w-6 text-blue-400" />,
      category: "Network Security",
      tags: ["Wi-Fi Security", "Network Protection", "Router Security"]
    },
    {
      title: "Password Security Best Practices",
      excerpt: "Essential strategies for creating and managing strong passwords in the digital age.",
      date: "March 5, 2024",
      readTime: "4 min read",
      icon: <Lock className="h-6 w-6 text-green-400" />,
      category: "Authentication",
      tags: ["Passwords", "2FA", "Account Security"]
    },
    {
      title: "Social Engineering Tactics",
      excerpt: "Recognizing and defending against psychological manipulation techniques used by cybercriminals.",
      date: "February 28, 2024",
      readTime: "6 min read",
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      category: "Human Factor",
      tags: ["Social Engineering", "Psychology", "Awareness"]
    },
    {
      title: "Mobile Device Security",
      excerpt: "Protecting your smartphone and tablet from malware, data breaches, and unauthorized access.",
      date: "February 20, 2024",
      readTime: "5 min read",
      icon: <Lock className="h-6 w-6 text-orange-400" />,
      category: "Mobile Security",
      tags: ["Mobile", "Apps", "Privacy"]
    },
    {
      title: "Incident Response Planning",
      excerpt: "Creating an effective incident response plan for individuals and small organizations.",
      date: "February 15, 2024",
      readTime: "8 min read",
      icon: <Shield className="h-6 w-6 text-indigo-400" />,
      category: "Incident Response",
      tags: ["Planning", "Recovery", "Procedures"]
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cybersecurity Insights</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Sharing knowledge and insights about cybersecurity, privacy, and digital safety
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {article.icon}
                  </div>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;