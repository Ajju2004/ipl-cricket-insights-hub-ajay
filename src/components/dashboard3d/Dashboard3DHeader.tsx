
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity } from "lucide-react";

const Dashboard3DHeader = () => {
  return (
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
  );
};

export default Dashboard3DHeader;
