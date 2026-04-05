import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Line, Float } from "@react-three/drei";
import * as THREE from "three";

function NeuralNode({ color = "#3b82f6" }: { color?: string }) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  const count = 150;
  const [positions, connections] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.5 + Math.random() * 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }

    const conn: [number, number, number][] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 0.8) {
          conn.push([i, j, dist]);
        }
      }
    }
    return [pos, conn];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current) return;
    const time = state.clock.getElapsedTime();

    // Slow rotation
    pointsRef.current.rotation.y = time * 0.1;
    pointsRef.current.rotation.x = time * 0.05;
    linesRef.current.rotation.y = time * 0.1;
    linesRef.current.rotation.x = time * 0.05;

    // Mouse interaction
    const targetX = (mouse.x * viewport.width) / 8;
    const targetY = (mouse.y * viewport.height) / 8;
    
    pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, targetX, 0.1);
    pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, targetY, 0.1);
    linesRef.current.position.x = THREE.MathUtils.lerp(linesRef.current.position.x, targetX, 0.1);
    linesRef.current.position.y = THREE.MathUtils.lerp(linesRef.current.position.y, targetY, 0.1);
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3}>
        <PointMaterial
          transparent
          color={color}
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <group ref={linesRef}>
        {connections.slice(0, 100).map(([i, j, dist], idx) => (
          <Line
            key={idx}
            points={[
              [positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]],
              [positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]]
            ]}
            color={color}
            lineWidth={0.5}
            transparent
            opacity={1 - dist / 0.8}
            blending={THREE.AdditiveBlending}
          />
        ))}
      </group>
      {/* Core Glow */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  );
}

export default function Floating3DModel({ 
  color = "#3b82f6", 
  className = "" 
}: { 
  type?: string, // Kept for compatibility but ignored
  color?: string, 
  className?: string 
}) {
  return (
    <div className={`w-full h-full min-h-[300px] ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <NeuralNode color={color} />
      </Canvas>
    </div>
  );
}
