import PageLayout from "../components/PageLayout";

export default function PrivacyPolicy() {
  return (
    <PageLayout 
      title="Privacy Policy" 
      subtitle="Last updated: March 22, 2025"
    >
      <div className="max-w-4xl mx-auto glass-card p-8 rounded-lg">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              At LeetCode Buddy, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our browser extension and website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">We collect information in the following ways:</p>
            <ul className="space-y-3 text-gray-300 pl-5">
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>
                  <span className="font-semibold text-white">Information You Provide:</span> When you register, download our extension, or contact us, you may provide personal information such as your name, email, and academic/professional affiliation.
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>
                  <span className="font-semibold text-white">Usage Information:</span> We collect information about your interactions with our extension, including problems attempted, hints requested, and solutions viewed.
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>
                  <span className="font-semibold text-white">Device Information:</span> We may collect information about your browser and device to improve compatibility.
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="space-y-2 text-gray-300 pl-5">
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>Provide, maintain, and improve our services</div>
              </li>
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>Personalize your experience</div>
              </li>
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>Communicate with you about updates and new features</div>
              </li>
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>Analyze usage patterns to improve functionality</div>
              </li>
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>Detect and prevent fraud or abuse</div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell your personal information. We may share information with third parties in the following circumstances:
            </p>
            <ul className="space-y-2 text-gray-300 pl-5">
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>With your consent</div>
              </li>
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>With service providers who help us operate our services</div>
              </li>
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>To comply with legal obligations</div>
              </li>
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>In connection with a business transfer or merger</div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate security measures to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="space-y-2 text-gray-300 pl-5">
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>The right to access and receive a copy of your data</div>
              </li>
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>The right to rectify or update your data</div>
              </li>
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>The right to delete your data</div>
              </li>
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>The right to restrict processing of your data</div>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise these rights, please contact us at privacy@leetcodebuddy.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at 
              <a href="mailto:privacy@leetcodebuddy.com" className="text-leetteal-400 hover:underline ml-1">privacy@leetcodebuddy.com</a>.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}