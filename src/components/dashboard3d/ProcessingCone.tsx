
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cone } from '@react-three/drei';

interface ProcessingConeProps {
  position: [number, number, number];
}

const ProcessingCone = ({ position }: ProcessingConeProps) => {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.03;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <Cone ref={meshRef} position={position} args={[0.3, 0.8, 6]}>
      <meshStandardMaterial color="#E67E22" metalness={0.5} roughness={0.3} />
    </Cone>
  );
};

export default ProcessingCone;
