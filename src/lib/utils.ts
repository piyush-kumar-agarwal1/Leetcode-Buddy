import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add these utility functions to optimize performance

// Debounce function to prevent excessive calculations
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Use requestIdleCallback for non-critical operations
export function scheduleIdleTask(callback: () => void, timeout = 2000): void {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, 1);
  }
}

// Only animate on non-reduced motion preferences
export function shouldAnimate(): boolean {
  return typeof window !== 'undefined' 
    ? !window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;
}

// Get device performance level
export function getDevicePerformance(): 'low' | 'medium' | 'high' {
  if (typeof window === 'undefined') return 'high';
  
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 8;
  interface NetworkInformation {
    effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
  }

  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection?.effectiveType || '4g';
  
  if (memory <= 4 || connection === 'slow-2g' || connection === '2g') {
    return 'low';
  } else if (memory <= 8 || connection === '3g') {
    return 'medium';
  } else {
    return 'high';
  }
}
