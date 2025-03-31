import { ArrowDown } from "lucide-react";
import CodeAnimation from "./CodeAnimation";
import AnimatedElement from "./AnimatedElement";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-12">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-leetpurple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-leetteal-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-leetpurple-400/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex flex-col justify-center h-full pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left content column */}
          <div className="flex-1 max-w-full w-full lg:max-w-none lg:w-1/2">
            <AnimatedElement delay={0.5} animation="fade-in-left">
              <div className="mb-5 inline-block">
                <span className="px-4 py-1.5 rounded-full bg-leetpurple-600/20 border border-leetpurple-500/30 text-sm font-medium">
                  Browser Extension
                </span>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={1} animation="fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                LeetCode Buddy: AI-Powered <span className="text-gradient">Coding Assistant</span>
              </h1>
            </AnimatedElement>

            <AnimatedElement delay={1.5} animation="fade-in">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
                Your AI-powered coding companion that provides hints, optimization suggestions, and detailed explanations—without giving away the solution.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={2} animation="fade-in-up">
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#download"
                  className="amber-button px-6 sm:px-8 py-3 sm:py-3.5 rounded-md text-center text-sm sm:text-base font-medium flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  Install Extension
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM9.8 17.3L5.7 13.2L7.1 11.8L9.8 14.5L16.9 7.4L18.3 8.8L9.8 17.3Z" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="#features"
                  className="glass-button px-6 sm:px-8 py-3 sm:py-3.5 rounded-md text-center text-sm sm:text-base font-medium flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  See How It Works
                  <ArrowDown size={18} />
                </a>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={2.5} animation="fade-in">
              <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-400">
                <div className="flex">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg" alt="Chrome" className="h-4 sm:h-5 w-4 sm:w-5" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg" alt="Firefox" className="h-4 sm:h-5 w-4 sm:w-5 -ml-1" />
                  <img src="https://images.icon-icons.com/2552/PNG/512/edge_browser_logo_icon_152998.png" alt="Edge" className="h-4 sm:h-5 w-4 sm:w-5 -ml-1" />
                </div>
                <span>Works with all major browsers</span>
              </div>
            </AnimatedElement>
          </div>

          {/* Right animation column */}
          <AnimatedElement 
            className="flex-1 w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0" 
            delay={1.8} 
            animation="fade-in-right"
          >
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl transform hover:scale-105 transition-transform duration-500">
              <CodeAnimation />
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement delay={3} animation="fade-in">
          <div className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
            <a href="#features" className="block p-2">
              <ArrowDown className="text-gray-400 hover:text-white transition-colors" />
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}