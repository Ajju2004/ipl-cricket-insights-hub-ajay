
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

interface KPIMetric {
  label: string;
  value: string;
  change: string;
  color: string;
  height: number;
}

interface KPICardsProps {
  kpiMetrics: KPIMetric[];
}

const KPICards = ({ kpiMetrics }: KPICardsProps) => {
  return (
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
  );
};

export default KPICards;
