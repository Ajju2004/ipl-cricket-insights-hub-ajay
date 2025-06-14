
import { Card, CardContent } from "@/components/ui/card";
import { Database, Cpu, HardDrive } from "lucide-react";

const Dashboard3DFooter = () => {
  return (
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
  );
};

export default Dashboard3DFooter;
