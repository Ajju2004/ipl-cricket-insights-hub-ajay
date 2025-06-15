
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Calendar, Trophy } from "lucide-react";
import CustomTooltip from "./CustomTooltip";
import NaturalLanguageQuery from "./NaturalLanguageQuery";

const DashboardHeader = () => {
  return (
    <div className="mb-12 relative">
      {/* Enhanced Background Image with Better Quality and Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70 z-10"></div>
        <img 
          src="/lovable-uploads/62c360cd-fad2-4628-baae-a12aa2cc5def.png" 
          alt="RCB Championship Celebration" 
          className="w-full h-full object-cover object-center filter brightness-110 contrast-105 saturate-110"
        />
        {/* Additional overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/30 z-10"></div>
      </div>

      <div className="relative z-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 pt-8">
          <div className="relative">
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl -z-10 rounded-full scale-150"></div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight leading-none">
              <span className="drop-shadow-2xl filter brightness-110">IPL 2025</span>
              <span className="block text-4xl md:text-6xl bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent font-black tracking-wide filter drop-shadow-lg">
                Insights Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-2xl leading-relaxed font-semibold drop-shadow-xl backdrop-blur-sm bg-black/10 rounded-lg p-4 border border-white/10">
              Interactive analytics dashboard featuring RCB's historic title victory, 
              drill-through capabilities, and comprehensive tournament insights.
            </p>
            
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
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
                <div className="flex items-center gap-3 bg-slate-800/80 backdrop-blur-md px-6 py-3 rounded-full cursor-help hover:bg-slate-700/80 transition-all duration-300 border border-slate-600/40 shadow-2xl">
                  <Calendar size={18} className="text-blue-300" />
                  <span className="font-bold text-slate-100 text-base">March 22 - June 3, 2025</span>
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
                <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-md px-6 py-3 rounded-full cursor-help hover:from-blue-500/80 hover:to-purple-500/80 transition-all duration-300 border border-blue-400/30 shadow-2xl">
                  <Trophy size={18} className="text-yellow-300" />
                  <span className="font-bold text-blue-100 text-base">Champions: Royal Challengers Bengaluru</span>
                </div>
              </CustomTooltip>
              
              <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-600/80 to-green-600/80 backdrop-blur-md px-6 py-3 rounded-full border border-emerald-400/30 shadow-2xl">
                <span className="text-2xl">💰</span>
                <span className="font-bold text-emerald-100 text-base">Prize Pool: ₹20 crore</span>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col gap-4">
            <Button variant="secondary" className="shadow-2xl flex items-center gap-3 h-14 px-8 text-lg font-bold bg-slate-800/90 backdrop-blur-md border-slate-500/40 hover:bg-slate-700/90 transition-all duration-300 text-slate-100">
              <Download size={20} />
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
              <Button className="flex items-center gap-3 h-14 px-8 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl transition-all duration-300 text-white">
                <TrendingUp size={20} />
                Final Statistics
              </Button>
            </CustomTooltip>
          </div>
        </div>

        {/* Enhanced Natural Language Query Box */}
        <div className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl -z-10 rounded-2xl"></div>
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/30 shadow-2xl">
            <NaturalLanguageQuery />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
