
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-leetblue-900 text-white">
      <div className="text-center glass-card rounded-xl p-8 max-w-md">
        <div className="mb-8 w-24 h-24 bg-leetpurple-600/20 rounded-full flex items-center justify-center mx-auto">
          <span className="text-5xl font-bold text-gradient">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-300 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="amber-button px-6 py-2 rounded-md inline-flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
