import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AudioWave() {
  const gridSize = 120;
  const count = gridSize * gridSize;
  const separation = 0.5;
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    let i = 0;
    const colorA = new THREE.Color('#3b82f6'); // blue-500
    const colorB = new THREE.Color('#8b5cf6'); // violet-500
    
    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        pos[i * 3] = (x - gridSize / 2) * separation;
        pos[i * 3 + 1] = 0;
        pos[i * 3 + 2] = (z - gridSize / 2) * separation;
        
        const mixedColor = colorA.clone().lerp(colorB, x / gridSize);
        cols[i * 3] = mixedColor.r;
        cols[i * 3 + 1] = mixedColor.g;
        cols[i * 3 + 2] = mixedColor.b;
        i++;
      }
    }
    return [pos, cols];
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
          
          // More organic wave movement
          const dist = Math.sqrt(px * px + pz * pz);
          const y = Math.sin(dist * 0.3 - time * 1.5) * 1.5 + 
                    Math.sin(px * 0.1 + time) * 0.8 +
                    Math.cos(pz * 0.15 + time * 0.7) * 0.5;
          
          positions[i * 3 + 1] = y;
          i++;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      // Dynamic rotation based on mouse
      pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, state.pointer.x * 0.2, 0.05);
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, -0.5 + state.pointer.y * 0.1, 0.05);
    }
  });

  return (
    <points ref={pointsRef} rotation={[-0.5, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        vertexColors
        transparent 
        opacity={0.3} 
        sizeAttenuation 
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#020202]">
      <Canvas camera={{ position: [0, 10, 20], fov: 60 }}>
        <fog attach="fog" args={['#020202', 5, 35]} />
        <AudioWave />
      </Canvas>
    </div>
  );
}
