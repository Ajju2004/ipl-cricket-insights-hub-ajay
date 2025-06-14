
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere } from '@react-three/drei';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BarChart3, PieChart, Activity } from "lucide-react";
import { Suspense } from 'react';

const Dashboard3D = () => {
  // Power BI style data specifications
  const kpiMetrics = [
    { label: "Total Revenue", value: "₹5,230Cr", change: "+12.5%", color: "#00D4AA" },
    { label: "Match Attendance", value: "2.8M", change: "+8.2%", color: "#FF6B6B" },
    { label: "Viewership", value: "462M", change: "+15.3%", color: "#4ECDC4" },
    { label: "Engagement Rate", value: "94.2%", change: "+5.7%", color: "#45B7D1" }
  ];

  const powerBISpecs = {
    dataRefreshRate: "Real-time",
    visualizations: 12,
    dataConnections: 8,
    reportPages: 15,
    activeUsers: "2.5K+",
    dataVolume: "850GB"
  };

  // 3D Chart Component with proper prop handling
  const Chart3D = ({ position, color, height }: { position: [number, number, number], color: string, height: number }) => (
    <Box position={position} args={[0.5, height, 0.5]}>
      <meshStandardMaterial color={color} />
    </Box>
  );

  // 3D KPI Sphere with proper prop handling
  const KPISphere = ({ position, color, scale }: { position: [number, number, number], color: string, scale: number }) => (
    <Sphere position={position} args={[0.3]} scale={[scale, scale, scale]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
    </Sphere>
  );

  return (
    <div className="space-y-8">
      {/* Power BI Style Header */}
      <Card className="bg-gradient-to-r from-blue-900 to-purple-900 text-white border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-bold flex items-center gap-3">
                <Activity className="text-blue-300" size={32} />
                IPL 2025 - Advanced Analytics Dashboard
              </CardTitle>
              <p className="text-blue-200 mt-2">Power BI Enterprise Specifications • Real-time Data Processing</p>
            </div>
            <div className="text-right">
              <Badge className="bg-green-500 text-white mb-2">LIVE</Badge>
              <p className="text-sm text-blue-200">Last Updated: {new Date().toLocaleTimeString()}</p>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* 3D Interactive Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 3D Visualization Canvas */}
        <Card className="bg-black/90 border-gray-700 h-96">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="text-blue-400" size={24} />
              3D Performance Analytics
            </CardTitle>
          </CardHeader>
          <CardContent className="h-full p-0">
            <Canvas camera={{ position: [5, 5, 5], fov: 60 }}>
              <Suspense fallback={null}>
                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <directionalLight position={[0, 5, 5]} intensity={0.8} />

                {/* 3D Charts */}
                <Chart3D position={[-2, 0, 0]} color="#00D4AA" height={2} />
                <Chart3D position={[-1, 0, 0]} color="#FF6B6B" height={1.5} />
                <Chart3D position={[0, 0, 0]} color="#4ECDC4" height={2.5} />
                <Chart3D position={[1, 0, 0]} color="#45B7D1" height={1.8} />
                <Chart3D position={[2, 0, 0]} color="#9B59B6" height={2.2} />

                {/* 3D KPI Spheres */}
                <KPISphere position={[-3, 2, 1]} color="#FFD700" scale={1.2} />
                <KPISphere position={[3, 2, 1]} color="#FF69B4" scale={1.0} />
                <KPISphere position={[0, 3, 2]} color="#00CED1" scale={1.5} />

                {/* 3D Text Labels */}
                <Text
                  position={[0, -2, 0]}
                  fontSize={0.3}
                  color="white"
                  anchorX="center"
                  anchorY="middle"
                >
                  IPL 2025 Performance Metrics
                </Text>

                {/* Interactive Controls */}
                <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
              </Suspense>
            </Canvas>
          </CardContent>
        </Card>

        {/* Power BI Specifications Panel */}
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="text-purple-400" size={24} />
              Power BI Dashboard Specifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(powerBISpecs).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                  <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    {value}
                  </Badge>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30">
              <h4 className="font-semibold text-blue-300 mb-2">Advanced Features</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Real-time data refresh every 15 seconds</li>
                <li>• AI-powered predictive analytics</li>
                <li>• Cross-platform compatibility</li>
                <li>• Enterprise-grade security</li>
                <li>• Custom DAX calculations</li>
                <li>• Automated alerting system</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced KPI Cards with 3D Effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiMetrics.map((kpi, index) => (
          <Card key={index} className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:transform hover:scale-105 transition-all duration-300">
            {/* 3D Background Effect */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                background: `linear-gradient(135deg, ${kpi.color}20 0%, transparent 50%)`,
              }}
            />
            
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${kpi.color}20` }}>
                  <TrendingUp size={24} style={{ color: kpi.color }} />
                </div>
                <Badge 
                  className="text-white border-0"
                  style={{ backgroundColor: kpi.color }}
                >
                  {kpi.change}
                </Badge>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm font-medium">{kpi.label}</p>
                <p className="text-white text-2xl font-bold mt-1">{kpi.value}</p>
              </div>
              
              {/* 3D Visual Element */}
              <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ 
                    backgroundColor: kpi.color,
                    width: `${60 + index * 10}%`,
                    boxShadow: `0 0 10px ${kpi.color}50`
                  }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Power BI Style Footer */}
      <Card className="bg-gradient-to-r from-gray-900 to-black border-gray-700">
        <CardContent className="p-6">
          <div className="flex flex-wrap items-center justify-between text-gray-400 text-sm">
            <div className="flex items-center gap-4">
              <span>Dashboard Version: 2.5.1</span>
              <span>•</span>
              <span>Data Source: IPL Official API</span>
              <span>•</span>
              <span>Power BI Premium Workspace</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live Connection Active</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard3D;
