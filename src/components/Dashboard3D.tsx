
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Cylinder, Cone, Torus } from '@react-three/drei';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BarChart3, PieChart, Activity, Database, Zap, Users, Globe } from "lucide-react";
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Dashboard3D = () => {
  // Enhanced Power BI specifications with comprehensive metrics
  const kpiMetrics = [
    { label: "Total Revenue", value: "₹5,230Cr", change: "+12.5%", color: "#00D4AA", trend: "up" },
    { label: "Match Attendance", value: "2.8M", change: "+8.2%", color: "#FF6B6B", trend: "up" },
    { label: "Viewership", value: "462M", change: "+15.3%", color: "#4ECDC4", trend: "up" },
    { label: "Engagement Rate", value: "94.2%", change: "+5.7%", color: "#45B7D1", trend: "up" },
    { label: "Sponsorship Value", value: "₹890Cr", change: "+18.4%", color: "#9B59B6", trend: "up" },
    { label: "Digital Reach", value: "1.2B", change: "+22.1%", color: "#FFD700", trend: "up" }
  ];

  const powerBISpecs = {
    "Data Refresh Rate": "Real-time (15 sec)",
    "Active Visualizations": "24 Charts",
    "Data Connections": "12 Sources",
    "Report Pages": "18 Pages",
    "Concurrent Users": "5,000+",
    "Data Volume": "1.2TB",
    "Query Performance": "< 2 seconds",
    "Refresh Frequency": "Every 5 minutes",
    "DAX Calculations": "150+ formulas",
    "Power Query Steps": "300+ transformations",
    "Row Level Security": "Enabled",
    "Mobile Optimization": "100% Compatible"
  };

  const technicalSpecs = {
    "Premium Capacity": "P2 (5GB RAM)",
    "Storage Limit": "100GB",
    "API Calls/Hour": "50,000",
    "Embedding Tokens": "Unlimited",
    "Dataflows": "25 Active",
    "Datasets": "500 Published"
  };

  const performanceMetrics = {
    "Uptime": "99.9%",
    "Load Time": "1.8s avg",
    "Response Time": "< 500ms",
    "Error Rate": "0.01%",
    "Cache Hit Ratio": "95%",
    "Memory Usage": "78%"
  };

  // Animated 3D Chart Component with rotation
  const AnimatedChart3D = ({ position, color, height, shape = "box" }: { 
    position: [number, number, number], 
    color: string, 
    height: number,
    shape?: "box" | "cylinder" | "cone" | "sphere"
  }) => {
    const meshRef = useRef<any>();
    
    useFrame((state) => {
      if (meshRef.current) {
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      }
    });

    const renderShape = () => {
      switch (shape) {
        case "cylinder":
          return <Cylinder ref={meshRef} position={position} args={[0.3, 0.3, height]} />;
        case "cone":
          return <Cone ref={meshRef} position={position} args={[0.3, height]} />;
        case "sphere":
          return <Sphere ref={meshRef} position={position} args={[0.4]} scale={height / 2} />;
        default:
          return <Box ref={meshRef} position={position} args={[0.5, height, 0.5]} />;
      }
    };

    return (
      <group>
        {renderShape()}
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.1}
          metalness={0.3}
          roughness={0.4}
        />
      </group>
    );
  };

  // 3D KPI Sphere with pulsing animation
  const AnimatedKPISphere = ({ position, color, scale }: { 
    position: [number, number, number], 
    color: string, 
    scale: number 
  }) => {
    const sphereRef = useRef<any>();
    
    useFrame((state) => {
      if (sphereRef.current) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
        sphereRef.current.scale.setScalar(scale * pulse);
      }
    });

    return (
      <Sphere ref={sphereRef} position={position} args={[0.3]}>
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </Sphere>
    );
  };

  // 3D Torus for data flow visualization
  const DataFlowTorus = ({ position, color }: { position: [number, number, number], color: string }) => {
    const torusRef = useRef<any>();
    
    useFrame((state) => {
      if (torusRef.current) {
        torusRef.current.rotation.y = state.clock.elapsedTime * 0.5;
        torusRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      }
    });

    return (
      <Torus ref={torusRef} position={position} args={[0.8, 0.2, 16, 50]}>
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.2}
          wireframe={true}
        />
      </Torus>
    );
  };

  // Enhanced fallback component
  const CanvasFallback = () => (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-900 to-black rounded-lg">
      <div className="text-center text-white">
        <div className="relative">
          <BarChart3 size={64} className="mx-auto mb-4 text-blue-400 animate-pulse" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
        </div>
        <p className="text-xl font-bold mb-2">3D Analytics Engine</p>
        <p className="text-sm text-gray-400 mb-4">Initializing Power BI visualization layer...</p>
        <div className="w-32 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{ width: '70%' }}></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Enhanced Power BI Header */}
      <Card className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white border-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
        <CardHeader className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-4xl font-bold flex items-center gap-4 mb-3">
                <Activity className="text-blue-300 animate-pulse" size={40} />
                IPL 2025 - Power BI Enterprise Dashboard
              </CardTitle>
              <p className="text-blue-200 text-lg">Advanced Analytics • Real-time Data Processing • 3D Visualization Engine</p>
              <div className="flex items-center gap-4 mt-3">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">PREMIUM CAPACITY</Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">P2 TIER</Badge>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">AI POWERED</Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                <Badge className="bg-green-500 text-white text-lg px-4 py-2">LIVE</Badge>
              </div>
              <p className="text-sm text-blue-200">Last Refresh: {new Date().toLocaleTimeString()}</p>
              <p className="text-xs text-blue-300 mt-1">Next Refresh: 15 seconds</p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Main 3D Dashboard Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* 3D Visualization Canvas - Larger */}
        <Card className="xl:col-span-2 bg-black/95 border-gray-700 h-[600px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
          <CardHeader className="relative z-10">
            <CardTitle className="text-white flex items-center gap-3 text-xl">
              <BarChart3 className="text-blue-400" size={28} />
              3D Performance Analytics Engine
              <Badge className="bg-blue-600 text-white ml-auto">INTERACTIVE</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[500px] p-4 relative z-10">
            <Suspense fallback={<CanvasFallback />}>
              <Canvas 
                camera={{ position: [8, 6, 8], fov: 50 }}
                onCreated={({ gl }) => {
                  gl.setClearColor('#000000');
                  gl.setPixelRatio(window.devicePixelRatio);
                }}
              >
                {/* Enhanced Lighting Setup */}
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={1.2} color="#4FC3F7" />
                <pointLight position={[-10, -10, -5]} intensity={0.8} color="#AB47BC" />
                <directionalLight position={[0, 10, 5]} intensity={1} color="#ffffff" />

                {/* 3D Performance Charts */}
                <AnimatedChart3D position={[-3, 0, 0]} color="#00D4AA" height={2.5} shape="cylinder" />
                <AnimatedChart3D position={[-1.5, 0, 0]} color="#FF6B6B" height={2} shape="box" />
                <AnimatedChart3D position={[0, 0, 0]} color="#4ECDC4" height={3} shape="cone" />
                <AnimatedChart3D position={[1.5, 0, 0]} color="#45B7D1" height={2.2} shape="cylinder" />
                <AnimatedChart3D position={[3, 0, 0]} color="#9B59B6" height={2.8} shape="box" />

                {/* Floating KPI Spheres */}
                <AnimatedKPISphere position={[-4, 3, 2]} color="#FFD700" scale={1.2} />
                <AnimatedKPISphere position={[4, 3, 2]} color="#FF69B4" scale={1.0} />
                <AnimatedKPISphere position={[0, 4, 3]} color="#00CED1" scale={1.5} />

                {/* Data Flow Visualization */}
                <DataFlowTorus position={[-2, 2, -1]} color="#00D4AA" />
                <DataFlowTorus position={[2, 2, -1]} color="#FF6B6B" />

                {/* 3D Text Labels */}
                <Text
                  position={[0, -2.5, 0]}
                  fontSize={0.4}
                  color="#ffffff"
                  anchorX="center"
                  anchorY="middle"
                  font="/fonts/inter-bold.woff"
                >
                  IPL 2025 ANALYTICS DASHBOARD
                </Text>

                <Text
                  position={[0, -3.2, 0]}
                  fontSize={0.2}
                  color="#64B5F6"
                  anchorX="center"
                  anchorY="middle"
                >
                  Power BI Premium • Real-time Processing
                </Text>

                {/* Interactive Controls */}
                <OrbitControls 
                  enableZoom={true} 
                  enablePan={true} 
                  enableRotate={true}
                  maxDistance={15}
                  minDistance={3}
                  maxPolarAngle={Math.PI / 1.5}
                />
              </Canvas>
            </Suspense>
          </CardContent>
        </Card>

        {/* Power BI Specifications Panel */}
        <Card className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white border-gray-700 h-[600px] overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <PieChart className="text-purple-400" size={28} />
              Power BI Enterprise Specs
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[500px] overflow-y-auto custom-scrollbar">
            <div className="space-y-6">
              {/* Main Specifications */}
              <div>
                <h4 className="font-semibold text-purple-300 mb-3 flex items-center gap-2">
                  <Database size={16} />
                  Core Specifications
                </h4>
                <div className="space-y-2">
                  {Object.entries(powerBISpecs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-2 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:bg-gray-700/50 transition-colors">
                      <span className="text-gray-300 text-sm">{key}</span>
                      <Badge variant="secondary" className="bg-blue-600/80 text-white text-xs">
                        {value}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div>
                <h4 className="font-semibold text-green-300 mb-3 flex items-center gap-2">
                  <Zap size={16} />
                  Technical Capacity
                </h4>
                <div className="space-y-2">
                  {Object.entries(technicalSpecs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-2 bg-gray-800/50 rounded-lg border border-gray-700/50">
                      <span className="text-gray-300 text-sm">{key}</span>
                      <Badge className="bg-green-600/80 text-white text-xs">
                        {value}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div>
                <h4 className="font-semibold text-orange-300 mb-3 flex items-center gap-2">
                  <TrendingUp size={16} />
                  Performance Metrics
                </h4>
                <div className="space-y-2">
                  {Object.entries(performanceMetrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-2 bg-gray-800/50 rounded-lg border border-gray-700/50">
                      <span className="text-gray-300 text-sm">{key}</span>
                      <Badge className="bg-orange-600/80 text-white text-xs">
                        {value}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kpiMetrics.map((kpi, index) => (
          <Card key={index} className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:transform hover:scale-105 transition-all duration-300 group">
            {/* Animated Background Effect */}
            <div 
              className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
              style={{
                background: `linear-gradient(135deg, ${kpi.color}30 0%, transparent 70%)`,
              }}
            />
            
            {/* Glowing Border Effect */}
            <div 
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: `inset 0 0 0 1px ${kpi.color}40`,
              }}
            />
            
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: `${kpi.color}20` }}
                >
                  <TrendingUp size={28} style={{ color: kpi.color }} />
                  <div 
                    className="absolute inset-0 animate-ping"
                    style={{ backgroundColor: `${kpi.color}10` }}
                  />
                </div>
                <div className="text-right">
                  <Badge 
                    className="text-white border-0 mb-1"
                    style={{ backgroundColor: kpi.color }}
                  >
                    {kpi.change}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: kpi.color }}></div>
                    <span className="text-xs text-gray-400">Live</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-400 text-sm font-medium mb-1">{kpi.label}</p>
                <p className="text-white text-3xl font-bold">{kpi.value}</p>
              </div>
              
              {/* 3D Progress Bar */}
              <div className="relative">
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 relative overflow-hidden"
                    style={{ 
                      backgroundColor: kpi.color,
                      width: `${70 + index * 5}%`,
                      boxShadow: `0 0 15px ${kpi.color}50`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Power BI Enterprise Footer */}
      <Card className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%234FC3F7" fill-opacity="0.03"%3E%3Cpath d="M50 50c0-27.614 22.386-50 50-50v50H50z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <CardContent className="p-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between text-gray-400 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-blue-400" />
                <span>Power BI Premium P2</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Database size={16} className="text-green-400" />
                <span>IPL Official Data API</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-purple-400" />
                <span>5,000+ Active Users</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400">Enterprise Connection Active</span>
              </div>
              <Badge className="bg-blue-600 text-white">v3.2.1</Badge>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-blue-400">99.9%</p>
                <p className="text-xs text-gray-500">Uptime SLA</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-400">< 2s</p>
                <p className="text-xs text-gray-500">Query Response</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">1.2TB</p>
                <p className="text-xs text-gray-500">Data Processed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-400">50K+</p>
                <p className="text-xs text-gray-500">API Calls/Hour</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard3D;
