
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { recentMatches } from "@/data/iplData";
import { Calendar, MapPin, Trophy, Star } from "lucide-react";

const RecentMatches = () => {
  return (
    <Card className="shadow-xl bg-slate-800/60 backdrop-blur-md border-slate-700/50">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
          🏏 Key Matches & Playoffs
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentMatches.map((match) => (
          <div key={match.id} className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${
            match.stage === 'Final' ? 'border-yellow-500/50 bg-gradient-to-r from-yellow-900/30 to-amber-900/30' :
            match.stage.includes('Qualifier') || match.stage === 'Eliminator' ? 'border-purple-500/50 bg-gradient-to-r from-purple-900/30 to-pink-900/30' :
            'border-slate-600/30 bg-slate-700/20'
          }`}>
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Calendar size={14} />
                {new Date(match.date).toLocaleDateString()}
                {match.stage !== 'League' && (
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs font-medium border border-purple-500/30">
                    {match.stage}
                  </span>
                )}
                {match.isHighScoring && (
                  <Star size={14} className="text-orange-400" />
                )}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <MapPin size={14} />
                {match.venue}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-center">
                <div className="font-bold text-lg text-white">{match.team1}</div>
                <div className="text-sm text-slate-300">{match.team1Score}</div>
              </div>
              
              <div className="text-center">
                <div className="text-xs text-slate-400">VS</div>
                <div className="flex items-center justify-center gap-1 text-sm font-semibold text-emerald-400 mt-1">
                  <Trophy size={14} />
                  {match.winner} won
                </div>
                <div className="text-xs text-slate-400">{match.margin}</div>
                {match.stage === 'Final' && (
                  <div className="text-xs font-bold text-yellow-400 mt-1">🏆 CHAMPIONS!</div>
                )}
              </div>
              
              <div className="text-center">
                <div className="font-bold text-lg text-white">{match.team2}</div>
                <div className="text-sm text-slate-300">{match.team2Score}</div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentMatches;
