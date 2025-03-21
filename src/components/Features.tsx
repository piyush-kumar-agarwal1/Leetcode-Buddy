
import { Code, Lightbulb, Zap, BarChart } from "lucide-react";
import AnimatedElement from "./AnimatedElement";

const features = [
  {
    icon: <Lightbulb size={24} className="text-leetamber-400" />,
    title: "Smart Hints",
    description: "Get contextual hints that guide you toward the solution without spoiling the problem.",
    code: `function hint() {
  // Try using a hash map to store 
  // values you've seen and check for 
  // the complement in O(1) time
}`
  },
  {
    icon: <Code size={24} className="text-leetpurple-400" />,
    title: "Code Optimization",
    description: "Receive suggestions to improve your solution's time and space complexity.",
    code: `// Before: O(n²) time complexity
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length; j++) {
    // Check each pair
  }
}

// After: O(n) time complexity
const seen = new Map();
for (let i = 0; i < nums.length; i++) {
  // Check in O(1) time
}`
  },
  {
    icon: <Zap size={24} className="text-leetteal-400" />,
    title: "Instant Explanation",
    description: "Get line-by-line explanations of working solutions after you solve the problem.",
    code: `// This uses dynamic programming
// with memoization to avoid
// redundant calculations
// Time Complexity: O(n)
// Space Complexity: O(n)`
  },
  {
    icon: <BarChart size={24} className="text-leetpurple-400" />,
    title: "Progress Tracking",
    description: "Track your improvement over time with detailed performance analytics.",
    code: `// Your progress
Problems solved: 120
Easy: 45, Medium: 55, Hard: 20
Avg. solve time: 23 mins
Weekly improvement: 12%`
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      <div className="absolute top-40 -right-40 w-96 h-96 bg-leetpurple-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement>
          <div className="text-center mb-16">
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 rounded-full bg-leetpurple-600/20 border border-leetpurple-500/30 text-sm font-medium">
                Features
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to <span className="text-gradient">Excel</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our extension enhances your LeetCode experience with tools designed to help you learn and improve faster.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <AnimatedElement key={index} delay={(index % 2) + 1}>
              <div className="glass-card rounded-lg p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-leetblue-700 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    
                    <div className="bg-leetblue-900/70 rounded border border-leetblue-700 p-3 mt-4 font-mono text-sm overflow-x-auto">
                      <pre className="whitespace-pre-wrap text-gray-300">
                        <code>{feature.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={3}>
          <div className="mt-16 text-center">
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-leetpurple-400 hover:text-leetpurple-300 transition-colors"
            >
              <span>Learn more about how it works</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
