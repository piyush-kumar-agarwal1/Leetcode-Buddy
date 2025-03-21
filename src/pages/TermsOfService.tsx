import PageLayout from "../components/PageLayout";

export default function TermsOfService() {
  return (
    <PageLayout 
      title="Terms of Service" 
      subtitle="Last updated: March 22, 2025"
    >
      <div className="prose prose-invert max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using LeetCode Buddy, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          LeetCode Buddy provides a browser extension and related services designed to assist users with LeetCode problem-solving through hints, explanations, and learning tools.
        </p>

        <h2>3. User Accounts</h2>
        <p>
          Some features of LeetCode Buddy may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
        </p>

        <h2>4. User Conduct</h2>
        <p>
          You agree not to:
        </p>
        <ul>
          <li>Use LeetCode Buddy for any illegal purpose</li>
          <li>Attempt to reverse engineer or extract the source code of our software</li>
          <li>Use automated methods to access or use our services</li>
          <li>Share your account credentials with others</li>
          <li>Use our services to cheat in actual coding interviews or assessments</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>
          LeetCode Buddy and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
        </p>

        <h2>6. User Content</h2>
        <p>
          When you submit content to LeetCode Buddy, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and modify that content for the purpose of providing our services.
        </p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>
          LeetCode Buddy is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will always be available, uninterrupted, or error-free.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use LeetCode Buddy.
        </p>

        <h2>9. Termination</h2>
        <p>
          We may terminate or suspend your account and access to LeetCode Buddy immediately, without prior notice, for conduct that we determine violates these Terms of Service.
        </p>

        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will provide notice of any material changes by posting the updated terms on our website.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These Terms shall be governed by the laws of the United States, without regard to its conflict of law principles.
        </p>

        <h2>12. Contact</h2>
        <p>
          If you have any questions about these Terms, please contact us at legal@leetcodebuddy.com.
        </p>
      </div>
    </PageLayout>
  );
}