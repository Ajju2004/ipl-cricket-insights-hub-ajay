
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Sphere } from '@react-three/drei';
import { Suspense } from 'react';
import AnimatedChart3D from './AnimatedChart3D';
import ServerTower from './ServerTower';
import DataCylinder from './DataCylinder';
import NetworkNode from './NetworkNode';
import ProcessingCone from './ProcessingCone';

interface KPIMetric {
  label: string;
  value: string;
  change: string;
  color: string;
  height: number;
}

interface Dashboard3DSceneProps {
  kpiMetrics: KPIMetric[];
}

const Dashboard3DScene = ({ kpiMetrics }: Dashboard3DSceneProps) => {
  return (
    <Canvas camera={{ position: [6, 6, 6], fov: 60 }}>
      <Suspense fallback={null}>
        {/* Enhanced Lighting Setup */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[0, 8, 5]} intensity={1} color="#4A90E2" />
        <spotLight position={[-5, 5, 0]} intensity={0.8} color="#9B59B6" />

        {/* Performance Chart Bars */}
        {kpiMetrics.map((metric, index) => (
          <AnimatedChart3D 
            key={index}
            position={[-3 + index * 1.5, 0, 0]} 
            color={metric.color} 
            height={metric.height} 
          />
        ))}

        {/* Infrastructure Models */}
        <ServerTower position={[4, 0, -2]} />
        <DataCylinder position={[-4, 1, 2]} color="#3498DB" />
        <DataCylinder position={[-2, 1, 3]} color="#E74C3C" />
        <NetworkNode position={[2, 2, 2]} />
        <ProcessingCone position={[0, 2, -3]} />

        {/* Data Flow Spheres */}
        <Sphere position={[-5, 3, 0]} args={[0.2]} scale={1.5}>
          <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.4} />
        </Sphere>
        <Sphere position={[5, 3, 0]} args={[0.2]} scale={1.2}>
          <meshStandardMaterial color="#FF69B4" emissive="#FF69B4" emissiveIntensity={0.3} />
        </Sphere>
        <Sphere position={[0, 4, 2]} args={[0.25]} scale={1.8}>
          <meshStandardMaterial color="#00CED1" emissive="#00CED1" emissiveIntensity={0.5} />
        </Sphere>

        {/* Enhanced 3D Labels */}
        <Text
          position={[0, -2.5, 0]}
          fontSize={0.4}
          color="#4A90E2"
          anchorX="center"
          anchorY="middle"
        >
          IPL 2025 - Enterprise Analytics
        </Text>

        <Text
          position={[-3, -1.5, 0]}
          fontSize={0.15}
          color="#00D4AA"
          anchorX="center"
          anchorY="middle"
        >
          Revenue
        </Text>

        <Text
          position={[-1.5, -1.5, 0]}
          fontSize={0.15}
          color="#FF6B6B"
          anchorX="center"
          anchorY="middle"
        >
          Attendance
        </Text>

        <Text
          position={[0, -1.5, 0]}
          fontSize={0.15}
          color="#4ECDC4"
          anchorX="center"
          anchorY="middle"
        >
          Viewership
        </Text>

        <Text
          position={[1.5, -1.5, 0]}
          fontSize={0.15}
          color="#45B7D1"
          anchorX="center"
          anchorY="middle"
        >
          Engagement
        </Text>

        {/* Interactive Controls */}
        <OrbitControls 
          enableZoom={true} 
          enablePan={true} 
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  );
};

export default Dashboard3DScene;
