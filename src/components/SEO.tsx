import { Helmet } from "react-helmet";
import { ReactNode } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  children?: ReactNode;
}

export default function SEO({ 
  title, 
  description, 
  canonical = "https://leetcode-buddy-olive.vercel.app", 
  keywords = "leetcode, coding interview, algorithm practice, programming problems, coding help",
  ogImage = "/opengraph-image.png",
  children
}: SEOProps) {
  const fullTitle = `${title} | LeetCode Buddy`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={`${canonical}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional schema markup or custom elements */}
      {children}
    </Helmet>
  );
}