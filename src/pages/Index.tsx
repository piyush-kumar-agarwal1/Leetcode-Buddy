import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Index() {
  return (
    <>
      <SEO
        title="LeetCode Buddy - AI-Powered Coding Assistant"
        description="Get AI-powered hints, optimizations, and explanations for LeetCode problems without spoiling the solution."
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "LeetCode Buddy",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Chrome, Firefox, Edge",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "120"
            },
            "description": "AI-powered coding assistant that provides hints and explanations for LeetCode problems without spoiling the solution."
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LeetCode Buddy",
            "url": "https://leetcode-buddyy.vercel.app/",
            "logo": "https://leetcode-buddyy.vercel.app/logo.png",
            "sameAs": [
              "https://github.com/leetcode-buddy"
            ]
          })}
        </script>
      </SEO>
      <div className="min-h-screen bg-leetblue-900 text-white overflow-x-hidden">
        <Navbar />
        <Hero />
        <ProblemSection />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  );
}