// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         Earth.jsx
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        Earth component to display earth-globe element.
// @details
// ------------------------------------------------------------------ -->

import { Suspense, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Preload the model to avoid loading delay
useGLTF.preload("./planet/scene.gltf");

const Earth = memo(() => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
});

Earth.displayName = "Earth";

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]} // Limit device pixel ratio for better performance
      gl={{
        preserveDrawingBuffer: true,
        antialias: false, // Disable for performance
        powerPreference: "high-performance",
      }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      performance={{ min: 0.5 }} // Adaptive performance
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5} // Slower rotation for better performance
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={false} // Disable damping for performance
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
