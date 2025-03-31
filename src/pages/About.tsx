import PageLayout from "../components/PageLayout";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <PageLayout 
      title="About LeetCode Buddy" 
      subtitle="The story behind this project"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Mission Section */}
        <div className="glass-card p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-leetpurple-300 mb-6">The Mission</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            LeetCode Buddy makes coding interview preparation more effective and less frustrating.
            I believe that learning to solve algorithmic problems should be a guided process that helps developers 
            build true understanding rather than memorizing solutions.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This AI-powered browser extension is designed to support developers at every skill level, providing
            the right amount of guidance when you need it most - without spoiling the learning experience.
          </p>
        </div>
        
        {/* Creator Section */}
        <div className="glass-card p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-leetpurple-300 mb-6">The Creator</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-40 h-40 rounded-full bg-leetpurple-600/20 overflow-hidden flex-shrink-0">
              <img src="/team-founder.jpg" alt="Piyush Kumar Agarwal" className="w-full h-full object-cover" />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-center md:text-left">Piyush Kumar Agarwal</h3>
              <p className="text-leetpurple-400 mb-4 text-center md:text-left">Full-Stack Developer</p>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a passionate software developer with expertise in React, TypeScript, and AI integration. 
                I created LeetCode Buddy to solve a problem I personally experienced while preparing for technical interviews.
              </p>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                With a background in full-stack development and a keen interest in developer tools, 
                I designed LeetCode Buddy to be the assistant I wished I had during my own coding practice.
              </p>
              
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://github.com/piyush-kumar-agarwal1" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/your-profile" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:chatwithapiyush@example.com" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Story Section */}
        <div className="glass-card p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-leetpurple-300 mb-6">The Story</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            LeetCode Buddy began as my personal project in early 2024. While preparing for technical interviews,
            I found myself constantly searching for hints when stuck on LeetCode problems, but was 
            frustrated by solutions that gave away too much information.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            The idea for LeetCode Buddy was born: a tool that would provide progressive hints that guide
            you toward the solution without spoiling the problem. After months of solo development and 
            testing with fellow developers, I launched LeetCode Buddy in March 2025.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Today, this extension helps developers prepare more effectively for technical interviews
            while learning valuable problem-solving skills that will serve them throughout their careers.
          </p>
        </div>
        
        {/* Values Section */}
        <div className="glass-card p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-leetpurple-300 mb-6">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-leetblue-800/40 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-leetteal-400">Learning First</h3>
              <p className="text-gray-300 text-sm">
                I prioritize real learning over quick answers. This tool is designed to help you truly understand concepts.
              </p>
            </div>
            <div className="bg-leetblue-800/40 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-leetteal-400">Ethical AI</h3>
              <p className="text-gray-300 text-sm">
                I believe in building AI that enhances human capabilities without replacing the critical thinking process.
              </p>
            </div>
            <div className="bg-leetblue-800/40 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-leetteal-400">Accessibility</h3>
              <p className="text-gray-300 text-sm">
                Quality learning tools should be accessible to developers at all stages of their journey.
              </p>
            </div>
            <div className="bg-leetblue-800/40 p-5 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-leetteal-400">Personal Touch</h3>
              <p className="text-gray-300 text-sm">
                As a solo developer, I've built this tool with care and attention to detail, solving a problem I experienced firsthand.
              </p>
            </div>
          </div>
        </div>

        {/* Learn More Section */}
        <div className="mt-12 bg-leetblue-800/30 p-6 rounded-lg border border-leetblue-700">
          <h3 className="text-xl font-semibold mb-3">Learn More</h3>
          <p className="text-gray-300 mb-4">
            Want to see LeetCode Buddy in action? Check out our <Link to="/documentation" className="text-leetpurple-400 hover:underline">documentation</Link> or watch our <Link to="/tutorials" className="text-leetpurple-400 hover:underline">step-by-step tutorials</Link>.
          </p>
          <p className="text-gray-300">
            Have questions? Browse our <Link to="/faq" className="text-leetpurple-400 hover:underline">frequently asked questions</Link> or <Link to="/contact" className="text-leetpurple-400 hover:underline">reach out directly</Link>.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}