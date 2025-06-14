
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import Dashboard3DHeader from "./dashboard3d/Dashboard3DHeader";
import Dashboard3DScene from "./dashboard3d/Dashboard3DScene";
import SystemArchitecture from "./dashboard3d/SystemArchitecture";
import KPICards from "./dashboard3d/KPICards";
import Dashboard3DFooter from "./dashboard3d/Dashboard3DFooter";

const Dashboard3D = () => {
  // Power BI Enterprise specifications with 3D model data
  const kpiMetrics = [
    { label: "Total Revenue", value: "₹5,230Cr", change: "+12.5%", color: "#00D4AA", height: 2.5 },
    { label: "Match Attendance", value: "2.8M", change: "+8.2%", color: "#FF6B6B", height: 2.0 },
    { label: "Viewership", value: "462M", change: "+15.3%", color: "#4ECDC4", height: 3.0 },
    { label: "Engagement Rate", value: "94.2%", change: "+5.7%", color: "#45B7D1", height: 2.2 }
  ];

  return (
    <div className="space-y-8">
      {/* Enhanced Power BI Style Header */}
      <Dashboard3DHeader />

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
            <Dashboard3DScene kpiMetrics={kpiMetrics} />
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
