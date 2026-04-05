import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function WaveTerrain() {
  const ref = useRef<THREE.Points>(null);
  
  const count = 100; // 100x100 grid = 10,000 points
  const separation = 1.5;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * count * 3);
    let i = 0;
    for (let ix = 0; ix < count; ix++) {
      for (let iz = 0; iz < count; iz++) {
        pos[i] = (ix - count / 2) * separation; // x
        pos[i + 1] = 0; // y (will be animated)
        pos[i + 2] = (iz - count / 2) * separation; // z
        i += 3;
      }
    }
    return pos;
  }, [count, separation]);

  useFrame((state) => {
    if (!ref.current) return;
    
    const time = state.clock.getElapsedTime();
    const posArray = ref.current.geometry.attributes.position.array as Float32Array;
    
    let i = 0;
    for (let ix = 0; ix < count; ix++) {
      for (let iz = 0; iz < count; iz++) {
        const x = (ix - count / 2) * separation;
        const z = (iz - count / 2) * separation;
        
        // Complex wave math for a premium, fluid look
        const y = Math.sin((x + time * 2) * 0.15) * 2 + 
                  Math.sin((z + time * 1.5) * 0.15) * 2 + 
                  Math.sin((x * z + time) * 0.05) * 0.5;
                  
        posArray[i + 1] = y;
        i += 3;
      }
    }
    
    ref.current.geometry.attributes.position.needsUpdate = true;

    // Subtle interactive tilt based on mouse
    const targetRotX = (state.pointer.y * Math.PI) / 20;
    const targetRotY = (state.pointer.x * Math.PI) / 20;
    
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, targetRotX, 0.05);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetRotY, 0.05);
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function FooterWaveParticles() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
      {/* Gradient mask to fade out the edges and top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black z-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>
      
      <Canvas camera={{ position: [0, 12, 35], fov: 60 }}>
        <WaveTerrain />
      </Canvas>
    </div>
  );
}
