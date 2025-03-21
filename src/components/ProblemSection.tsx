import React, { useEffect, useRef } from 'react';
import { Clock, BrainCircuit, Code } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const ProblemCard = ({ 
  icon: Icon, 
  title, 
  description,
  index
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <AnimatedElement delay={0.3 * (index + 1)}>
      <div className="glass-card p-6 rounded-lg hover:shadow-lg transition-all duration-300">
        <div className="h-12 w-12 rounded-lg bg-leetpurple-600/30 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-leetpurple-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </AnimatedElement>
  );
};

export default function ProblemSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      <div className="absolute top-40 -left-40 w-96 h-96 bg-leetteal-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement>
          <div className="text-center mb-16">
            <div className="mb-4 inline-block">
              <span className="px-3 py-1 rounded-full bg-leetteal-600/20 border border-leetteal-500/30 text-sm font-medium">
                THE PROBLEM
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Struggling with LeetCode <span className="text-gradient">Challenges?</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We've all been there. Technical interviews are stressful, and LeetCode problems can be overwhelming.
              Here's why developers need better tools:
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProblemCard 
            icon={Clock}
            title="Time Pressure"
            description="During interviews, every second counts. You need to quickly understand the problem and formulate a solution."
            index={0}
          />
          <ProblemCard 
            icon={BrainCircuit}
            title="Algorithm Complexity"
            description="Remembering optimal approaches for every problem type is challenging, especially under pressure."
            index={1}
          />
          <ProblemCard 
            icon={Code}
            title="Code Optimization"
            description="Your first solution might work, but is it optimal? Finding edge cases and improving efficiency takes time."
            index={2}
          />
        </div>
      </div>
    </section>
  );
}