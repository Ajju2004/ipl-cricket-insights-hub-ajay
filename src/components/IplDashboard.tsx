
import { useState, useMemo } from "react";
import DashboardStats from "./DashboardStats";
import PointsTable from "./PointsTable";
import TopPerformers from "./TopPerformers";
import RecentMatches from "./RecentMatches";
import EnhancedStatsChart from "./EnhancedStatsChart";
import VenueStats from "./VenueStats";
import AuctionInsights from "./AuctionInsights";
import AwardsShowcase from "./AwardsShowcase";
import InteractiveFilters from "./InteractiveFilters";
import NavigationControls from "./NavigationControls";
import DrillThroughModal from "./DrillThroughModal";
import CustomTooltip from "./CustomTooltip";
import { Button } from "@/components/ui/button";
import { RefreshCw, Download, TrendingUp, Calendar, Trophy, Users, BarChart3, MapPin } from "lucide-react";
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

  const renderSectionContent = () => {
    switch (activeSection) {
      case "teams":
        return <PointsTable />;
      case "players":
        return <TopPerformers />;
      case "matches":
        return <RecentMatches />;
      case "venues":
        return <VenueStats />;
      case "auction":
        return <AuctionInsights />;
      case "awards":
        return <AwardsShowcase />;
      case "analytics":
        return <EnhancedStatsChart filteredTeams={filteredTeams} onDrillDown={handleDrillDown} />;
      default:
        return (
          <>
            <DashboardStats />
            <div className="mt-16 space-y-12">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <PointsTable />
                <TopPerformers />
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <AwardsShowcase />
                <AuctionInsights />
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10 rounded-3xl"></div>
                <EnhancedStatsChart filteredTeams={filteredTeams} onDrillDown={handleDrillDown} />
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <RecentMatches />
                <VenueStats />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="max-w-8xl mx-auto py-12 px-6 lg:px-8 animate-fade-in">
      {/* Enhanced Header with Better Typography */}
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

      {/* Navigation Controls */}
      <div className="mb-8">
        <NavigationControls 
          activeSection={activeSection} 
          onSectionChange={scrollToSection}
        />
      </div>

      {/* Interactive Filters */}
      <div className="mb-8">
        <InteractiveFilters 
          currentFilters={filters}
          onFilterChange={setFilters}
        />
      </div>

      {/* Performance Indicator */}
      {filteredTeams.length !== teams.length && (
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
        {renderSectionContent()}
      </div>

      {/* Enhanced Footer */}
      <div className="mt-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-2xl -z-10 rounded-full"></div>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Trophy className="text-yellow-400" size={24} />
            IPL 2025 Season Complete
          </h3>
          <p className="text-indigo-300 text-lg mb-6 max-w-2xl mx-auto">
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
              <div className="flex items-center gap-2 text-indigo-200 cursor-help hover:text-white transition-colors">
                <Users size={16} />
                <span>74 Total Matches</span>
              </div>
            </CustomTooltip>
            
            <div className="flex items-center gap-2 text-indigo-200">
              <BarChart3 size={16} />
              <span>10 Teams Competed</span>
            </div>
            <div className="flex items-center gap-2 text-indigo-200">
              <MapPin size={16} />
              <span>13 Venues</span>
            </div>
          </div>
          <Button variant="ghost" size="lg" className="mt-6 text-indigo-300 hover:text-white hover:bg-white/10 transition-all duration-300">
            <RefreshCw size={16} className="mr-3" />
            View Historical Seasons
          </Button>
        </div>
      </div>

      {/* Drill Through Modal */}
      <DrillThroughModal 
        data={drillThroughData}
        onClose={() => setDrillThroughData(null)}
      />
    </div>
  );
};

export default IplDashboard;
