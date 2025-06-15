
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { auctionHighlights, teams } from "@/data/iplData";
import { DollarSign, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import DrillThroughModal from "./DrillThroughModal";

interface DrillThroughData {
  type: "team" | "player" | "match";
  id: string;
  title: string;
}

const AuctionInsights = () => {
  const [drillThroughData, setDrillThroughData] = useState<DrillThroughData | null>(null);
  
  const recordBuys = auctionHighlights.filter(player => player.isRecord);
  const youngestPlayer = auctionHighlights.find(player => player.age);

  const handlePlayerClick = (playerName: string, team: string) => {
    setDrillThroughData({
      type: "player",
      id: `auction-${playerName.replace(/\s+/g, '-').toLowerCase()}`,
      title: `${playerName} - Auction Details`
    });
  };

  const handleTeamClick = (team: typeof teams[0]) => {
    setDrillThroughData({
      type: "team",
      id: team.id,
      title: `${team.name} - Auction Analysis`
    });
  };
  
  return (
    <>
      <Card className="shadow-xl bg-slate-800/60 backdrop-blur-md border-slate-700/50">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
            💰 IPL 2025 Mega Auction Highlights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Record Purchases */}
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-white">
              <TrendingUp className="text-green-400" size={20} />
              Record Purchases
            </h3>
            <div className="space-y-3">
              {recordBuys.map((player, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center p-3 bg-slate-800/70 backdrop-blur-sm rounded-lg border border-slate-600/50 cursor-pointer hover:bg-slate-700/80 transition-all duration-300"
                  onClick={() => handlePlayerClick(player.player, player.team)}
                >
                  <div>
                    <div className="font-semibold text-white">{player.player}</div>
                    <div className="text-sm text-slate-300">{player.team}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-400">₹{player.price} cr</div>
                    {index === 0 && <div className="text-xs text-red-400 font-medium">Record Breaking!</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Youngest Player */}
          {youngestPlayer && (
            <div>
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-white">
                <Users className="text-blue-400" size={20} />
                Youngest Player
              </h3>
              <div 
                className="p-4 bg-slate-800/70 backdrop-blur-sm rounded-lg border border-slate-600/50 cursor-pointer hover:bg-slate-700/80 transition-all duration-300"
                onClick={() => handlePlayerClick(youngestPlayer.player, youngestPlayer.team)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-lg text-white">{youngestPlayer.player}</div>
                    <div className="text-sm text-slate-300">{youngestPlayer.team} • {youngestPlayer.age} years old</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-400">₹{youngestPlayer.price} cr</div>
                    <div className="text-xs text-purple-400 font-medium">Historic Young Buy!</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Top Auction Spends by Team */}
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2 text-white">
              <DollarSign className="text-purple-400" size={20} />
              Top Team Auction Spends
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {teams.slice(0, 6).map((team) => (
                <div 
                  key={team.id} 
                  className="flex justify-between items-center p-3 bg-slate-800/60 backdrop-blur-sm rounded-lg border border-slate-600/40 cursor-pointer hover:bg-slate-700/70 transition-all duration-300"
                  onClick={() => handleTeamClick(team)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{team.logo}</span>
                    <span className="font-medium text-white">{team.shortName}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-white">₹{team.auctionSpend} cr</div>
                    <div className="text-xs text-slate-400">Remaining: ₹{team.remainingPurse} cr</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <DrillThroughModal 
        data={drillThroughData}
        onClose={() => setDrillThroughData(null)}
      />
    </>
  );
};

export default AuctionInsights;
