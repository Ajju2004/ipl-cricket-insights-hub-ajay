
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder } from '@react-three/drei';
import * as THREE from 'three';

interface DataCylinderProps {
  position: [number, number, number];
  color: string;
}

const DataCylinder = ({ position, color }: DataCylinderProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
      meshRef.current.scale.setY(scale);
    }
  });

  return (
    <Cylinder ref={meshRef} position={position} args={[0.3, 0.3, 1.2, 8]}>
      <meshStandardMaterial color={color} transparent opacity={0.8} />
    </Cylinder>
  );
};

export default DataCylinder;
