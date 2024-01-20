import { useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { Html } from "@react-three/drei";

const Tooltip = () => {
  const { camera } = useThree();
  const tooltipRef = useRef();

  useEffect(() => {
    const tooltip = tooltipRef.current;
    const position = camera.position.clone().normalize();
    const tooltipPosition = position.multiplyScalar(10);
    tooltip.position.copy(tooltipPosition);
    tooltip.lookAt(camera.position);
  }, [camera.position]);

  return (
    <mesh ref={tooltipRef}>
      <planeBufferGeometry args={[2, 1]} />
      <meshBasicMaterial color="white" transparent opacity={0.8} />
      <Html position={[0, 0, 0.1]} className="tooltip">
        Drag to Move
      </Html>
    </mesh>
  );
};

export default Tooltip;
