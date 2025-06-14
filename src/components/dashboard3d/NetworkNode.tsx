
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import * as THREE from 'three';

interface NetworkNodeProps {
  position: [number, number, number];
}

const NetworkNode = ({ position }: NetworkNodeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.02;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Torus 
      ref={meshRef} 
      position={position} 
      args={[0.4, 0.1, 8, 16]}
    >
      <meshStandardMaterial 
        color="#9B59B6" 
        emissive="#9B59B6" 
        emissiveIntensity={0.2} 
      />
    </Torus>
  );
};

export default NetworkNode;
