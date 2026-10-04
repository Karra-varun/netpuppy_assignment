import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to trigger scroll animations using Intersection Observer
 * @param {Object} options - IntersectionObserver options
 */
export function useScrollReveal(options = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }) {
  const elementRef = useRef(null);
  
  // Default to visible if IntersectionObserver is not supported
  const [isVisible, setIsVisible] = useState(() => {
    return typeof window !== "undefined" && !("IntersectionObserver" in window);
  });

  useEffect(() => {
    const node = elementRef.current;
    if (!node || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Trigger only once for natural entrance
      }
    }, options);

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [options]);

  return [elementRef, isVisible];
}
