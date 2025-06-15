
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
      <Card className="shadow-2xl bg-slate-800/60 backdrop-blur-xl border-slate-500/40">
        <CardHeader className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-b border-slate-500/30">
          <CardTitle className="text-2xl font-black text-white flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-2xl">
              💰
            </div>
            IPL 2025 Mega Auction Highlights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 p-8">
          {/* Record Purchases */}
          <div>
            <h3 className="font-black text-2xl mb-6 flex items-center gap-3 text-white">
              <TrendingUp className="text-green-400" size={24} />
              Record Purchases
            </h3>
            <div className="space-y-4">
              {recordBuys.map((player, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center p-6 bg-gradient-to-r from-yellow-900/40 to-orange-900/40 rounded-xl border border-yellow-500/40 cursor-pointer hover:scale-[1.02] transition-all duration-300 backdrop-blur-md shadow-xl"
                  onClick={() => handlePlayerClick(player.player, player.team)}
                >
                  <div>
                    <div className="font-black text-xl text-white drop-shadow-lg">{player.player}</div>
                    <div className="text-base text-slate-200 font-semibold">{player.team}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-green-400 drop-shadow-lg">₹{player.price} cr</div>
                    {index === 0 && <div className="text-sm text-red-400 font-bold">Record Breaking!</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Youngest Player */}
          {youngestPlayer && (
            <div>
              <h3 className="font-black text-2xl mb-6 flex items-center gap-3 text-white">
                <Users className="text-blue-400" size={24} />
                Youngest Player
              </h3>
              <div 
                className="p-6 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-xl border border-blue-500/40 cursor-pointer hover:scale-[1.02] transition-all duration-300 backdrop-blur-md shadow-xl"
                onClick={() => handlePlayerClick(youngestPlayer.player, youngestPlayer.team)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-black text-2xl text-white drop-shadow-lg">{youngestPlayer.player}</div>
                    <div className="text-base text-slate-200 font-semibold">{youngestPlayer.team} • {youngestPlayer.age} years old</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-blue-400 drop-shadow-lg">₹{youngestPlayer.price} cr</div>
                    <div className="text-sm text-purple-400 font-bold">Historic Young Buy!</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Top Auction Spends by Team */}
          <div>
            <h3 className="font-black text-2xl mb-6 flex items-center gap-3 text-white">
              <DollarSign className="text-purple-400" size={24} />
              Top Team Auction Spends
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teams.slice(0, 6).map((team) => (
                <div 
                  key={team.id} 
                  className="flex justify-between items-center p-6 bg-slate-700/60 rounded-xl cursor-pointer hover:scale-[1.02] transition-all duration-300 backdrop-blur-md border border-slate-500/40 shadow-xl"
                  onClick={() => handleTeamClick(team)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{team.logo}</span>
                    <span className="font-black text-lg text-white">{team.shortName}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-xl text-white drop-shadow-lg">₹{team.auctionSpend} cr</div>
                    <div className="text-sm text-slate-300 font-semibold">Remaining: ₹{team.remainingPurse} cr</div>
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
