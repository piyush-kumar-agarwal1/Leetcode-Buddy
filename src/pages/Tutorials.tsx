import PageLayout from "../components/PageLayout";

export default function Tutorials() {
  const tutorials = [
    {
      title: "Getting Started with LeetCode Buddy",
      description: "Learn how to install and set up LeetCode Buddy in your browser.",
      image: "https://via.placeholder.com/640x360/1e293b/ffffff?text=Installation+Tutorial",
      duration: "5 min",
      difficulty: "Beginner"
    },
    {
      title: "Using Progressive Hints",
      description: "Master the art of using hints effectively without spoiling the problem.",
      image: "https://via.placeholder.com/640x360/1e293b/ffffff?text=Hints+Tutorial",
      duration: "8 min",
      difficulty: "Beginner"
    },
    {
      title: "Code Review and Optimization",
      description: "Learn how to use the code review feature to improve your solutions.",
      image: "https://via.placeholder.com/640x360/1e293b/ffffff?text=Code+Review+Tutorial",
      duration: "12 min",
      difficulty: "Intermediate"
    },
    {
      title: "Understanding Explanations",
      description: "Get the most out of the detailed explanations feature.",
      image: "https://via.placeholder.com/640x360/1e293b/ffffff?text=Explanations+Tutorial",
      duration: "10 min",
      difficulty: "Intermediate"
    },
    {
      title: "Tracking Your Progress",
      description: "Set goals and track your improvement over time.",
      image: "https://via.placeholder.com/640x360/1e293b/ffffff?text=Progress+Tutorial",
      duration: "7 min",
      difficulty: "Beginner"
    },
    {
      title: "Advanced Features and Settings",
      description: "Customize LeetCode Buddy to match your learning style.",
      image: "https://via.placeholder.com/640x360/1e293b/ffffff?text=Advanced+Features",
      duration: "15 min",
      difficulty: "Advanced"
    }
  ];

  return (
    <PageLayout 
      title="Tutorials" 
      subtitle="Learn how to make the most of LeetCode Buddy"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="glass-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div className="relative">
              <img 
                src={tutorial.image} 
                alt={tutorial.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-leetblue-950/80 text-white text-xs py-1 px-2 rounded-full">
                {tutorial.duration}
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent h-20"></div>
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  tutorial.difficulty === "Beginner" 
                    ? "bg-leetteal-900/50 text-leetteal-400" 
                    : tutorial.difficulty === "Intermediate"
                    ? "bg-leetamber-900/50 text-leetamber-400"
                    : "bg-leetpurple-900/50 text-leetpurple-400"
                }`}>
                  {tutorial.difficulty}
                </span>
              </div>
              <h2 className="text-lg font-semibold mb-2 group-hover:text-leetamber-400 transition-colors">
                {tutorial.title}
              </h2>
              <p className="text-gray-300 text-sm">{tutorial.description}</p>
              
              <button className="mt-4 text-sm font-medium text-leetamber-400 hover:text-leetamber-300 flex items-center gap-1">
                Watch Tutorial
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}