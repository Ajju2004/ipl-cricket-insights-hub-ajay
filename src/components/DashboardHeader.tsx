
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Calendar, Trophy } from "lucide-react";
import CustomTooltip from "./CustomTooltip";

const DashboardHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-3xl -z-10 rounded-full"></div>
        <h1 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tight leading-none">
          IPL 2025
          <span className="block text-4xl md:text-5xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-bold">
            Insights Hub
          </span>
        </h1>
        <p className="text-xl text-indigo-200 max-w-2xl leading-relaxed font-medium">
          Interactive analytics dashboard featuring RCB's historic maiden title victory, 
          drill-through capabilities, and comprehensive tournament insights.
        </p>
        
        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-indigo-300">
          <CustomTooltip
            data={{
              title: "Tournament Duration",
              value: "74 Days",
              description: "Extended season due to suspension and playoffs",
              additionalInfo: [
                { label: "League Matches", value: "70" },
                { label: "Playoff Matches", value: "4" },
                { label: "Venues Used", value: "13" }
              ]
            }}
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full cursor-help hover:bg-white/15 transition-colors">
              <Calendar size={16} />
              <span className="font-semibold">March 22 - June 3, 2025</span>
            </div>
          </CustomTooltip>
          
          <CustomTooltip
            data={{
              title: "Championship Details",
              value: "RCB First Title",
              description: "Royal Challengers Bengaluru finally won their maiden IPL title",
              additionalInfo: [
                { label: "Final Margin", value: "6 runs" },
                { label: "Prize Money", value: "₹20 crore" },
                { label: "Previous Finals", value: "3 losses" }
              ]
            }}
          >
            <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full cursor-help hover:from-yellow-500/30 hover:to-orange-500/30 transition-colors">
              <Trophy size={16} />
              <span className="font-semibold">Champions: Royal Challengers Bengaluru</span>
            </div>
          </CustomTooltip>
          
          <div className="flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-lg">💰</span>
            <span className="font-semibold">Prize Pool: ₹20 crore</span>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-0 flex flex-col gap-4">
        <Button variant="secondary" className="shadow-2xl flex items-center gap-3 h-12 px-6 text-base font-semibold bg-white/15 backdrop-blur-md border-white/20 hover:bg-white/25 transition-all duration-300">
          <Download size={18} />
          Export Analytics
        </Button>
        <CustomTooltip
          data={{
            title: "Final Statistics",
            value: "Complete Dataset",
            description: "Access comprehensive tournament statistics and analytics",
            additionalInfo: [
              { label: "Data Points", value: "5000+" },
              { label: "Updated", value: "Live" },
              { label: "Coverage", value: "100%" }
            ]
          }}
        >
          <Button className="flex items-center gap-3 h-12 px-6 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl transition-all duration-300">
            <TrendingUp size={18} />
            Final Statistics
          </Button>
        </CustomTooltip>
      </div>
    </div>
  );
};

export default DashboardHeader;
