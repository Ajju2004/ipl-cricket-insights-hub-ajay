import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { topPlayers, teams } from "@/data/iplData";
import { Crown, Target, TrendingUp, Star, Zap, Award } from "lucide-react";

const PictorialTopPerformers = () => {
  const topBatsmen = topPlayers
    .filter(player => player.role === "Batsman" || player.role === "Wicket-keeper" || player.role === "All-rounder")
    .sort((a, b) => b.runs - a.runs)
    .slice(0, 6);

  const topBowlers = topPlayers
    .filter(player => player.role === "Bowler")
    .sort((a, b) => b.wickets - a.wickets)
    .slice(0, 5);

  const mvpPlayers = topPlayers
    .filter(player => player.mvpPoints)
    .sort((a, b) => (b.mvpPoints || 0) - (a.mvpPoints || 0))
    .slice(0, 5);

  const getTeamLogo = (teamShortName: string) => {
    const team = teams.find(t => t.shortName === teamShortName);
    return team?.logoUrl || team?.logo;
  };

  const PlayerCard = ({ player, index, type, maxValue }: any) => {
    const isFirst = index === 0;
    const percentage = type === "runs" ? (player.runs / maxValue) * 100 : 
                     type === "wickets" ? (player.wickets / maxValue) * 100 :
                     ((player.mvpPoints || 0) / maxValue) * 100;

    const getCardColor = () => {
      if (type === "runs") return isFirst ? "from-orange-400 to-red-500" : "from-blue-400 to-indigo-500";
      if (type === "wickets") return isFirst ? "from-purple-400 to-pink-500" : "from-green-400 to-emerald-500";
      return isFirst ? "from-yellow-400 to-amber-500" : "from-cyan-400 to-blue-500";
    };

    const getIcon = () => {
      if (type === "runs") return isFirst ? <Crown className="text-orange-500" size={24} /> : <TrendingUp className="text-blue-500" size={20} />;
      if (type === "wickets") return isFirst ? <Target className="text-purple-500" size={24} /> : <Zap className="text-green-500" size={20} />;
      return isFirst ? <Award className="text-yellow-500" size={24} /> : <Star className="text-cyan-500" size={20} />;
    };

    const teamLogo = getTeamLogo(player.team);

    return (
      <Card className={`relative overflow-hidden bg-gradient-to-br ${getCardColor()}/10 border-l-4 ${isFirst ? 'border-yellow-400' : 'border-gray-300'} hover:scale-105 transition-transform`}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <Avatar className="w-12 h-12 ring-2 ring-white shadow-lg">
              <AvatarImage 
                src={teamLogo?.startsWith('/') ? teamLogo : undefined} 
                alt={`${player.team} logo`}
                className="object-contain p-1"
              />
              <AvatarFallback className="text-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                {teamLogo?.startsWith('/') ? player.team : teamLogo}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-bold text-lg">{player.name}</div>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                {player.team}
                {isFirst && (
                  <span className={`text-xs px-2 py-1 rounded ${
                    type === "runs" ? "bg-orange-100 text-orange-700" :
                    type === "wickets" ? "bg-purple-100 text-purple-700" :
                    "bg-yellow-100 text-yellow-700"
                  }`}>
                    {type === "runs" ? "Orange Cap" : type === "wickets" ? "Purple Cap" : "MVP Winner"}
                  </span>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className={`text-2xl font-bold ${
                type === "runs" ? "text-orange-600" :
                type === "wickets" ? "text-purple-600" :
                "text-yellow-600"
              }`}>
                {type === "runs" ? player.runs : type === "wickets" ? player.wickets : player.mvpPoints}
              </div>
              <div className="text-xs text-gray-500">
                {type === "runs" ? "runs" : type === "wickets" ? "wickets" : "points"}
              </div>
            </div>
          </div>

          {/* Performance Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 bg-gradient-to-r ${getCardColor()}`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
            {type === "runs" && (
              <>
                <div>Avg: {player.average}</div>
                <div>SR: {player.strikeRate}</div>
              </>
            )}
            {type === "wickets" && (
              <>
                <div>Avg: {player.average}</div>
                <div>Economy: {player.economy || "N/A"}</div>
              </>
            )}
            {type === "mvp" && (
              <>
                <div>{player.runs} runs</div>
                <div>{player.wickets} wickets</div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-8">
      {/* Top Batsmen Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
            🏏
          </div>
          <h2 className="text-2xl font-bold">Top Batsmen</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topBatsmen.map((player, index) => (
            <PlayerCard 
              key={player.id} 
              player={player} 
              index={index} 
              type="runs"
              maxValue={Math.max(...topBatsmen.map(p => p.runs))}
            />
          ))}
        </div>
      </div>

      {/* Top Bowlers Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            🎯
          </div>
          <h2 className="text-2xl font-bold">Top Bowlers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topBowlers.map((player, index) => (
            <PlayerCard 
              key={player.id} 
              player={player} 
              index={index} 
              type="wickets"
              maxValue={Math.max(...topBowlers.map(p => p.wickets))}
            />
          ))}
        </div>
      </div>

      {/* MVP Race Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center">
            👑
          </div>
          <h2 className="text-2xl font-bold">MVP Race</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mvpPlayers.map((player, index) => (
            <PlayerCard 
              key={player.id} 
              player={player} 
              index={index} 
              type="mvp"
              maxValue={Math.max(...mvpPlayers.map(p => p.mvpPoints || 0))}
            />
          ))}
        </div>
      </div>

      {/* Performance Summary */}
      <Card className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-300/30">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">IPL 2025 Performance Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600">{Math.max(...topBatsmen.map(p => p.runs))}</div>
              <div className="text-sm text-gray-600">Highest Runs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">{Math.max(...topBowlers.map(p => p.wickets))}</div>
              <div className="text-sm text-gray-600">Most Wickets</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">{Math.max(...topBatsmen.map(p => p.strikeRate)).toFixed(0)}</div>
              <div className="text-sm text-gray-600">Best Strike Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">{Math.max(...mvpPlayers.map(p => p.mvpPoints || 0))}</div>
              <div className="text-sm text-gray-600">MVP Points</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PictorialTopPerformers;
