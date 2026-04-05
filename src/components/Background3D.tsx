import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AudioWave() {
  const gridSize = 100;
  const count = gridSize * gridSize;
  const separation = 0.6;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    let i = 0;
    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        pos[i++] = (x - gridSize / 2) * separation; // x
        pos[i++] = 0; // y
        pos[i++] = (z - gridSize / 2) * separation; // z
      }
    }
    return pos;
  }, [count, separation]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      let i = 0;
      for (let x = 0; x < gridSize; x++) {
        for (let z = 0; z < gridSize; z++) {
          const px = (x - gridSize / 2) * separation;
          const pz = (z - gridSize / 2) * separation;
          
          // Complex wave math for an "audio frequency" look
          const y = Math.sin(px * 0.2 + time * 1.2) * Math.cos(pz * 0.2 + time * 0.8) * 2.0 +
                    Math.sin(px * 0.1 - time * 0.5) * 1.5;
          
          positions[i * 3 + 1] = y;
          i++;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      // Slow rotation
      pointsRef.current.rotation.y = time * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.06} 
        color="#ffffff" 
        transparent 
        opacity={0.4} 
        sizeAttenuation 
      />
    </points>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black">
      <Canvas camera={{ position: [0, 6, 25], fov: 60 }}>
        <fog attach="fog" args={['#000000', 10, 40]} />
        <AudioWave />
      </Canvas>
    </div>
  );
}
