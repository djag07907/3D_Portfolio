import { memo } from "react";
import ParallaxTilt from "react-parallax-tilt";

/**
 * Optimized version of ParallaxTilt with better performance
 * - Memoized to prevent unnecessary re-renders
 * - Reduced max tilt angle for less calculation
 * - Faster speed for quicker responses
 */
const OptimizedTilt = memo(({ children, className }) => {
  return (
    <ParallaxTilt
      options={{
        max: 25,
        scale: 1,
        speed: 300,
      }}
      glareEnable={false} // Disable glare for better performance
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={1000}
      transitionSpeed={400}
      className={className}
      style={{ willChange: "transform" }} // Hint to browser for GPU acceleration
    >
      {children}
    </ParallaxTilt>
  );
});

OptimizedTilt.displayName = "OptimizedTilt";

export default OptimizedTilt;
