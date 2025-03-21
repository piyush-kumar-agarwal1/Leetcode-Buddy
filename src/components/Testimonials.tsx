import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import AnimatedElement from "./AnimatedElement";

const testimonials = [
  {
    name: "Aditya Goyal",
    role: "Backend Engineer",
    avatar: "/1668180769486.jpeg",
    content: "LeetCode Buddy transformed my interview prep. The hints are perfectly balanced—they guide you toward the solution without giving everything away. I credit this tool with helping me solve 400+ questions."
  },
  {
    name: "Verdan Shandilya",
    role: "Frontend Developer",
    avatar: "/1668190202637.jpeg",
    content: "As a CS student, this extension has been invaluable. The ability to get hints when I'm stuck and then receive optimization suggestions has improved my problem-solving skills dramatically. My algorithms professor even noticed my improvement!"
  },
  {
    name: "Shakshi Agrawal",
    role: "Data Scientist",
    avatar: "/1669404499429.jpeg",
    content: "I was skeptical about coding assistants, but LeetCode Buddy strikes the perfect balance. It's like having a mentor who knows when to step in and when to let you struggle productively. The progress tracking feature keeps me motivated."
  },
  {
    name: "Pallavi Agrawal",
    role: "Quality Assuarance Engineer",
    avatar: "/1708849308938.jpeg",
    content: "The explanation feature is incredible. After solving a problem, I can review detailed breakdowns of each solution approach. This has deepened my understanding of algorithms in a way textbooks never could."
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Function to advance to the next testimonial
  const advanceTestimonial = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);
  
  // Set up auto-rotation with the timer
  useEffect(() => {
    // Don't auto-rotate if paused
    if (isPaused) return;
    
    const interval = setInterval(() => {
      advanceTestimonial();
    }, 3000); // 2 seconds interval
    
    // Cleanup function to clear the interval when component unmounts or dependencies change
    return () => clearInterval(interval);
  }, [advanceTestimonial, isPaused]);
  
  // Function to handle manual navigation
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    // Pause auto-rotation briefly when user manually navigates
    setIsPaused(true);
    // Resume auto-rotation after 5 seconds of inactivity
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement>
          <div className="text-center mb-16">
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 rounded-full bg-leetpurple-600/20 border border-leetpurple-500/30 text-sm font-medium">
                Testimonials
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Our <span className="text-gradient">Users</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from developers who have transformed their coding practice with LeetCode Buddy.
            </p>
          </div>
        </AnimatedElement>

        <div className="max-w-4xl mx-auto">
          <AnimatedElement delay={2}>
            <div 
              className="glass-card rounded-xl p-6 md:p-8 mb-8"
              // Pause auto-rotation when user hovers over testimonial
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-400">{testimonials[activeIndex].role}</p>
                </div>
              </div>
              <p className="text-lg">"{testimonials[activeIndex].content}"</p>
            </div>
          </AnimatedElement>

          <AnimatedElement delay={3}>
            <div className="flex justify-center gap-4 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "bg-leetpurple-500 w-8"
                      : "bg-leetblue-700 hover:bg-leetblue-600"
                  )}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}