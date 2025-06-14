
import { Button } from "@/components/ui/button";
import { RefreshCw, Trophy, Users, BarChart3, MapPin } from "lucide-react";
import CustomTooltip from "./CustomTooltip";

const DashboardFooter = () => {
  return (
    <div className="mt-20 text-center relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-2xl -z-10 rounded-full"></div>
      <div className="bg-slate-800/40 backdrop-blur-md border border-slate-600/30 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Trophy className="text-blue-400" size={24} />
          IPL 2025 Season Complete
        </h3>
        <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
          Historic season concluded with RCB's maiden championship victory. 
          Interactive dashboard with drill-through analytics and real-time insights.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <CustomTooltip
            data={{
              title: "Tournament Scale",
              value: "74 Matches",
              description: "Complete match coverage with detailed analytics",
              additionalInfo: [
                { label: "League Matches", value: "70" },
                { label: "Playoffs", value: "4" },
                { label: "Data Points", value: "10000+" }
              ]
            }}
          >
            <div className="flex items-center gap-2 text-slate-300 cursor-help hover:text-white transition-colors">
              <Users size={16} />
              <span>74 Total Matches</span>
            </div>
          </CustomTooltip>
          
          <div className="flex items-center gap-2 text-slate-300">
            <BarChart3 size={16} />
            <span>10 Teams Competed</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin size={16} />
            <span>13 Venues</span>
          </div>
        </div>
        <Button variant="ghost" size="lg" className="mt-6 text-slate-300 hover:text-white hover:bg-slate-700/40 transition-all duration-300">
          <RefreshCw size={16} className="mr-3" />
          View Historical Seasons
        </Button>
      </div>
    </div>
  );
};

export default DashboardFooter;
