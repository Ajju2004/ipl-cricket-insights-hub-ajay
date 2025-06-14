
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder } from '@react-three/drei';

interface DataCylinderProps {
  position: [number, number, number];
  color: string;
}

const DataCylinder = ({ position, color }: DataCylinderProps) => {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
    }
  });

  return (
    <Cylinder ref={meshRef} position={position} args={[0.3, 0.3, 1.2, 8]}>
      <meshStandardMaterial color={color} transparent opacity={0.8} />
    </Cylinder>
  );
};

export default DataCylinder;
