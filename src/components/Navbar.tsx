import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import logo from '../assets/icon128.png';
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation to sections on the homepage
  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      // If already on homepage, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-leetblue-900/80 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-15 h-15 rounded-md flex items-center justify-center">
              <img src={logo} alt="LeetCode Buddy" className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl">LeetCode Buddy</span>
          </Link>  

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              // If on homepage, use smooth scrolling
              <>
                <a href="#features" className="hover:text-leetpurple-400 transition-colors">
                  Features
                </a>
                <a href="#how-it-works" className="hover:text-leetpurple-400 transition-colors">
                  How It Works
                </a>
                <a href="#testimonials" className="hover:text-leetpurple-400 transition-colors">
                  Testimonials
                </a>
                <a href="#download" className="amber-button px-5 py-2 rounded-md">
                  Download
                </a>
              </>
            ) : (
              // If on other pages, navigate to homepage with hash
              <>
                <Link to="/#features" className="hover:text-leetpurple-400 transition-colors">
                  Features
                </Link>
                <Link to="/#how-it-works" className="hover:text-leetpurple-400 transition-colors">
                  How It Works
                </Link>
                <Link to="/#testimonials" className="hover:text-leetpurple-400 transition-colors">
                  Testimonials
                </Link>
                <Link to="/#download" className="amber-button px-5 py-2 rounded-md">
                  Download
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-leetblue-900/95 backdrop-blur-lg z-40 transition-transform duration-300 ease-in-out md:hidden pt-24",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center gap-8 p-8">
          {isHomePage ? (
            // If on homepage, use normal href anchors
            <>
              <a 
                href="#features" 
                className="text-xl hover:text-leetpurple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-xl hover:text-leetpurple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#testimonials" 
                className="text-xl hover:text-leetpurple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#download"
                className="amber-button px-8 py-3 rounded-md text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </a>
            </>
          ) : (
            // If on other pages, use React Router's Link
            <>
              <Link 
                to="/#features" 
                className="text-xl hover:text-leetpurple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/#how-it-works" 
                className="text-xl hover:text-leetpurple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                to="/#testimonials" 
                className="text-xl hover:text-leetpurple-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                to="/#download"
                className="amber-button px-8 py-3 rounded-md text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}