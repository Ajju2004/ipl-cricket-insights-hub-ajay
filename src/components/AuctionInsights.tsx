
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { auctionHighlights, teams } from "@/data/iplData";
import { DollarSign, TrendingUp, Users } from "lucide-react";

const AuctionInsights = () => {
  const recordBuys = auctionHighlights.filter(player => player.isRecord);
  const youngestPlayer = auctionHighlights.find(player => player.age);
  
  return (
    <Card className="shadow-xl bg-white/95 dark:bg-background">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          💰 IPL 2025 Mega Auction Highlights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Record Purchases */}
        <div>
          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <TrendingUp className="text-green-600" size={20} />
            Record Purchases
          </h3>
          <div className="space-y-3">
            {recordBuys.map((player, index) => (
              <div key={index} className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                <div>
                  <div className="font-semibold text-gray-800 dark:text-white">{player.player}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{player.team}</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-green-600">₹{player.price} cr</div>
                  {index === 0 && <div className="text-xs text-red-500 font-medium">Record Breaking!</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Youngest Player */}
        {youngestPlayer && (
          <div>
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Users className="text-blue-600" size={20} />
              Youngest Player
            </h3>
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-lg text-gray-800 dark:text-white">{youngestPlayer.player}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{youngestPlayer.team} • {youngestPlayer.age} years old</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">₹{youngestPlayer.price} cr</div>
                  <div className="text-xs text-purple-600 font-medium">Historic Young Buy!</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Top Auction Spends by Team */}
        <div>
          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <DollarSign className="text-purple-600" size={20} />
            Top Team Auction Spends
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {teams.slice(0, 6).map((team) => (
              <div key={team.id} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{team.logo}</span>
                  <span className="font-medium text-gray-800 dark:text-white">{team.shortName}</span>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-800 dark:text-white">₹{team.auctionSpend} cr</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Remaining: ₹{team.remainingPurse} cr</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuctionInsights;

