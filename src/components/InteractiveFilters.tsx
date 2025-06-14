
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { teams } from "@/data/iplData";
import { Filter, X, RefreshCw } from "lucide-react";
import { useState } from "react";

interface FilterState {
  selectedTeams: string[];
  selectedVenues: string[];
  winRange: [number, number];
  pointsRange: [number, number];
}

interface InteractiveFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  currentFilters: FilterState;
}

const InteractiveFilters = ({ onFilterChange, currentFilters }: InteractiveFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const venues = [
    "Narendra Modi Stadium", "Wankhede Stadium", "M. Chinnaswamy Stadium", 
    "Eden Gardens", "Mullanpur Stadium", "Rajiv Gandhi Intl Stadium"
  ];

  const toggleTeam = (teamId: string) => {
    const newTeams = currentFilters.selectedTeams.includes(teamId)
      ? currentFilters.selectedTeams.filter(id => id !== teamId)
      : [...currentFilters.selectedTeams, teamId];
    
    onFilterChange({ ...currentFilters, selectedTeams: newTeams });
  };

  const toggleVenue = (venue: string) => {
    const newVenues = currentFilters.selectedVenues.includes(venue)
      ? currentFilters.selectedVenues.filter(v => v !== venue)
      : [...currentFilters.selectedVenues, venue];
    
    onFilterChange({ ...currentFilters, selectedVenues: newVenues });
  };

  const clearAllFilters = () => {
    onFilterChange({
      selectedTeams: [],
      selectedVenues: [],
      winRange: [0, 14],
      pointsRange: [0, 20]
    });
  };

  const getTeamById = (id: string) => teams.find(team => team.id === id);

  return (
    <Card className="shadow-2xl bg-white/95 backdrop-blur-md border-white/20 sticky top-4 z-50">
      <CardHeader className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-b border-white/10">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Filter size={16} className="text-white" />
            </div>
            Interactive Filters
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-gray-600 hover:text-red-600"
            >
              <RefreshCw size={16} />
              Clear All
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-600"
            >
              {isExpanded ? "Collapse" : "Expand"}
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="p-6 space-y-6">
          {/* Team Filters */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              🏏 Teams ({currentFilters.selectedTeams.length} selected)
            </h4>
            <div className="flex flex-wrap gap-2">
              {teams.map(team => (
                <Badge
                  key={team.id}
                  variant={currentFilters.selectedTeams.includes(team.id) ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 ${
                    currentFilters.selectedTeams.includes(team.id)
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "hover:bg-blue-100"
                  }`}
                  onClick={() => toggleTeam(team.id)}
                >
                  {team.logo} {team.shortName}
                  {currentFilters.selectedTeams.includes(team.id) && (
                    <X size={12} className="ml-1" />
                  )}
                </Badge>
              ))}
            </div>
          </div>

          {/* Venue Filters */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              🏟️ Venues ({currentFilters.selectedVenues.length} selected)
            </h4>
            <div className="flex flex-wrap gap-2">
              {venues.map(venue => (
                <Badge
                  key={venue}
                  variant={currentFilters.selectedVenues.includes(venue) ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 ${
                    currentFilters.selectedVenues.includes(venue)
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "hover:bg-green-100"
                  }`}
                  onClick={() => toggleVenue(venue)}
                >
                  {venue.split(' ')[0]}
                  {currentFilters.selectedVenues.includes(venue) && (
                    <X size={12} className="ml-1" />
                  )}
                </Badge>
              ))}
            </div>
          </div>

          {/* Active Filters Summary */}
          {(currentFilters.selectedTeams.length > 0 || currentFilters.selectedVenues.length > 0) && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h5 className="font-semibold text-blue-800 mb-2">Active Filters:</h5>
              <div className="space-y-2">
                {currentFilters.selectedTeams.length > 0 && (
                  <div className="text-sm text-blue-700">
                    <strong>Teams:</strong> {currentFilters.selectedTeams.map(id => getTeamById(id)?.shortName).join(", ")}
                  </div>
                )}
                {currentFilters.selectedVenues.length > 0 && (
                  <div className="text-sm text-blue-700">
                    <strong>Venues:</strong> {currentFilters.selectedVenues.join(", ")}
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
};

export default InteractiveFilters;
