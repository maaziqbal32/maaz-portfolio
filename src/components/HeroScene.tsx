import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingSphere = ({ position, color, speed, distort, scale }: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
  scale: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#4f8fff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        <FloatingSphere position={[3, 1, 0]} color="#3b82f6" speed={1} distort={0.4} scale={1.5} />
        <FloatingSphere position={[-3, -1, -2]} color="#a855f7" speed={0.8} distort={0.3} scale={1.2} />
        <FloatingSphere position={[0, -2, -3]} color="#06b6d4" speed={1.2} distort={0.5} scale={0.8} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
