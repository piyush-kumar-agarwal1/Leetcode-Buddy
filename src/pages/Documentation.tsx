import { useState } from "react";
import PageLayout from "../components/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Documentation() {
  const [activeTab, setActiveTab] = useState("getting-started");

  return (
    <PageLayout 
      title="Documentation" 
      subtitle="Learn how to use LeetCode Buddy effectively"
    >
      <div className="glass-card rounded-lg p-6 mb-8">
        <Tabs defaultValue="getting-started" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6 w-full">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
          </TabsList>
          
          <TabsContent value="getting-started" className="space-y-4">
            <h2 className="text-2xl font-semibold">Getting Started with LeetCode Buddy</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2 text-leetamber-400">Installation</h3>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>Visit the LeetCode Buddy website and click "Download Extension"</li>
                  <li>Extract the downloaded ZIP file</li>
                  <li>Open your browser and go to the extensions page</li>
                  <li>Enable "Developer Mode"</li>
                  <li>Click "Load unpacked" and select the extracted folder</li>
                  <li>You should now see the LeetCode Buddy icon in your extensions bar</li>
                </ol>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2 text-leetamber-400">First Use</h3>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>Navigate to LeetCode.com and log into your account</li>
                  <li>Open any LeetCode problem</li>
                  <li>You'll see the LeetCode Buddy sidebar appear on the right</li>
                  <li>Click "Get Started" to begin using the extension</li>
                </ol>
              </div>
              
              <div className="bg-leetblue-800/50 p-4 rounded-md border border-leetblue-700">
                <p className="text-sm"><strong>Note:</strong> LeetCode Buddy requires an active internet connection to provide hints and analysis.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="features" className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2 text-leetteal-400">Progressive Hints</h3>
                <p className="mb-2">Our hint system provides increasingly detailed guidance:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Level 1:</strong> General approach suggestion</li>
                  <li><strong>Level 2:</strong> Algorithm selection guidance</li>
                  <li><strong>Level 3:</strong> Implementation tips</li>
                  <li><strong>Level 4:</strong> Pseudocode outline</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2 text-leetteal-400">Code Review</h3>
                <p className="mb-2">Submit your solution for analysis:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Time and space complexity analysis</li>
                  <li>Code quality suggestions</li>
                  <li>Edge case coverage</li>
                  <li>Optimization recommendations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2 text-leetteal-400">Explanations</h3>
                <p className="mb-2">After solving the problem, get comprehensive explanations:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Line-by-line code breakdown</li>
                  <li>Visual algorithm illustrations</li>
                  <li>Related concepts and problems</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2 text-leetteal-400">Progress Tracking</h3>
                <p className="mb-2">Monitor your growth:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Problems solved statistics</li>
                  <li>Category strengths and weaknesses</li>
                  <li>Solution quality trends</li>
                  <li>Recommendation engine for next problems</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="troubleshooting" className="space-y-4">
            <h2 className="text-2xl font-semibold">Troubleshooting</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2 text-leetpurple-400">Common Issues</h3>
                
                <div className="space-y-4">
                  <div className="bg-leetblue-800/50 p-4 rounded-md border border-leetblue-700">
                    <h4 className="font-medium mb-1">Extension not appearing</h4>
                    <p className="text-sm mb-2">If the LeetCode Buddy sidebar isn't showing up:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 pl-4">
                      <li>Refresh the LeetCode problem page</li>
                      <li>Check if the extension is enabled in your browser</li>
                      <li>Try disabling other extensions that might conflict</li>
                      <li>Reinstall the extension</li>
                    </ul>
                  </div>
                  
                  <div className="bg-leetblue-800/50 p-4 rounded-md border border-leetblue-700">
                    <h4 className="font-medium mb-1">Hints not loading</h4>
                    <p className="text-sm mb-2">If hints are not loading properly:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 pl-4">
                      <li>Check your internet connection</li>
                      <li>Ensure you're on a valid LeetCode problem page</li>
                      <li>Clear your browser cache and cookies</li>
                      <li>Make sure you're using a supported browser (Chrome, Firefox, Edge)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-leetblue-800/50 p-4 rounded-md border border-leetblue-700">
                    <h4 className="font-medium mb-1">Performance issues</h4>
                    <p className="text-sm mb-2">If you're experiencing slowness:</p>
                    <ul className="list-disc list-inside text-sm space-y-1 pl-4">
                      <li>Close unused browser tabs</li>
                      <li>Disable other resource-intensive extensions</li>
                      <li>Restart your browser</li>
                      <li>Update to the latest version of LeetCode Buddy</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2 text-leetpurple-400">Contact Support</h3>
                <p className="mb-4">
                  If you continue to experience issues, please contact our support team at:
                  <br />
                  <a href="mailto:support@leetcodebuddy.com" className="text-leetpurple-400 hover:text-leetpurple-300">support@leetcodebuddy.com</a>
                </p>
                
                <p>
                  When reporting an issue, please include:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Your browser and version</li>
                  <li>Extension version</li>
                  <li>Detailed description of the problem</li>
                  <li>Screenshots if applicable</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
}