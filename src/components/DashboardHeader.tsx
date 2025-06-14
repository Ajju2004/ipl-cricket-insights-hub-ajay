import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Calendar, Trophy } from "lucide-react";
import CustomTooltip from "./CustomTooltip";
import NaturalLanguageQuery from "./NaturalLanguageQuery";

const DashboardHeader = () => {
  return (
    <div className="mb-12 relative">
      {/* New RCB Championship Background Image - can touch top */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/60 z-10"></div>
        <img 
          src="/lovable-uploads/62c360cd-fad2-4628-baae-a12aa2cc5def.png" 
          alt="RCB Championship Celebration" 
          className="w-full h-full object-cover object-center opacity-60"
        />
      </div>

      <div className="relative z-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pt-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10 rounded-full"></div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tight leading-none drop-shadow-2xl">
              IPL 2025
              <span className="block text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold drop-shadow-lg">
                Insights Hub
              </span>
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl leading-relaxed font-medium drop-shadow-lg">
              Interactive analytics dashboard featuring RCB's historic title victory, 
              drill-through capabilities, and comprehensive tournament insights.
            </p>
            
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-400">
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
                <div className="flex items-center gap-2 bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full cursor-help hover:bg-slate-700/60 transition-colors border border-slate-600/30">
                  <Calendar size={16} />
                  <span className="font-semibold text-slate-200">March 22 - June 3, 2025</span>
                </div>
              </CustomTooltip>
              
              <CustomTooltip
                data={{
                  title: "Championship Details",
                  value: "RCB First Title",
                  description: "Royal Challengers Bengaluru finally won their first IPL title",
                  additionalInfo: [
                    { label: "Final Margin", value: "6 runs" },
                    { label: "Prize Money", value: "₹20 crore" },
                    { label: "Previous Finals", value: "3 losses" }
                  ]
                }}
              >
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full cursor-help hover:from-blue-500/30 hover:to-purple-500/30 transition-colors border border-blue-500/20">
                  <Trophy size={16} />
                  <span className="font-semibold text-blue-200">Champions: Royal Challengers Bengaluru</span>
                </div>
              </CustomTooltip>
              
              <div className="flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-500/20">
                <span className="text-lg">💰</span>
                <span className="font-semibold text-emerald-200">Prize Pool: ₹20 crore</span>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col gap-4">
            <Button variant="secondary" className="shadow-2xl flex items-center gap-3 h-12 px-6 text-base font-semibold bg-slate-800/80 backdrop-blur-md border-slate-600/30 hover:bg-slate-700/80 transition-all duration-300 text-slate-200">
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

        {/* Full Width Natural Language Query Box with Reduced Height */}
        <div className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-xl -z-10 rounded-2xl"></div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg">
            <NaturalLanguageQuery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
