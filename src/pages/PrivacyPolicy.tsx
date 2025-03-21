import PageLayout from "../components/PageLayout";

export default function PrivacyPolicy() {
  return (
    <PageLayout 
      title="Privacy Policy" 
      subtitle="Last updated: March 22, 2025"
    >
      <div className="prose prose-invert max-w-none">
        <h2>Introduction</h2>
        <p>
          At LeetCode Buddy, we take your privacy seriously. This Privacy Policy explains how we collect, 
          use, disclose, and safeguard your information when you use our browser extension and website.
        </p>

        <h2>Information We Collect</h2>
        <p>We collect information in the following ways:</p>
        <ul>
          <li><strong>Information You Provide:</strong> When you register, download our extension, or contact us, you may provide personal information such as your name, email, and academic/professional affiliation.</li>
          <li><strong>Usage Information:</strong> We collect information about your interactions with our extension, including problems attempted, hints requested, and solutions viewed.</li>
          <li><strong>Device Information:</strong> We may collect information about your browser and device to improve compatibility.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Personalize your experience</li>
          <li>Communicate with you about updates and new features</li>
          <li>Analyze usage patterns to improve functionality</li>
          <li>Detect and prevent fraud or abuse</li>
        </ul>

        <h2>Data Sharing and Disclosure</h2>
        <p>
          We do not sell your personal information. We may share information with third parties in the following circumstances:
        </p>
        <ul>
          <li>With your consent</li>
          <li>With service providers who help us operate our services</li>
          <li>To comply with legal obligations</li>
          <li>In connection with a business transfer or merger</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, including:
        </p>
        <ul>
          <li>The right to access and receive a copy of your data</li>
          <li>The right to rectify or update your data</li>
          <li>The right to delete your data</li>
          <li>The right to restrict processing of your data</li>
        </ul>
        <p>
          To exercise these rights, please contact us at privacy@leetcodebuddy.com.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at privacy@leetcodebuddy.com.
        </p>
      </div>
    </PageLayout>
  );
}