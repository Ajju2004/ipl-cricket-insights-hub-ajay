
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Cylinder, Cone, Torus } from '@react-three/drei';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BarChart3, PieChart, Activity, Database, Cpu, HardDrive, Wifi } from "lucide-react";
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Dashboard3D = () => {
  // Power BI Enterprise specifications with 3D model data
  const kpiMetrics = [
    { label: "Total Revenue", value: "₹5,230Cr", change: "+12.5%", color: "#00D4AA", height: 2.5 },
    { label: "Match Attendance", value: "2.8M", change: "+8.2%", color: "#FF6B6B", height: 2.0 },
    { label: "Viewership", value: "462M", change: "+15.3%", color: "#4ECDC4", height: 3.0 },
    { label: "Engagement Rate", value: "94.2%", change: "+5.7%", color: "#45B7D1", height: 2.2 }
  ];

  const powerBISpecs = {
    dataRefreshRate: "Real-time",
    visualizations: 12,
    dataConnections: 8,
    reportPages: 15,
    activeUsers: "2.5K+",
    dataVolume: "850GB",
    processingPower: "High",
    cloudIntegration: "Azure",
    securityLevel: "Enterprise",
    apiCalls: "5M/day"
  };

  // Enhanced 3D Components with animations
  const AnimatedChart3D = ({ position, color, height }: { position: [number, number, number], color: string, height: number }) => {
    const meshRef = useRef<any>();
    
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

  const ServerTower = ({ position }: { position: [number, number, number] }) => {
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

  const DataCylinder = ({ position, color }: { position: [number, number, number], color: string }) => {
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

  const NetworkNode = ({ position }: { position: [number, number, number] }) => {
    const meshRef = useRef<any>();
    
    useFrame((state) => {
      if (meshRef.current) {
        meshRef.current.rotation.z += 0.02;
        const scale = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.1;
        meshRef.current.scale.set(scale, scale, scale);
      }
    });

    return (
      <Torus ref={meshRef} position={position} args={[0.4, 0.1, 8, 16]}>
        <meshStandardMaterial color="#9B59B6" emissive="#9B59B6" emissiveIntensity={0.2} />
      </Torus>
    );
  };

  const ProcessingCone = ({ position }: { position: [number, number, number] }) => {
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

  return (
    <div className="space-y-8">
      {/* Enhanced Power BI Style Header */}
      <Card className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white border-0 shadow-2xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-4xl font-black flex items-center gap-4">
                <Activity className="text-blue-300" size={40} />
                IPL 2025 - Enterprise Analytics Platform
              </CardTitle>
              <p className="text-blue-200 mt-3 text-lg">Power BI Premium Workspace • Azure Cloud Infrastructure • Real-time Processing</p>
              <div className="flex items-center gap-4 mt-4">
                <Badge className="bg-green-500 text-white text-sm px-3 py-1">ENTERPRISE</Badge>
                <Badge className="bg-blue-500 text-white text-sm px-3 py-1">REAL-TIME</Badge>
                <Badge className="bg-purple-500 text-white text-sm px-3 py-1">AI-POWERED</Badge>
              </div>
            </div>
            <div className="text-right">
              <Badge className="bg-green-500 text-white mb-3 text-lg px-4 py-2">LIVE DASHBOARD</Badge>
              <p className="text-sm text-blue-200">Last Refresh: {new Date().toLocaleTimeString()}</p>
              <p className="text-xs text-blue-300 mt-1">Data Latency: <span className="text-green-300">~2ms</span></p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Enhanced 3D Visualization Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Primary 3D Analytics Canvas */}
        <Card className="bg-black/95 border-gray-700 h-[500px] shadow-2xl">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3">
              <BarChart3 className="text-blue-400" size={28} />
              3D Performance & Infrastructure Analytics
            </CardTitle>
            <p className="text-gray-400">Interactive visualization of tournament metrics and system performance</p>
          </CardHeader>
          <CardContent className="h-full p-0">
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
          </CardContent>
        </Card>

        {/* Enhanced Power BI System Architecture */}
        <Card className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white border-gray-700 shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <PieChart className="text-purple-400" size={28} />
              Enterprise System Architecture
            </CardTitle>
            <p className="text-gray-400">Real-time infrastructure monitoring and specifications</p>
          </CardHeader>
          <CardContent>
            {/* System Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.entries(powerBISpecs).map(([key, value], index) => (
                <div key={key} className="p-4 bg-gradient-to-r from-gray-800/60 to-slate-800/60 rounded-xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    {index % 4 === 0 && <Database className="text-blue-400" size={18} />}
                    {index % 4 === 1 && <Cpu className="text-green-400" size={18} />}
                    {index % 4 === 2 && <HardDrive className="text-purple-400" size={18} />}
                    {index % 4 === 3 && <Wifi className="text-orange-400" size={18} />}
                    <span className="text-gray-300 text-sm font-medium capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </span>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`
                      text-white border-0 font-semibold
                      ${index % 4 === 0 ? 'bg-blue-600' : ''}
                      ${index % 4 === 1 ? 'bg-green-600' : ''}
                      ${index % 4 === 2 ? 'bg-purple-600' : ''}
                      ${index % 4 === 3 ? 'bg-orange-600' : ''}
                    `}
                  >
                    {value}
                  </Badge>
                </div>
              ))}
            </div>
            
            {/* Enterprise Features */}
            <div className="p-6 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 rounded-xl border border-blue-500/30">
              <h4 className="font-bold text-blue-300 mb-4 text-lg flex items-center gap-2">
                <Activity size={20} />
                Advanced Enterprise Capabilities
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Real-time streaming (15-second intervals)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  AI/ML predictive modeling
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  Multi-cloud deployment (Azure + AWS)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  Enterprise SSO integration
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  Advanced DAX calculations
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                  Automated alert system
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  Row-level security (RLS)
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                  API-first architecture
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced KPI Cards with 3D Visual Elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiMetrics.map((kpi, index) => (
          <Card key={index} className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 border-gray-700 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-500">
            {/* Enhanced 3D Background Effect */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${kpi.color}30 0%, transparent 70%)`,
              }}
            />
            
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                  style={{ 
                    backgroundColor: `${kpi.color}25`,
                    boxShadow: `0 0 20px ${kpi.color}40`
                  }}
                >
                  <TrendingUp size={28} style={{ color: kpi.color }} />
                </div>
                <Badge 
                  className="text-white border-0 font-bold text-sm px-3 py-1 shadow-lg"
                  style={{ 
                    backgroundColor: kpi.color,
                    boxShadow: `0 0 10px ${kpi.color}60`
                  }}
                >
                  {kpi.change}
                </Badge>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm font-semibold">{kpi.label}</p>
                <p className="text-white text-3xl font-black mt-2">{kpi.value}</p>
              </div>
              
              {/* Enhanced 3D Progress Bar */}
              <div className="mt-6 h-3 bg-gray-700 rounded-full overflow-hidden relative">
                <div 
                  className="h-full rounded-full transition-all duration-2000 relative"
                  style={{ 
                    backgroundColor: kpi.color,
                    width: `${65 + index * 8}%`,
                    boxShadow: `0 0 15px ${kpi.color}70`
                  }}
                >
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"
                  />
                </div>
              </div>
              
              {/* Performance Indicator */}
              <div className="mt-3 flex items-center gap-2">
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: kpi.color }}
                ></div>
                <span className="text-xs text-gray-400 font-medium">Performance Target: {95 + index}%</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enhanced Power BI Enterprise Footer */}
      <Card className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-gray-700 shadow-2xl">
        <CardContent className="p-8">
          <div className="flex flex-wrap items-center justify-between text-gray-400 text-sm">
            <div className="flex items-center gap-6 mb-4 lg:mb-0">
              <span className="flex items-center gap-2">
                <Database size={16} />
                Dashboard Version: v3.2.1 Enterprise
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Cpu size={16} />
                Azure Premium Workspace
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <HardDrive size={16} />
                Data Source: IPL Official API + Azure SQL
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                <span className="font-semibold text-green-400">Enterprise Connection Active</span>
              </div>
              <span>•</span>
              <span className="text-blue-400 font-medium">SLA: 99.9% Uptime</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard3D;
