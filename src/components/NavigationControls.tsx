
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, BarChart3, Users, Trophy, TrendingUp, MapPin, DollarSign, Calendar, Star, Crown } from "lucide-react";

interface NavigationControlsProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const NavigationControls = ({ activeSection, onSectionChange }: NavigationControlsProps) => {
  const sections = [
    { id: "overview", label: "Overview", icon: Home, color: "from-blue-500 to-blue-600" },
    { id: "winners", label: "Champions", icon: Crown, color: "from-yellow-500 to-orange-500" },
    { id: "teams", label: "Teams & Points", icon: Users, color: "from-green-500 to-green-600" },
    { id: "players", label: "Top Performers", icon: Trophy, color: "from-purple-500 to-purple-600" },
    { id: "matches", label: "Match Results", icon: BarChart3, color: "from-indigo-500 to-indigo-600" },
    { id: "venues", label: "Venue Stats", icon: MapPin, color: "from-red-500 to-red-600" },
    { id: "auction", label: "Auction Insights", icon: DollarSign, color: "from-emerald-500 to-emerald-600" },
    { id: "awards", label: "Awards", icon: Star, color: "from-orange-500 to-orange-600" },
    { id: "analytics", label: "Analytics", icon: TrendingUp, color: "from-cyan-500 to-cyan-600" },
  ];

  return (
    <Card className="shadow-2xl bg-slate-800/80 backdrop-blur-md border-slate-600/30 sticky top-4 z-40">
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Calendar className="text-blue-400" size={20} />
          Dashboard Navigation
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-3">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "default" : "outline"}
              size="sm"
              onClick={() => onSectionChange(section.id)}
              className={`flex flex-col items-center gap-2 h-auto py-3 px-2 transition-all duration-300 ${
                activeSection === section.id
                  ? `bg-gradient-to-r ${section.color} text-white shadow-lg scale-105 border-0`
                  : "hover:scale-105 hover:shadow-md bg-slate-700/50 border-slate-600/50 text-slate-200 hover:bg-slate-600/50 hover:text-white"
              }`}
            >
              <section.icon size={18} />
              <span className="text-xs font-medium leading-tight text-center">
                {section.label}
              </span>
            </Button>
          ))}
        </div>

        {/* Quick Stats Bar */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Live Dashboard</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>74 Matches Analyzed</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span>🏆 RCB Champions 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>₹20cr Prize Pool</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NavigationControls;
