
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, BarChart3 } from "lucide-react";
import { teams, topPlayers, recentMatches } from "@/data/iplData";

interface DrillThroughData {
  type: "team" | "player" | "match";
  id: string;
  title: string;
}

interface DrillThroughModalProps {
  data: DrillThroughData | null;
  onClose: () => void;
}

const DrillThroughModal = ({ data, onClose }: DrillThroughModalProps) => {
  if (!data) return null;

  const getDetailedContent = () => {
    switch (data.type) {
      case "team":
        const team = teams.find(t => t.id === data.id);
        if (!team) return null;
        
        const teamPlayers = topPlayers.filter(p => p.team === team.shortName);
        const teamMatches = recentMatches.filter(m => m.team1 === team.shortName || m.team2 === team.shortName);
        
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{team.wins}</div>
                <div className="text-sm text-gray-600">Wins</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{team.losses}</div>
                <div className="text-sm text-gray-600">Losses</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{team.points}</div>
                <div className="text-sm text-gray-600">Points</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{team.nrr}</div>
                <div className="text-sm text-gray-600">Net RR</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Key Players</h4>
              <div className="space-y-2">
                {teamPlayers.slice(0, 5).map(player => (
                  <div key={player.id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="font-medium">{player.name}</span>
                    <span className="text-sm text-gray-600">{player.role} • {player.runs} runs</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Recent Performance</h4>
              <div className="space-y-2">
                {teamMatches.slice(0, 3).map(match => (
                  <div key={match.id} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{match.team1} vs {match.team2}</span>
                      <span className={`text-sm px-2 py-1 rounded ${
                        match.winner === team.shortName ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}>
                        {match.winner === team.shortName ? "Won" : "Lost"}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{match.venue} • {match.margin}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "player":
        const player = topPlayers.find(p => p.id === data.id);
        if (!player) return null;
        
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{player.runs}</div>
                <div className="text-sm text-gray-600">Total Runs</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{player.wickets}</div>
                <div className="text-sm text-gray-600">Wickets</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{player.average}</div>
                <div className="text-sm text-gray-600">Average</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{player.strikeRate}</div>
                <div className="text-sm text-gray-600">Strike Rate</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Player Details</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Team:</span>
                  <span className="font-medium">{player.team}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Role:</span>
                  <span className="font-medium">{player.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Auction Price:</span>
                  <span className="font-medium">₹{player.price} crore</span>
                </div>
                {player.fours && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fours:</span>
                    <span className="font-medium">{player.fours}</span>
                  </div>
                )}
                {player.sixes && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sixes:</span>
                    <span className="font-medium">{player.sixes}</span>
                  </div>
                )}
              </div>
            </div>

            {player.mvpPoints && (
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold text-yellow-800 mb-2">MVP Performance</h5>
                <div className="text-2xl font-bold text-yellow-600">{player.mvpPoints} points</div>
                <div className="text-sm text-yellow-700">Season MVP ranking eligible</div>
              </div>
            )}
          </div>
        );

      default:
        return <div>No detailed information available.</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full max-h-[90vh] overflow-auto bg-white shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-b">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <BarChart3 size={16} className="text-white" />
              </div>
              {data.title} - Detailed Analysis
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="text-gray-600">
                <ExternalLink size={16} />
                Export
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-600">
                <X size={16} />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {getDetailedContent()}
        </CardContent>
      </Card>
    </div>
  );
};

export default DrillThroughModal;
