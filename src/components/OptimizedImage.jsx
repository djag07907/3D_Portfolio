import { useState, useEffect, useRef } from "react";

/**
 * Optimized Image component with:
 * - Lazy loading (loads only when in viewport)
 * - Loading placeholder
 * - Error handling
 * - Proper sizing attributes
 */
const OptimizedImage = ({
  src,
  alt,
  title,
  className = "",
  width,
  height,
  loading = "lazy", // 'lazy' or 'eager'
  placeholder = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    if (img.complete) {
      setIsLoaded(true);
    }
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    console.error(`Failed to load image: ${src}`);
  };

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: width || "100%",
        height: height || "auto",
        minHeight: placeholder && !isLoaded ? "100px" : "auto",
      }}
    >
      {/* Loading placeholder */}
      {placeholder && !isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-gray-700 animate-pulse rounded-2xl"
          style={{ zIndex: 1 }}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-400 rounded-2xl">
          <span className="text-sm">Failed to load image</span>
        </div>
      )}

      {/* Actual image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        title={title}
        className={`${className} ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          display: hasError ? "none" : "block",
          contentVisibility: "auto",
        }}
      />
    </div>
  );
};

export default OptimizedImage;
