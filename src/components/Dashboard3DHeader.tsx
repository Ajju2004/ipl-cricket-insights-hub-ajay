
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity } from "lucide-react";

const Dashboard3DHeader = () => {
  return (
    <Card className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white border-0 shadow-2xl backdrop-blur-xl">
      <CardHeader className="p-8">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-5xl font-black flex items-center gap-5">
              <Activity className="text-blue-300 drop-shadow-lg" size={50} />
              IPL 2025 - Enterprise Analytics Platform
            </CardTitle>
            <p className="text-blue-200 mt-4 text-xl font-semibold">Power BI Premium Workspace • Azure Cloud Infrastructure • Real-time Processing</p>
            <div className="flex items-center gap-6 mt-6">
              <Badge className="bg-green-500 text-white text-lg px-6 py-2 font-black shadow-lg">ENTERPRISE</Badge>
              <Badge className="bg-blue-500 text-white text-lg px-6 py-2 font-black shadow-lg">REAL-TIME</Badge>
              <Badge className="bg-purple-500 text-white text-lg px-6 py-2 font-black shadow-lg">AI-POWERED</Badge>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-green-500 text-white mb-4 text-xl px-6 py-3 font-black shadow-lg">LIVE DASHBOARD</Badge>
            <p className="text-base text-blue-200 font-semibold">Last Refresh: {new Date().toLocaleTimeString()}</p>
            <p className="text-sm text-blue-300 mt-2 font-bold">Data Latency: <span className="text-green-300">~2ms</span></p>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Dashboard3DHeader;
