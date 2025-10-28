// <!-- -----------------------------------------------------------------
// @copyright    (C) 2023 SoAS
// @file         Ball.jsx
// @author       Daniel Alvarez <josamogax@gmail.com>
// @brief        Component to structure the tech balls information.
// @details
// ------------------------------------------------------------------ -->

import React, { Suspense, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = memo((props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      {/* Will cast shadow, receive shadow and render the balls */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* The Geometry element will define the shape of the ball */}
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Balls render properties */}
        <Decal
          position={[0, 0, 1]}
          map={decal}
          scale={1}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
});

Ball.displayName = "Ball";

const BallCanvas = memo(({ icon }) => {
  return (
    // Balls init properties
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]} // Reduced DPR for better performance
      gl={{
        preserveDrawingBuffer: true,
        antialias: false, // Disable antialiasing for performance
        powerPreference: "high-performance",
      }}
      performance={{ min: 0.5 }} // Adaptive performance
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={icon} />
      </Suspense>
    </Canvas>
  );
});

BallCanvas.displayName = "BallCanvas";

export default BallCanvas;
