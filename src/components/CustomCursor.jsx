import { useState, useEffect } from "react";

/**
 * Custom interactive cursor:
 * - A center dot following the exact mouse position
 * - An outer ring trailing smoothly with CSS transition
 * - Expands when hovering clickable elements
 * - Automatically hidden on mobile and touchscreens
 */
export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Initialize touch detection directly in state to prevent cascading renders
  const [isTouchDevice] = useState(() => {
    return typeof window !== "undefined" && ("ontouchstart" in window || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0));
  });

  useEffect(() => {
    if (isTouchDevice) return;

    // Track mouse coordinates
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Check if hovering over clickable items
    const handleMouseOver = (e) => {
      const interactive = e.target.closest("a, button, input, select, textarea, [role='button'], .clickable");
      setIsHovered(Boolean(interactive));
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isTouchDevice]);

  // Do not render on touchscreens
  if (isTouchDevice) return null;

  return (
    <>
      {/* Center pinpoint cursor dot */}
      <div
        className="cursor-dot"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
        aria-hidden="true"
      />

      {/* Smooth trailing outer ring */}
      <div
        className={`cursor-ring ${isHovered ? "hovered" : ""}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
        aria-hidden="true"
      />
    </>
  );
}
