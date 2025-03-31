import Navbar from "./Navbar";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import { ReactNode } from "react";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-leetblue-900 text-white">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Breadcrumb />
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-leetpurple-400 to-leetteal-400">{title}</h1>
            {subtitle && <p className="text-xl text-gray-300 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
          
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}