
import { useState, useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Sparkles, TrendingUp, Users, Trophy, MapPin, Crown, Target } from "lucide-react";
import { teams, topPlayers, recentMatches, venues, awards, auctionHighlights } from "@/data/iplData";

interface QueryResult {
  type: "teams" | "players" | "matches" | "venues" | "awards" | "stats" | "auction" | "comparison";
  title: string;
  data: any[];
  icon: React.ReactNode;
  summary?: string;
}

const NaturalLanguageQuery = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<QueryResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const suggestions = [
    "Who won IPL 2025?",
    "Show me top run scorers",
    "Which team spent most in auction?",
    "Most expensive player bought",
    "Best bowling figures",
    "Final match details",
    "Venue with highest scores",
    "Awards winners list"
  ];

  const parseQuery = (userQuery: string): QueryResult | null => {
    const query = userQuery.toLowerCase().trim();
    
    // Championship/Winner queries
    if (query.includes("winner") || query.includes("champion") || query.includes("won ipl") || query.includes("title")) {
      return {
        type: "teams",
        title: "IPL 2025 Champions",
        data: [teams.find(t => t.shortName === "RCB")!],
        icon: <Crown className="text-yellow-500" size={20} />,
        summary: "Royal Challengers Bengaluru won their maiden IPL title in 2025, defeating Punjab Kings by 6 runs in the final."
      };
    }

    // Team comparison queries
    if (query.includes("compare") || (query.includes("vs") && query.includes("team"))) {
      const sortedTeams = [...teams].sort((a, b) => b.points - a.points).slice(0, 4);
      return {
        type: "comparison",
        title: "Top 4 Teams Comparison",
        data: sortedTeams,
        icon: <Target className="text-blue-500" size={20} />,
        summary: "Top performing teams based on points table standings and performance metrics."
      };
    }

    // Auction-related queries
    if (query.includes("auction") || query.includes("expensive") || query.includes("bought") || query.includes("price") || query.includes("spend")) {
      if (query.includes("most expensive") || query.includes("highest price")) {
        const expensivePlayers = [...auctionHighlights].sort((a, b) => b.price - a.price).slice(0, 5);
        return {
          type: "auction",
          title: "Most Expensive Players",
          data: expensivePlayers,
          icon: <Trophy className="text-green-500" size={20} />,
          summary: `Rishabh Pant was the most expensive buy at ₹${auctionHighlights[0].price} crore.`
        };
      }
      if (query.includes("team") && query.includes("spend")) {
        const teamSpending = [...teams].sort((a, b) => b.auctionSpend - a.auctionSpend).slice(0, 5);
        return {
          type: "teams",
          title: "Highest Spending Teams",
          data: teamSpending,
          icon: <TrendingUp className="text-purple-500" size={20} />,
          summary: `${teamSpending[0].shortName} spent the most with ₹${teamSpending[0].auctionSpend} crore.`
        };
      }
      return {
        type: "auction",
        title: "Auction Highlights",
        data: auctionHighlights,
        icon: <Trophy className="text-green-500" size={20} />,
        summary: "Key auction purchases and record-breaking deals from IPL 2025 auction."
      };
    }

    // Player-specific queries
    if (query.includes("run scorer") || query.includes("most runs") || query.includes("orange cap")) {
      const topRunScorers = [...topPlayers].sort((a, b) => b.runs - a.runs).slice(0, 5);
      return {
        type: "players",
        title: "Top Run Scorers",
        data: topRunScorers,
        icon: <TrendingUp className="text-orange-500" size={20} />,
        summary: `${topRunScorers[0].name} leads with ${topRunScorers[0].runs} runs and won the Orange Cap.`
      };
    }

    if (query.includes("wicket") || query.includes("bowler") || query.includes("purple cap")) {
      const topBowlers = [...topPlayers].sort((a, b) => b.wickets - a.wickets).slice(0, 5);
      return {
        type: "players",
        title: "Top Wicket Takers",
        data: topBowlers,
        icon: <Target className="text-purple-500" size={20} />,
        summary: `${topBowlers[0].name} took the most wickets (${topBowlers[0].wickets}) and won the Purple Cap.`
      };
    }

    if (query.includes("strike rate") || query.includes("fastest")) {
      const fastestScorers = [...topPlayers].filter(p => p.runs > 200).sort((a, b) => b.strikeRate - a.strikeRate).slice(0, 5);
      return {
        type: "players",
        title: "Highest Strike Rates",
        data: fastestScorers,
        icon: <Sparkles className="text-red-500" size={20} />,
        summary: `${fastestScorers[0].name} had the highest strike rate at ${fastestScorers[0].strikeRate}.`
      };
    }

    // Team performance queries
    if (query.includes("team") || query.includes("wins") || query.includes("points") || query.includes("table")) {
      if (query.includes("most wins")) {
        const winningTeams = [...teams].sort((a, b) => b.wins - a.wins).slice(0, 5);
        return {
          type: "teams",
          title: "Teams with Most Wins",
          data: winningTeams,
          icon: <Trophy className="text-yellow-500" size={20} />,
          summary: `${winningTeams[0].shortName} had the most wins (${winningTeams[0].wins}) in the league stage.`
        };
      }
      const sortedTeams = [...teams].sort((a, b) => b.points - a.points);
      return {
        type: "teams",
        title: "IPL 2025 Points Table",
        data: sortedTeams,
        icon: <TrendingUp className="text-blue-500" size={20} />,
        summary: `${sortedTeams[0].shortName} topped the table with ${sortedTeams[0].points} points.`
      };
    }

    // Match-related queries
    if (query.includes("final") || query.includes("match") || query.includes("result")) {
      if (query.includes("final")) {
        const finalMatch = recentMatches.find(m => m.stage === "Final");
        return {
          type: "matches",
          title: "IPL 2025 Final",
          data: finalMatch ? [finalMatch] : [],
          icon: <Crown className="text-gold-500" size={20} />,
          summary: "RCB defeated PBKS by 6 runs in a thrilling final at Narendra Modi Stadium."
        };
      }
      return {
        type: "matches",
        title: "Recent Matches",
        data: recentMatches.slice(0, 5),
        icon: <Trophy className="text-purple-500" size={20} />,
        summary: "Latest match results from IPL 2025 including playoffs and final."
      };
    }

    // Venue queries
    if (query.includes("venue") || query.includes("stadium") || query.includes("ground")) {
      if (query.includes("highest score") || query.includes("best")) {
        const topVenues = [...venues].sort((a, b) => b.avgScore - a.avgScore);
        return {
          type: "venues",
          title: "Highest Scoring Venues",
          data: topVenues,
          icon: <MapPin className="text-indigo-500" size={20} />,
          summary: `${topVenues[0].name} had the highest average score of ${topVenues[0].avgScore}.`
        };
      }
      return {
        type: "venues",
        title: "Venue Statistics",
        data: venues,
        icon: <MapPin className="text-indigo-500" size={20} />,
        summary: "Complete venue statistics including matches played and average scores."
      };
    }

    // Awards queries
    if (query.includes("award") || query.includes("mvp") || query.includes("recognition")) {
      return {
        type: "awards",
        title: "IPL 2025 Awards",
        data: awards,
        icon: <Trophy className="text-yellow-600" size={20} />,
        summary: "All major awards and recognitions from IPL 2025 season."
      };
    }

    // Default comprehensive stats
    return {
      type: "stats",
      title: "IPL 2025 Quick Stats",
      data: [
        { label: "Champion", value: "Royal Challengers Bengaluru" },
        { label: "Orange Cap", value: "Sai Sudharsan (759 runs)" },
        { label: "Purple Cap", value: "Prasidh Krishna (25 wickets)" },
        { label: "Most Expensive Buy", value: "Rishabh Pant (₹27 cr)" },
        { label: "Final Margin", value: "6 runs" },
        { label: "Total Venues", value: "13 stadiums" }
      ],
      icon: <TrendingUp className="text-blue-500" size={20} />,
      summary: "Key highlights and statistics from the IPL 2025 season."
    };
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    
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

    return (
      <div>
        {results.summary && (
          <div className="mb-4 p-4 bg-blue-600/20 rounded-lg border border-blue-500/30">
            <p className="text-blue-200 font-medium">{results.summary}</p>
          </div>
        )}
        
        {(() => {
          switch (results.type) {
            case "teams":
            case "comparison":
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.data.map((team: any) => (
                    <div key={team.id} className="bg-slate-700/40 p-4 rounded-lg border border-slate-500/30">
                      <div className="flex items-center gap-3 mb-3">
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
                      {team.auctionSpend && (
                        <div className="mt-2 text-center">
                          <div className="text-sm text-slate-300">Auction: ₹{team.auctionSpend} cr</div>
                        </div>
                      )}
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
                        {player.wickets > 0 && (
                          <>
                            <div>
                              <div className="text-lg font-bold text-purple-400">{player.wickets}</div>
                              <div className="text-xs text-slate-400">Wickets</div>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-green-400">{player.average}</div>
                              <div className="text-xs text-slate-400">Avg</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              );

            case "auction":
              return (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {results.data.map((auction: any, index: number) => (
                    <div key={index} className="bg-slate-700/40 p-4 rounded-lg border border-slate-500/30">
                      <div className="mb-3">
                        <h3 className="font-semibold text-white">{auction.player}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">{auction.team}</Badge>
                          {auction.isRecord && <Badge className="text-xs bg-red-600">Record</Badge>}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">₹{auction.price} cr</div>
                        {auction.age && <div className="text-sm text-slate-300">Age: {auction.age}</div>}
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
                      <div className="text-sm text-slate-400 mt-1">
                        {match.team1Score} vs {match.team2Score}
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {results.data.map((stat: any, index: number) => (
                    <div key={index} className="bg-slate-700/40 p-4 rounded-lg border border-slate-500/30 text-center">
                      <div className="text-sm text-slate-300 mb-1">{stat.label}</div>
                      <div className="text-lg font-bold text-blue-400">{stat.value}</div>
                    </div>
                  ))}
                </div>
              );

            default:
              return null;
          }
        })()}
      </div>
    );
  };

  return (
    <Card className="shadow-xl bg-slate-800/60 backdrop-blur-md border-slate-600/30 mb-8">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
          <Sparkles className="text-purple-400" size={24} />
          Ask Your Data
          <Badge variant="outline" className="ml-2 text-xs">
            AI-Powered Q&A
          </Badge>
        </CardTitle>
        <p className="text-sm text-slate-300">
          Ask questions about IPL 2025 - teams, players, matches, auction, awards, and more
        </p>
      </CardHeader>
      <CardContent>
        {/* Search Input */}
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <Input
              type="text"
              placeholder="Ask about IPL 2025... e.g., 'Who won IPL 2025?' or 'Show me top run scorers'"
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
          <h4 className="text-sm font-semibold text-slate-300 mb-2">Try asking:</h4>
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
            <p>Try asking about champions, players, matches, venues, auction, or awards</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NaturalLanguageQuery;
