import { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import DownloadForm, { UserData } from './DownloadForm';
import { submitUserData, downloadExtension } from '../lib/UserDataService';
import { useToast } from '../hooks/use-toast';

export default function CTA() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleFormSubmit = async (userData: UserData) => {
    try {
      setIsSubmitting(true);
      
      // Submit user data using the service
      const success = await submitUserData(userData);
      
      if (success) {
        toast({
          title: "Success!",
          description: "Thank you for registering. Your download will begin shortly.",
        });
      }
      
      // Trigger the download using the service
      downloadExtension();
      
      // Close the form
      setShowForm(false);
    } catch (error) {
      console.error('Error during form submission:', error);
      toast({
        title: "Error",
        description: "There was a problem processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

    const handleDownloadClick = () => {
    // Always show the form
    setShowForm(true);
  };

  return (
    <section id="download" className="py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-leetpurple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-leetteal-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download Now and <span className="text-gradient">Transform</span> Your Practice
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Install the LeetCode Buddy extension and transform how you practice coding problems
            </p>
            
            <button
              onClick={handleDownloadClick}
              className="amber-button px-8 py-4 rounded-md text-lg flex items-center gap-3 mx-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Extension
            </button>
          </div>
        </AnimatedElement>
        
        <div className="max-w-2xl mx-auto p-6 bg-leetblue-800/50 rounded-lg">
          <h3 className="text-xl font-medium mb-4">Installation Instructions:</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-300">
            <li>Download the extension package using the button above</li>
            <li>Open Chrome and navigate to <code className="bg-leetblue-700 px-2 py-0.5 rounded">chrome://extensions/</code></li>
            <li>Enable "Developer mode" using the toggle in the top-right corner</li>
            <li>Unzip the downloaded package to a folder on your computer</li>
            <li>Click "Load unpacked" and select the unzipped folder</li>
            <li>LeetCode Buddy extension should now appear in your extensions list</li>
          </ol>
        </div>
      </div>
      
      {showForm && (
        <DownloadForm 
          onSubmit={handleFormSubmit} 
          onClose={() => setShowForm(false)} 
        />
      )}
    </section>
  );
}