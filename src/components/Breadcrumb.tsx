import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(path => path);
  
  // Map page names to more readable titles
  const getPageTitle = (path: string) => {
    const titles: {[key: string]: string} = {
      'documentation': 'Documentation',
      'about': 'About',
      'faq': 'FAQ',
      'blog': 'Blog',
      'contact': 'Contact',
      'tutorials': 'Tutorials',
      'privacy-policy': 'Privacy Policy',
      'terms-of-service': 'Terms of Service'
    };
    return titles[path] || path;
  };
  
  // Don't show breadcrumbs on homepage
  if (paths.length === 0) return null;
  
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm">
      <ol className="flex flex-wrap items-center space-x-2">
        <li>
          <Link to="/" className="text-gray-400 hover:text-leetpurple-400">Home</Link>
        </li>
        {paths.map((path, index) => (
          <li key={path} className="flex items-center">
            <span className="mx-2 text-gray-500">/</span>
            {index === paths.length - 1 ? (
              <span className="text-leetpurple-400" aria-current="page">{getPageTitle(path)}</span>
            ) : (
              <Link to={`/${paths.slice(0, index + 1).join('/')}`} className="text-gray-400 hover:text-leetpurple-400">
                {getPageTitle(path)}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}