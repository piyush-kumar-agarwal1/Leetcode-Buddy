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
        title="Home" 
        description="LeetCode Buddy is an AI-powered coding assistant that helps you solve LeetCode problems with progressive hints and explanations."
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "LeetCode Buddy",
            "applicationCategory": "DeveloperApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Person",
                "name": "Piyush Kumar Agarwal"
              }
            },
            "countryOfOrigin": "India",
            "operatingSystem": "Chrome, Firefox, Edge, Safari, iOS, macOS, Windows, Android",
            "description": "AI-powered assistant for solving LeetCode problems",
            "applicationSubCategory": "Developer Tools",
            "downloadUrl": "https://leetcode-buddy-olive.vercel.app/Leetcode-Buddy.zip"
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