import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"%3E%3Crect width="40" height="40" fill="%230a1119"%3E%3C/rect%3E%3C/svg%3E',
  width,
  height,
  loading = 'lazy',
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(priority ? src : placeholder);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (priority) {
      setImgSrc(src);
      return;
    }
    
    // For non-priority images, use Intersection Observer
    const imgElement = new Image();
    imgElement.src = src;
    imgElement.onload = () => {
      setImgSrc(src);
      setIsLoaded(true);
    };
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        imgElement.src = src;
        observer.disconnect();
      }
    }, { rootMargin: '200px' });
    
    const timer = setTimeout(() => {
      // Prefetch after 3 seconds regardless of visibility
      imgElement.src = src;
    }, 3000);
    
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [src, priority]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      decoding={priority ? 'sync' : 'async'}
      className={cn(
        "transition-opacity duration-300",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  );
}