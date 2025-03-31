import { Check } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const steps = [
  {
    number: "01",
    title: "Install the extension",
    description: "Add LeetCode Buddy to your browser from the Chrome Web Store, Firefox Add-ons, or Edge Add-ons.",
    image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "02", 
    title: "Open any LeetCode problem",
    description: "Navigate to your favorite LeetCode problem or pick one from our recommended list based on your skill level.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Get smart assistance",
    description: "Click the LeetCode Buddy icon in the problem page to access hints, optimizations, and explanations.",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2134&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "Track your progress",
    description: "View your improvement over time and get personalized recommendations for what to study next.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      <div className="absolute top-40 -left-40 w-96 h-96 bg-leetteal-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement>
          <div className="text-center mb-16">
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 rounded-full bg-leetpurple-600/20 border border-leetpurple-500/30 text-sm font-medium">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Easy Installation, <span className="text-gradient">Immediate Impact</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get started in minutes and transform your LeetCode practice sessions immediately.
            </p>
          </div>
        </AnimatedElement>

        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <AnimatedElement key={index} delay={1}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>
                <div className="w-full md:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-leetpurple-500 to-leetteal-500 rounded-lg blur opacity-30"></div>
                    <div className="glass-card rounded-lg overflow-hidden relative">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-leetpurple-600 flex items-center justify-center font-bold text-white">
                      {step.number}
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-300 mb-6">{step.description}</p>
                  
                  <ul className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div className="mt-1 w-5 h-5 rounded-full bg-leetpurple-600/20 flex items-center justify-center">
                          <Check size={12} className="text-leetpurple-400" />
                        </div>
                        <span className="text-gray-300">
                          {index === 0 && item === 1 && "One-click installation with no configuration required"}
                          {index === 0 && item === 2 && "Works on Chrome, Firefox, and Edge browsers"}
                          {index === 0 && item === 3 && "Automatically updates with new features"}
                          
                          {index === 1 && item === 1 && "Extension activates automatically on LeetCode pages"}
                          {index === 1 && item === 2 && "Works with all problem difficulties and categories"}
                          {index === 1 && item === 3 && "Supports both free and premium LeetCode accounts"}
                          
                          {index === 2 && item === 1 && "Get hints that progressively reveal the approach"}
                          {index === 2 && item === 2 && "Receive optimization suggestions for your code"}
                          {index === 2 && item === 3 && "Access detailed explanations after solving"}
                          
                          {index === 3 && item === 1 && "View statistics on problems solved and time spent"}
                          {index === 3 && item === 2 && "Track improvement in specific algorithm categories"}
                          {index === 3 && item === 3 && "Get personalized problem recommendations"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
