
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { teams } from "@/data/iplData";
import { Trophy, TrendingUp, TrendingDown, Target, Award, Users } from "lucide-react";

const PictorialPointsTable = () => {
  const sortedTeams = [...teams].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    return b.nrr - a.nrr;
  });

  const getPositionColor = (position: number) => {
    if (position === 1) return "#FFD700";
    if (position <= 4) return "#00D4AA";
    if (position <= 6) return "#4ECDC4";
    return "#FF6B6B";
  };

  const getPositionIcon = (position: number) => {
    if (position === 1) return <Trophy className="text-yellow-500" size={24} />;
    if (position <= 4) return <TrendingUp className="text-green-500" size={20} />;
    return <TrendingDown className="text-gray-400" size={20} />;
  };

  const getStatusBadge = (position: number) => {
    if (position === 1) return { text: "🏆 Champions", bg: "bg-gradient-to-r from-yellow-400 to-orange-500", color: "text-white" };
    if (position <= 4) return { text: "✅ Qualified", bg: "bg-gradient-to-r from-green-400 to-emerald-500", color: "text-white" };
    if (position <= 6) return { text: "⚡ Contenders", bg: "bg-gradient-to-r from-blue-400 to-indigo-500", color: "text-white" };
    return { text: "❌ Eliminated", bg: "bg-gradient-to-r from-gray-400 to-gray-500", color: "text-white" };
  };

  return (
    <div className="space-y-6">
      {/* Championship Visual Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 border-yellow-400/30">
          <CardContent className="flex items-center justify-center p-6">
            <div className="text-center">
              <Trophy className="mx-auto mb-2 text-yellow-500" size={32} />
              <div className="text-2xl font-bold text-yellow-600">1</div>
              <div className="text-sm text-gray-600">Champion</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-400/20 to-emerald-500/20 border-green-400/30">
          <CardContent className="flex items-center justify-center p-6">
            <div className="text-center">
              <Target className="mx-auto mb-2 text-green-500" size={32} />
              <div className="text-2xl font-bold text-green-600">4</div>
              <div className="text-sm text-gray-600">Qualified</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-blue-400/20 to-indigo-500/20 border-blue-400/30">
          <CardContent className="flex items-center justify-center p-6">
            <div className="text-center">
              <Award className="mx-auto mb-2 text-blue-500" size={32} />
              <div className="text-2xl font-bold text-blue-600">2</div>
              <div className="text-sm text-gray-600">Contenders</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-gray-400/20 to-gray-500/20 border-gray-400/30">
          <CardContent className="flex items-center justify-center p-6">
            <div className="text-center">
              <Users className="mx-auto mb-2 text-gray-500" size={32} />
              <div className="text-2xl font-bold text-gray-600">3</div>
              <div className="text-sm text-gray-600">Eliminated</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Visual Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedTeams.map((team, index) => {
          const position = index + 1;
          const status = getStatusBadge(position);
          const pointsPercentage = (team.points / Math.max(...teams.map(t => t.points))) * 100;
          
          return (
            <Card key={team.id} className="relative overflow-hidden hover:scale-105 transition-transform shadow-xl">
              {/* Position Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="flex items-center gap-2 bg-white/90 rounded-full px-3 py-1 shadow-lg">
                  {getPositionIcon(position)}
                  <span className="font-bold text-lg">#{position}</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className={`${status.bg} ${status.color} rounded-full px-3 py-1 text-xs font-bold shadow-lg`}>
                  {status.text}
                </div>
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center justify-center mb-4">
                  <Avatar className="w-20 h-20 ring-4 ring-white shadow-lg">
                    <AvatarImage 
                      src={team.logoUrl} 
                      alt={`${team.name} logo`}
                      className="object-contain p-1"
                    />
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      {team.logo}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-center text-xl font-bold">{team.name}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Points Visualization */}
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-600 mb-2">{team.points}</div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${pointsPercentage}%`,
                        backgroundColor: getPositionColor(position)
                      }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Points Progress</div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-green-600">{team.wins}</div>
                    <div className="text-xs text-gray-600">Wins</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <div className="text-lg font-bold text-red-600">{team.losses}</div>
                    <div className="text-xs text-gray-600">Losses</div>
                  </div>
                  <div className={`rounded-lg p-3 ${team.nrr >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
                    <div className={`text-lg font-bold ${team.nrr >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {team.nrr >= 0 ? '+' : ''}{team.nrr.toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-600">NRR</div>
                  </div>
                </div>

                {/* Win Percentage Circle */}
                <div className="flex items-center justify-center">
                  <div className="relative w-16 h-16">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke={getPositionColor(position)}
                        strokeWidth="2"
                        strokeDasharray={`${(team.wins / team.matches) * 100}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold">{Math.round((team.wins / team.matches) * 100)}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tournament Summary Infographic */}
      <Card className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-300/30">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">IPL 2025 Tournament Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600">74</div>
              <div className="text-sm text-gray-600">Total Matches</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">10</div>
              <div className="text-sm text-gray-600">Teams</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">{Math.max(...teams.map(t => t.points))}</div>
              <div className="text-sm text-gray-600">Highest Points</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">₹20cr</div>
              <div className="text-sm text-gray-600">Prize Money</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PictorialPointsTable;
