import { useParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function Category() {
  const { category } = useParams();
  // Filter blog posts by category
  
  return (
    <>
      <SEO 
        title={`${category} Articles`}
        description={`Browse all our articles about ${category.toLowerCase()} topics including guides, tutorials and best practices.`}
        canonical={`https://leetcode-buddy-olive.vercel.app/category/${category}`}
      />
      <PageLayout title={`${category} Articles`} subtitle="Browse articles by category">
        {/* List of articles */}
        <div className="mt-8">
          <h2 className="text-xl font-medium mb-4 text-leetpurple-400">Related Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category === "Algorithms" && (
              <>
                <Link to="/documentation#algorithms" className="glass-card p-4 rounded-lg hover:bg-leetblue-800/40 transition-colors">
                  <h3 className="font-medium text-leetteal-400 mb-2">Algorithm Documentation</h3>
                  <p className="text-sm text-gray-300">Learn about our algorithm hints and explanations</p>
                </Link>
                <Link to="/tutorials#algorithms" className="glass-card p-4 rounded-lg hover:bg-leetblue-800/40 transition-colors">
                  <h3 className="font-medium text-leetpurple-400 mb-2">Algorithm Tutorials</h3>
                  <p className="text-sm text-gray-300">Step-by-step video guides to mastering algorithms</p>
                </Link>
              </>
            )}
            {/* Add similar blocks for other categories */}
          </div>
        </div>
      </PageLayout>
    </>
  );
}