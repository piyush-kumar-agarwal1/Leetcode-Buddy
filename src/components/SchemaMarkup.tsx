import { Helmet } from "react-helmet";

interface FAQItem {
  question: string;
  answer: string;
}

export function HowToSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Install and Use LeetCode Buddy",
    "description": "Step-by-step guide to install and use the LeetCode Buddy browser extension",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Download the Extension",
        "text": "Visit the LeetCode Buddy website and click \"Download Extension\""
      },
      {
        "@type": "HowToStep",
        "name": "Install in Browser",
        "text": "Open your browser's extension page, enable developer mode, and load the extension"
      },
      {
        "@type": "HowToStep",
        "name": "Use with LeetCode",
        "text": "Navigate to LeetCode.com and access the extension features from the sidebar"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}