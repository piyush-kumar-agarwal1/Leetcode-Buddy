
import AnimatedElement from "./AnimatedElement";

export default function CTA() {
  return (
    <section id="download" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-leetblue-900 via-leetblue-900 to-leetpurple-900/20 z-0"></div>
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement>
            <div className="glass-card rounded-xl p-8 md:p-12 backdrop-blur-xl bg-leetblue-800/40 border border-leetblue-700/50">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-gradient">Accelerate</span> Your LeetCode Journey?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who have transformed their coding practice and interview preparation with LeetCode Buddy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="#"
                  className="amber-button px-8 py-3 rounded-md text-center text-base font-semibold flex items-center justify-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM9.8 17.3L5.7 13.2L7.1 11.8L9.8 14.5L16.9 7.4L18.3 8.8L9.8 17.3Z" fill="currentColor"/>
                  </svg>
                  Install on Chrome
                </a>
                <a
                  href="#"
                  className="glass-button px-8 py-3 rounded-md text-center text-base font-medium flex items-center justify-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L7 10L10 13L17 6L19 8L10 17Z" fill="currentColor"/>
                  </svg>
                  Firefox Add-on
                </a>
                <a
                  href="#"
                  className="glass-button px-8 py-3 rounded-md text-center text-base font-medium flex items-center justify-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L7 10L10 13L17 6L19 8L10 17Z" fill="currentColor"/>
                  </svg>
                  Edge Add-on
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-sm text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Installation takes less than 30 seconds</span>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
