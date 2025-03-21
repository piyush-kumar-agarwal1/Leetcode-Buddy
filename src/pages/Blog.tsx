import PageLayout from "../components/PageLayout";

export default function Blog() {
  const blogPosts = [
    {
      title: "How to Approach Dynamic Programming Problems",
      excerpt: "Dynamic programming can be intimidating, but with the right approach, you can master this powerful technique.",
      author: "Sarah Chen",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "Algorithms",
      image: "https://via.placeholder.com/800x450/1e293b/ffffff?text=Dynamic+Programming"
    },
    {
      title: "5 Common Mistakes in Graph Algorithm Implementation",
      excerpt: "Graph algorithms are notoriously tricky to implement correctly. Here are the most common pitfalls and how to avoid them.",
      author: "Michael Johnson",
      date: "March 10, 2025",
      readTime: "6 min read",
      category: "Data Structures",
      image: "https://via.placeholder.com/800x450/1e293b/ffffff?text=Graph+Algorithms"
    },
    {
      title: "From Junior to Senior: How LeetCode Helps Career Growth",
      excerpt: "Technical interviews are just the beginning. Learn how algorithmic problem-solving skills translate to real-world engineering.",
      author: "Priya Patel",
      date: "March 5, 2025",
      readTime: "10 min read",
      category: "Career",
      image: "https://via.placeholder.com/800x450/1e293b/ffffff?text=Career+Growth"
    },
    {
      title: "The Psychology of Problem Solving",
      excerpt: "The mindset you bring to a coding challenge is just as important as your technical skills. Here's how to develop a growth mindset.",
      author: "David Kim",
      date: "February 28, 2025",
      readTime: "7 min read",
      category: "Learning",
      image: "https://via.placeholder.com/800x450/1e293b/ffffff?text=Problem+Solving"
    },
    {
      title: "Behind the Scenes: How LeetCode Buddy's AI Works",
      excerpt: "A deep dive into the technology that powers our intelligent hint and explanation system.",
      author: "Alex Morgan",
      date: "February 20, 2025",
      readTime: "12 min read",
      category: "Technology",
      image: "https://via.placeholder.com/800x450/1e293b/ffffff?text=AI+Technology"
    }
  ];

  return (
    <PageLayout 
      title="Blog" 
      subtitle="Insights, tips, and stories from the LeetCode Buddy team"
    >
      <div className="space-y-12 mb-16">
        {/* Featured post */}
        <div className="glass-card rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-leetpurple-900/50 text-leetpurple-400 px-2 py-1 rounded-full text-xs font-medium">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-400 text-sm">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 hover:text-leetamber-400 transition-colors">
                  <a href="#">{blogPosts[0].title}</a>
                </h2>
                <p className="text-gray-300 mb-4">{blogPosts[0].excerpt}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-leetpurple-600/30 flex items-center justify-center">
                  <span className="text-sm font-medium">{blogPosts[0].author.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-medium">{blogPosts[0].author}</p>
                  <p className="text-xs text-gray-400">{blogPosts[0].date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <div key={index} className="glass-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    post.category === "Algorithms" 
                      ? "bg-leetteal-900/50 text-leetteal-400"
                      : post.category === "Data Structures"
                      ? "bg-leetamber-900/50 text-leetamber-400"
                      : post.category === "Career"
                      ? "bg-leetpurple-900/50 text-leetpurple-400"
                      : post.category === "Learning"
                      ? "bg-leetblue-700/50 text-leetblue-300"
                      : "bg-leetpurple-900/50 text-leetpurple-400"
                  }`}>
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 hover:text-leetamber-400 transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-leetpurple-600/30 flex items-center justify-center">
                      <span className="text-xs font-medium">{post.author.charAt(0)}</span>
                    </div>
                    <p className="text-sm">{post.author}</p>
                  </div>
                  <p className="text-xs text-gray-400">{post.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center">
        <button className="glass-button px-6 py-2 rounded-md flex items-center gap-2">
          View More Articles
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </button>
      </div>
    </PageLayout>
  );
}