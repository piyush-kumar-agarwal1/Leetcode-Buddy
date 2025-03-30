import PageLayout from "../components/PageLayout";

export default function TermsOfService() {
  return (
    <PageLayout 
      title="Terms of Service" 
      subtitle="Last updated: March 22, 2025"
    >
      <div className="max-w-4xl mx-auto glass-card p-8 rounded-lg">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using LeetCode Buddy, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">2. Description of Service</h2>
            <p className="text-gray-300 leading-relaxed">
              LeetCode Buddy provides a browser extension and related services designed to assist users with LeetCode problem-solving through hints, explanations, and learning tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">3. User Accounts</h2>
            <p className="text-gray-300 leading-relaxed">
              Some features of LeetCode Buddy may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">4. User Conduct</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="space-y-2 text-gray-300 pl-5">
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>Use LeetCode Buddy for any illegal purpose</div>
              </li>
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>Attempt to reverse engineer or extract the source code of our software</div>
              </li>
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>Use automated methods to access or use our services</div>
              </li>
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>Share your account credentials with others</div>
              </li>
              <li className="flex gap-2">
                <span className="text-leetpurple-400 font-bold">•</span>
                <div>Use our services to cheat in actual coding interviews or assessments</div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              LeetCode Buddy and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">6. User Content</h2>
            <p className="text-gray-300 leading-relaxed">
              When you submit content to LeetCode Buddy, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and modify that content for the purpose of providing our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-gray-300 leading-relaxed">
              LeetCode Buddy is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will always be available, uninterrupted, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use LeetCode Buddy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">9. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We may terminate or suspend your account and access to LeetCode Buddy immediately, without prior notice, for conduct that we determine violates these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. We will provide notice of any material changes by posting the updated terms on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">11. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by the laws of the United States, without regard to its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-leetpurple-300 mb-4">12. Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms, please contact us at 
              <a href="mailto:legal@leetcodebuddy.com" className="text-leetteal-400 hover:underline ml-1">legal@leetcodebuddy.com</a>.
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}