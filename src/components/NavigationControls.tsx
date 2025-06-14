import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Trophy, Users, User, Calendar, MapPin, DollarSign, Award, TrendingUp, MessageSquare, BarChart3 } from "lucide-react";
import CustomTooltip from "./CustomTooltip";
import { cn } from "@/lib/utils";

interface NavigationControlsProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const NavigationControls = ({ activeSection, onSectionChange }: NavigationControlsProps) => {
  const sections = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "3d-analytics", label: "3D Analytics", icon: BarChart3 },
    { id: "winners", label: "Champions", icon: Trophy },
    { id: "teams", label: "Teams", icon: Users },
    { id: "players", label: "Players", icon: User },
    { id: "matches", label: "Matches", icon: Calendar },
    { id: "venues", label: "Venues", icon: MapPin },
    { id: "auction", label: "Auction", icon: DollarSign },
    { id: "awards", label: "Awards", icon: Award },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
    { id: "qa", label: "Q&A", icon: MessageSquare },
  ];

  return (
    <div className="sticky top-6 z-40">
      <Card className="bg-white/20 backdrop-blur-xl border-white/30 shadow-2xl">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              
              return (
                <CustomTooltip
                  key={section.id}
                  data={{
                    title: section.label,
                    value: section.id === "3d-analytics" ? "Interactive 3D Dashboard" : `Navigate to ${section.label}`,
                    description: section.id === "3d-analytics" 
                      ? "Experience immersive 3D visualizations with Power BI specifications"
                      : `View detailed ${section.label.toLowerCase()} information and statistics`,
                  }}
                >
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    onClick={() => onSectionChange(section.id)}
                    className={cn(
                      "transition-all duration-300 text-white border-white/20",
                      isActive 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg scale-105" 
                        : "hover:bg-white/20 hover:scale-105"
                    )}
                  >
                    <Icon size={16} className="mr-2" />
                    {section.label}
                  </Button>
                </CustomTooltip>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NavigationControls;
