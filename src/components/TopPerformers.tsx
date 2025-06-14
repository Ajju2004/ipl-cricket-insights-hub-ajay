
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { topPlayers } from "@/data/iplData";
import { TrendingUp, Target, Zap } from "lucide-react";

const TopPerformers = () => {
  const topBatsmen = topPlayers
    .filter(player => player.role === "Batsman" || player.role === "Wicket-keeper")
    .sort((a, b) => b.runs - a.runs)
    .slice(0, 5);

  const topBowlers = topPlayers
    .filter(player => player.role === "Bowler")
    .sort((a, b) => b.wickets - a.wickets)
    .slice(0, 5);

  return (
    <Card className="shadow-xl bg-white/95 dark:bg-background">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          ⭐ Top Performers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="batsmen" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="batsmen" className="flex items-center gap-2">
              <TrendingUp size={16} />
              Batsmen
            </TabsTrigger>
            <TabsTrigger value="bowlers" className="flex items-center gap-2">
              <Target size={16} />
              Bowlers
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="batsmen" className="space-y-4">
            {topBatsmen.map((player, index) => (
              <div key={player.id} className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white">{player.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{player.team}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg text-orange-600">{player.runs}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">runs</div>
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="bowlers" className="space-y-4">
            {topBowlers.map((player, index) => (
              <div key={player.id} className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white">{player.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{player.team}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg text-red-600">{player.wickets}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">wickets</div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TopPerformers;
