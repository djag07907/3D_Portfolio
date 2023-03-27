// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         Computers.jsx
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        Hero section component file to render the pc 3D model.
// @details
// ------------------------------------------------------------------ -->

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // GLTF is not being displayed at deployment time
  // Sketchfab is good for more 3D models
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // Use mesh when using GLTF/3D rendering
    // Link to documentation for the mesh properties:
    // https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.25 : 0.6}
        position={isMobile ? [0, -1.5, -0.4] : [0, -3.25, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Component to render the scene.gltf
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
