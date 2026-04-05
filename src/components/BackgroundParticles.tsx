import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Starfield() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate a vast field of stars for a galaxy feel
  const count = 8000;
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const colorPalette = [
      new THREE.Color('#ffffff'), // White
      new THREE.Color('#93c5fd'), // Light blue
      new THREE.Color('#c4b5fd'), // Light purple
      new THREE.Color('#fdf4ff'), // Star white
    ];

    for (let i = 0; i < count; i++) {
      // Vast box of stars
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    
    const time = state.clock.getElapsedTime();

    // Very slow, majestic rotation (seamless space feel)
    const targetY = time * 0.02 + (state.pointer.x * Math.PI) / 20;
    const targetX = time * 0.01 + (state.pointer.y * Math.PI) / 20;

    // Smoothly interpolate rotation
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetY, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, targetX, 0.05);
    
    // Subtle scroll parallax (moves the field slightly up as you scroll down)
    const scrollY = window.scrollY * 0.01;
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, scrollY, 0.05);
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function ShootingStar({ color = "#ffffff" }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  const [config] = useState(() => {
    const angle = -Math.PI / 4 + (Math.random() * 0.2 - 0.1); 
    return {
      x: (Math.random() - 0.5) * 100,
      y: Math.random() * 50 + 20,
      z: (Math.random() - 0.5) * 50 - 20,
      speed: Math.random() * 0.4 + 0.2,
      delay: Math.random() * 40,
      length: Math.random() * 8 + 4,
      angle: angle,
      color: new THREE.Color(color)
    };
  });

  const uniforms = useMemo(() => ({
    color: { value: config.color },
    opacity: { value: 0.0 }
  }), [config.color]);

  useFrame((state) => {
    if (!meshRef.current || !materialRef.current) return;
    const time = state.clock.getElapsedTime();
    
    const localTime = (time - config.delay) * config.speed;
    
    if (localTime < 0) {
      meshRef.current.visible = false;
      return;
    }
    
    const cycle = localTime % 8;
    
    if (cycle < 1) {
      meshRef.current.visible = true;
      meshRef.current.position.x = config.x + cycle * 150 * Math.cos(config.angle);
      meshRef.current.position.y = config.y + cycle * 150 * Math.sin(config.angle);
      meshRef.current.position.z = config.z;
      
      const opacity = cycle < 0.1 ? cycle / 0.1 : cycle > 0.8 ? (1 - cycle) / 0.2 : 1;
      materialRef.current.uniforms.opacity.value = opacity * 0.8;
    } else {
      meshRef.current.visible = false;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0, 0, config.angle]}>
      <planeGeometry args={[config.length, 0.15]} />
      <shaderMaterial 
        ref={materialRef}
        transparent 
        blending={THREE.AdditiveBlending} 
        depthWrite={false}
        uniforms={uniforms}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 color;
          uniform float opacity;
          varying vec2 vUv;
          void main() {
            float tail = smoothstep(0.0, 1.0, vUv.x);
            float edge = smoothstep(0.0, 0.5, vUv.y) * smoothstep(1.0, 0.5, vUv.y);
            gl_FragColor = vec4(color, tail * edge * opacity);
          }
        `}
      />
    </mesh>
  );
}

function ShootingStars() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <ShootingStar key={i} color={i % 3 === 0 ? "#93c5fd" : "#ffffff"} />
      ))}
    </>
  );
}

export default function BackgroundParticles() {
  return (
    <div className="fixed inset-0 z-30 pointer-events-none mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <Starfield />
        <ShootingStars />
      </Canvas>
    </div>
  );
}
