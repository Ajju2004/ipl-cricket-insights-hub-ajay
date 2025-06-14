
import { useState, useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Sparkles, TrendingUp, Users, Trophy, MapPin } from "lucide-react";
import { teams, topPlayers, recentMatches, venues, awards } from "@/data/iplData";

interface QueryResult {
  type: "teams" | "players" | "matches" | "venues" | "awards" | "stats";
  title: string;
  data: any[];
  icon: React.ReactNode;
}

const NaturalLanguageQuery = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<QueryResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const suggestions = [
    "Show me top performers",
    "Which team has the most wins?",
    "Recent matches results",
    "Venue statistics",
    "Awards and recognition",
    "Team with highest points"
  ];

  const parseQuery = (userQuery: string): QueryResult | null => {
    const query = userQuery.toLowerCase().trim();
    
    // Team-related queries
    if (query.includes("team") || query.includes("wins") || query.includes("points") || query.includes("standings")) {
      if (query.includes("most wins") || query.includes("highest wins")) {
        const sortedTeams = [...teams].sort((a, b) => b.wins - a.wins).slice(0, 5);
        return {
          type: "teams",
          title: "Teams with Most Wins",
          data: sortedTeams,
          icon: <Trophy className="text-yellow-500" size={20} />
        };
      }
      if (query.includes("points") || query.includes("standings")) {
        const sortedTeams = [...teams].sort((a, b) => b.points - a.points);
        return {
          type: "teams",
          title: "Points Table",
          data: sortedTeams,
          icon: <TrendingUp className="text-blue-500" size={20} />
        };
      }
    }

    // Player-related queries
    if (query.includes("player") || query.includes("performer") || query.includes("runs") || query.includes("wickets")) {
      if (query.includes("top") || query.includes("best") || query.includes("performer")) {
        const topBatsmen = [...topPlayers].sort((a, b) => b.runs - a.runs).slice(0, 8);
        return {
          type: "players",
          title: "Top Performers",
          data: topBatsmen,
          icon: <Users className="text-green-500" size={20} />
        };
      }
      if (query.includes("runs")) {
        const topRunScorers = [...topPlayers].sort((a, b) => b.runs - a.runs).slice(0, 5);
        return {
          type: "players",
          title: "Top Run Scorers",
          data: topRunScorers,
          icon: <TrendingUp className="text-orange-500" size={20} />
        };
      }
    }

    // Match-related queries
    if (query.includes("match") || query.includes("recent") || query.includes("result")) {
      return {
        type: "matches",
        title: "Recent Matches",
        data: recentMatches.slice(0, 5),
        icon: <Trophy className="text-purple-500" size={20} />
      };
    }

    // Venue-related queries
    if (query.includes("venue") || query.includes("stadium") || query.includes("ground")) {
      return {
        type: "venues",
        title: "Venue Statistics",
        data: venues,
        icon: <MapPin className="text-indigo-500" size={20} />
      };
    }

    // Awards-related queries
    if (query.includes("award") || query.includes("recognition") || query.includes("winner")) {
      return {
        type: "awards",
        title: "Awards & Recognition",
        data: awards,
        icon: <Trophy className="text-yellow-600" size={20} />
      };
    }

    // Default fallback
    return {
      type: "stats",
      title: "Quick Stats Overview",
      data: [
        { label: "Total Teams", value: teams.length },
        { label: "Total Players", value: topPlayers.length },
        { label: "Matches Played", value: recentMatches.length },
        { label: "Venues", value: venues.length }
      ],
      icon: <TrendingUp className="text-blue-500" size={20} />
    };
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    
    // Simulate processing time
    setTimeout(() => {
      const result = parseQuery(query);
      setResults(result);
      setIsSearching(false);
    }, 500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    const result = parseQuery(suggestion);
    setResults(result);
  };

  const renderResults = () => {
    if (!results) return null;

    switch (results.type) {
      case "teams":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.data.map((team: any) => (
              <div key={team.id} className="bg-slate-700/40 p-4 rounded-lg border border-slate-500/30">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{team.logo}</span>
                  <div>
                    <h3 className="font-semibold text-white">{team.shortName}</h3>
                    <p className="text-sm text-slate-300">{team.name}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-lg font-bold text-green-400">{team.wins}</div>
                    <div className="text-xs text-slate-400">Wins</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-400">{team.points}</div>
                    <div className="text-xs text-slate-400">Points</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-400">{team.nrr}</div>
                    <div className="text-xs text-slate-400">NRR</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "players":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.data.map((player: any) => (
              <div key={player.id} className="bg-slate-700/40 p-4 rounded-lg border border-slate-500/30">
                <div className="mb-3">
                  <h3 className="font-semibold text-white">{player.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">{player.team}</Badge>
                    <Badge variant="outline" className="text-xs">{player.role}</Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div>
                    <div className="text-lg font-bold text-orange-400">{player.runs}</div>
                    <div className="text-xs text-slate-400">Runs</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-400">{player.strikeRate}</div>
                    <div className="text-xs text-slate-400">SR</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "matches":
        return (
          <div className="space-y-4">
            {results.data.map((match: any) => (
              <div key={match.id} className="bg-slate-700/40 p-4 rounded-lg border border-slate-500/30">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="text-lg font-semibold text-white">
                      {match.team1} vs {match.team2}
                    </div>
                    <Badge variant={match.stage === "Final" ? "default" : "outline"}>
                      {match.stage}
                    </Badge>
                  </div>
                  <div className="text-sm text-slate-300">{match.date}</div>
                </div>
                <div className="text-sm text-slate-300 mb-2">{match.venue}</div>
                <div className="flex justify-between items-center">
                  <div className="text-green-400 font-semibold">Winner: {match.winner}</div>
                  <div className="text-blue-400">{match.margin}</div>
                </div>
              </div>
            ))}
          </div>
        );

      case "venues":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.data.map((venue: any, index: number) => (
              <div key={index} className="bg-slate-700/40 p-4 rounded-lg border border-slate-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={18} className="text-purple-400" />
                  <h3 className="font-semibold text-white">{venue.name}</h3>
                </div>
                <p className="text-sm text-slate-300 mb-3">{venue.city}</p>
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">{venue.matches}</div>
                    <div className="text-xs text-slate-400">Matches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">{venue.avgScore}</div>
                    <div className="text-xs text-slate-400">Avg Score</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "awards":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.data.map((award: any) => (
              <div key={award.id} className="bg-slate-700/40 p-4 rounded-lg border border-slate-500/30">
                <div className="text-center mb-3">
                  <div className="text-3xl mb-2">{award.icon}</div>
                  <h3 className="font-bold text-sm text-white">{award.title}</h3>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-blue-400">{award.winner}</div>
                  {award.team && <div className="text-sm text-slate-300">{award.team}</div>}
                  <div className="text-lg font-bold text-purple-400 mt-1">{award.value}</div>
                </div>
              </div>
            ))}
          </div>
        );

      case "stats":
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {results.data.map((stat: any, index: number) => (
              <div key={index} className="bg-slate-700/40 p-4 rounded-lg border border-slate-500/30 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="shadow-xl bg-slate-800/60 backdrop-blur-md border-slate-600/30 mb-8">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
          <Sparkles className="text-purple-400" size={24} />
          Ask Your Data
          <Badge variant="outline" className="ml-2 text-xs">
            Q&A Feature
          </Badge>
        </CardTitle>
        <p className="text-sm text-slate-300">
          Ask questions about teams, players, matches, and more in natural language
        </p>
      </CardHeader>
      <CardContent>
        {/* Search Input */}
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <Input
              type="text"
              placeholder="Ask about IPL data... e.g., 'Show me top performers'"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="pl-10 bg-slate-700/40 border-slate-500/30 text-white placeholder-slate-400"
            />
          </div>
          <Button 
            onClick={handleSearch}
            disabled={!query.trim() || isSearching}
            className="bg-purple-600 hover:bg-purple-700"
          >
            {isSearching ? "Searching..." : "Ask"}
          </Button>
        </div>

        {/* Quick Suggestions */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-300 mb-2">Quick Suggestions:</h4>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-slate-600 text-slate-300 border-slate-500"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results */}
        {results && (
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-4">
              {results.icon}
              <h3 className="text-lg font-semibold text-white">{results.title}</h3>
            </div>
            {renderResults()}
          </div>
        )}

        {/* No results message */}
        {query && !results && !isSearching && (
          <div className="text-center py-8 text-slate-400">
            <Search size={48} className="mx-auto mb-4 opacity-50" />
            <p>Try asking about teams, players, matches, venues, or awards</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NaturalLanguageQuery;
