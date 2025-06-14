
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { recentMatches } from "@/data/iplData";
import { Calendar, MapPin, Trophy } from "lucide-react";

const RecentMatches = () => {
  return (
    <Card className="shadow-xl bg-white/95 dark:bg-background">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          🏏 Recent Matches
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentMatches.map((match) => (
          <div key={match.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Calendar size={14} />
                {new Date(match.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <MapPin size={14} />
                {match.venue}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-center">
                <div className="font-bold text-lg">{match.team1}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{match.team1Score}</div>
              </div>
              
              <div className="text-center">
                <div className="text-xs text-gray-500 dark:text-gray-400">VS</div>
                <div className="flex items-center justify-center gap-1 text-sm font-semibold text-green-600 mt-1">
                  <Trophy size={14} />
                  {match.winner} won
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{match.margin}</div>
              </div>
              
              <div className="text-center">
                <div className="font-bold text-lg">{match.team2}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{match.team2Score}</div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentMatches;
