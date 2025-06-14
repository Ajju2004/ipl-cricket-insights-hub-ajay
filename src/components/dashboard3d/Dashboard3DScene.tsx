
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Sphere } from '@react-three/drei';
import { Suspense } from 'react';
import AnimatedChart3D from './AnimatedChart3D';
import ServerTower from './ServerTower';
import DataCylinder from './DataCylinder';

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
    <Canvas 
      camera={{ position: [6, 6, 6], fov: 60 }}
      gl={{ 
        antialias: false,
        alpha: false,
        preserveDrawingBuffer: false,
        powerPreference: 'default'
      }}
      dpr={Math.min(window.devicePixelRatio, 2)}
    >
      <Suspense fallback={null}>
        {/* Simplified Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 8, 5]} intensity={0.8} color="#4A90E2" />

        {/* Performance Chart Bars - Limited to prevent GPU overload */}
        {kpiMetrics && kpiMetrics.length > 0 && kpiMetrics.slice(0, 4).map((metric, index) => (
          <AnimatedChart3D 
            key={`chart-${index}`}
            position={[-3 + index * 1.5, 0, 0]} 
            color={metric.color} 
            height={metric.height} 
          />
        ))}

        {/* Simplified Infrastructure Models */}
        <ServerTower position={[4, 0, -2]} />
        <DataCylinder position={[-4, 1, 2]} color="#3498DB" />

        {/* Single Data Flow Sphere */}
        <Sphere position={[0, 4, 2]} args={[0.25]}>
          <meshStandardMaterial color="#00CED1" emissive="#00CED1" emissiveIntensity={0.3} />
        </Sphere>

        {/* Essential 3D Labels only */}
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

        {/* Simplified Controls */}
        <OrbitControls 
          enableZoom={true} 
          enablePan={false} 
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.3}
          maxDistance={10}
          minDistance={3}
        />
      </Suspense>
    </Canvas>
  );
};

export default Dashboard3DScene;
