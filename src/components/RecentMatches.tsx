import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { recentMatches } from "@/data/iplData";
import { Calendar, MapPin, Trophy, Star } from "lucide-react";

const RecentMatches = () => {
  return (
    <Card className="shadow-xl bg-white/95 dark:bg-background">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
          🏏 Key Matches & Playoffs
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentMatches.map((match) => (
          <div key={match.id} className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${
            match.stage === 'Final' ? 'border-yellow-300 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20' :
            match.stage.includes('Qualifier') || match.stage === 'Eliminator' ? 'border-purple-300 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20' :
            'border-gray-200 dark:border-gray-700'
          }`}>
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Calendar size={14} />
                {new Date(match.date).toLocaleDateString()}
                {match.stage !== 'League' && (
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full text-xs font-medium">
                    {match.stage}
                  </span>
                )}
                {match.isHighScoring && (
                  <Star size={14} className="text-orange-500" />
                )}
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
                {match.stage === 'Final' && (
                  <div className="text-xs font-bold text-yellow-600 mt-1">🏆 CHAMPIONS!</div>
                )}
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
