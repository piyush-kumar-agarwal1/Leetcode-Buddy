import { Github, Twitter, Linkedin } from "lucide-react";
import logo from '../assets/icon128.png';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-leetblue-950 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-16"> {/* Changed to 12-column grid with smaller gap */}
          {/* Brand column */}
          <div className="lg:col-span-5"> {/* Changed from col-span-2 to col-span-5 in 12-col grid */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md flex items-center justify-center">
                <img src={logo} alt="LeetCode Buddy" className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl">LeetCode Buddy</span>
            </Link>
            <p className="text-gray-400 mt-4 mb-6 pr-4 max-w-md"> {/* Added max-width and right padding */}
              Your AI-powered companion for solving LeetCode problems. Get hints, explanations, and optimization suggestions without spoiling the solution.
            </p>
          </div>

          {/* Product column */}
          <div className="lg:col-span-2 lg:ml-4"> {/* Added left margin on large screens */}
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#download" className="text-gray-400 hover:text-white transition-colors">Download</a></li>
            </ul>
          </div>

          {/* Resources column */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/documentation" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/tutorials" className="text-gray-400 hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company column */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-leetblue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LeetCode Buddy. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/your-github" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="https://twitter.com/your-twitter" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com/company/your-company" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}