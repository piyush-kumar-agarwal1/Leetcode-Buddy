import PageLayout from "../components/PageLayout";
import logo from '../assets/icon128.png';

export default function About() {
  return (
    <PageLayout 
      title="About LeetCode Buddy" 
      subtitle="Learn about our mission to make technical interview preparation more accessible and effective."
    >
      <div className="prose prose-invert max-w-none">
        <div className="flex justify-center mb-8">
          <img src={logo} alt="LeetCode Buddy" className="w-24 h-24" />
        </div>

        <h2>Our Mission</h2>
        <p>
          At LeetCode Buddy, we're driven by a simple mission: to make technical interview preparation 
          more accessible, efficient, and effective for developers of all skill levels. We believe that 
          with the right tools and guidance, anyone can master algorithmic problem-solving.
        </p>

        <h2>Our Story</h2>
        <p>
          LeetCode Buddy was born out of frustration. As developers preparing for technical interviews ourselves, 
          we found that existing resources either gave away complete solutions (robbing us of the learning experience) 
          or left us completely stuck (wasting valuable preparation time).
        </p>

        <p>
          We created LeetCode Buddy to be the assistant we wished we had: one that provides just enough guidance 
          to keep you moving forward, while still letting you experience the satisfaction and learning that comes 
          from solving problems yourself.
        </p>

        <h2>Our Team</h2>
        <p>
          We're a small team of engineers who are passionate about education, algorithms, and making technology 
          more accessible. With backgrounds in top tech companies and computer science education, we bring a unique 
          perspective to the challenge of technical interview preparation.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li><strong>Learning Over Memorization:</strong> We believe in understanding concepts, not just memorizing solutions.</li>
          <li><strong>Guidance Over Solutions:</strong> We provide hints and guidance rather than complete answers.</li>
          <li><strong>Accessibility:</strong> We're committed to making quality interview preparation accessible to everyone.</li>
          <li><strong>Continuous Improvement:</strong> We're constantly refining our platform based on user feedback and advances in technology.</li>
        </ul>

        <p className="mt-8 text-center">
          Join us on our mission to transform how developers prepare for technical interviews.
        </p>
      </div>
    </PageLayout>
  );
}