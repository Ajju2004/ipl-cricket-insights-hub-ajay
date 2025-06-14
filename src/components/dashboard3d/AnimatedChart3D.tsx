
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedChart3DProps {
  position: [number, number, number];
  color: string;
  height: number;
}

const AnimatedChart3D = ({ position, color, height }: AnimatedChart3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <Box ref={meshRef} position={position} args={[0.6, height, 0.6]}>
      <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
    </Box>
  );
};

export default AnimatedChart3D;
