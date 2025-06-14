
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';

interface ServerTowerProps {
  position: [number, number, number];
}

const ServerTower = ({ position }: ServerTowerProps) => {
  const meshRef = useRef<any>();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <Box args={[0.4, 1.5, 0.4]}>
        <meshStandardMaterial color="#2C3E50" metalness={0.8} roughness={0.2} />
      </Box>
      <Sphere position={[0, 0.8, 0]} args={[0.1]}>
        <meshStandardMaterial color="#E74C3C" emissive="#E74C3C" emissiveIntensity={0.3} />
      </Sphere>
      <Sphere position={[0, 0.6, 0]} args={[0.08]}>
        <meshStandardMaterial color="#F39C12" emissive="#F39C12" emissiveIntensity={0.3} />
      </Sphere>
      <Sphere position={[0, 0.4, 0]} args={[0.08]}>
        <meshStandardMaterial color="#27AE60" emissive="#27AE60" emissiveIntensity={0.3} />
      </Sphere>
    </group>
  );
};

export default ServerTower;
