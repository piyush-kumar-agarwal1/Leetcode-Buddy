import { useState } from 'react';
import PageLayout from "../components/PageLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(formState.subject);
    const body = encodeURIComponent(
      `Message from: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    
    window.location.href = `mailto:chatwithapiyush@gmail.com?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <PageLayout 
      title="Contact Me" 
      subtitle="Have questions or feedback? I'd love to hear from you."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-300 mb-6">
            I'm here to help with any questions you might have about LeetCode Buddy. 
            Fill out the form and I'll get back to you as soon as possible.
          </p>

          <div className="space-y-6 mt-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-leetteal-600/30 flex items-center justify-center">
                <Mail size={24} className="text-leetteal-400" />
              </div>
              <div>
                <p className="font-medium text-lg">Email</p>
                <a href="mailto:your-email@example.com" className="text-gray-300 hover:text-leetteal-400 transition-colors">
                chatwithapiyush@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-leetamber-600/30 flex items-center justify-center">
                <MapPin size={24} className="text-leetamber-400" />
              </div>
              <div>
                <p className="font-medium text-lg">Location</p>
                <p className="text-gray-300">India</p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-lg mt-8 bg-leetblue-800/40">
              <h3 className="text-xl font-semibold mb-3 text-leetteal-400">Connect With Me</h3>
              <p className="text-gray-300 mb-4">
                Feel free to connect with me on social media or check out my other projects on GitHub.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/piyush-kumar-agarwal1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-leetblue-700/60 flex items-center justify-center hover:bg-leetpurple-600/40 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-leetblue-700/60 flex items-center justify-center hover:bg-leetpurple-600/40 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-lg p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-leetpurple-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-leetpurple-400">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-leetpurple-400 mb-2">Message Sent!</h3>
              <p className="text-gray-300 mb-4">Thank you for reaching out. I'll get back to you shortly.</p>
              <button 
                onClick={() => setSubmitted(false)} 
                className="text-leetpurple-400 hover:text-leetpurple-300"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="bg-leetblue-800/40 border-leetblue-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                  className="bg-leetblue-800/40 border-leetblue-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder="Message subject"
                  className="bg-leetblue-800/40 border-leetblue-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  rows={5}
                  className="bg-leetblue-800/40 border-leetblue-700"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`amber-button px-5 py-3 rounded-md w-full flex items-center justify-center gap-2 font-medium text-base ${isSubmitting ? 'opacity-50' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </PageLayout>
  );
}