import { useEffect, useState, useRef } from 'react';
import logo from '../assets/icon128.png'; // Add this import

// Define the problem and hints
const problemTitle = "Two Sum";
const problemDescription = "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.";

const hints = [
  { 
    type: "hint",
    text: "Think about using a data structure to store values you've seen so far." 
  },
  { 
    type: "hint",
    text: "Consider using a hash map to store each number and its index as you iterate through the array." 
  },
  { 
    type: "hint",
    text: "For each number, check if the 'complement' (target - current number) exists in your hash map." 
  },
  { 
    type: "hint",
    text: "```js\nfunction twoSum(nums, target) {\n  const map = new Map();\n  \n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    \n    // Check if complement exists in map\n    // If it does, return both indices\n    // Otherwise, add current number & index to map\n  }\n}\n```" 
  },
];

// Only keep the C++ solution
const cppSolution = { 
  type: "solution",
  text: "```cpp\nvector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> map;\n    \n    for (int i = 0; i < nums.size(); i++) {\n        int complement = target - nums[i];\n        \n        if (map.count(complement)) {\n            return {map[complement], i};\n        }\n        \n        map[nums[i]] = i;\n    }\n    \n    return {};\n}\n```\n\nTime Complexity: O(n) where n is the length of the array\nSpace Complexity: O(n) for storing the unordered_map"
};

export default function CodeAnimation() {
  const [messages, setMessages] = useState<Array<{type: string, text: string}>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  // Initial automatic first hint
  useEffect(() => {
    if (currentIndex === 0) {
      const timer = setTimeout(() => {
        setMessages([hints[0]]);
        setCurrentIndex(1);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Automatic hint progression
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (currentIndex > 0 && currentIndex < hints.length) {
      timer = setTimeout(() => {
        setMessages(prev => [...prev, hints[currentIndex]]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 2500); // Advance to next hint every 2.5 seconds
    }
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    // Adding blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Get next hint when button is clicked
  const getNextHint = () => {
    if (currentIndex < hints.length) {
      setMessages(prev => [...prev, hints[currentIndex]]);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const getSolution = () => {
    // Add the C++ solution to messages
    setMessages(prev => [...prev, cppSolution]);
  };

  // Completely simplified formatting function
  const formatMessage = (message: string) => {
    if (message.includes('```')) {
      const parts = message.split('```');
      
      if (parts.length >= 3) {
        // Get the language and code
        let langMatch = parts[1].match(/^(\w+)\n/);
        let lang = langMatch ? langMatch[1] : '';
        let code = langMatch ? parts[1].substring(langMatch[0].length) : parts[1];
        
        // Remove extra language identifier if present
        if (!lang && parts[1].startsWith('js\n')) {
          code = parts[1].substring(3);
          lang = 'javascript';
        } else if (!lang && parts[1].startsWith('cpp\n')) {
          code = parts[1].substring(4);
          lang = 'cpp';
        }
        
        return (
          <div>
            {parts[0] && <div className="text-sm mb-2">{parts[0]}</div>}
            <div className="bg-leetblue-900 p-3 rounded-md font-mono text-white overflow-x-auto">
              {/* No complex highlighting, just styled pre block */}
              <pre className="whitespace-pre-wrap break-all">
                {code}
              </pre>
            </div>
            {parts[2] && <div className="mt-2 text-gray-300">{parts[2]}</div>}
          </div>
        );
      }
    }
    
    return <div>{message}</div>;
  };

  return (
    <div className="glass-card rounded-lg p-4 font-mono text-sm max-w-lg w-full overflow-hidden shadow-xl">
      {/* Header with extension styling */}
      <div className="flex items-center justify-between gap-2 mb-3 border-b border-leetblue-700 pb-2">
        <div className="flex items-center">
          <div className="w-8 h-8  rounded-md flex items-center justify-center mr-2">
            <img src={logo} alt="LeetCode Buddy" className="w-6 h-6" />
          </div>
          <div className="text-sm text-white font-medium">LeetCode Buddy</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-leetamber-500"></div>
          <div className="w-3 h-3 rounded-full bg-leetteal-500"></div>
          <div className="w-3 h-3 rounded-full bg-leetpurple-500"></div>
        </div>
      </div>
      
      {/* Problem info */}
      <div className="mb-4 bg-leetblue-800/50 p-3 rounded-md">
        <div className="font-semibold mb-1 text-leetamber-400">{problemTitle}</div>
        <div className="text-xs text-gray-300">{problemDescription}</div>
      </div>
      
      {/* Chat/hint interface - Fixed scrolling behavior with containerRef */}
      <div 
        ref={containerRef} 
        className="overflow-y-auto overflow-x-hidden space-y-4 h-[280px] mb-4 pr-2"
      >
        {messages.map((message, idx) => (
          <div 
            key={idx} 
            className="flex justify-start"
          >
            <div 
              className={`rounded-lg px-3 py-2 max-w-[95%] ${
                message.type === "solution" 
                  ? "bg-leetpurple-900/50 border border-leetpurple-700/50" 
                  : "bg-leetblue-700/80"
              } text-gray-200`}
            >
              {formatMessage(message.text)}
              {idx === messages.length - 1 && showCursor && (
                <span className="inline-block ml-0.5 h-4 w-0.5 bg-white animate-blink"></span>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Action buttons */}
      <div className="border-t border-leetblue-700 pt-3 flex gap-2 items-center">
        {currentIndex < hints.length && (
          <button 
            onClick={getNextHint}
            className="bg-leetamber-500 hover:bg-leetamber-600 text-black font-medium px-4 py-1.5 rounded text-xs transition-colors"
          >
            Get Hint ({currentIndex}/{hints.length})
          </button>
        )}
        
        {currentIndex >= hints.length && !messages.some(m => m.type === "solution") && (
          <button 
            onClick={getSolution}
            className="bg-leetpurple-500 hover:bg-leetpurple-600 text-white font-medium px-4 py-1.5 rounded text-xs transition-colors"
          >
            Get C++ Solution
          </button>
        )}
      </div>
    </div>
  );
}