
import { useState, useMemo } from "react";
import InteractiveFilters from "./InteractiveFilters";
import NavigationControls from "./NavigationControls";
import DrillThroughModal from "./DrillThroughModal";
import DashboardHeader from "./DashboardHeader";
import DashboardFooter from "./DashboardFooter";
import SectionRenderer from "./SectionRenderer";
import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";
import { teams } from "@/data/iplData";

interface FilterState {
  selectedTeams: string[];
  selectedVenues: string[];
  winRange: [number, number];
  pointsRange: [number, number];
}

interface DrillThroughData {
  type: "team" | "player" | "match";
  id: string;
  title: string;
}

const IplDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [filters, setFilters] = useState<FilterState>({
    selectedTeams: [],
    selectedVenues: [],
    winRange: [0, 14],
    pointsRange: [0, 20]
  });
  const [drillThroughData, setDrillThroughData] = useState<DrillThroughData | null>(null);

  // Performance optimization: Memoize filtered data
  const filteredTeams = useMemo(() => {
    return teams.filter(team => {
      const teamMatch = filters.selectedTeams.length === 0 || filters.selectedTeams.includes(team.id);
      const winMatch = team.wins >= filters.winRange[0] && team.wins <= filters.winRange[1];
      const pointsMatch = team.points >= filters.pointsRange[0] && team.points <= filters.pointsRange[1];
      
      return teamMatch && winMatch && pointsMatch;
    });
  }, [filters]);

  const handleDrillDown = (type: "team" | "player" | "match", id: string, title: string) => {
    setDrillThroughData({ type, id, title });
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-8xl mx-auto py-12 px-6 lg:px-8 animate-fade-in">
      <DashboardHeader />

      {/* Navigation Controls */}
      <div className="mb-8">
        <NavigationControls 
          activeSection={activeSection} 
          onSectionChange={scrollToSection}
        />
      </div>

      {/* Interactive Filters - Hide on Winners page */}
      {activeSection !== "winners" && (
        <div className="mb-8">
          <InteractiveFilters 
            currentFilters={filters}
            onFilterChange={setFilters}
          />
        </div>
      )}

      {/* Performance Indicator - Hide on Winners page */}
      {activeSection !== "winners" && filteredTeams.length !== teams.length && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2">
            <BarChart3 className="text-blue-600" size={20} />
            <span className="font-semibold text-blue-800">
              Showing {filteredTeams.length} of {teams.length} teams based on active filters
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setFilters({
                selectedTeams: [],
                selectedVenues: [],
                winRange: [0, 14],
                pointsRange: [0, 20]
              })}
              className="text-blue-600 hover:text-blue-800"
            >
              Clear Filters
            </Button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div id="overview">
        <SectionRenderer 
          activeSection={activeSection}
          filteredTeams={filteredTeams}
          onDrillDown={handleDrillDown}
        />
      </div>

      <DashboardFooter />

      {/* Drill Through Modal */}
      <DrillThroughModal 
        data={drillThroughData}
        onClose={() => setDrillThroughData(null)}
      />
    </div>
  );
};

export default IplDashboard;
