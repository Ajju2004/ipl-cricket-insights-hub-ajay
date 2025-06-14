
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PieChart, Activity, Database, Cpu, HardDrive, Wifi } from "lucide-react";

const SystemArchitecture = () => {
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

  return (
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
  );
};

export default SystemArchitecture;
