import { useState } from "react";
import PageLayout from "../components/PageLayout";
import { Link } from "react-router-dom";
import { Search, Share2, BookOpen, ArrowRight, ChevronDown, ExternalLink, Code, Brain, Briefcase, Network, Cpu } from "lucide-react";
import SEO from "@/components/SEO";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const blogPosts = [
    {
      title: "How to Approach Dynamic Programming Problems",
      excerpt: "Dynamic programming can be intimidating, but with the right approach, you can master this powerful technique.",
      author: "Piyush Kumar Agarwal",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "Algorithms",
      tags: ["dynamic programming", "algorithms", "problem solving"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      slug: "dynamic-programming-approach",
      externalUrl: "https://leetcode.com/explore/featured/card/dynamic-programming/",
      icon: Code,
      relatedTopics: [
        {
          title: "Top-Down vs Bottom-Up Approaches",
          link: "/documentation#dynamic-programming-approaches"
        },
        {
          title: "Memoization Techniques",
          link: "/tutorials#memoization"
        }
      ]
    },
    {
      title: "5 Common Mistakes in Graph Algorithm Implementation",
      excerpt: "Graph algorithms are notoriously tricky to implement correctly. Here are the most common pitfalls and how to avoid them.",
      author: "Piyush Kumar Agarwal",
      date: "March 10, 2025",
      readTime: "6 min read",
      category: "Data Structures",
      tags: ["graphs", "algorithms", "debugging"],
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      slug: "graph-algorithm-mistakes",
      externalUrl: "https://leetcode.com/explore/featured/card/graph/",
      icon: Network,
      relatedTopics: [
        {
          title: "Graph Traversal Methods",
          link: "/documentation#graph-traversal"
        },
        {
          title: "Adjacency Lists vs Matrices",
          link: "/tutorials#graph-representation"
        }
      ]
    },
    {
      title: "From Junior to Senior: How LeetCode Helps Career Growth",
      excerpt: "Technical interviews are just the beginning. Learn how algorithmic problem-solving skills translate to real-world engineering.",
      author: "Piyush Kumar Agarwal",
      date: "March 5, 2025",
      readTime: "10 min read",
      category: "Career",
      tags: ["career growth", "interviews", "professional development"],
      image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      slug: "leetcode-career-growth",
      externalUrl: "https://leetcode.com/discuss/interview-question",
      icon: Briefcase,
      relatedTopics: [
        {
          title: "Technical Interview Preparation",
          link: "/documentation#interview-prep"
        },
        {
          title: "System Design Resources",
          link: "/resources#system-design"
        }
      ]
    },
    {
      title: "The Psychology of Problem Solving",
      excerpt: "The mindset you bring to a coding challenge is just as important as your technical skills. Here's how to develop a growth mindset.",
      author: "Piyush Kumar Agarwal",
      date: "February 28, 2025",
      readTime: "7 min read",
      category: "Learning",
      tags: ["mindset", "learning", "productivity"],
      image: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      slug: "problem-solving-psychology",
      externalUrl: "https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/",
      icon: Brain,
      relatedTopics: [
        {
          title: "Effective Learning Strategies",
          link: "/documentation#learning-strategies"
        },
        {
          title: "Overcoming Coding Blocks",
          link: "/faq#coding-challenges"
        }
      ]
    },
    {
      title: "Behind the Scenes: How LeetCode Buddy's AI Works",
      excerpt: "A deep dive into the technology that powers our intelligent hint and explanation system.",
      author: "Piyush Kumar Agarwal",
      date: "February 20, 2025",
      readTime: "12 min read",
      category: "Technology",
      tags: ["AI", "technology", "machine learning"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      slug: "leetcode-buddy-ai-technology",
      externalUrl: "https://github.blog/2023-03-22-github-copilot-x-the-ai-powered-developer-experience/",
      icon: Cpu,
      relatedTopics: [
        {
          title: "How Our AI Generates Hints",
          link: "/about#ai-technology"
        },
        {
          title: "The Future of Coding Assistants",
          link: "/blog#ai-future"
        }
      ]
    }
  ];

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory ? post.category === activeCategory : true;
    const matchesSearch = searchQuery 
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : blogPosts[0];
  
  const regularPosts = filteredPosts.filter(post => post.title !== featuredPost.title);

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "LeetCode Buddy Blog",
    "description": "Insights, tips, and stories about coding interviews, algorithms, and career development",
    "publisher": {
      "@type": "Person",
      "name": "Piyush Kumar Agarwal"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "image": post.image,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": post.externalUrl
    }))
  };

  return (
    <>
      <SEO 
        title="Blog - Coding Tips & Algorithms" 
        description="Learn about algorithms, data structures, career growth, and coding interview preparation from the LeetCode Buddy blog."
      >
        <script type="application/ld+json">
          {JSON.stringify(blogListSchema)}
        </script>
      </SEO>
      
      <PageLayout 
        title="Algorithm Insights" 
        subtitle="Expert advice, tutorials, and stories to help you master coding interviews"
      >
        <div className="glass-card p-4 mb-10 rounded-lg flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-leetblue-800/50 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-leetpurple-400 text-sm"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <button 
              onClick={() => setActiveCategory(null)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                activeCategory === null 
                ? "bg-leetpurple-600 text-white" 
                : "bg-leetblue-800/50 text-gray-300 hover:bg-leetblue-700"
              }`}
            >
              All
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === category 
                  ? "bg-leetpurple-600 text-white" 
                  : "bg-leetblue-800/50 text-gray-300 hover:bg-leetblue-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold mb-4">No articles found</h3>
            <p className="text-gray-300 mb-6">
              We couldn't find any articles matching your search.
            </p>
            <button 
              onClick={() => {setSearchQuery(""); setActiveCategory(null);}}
              className="px-4 py-2 bg-leetpurple-600 rounded-md text-white font-medium hover:bg-leetpurple-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12 mb-16">
            <div className="glass-card rounded-lg overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 h-72 lg:h-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-leetblue-900/20"></div>
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-leetblue-900/90 via-leetblue-900/40 to-transparent"></div>
                  <div className="absolute top-6 left-6 flex flex-col gap-3">
                    <span className="bg-leetpurple-600/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                    <div className="mt-4 flex flex-col gap-2">
                      <span className={`w-fit px-3 py-1 rounded-full text-xs font-medium ${
                        featuredPost.category === "Algorithms" 
                          ? "bg-leetteal-900/70 text-leetteal-400"
                          : featuredPost.category === "Data Structures"
                          ? "bg-leetamber-900/70 text-leetamber-400"
                          : featuredPost.category === "Career"
                          ? "bg-leetpurple-900/70 text-leetpurple-400"
                          : featuredPost.category === "Learning"
                          ? "bg-leetblue-700/70 text-leetblue-300"
                          : "bg-leetpurple-900/70 text-leetpurple-400"
                      }`}>
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center text-gray-400 text-xs">
                        <BookOpen className="h-3 w-3 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-xs bg-leetblue-700/80 text-gray-300 px-2 py-0.5 rounded flex items-center gap-1">
                        <ExternalLink size={10} /> LeetCode Resource
                      </span>
                    </div>
                    
                    <a 
                      href={featuredPost.externalUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-leetamber-400 transition-colors flex items-center gap-2">
                        <span className="inline-flex items-center justify-center p-1 bg-leetblue-800/70 rounded-md text-leetamber-400">
                          {featuredPost.icon && <featuredPost.icon size={18} />}
                        </span>
                        {featuredPost.title}
                      </h2>
                    </a>
                    <p className="text-gray-300 mb-4">{featuredPost.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.map(tag => (
                        <span key={tag} className="text-xs bg-leetblue-800/70 text-gray-300 px-2 py-1 rounded-md hover:bg-leetblue-700/70 transition-colors cursor-pointer">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={featuredPost.externalUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-leetamber-400 hover:text-leetamber-300 text-sm font-medium mt-2 border border-leetamber-400/30 px-3 py-1 rounded-md hover:bg-leetamber-900/20 transition-colors"
                    >
                      Read on LeetCode
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1-2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>

                    <div className="mt-6 pt-4 border-t border-leetblue-700">
                      <h3 className="text-sm font-medium mb-2 text-gray-400">Related Topics</h3>
                      <div className="space-y-1">
                        {featuredPost.relatedTopics.map((topic, i) => (
                          <Link 
                            key={i} 
                            to={topic.link} 
                            className="block text-sm text-leetpurple-400 hover:text-leetpurple-300 hover:underline"
                          >
                            → {topic.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-leetpurple-600/30 flex items-center justify-center">
                        <span className="text-sm font-medium">{featuredPost.author.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{featuredPost.author}</p>
                        <p className="text-xs text-gray-400">{featuredPost.date}</p>
                      </div>
                    </div>
                    
                    <button 
                      className="w-8 h-8 rounded-full bg-leetblue-800/70 flex items-center justify-center hover:bg-leetpurple-600/40 transition-colors" 
                      title="Share this post"
                      aria-label="Share this post"
                      onClick={() => {
                        navigator.clipboard.writeText(featuredPost.externalUrl);
                        alert('Link copied to clipboard!');
                      }}
                    >
                      <Share2 size={16} className="text-gray-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularPosts.map((post, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-leetblue-900/20"></div>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-leetblue-900 via-leetblue-900/50 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        post.category === "Algorithms" 
                          ? "bg-leetteal-900/70 text-leetteal-400"
                          : post.category === "Data Structures"
                          ? "bg-leetamber-900/70 text-leetamber-400"
                          : post.category === "Career"
                          ? "bg-leetpurple-900/70 text-leetpurple-400"
                          : post.category === "Learning"
                          ? "bg-leetblue-700/70 text-leetblue-300"
                          : "bg-leetpurple-900/70 text-leetpurple-400"
                      }`}>
                        {post.category}
                      </span>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center text-gray-300 text-xs bg-leetblue-900/70 px-2 py-1 rounded-full">
                        <BookOpen className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-xs bg-leetblue-700/80 text-gray-300 px-2 py-0.5 rounded flex items-center gap-1">
                        <ExternalLink size={10} /> LeetCode Resource
                      </span>
                    </div>
                    
                    <a 
                      href={post.externalUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <h2 className="text-xl font-semibold mb-2 group-hover:text-leetamber-400 transition-colors flex items-center gap-2">
                        <span className="inline-flex items-center justify-center p-1 bg-leetblue-800/70 rounded-md text-leetamber-400">
                          {post.icon && <post.icon size={16} />}
                        </span>
                        {post.title}
                      </h2>
                    </a>
                    
                    <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs bg-leetblue-800/70 text-gray-300 px-2 py-1 rounded-md hover:bg-leetblue-700/70 transition-colors cursor-pointer">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={post.externalUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-leetamber-400 hover:text-leetamber-300 text-sm font-medium mt-2 border border-leetamber-400/30 px-3 py-1 rounded-md hover:bg-leetamber-900/20 transition-colors"
                    >
                      Read on LeetCode
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1-2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-leetpurple-600/30 flex items-center justify-center">
                          <span className="text-xs font-medium">{post.author.charAt(0)}</span>
                        </div>
                        <p className="text-sm">{post.author}</p>
                      </div>
                      <p className="text-xs text-gray-400">{post.date}</p>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-leetblue-700">
                      <h3 className="text-sm font-medium mb-2 text-gray-400">Related Topics</h3>
                      <div className="space-y-1">
                        {post.relatedTopics.map((topic, i) => (
                          <Link 
                            key={i} 
                            to={topic.link} 
                            className="block text-sm text-leetpurple-400 hover:text-leetpurple-300 hover:underline"
                          >
                            → {topic.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="text-center text-sm text-gray-400 mb-12">
          <p>Featured blog content links are provided for educational purposes. All content belongs to their respective authors.</p>
        </div>
        
        <div className="glass-card p-8 rounded-lg mb-16 bg-gradient-to-br from-leetblue-900 to-leetpurple-900/30">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Stay Updated with Latest Articles</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter to receive coding tips, interview preparation advice, and algorithm insights directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-leetblue-800/70 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-leetpurple-400"
              />
              <button className="bg-leetpurple-600 hover:bg-leetpurple-700 px-5 py-2 rounded-md font-medium transition-colors flex items-center justify-center gap-2">
                Subscribe
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button className="glass-button px-6 py-3 rounded-md flex items-center gap-2 group">
            <span>View More Articles</span>
            <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </PageLayout>
    </>
  );
}