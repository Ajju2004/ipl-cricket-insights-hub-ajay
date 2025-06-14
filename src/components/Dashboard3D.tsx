
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import { useEffect, useState } from "react";
import Dashboard3DHeader from "./dashboard3d/Dashboard3DHeader";
import Dashboard3DScene from "./dashboard3d/Dashboard3DScene";
import SystemArchitecture from "./dashboard3d/SystemArchitecture";
import KPICards from "./dashboard3d/KPICards";
import Dashboard3DFooter from "./dashboard3d/Dashboard3DFooter";
import WebGLErrorBoundary from "./dashboard3d/WebGLErrorBoundary";
import WebGLFallback from "./dashboard3d/WebGLFallback";
import { checkWebGLSupport } from "@/utils/webglUtils";

const Dashboard3D = () => {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  // Power BI Enterprise specifications with 3D model data
  const kpiMetrics = [
    { label: "Total Revenue", value: "₹5,230Cr", change: "+12.5%", color: "#00D4AA", height: 2.5 },
    { label: "Match Attendance", value: "2.8M", change: "+8.2%", color: "#FF6B6B", height: 2.0 },
    { label: "Viewership", value: "462M", change: "+15.3%", color: "#4ECDC4", height: 3.0 },
    { label: "Engagement Rate", value: "94.2%", change: "+5.7%", color: "#45B7D1", height: 2.2 }
  ];

  useEffect(() => {
    // Check WebGL support asynchronously
    const checkSupport = async () => {
      try {
        const isSupported = checkWebGLSupport();
        setWebglSupported(isSupported);
      } catch (error) {
        console.error('Error checking WebGL support:', error);
        setWebglSupported(false);
      }
    };

    checkSupport();
  }, []);

  return (
    <div className="space-y-8">
      {/* Enhanced Power BI Style Header */}
      <Dashboard3DHeader />

      {/* Enhanced 3D Visualization Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Primary 3D Analytics Canvas with WebGL Detection */}
        <Card className="bg-black/95 border-gray-700 h-[500px] shadow-2xl">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3">
              <BarChart3 className="text-blue-400" size={28} />
              3D Performance & Infrastructure Analytics
            </CardTitle>
            <p className="text-gray-400">Interactive visualization of tournament metrics and system performance</p>
          </CardHeader>
          <CardContent className="h-full p-0">
            {webglSupported === null ? (
              <div className="flex items-center justify-center h-full text-gray-400">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
                <span className="ml-2">Initializing 3D Engine...</span>
              </div>
            ) : webglSupported ? (
              <WebGLErrorBoundary>
                <Dashboard3DScene kpiMetrics={kpiMetrics} />
              </WebGLErrorBoundary>
            ) : (
              <WebGLFallback />
            )}
          </CardContent>
        </Card>

        {/* Enhanced Power BI System Architecture */}
        <SystemArchitecture />
      </div>

      {/* Enhanced KPI Cards with 3D Visual Elements */}
      <KPICards kpiMetrics={kpiMetrics} />

      {/* Enhanced Power BI Enterprise Footer */}
      <Dashboard3DFooter />
    </div>
  );
};

export default Dashboard3D;
