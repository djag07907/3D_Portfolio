// Performance monitoring for Core Web Vitals
// This script measures LCP, FID, CLS and other important metrics

class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.initializeMonitoring();
  }

  initializeMonitoring() {
    // Monitor Largest Contentful Paint (LCP)
    this.observeLCP();

    // Monitor First Input Delay (FID)
    this.observeFID();

    // Monitor Cumulative Layout Shift (CLS)
    this.observeCLS();

    // Monitor Time to First Byte (TTFB)
    this.observeTTFB();

    // Monitor First Contentful Paint (FCP)
    this.observeFCP();
  }

  observeLCP() {
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];

        this.metrics.lcp = {
          value: lastEntry.startTime,
          element: lastEntry.element,
          url: lastEntry.url,
          timestamp: Date.now(),
        };

        this.logLCPDetails(lastEntry);

        // Log improvement
        if (this.metrics.lcp.value < 2500) {
          console.log("✅ LCP is GOOD (< 2.5s)");
        } else if (this.metrics.lcp.value < 4000) {
          console.log("⚠️ LCP needs improvement (2.5s - 4s)");
        } else {
          console.log("❌ LCP is POOR (> 4s)");
        }
      });

      observer.observe({ entryTypes: ["largest-contentful-paint"] });
    }
  }

  logLCPDetails(entry) {
    console.group("LCP Details:");

    if (entry.url) {
      console.log("Resource URL:", entry.url);
    }
    console.groupEnd();
  }

  observeFID() {
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.metrics.fid = {
            value: entry.processingStart - entry.startTime,
            timestamp: Date.now(),
          };

          if (this.metrics.fid.value < 100) {
            console.log("✅ FID is GOOD (< 100ms)");
          } else if (this.metrics.fid.value < 300) {
            console.log("⚠️ FID needs improvement (100ms - 300ms)");
          } else {
            console.log("❌ FID is POOR (> 300ms)");
          }
        });
      });

      observer.observe({ entryTypes: ["first-input"] });
    }
  }

  observeCLS() {
    if ("PerformanceObserver" in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });

        this.metrics.cls = {
          value: clsValue,
          timestamp: Date.now(),
        };

        if (clsValue < 0.1) {
          console.log("✅ CLS is GOOD (< 0.1)");
        } else if (clsValue < 0.25) {
          console.log("⚠️ CLS needs improvement (0.1 - 0.25)");
        } else {
          console.log("❌ CLS is POOR (> 0.25)");
        }
      });

      observer.observe({ entryTypes: ["layout-shift"] });
    }
  }

  observeTTFB() {
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === window.location.origin + "/") {
            this.metrics.ttfb = {
              value: entry.responseStart - entry.requestStart,
              timestamp: Date.now(),
            };
          }
        });
      });

      observer.observe({ entryTypes: ["navigation"] });
    }
  }

  observeFCP() {
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.metrics.fcp = {
            value: entry.startTime,
            timestamp: Date.now(),
          };

          if (this.metrics.fcp.value < 1800) {
            console.log("✅ FCP is GOOD (< 1.8s)");
          } else if (this.metrics.fcp.value < 3000) {
            console.log("⚠️ FCP needs improvement (1.8s - 3s)");
          } else {
            console.log("❌ FCP is POOR (> 3s)");
          }
        });
      });

      observer.observe({ entryTypes: ["paint"] });
    }
  }

  getMetrics() {
    return this.metrics;
  }

  logSummary() {
    console.group("🔍 Performance Summary:");
    Object.entries(this.metrics).forEach(([key, metric]) => {
      if (metric && metric.value !== undefined) {
        const value =
          key === "cls"
            ? Math.round(metric.value * 1000) / 1000
            : Math.round(metric.value);
        const unit = key === "cls" ? "" : "ms";
      }
    });
    console.groupEnd();
  }

  // Method to track resource loading times
  trackResourceTiming() {
    window.addEventListener("load", () => {
      const resources = performance.getEntriesByType("resource");

      console.group("📦 Resource Loading Analysis:");

      // Group by resource type
      const resourceGroups = {
        images: [],
        scripts: [],
        stylesheets: [],
        fonts: [],
        other: [],
      };

      resources.forEach((resource) => {
        const duration = resource.responseEnd - resource.startTime;
        const resourceInfo = {
          name: resource.name,
          duration: Math.round(duration),
          size: resource.transferSize || 0,
        };

        if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
          resourceGroups.images.push(resourceInfo);
        } else if (resource.name.match(/\.js$/i)) {
          resourceGroups.scripts.push(resourceInfo);
        } else if (resource.name.match(/\.css$/i)) {
          resourceGroups.stylesheets.push(resourceInfo);
        } else if (resource.name.match(/\.(woff|woff2|ttf|otf)$/i)) {
          resourceGroups.fonts.push(resourceInfo);
        } else {
          resourceGroups.other.push(resourceInfo);
        }
      });

      // Log slowest resources
      Object.entries(resourceGroups).forEach(([type, resources]) => {
        if (resources.length > 0) {
          const sorted = resources.sort((a, b) => b.duration - a.duration);
          sorted.slice(0, 3).forEach((resource) => {});
        }
      });

      console.groupEnd();
    });
  }
}

// Initialize performance monitoring
const performanceMonitor = new PerformanceMonitor();

// Track resource timing
performanceMonitor.trackResourceTiming();

// Log summary after page load
window.addEventListener("load", () => {
  setTimeout(() => {
    performanceMonitor.logSummary();
  }, 2000);
});

export default performanceMonitor;
