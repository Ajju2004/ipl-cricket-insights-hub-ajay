
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';
import { teams } from "@/data/iplData";

interface Team3DProps {
  team: any;
  position: [number, number, number];
  rank: number;
}

const Team3DModel = ({ team, position, rank }: Team3DProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
    if (sphereRef.current) {
      sphereRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + rank) * 0.1;
    }
  });

  const getPositionColor = (position: number) => {
    if (position === 1) return "#FFD700"; // Gold
    if (position <= 4) return "#00D4AA"; // Green for qualified
    if (position <= 6) return "#4ECDC4"; // Blue for middle
    return "#FF6B6B"; // Red for bottom
  };

  const height = Math.max(0.5, team.points / 10);

  return (
    <group ref={groupRef} position={position}>
      {/* Main team tower */}
      <Box args={[1, height, 1]}>
        <meshStandardMaterial 
          color={getPositionColor(rank)} 
          metalness={0.3} 
          roughness={0.4}
          emissive={getPositionColor(rank)}
          emissiveIntensity={0.1}
        />
      </Box>
      
      {/* Floating team indicator */}
      <Sphere ref={sphereRef} position={[0, height + 0.5, 0]} args={[0.2]}>
        <meshStandardMaterial 
          color={team.color} 
          emissive={team.color} 
          emissiveIntensity={0.3} 
        />
      </Sphere>
      
      {/* Team name */}
      <Text
        position={[0, height + 1, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {team.shortName}
      </Text>
      
      {/* Points display */}
      <Text
        position={[0, height / 2, 0.6]}
        fontSize={0.4}
        color="#FFD700"
        anchorX="center"
        anchorY="middle"
      >
        {team.points}
      </Text>
      
      {/* Rank indicator */}
      <Text
        position={[0, -0.3, 0]}
        fontSize={0.2}
        color={getPositionColor(rank)}
        anchorX="center"
        anchorY="middle"
      >
        #{rank}
      </Text>
    </group>
  );
};

const PointsTable3D = () => {
  const sortedTeams = [...teams].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    return b.nrr - a.nrr;
  });

  return (
    <div className="h-[600px] w-full bg-black/95 rounded-lg overflow-hidden">
      <Canvas 
        camera={{ position: [8, 8, 8], fov: 60 }}
        gl={{ 
          antialias: false,
          alpha: false,
          preserveDrawingBuffer: false,
          powerPreference: 'default'
        }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 10, 5]} intensity={0.8} color="#4A90E2" />
          <pointLight position={[-5, 5, -5]} intensity={0.5} color="#9B59B6" />

          {/* Team Models arranged in a grid */}
          {sortedTeams.map((team, index) => {
            const x = (index % 5) * 2.5 - 5;
            const z = Math.floor(index / 5) * 2.5 - 2.5;
            return (
              <Team3DModel 
                key={team.id}
                team={team}
                position={[x, 0, z]}
                rank={index + 1}
              />
            );
          })}

          {/* Title */}
          <Text
            position={[0, 5, 0]}
            fontSize={0.8}
            color="#4A90E2"
            anchorX="center"
            anchorY="middle"
          >
            IPL 2025 - 3D Points Table
          </Text>

          {/* Legend */}
          <Text
            position={[-6, 3, 0]}
            fontSize={0.3}
            color="#FFD700"
            anchorX="left"
            anchorY="middle"
          >
            🏆 Champions
          </Text>

          <Text
            position={[-6, 2.5, 0]}
            fontSize={0.3}
            color="#00D4AA"
            anchorX="left"
            anchorY="middle"
          >
            ✅ Qualified
          </Text>

          <Text
            position={[-6, 2, 0]}
            fontSize={0.3}
            color="#4ECDC4"
            anchorX="left"
            anchorY="middle"
          >
            ⚡ Contenders
          </Text>

          <Text
            position={[-6, 1.5, 0]}
            fontSize={0.3}
            color="#FF6B6B"
            anchorX="left"
            anchorY="middle"
          >
            ❌ Eliminated
          </Text>

          {/* Controls */}
          <OrbitControls 
            enableZoom={true} 
            enablePan={true} 
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={1}
            maxDistance={15}
            minDistance={5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PointsTable3D;
