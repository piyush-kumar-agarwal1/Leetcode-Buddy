import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Documentation from "./pages/Documentation";
import Tutorials from "./pages/Tutorials.tsx";
import Blog from "./pages/Blog.tsx";
import FAQ from "./pages/FAQ.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Company Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          
          {/* Resource Pages */}
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;