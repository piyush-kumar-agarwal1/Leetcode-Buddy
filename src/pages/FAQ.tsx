import { useState } from "react";
import PageLayout from "../components/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is LeetCode Buddy?",
      answer: "LeetCode Buddy is a browser extension that helps you solve LeetCode problems by providing progressive hints, code reviews, detailed explanations, and progress tracking - all without giving away the complete solution."
    },
    {
      question: "How is LeetCode Buddy different from other LeetCode helpers?",
      answer: "Unlike other tools that either provide full solutions (preventing you from learning) or offer no help at all, LeetCode Buddy strikes the perfect balance by giving you just enough guidance to make progress. Our AI-powered hints adapt to your needs, and we focus on helping you understand concepts rather than memorizing answers."
    },
    {
      question: "Does LeetCode Buddy work with all LeetCode problems?",
      answer: "Yes, LeetCode Buddy supports all problems on LeetCode, including premium problems if you have a LeetCode premium subscription. It works with problems of all difficulty levels: Easy, Medium, and Hard."
    },
    {
      question: "Which browsers are supported?",
      answer: "LeetCode Buddy is compatible with Google Chrome, Mozilla Firefox, and Microsoft Edge. Support for additional browsers may be added in the future based on user demand."
    },
    {
      question: "Is LeetCode Buddy free to use?",
      answer: "We offer a free tier that includes basic hints and limited features. For full access to all features, including detailed explanations, code reviews, and progress tracking, we offer affordable subscription plans. Visit our Pricing page for details."
    },
    {
      question: "How do I install LeetCode Buddy?",
      answer: "Simply download the extension from our website, unzip the file, and load it as an unpacked extension in your browser's extension management page. We're working on adding our extension to the Chrome Web Store and other browser extension marketplaces for even easier installation."
    },
    {
      question: "Does LeetCode Buddy collect my data?",
      answer: "We collect minimal data necessary to provide our services, such as the problems you're working on and your progress. We never store your code without your explicit permission, and we don't share your personal information with third parties. See our Privacy Policy for complete details."
    },
    {
      question: "How can I get support if I have issues?",
      answer: "For technical support, you can email us at support@leetcodebuddy.com. We also have detailed troubleshooting guides in our Documentation section. For quick questions, join our Discord community where our team and other users can help."
    },
    {
      question: "Can I use LeetCode Buddy for coding interviews?",
      answer: "LeetCode Buddy is designed as a learning tool for interview preparation, not for use during actual interviews. Using external assistance during real interviews is against most companies' policies and ethical guidelines for technical assessments."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your account settings. After cancellation, you'll continue to have access to premium features until the end of your billing period, after which you'll be downgraded to the free tier."
    },
    {
      question: "Are there any keyboard shortcuts?",
      answer: "Yes, LeetCode Buddy offers several keyboard shortcuts to improve your workflow: 'Alt+H' for requesting a hint, 'Alt+E' for explanation, 'Alt+C' for code review, and 'Alt+S' to toggle the sidebar. These can be customized in the extension settings."
    },
    {
      question: "Can I use LeetCode Buddy offline?",
      answer: "Some basic features like viewing previously downloaded content may work offline, but most features require an internet connection since our AI-powered hints and analysis run on our servers."
    }
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const filteredFaqs = searchQuery
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  return (
    <PageLayout 
      title="Frequently Asked Questions" 
      subtitle="Find answers to common questions about LeetCode Buddy"
    >
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search FAQ..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-leetblue-800/50 border border-leetblue-700 rounded-lg py-3 px-4 pl-10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-leetpurple-500"
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-3.5 left-3 text-gray-400">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      <div className="glass-card rounded-lg p-6">
        <Accordion type="single" collapsible className="w-full space-y-2">
          {filteredFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-leetblue-700 rounded-md overflow-hidden mb-3">
              <AccordionTrigger className="px-4 py-3 hover:bg-leetblue-800/50 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-leetblue-800/30 text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {filteredFaqs.length === 0 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto bg-leetblue-800/50 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-gray-400 mb-6">We couldn't find any FAQs matching your search</p>
            <button 
              onClick={() => setSearchQuery("")}
              className="text-leetpurple-400 hover:text-leetpurple-300 font-medium"
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
        <p className="text-gray-300 mb-6">We're here to help with any questions you might have</p>
        <a href="/contact" className="amber-button px-6 py-3 rounded-md inline-flex items-center gap-2">
          Contact Support
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </a>
      </div>
    </PageLayout>
  );
}