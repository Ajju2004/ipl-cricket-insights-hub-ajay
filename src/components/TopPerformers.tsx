
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { topPlayers, teams } from "@/data/iplData";
import { TrendingUp, Target, Star, Crown, Grid3X3, BarChart3 } from "lucide-react";
import { useState } from "react";
import PictorialTopPerformers from "./PictorialTopPerformers";
import DrillThroughModal from "./DrillThroughModal";

interface DrillThroughData {
  type: "team" | "player" | "match";
  id: string;
  title: string;
}

const TopPerformers = () => {
  const [viewMode, setViewMode] = useState<"pictorial" | "table">("pictorial");
  const [drillThroughData, setDrillThroughData] = useState<DrillThroughData | null>(null);

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

  const handlePlayerClick = (player: typeof topPlayers[0]) => {
    setDrillThroughData({
      type: "player",
      id: player.id,
      title: player.name
    });
  };

  return (
    <>
      <Card className="shadow-xl bg-white/95 dark:bg-background">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            ⭐ Top Performers IPL 2025
            <div className="ml-auto flex items-center gap-2">
              <Button
                onClick={() => setViewMode("pictorial")}
                variant={viewMode === "pictorial" ? "default" : "outline"}
                size="sm"
                className="font-semibold"
              >
                <Grid3X3 size={16} className="mr-1" />
                Pictorial
              </Button>
              <Button
                onClick={() => setViewMode("table")}
                variant={viewMode === "table" ? "default" : "outline"}
                size="sm"
                className="font-semibold"
              >
                <BarChart3 size={16} className="mr-1" />
                Table
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {viewMode === "pictorial" ? (
            <PictorialTopPerformers />
          ) : (
            <Tabs defaultValue="batsmen" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="batsmen" className="flex items-center gap-2">
                  <TrendingUp size={16} />
                  Batsmen
                </TabsTrigger>
                <TabsTrigger value="bowlers" className="flex items-center gap-2">
                  <Target size={16} />
                  Bowlers
                </TabsTrigger>
                <TabsTrigger value="mvp" className="flex items-center gap-2">
                  <Crown size={16} />
                  MVP Race
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="batsmen" className="space-y-4">
                {topBatsmen.map((player, index) => {
                  const teamLogo = getTeamLogo(player.team);
                  return (
                    <div 
                      key={player.id} 
                      className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
                      onClick={() => handlePlayerClick(player)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${index === 0 ? 'bg-orange-500' : 'bg-blue-500'} text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                          {index === 0 ? '🧡' : index + 1}
                        </div>
                        <Avatar className="w-10 h-10">
                          <AvatarImage 
                            src={teamLogo?.startsWith('/') ? teamLogo : undefined} 
                            alt={`${player.team} logo`}
                            className="object-contain p-1"
                          />
                          <AvatarFallback className="text-sm bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                            {teamLogo?.startsWith('/') ? player.team : teamLogo}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                            {player.name}
                            {index === 0 && <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Orange Cap</span>}
                            {player.isExpensive && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">₹27cr</span>}
                            {player.isYoungest && <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">13 yrs</span>}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{player.team} • SR: {player.strikeRate}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-orange-600">{player.runs}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">runs • Avg: {player.average}</div>
                      </div>
                    </div>
                  );
                })}
              </TabsContent>
              
              <TabsContent value="bowlers" className="space-y-4">
                {topBowlers.map((player, index) => {
                  const teamLogo = getTeamLogo(player.team);
                  return (
                    <div 
                      key={player.id} 
                      className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
                      onClick={() => handlePlayerClick(player)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${index === 0 ? 'bg-purple-500' : 'bg-green-500'} text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                          {index === 0 ? '💜' : index + 1}
                        </div>
                        <Avatar className="w-10 h-10">
                          <AvatarImage 
                            src={teamLogo?.startsWith('/') ? teamLogo : undefined} 
                            alt={`${player.team} logo`}
                            className="object-contain p-1"
                          />
                          <AvatarFallback className="text-sm bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                            {teamLogo?.startsWith('/') ? player.team : teamLogo}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                            {player.name}
                            {index === 0 && <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Purple Cap</span>}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{player.team} • Avg: {player.average}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-red-600">{player.wickets}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">wickets</div>
                      </div>
                    </div>
                  );
                })}
              </TabsContent>

              <TabsContent value="mvp" className="space-y-4">
                {mvpPlayers.map((player, index) => {
                  const teamLogo = getTeamLogo(player.team);
                  return (
                    <div 
                      key={player.id} 
                      className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-lg cursor-pointer hover:scale-[1.02] transition-transform"
                      onClick={() => handlePlayerClick(player)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${index === 0 ? 'bg-yellow-500' : 'bg-amber-500'} text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                          {index === 0 ? '👑' : index + 1}
                        </div>
                        <Avatar className="w-10 h-10">
                          <AvatarImage 
                            src={teamLogo?.startsWith('/') ? teamLogo : undefined} 
                            alt={`${player.team} logo`}
                            className="object-contain p-1"
                          />
                          <AvatarFallback className="text-sm bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                            {teamLogo?.startsWith('/') ? player.team : teamLogo}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                            {player.name}
                            {index === 0 && <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">MVP Winner</span>}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{player.team} • {player.runs} runs, {player.wickets} wickets</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-purple-600">{player.mvpPoints}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">MVP points</div>
                      </div>
                    </div>
                  );
                })}
              </TabsContent>
            </Tabs>
          )}
        </CardContent>
      </Card>

      <DrillThroughModal 
        data={drillThroughData}
        onClose={() => setDrillThroughData(null)}
      />
    </>
  );
};

export default TopPerformers;
