
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Users, 
  Trophy, 
  Calendar, 
  MapPin, 
  Gavel, 
  Award, 
  BarChart3, 
  Crown,
  Sparkles,
  FileText
} from "lucide-react";

interface NavigationControlsProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const NavigationControls = ({ activeSection, onSectionChange }: NavigationControlsProps) => {
  const sections = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "qa", label: "Ask Data", icon: Sparkles, badge: "Enhanced" },
    { id: "questionbank", label: "Question Bank", icon: FileText, badge: "50 Q&A" },
    { id: "winners", label: "Winners", icon: Crown },
    { id: "teams", label: "Teams", icon: Users },
    { id: "players", label: "Players", icon: Trophy },
    { id: "matches", label: "Matches", icon: Calendar },
    { id: "venues", label: "Venues", icon: MapPin },
    { id: "auction", label: "Auction", icon: Gavel },
    { id: "awards", label: "Awards", icon: Award },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-white/20 sticky top-4 z-40">
      <div className="flex flex-wrap gap-2">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "default" : "ghost"}
              size="sm"
              onClick={() => onSectionChange(section.id)}
              className={`flex items-center gap-2 transition-all duration-200 ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <Icon size={16} />
              {section.label}
              {section.badge && (
                <Badge variant="secondary" className="ml-1 text-xs px-1 py-0">
                  {section.badge}
                </Badge>
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationControls;
